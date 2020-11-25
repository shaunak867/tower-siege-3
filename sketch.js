const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score =  0;
var engine, world;



function preload(){
polygonImage = loadImage("polygon.png")




}
function setup(){
createCanvas(800,400)
engine = Engine.create();
world = engine.world;
stand = new Ground(500,350,220,20)
box1 = new Box(500,330)
box2 = new Box(530,330)
box3 = new Box(560,330)
box4 = new Box(590,330)
box5 = new Box(470,330)
box6 = new Box(440,330)
box7 = new Box(410,330)
box8 = new Box(500,290)
box9 = new Box(530,290)
box10 = new Box(560,290)
box11 = new Box(470,290)
box12 = new Box(440,290)
box13 = new Box(500,250)
box14 = new Box(530,250)
box15 = new Box(470,250)
box16 = new Box(500,210)
polygon = Bodies.circle(200,200,40)
World.add(world,polygon)
slingshot = new SlingShot(polygon,{x:200,y:200})
}
function  draw(){
background("black")
Engine.update(engine)
text("SCORE:"+score,650,40)

stand.display();
fill("orange")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

fill("red")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill("green")
box13.display();
box14.display();
box15.display();

fill("blue")
box16.display();

box1.Score();
box2.Score();
box3.Score();
box4.Score();
box5.Score();
box6.Score();
box7.Score();
box8.Score();
box9.Score();
box10.Score();
box11.Score();
box12.Score();
box13.Score();
box14.Score();
box15.Score();
box16.Score();


image(polygonImage,polygon.position.x,polygon.position.y,40,40)
slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){

  if(keyCode === 32){
slingshot.attach(this.polygon);

  }




}
