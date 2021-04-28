const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground =  new Log(600,height-8,1200,15);

  log1 = new Log(600,420,280,7);
  log2 = new Log(940,285,190,7);

  rect1 = new Blue(495,380,50,65);
  rect2 = new Blue(547,380,50,65);
  rect3 = new Blue(599,380,50,65);
  rect4 = new Blue(651,380,50,65);
  rect5 = new Blue(703,380,50,65);

  rect6 = new Brown(880,255,50,50);
  rect7 = new Brown(932,255,50,50);
  rect8 = new Brown(984,255,50,50);

  rect9 = new Yellow(520,305,50,65);
  rect10 = new Yellow(572,305,50,65);
  rect11 = new Yellow(624,305,50,65);
  rect12 = new Yellow(676,305,50,65);

  rect13 = new Black(905,195,50,50);
  rect14 = new Black(957,195,50,50);

  rect15 = new Red(545,230,50,65);
  rect16 = new Red(597,230,50,65);
  rect17 = new Red(649,230,50,65);

  rect18 = new Blue(930,145,50,50);

  rect19 = new Brown(570,155,50,65);
  rect20 = new Brown(622,155,50,65);

  rect21 = new Black(595,80,50,65);

  polygon = new Polygon(145,410,50,50);

  chain = new Chain(polygon.body,{x:145,y:410});

  Engine.run(engine);
}

function draw() {
  background(0); 

  ground.display(); 

  log1.display();
  log2.display();

  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();

  rect6.display();
  rect7.display();
  rect8.display();

  rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();

  rect13.display();
  rect14.display();

  rect15.display();
  rect16.display();
  rect17.display();

  rect18.display();

  rect19.display();
  rect20.display();

  rect21.display();

  polygon.display();

  chain.display();

  drawSprites();
  textSize(20);
  fill("yellow");
  text("Drag the Polygon stone and release it, to launch it towards the block",300,50);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function  mouseReleased(){
  chain.fly();
}