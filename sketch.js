const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper; 
var ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1600, 680);
	engine = Engine.create();
  world = engine.world;
	Engine.run(engine);
  
  ground = new Ground(width/2, 670, width, 20);

  paper = new Paper(100, 450, 40);

  dustbin1 = new Dustbin(740, 600, 20, 100);
  dustbin2 = new Dustbin(560, 600, 20, 100);
  dustbin3 = new Dustbin(650, 660, 200, 20);
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -60});
  }
}



