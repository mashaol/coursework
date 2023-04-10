let circleX = 40;
let circleY = 325;
let circleSize = 70;
let circleSpeed = 3;
let brickHeight = 40;
let roadPos = 0;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let trees = [];
let treeHeight = 60;
let roadSpeed = 2;
let characterImages = [];
let currentImageIndex = 0;
let currentTreeIndex = 0;



function preload() {
    //loads character images into an array
    characterImages.push(loadImage("assets/female_walk1.png"));
    characterImages.push(loadImage("assets/female_walk2.png"));

    //load tree images into the array
    trees.push(loadImage("assets/tree1.png"));
    trees.push(loadImage("assets/tree2.png"));
    trees.push(loadImage("assets/tree3.png"));
    trees.push(loadImage("assets/tree4.png"));
}

function setup() {
    createCanvas(600, 400);
    // let treeSpacing = width / 4;
    //   for (let i = 0; i < 4; i++) {
    //     trees.push(new Tree(treeSpacing * i));
    //   }
    // runs updateschracterposition function every 100 millisecods
    setInterval(updateCharacterPostition, 100);
    //   setInterval(updateTreePostition, 100);
}

class Tree {
    constructor(x) {
        this.width = 30;
        this.height = random(140, 260);
        this.x = x;
        this.y = height - brickHeight - this.height;
        let fileName = "asssets/tree" + (trees.length + 1) + ".png";
        trees.push(loadImage(fileName));
    }

    show() {
        // fill(34, 139, 34);
        // rect(this.x, this.y, this.width, this.height);
        image(trees[currentTreeIndex], this.x, this.y, this.width, this.height);
    }

    move() {
        this.x -= roadSpeed;
    }
}

function draw() {
    background(220);

    // move circle based on which keys are pressed
    if (leftPressed && circleX > circleSize / 2) {
        circleX -= circleSpeed;
    }
    if (rightPressed && circleX < width - circleSize / 2) {
        circleX += circleSpeed;
    }
    if (upPressed && circleY > circleSize / 2) {
        circleY -= circleSpeed;
    }
    if (downPressed && circleY < height - brickHeight - circleSize / 2) {
        circleY += circleSpeed;
    }

    // draw brick road
    fill(153, 77, 0);
    for (let i = 0; i < width / 40; i++) {
        rect(i * 40 - roadPos, height - brickHeight, 40, brickHeight);
    }
    roadPos += 2; // update road position
    if (roadPos > 40) {
        roadPos = 0; // wrap road position when it goes off screen
    }

    //drawing trees
    for (let i = 0; i < trees.length; i++) {
        trees[i].show();
        trees[i].move();
        if (trees[i].x + trees[i].width < 0) {
            let treeSpacing = width / 4;
            trees[i].x = width - treeSpacing + trees[i].width + 150;
        }
    }

    // draw circle
    fill(255, 0, 0); // set circle color to red
    // circle(circleX, circleY, circleSize);
    image(characterImages[currentImageIndex], circleX, circleY, circleSize, circleSize);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        leftPressed = true;
    } else if (keyCode === RIGHT_ARROW) {
        rightPressed = true;
    } else if (keyCode === UP_ARROW) {
        upPressed = true;
    } else if (keyCode === DOWN_ARROW) {
        downPressed = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        leftPressed = false;
    } else if (keyCode === RIGHT_ARROW) {
        rightPressed = false;
    } else if (keyCode === UP_ARROW) {
        upPressed = false;
    } else if (keyCode === DOWN_ARROW) {
        downPressed = false;
    }
}

function updateCharacterPostition() {
    // cycles through the indexs of the images in the chracterImages array
    currentImageIndex = (currentImageIndex + 1) % characterImages.length;
}

function updateTreePostition() {
    // cycles through the indexs of the images in the chracterImages array
    currentTreeIndex = (currentTreeIndex + 1) % trees.length;
}