function draw() {
    background(125, 190, 250);
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