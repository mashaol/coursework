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
    let spiderSpacing = height/4
    for(let i = 0; i < 4; i++){
        spiders.push(new Spider(spiderSpacing * i));
    }

    //every 100 millisecods calls the updateCharacterPosition function to change
    //the walking images of the character 
    setInterval(updateCharacterPostition, 100);
}

