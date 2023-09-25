var player,playerImg;

function preload(){
bgImg=loadImage("assets/bg.jpg")
playerImg=loadImage("assets/boy.png");
}

function setup(){
createCanvas(1400,600)

player=createSprite(500,500,20,20);
player.addImage(playerImg)
player.scale=0.4;

}

function draw(){
background(bgImg);

drawSprites();
}