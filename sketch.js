//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Load Image
function preload(){
	bgImage=loadImage("bg.jpg")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create Objects for balls,ropes and Bar

	ball1 = new Circle(200, 380);
	ball2 = new Circle(300, 380);
	ball3 = new Circle(400, 380);
	ball4 = new Circle(500, 380);
	ball5 = new Circle(600, 380);

	bar = new Bar(385, 150, 400, 50);

	rope1 = new Rope(ball1.body, bar.body, -180, 15);
	rope2 = new Rope(ball2.body, bar.body, -95, 15);
	rope3 = new Rope(ball3.body, bar.body, -5, 15);
	rope4 = new Rope(ball4.body, bar.body, 95, 15);
	rope5 = new Rope(ball5.body, bar.body, 185, 15);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  //Text for key control instructions
  textSize(20)
 fill("#98d42b")
 text("Press",640,260)
 text("Up Arrow Key",640,285)
 text("to start",640,310)

  bar.display();

  //Calling display method from Class Circle and rope
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

	
  drawSprites();

  
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -105, y: -300})
	}
}