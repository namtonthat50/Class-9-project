var box;

function setup() {
  createCanvas(1000,1000);
  box=createSprite(200,200);
  box.shapeColor="green";
}

function draw() 
{
  background("blue");

  if(keyDown(LEFT_ARROW)){
    box.x = box.x - 5;
    background("red");
  }
  if(keyDown(RIGHT_ARROW)){
    box.x = box.x + 5;
    background("orange");
  }
  if(keyDown(UP_ARROW)){
    box.y = box.y - 5;
    background("yellow");
  }
  if(keyDown(DOWN_ARROW)){
    box.y = box.y + 5;
    background("purple");
  }
  drawSprites();
}




