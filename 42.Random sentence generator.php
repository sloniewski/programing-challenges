<?php
$subject = ["Mark", "Milos", "Martin", "Robert"];
$verb = [ "ate", "touched", "threw", "sniffed"];
$object =[ "an apple", "an orange", "a banana", "a potato"];

if (isset($_GET['clicked'])){
  $rand_subject = $subject[rand(0, (count($subject)-1))];
  $rand_verb = $verb[rand(0,(count($verb)-1))];
  $rand_object = $object[rand(0,(count($object)-1))];
  print $rand_subject." ".$rand_verb." ".$rand_object;
}
?>

<form method="get">
  <input type="hidden" name="clicked" value="clicked">
  <input type="submit" value="Generate">
</form>
