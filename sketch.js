const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  s = new Stick(50, 335, 20, 120);
  s1 = new Stick(71, 335, 20, 120);
  s2 = new Stone(100.5, 253.5, 41, 41)
  s3 = new Stick(92, 335, 20, 120);
  s4 = new Stick(113, 335, 20, 120);
  s5 = new Stick(134, 335, 20, 120);
  s6 = new Stick(155, 335, 20, 120);
  s7= new Stone(60.5, 229.5, 41, 90);
  s8 = new Stone(141.5, 229, 41, 90);
}

function draw() {
  Engine.update(engine);
  background(0);  

  s.display();
  s1.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s2.display();
  s7.display();
  s8.display();
}