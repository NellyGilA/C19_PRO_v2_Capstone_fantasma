var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  //grupos
  doorsGroup = new Group();

  //fantasma
  //ghost = createSprite(200,200,50,50);
  
}

function draw() {
  background(200);
  


  /*if(keyDown("space")){
    ghost.velocityY = -10;
  }*/
  
  //ghost.velocityY = ghost.velocityY + 0.8;

  if(tower.y > 400){
      tower.y = 300
    }


}


function spawnDoors() {
  //escribir código aquí para aparecer puertas en la torre.
  //if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    ghost.depth = door.depth;
    ghost.depth +=1;
   
    //asignar tiempo de vida a la variable
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //agregar cada puerta al grupo.
    doorsGroup.add(door);
    invisibleBlock.debug = true;
    //climbersGroup.add(climber);
    //invisibleBlockGroup.add(invisibleBlock);
 // }
}
