const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box;
var ground;

function setup()
 {
      createCanvas(800,400);
      engine=Engine.create();
      world=engine.world;

      var option={isStatic:false,restitution:1}
      box=Bodies.circle(200,100,50,option);
      World.add(world,box);
      var option={isStatic:true}
      ground=Bodies.rectangle(400,400, 1000, 20,option);
      World.add(world, ground);
   
 
 
}

function draw() 
{
  background(0);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(box.position.x,box.position.y,50,50)

  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 1000, 20)

}