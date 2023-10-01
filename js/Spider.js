class Spider {
    constructor(x) {
        this.width = 30;
        //height of spider 
        this.height = 40;
        this.x = x;
        //makes the spider generate at random y value
        this.y = random(10, 350);
        this.image = random(spiderImages);
        //checks if the spider has collided already
        this.isColliding = false;
    }
    //dispalys tree
    show() {
        image(this.image, this.x, this.y, this.width, this.height);
    }
    //changes the x-position of tree in line with road speed
    move() {
        this.x -= roadSpeed + random(-5, 10);
    }

    hits(character) {
        let xDistance = abs(this.x - character.charX);
        let yDistance = abs(this.y - character.charY);
        if (!this.isColliding && xDistance < this.width / 2 + character.charSize / 2 &&
            yDistance < this.height / 2 + character.charSize / 2
        ) {
            this.isColliding = true;
            return true;
        }
        return false;
    }

    noHit(character) {
        let xDistance = abs(this.x - character.charX);
        let yDistance = abs(this.y - character.charY);
        if (xDistance >= this.width / 2 + character.charSize / 2 &&
            yDistance >= this.height / 2 + character.charSize / 2
        ) {
            this.isColliding = false;
        }
    }

}
