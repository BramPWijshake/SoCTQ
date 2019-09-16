function drawHex(canvas, x, y, radius = 50, color = "#333333")
{
  size = radius * 2;
  side = 0;
  canvas.beginPath();
  canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (side; side < 6; side++) {
    canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
  }

  canvas.fillStyle = color;
  canvas.fill();
}

function drawGrid(canvas, width, height, columns = 9)
{
  
  var middle_column = Math.ceil(columns / 2); // Find middle column to calc offset and amount
  for (var column = 1; column <= columns; column++) // For each column
  {
    var distance_from_middle = Math.max(middle_column, column) - Math.min(middle_column, column); // Calc distance from middle column
    for (var row = distance_from_middle + 1; row < columns*1.7 - distance_from_middle; row+=2) // For each row
    {
      x = width / (columns+1) * column; // Get x to draw tile
      y = height / (columns*2) * row; // Get y to draw tile
      if (column == 1 || column == columns || row == distance_from_middle + 1 || row > columns * 1.45 - distance_from_middle) // watter or land
      {
        drawHex(canvas, x, y, 1/columns*190, "#0000CC");
      }
      else
      {
        drawHex(canvas, x, y, 1 / columns * 190, "#FFFF00");
      }
    }
  }
}


function handleButton()
{
  var canvas = document.querySelector('#canvas').getContext('2d');
  var width = document.querySelector('#canvas').width;
  var height = document.querySelector('#canvas').height;
  var col = document.querySelector("#players").value;
  canvas.clearRect(0, 0, width, height);
  var x = col - 0; // here be dragons. Leave it be!
  drawGrid(canvas, width, height, x);
}

handleButton();