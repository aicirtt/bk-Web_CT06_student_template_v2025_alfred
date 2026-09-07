// Comment out each section before moving to the next

/////////////////////////////////////////////////////////
// Recap 1: Sliding Square

// let x =0;
// let y=120;
// let size=40;
// let speed=2;

// let r=100;
// let g=50;
// let b=200;

// function setup(){
//   createCanvas(400,300);
// }
// function draw(){
//   background(220);
//   //draw square 
//   fill(r,g,b)
//   square(x,y,size);  

//   // move horizontally
//   x=x+speed;
//   if(x <= 0 ||  x+size >= width){
//     speed = speed * -1 ;
//     r= random(255);
//     g= random(255);
//     b= random(255);
//   }

// }
// Task 1: Self Introduction
// function setup(){
//   createCanvas(400,400);
//   textSize(16);

//   text("My name is Tricia", 50, 50);
//   text("I am 7 years old", 50, 100);
//   text("My favourite activity is coding", 50, 150);

// }


// Task 2:
let foods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta","rice"]

function setup(){
  createCanvas(400,400);
  textSize(16);

  textAlign(RIGHT);

  text("My favourite foods: ",50,50);

  for(let i = 0 ; i <foods.length; i++) {
    text((i+1)+". " + foods[i] , 50, 80+i*25);
  }
}


// Task 3: Scrolling Words
// Task 4: Endless Scrolling

// Challenge 1: Background music
// Challenge 2: Click to start


















// Recap 1: Sliding Square

// let x = 0;
// let y = 120;
// let size = 40;
// let speed = 3;

// let r = 150;
// let g = 50;
// let b = 200;

// function setup() {
//   createCanvas(400, 300);
// }

// function draw() {
//   background(220);

//   // Draw square
//   fill(r, g, b);
//   square(x, y, size);

//   // Move horizontally
//   x = x + speed;

//   // Bounce off left/right edges
//   if (x <= 0 || x + size >= width) {
//     speed = speed * -1;

//     // Random colour after every bounce
//     r = random(255);
//     g = random(255);
//     b = random(255);
//   }
// }

///////////////////////////////////////////////////////
// Task 1: Self Introduction
// function setup() {
//   createCanvas(400, 400);

//   textSize(16);

//   text("My name is Tricia", 50, 50);
//   text("I am 7 years old", 50, 100);
//   text("My favourite activity is coding", 50, 150);
// }


///////////////////////////////////////////////////////
// Task 2:
// let foods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

// function setup() {
//   createCanvas(400, 400);

//   textSize(16);
//   textAlign(LEFT);

//   text("My Favourite Foods:", 50, 50);

//   for (let i = 0; i < foods.length; i++) {
//     text((i + 1) + ". " + foods[i], 50, 80 + i * 25);
//   }
// }


/////////////////////////////////////////////////////////
// Task 3: Scrolling Words
// let foods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

// let yPos = 400;

// function setup() {
//   createCanvas(400, 400);
//   textSize(16);
//   textAlign(LEFT);
// }

// function draw() {
//   background(0);

//   fill(255);

//   text("My Favourite Foods:", 50, yPos);

//   for (let i = 0; i < foods.length; i++) {
//     text((i + 1) + ". " + foods[i], 50, yPos + 30 + i * 25);
//   }

//   yPos = yPos - 1;
// }


/////////////////////////////////////////////////////////
// Task 4: Endless Scrolling

// let storyText = [
//   "A long time ago in a galaxy far,",
//   "far away...",
//   "",
//   "EPISODE I",
//   "THE BEGINNING",
//   "",
//   "It is a period of learning...",
//   "Students have begun their journey",
//   "into the world of p5.js.",
//   "With newfound powers, they",
//   "create amazing visuals and",
//   "animations...",
//   "",
//   "May the Code be with you!"
// ];

// let yPos = 400;
// let lineGap = 35;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(0);

//   fill(255, 255, 0);
//   textSize(24);
//   textAlign(CENTER, CENTER);

//   // Display every line in the array
//   for (let i = 0; i < storyText.length; i++) {
//     let sentence = storyText[i];

//     text(
//       sentence,
//       width / 2,
//       yPos + i * lineGap
//     );
//   }

//   // Move the text upwards
//   yPos = yPos - 0.6;

//   // If the whole story has moved off screen,
//   // move it back to the bottom
//   if (yPos < -storyText.length * lineGap) {
//     yPos = height;
//   }
// }

