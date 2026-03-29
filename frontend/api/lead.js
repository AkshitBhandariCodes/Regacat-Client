import nodemailer from "nodemailer";

const SOURCE_CONFIG = {
  commonLead: { source: "Home / Global Lead Form", subjectPrefix: "New Lead" },
  contactForm: { source: "Contact Form", subjectPrefix: "New Contact Form Inquiry" },
  footerContact: { source: "Footer Quick Contact", subjectPrefix: "New Quick Contact Inquiry" },
  sendDetailedMail: { source: "Detailed Service Form", subjectPrefix: "New Service Inquiry" },
  sendDeviceMail: { source: "Drug / Device / IAA Form", subjectPrefix: "New Device Inquiry" },
  sendFssaiMail: { source: "FSSAI Service Form", subjectPrefix: "New FSSAI Inquiry" },
  sendMail: { source: "Legacy Service Form", subjectPrefix: "New Website Inquiry" },
};

const sanitize = (value) => String(value ?? "").trim();

const parseEmails = (...values) => {
  return values
    .flatMap((value) => String(value ?? "").split(","))
    .map((value) => value.trim())
    .filter(Boolean);
};

const getRecipients = () => {
  const to = parseEmails(process.env.MAIL_TO_PRIMARY);
  const cc = parseEmails(process.env.MAIL_TO_SECONDARY, process.env.MAIL_TO_TERTIARY, process.env.MAIL_TO_CC);

  return { to, cc };
};

const getTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const setCorsHeaders = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const missing = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO_PRIMARY"].filter(
    (key) => !process.env[key]
  );

  if (missing.length > 0) {
    res.status(500).json({
      success: false,
      message: `Missing environment variables: ${missing.join(", ")}`,
    });
    return;
  }

  const sourceKey = sanitize(req.query?.source) || "commonLead";
  const config = SOURCE_CONFIG[sourceKey] || SOURCE_CONFIG.commonLead;
  let payload = {};
  try {
    payload = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch {
    res.status(400).json({ success: false, message: "Invalid JSON payload" });
    return;
  }

  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const phone = sanitize(payload.phone || payload.mobile);
  const service = sanitize(payload.service || payload.licenseType || payload.deviceType) || "General Inquiry";
  const company = sanitize(payload.company);
  const message = sanitize(payload.message);

  if (!name || !email || !phone) {
    res.status(400).json({ success: false, message: "Missing required fields" });
    return;
  }

  try {
    const transporter = getTransporter();
    const recipients = getRecipients();

    if (recipients.to.length === 0) {
      res.status(500).json({ success: false, message: "No recipients configured" });
      return;
    }

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: recipients.to,
      cc: recipients.cc.length ? recipients.cc : undefined,
      subject: `${config.subjectPrefix} from ${name}`,
      html: `
        <h2>${config.source}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service / License Type:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
      text: [
        config.source,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company || "N/A"}`,
        `Service/License: ${service}`,
        `Message: ${message || "N/A"}`,
      ].join("\n"),
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Mail API error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: sanitize(error?.message || "Unknown mail error"),
    });
  }
}