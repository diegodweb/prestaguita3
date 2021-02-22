<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$dni = $_POST['dni'];
$cuil = $_POST['cuil'];

$mail ='webmaster@salvatoretepresta.com' ;

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",". $apellido . "\r\n";
$mensaje .= "Telefono: " . $_POST['telefono'] . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "DNI: " . $_POST['dni'] . " \r\n";
$mensaje .= "Cuil: " . $_POST['cuil'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'info@salvatoretepresta.com';
$asunto = 'solicitud de prestamo';


mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:enviado.html");
?>




