
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,LS,RS
var radius = 40
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,680,800,20)
	LS = new Ground(600,600,20,120)
	RS = new Ground(800,600,20,120)
	//Create the Bodies Here.
	var ops = {
		restitution:0.3,
		friction:0,
		density:1.5
	}
	ball = Bodies.circle(260,200,radius/20,ops)
	World.add(world,ball)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  ground.display()
  LS.display()
  RS.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.7,y:-0.7})
	}
}


