var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var index = 0; index < 16; index = index + 1) {
    x[index] = 230;
    y[index] = 220;
    xSpeed[index] = random(1, 3);
    ySpeed[index] = random(1, 3);
  }
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);

  for (var index = 0; index < 16; index = index + 1) {
    // draw drip
    ellipse(x[index], y[index], 10);

    // down 3 pixels each frame, but maybe should be accelerating?
    y[index] = y[index] + ySpeed[index];

    // if invisible for a full “height” amount…
    if (y[index] > height * 2) {
      // reset
      y[index] = 220;
    }
  }
}
