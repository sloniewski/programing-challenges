<?php
//BUBBLE SORT
function bubbleSort($array)
{
    $count = count($array);
    for ($i = (count($array)-1); $i>0; $i--) {
        $element1 = $array[$count-1];				//define which elements need to be checked
        $element2 = $array[$count-2];
        if ($element1 < $element2) {						//compare following array elements
            $array[$count-1] = $element2;				// swith places of compared elements
            $array[$count-2] = $element1;
            $i=count($array)-1;								//if array elements changed places, reset iteration counter
        }
    $count==2 ? $count = count($array) : $count--; 			//define which elements to be checked  in next iteration
    }
    return $array;
}
 ?>
