let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(width/2, height/2)
  background(0);
}

function draw() {
  stroke(255, 100);
  strokeWeight(2);
  walker.update();
  walker.show();
}
