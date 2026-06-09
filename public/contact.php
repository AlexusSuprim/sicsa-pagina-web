<?php
/**
 * Manejador del formulario de contacto — SICSA GROUP
 * Configurar TURNSTILE_SECRET_KEY en el servidor (cPanel / variables de entorno).
 */

header('Content-Type: application/json');

$allowedOrigins = [
    'https://sicsagroup.com.gt',
    'http://localhost:4321',
    'http://127.0.0.1:4321',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Configuración — reemplazar en producción
$turnstileSecret = getenv('TURNSTILE_SECRET_KEY') ?: 'REPLACE_WITH_TURNSTILE_SECRET_KEY';
$recipientEmail  = 'info@sicsagroup.com.gt';
$fromEmail       = 'noreply@sicsagroup.com.gt';

function respond(int $code, bool $success, string $message): void
{
    http_response_code($code);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

function sanitize(string $value, int $maxLength): string
{
    $clean = htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
    return mb_substr($clean, 0, $maxLength);
}

$name    = sanitize($_POST['name'] ?? '', 100);
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$address = sanitize($_POST['address'] ?? '', 200);
$phone   = sanitize($_POST['phone'] ?? '', 30);
$message = sanitize($_POST['message'] ?? '', 2000);
$token   = trim($_POST['cf-turnstile-response'] ?? '');

if ($name === '' || $email === '' || $address === '' || $phone === '' || $message === '') {
    respond(400, false, 'Todos los campos son obligatorios');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, false, 'Correo electrónico inválido');
}

// Verificación Cloudflare Turnstile
if ($turnstileSecret !== 'REPLACE_WITH_TURNSTILE_SECRET_KEY') {
    if ($token === '') {
        respond(400, false, 'Verificación anti-bot requerida');
    }

    $verifyPayload = http_build_query([
        'secret'   => $turnstileSecret,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]);

    $verifyContext = stream_context_create([
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-Type: application/x-www-form-urlencoded',
            'content' => $verifyPayload,
            'timeout' => 10,
        ],
    ]);

    $verifyResult = @file_get_contents(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        false,
        $verifyContext
    );

    if ($verifyResult === false) {
        respond(500, false, 'No se pudo verificar la solicitud. Intente nuevamente.');
    }

    $verifyData = json_decode($verifyResult, true);
    if (!is_array($verifyData) || empty($verifyData['success'])) {
        respond(400, false, 'Verificación anti-bot fallida. Intente nuevamente.');
    }
}

$subject = "Nuevo mensaje de {$name} — Sitio web SICSA GROUP";
$body    = "Nombre: {$name}\n";
$body   .= "Correo: {$email}\n";
$body   .= "Dirección: {$address}\n";
$body   .= "Teléfono: {$phone}\n\n";
$body   .= "Comentarios:\n{$message}\n";

$headers  = "From: {$fromEmail}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($recipientEmail, $subject, $body, $headers)) {
    respond(200, true, 'Mensaje enviado correctamente');
}

respond(500, false, 'Error al enviar el mensaje. Intente nuevamente.');
