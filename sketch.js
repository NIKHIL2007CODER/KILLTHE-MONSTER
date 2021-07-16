const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
 keyPressed();
}

function setup() {
  createCanvas(1366,629);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 620, 1200, 20);

  hero = new Hero(100,400,420,200);
  rope = new Rope(hero.body, { x: 200, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 150, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  
  box6 = new Box(670, 100, 70, 70);
  box7 = new Box(670, 100, 70, 70);
  box8 = new Box(670, 150, 70, 70);
  box9 = new Box(670, 100, 70, 70);
  box10 = new Box(670, 100, 70, 70);
  box11 = new Box(670,100,70,70);

  box12 = new Box(740, 100, 70, 70);
  box13 = new Box(740, 100, 70, 70);
  box14 = new Box(740, 150, 70, 70);
  box15 = new Box(740, 100, 70, 70);
  box16 = new Box(740, 100, 70, 70);
  box17 = new Box(740, 100, 70, 70);
  box18 = new Box(740, 100, 70, 70);

  box19 = new Box(810, 100, 70, 70);
  box20 = new Box(810, 100, 70, 70);
  box21 = new Box(810, 150, 70, 70);
  box22 = new Box(810, 100, 70, 70);
  box23 = new Box(810, 100, 70, 70);
  box24 = new Box(810, 100, 70, 70);
  box25 = new Box(810, 100, 70, 70);
  box26 = new Box(810, 100, 70, 70);

}

function draw() {
  if(backgroundImg);
    background(backgroundImg);
  Engine.update(engine);

  ground.display();

  fill(150,33,290);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  fill(150,303,201);
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  fill(150,303,20);
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  fill(255,10,255);
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();
  rope.display();
  monster.display();

}

function mousePressed(){
  
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  //}
}

function keyPressed(){
  
    if(keyCode === 67){
        bg = "gamingbackground2.png";
    }
    else{
        bg = "gamingbackground1.jpg";
    }
  
    backgroundImg = loadImage(bg);
  
}