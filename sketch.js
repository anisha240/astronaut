var astronaut, bg, sleep, brush, gym, eat, drink, bath, move;

function preload() {

  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  move = loadAnimation("move.png", "move1.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 astronaut = createSprite(300, 230);
 astronaut.addAnimation("sleeping", sleep);
 astronaut.scale = 0.1;

}

function draw() {
  background(bg);
  drawSprites();
  
  var edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if (keyDown("UP_ARROW")) {
   astronaut.addAnimation("brushing", brush);
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
   }

   if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
   }

   if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
   }

  

   if (keyDown("M")) {
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
   }

   if (keyDown("C")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
   }

}