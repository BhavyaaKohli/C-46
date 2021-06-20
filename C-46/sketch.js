const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var girl
var board 
var arrow1, arrow2, arrow3, arrow4 , bow 
var score = 0
var backgroundImg
var ground 

function preload() {

    backgroundImg = loadImage("stadium.jpeg");


}
    


function setup(){
  createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    board = new Board (width-100 ,height/2+200 )
    ground = new Ground(width/2, height-30, width , 10 )

    arrow1 = new Arrow ( 280 ,420, 300,100)
   
   
    

    bow = new Bow (arrow1.body , {x :280 , y:420 })
}

function draw() { 
    Engine.update(engine)
   

    background(backgroundImg);
   board.display()
   ground.display()

   arrow1.display()
   
   
   bow.display()
    

}

