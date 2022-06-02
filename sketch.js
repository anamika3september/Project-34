const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var ground
var backgroundImg
var rope1, rope2
var bunny, bunnyImg
var carrot, carrotImg

function preload() {
backgroundImg = loadImage('background.jpg')
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  
  ground = new Ground(300,400,400,20)
  rope1 = new Rope(4,{x:220,y:190})
}


function draw() {
  background(51);
  image(backgroundImg,0,0,390,390)
  
  Engine.update(engine);
  ground.show()
}

