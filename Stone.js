class Stone {
    constructor(x,y) {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:1,
            density:2.5
        }
        this.r = 30;
        this.x = x;
        this.y = y;
        this.body = Bodies.polygon(this.x, this.y, 6, 30, options);
        this.width = 60;
        this.height = 60;
        this.image = loadImage("Stone.png");

        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    }    
};