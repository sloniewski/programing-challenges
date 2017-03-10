<?php
//28. Fibonacci sequence
function Fibonacci($a,$b, $end){
    if ($b > $end ) return;
    $c = $a + $b;
    print ($c);
    echo ",";
    print (Fibonacci($b,$c, $end));
}
$fibonacci = Fibonacci(0,1,700);

//I know it is not perfect but it is the function I came up after learning recursion
?>
