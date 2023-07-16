let charX = 40;
let charY = 325;
let charSize = 70;
let charSpeed = 3;
let brickHeight = 40;
let roadPos = 0;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let treeImages = [];
let trees = [];
let treeHeight = 60;
let roadSpeed = 2;
let characterImages = [];
let currentImageIndex = 0;
let brickSpacing = 40;

function preload() {
    //pushes character images into an array
    characterImages.push(loadImage("assets/female_walk1.png"));
    characterImages.push(loadImage("assets/female_walk2.png"));

    //pushes tree images into an array
    treeImages.push(loadImage("assets/tree1.png"));
    treeImages.push(loadImage("assets/tree2.png"));
    treeImages.push(loadImage("assets/tree3.png"));
    treeImages.push(loadImage("assets/tree4.png"));
}
//creating tree class
class Tree {
    constructor(x) {
        this.width = 30;
        //height of tree variable
        this.height = random(140, 260);
        this.x = x;
        //bottom of tree starts from the bricks
        this.y = height - brickHeight - this.height;
        this.image = random(treeImages);
    }
    //dispalys tree
    show() {
        image(this.image, this.x, this.y+10, this.width, this.height);
    }
    //changes the x-position of tree in line with road speed
    move() {
        this.x -= roadSpeed;
    }
}

function setup() {
    //centred canvas
    const canvas = createCanvas(600, 400);
    canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
    //space between trees so 4 fit in at a time, evenly spaced out
    let treeSpacing = width / 4;
    //constructs and pushes tree objects into an array tree, with treespacing being,
    // with even spacing
    for (let i = 0; i < 4; i++) {
        trees.push(new Tree(treeSpacing * i));
    }
    //every 100 millisecods calls the updateCharacterPosition function to change
    //the walking images of the character 
    setInterval(updateCharacterPostition, 100);
}

function draw() {
    background(220);
//in response to keypressed the character postition changes the x and y position, respectively
//validates that character  doesn't go off screen to the left (stays half a character)
    if (leftPressed && charX > charSize / 2) {
        charX -= charSpeed;
    }
    //validates that charX doesn't go off screen to the right
    if (rightPressed && charX < width - charSize / 2) {
        charX += charSpeed;
    }
    //validates that character doesn't go off screen upwards
    if (upPressed && charY > charSize / 2) {
        charY -= charSpeed;
    }
    //validates that charY doesn't go below the brick height
    if (downPressed && charY < height - brickHeight - charSize / 2) {
        charY += charSpeed;
    }
//created blocks to fit on screen with current roadPos, 
    fill(153, 77, 0);
    for (let i = 0; i < width / brickSpacing; i++) {
        rect(i * brickSpacing - roadPos, height - brickHeight, brickSpacing, brickHeight);
    }
    //updates roadPos after creating blocks
    roadPos += 2;
    //validates that 
    if (roadPos > brickSpacing) {
        roadPos = 0;
    }

    for (let i = 0; i < trees.length; i++) {
        trees[i].show();
        trees[i].move();
        if (trees[i].x + trees[i].width < 0) {
            let treeSpacing = width / 4;
            trees[i].x = width - treeSpacing + trees[i].width + 150;
        }
    }

    fill(255, 0, 0);
    image(characterImages[currentImageIndex], charX, charY, charSize, charSize);
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
    currentImageIndex = (currentImageIndex + 1) % characterImages.length;
}