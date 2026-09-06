// Comment out each section before moving to the next

/////////////////////////////////////////////////////////
// Recap 1: Sliding Square

let x = 0;
let y = 120;
let size = 40;
let speed = 3;

let r = 150;
let g = 50;
let b = 200;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);

  // Draw square
  fill(r, g, b);
  square(x, y, size);

  // Move horizontally
  x = x + speed;

  // Bounce off left/right edges
  if (x <= 0 || x + size >= width) {
    speed = speed * -1;

    // Random colour after every bounce
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

/////////////////////////////////////////////////////////
// Task 1: Self Introduction



/////////////////////////////////////////////////////////
// Task 2:



/////////////////////////////////////////////////////////
// Task 3: Scrolling Words



/////////////////////////////////////////////////////////
// Task 4: Endless Scrolling

let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];

/////////////////////////////////////////////////////////
// Challenge 1: Background music



/////////////////////////////////////////////////////////
// Challenge 2: Click to start



/////////////////////////////////////////////////////////