const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var lefRect, centerRect, rightRect;
var paperObject, groundObject;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	//Create the Bodies Here.
	//Creating sides of dustbin
	leftRect = new Dustbin(800, 372.5, 20, 75);

	centerRect = new Dustbin(900, 400, 200, 20);

	rightRect = new Dustbin(1000, 372.5, 20, 75);

	//Creating paper object getting thrown in dustbin
	paperObject = new Paper(200, 300, 40);

	groundObject = new Ground(width/2, 460, width, 20);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

	rectMode(CENTER);
	background(0);
	  
	leftRect.display();
	centerRect.display();
	rightRect.display();

	paperObject.display();

	groundObject.display();
  
  	drawSprites();
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70, y:-75});
	}
}