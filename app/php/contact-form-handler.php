<?php
//to send email from contact form after validated//
$message_sent = false;
if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){
	//submit form//
	$senderName = $_POST['sender-name'];
	$senderEmail = $_POST['email'];
	$messageSubject = $_POST['subject'];
	$message = $_POST['message'];

	$email_from = 'earnestthing.com';
	$email_subject = "New Form Submission";
	$email_body = "From: $senderName.\n"."Email: $senderEmail.\n"."Subject: $messageSubject.\n"."Message: $message.\n";

	$to = "somethingalongthelines.official@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $senderEmail \r\n";

	mail($to, $email_subject, $email_body, $headers);
	$message_sent = true;

	header("Location: ../../form-success.html");
}
else{
echo "Uh oh, looks like that wasn't a valid email :(";
}

?>
