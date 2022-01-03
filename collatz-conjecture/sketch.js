let len = 14;
let angle = 0.20;
let frequency = 0.05;

function setup() {
    createCanvas(1920, 1080);
    background(0);

    for (let i = 1; i < 10000; i++) {

        let sequence = [];
        let n = i;

        while(n != 1) {
            sequence.push(n);
            n = collatz(n);
        }

        sequence.push(1);
        sequence.reverse();

        resetMatrix();
        translate(width/1.8, 0);

        for (let j = 0; j < sequence.length; j++) {
            let value = sequence[j];
            if (value % 2 == 0) {
                rotate(angle);
            } else {
                rotate(-angle);
            }
            strokeWeight(2);
            getColor(j)
            

            line(0, 0, 0, len);
            translate(0, len);
        }
    }
    saveCanvas('collatz-conjecture', 'jpg');
  }

  function draw() {
      
  }
  
function collatz(n) {
    if (n % 2 == 0) {
        return n / 2;
    } else {
        return (n * 3 + 1) / 2;
    }
}

function getColor(i) {
    red   = sin(frequency*i ) * 127 + 128;
    green = sin(frequency*i + 2*PI/3) * 127 + 128;
    blue  = sin(frequency*i + 4*PI/3) * 127 + 128;
    stroke(red, green, blue, 50);
} 
