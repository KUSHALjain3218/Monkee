
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0; 
function preload(){

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  
monkey=createSprite(50,306,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.15;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  oGroup=new Group();
  baGroup=new Group();
}


function draw() {
background(1000);
 
  ground.x=ground.width /2;
  console.log(monkey.x);
 
  if(keyDown("space")&&monkey.y> 50) {
        monkey.velocityY = (-15) ;
      
    }
  monkey.velocityY = monkey.velocityY + 0.8;   
    monkey.collide(ground);
   
  if(baGroup.isTouching(monkey)){
    baGroup.destroyEach();
    score = score+1;
  }
  if(oGroup.isTouching(monkey)){
    oGroup.destroyEach();
    
  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME:"+survivalTime,100,50);
  
 stroke("black");
  textSize(20);
  fill("black");
  text("SCORE:"+score,100,80);
  
    
  
 drawSprites();
  obstacless();
   ban();
  
}

function obstacless(){
  if(frameCount%200===0){
   obstacle=createSprite(400,318,10,10) 
    obstacle.addImage("obstacles",obstaceImage);
    obstacle.velocityX=-7 ;
    obstacle.scale=0.15;
    obstacle.lifetime=134;
    oGroup.add(obstacle);
  }
  
  
  
}
function ban(){
if(frameCount%80===0){
banana=createSprite(200,Math.round(random(120,200)),10,10);
  banana.addImage("bananaaa",bananaImage);
  banana.velocityX=-7;
  banana.scale=0.09;

  baGroup.add(banana);
}}


