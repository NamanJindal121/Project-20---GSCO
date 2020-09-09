var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  wall = createSprite(1500, 200, 60, height / 2);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;
  deformation = (0.5 * weight * speed * speed) / 22500;
}

function draw() {
  background(0, 0, 0);
  
  if(wall.x - car.x < (car.width + wall.width) / 2){
    if(deformation < 100){
      car.shapeColor = "green";
    }
    if(deformation >= 100 && deformation <=180){
      car.shapeColor = "yellow";
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }
  car.collide(wall);

  drawSprites();
}