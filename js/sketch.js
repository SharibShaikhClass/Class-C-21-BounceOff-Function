var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect1 = createSprite(100,100,50,50);
rect2 = createSprite(200,200,50,50);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect);
 isTouching(rect1,movingRect);
 isTouching(rect2,fixedRect);
  drawSprites();
}