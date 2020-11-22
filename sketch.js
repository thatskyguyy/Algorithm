var movingRect,fixedRect;
function setup()
{
  createCanvas(400,400)
  movingRect=createSprite(200,200,90,30)
  movingRect.shapeColor="lightyellow"
  fixedRect=createSprite(200,200,30,80)
  fixedRect.shapeColor="lightyellow"
}
function draw()
{
  background("purple")
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
    movingRect.shapeColor="lightblue"
    fixedRect.shapeColor="lightblue"
  }
  else{
    movingRect.shapeColor="lightyellow"
    fixedRect.shapeColor="lightyellow"
  }
  drawSprites()
}