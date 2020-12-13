const World= Matter.World; 
const Bodies= Matter.Bodies;
const Engine= Matter.Engine;

var engine , world;
var box;
var ground;
function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world ;
var box_options ={
  restitution:0
}
  box= Bodies.circle(400,200,25,box_options)
  World.add(world,box)


  ground = Bodies.rectangle(400,400,800,20,{isStatic:true});
  World.add(world,ground);

}

function draw() {
  Engine.update(engine);
  background("black");  
  console.log (box.position)
var pos = box.position
rectMode(CENTER)
  circle(pos.x,pos.y,50);

  rect(ground.position.x,ground.position.y,800,20)

}
