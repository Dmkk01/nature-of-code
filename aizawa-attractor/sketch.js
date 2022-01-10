let x = 0.01;
let y = 0.01;
let z = 0;

let a = 0.95;
let b = 0.7;
let c = 0.6;
let d = 3.5;
let e = 0.25;
let f = 0.1;

let dt = 0.01;

let amount = 200;

let options = [];

function setup() {
  createCanvas(800, 600, WEBGL);
  colorMode(HSB);
  frameRate(30);
  createLoop({ duration: 30, gif: true });

  let off = 0.0;

  for (let i = 0; i < amount; i++) {
    options[i] = new Array();
    off = off + 0.05;
    let n = noise(off);
    options[i][0] = new p5.Vector(x * n, y * n, z * n)
  }
}

function draw() {
  background(0);

  for (let option of options) {
    let v = option[option.length - 1];
    let dx = ((v.z - b) * v.x - d * v.y)*dt;
    let dy = (d * v.x + (v.z - b) * v.y) * dt;
    let dz = (c + a*v.z - ((v.z**3)/3)  - v.x**2 + f * v.z * (v.x**3)) * dt;
    newX = v.x + dx;
    newY = v.y + dy;
    newZ = v.z + dz;
    option.push(new p5.Vector(newX, newY, newZ))
  }

  orbitControl();

  scale(50);

  stroke(255);
  noFill();

  let hu = 0;

  for (let option of options) {
    beginShape();
    stroke(hu, 255, 255);
    for (let v of option) {
      vertex(v.x, v.y, v.z);
    }
    endShape();

    hu += 5;
    if (hu > 255) {
      hu = 0;
    }
  }

}
