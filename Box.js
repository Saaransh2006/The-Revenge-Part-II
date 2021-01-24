class Box{
  constructor(x, y) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:2.3
    }
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.width = 30;
    this.height = 40;
    World.add(world, this.body);
    
  }
 
  display(){
    if(this.body.position.y < 500) {
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
    }
  }  
}  