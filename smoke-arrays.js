var smokes = [];

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i<500; i++){
    smokes[i] = {
      x : random(190,220),
    	y : 290,
      r : 0,
      xSpeed : random(-0.2,0.3),
      ySpeed : random(0.5,2),
      rSpeed : 0.05
    }
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  for (var i = 0; i<500; i++){   
    var smoke = smokes[i];
    //darker as it gets closer to 0
    fill(smoke.y);
    
    rect(smoke.x, smoke.y, 10, 10);
    
    smoke.x = smoke.x + smoke.xSpeed;
    smoke.y = smoke.y - smoke.ySpeed;
    
    // if reach past the top a bunch
    if (smoke.y < -150) {
      smoke.y = 290;
      smoke.x = random(190,220);
    }
    // rotate 0.05 radians ~= 2.8 degrees per frame
    smoke.r += smoke.rSpeed;
  }
}
