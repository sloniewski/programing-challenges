<?php

//05 Fizz Bizz
for($i=1;$i<15;$i++){
  if (($i%3)!=0 && ($i%5)!=0) echo $i;
  if (($i%3)==0) echo "Fizz";
  if (($i%5)==0) echo "Buzz";
  echo "<br>";}

//16 Reverse a string
$string = "abcdefghij";
function reverse($string){
for ( $i=0 ; $i< (strlen($string)) ; $i++){
  $str_reversed = "";
  $letter = substr($string,(strlen($string)-$i),1);
  $str_reversed .= $letter;
  return $str_reversed;
}}
$reversed = reverse($string);
echo $reversed;
$a = substr($string, (strlen($string)-4),1);
echo $a;

?>
