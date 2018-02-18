var x = [];
var y = [];
var d = [];
var colors = [];

function setup() {
  createCanvas(400, 400);
  colorMode(RGB)
   for (var index = 0; index < 50; index = index + 1) {
    x[index] = random(10, width-10);
    y[index] = random(10, height-10);
    d[index] = 10;
    colors[index] = color(random(255), random(255), random(255));

  }
}
  
function draw() {
  background(255);
  noStroke();
  for (var index = 0; index < 50; index = index + 1) {
    fill(colors[index]);
    ellipse(x[index], y[index], d[index]);
  
  if (random() < 0.01) {
   d[index] = 20;
  }
    
 if (random() < 0.01) {
   d[index] = 50;
  }
    
  }}
