<?php
$string = "abcdefghij";
function reverse($string){
    $str_reversed = "";
    for ( $i=0 ; $i< (strlen($string)) ; $i++){
        $letter = substr($string,(strlen($string)-1-$i),1);
        $str_reversed .= $letter;}
  return $str_reversed;}
?>
