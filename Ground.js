class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density: 100
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(1);
      fill(77,28,4);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
