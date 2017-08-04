<?php
function collatz($n)
{
    print("{$n},");

    if($n == 1){
        return;
    }

    if($n % 2 == 0){
        $n = $n/2;
    } else {
        $n = 3*$n + 1;
    }

    collatz($n);
}

collatz(11);

?>
