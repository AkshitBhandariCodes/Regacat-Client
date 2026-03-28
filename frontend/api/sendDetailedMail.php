<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ✅ Correct relative paths (assuming this file is in public_html/api/)
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// ✅ Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// ✅ Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

// ✅ Read JSON body safely
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

// ✅ Extract and sanitize inputs
$name = htmlspecialchars($data['name'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$company = htmlspecialchars($data['company'] ?? '');
$deviceType = htmlspecialchars($data['deviceType'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

if (!$name || !$email || !$phone) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // ✅ Gmail SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contactform.regacats@gmail.com'; // your Gmail
    $mail->Password = 'hmlpzpujpwmcfukc'; // your App Password (remove spaces!)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // ✅ From & To
    $mail->setFrom('contactform.regacats@gmail.com', 'Regacats Website Form');
    $mail->addAddress('contactform.regacats@gmail.com');

    // ✅ Email Body
    $mail->isHTML(true);
    $mail->Subject = "New Service Inquiry from $name";
    $mail->Body = "
        <h3>Service Inquiry Details</h3>
        <p><b>Name:</b> $name</p>
        <p><b>Email:</b> $email</p>
        <p><b>Phone:</b> $phone</p>
        <p><b>Company:</b> $company</p>
        <p><b>Device Type / Service:</b> $deviceType</p>
        <p><b>Message:</b> $message</p>
    ";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: " . $mail->ErrorInfo]);
}
?>
