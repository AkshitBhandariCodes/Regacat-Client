<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

$name = htmlspecialchars($data['name'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$service = htmlspecialchars($data['service'] ?? ($data['licenseType'] ?? ($data['deviceType'] ?? 'General Inquiry')));
$message = htmlspecialchars($data['message'] ?? '');
$company = htmlspecialchars($data['company'] ?? '');

if (empty($name) || empty($email) || empty($phone)) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contactform.regacats@gmail.com';
    $mail->Password = 'hmlp zpuj pwmc fukc';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('contactform.regacats@gmail.com', 'Regacats Website Form');
    $mail->addAddress('contactform.regacats@gmail.com');
    $mail->addAddress('kumaraxshit@gmail.com');
    $mail->addAddress('anuj@regacats.in');

    $mail->isHTML(true);
    $mail->Subject = "New Website Inquiry from $name";
    $mail->Body = "
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Service / License Type:</strong> $service</p>
        <p><strong>Message:</strong> $message</p>
    ";

    $mail->AltBody = "New inquiry from $name\nEmail: $email\nPhone: $phone\nCompany: $company\nService: $service\nMessage: $message";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Failed to send email: " . $mail->ErrorInfo]);
}
?>
