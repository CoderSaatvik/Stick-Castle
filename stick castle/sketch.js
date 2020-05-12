
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var square1,square2,square3;
var log1,log2,log3,log4;
function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
    world = engine.world;

  //createSprite(400, 200, 50, 50);
  square1 =new Square(350,350,60,100);
  square2 =new Square(450,300,100,300);
  square3 =new Square(550,350,60,100);

}

function draw() {
  background(0);

  Engine.update(engine);
  fill("pink");
  triangle(300,300,400,300,340,150)
  triangle(380,150,520,150,450,50) 
  
  square1.display();
  square2.display();
  square3.display();
  drawSprites();

}