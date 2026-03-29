import "dotenv/config";
import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.MAIL_API_PORT || 8787);

const allowedOrigins = [
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "https://regacats.in",
  "https://www.regacats.in",
  ...(process.env.MAIL_ALLOWED_ORIGINS ? process.env.MAIL_ALLOWED_ORIGINS.split(",") : []),
].map((origin) => origin.trim());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO_PRIMARY"];
const missing = requiredEnv.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(`Missing required env vars: ${missing.join(", ")}`);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT || 587) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sanitize = (value) => String(value ?? "").trim();

const parseEmails = (...values) => {
  return values
    .flatMap((value) => String(value ?? "").split(","))
    .map((value) => value.trim())
    .filter(Boolean);
};

const getRecipients = () => {
  const to = parseEmails(process.env.MAIL_TO_PRIMARY);
  const cc = parseEmails(
    process.env.MAIL_TO_SECONDARY || "kumaraxshit@gmail.com",
    process.env.MAIL_TO_TERTIARY || "anuj@regacats.in",
    process.env.MAIL_TO_CC
  );

  return { to, cc };
};

const SOURCE_CONFIG = {
  commonLead: { source: "Home / Global Lead Form", subjectPrefix: "New Lead" },
  contactForm: { source: "Contact Form", subjectPrefix: "New Contact Form Inquiry" },
  footerContact: { source: "Footer Quick Contact", subjectPrefix: "New Quick Contact Inquiry" },
  sendDetailedMail: { source: "Detailed Service Form", subjectPrefix: "New Service Inquiry" },
  sendDeviceMail: { source: "Drug / Device / IAA Form", subjectPrefix: "New Device Inquiry" },
  sendFssaiMail: { source: "FSSAI Service Form", subjectPrefix: "New FSSAI Inquiry" },
  sendMail: { source: "Legacy Service Form", subjectPrefix: "New Website Inquiry" },
};

async function sendLeadMail({
  source = "Website Form",
  subjectPrefix = "New Website Inquiry",
  name,
  email,
  phone,
  service,
  licenseType,
  deviceType,
  company,
  message,
}) {
  const leadName = sanitize(name);
  const leadEmail = sanitize(email);
  const leadPhone = sanitize(phone);
  const leadService = sanitize(service) || sanitize(licenseType) || sanitize(deviceType) || "General Inquiry";
  const leadCompany = sanitize(company);
  const leadMessage = sanitize(message);

  if (!leadName || !leadEmail || !leadPhone) {
    return { ok: false, message: "Missing required fields" };
  }

  const subject = `${subjectPrefix} from ${leadName}`;
  const recipients = getRecipients();

  if (recipients.to.length === 0) {
    return { ok: false, message: "No primary recipient configured" };
  }

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: recipients.to,
    cc: recipients.cc.length ? recipients.cc : undefined,
    subject,
    html: `
      <h2>${source}</h2>
      <p><strong>Name:</strong> ${leadName}</p>
      <p><strong>Email:</strong> ${leadEmail}</p>
      <p><strong>Phone:</strong> ${leadPhone}</p>
      <p><strong>Company:</strong> ${leadCompany || "N/A"}</p>
      <p><strong>Service / License Type:</strong> ${leadService}</p>
      <p><strong>Message:</strong> ${leadMessage || "N/A"}</p>
    `,
    text: [
      `${source}`,
      `Name: ${leadName}`,
      `Email: ${leadEmail}`,
      `Phone: ${leadPhone}`,
      `Company: ${leadCompany || "N/A"}`,
      `Service/License: ${leadService}`,
      `Message: ${leadMessage || "N/A"}`,
    ].join("\n"),
  });

  return { ok: true };
}

function createLeadRoute(path, config) {
  app.options(path, (_req, res) => res.sendStatus(204));
  app.post(path, async (req, res) => {
    try {
      const payload = req.body || {};
      const result = await sendLeadMail({ ...config, ...payload });

      if (!result.ok) {
        res.status(400).json({ success: false, message: result.message });
        return;
      }

      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error(`Mail route ${path} failed:`, error);
      res.status(500).json({
        success: false,
        message: "Failed to send email",
        error: sanitize(error?.message || "Unknown mail error"),
      });
    }
  });
}

app.options("/api/lead", (_req, res) => res.sendStatus(204));
app.post("/api/lead", async (req, res) => {
  try {
    const sourceKey = sanitize(req.query?.source) || "commonLead";
    const config = SOURCE_CONFIG[sourceKey] || SOURCE_CONFIG.commonLead;
    const payload = req.body || {};
    const result = await sendLeadMail({ ...config, ...payload });

    if (!result.ok) {
      res.status(400).json({ success: false, message: result.message });
      return;
    }

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Mail route /api/lead failed:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: sanitize(error?.message || "Unknown mail error"),
    });
  }
});

createLeadRoute("/api/commonLead.php", {
  source: "Home / Global Lead Form",
  subjectPrefix: "New Lead",
});

createLeadRoute("/api/contactForm.php", {
  source: "Contact Form",
  subjectPrefix: "New Contact Form Inquiry",
});

createLeadRoute("/api/footerContact.php", {
  source: "Footer Quick Contact",
  subjectPrefix: "New Quick Contact Inquiry",
});

createLeadRoute("/api/sendDetailedMail.php", {
  source: "Detailed Service Form",
  subjectPrefix: "New Service Inquiry",
});

createLeadRoute("/api/sendDeviceMail.php", {
  source: "Drug / Device / IAA Form",
  subjectPrefix: "New Device Inquiry",
});

createLeadRoute("/api/sendFssaiMail.php", {
  source: "FSSAI Service Form",
  subjectPrefix: "New FSSAI Inquiry",
});

createLeadRoute("/api/sendMail.php", {
  source: "Legacy Service Form",
  subjectPrefix: "New Website Inquiry",
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "mail-api" });
});

app.listen(port, () => {
  console.log(`Mail API running on port ${port}`);
});
