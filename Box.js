class Box {
  constructor(x,y){
    var options = {
  restitution:0.5,
  friction:0,
  density:0.04

    }
    this.visiblity = 255;
 this.width = 30;
    this.height = 40;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop()}
    else{
World.remove (world,this.body)
push()
this.visiblity = this.visiblity-5
pop()

    }
  }


  Score(){
if(this.visiblity<0 && this.visiblity>-1005){
score++;

} 
  }
}


