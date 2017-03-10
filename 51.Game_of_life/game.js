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
	var line = Array(y)
	for( i=0 ; i<x ; i++){
		grid.push(line);
	}
	return grid;
}

//convert a row of a grid into html table (string)
function getRow(grid_row){
	cells = "";
	for( i=0 ; i<grid_row.length ; i++){
		cell = "<td>"+grid_row[i]+"</td>";
		cells += cell;
	}
	return ("<tr>"+cells+"</tr>");
}

//draw HTML a table out of rows
function getTable(grid){
	for( j=0 ; j<grid.length ; j++){
		row = getRow(grid[j]);
		G("grid").insertAdjacentHTML('beforeend', row);
	}
}

function updateCells(grid)
{
	var tempGrid = [];
	//iterate through grid and build new grid
	return tempGrid;
}

var grid = getGrid(4,50);
grid[0].fill(".");
grid[1].fill(".");
grid[0,0] = "a";
grid[1,0] = "b";



b = getTable(grid);
