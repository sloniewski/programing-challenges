//supporting funcions

function G(element)
{
  if (typeof (element) == 'object') {
    return element;
  }else {
    return document.getElementById(element);
  }
}

function identical(array)
{
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1] || array[i] === '') {
      return false;
    }
  }
  return true;
}

/*
*circleSymbol & crossSymbol - say what is displayed
*turn - keeps track whose turn it is
*/
circleSymbol = '<i class="fa fa-circle-o" aria-hidden="true"></i>';
crossSymbol = '<i class="fa fa-times" aria-hidden="true"></i>';
turn = 'Cross';
symbol = crossSymbol;
gameEnded = 0;
fields = document.getElementsByClassName('game-square');
circleScore = 0;
crossScore = 0;

//section with game actions
function switchTurn()
{
  if (turn == 'Cross') {
    turn = 'Circle';
    symbol = circleSymbol;
    console.log('switching turn: cirlce');
  } else if (turn == 'Circle') {
    turn = 'Cross';
    symbol = crossSymbol;
    console.log('switching turn: cross');
  } else {
    console.log('Something went wrong: can`t set turn');
  }
}

function dispalyStatus()
{
  G('game-status').innerHTML = turn + ' turn now!';
}

function gameAction()
{
  if (gameEnded == 1) return;
  var status = this.getAttribute('status');
  if (status == 'filled') return;

  this.setAttribute('status', 'filled');
  this.innerHTML = symbol;

  if (checkVictory()) return;
  switchTurn();
  dispalyStatus();
}

function endGame(array)
{
  G('game-status').innerHTML = turn + ' Wins! Game Ended!';
  gameEnded = 1;
  for (var k = 0; k < array.length; k++) {
    G(array[k]).style.background = 'rgba(117, 255, 117, 6)';
  }
  addPoint(turn);
  displayScore();
}

function addPoint(turn){
  if (turn == 'Cross') {
    crossScore = crossScore + 1;
  } else if (turn =='Circle') {
    circleScore = circleScore + 1;
  } else{
    console.log('error computing score');
  }
}

function displayScore()
{
    G('crossScore').innerHTML = crossScore;
    G('circleScore').innerHTML = circleScore;
    if (crossScore > circleScore){
        G('crossScore').style.background = 'rgba(117, 255, 117, 6)';
        G('circleScore').style.background = 'white';
    } else if (circleScore > crossScore) {
        G('circleScore').style.background = 'rgba(117, 255, 117, 6)';
        G('crossScore').style.background = 'white';
    } else if (circleScore == crossScore) {
        G('crossScore').style.background = 'white';
        G('circleScore').style.background = 'white';
    }
}

topRow = [
  'cell1',
  'cell2',
  'cell3',
];

middleRow = [
  'cell4',
  'cell5',
  'cell6',
];

bottomRow = [
  'cell7',
  'cell8',
  'cell9',
];

leftColumn = [
  'cell1',
  'cell4',
  'cell7',
];

middleColumn = [
  'cell2',
  'cell5',
  'cell8',
];

rightColumn = [
  'cell3',
  'cell6',
  'cell9',
];

downSlash = [
  'cell1',
  'cell5',
  'cell9',
];

upSlash = [
  'cell3',
  'cell5',
  'cell7',
];

vicotoryConditions = [
  topRow,
  middleRow,
  bottomRow,
  leftColumn,
  middleColumn,
  rightColumn,
  downSlash,
  upSlash,
];

function checkVictory()
{
  for (var i = 0; i < vicotoryConditions.length; i++) {
    tempArray = [];
    tempCells = vicotoryConditions[i];
    for (var j = 0; j < tempCells.length; j++) {
      cellContent = G(tempCells[j]).innerHTML;
      tempArray.push(cellContent);
    }
    if (identical(tempArray)) {
        endGame(vicotoryConditions[i]);
        return true;
    }
  }
}

//functions attached to buttons
function resetGame()
{
  G('game-status').innerHTML = '';
  gameEnded = 0;
  turn = 'Cross';
  symbol = crossSymbol;
  for (var n = 0; n < fields.length; n++) {
    fields[n].style.background = 'white';
    fields[n].setAttribute('status', '');
    fields[n].innerHTML = '';
  }
}

function resetScore()
{
    circleScore = 0;
    crossScore = 0;
    displayScore();
}

//Event listeners
for (a = 0; a < fields.length; a++) {
  fields[a].addEventListener('click', gameAction);
}

G('reset').addEventListener('click', resetGame);
G('resetScore').addEventListener('click', resetScore);
