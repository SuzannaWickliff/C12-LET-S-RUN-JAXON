var jaxon, jaxon_running,bomb,coin,energyDrink;
var path, invisiblePath, pathImage,bombImg,coinIg,energyDrinkImg;

function preload() {
  jaxonImage = loadImage("Runner-1.png", "Runner-2.png");

  pathImage = loadImage("path.png");

  bombImage = loadImage("bomb.png");

  coinImage = loadImage("coin.png");

  energyDrinkImage = loadImage("energyDrink.png");
}

function setup() {
  createCanvas(400, 400);

  //create a path sprite
  path = createSprite(200,190,20,400);
  path.addImage(pathImage);
  path.y = path.height/2;
  path.velocityY = -4;
  invisiblePath=createSprite(200,190,50,400);
  invisiblePath.visible=false
  
//create a jaxon sprite
jaxon = createSprite(200,190,30,30);
jaxon.addImage( jaxonImage);
jaxon.scale = 0.1;


}

function draw() {
  background(220);

  jaxon.x=mouseX

 //code to reset background
  if (path.y < 400) {
    path.y = path.height/2;
  }

  jaxon.collide(invisiblePath);
 
//creating continous enemies
var select_sprite = Math.round(random(1,4));
  
if (World.frameCount % 100 == 0) {
  if (select_sprite == 1) {
    bomb();
  } else if (select_sprite == 2) {
    coin();
  } else  {
    energyDrink();
  }
}  

drawSprites();
}

function bomb() {
  var bomb = createSprite(300,Math.round(random(370,20)), 1, 4);
  bomb.addImage(bombImage);
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  bomb.scale = 0.1;
}

function coin() {
  var coin = createSprite(100,Math.round(random(370,20)), 1,4);
  coin.addImage(coinImage);
  coin.velocityY = 3; 
  coin.lifetime = 150;
  coin.scale = 0.3;
}

function energyDrink() {
  var energyDrink = createSprite(200,Math.round(random(370, 20)), 1, 4);
  energyDrink.addImage(energyDrinkImage);
  energyDrink.velocityY = 3;
  energyDrink.lifetime = 150;
  energyDrink.scale = 0.1;
}