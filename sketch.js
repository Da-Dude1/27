
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var roof,obj1,obj2,obj3,obj4,obj5,chain 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,200,600,100)
	obj1= new Bob(450,350,40)
	chain = new Rope(obj1.body,{x:450,y:200})

	obj2= new Bob(300,350,40)
	body1= new Roof(300,200,10,10)
	chain2= new Rope(obj2.body,{x:300,y:200})

	obj3= new Bob(400,350,40)
	body2= new Roof(400,200,10,10)
	chain3= new Rope(obj3.body,{x:400,y: 200})
	
	obj4= new Bob(350,350,40)
	body3= new Roof(200,200,10,10)
	chain4= new Rope(obj4.body,{x:330,y:200})

	obj5= new Bob(500,350,40)
	body4= new Roof(500,200,10,10)
	chain5= new Rope(obj5.body,{x:500,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  obj1.display()
  
  obj2.display()
  obj3.display()
  obj4.display()
  obj5.display()
  drawSprites();
  keyPressed()
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(obj5.body,obj5.body.position,{x:85,y:-85})

	}
}


