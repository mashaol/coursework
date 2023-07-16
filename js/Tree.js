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