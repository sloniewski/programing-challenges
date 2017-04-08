<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BMI calculator</title>
</head>
<body>

<div class="message">
<?php
if (isset($_SESSION['error'])) {
    $error = $_SESSION['error'];
    Print ("Error: {$error}");
}

if (isset($_SESSION['bmi'])) {
    $bmi = $_SESSION['bmi'];
    printf ('Your BMI is %.2f', $bmi);
} else {
    echo ('Enter numbers.');
}

session_destroy();
?>
</div>

<form action="BMI_calculator.php" method="get">
    <input type="text" name="weight">
    <input type="text" name="height">
    <input type="submit" value="submit"></input>
</form>

</body>
</html>
