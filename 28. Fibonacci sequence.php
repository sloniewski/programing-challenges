<?php
function Fibonacci($a,$b, $end){
    if ($b > $end ) return;
    $c = $a + $b;
    print ($c);
    echo ",";
    print (Fibonacci($b,$c, $end));
}
$fibonacci = Fibonacci(0,1,700);
?>
