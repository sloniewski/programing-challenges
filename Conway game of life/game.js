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
	var line = new Array(y); // <-this needs FIXING
  for(var i=0 ; i<x ; i++){
		grid.push(line);
	}
	return grid;
}

//draw HTML a table out of rows
function getTable(grid){
  for(var j=0 ; j<grid.length ; j++){
    var row = "";
    for(var i=0 ; i<grid[j].length ; i++){
      cell = '<td id="'+grid[j][i]+'">'+"row:"+j+",cell:"+i+",id:"+grid[j][i]+'</td>'
      console.log("processing: row-"+j+" cell-"+i)
      row += cell;}
	G("grid").insertAdjacentHTML('beforeend', ("<tr>"+row+"</tr>"));
	}
}

function updateCells(grid){
	var tempGrid = getGrid(grid.length, grid[0].length);
  for ( k=0 ; k<grid.length ; k++){
      console.log("row-"+k);
      for( m=0 ; m<grid[k].length ; m++){
      console.log("cell-"+m)
      }
  }
	return tempGrid;
}

//var grid = getGrid(3,3);
var grid =[
        [1,2,3],
        [4,5,6],
        [7,8,9]
        ]
grid[0][0] = "a";
grid[0][1] = "b";
grid[0][2] = "c";
grid[1][0] = "d";
grid[1][1] = "e";
grid[1][2] = "f";
grid[2][0] = "g";
grid[2][1] = "h";
grid[2][2] = "i";
//grid[3][]
console.log(grid);

b = getTable(grid);
