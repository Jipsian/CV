<?php


$from = 'sylvain@sylvainlabarre.ovh';
$sendTo = 'sylvain.labarre@live.fr';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'surname' => 'Surname', 'email' => 'Email', 'message' => 'Message');
$okMessage = 'Merci, je vous contacte dès que possible.';
$errorMessage = 'Une erreur est apparue, veuillez réessayer plus tard.';


try
{
    $emailText = "Vous avez reçu un nouveau message\n=\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}

?>
