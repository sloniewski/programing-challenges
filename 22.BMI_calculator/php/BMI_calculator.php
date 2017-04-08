<?php
session_start();
$weight = (int) $_GET['weight'];
$height = (int) $_GET['height'];

function validateInput($input)
{

}

function calculateBMI(int $weight, int $height):float
{
 $bmi = $weight / (($height/100)^2);
 return $bmi;
}


$_SESSION['bmi'] = calculateBMI($weight,$height);
header('Location: index.php');
exit();
?>
