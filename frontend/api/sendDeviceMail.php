<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

error_reporting(0);
ini_set('display_errors', 0);

// Allow CORS (for Next.js frontend)
ob_clean();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Read JSON from frontend
$data = json_decode(file_get_contents("php://input"), true);

// Validate data
if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

// Extract form fields
$name = htmlspecialchars($data['name'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$company = htmlspecialchars($data['company'] ?? '');
$deviceType = htmlspecialchars($data['deviceType'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

// Init PHPMailer
$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contactform.regacats@gmail.com'; // Regacats Gmail
    $mail->Password = 'hmlp zpuj pwmc fukc'; // Gmail app password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Sender & Receiver
    $mail->setFrom('contactform.regacats@gmail.com', 'Regacats Device Inquiry');
    $mail->addAddress('contactform.regacats@gmail.com'); // Receiver same Gmail
    $mail->addAddress('kumaraxshit@gmail.com');
    $mail->addAddress('anuj@regacats.in');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Device Inquiry from $name";
    $mail->Body = "
        <h2>New Medical Device Inquiry</h2>
        <p><b>Name:</b> $name</p>
        <p><b>Email:</b> $email</p>
        <p><b>Phone:</b> $phone</p>
        <p><b>Company:</b> $company</p>
        <p><b>Device Type:</b> $deviceType</p>
        <p><b>Message:</b><br>$message</p>
        <hr>
        <p style='color:gray;font-size:12px;'>Form submitted via Regacats website (CDSCO Device Inquiry)</p>
    ";

    // Send mail
    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Failed to send email: {$mail->ErrorInfo}"]);
}

exit;
?>
