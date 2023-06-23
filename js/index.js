let brickHeight = 40;
let roadPos = 0;

function setup() {
    const canvas = createCanvas(600, 400);
    canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
}

function draw() {
  background(100);
  
  // draw brick road
  fill(153, 77, 0);
  for (let i = 0; i < width / 40; i++) {
    rect(i * 40 - roadPos, height - brickHeight, 40, brickHeight);
  }
  
  // move the road
  roadPos += 2;
  if (roadPos > 40) {
    roadPos = 0;
  }
  
  // draw additional shapes or elements
  fill(255, 0, 0);
  // Add code here to draw other objects on the screen
  
}
