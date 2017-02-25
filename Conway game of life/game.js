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
	for(var i=0 ; i<grid_row.length ; i++){
    typeof (grid_row[i]) == "undefined" ? cell = "<td></td>" :
    cell = "<td>"+grid_row[i]+"</td>";
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

function updateCells(grid)
{
	var tempGrid = [];
  for
	return tempGrid;
}

var grid = getGrid(50,50);

b = getTable(grid);
