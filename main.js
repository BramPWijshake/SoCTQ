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

function drawGrid(canvas, width = 100, height = 100, columns = 5)
{
  
  var offset = 3;
  
  for(var x = 0; x <= 5; x++)
  {
    for(var y = 0; y <= offset + 1; y++)
    {
      drawHex(canvas, 50, 100, 25);
    }
  }
}

var canvas = document.querySelector('#canvas').getContext('2d');
drawGrid(canvas);


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