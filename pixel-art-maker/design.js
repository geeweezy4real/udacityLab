/* PSEUDOCODE FOR PIZEL ART PROJECT
1.Enter width and Height
2.Click submit button
3.Create grid
4.Draw to grid with mouse*/

/* When size is submitted by the user, call makeGrid()
 gridHeight
gridWidth

for number up to the gridHeight
Create height elements
add it to the grid

for each number up to the gridWidth
create width element
add it to the grid
*/

// When size is submitted by the user, call makeGrid()
let submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    makeGrid();
});

//Make Grid Function
function makeGrid() {
  // select the size input, both width and height
  //get the Height and width
  let gridHeight = document.getElementById('inputHeight').value;
  let gridWidth = document.getElementById('inputWidth').value;

  //get canvas
let canvas = document.getElementById('pixelCanvas');
//Remove existing grid before drawing a new one
let tableData = document.querySelectorAll('.data');
 //reset grid on submit
 if (tableData.lenght !== 0) {
     while (canvas.hasChildNodes()) {
         canvas.removeChild(canvas.lastChild);
     }

 }
  //Create the rows outer for loop
for(let row = 0; row < gridHeight; row++){
  const rows = document.createElement('tr');
  //Create the columns inner for loop
  for(let column = 0; column < gridWidth; column++){
    const cell = document.createElement('td');
    cell.appendChild();
      row.appendChild(cell)
  }
}
}

//Add event listener to cells to set background-color to the selected color when clicked
document.querySelector('pixelCanvas').click('tr td', function(e) {
  let cellColor = document.getElementById('colorPicker');

  document.querySelector(e.target).css('background-color', cellColor)

});
