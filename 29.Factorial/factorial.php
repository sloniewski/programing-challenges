<?php
function factorial($number)
{
    if ($number <= 1) {
        return 1;
    }
    return ($number * factorial($number-1));
}


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
