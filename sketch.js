const World= Matter.World; 
const Bodies= Matter.Bodies;
const Engine= Matter.Engine;

var engine , world;
var box;
function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world ;

  box= Bodies.rectangle(400,200,50,50)
  World.add(world,box)


}

function draw() {
  Engine.update(engine);
  background("black");  
  console.log (box.position)
var pos = box.position
rectMode(CENTER)
  rect(pos.x,pos.y,50,50);

}