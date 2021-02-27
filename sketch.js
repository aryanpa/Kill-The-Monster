const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground;
var hero;
var fly;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;
var monster;

function preload() {

  backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(435,400,850,10);

  hero = new Hero(200,200,150);

  monster = new Monster(1250,150,150);

  b1 = new Blocks(500,370,45,45);
  b2 = new Blocks(500,325,45,45);
  b3 = new Blocks(500,280,45,45);
  b4 = new Blocks(500,235,45,45);
  b5 = new Blocks(500,190,45,45);
  b6 = new Blocks(500,145,45,45);
  b7 = new Blocks(500,100,45,45);

  b8 = new Blocks(565,370,45,45);
  b9 = new Blocks(565,325,45,45);
  b10 = new Blocks(565,280,45,45);
  b11 = new Blocks(565,235,45,45);
  b12 = new Blocks(565,190,45,45);
  b13 = new Blocks(565,145,45,45);

  b14 = new Blocks(630,370,45,45);
  b15 = new Blocks(630,325,45,45);
  b16 = new Blocks(630,280,45,45);
  b17 = new Blocks(630,235,45,45);
  b18 = new Blocks(630,190,45,45);
  b19 = new Blocks(630,145,45,45);
  b20 = new Blocks(630,100,45,45);
  b21 = new Blocks(630,55,45,45);

  b22 = new Blocks(695,370,45,45);
  b23 = new Blocks(695,325,45,45);
  b24 = new Blocks(695,280,45,45);
  b25 = new Blocks(695,235,45,45);
  b26 = new Blocks(695,190,45,45);

  fly = new Fly(hero.body,{x: 200, y: 50});

}

function draw() {
  background(backgroundImg);

  ground.display();

  hero.display();

  fly.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();

  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();

  monster.display();

}

function mouseDragged(){
    
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}


