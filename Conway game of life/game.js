//some basic stuff to save me some typing
 function G(element){
  if (typeof(element)=="object") {
   return element;
  }else{
   return document.getElementById(element);
  }}

 function S(element){
  return document.getElementById(element).style;
  }

// create an array that is to be used as grid
function getGrid(x,y){
	var grid = [];
	var line = Array(y);
  for( i=0 ; i<x ; i++){
		grid.push(line);
	}
	return grid;
}

//convert a row of a grid into html table (string)
function getRow(grid_row){
	cells = "";
	for(var i=0 ; i<grid_row.length ; i++){
    if (grid_row[i] == "dead") {
      cell = '<td id="dead"></td>'}
        else if (grid_row[i] == "alive"){
        cell = '<td id="alive"></td>';}
          else{
          cell = '<td id="error"></td>';}
  cells += cell;
      }
		return ("<tr>"+cells+"</tr>");
}

//draw HTML a table out of rows
function getTable(grid){
	for(var j=0 ; j<grid.length ; j++){
		row = getRow(grid[j]);
		G("grid").insertAdjacentHTML('beforeend', row);
	}
}

function updateCells(grid){
	var tempGrid = getGrid(grid.length, grid[0].length);
  for ( k=0 ; k<grid.length ; k++){
      for( m=0 ; m<grid[k].length ; m++){
        //grid[k][m] ;
      }
  }
	return tempGrid;
}

var grid = getGrid(10,10);
grid[7][9]=("alive");
grid[2][3]=("alive");
console.log(grid[9]);
b = getTable(grid);
