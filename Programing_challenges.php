<?php
//05. Fizz Bizz
for($i=1;$i<15;$i++){
  if (($i%3)!=0 && ($i%5)!=0) echo $i;
  if (($i%3)==0) echo "Fizz";
  if (($i%5)==0) echo "Buzz";
  echo "<br>";}

//16. Reverse a string
$string = "abcdefghij";
function reverse($string){
  $str_reversed = "";
  for ( $i=0 ; $i< (strlen($string)) ; $i++){
    $letter = substr($string,(strlen($string)-1-$i),1);
    $str_reversed .= $letter;}
  return $str_reversed;}
$reversed = reverse($string);
echo $reversed;

echo "<hr><br>";
//28. Fibonacci sequence
function Fibonacci($a,$b, $end){
    if ($b > $end ) return;
    $c = $a + $b;
    print ($c);
    echo ",";
    print (Fibonacci($b,$c, $end));
}
$fibonacci = Fibonacci(0,1,700);



?>
