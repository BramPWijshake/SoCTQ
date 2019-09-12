function drawHex(canvas, x, y, radius = 50)
{
  size = radius * 2;
  side = 0;
  canvas.beginPath();
  canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (side; side < 6; side++) {
    canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
  }

  canvas.fillStyle = "#333333";
  canvas.fill();
}

function drawGrid(canvas, width = 800, height = 800, columns = 5)
{
  
  var middle_column = Math.ceil(columns / 2);
  console.log(middle_column);
  for (var column = 1; column <= columns; column++)
  {
    var distance_from_middle = Math.max(middle_column, column) - Math.min(middle_column, column);
    console.log(distance_from_middle);
    for (var row = distance_from_middle + 1; row <= columns*2 - distance_from_middle; row+=2)
    {
      x = width / columns * column;
      y = height / 9 * row;
      drawHex(canvas, x, y, 45);
    }
  }
}

var canvas = document.querySelector('#canvas').getContext('2d');
var width = canvas.width;
var height = canvas.height;
drawGrid(canvas, width, height);


// var x = [50, 90, 130]

// drawHex(canvas, x[0], 100, 25);
// drawHex(canvas, x[0], 200, 25);
// drawHex(canvas, x[0], 300, 25);
// drawHex(canvas, x[0], 400, 25);

// drawHex(canvas, x[1], 50, 25);
// drawHex(canvas, x[1], 150, 25);
// drawHex(canvas, x[1], 250, 25);
// drawHex(canvas, x[1], 350, 25);
// drawHex(canvas, x[1], 450, 25);

// drawHex(canvas, x[2], 50, 25);
// drawHex(canvas, x[2], 150, 25);
// drawHex(canvas, x[2], 250, 25);
// drawHex(canvas, x[2], 350, 25);
// drawHex(canvas, x[2], 450, 25);