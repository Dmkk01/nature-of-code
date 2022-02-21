let x, y;
let px, py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;
let stepSize = 20;
let totalSteps;

function isPrime(value) {
  if (value <= 1)
  return false;

  if (value <= 3)
  return true;

  if (value%2 == 0 || value%3 == 0)
  return false;

  for (var i=5; i*i<=value; i=i+6)
  {
     if (value%i == 0 || value%(i+2) == 0)
     return false;
  }

  return true;
}

function setup() {
  createCanvas(500, 500);
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
  frameRate(30);
  createLoop({ duration: 30, gif: true });
}

function draw() {
  if (isPrime(step)) {
    fill(255);
    stroke(255);
    circle(x, y, stepSize * 0.5);
  }
  line(x, y, px, py);
  px = x;
  py = y;


  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }

  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;

  if (step > totalSteps) {
    noLoop();
  }
}