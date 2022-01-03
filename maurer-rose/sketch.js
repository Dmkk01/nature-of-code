let n = 0;
let d = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(30)
  createLoop({ duration: 30, gif: true });
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  beginShape();
  strokeWeight(1);

  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  noFill();
  stroke(255, 0, 255, 255);
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  n += 0.005;
  d += 0.01;
}
