<?php
//Functions separated to be reused
function minimum($array) //get minimum value of array
{
    $output=$array[0]; //define first element of array as output
    foreach ($array as $input) {
        if ($output>$input) $output = $input;	//compare each element of array outpuy variable, if smaller than swith with output var
    }
    return $output;
}

function removeFromArray($array,$number) //this function removes a single given integr from array
{
    $array_changed = [];
    foreach ($array as $element) {
        if ($element == $number) {
            $number = false;
            continue;
        }
        $array_changed[] = $element;
    }
    return $array_changed;
}

// INSERT SORT FUNCTION
function insertSort($array)
{
    $array_input = $array;
    if (count($array_input)>1) {
        foreach($array_input as $element){
            $minimum = minimum($array_input); //find minimum of input array
            $array_output[]=$minimum; //add minimum to new output array
            $array_input=removeFromArray($array_input,$minimum); //remove minimum from input array, create new input array
        }
    } else {
        $array_output[]=$array_input[0];
    }
    return $array_output;
}

?>
