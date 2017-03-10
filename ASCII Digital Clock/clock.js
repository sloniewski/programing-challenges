//some basics to save me some typing
 function G(element){
  if (typeof(element)=="object") {
   return element;
  }else{
   return document.getElementById(element);
  }}

 function S(element){
  return document.getElementById(element).style;
  }

//asci numbers
var one = ".....@@...<br>...@@@@...<br>...@@@@...<br>.....@@...<br>.....@@...<br>.....@@...<br>.....@@...<br>.....@@...<br>.....@@...<br>.....@@...<br>";
var two = "...@@@@...<br>..@@@@@@..<br>..@@..@@..<br>......@@..<br>.....@@...<br>....@@@...<br>....@@....<br>...@@.....<br>..@@@@@@..<br>..@@@@@@..<br>";
var three = "...@@@@...<br>..@@@@@@..<br>..@@..@@..<br>......@@..<br>....@@@...<br>....@@@...<br>......@@..<br>..@@..@@..<br>..@@@@@@..<br>...@@@@...<br>";
var four = "....@@....<br>...@@@....<br>..@@@.....<br>..@@......<br>..@@......<br>..@@@@@@..<br>..@@@@@@..<br>.....@@...<br>.....@@...<br>.....@@...<br>";
var five="..@@@@@@..<br>..@@@@@@..<br>..@@......<br>..@@......<br>...@@@@...<br>...@@@@@..<br>......@@..<br>..@@..@@..<br>..@@@@@@..<br>...@@@@...";
var six ="...@@@@...<br>..@@@@@@..<br>..@@..@@..<br>..@@......<br>..@@@@....<br>..@@@@@...<br>..@@..@@..<br>..@@..@@..<br>..@@@@@@..<br>...@@@@...<br>";
var seven = "..@@@@@@..<br>..@@@@@@..<br>......@@..<br>......@@..<br>.....@@...<br>.....@@...<br>....@@....<br>....@@....<br>...@@.....<br>...@@.....<br>";
var eight = "...@@@@...<br>..@@@@@@..<br>..@@..@@..<br>..@@..@@..<br>...@@@@...<br>...@@@@...<br>..@@..@@..<br>..@@..@@..<br>..@@@@@@..<br>...@@@@...<br>";
var nine = "...@@@@...<br>..@@@@@@..<br>..@@..@@..<br>..@@..@@..<br>...@@@@@..<br>....@@@@..<br>......@@..<br>..@@..@@..<br>..@@@@@@..<br>...@@@@...<br>";
var zero = "...@@@@...<br>..@@@@@@..<br>..@@..@@..<br>..@@..@@..<br>..@@..@@..<br>..@@..@@..<br>..@@..@@..<br>..@@..@@..<br>..@@@@@@..<br>...@@@@...";
var dots = "..<br>..<br>@@<br>@@<br>..<br>..<br>@@<br>@@<br>..<br>..<br>";
var blank  = "..<br>..<br>..<br>..<br>..<br>..<br>..<br>..<br>..<br>..<br>";

//functions that tell clock refreshing function whitch digit to show
function getFirstDigit(number){
 if (number>61) return "time cannot be more than 60";
 digits = "";

if (number<=9) {
	digits = zero;
} else{
 switch((number-(number%10))/10) {
  case 1:
   digits = one;
	 break;
  case 2:
	 digits = two;
	 break;
  case 3:
	 digits = three;
   break;
  case 4:
	 digits = four;
   break;
  case 5:
   digits = five;
   break;
  case 6:
	 digits = six;
   break;
  case 7:
   digits = seven;
   break;
  case 8:
	 digits = eight;
   break;
  case 9:
	 digits = nine;
   break;
}
}
return digits;
}

function getSecondDigit(number){
	if (number>61) return "time cannot be more than 60";
  digits = "";

  switch(number%10) {
   case 1:
    digits = one;
 	 break;
   case 2:
 	 digits = two;
 	 break;
   case 3:
 	 digits = three;
    break;
   case 4:
 	 digits = four;
    break;
   case 5:
    digits = five;
    break;
   case 6:
 	 digits = six;
    break;
   case 7:
    digits = seven;
    break;
   case 8:
 	 digits = eight;
    break;
   case 9:
 	 digits = nine;
    break;
   case 0:
	  digits = zero;
		break;
 }
 return digits;
}

//function inserting digits into clock

function createTime() {
 var date = new Date();

 var hours_first    = getFirstDigit(date.getHours());
 var hours_second   = getSecondDigit(date.getHours());
 var minutes_first  = getFirstDigit(date.getMinutes());
 var minutes_second = getSecondDigit(date.getMinutes());
 var seconds_first  = getFirstDigit(date.getSeconds());
 var seconds_second = getSecondDigit(date.getSeconds());

 G("c_one").innerHTML = hours_first;
 G("c_two").innerHTML = hours_second;
 G("c_three").innerHTML = minutes_first;
 G("c_four").innerHTML = minutes_second;
 G("c_five").innerHTML = seconds_first;
 G("c_six").innerHTML = seconds_second;
 }


//function for blinking dots
b=1;
 function blink(){

  var element = document.getElementsByClassName("dots");
 var a;
 for (a = 0; a< element.length; a++) {
   if ((b%2)==0) {
   element[a].innerHTML= blank;
	} else if ((b%2)>0) {
	element[a].innerHTML=dots;
	}
 }
 ++b;
 }

//intervals for clock refreshing

setInterval(createTime,1000);

setInterval(blink,500);




 var x = document.getElementsByClassName("time");
 var i;
 for (i = 0; i < x.length; i++) {
    x[i].style.float = "left";
    x[i].style.border = "1px solid white";
 }
