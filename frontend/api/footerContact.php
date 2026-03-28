<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// ERROR DISPLAY (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

// Read JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($data['name'] ?? 'Quick Contact');
$email = htmlspecialchars($data['email'] ?? '');
$mobile = htmlspecialchars($data['mobile'] ?? 'N/A');
$service = htmlspecialchars($data['service'] ?? 'Quick Contact Form');
$message = htmlspecialchars($data['message'] ?? '');

if (empty($email) || empty($message)) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // SMTP CONFIG
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contactform.regacats@gmail.com';
    $mail->Password = 'hmlp zpuj pwmc fukc';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Who sends & receives
    $mail->setFrom('contactform.regacats@gmail.com', 'Footer Quick Contact');
    $mail->addAddress('contactform.regacats@gmail.com');
    $mail->addAddress('kumaraxshit@gmail.com');
    $mail->addAddress('anuj@regacats.in');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Quick Contact Inquiry";

    $mail->Body = "
        <h2>New Quick Contact Message</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Mobile:</strong> $mobile</p>
        <p><strong>Service:</strong> $service</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->AltBody = "
New Quick Contact Inquiry
Name: $name
Email: $email
Mobile: $mobile
Service: $service
Message: $message
    ";

    $mail->send();

    echo json_encode(["success" => true, "message" => "Message sent successfully"]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Failed to send: " . $mail->ErrorInfo]);
}
