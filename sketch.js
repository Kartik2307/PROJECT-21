var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(100,200);
  weight=random(30,32);

  bullet=createSprite(50, 200,35,20);
  bullet.shapeColor=color(255);
  bullet.velocityX=speed;

  wall=createSprite(1350, 200,thickness,height/2);
  wall.shapeColor=color(0,0,255);
  
}

function draw() {
  background("black");  
if(hasCollided(bullet,wall)){
  
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  console.log(damage);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }


}
  drawSprites();
  
}

function hasCollided(lbullet,lwall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
  return false;
}