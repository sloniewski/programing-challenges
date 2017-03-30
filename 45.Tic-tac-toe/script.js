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
game_ended = 0;

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
    if (game_ended == 1) return;
    var status = this.getAttribute("status");
    if (status == "filled") return;

    this.setAttribute("status", "filled");
    this.innerHTML = symbol;

    checkWhoWins();
    swithTurn();
}

function checkWhoWins()
{
    var top_row = [
      G("cell1").innerHTML,
      G("cell2").innerHTML,
      G("cell3").innerHTML
    ]

    var middle_row = [
      G("cell4").innerHTML,
      G("cell5").innerHTML,
      G("cell6").innerHTML
    ]

    var bottom_row = [
        G("cell7").innerHTML,
        G("cell8").innerHTML,
        G("cell9").innerHTML
    ]

    function identical(array) {
        for(var i = 0; i < array.length - 1; i++) {
            if(array[i] !== array[i+1] || array[i] == "") {
                return false;
            }
        }
    return true;
    }

    if (identical(top_row)){
        G("game-status").innerHTML = turn+" Wins! Game Ended!";
        G("row1").style.background = "red";
        game_ended = 1;
    }

    if (identical(middle_row)){
        G("game-status").innerHTML = turn+" Wins! Game Ended!";
        G("row2").style.background = "red";
        game_ended = 1;
    }

    if (identical(bottom_row)){
        G("game-status").innerHTML = turn+" Wins! Game Ended!";
        G("row3").style.background = "red";
        game_ended = 1;
    }


}
