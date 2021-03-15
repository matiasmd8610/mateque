<?php

if($_POST) {
    $name = "";
    $email = "";
    $message = "";
    $recipient = "matiasmd8610@hotmail.com";
    $subject = "Consulta";

    if(isset($_POST['name'])) {
      $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
    }

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

    if(mail($recipient, $subject, $message, $headers)) {
        echo "<p>Gracias por contactarnos, $name. Responderemos a la brevedad.</p>";
    } else {
        echo '<p>Lo sentimos pero el e-mail no se pudo enviar.</p>';
    }

} else {
    echo '<p>Ups.. Algo salió mal!</p>';
}

?>
