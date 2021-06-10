<?php
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$toEmail = "fbondesio@puentenet.com.ar";
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$showcomment = '';
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$subject = "Contact us email";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
	$comment = 'Hello,<br/>'
	. 'Name:' . $name . '<br/>'
	. 'comment:' . $comment . '<br/><br/>';
	mail($toEmail, $subject, $comment, $headers);
	$showcomment = "Su consulta ha sido enviada, nos pondremos en contacto a la brevedad.";
} else {
	$showcomment =  "invalid email";
}
$jsonData = array(
	"comment"	=> $showcomment
);
echo json_encode($jsonData);
?>
