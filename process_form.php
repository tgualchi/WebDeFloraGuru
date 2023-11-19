<?php
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) : "";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";

    if ($name && $email && $message) {
        $to = "tobgual@gmail.com";
        $subject = "Nuevo mensaje del formulario de contacto";
        
        // Construir el cuerpo del mensaje
        $email_message = "Nombre: $name\n";
        $email_message .= "Correo electrónico: $email\n";
        $email_message .= "Mensaje:\n$message";

        // Cabeceras del correo electrónico
        $headers = "From: $email";

        // Envía el correo electrónico
        if (mail($to, $subject, $email_message, $headers)) {
            // Puedes agregar más lógica aquí, como redireccionar a una página de agradecimiento
            echo "¡Gracias por enviar el formulario!";
        } else {
            // Manejo de errores si el envío de correo electrónico falla
            http_response_code(500);
            echo "Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.";
        }
    } else {
        http_response_code(400);
        echo "Por favor, completa todos los campos correctamente.";
    }
} else {
    http_response_code(403);
    echo "Acceso prohibido";
}
?>
