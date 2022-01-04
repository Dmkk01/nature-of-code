let x = 0;
let y = 0;
let spacing = 20;
let probability = 0.5;
let sliderSpacing;
let sliderProbability;
let button;

function setup() {
    createCanvas(400, 400);
    background(0);
    sliderSpacing = createSlider(0, 50, 20, 5);
    sliderProbability = createSlider(0, 1, 0.5, 0.1);
    button = createButton('Reset');
    button.mousePressed(reset);
    frameRate(30)
    createLoop({ duration: 5, gif: true });
}

function draw() {
    spacing = sliderSpacing.value();
    probability = sliderProbability.value();
    if (y < height) {
        stroke(255);
        if (random(1) < probability) {
            line(x, y, x + spacing, y + spacing);
        } else {
            line(x, y + spacing, x + spacing, y);
        }
        x = x + spacing;
        if (x > width) {
            x = 0;
            y = y + spacing;
        }
    }
}

function reset() {
    background(0);
    x = 0;
    y = 0;
    reset()
}
