
function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  Jacksonanimation = loadAnimation("Runner-1.png","Runner-2.png");
  
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,300,1007);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
  
  Jackson = createSprite(200,350,30,30);
  Jackson.addAnimation("moving jackson",Jacksonanimation);
  Jackson.scale=0.05;

  leftBoundary = createSprite(10,200,10,350);
  leftBoundary.visible = false;

  rightBoundary = createSprite(390,200,10,350);
  rightBoundary.visible = false;  
  

}

function draw() {
  background(0);
  
  if (path.y > 400){
    path.y = height/2;
  }
  Jackson.x=World.mouseX;
  Jackson.collide(leftBoundary);
  Jackson.collide(rightBoundary);

  
  
  drawSprites();
  
  }
  



