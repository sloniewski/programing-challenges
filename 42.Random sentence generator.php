<?php
$subject = ["Mark", "Milos", "Martin", "Robert"];
$verb = [ "ate", "kicked", "threw", "saw"];
$object =[ "apple", "orange", "banana", "potato"];

if (isset($_GET['clicked'])){
  print $rand_subject." ".$rand_verb." ".$rand_object;
}
?>

<form method="get">
  <input type="hidden" name="clicked" value="clicked">
  <input type="submit" value="Generate">
</form>
