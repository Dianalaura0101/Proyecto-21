
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world; 
var ball ; 


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
    engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

ground =new Ground(500,450,1000,20);
right = new Ground(900,395,10,90);
left = new Ground(750,395,10,90);
top_wall = new Ground(200,-20,400,20);

 

var ball_options ={
restitution: 0.95
}

ball = Bodies.circle(150,100,20,ball_options); 
World.add(world,ball);



rectMode(CENTER);
ellipseMode(RADIUS);

}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20)

  ground.show(); 
  top_wall.show(); 
  left.show(); 
  right.show(); 
  Engine.update(engine); 

  
  
  drawSprites();
 
}


function keyPressed (){
if (keyCode === UP_ARROW)
Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05,y:0.05});
}


  