var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  createCanvas(450, 175);
  background("red");

  textAlign(CENTER);

  oscA = new p5.Oscillator();
  oscA.setType('sine');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();

  oscS = new p5.Oscillator();
  oscS.setType('sawtooth');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();

  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();

  oscF = new p5.Oscillator();
  oscF.setType('square');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  text('Move Mouse \nover the white\n squares to play music', width / 2, 130);

  fill("white")
  rect(10, 10, 100, 100);
  rect(120, 10, 100, 100);
  rect(230, 10, 100, 100);
  rect(340, 10, 100, 100);
  var osc;
  print(mouseX, " ", mouseY)

  if (mouseX > 10 && mouseX < 110 && mouseY > 10 && mouseY < 110) {
    osc = oscA;
    fill(50);
    rect(10, 10, 100, 100);
    if (osc) {
      osc.amp(0.5, 0.1);
      playing = true;
    }

  } else if (mouseX > 120 && mouseX < 220 && mouseY > 10 && mouseY < 110) {
    osc = oscS;
    fill(50);
    rect(120, 10, 100, 100);
    if (osc) {
      osc.amp(0.5, 0.1);
      playing = true;
    }

  } else if (mouseX > 230 && mouseX < 330 && mouseY > 10 && mouseY < 110) {
    osc = oscD;
    fill(50);
    rect(230, 10, 100, 100);
    if (osc) {
      osc.amp(0.5, 0.1);
      playing = true;
    }

  } else if (mouseX > 340 && mouseX < 440 && mouseY > 10 && mouseY < 110) {
    osc = oscF;
    fill(50);
    rect(340, 10, 100, 100);
    if (osc) {
      osc.amp(0.5, 0.1);
      playing = true;
    }
  } else {

    print("stop!");
    oscA.amp(0, 0.5);
    oscS.amp(0, 0.5);
    oscD.amp(0, 0.5);
    oscF.amp(0, 0.5);
    playing = false;
  }
}
