class Spider    {
    constructor(x) {
        this.width = 30;
        //height of tree variable
        this.height = 40;
        this.x = x;
        //bottom of tree starts from the bricks
        this.y = random(10,350);
        this.image = random(spiderImages);
    }
    //dispalys tree
    show() {
        image(this.image, this.x, this.y, this.width, this.height);
    }
    //changes the x-position of tree in line with road speed
    move() {
        this.x -= roadSpeed+random(-5,10);
    }

    hits(character){
        let xDistance = abs(this.x - character.charX);
        let yDistance = abs(this.y - character.charY);
        if(xDistance < this.width/2 +character.charSize/2 && 
        yDistance < this.height/2 +character.charSize/2){
            return true;
        } 
        return false;
    }
}