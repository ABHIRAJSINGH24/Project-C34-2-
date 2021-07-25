const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var border1,border2;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,5);
  border1 = new Ground(0,height/2-divisionHeight/2,5,height-divisionHeight);
  border2 = new Ground(width,height/2-divisionHeight/2,5,height-divisionHeight);
  for(var i = 0; i<=width; i = i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background('aliceblue');  
  Engine.update(engine);

  ground.display();
  border1.display();
  border2.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var i = 0; i<divisions.length; i = i+1){
    divisions[i].display();
  }
  for(var j = 0; j<plinkos.length; j = j+1){
    plinkos[j].display();
  }
  for(var k = 0; k<particles.length; k = k+1){
    particles[k].display();
  }

  drawSprites();
}