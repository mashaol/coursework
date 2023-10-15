function setup() {
    //initGame();
    //creating start button
    startButton = createButton('');
    startButton.style('background-image', 'url(assets/startButton.png');
    startButton.style('background-size', 'cover');
    startButton.style('width', '140px');
    startButton.style('height', '70px');
    startButton.position((windowWidth - 100) / 2, (windowHeight / 2) + 50);
    startButton.mousePressed(restartGame);
    startButton.show();
    //creating restart button(hiding it while game is played)
    restartButton = createButton('');
    restartButton.style('background-image', 'url(assets/restartButton.png');
    restartButton.style('background-size', 'cover');
    restartButton.style('width', '120px');
    restartButton.style('height', '50px');
    restartButton.position((windowWidth - 100) / 2, (windowHeight / 2) + 50);
    restartButton.mousePressed(restartGame);
    restartButton.hide();
    lastLevelUpTime = millis();
    //creating the instruction link
    instructionsLink = createA('assets/instructions.html','','_blank');
    instructionsLink.position((windowWidth - 100)/2-150,(windowHeight/2)-130);
    howToPlay = createImg("assets/HowToPlay.png","Instruction");
    howToPlay.parent(instructionsLink);
    howToPlay.size(80,80);
    //initGame();
    startGame();
}
function initGame() {
    startButton.hide();
    instructionsLink.hide();
    //space between trees so 4 fit in at a time, evenly spaced out
    let treeSpacing = width / 4;
    //constructs and pushes tree objects into an array tree, with treespacing being,
    // with even spacing
    //fixed so more trees are not added on each level 
    trees = [];
    for (let i = 0; i < 4; i++) {
        trees.push(new Tree(treeSpacing * i));
    }
    //creates the spider objects
    let spiderSpacing = height / 4
    for (let i = 0; i < 4 *  level; i++) {
        spiders.push(new Spider(spiderSpacing * i));
    }

    //every 100 millisecods calls the updateCharacterPosition function to change
    //the walking images of the character 
    setInterval(updateCharacterPostition, 100);


}

function restartGame() {
    gameRunning = true;
    lives = 5;
    initGame();
    restartButton.hide();
    loop();
    level = 1;
    lastLevelUpTime = millis();
    spiders  =  [];
    initGame();
}
function startGame() {
    //centred canvas
    const canvas = createCanvas(600, 400);
    canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
    background(0);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text('START GAME', width / 2, height / 2);

    //initGame();
    noLoop();
}
