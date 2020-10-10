
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Stone, Tree, Ground;
var Mango1, Mango2, Mango3, Mango4, Mango5;
var BoyImage, boy;

function preload()
{
	BoyImage = loadImage("PLucking Mangoes 2/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var boy = createSprite(100, 670, 5, 5);
	boy.addImage(BoyImage);
	boy.scale = 0.06;
	Tree = new tree(700, 575, 300, 300);
	Mango1 = new mango(700, 550, 10, 10);
	Mango2 = new mango(675, 580, 12, 12);
	Mango3 = new mango(725, 520, 11, 11);
	Mango4 = new mango(723, 557, 13, 12);
	Mango5 = new mango(690, 520, 10, 13);
	Stone = new stone(75, 630, 30, 30);
	Ground = new ground(400,695, 800, 5); 
	Elastic = new elastic(Stone.body,{x:200, y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Tree.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Stone.display();
  Ground.display();
  Elastic.display();
  
  drawSprites();
 
}
function mouseDragged(){
  
	Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
Elastic.fly();
}
function detectcollision(lstone, lmango){
	mangoBodypos = lmango.body.position;
	stoneBodypos = lstone.body.position;

	var distance = dist(stoneBodypos.x, stoneBodypos.y, mangoBodypos.x, mangoBodypos.y)
	if (distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body.false);
	}
}
function keyPressed(){
    if(keyCode === 32){
        //Stone.trajectory=[];
        Elastic.attach(Stone.body);
        Matter.Body.setPosition(Stone.body, {x:200, y:50});
      
    }
}




