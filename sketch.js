var cat , cat_running
var mouse , mouse_running
function preload() {
    //load the images here
frameImage=loadImage("images/garden.png");

cat_sitting=loadImage("images/cat1.png")
cat_running=loadAnimation("images/cat2.png","images/cat3.png")
cat_happy=loadImage("images/cat4.png")

mouse_cheeze=loadImage("images/mouse1.png")
mouse_teasing=loadAnimation("images/mouse2.png","images/mouse3.png")
mouse_happy=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat= createSprite(870,650);
 cat.addAnimation("sitting", cat_sitting);
 cat.scale = 0.2;

 mouse= createSprite(200,650);
 mouse.addAnimation("cheeze", mouse_cheeze);
 mouse.scale = 0.2;

}

function draw() {
 background(frameImage)
 

 //Write condition here to evalute if tom and jerry collide
 if(cat.x-mouse.x <(cat.width-mouse.width)/2) {
    cat.velocityX= 0
    cat.x=350
cat.addAnimation("catHappy", cat_happy)
cat.changeAnimation("catHappy")
    mouse.addAnimation("happy", mouse_happy)
    mouse.velocityX=0
mouse.changeAnimation("happy")
    }

    drawSprites();
   
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("teasing", mouse_teasing)

        mouse.frameDelay= 25
        mouse.changeAnimation("teasing")  
    }
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX= -5
cat.addAnimation("catRunning", cat_running)
cat.changeAnimation("catRunning")



}

}
