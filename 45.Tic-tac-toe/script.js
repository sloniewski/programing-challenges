 function G(element){
  if (typeof(element)=="object") {
   return element;
  }else{
   return document.getElementById(element);
  }}

turn = "cross";

circle_symbol = '<i class="fa fa-circle-o" aria-hidden="true"></i>';
cross_symbol = '<i class="fa fa-times" aria-hidden="true"></i>';
symbol = cross_symbol;

function swithTurn()
{
    if(turn == "cross"){
        turn = "circle";
        symbol = circle_symbol;
        console.log("switching turn: cirlce");
    } else if (turn == "circle") {
      turn = "cross";
      symbol = cross_symbol;
      console.log("switching turn: cross");
    } else {
      console.log("Something went wrong: can`t set turn");
    }
}


var fields = document.getElementsByClassName("game-square");
for (a = 0; a < fields.length; a++) {
    fields[a].addEventListener('click', fill);;
}

function fill()
{
    var status = this.getAttribute("status");
    if (status == "filled") return;
    this.setAttribute("status", "filled");
    this.innerHTML = symbol;
    checkWhoWins();
    swithTurn();
}

function checkWhoWins()
{
    if (
      G("cell1").innerHTML == circle_symbol &&
      G("cell2").innerHTML == circle_symbol &&
      G("cell3").innerHTML == circle_symbol
    ){
        G("game-status").innerHTML = turn+" Wins! Game Ended!";
        G("row1").style.background = "red";
    }

    if (
      G("cell4").innerHTML == circle_symbol &&
      G("cell5").innerHTML == circle_symbol &&
      G("cell6").innerHTML == circle_symbol
    ){
        G("game-status").innerHTML = turn+" Wins! Game Ended!";
        G("row2").style.background = "red";
    }

    switch(cross_symbol){
        case G("cell7").innerHTML:
            // no break
        case G("cell8").innerHTML:
            // no break
        case G("cell9").innerHTML:
            G("game-status").innerHTML = turn+" Wins! Game Ended!";
            G("row3").style.background = "red";
    }

}