/////////////////////////////////////////////////////////
// Challenge 1: Background music
// let storyText = [
//   "A long time ago in a galaxy far,",
//   "far away...",
//   "",
//   "EPISODE I",
//   "THE BEGINNING",
//   "",
//   "It is a period of learning...",
//   "Students have begun their journey",
//   "into the world of p5.js.",
//   "With newfound powers, they",
//   "create amazing visuals and",
//   "animations...",
//   "",
//   "May the Code be with you!"
// ];

// let yPos = 400;
// let lineGap = 35;

// let bgMusic;

// function preload() {
//   bgMusic = loadSound("assets/star_wars_theme_8_bit.mp3");
// }

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(0);

//   fill(255, 255, 0);
//   textSize(24);
//   textAlign(CENTER, CENTER);

//   for (let i = 0; i < storyText.length; i++) {
//     text(
//       storyText[i],
//       width / 2,
//       yPos + i * lineGap
//     );
//   }

//   // Move text upwards
//   yPos = yPos - 0.6;

//   // Reset when the whole story goes off screen
//   if (yPos < -storyText.length * lineGap) {
//     yPos = height;
//   }
// }

// function mousePressed() {
//   userStartAudio();

//   if (!bgMusic.isPlaying()) {
//     bgMusic.loop();
//   }
// }
/////////////////////////////////////////////////////////
// // Challenge 2: Click to start
// let storyText = [
//   "A long time ago in a galaxy far,",
//   "far away...",
//   "",
//   "EPISODE I",
//   "THE BEGINNING",
//   "",
//   "It is a period of learning...",
//   "Students have begun their journey",
//   "into the world of p5.js.",
//   "With newfound powers, they",
//   "create amazing visuals and",
//   "animations...",
//   "",
//   "May the Code be with you!"
// ];

// let yPos = 400;
// let lineGap = 35;

// let bgMusic;

// // Boolean flag
// let started = false;

// function preload() {
//   bgMusic = loadSound("assets/star_wars_theme_8_bit.mp3");
// }

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(0);

//   // BEFORE CLICKING
//   if (started == false) {
//     fill(255);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     text(
//       "Click to start the show",
//       width / 2,
//       height / 2
//     );
//   }

//   // AFTER CLICKING
//   else {
//     fill(255, 255, 0);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     for (let i = 0; i < storyText.length; i++) {
//       text(
//         storyText[i],
//         width / 2,
//         yPos + i * lineGap
//       );
//     }

//     // Move text upwards
//     yPos = yPos - 0.6;

//     // Reset when story goes off screen
//     if (yPos < -storyText.length * lineGap) {
//       yPos = height;
//     }
//   }
// }

// function mousePressed() {
//   if (started == false) {
//     started = true;

//     userStartAudio();
//     bgMusic.loop();
//   }
// }


/////////////////////////////////////////////////////////
//challenge 3  extra that i added in click to pause
// let storyText = [
//   "A long time ago in a galaxy far,",
//   "far away...",
//   "",
//   "EPISODE I",
//   "THE BEGINNING",
//   "",
//   "It is a period of learning...",
//   "Students have begun their journey",
//   "into the world of p5.js.",
//   "With newfound powers, they",
//   "create amazing visuals and",
//   "animations...",
//   "",
//   "May the Code be with you!"
// ];

// let yPos = 400;
// let lineGap = 35;

// let bgMusic;

// let started = false;
// let playing = false;

// function preload() {
//   bgMusic = loadSound("star_wars_theme_8_bit.mp3");
// }

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(0);

//   // Before first click
//   if (started == false) {
//     fill(255);
//     textSize(24);
//     textAlign(CENTER, CENTER);
//     text("Click to start the show", width / 2, height / 2);
//   }

//   else {
//     fill(255, 255, 0);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     for (let i = 0; i < storyText.length; i++) {
//       text(
//         storyText[i],
//         width / 2,
//         yPos + i * lineGap
//       );
//     }

//     // Only move when playing
//     if (playing == true) {
//       yPos = yPos - 0.6;
//     }

//     // Reset when text goes off screen
//     if (yPos < -storyText.length * lineGap) {
//       yPos = height;
//     }

//     // Show paused message
//     if (playing == false) {
//       fill(255);
//       textSize(18);
//       text("PAUSED - Click to continue", width / 2, 30);
//     }
//   }
// }

// function mousePressed() {

//   // First click starts
//   if (started == false) {
//     started = true;
//     playing = true;

//     userStartAudio();
//     bgMusic.loop();
//   }

//   // Later clicks pause/resume
//   else {
//     playing = !playing;

//     if (playing == true) {
//       bgMusic.play();
//     } else {
//       bgMusic.pause();
//     }
//   }
// }




//////////////////////////////////////////////////////