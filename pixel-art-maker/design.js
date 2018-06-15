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


let run = document.getElementById("submitButton");
run.addEventListener("click", function(e) {
  e.preventDefault();
  makeGrid();
});
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid(
function makeGrid() {
  let gridHeight = document.getElementById("inputHeight").value;
  let gridWidth = document.getElementById("inputWidth").value;
  let canvas = document.getElementById("pixelCanvas");
  let cells = document.querySelectorAll(".cell"); //dunno why .cell is added
  // CLEAR GRID before adding/creating a new one
  if (cells !== 0) {
    while (canvas.hasChildNodes()) {
      canvas.removeChild(canvas.lastChild);
    }
  }

  // SIZE THE GRID
  for (let h = 0; h < gridHeight; h++) {
    row = document.createElement("tr");
    for (let w = 0; w < gridWidth; w++) {
      let col = document.createElement("td");
      col.classList.add("cell");
      row.appendChild(col);
      canvas.appendChild(row);
      col.addEventListener('click', function() {
        let colorPicker = document.getElementById('colorPicker').value;
        col.style.backgroundColor = colorPicker;
      });
    }
  }

}
