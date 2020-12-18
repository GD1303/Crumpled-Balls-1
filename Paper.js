class Paper {
  constructor(x, y, radius) {
    var options = {
      'isStatic': false,
      'restitution': 0.3,
      'friction': 0.5,
      'density': 1.2
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    
    push();
    translate(pos.x, pos.y);
    strokeWeight(4);
    stroke("white");
    fill("lightblue");
    ellipse(0, 0, this.r,this.r);
    pop();
  }
}
  