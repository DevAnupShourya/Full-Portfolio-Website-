<?php
    if(!empty($_POST["submit"])) {
	    $name = $_POST["name"];
	    $email = $_POST["mail"];
	    $subject = $_POST["subject"];
	    $content = $_POST["disc"];

        $message = "Your contact information is received successfully.";

	    $toEmail = "mail@anupshourya.com";
	    $mailHeaders = "From: " . $name . "<". $email .">\r\n";
	    if(mail($toEmail, $subject, $content, $mailHeaders)) {
	    echo $message;
            }
            else {
                echo "Message could not be sent...";
            }
    }
    
    require_once "index.php";
?>