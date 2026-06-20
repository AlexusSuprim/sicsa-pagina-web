<?php
/**
 * Manejador del formulario de contacto — SICSA GROUP
 * Secret Key de Turnstile: contact.config.php un nivel arriba de public_html/
 * (ver contact.config.php.example en la raíz del proyecto).
 */

header('Content-Type: application/json');

$allowedOrigins = [
    'https://sicsagroup.com.gt',
    'http://localhost:4321',
    'http://127.0.0.1:4321',
    'http://localhost:4322',
    'http://127.0.0.1:4322',
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
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$messages = [
    'es' => [
        'method_not_allowed' => 'Método no permitido',
        'required_fields' => 'Todos los campos son obligatorios',
        'invalid_email' => 'Correo electrónico inválido',
        'turnstile_required' => 'Verificación anti-bot requerida',
        'turnstile_not_configured' => 'El formulario no está configurado. Contacte al administrador del sitio.',
        'verify_failed' => 'No se pudo verificar la solicitud. Intente nuevamente.',
        'turnstile_failed' => 'Verificación anti-bot fallida. Intente nuevamente.',
        'success' => 'Mensaje enviado correctamente',
        'mail_failed' => 'Error al enviar el mensaje. Intente nuevamente.',
    ],
    'en' => [
        'method_not_allowed' => 'Method not allowed',
        'required_fields' => 'All fields are required',
        'invalid_email' => 'Invalid email address',
        'turnstile_required' => 'Anti-bot verification required',
        'turnstile_not_configured' => 'The contact form is not configured. Please contact the site administrator.',
        'verify_failed' => 'Could not verify the request. Please try again.',
        'turnstile_failed' => 'Anti-bot verification failed. Please try again.',
        'success' => 'Message sent successfully',
        'mail_failed' => 'Error sending message. Please try again.',
    ],
];

$lang = trim($_POST['lang'] ?? 'es');
if (!isset($messages[$lang])) {
    $lang = 'es';
}
$msg = $messages[$lang];

const TURNSTILE_SECRET_PLACEHOLDER = 'REPLACE_WITH_TURNSTILE_SECRET_KEY';

const TURNSTILE_SECRET_PLACEHOLDERS = [
    'REPLACE_WITH_TURNSTILE_SECRET_KEY',
    'your_turnstile_secret_key_here',
];

/**
 * Lee la secret key desde un archivo contact.config.php si existe y es válido.
 */
function loadTurnstileSecretFromFile(string $configFile): ?string
{
    if (!is_readable($configFile)) {
        return null;
    }

    $localConfig = require $configFile;
    if (!is_array($localConfig) || empty($localConfig['turnstile_secret_key'])) {
        return null;
    }

    $secret = trim((string) $localConfig['turnstile_secret_key']);
    if ($secret === '' || in_array($secret, TURNSTILE_SECRET_PLACEHOLDERS, true)) {
        return null;
    }

    return $secret;
}

/**
 * Resuelve la secret key de Turnstile.
 * Orden: config fuera de public_html → config legacy junto a contact.php → env.
 */
function resolveTurnstileSecret(): string
{
    $configCandidates = [
        dirname(__DIR__) . '/contact.config.php',
        __DIR__ . '/contact.config.php',
    ];

    foreach ($configCandidates as $configFile) {
        $secret = loadTurnstileSecretFromFile($configFile);
        if ($secret !== null) {
            return $secret;
        }
    }

    foreach (['TURNSTILE_SECRET_KEY'] as $envKey) {
        $value = getenv($envKey);
        if ($value !== false && $value !== '') {
            return trim($value);
        }
        if (!empty($_ENV[$envKey])) {
            return trim((string) $_ENV[$envKey]);
        }
        if (!empty($_SERVER[$envKey])) {
            return trim((string) $_SERVER[$envKey]);
        }
    }

    return TURNSTILE_SECRET_PLACEHOLDER;
}

$turnstileSecret = resolveTurnstileSecret();
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
    respond(400, false, $msg['required_fields']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, false, $msg['invalid_email']);
}

// Verificación Cloudflare Turnstile (obligatoria en producción)
if ($turnstileSecret === TURNSTILE_SECRET_PLACEHOLDER || $turnstileSecret === '') {
    respond(503, false, $msg['turnstile_not_configured']);
}

if ($token === '') {
    respond(400, false, $msg['turnstile_required']);
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
    respond(500, false, $msg['verify_failed']);
}

$verifyData = json_decode($verifyResult, true);
if (!is_array($verifyData) || empty($verifyData['success'])) {
    respond(400, false, $msg['turnstile_failed']);
}

$subject = "Nuevo mensaje de {$name} — Sitio web SICSA GROUP";
$body    = "Idioma: {$lang}\n";
$body   .= "Nombre: {$name}\n";
$body   .= "Correo: {$email}\n";
$body   .= "Dirección: {$address}\n";
$body   .= "Teléfono: {$phone}\n\n";
$body   .= "Comentarios:\n{$message}\n";

$headers  = "From: {$fromEmail}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($recipientEmail, $subject, $body, $headers)) {
    respond(200, true, $msg['success']);
}

respond(500, false, $msg['mail_failed']);
