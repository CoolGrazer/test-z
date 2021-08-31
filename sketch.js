
var  ground;
var pc, spikes, npc, floors, door, level, difficulty, timer,gravity;
var pcimg, spikesimg, npcimg, doorimg, gameState,object,jumps, object2, group,spawnx,spawny,object3,object4,door2,door3,door4;
dimension = 0;
spawnx = 90;
spawny = 900;
gameState = "PLAY";
gravity = 0.8;

function preload()
{
  pcimg = loadAnimation("pixel-undefined-240x203 (1).png","pixel-undefined-240x203 (2).png","pixel-undefined-240x203.png");
  npcimg = loadImage("PERFECT.png");
  spikesimg = loadImage("lol.png");
  doorimg = loadImage("2.png");
}
function setup()
{


createCanvas(windowWidth,windowHeight);
level = 0;

  pc = createSprite(spawnx,spawny,20,20);
  pc.addAnimation("running",pcimg);
  ground = createSprite(100,927,windowWidth * 2,40);
 
  object = createSprite(50,400,99,999);
  object2 = createSprite(300,700,99,999)
  ground.shapeColor = "red";
  object3 = createSprite(1000,900,300,80)
  object3.shapeColor = "red";
  object3.visible = false;
object.shapeColor = "red";
object2.shapeColor = "red";
door2 = createSprite(200,10000,80,100);
door2.shapeColor = "brown";
door = createSprite(1700,870,80,100);
door.shapeColor = "brown";
door3 = createSprite(1700,100000,80,100);
door3.shapeColor = "brown";
spike = createSprite(900,700,800,80);
spike.shapeColor = "white;"
object4 = createSprite(0,0,0,0);
object4.shapeColor = "red";
door4 = createSprite(200,100000,80,100);
door4.shapeColor = "brown";

}
function draw()
{
  background("gray")
 
  console.log(level);
  keyPressed();
 

 if(pc.isTouching(door))
 {
   level = 1;

 }
 if(keyDown("c"))
 {
  level = 0;

  pc = createSprite(spawnx,spawny,20,20);
  pc.addAnimation("running",pcimg);
  ground = createSprite(100,927,windowWidth * 2,40);
 
  object = createSprite(50,400,99,999);
  object2 = createSprite(300,700,99,999)
  ground.shapeColor = "red";
  object3 = createSprite(1000,900,300,80)
  object3.shapeColor = "red";
  object3.visible = false;
object.shapeColor = "red";
object2.shapeColor = "red";
door2 = createSprite(200,10000,80,100);
door2.shapeColor = "brown";
door = createSprite(1700,870,80,100);
door.shapeColor = "brown";
door3 = createSprite(1700,100000,80,100);
door3.shapeColor = "brown";
spike = createSprite(900,700,800,80);
spike.shapeColor = "white;"
object4 = createSprite(0,0,0,0);
object4.shapeColor = "red";
door4 = createSprite(200,100000,80,100);
door4.shapeColor = "brown";
object3.visible = false;
door2.visible = false;
door3.visible = false;
object4.visible = false;
door4.visible = false;
 }
 if(level === 1)
 {
  object.x = 600;
  pc.collide(object3);
  object3.visible = true;
  spike.y = 10000;
  door.y = 10000;
  door2.y = 870;
  
 }
 if(pc.isTouching(door2))
 {
   level = 2;

 }
 if(level === 2)
 {
  object.x = 800;
  pc.collide(object3);
  object3.visible = true;
  spike.y = 10000;
  
  door2.y = 10000;
  door3.y = 870;
 }
 if(pc.isTouching(door3))
 {
   level = 3;

 }
 if(level === 3)
 {
  object.x = 900;
  
  object3.visible = true;
  object3.y  = 800;
  pc.collide(object3);
  spike.y = 10000;
  object4.x = 600;
  object4.y = 800;
  object4.height = 50;
  object4.width = 300;
  pc.collide(object4);
  door2.y = 10000;
  door3.y = 10000;
  door4.y = 870;
 }
 if(pc.isTouching(door4))
 {
   level = 4;

 }
 if(level === 4)
 {
  object.x = 99999;
  object3.visible = true;
  object3.y  = 999999;
  spike.y = 9999999999;
  object4.x = 9999999999;
  object4.y = 9999999999;
  object4.height = 9999999999;
  object4.width = 9999999999;
  pc.collide(object4);
  door2.y = 9999999999;
  door3.y = 9999999999;
  door4.y = 9999999999;



  textSize(32);
  fill(0, 102, 153);
  text('You have beaten the game! Press C to restart!', 500, 60);
  fill("red");
  text('The game could have been larger, but this is my .js game, so im proud!', 500, 90);



 }
 if(pc.isTouching(spike))
 {
   pc.x = spawnx;
   pc.y = spawny;
 }
  pc.debug = true;
  
  pc.collide(object2);
  pc.collide(ground);
  
  if(pc.isTouching(object))
  {
    jumps = 1;
   pc.velocityY = 0.8;
  
   gravity = 0;
   pc.velocityY = pc.velocityY + gravity;
   
  }else{
    
    pc.velocityY = pc.velocityY + 0.8;
   pc.velocityY = pc.velocityY + gravity;
   jumps = 0;
  }
  if(pc.isTouching(object2))
  {
    jumps = 1;
    pc.velocityY = 0.8;
   
    gravity = 0;
    pc.velocityY = pc.velocityY + gravity;
   
  }else{
    
    pc.velocityY = pc.velocityY + 0.8;
   pc.velocityY = pc.velocityY + gravity;
   jumps = 0;
  }
  if(pc.isTouching(ground))
  {
    jumps = jumps + 1;
  }
 pc.collide(object);
  pc.setCollider("rectangle", 0 - 10, 0, 50, 120);

  drawSprites();
}
function keyPressed()
{
  if(keyDown("up") && (jumps = 1))
  {
    pc.velocityY = - 10;
    jumps = 0;

  }
  if(keyDown("left") && pc.x > 0)
  {
    pc.x =pc.x +  -10;
  }
  if(keyDown("right") && pc.x < windowWidth)
  {
    pc.x = pc.x +  10;
  }
  if(keyDown("down"))
  {
    pc.setCollider("rectangle", 0 - 10, 0, 50, 1);
    pc.debug = true;
    pc.velocityY = pc.velocity.y + 5;
   if (keyDown("right"))
   {
     pc.velocityX = 20;
   }
   if (keyDown("left"))
   {
     pc.velocityX = -20;
   }
  }
  if(keyDown("x"))
  {
    pc.setCollider("rectangle", 0 - 10, 0, 50, 120);
    pc.velocityX = 0;
  }
 
  
}
