var wall, thickness;
var bullet, speed, weight;
var bulletWeight, bulletSpeed;








function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 40, 15);
  bullet.shapeColor = color(255, 255, 255);

  thickness = random(22, 83);
  weight = random(30, 52);
  speed = random(223, 321);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {

  background("green");  

  bullet.velocityX = speed;

 
  
  if(hasCollided(bullet, wall)){
    
    bullet.velocityX = 0;

    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }

 else if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }
  
  
  drawSprites();
}


function hasCollided(lbullet, lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge >= wallLeftEdge){
  return true
}
return false;
}