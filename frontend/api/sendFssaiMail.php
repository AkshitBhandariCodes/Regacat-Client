<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files (adjust path as per your project)
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';


// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

// Extract and sanitize input
$name = htmlspecialchars($data['name'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$licenseType = htmlspecialchars($data['licenseType'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

if (empty($name) || empty($email) || empty($phone)) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // SMTP Setup
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contactform.regacats@gmail.com'; // Your Gmail
    $mail->Password = 'hmlp zpuj pwmc fukc'; // Your Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Sender & Receiver
    $mail->setFrom('contactform.regacats@gmail.com', 'Regacats FSSAI Form');
    $mail->addAddress('contactform.regacats@gmail.com'); // Receiver same Gmail

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New FSSAI Inquiry from $name";
    $mail->Body = "
        <h2>New FSSAI License Inquiry</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>License Type:</strong> $licenseType</p>
        <p><strong>Message:</strong> $message</p>
    ";

    $mail->AltBody = "New FSSAI Inquiry from $name\nEmail: $email\nPhone: $phone\nLicense Type: $licenseType\nMessage: $message";

    // Send mail
    $mail->send();

    echo json_encode(["success" => true, "message" => "Email sent successfully"]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Failed to send email: " . $mail->ErrorInfo]);
}
?>