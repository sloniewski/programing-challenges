<?php
//QUICK SORT FUNCTION
function quickSort($array){
	$array_sorted = [];
	if (count($array)<=1) return $array;
	$array_left=[];
	$array_right=[];

	$pivot = $array[count($array)/2-count($array)%2];	// choose pivot
	$array[count($array)/2-count($array)%2] = $array[count($array)-1]; //swith places of pivot with last value in array
	$array[count($array)-1] = $pivot;

		foreach ($array as $element) {
			if ($element <= $pivot) {
				$array_left[]= $element;	//move elements smaller or equal to pivot to left
			}else{
				$array_right[]= $element;}	//move elements smaller or equal to pivot to left
			};
			$array=array_merge(quickSort($array_left),quickSort($array_right));	//merge left with right array, add recurency, this does seem to be in line with algorythm but procudes memory exceeded error should change pivot also...?
			return $array;
}
?>
