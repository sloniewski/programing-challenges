<?php
function factorial($number)
{
    if ($number <= 1) {
        return 1;
    }
    return ($number * factorial($number - 1));
}

// multi factorial is a factorial with step larger than one
function multiFactorial($number, $step)
{
    if ($number <= 1) {
        return 1;
    }
    return ($number * multifactorial($number - $step, $step));
}

//super factorial is a factorial of factorials (factorial inception)
function superFactorial($number)
{
    $array_temp = [];
    while ($number > 0) {
        $array_temp[] = $number;
        --$number;
    }

    array_walk(
        $array_temp,
        function(&$x) {$x = factorial($x);}
    );

    $result = 1;

    foreach ($array_temp as $element){
        $result = $result * $element;
    }

    return ($result);
}

?>
