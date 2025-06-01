<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case "POST":
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $messageContent = $params->message ?? '';

        $recipient = 'alkan.tetik.at@gmail.com';
        $subject = "Contact From <$email>";
        $message = "From: $name<br>$messageContent";

        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            'From: noreply@alkan-tetik.at'
        ];

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        exit;

    default:
        header("Allow: POST", true, 405);
        exit;
}
