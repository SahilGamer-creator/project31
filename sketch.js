
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground;
var division1,division2,division3,division4,division5,division6,division7;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,790,800,20);

	for(var k = 0; k<=width;k=k+80){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
	  
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
}

