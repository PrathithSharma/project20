var bgImage
var cat,cat1,rat,rat1
var cat2,rat2
function preload() {
    bgImage = loadImage("images/garden.png")
cat1 = loadImage("images/cat1.png")
rat1 = loadImage("images/mouse1.png")
cat2 = loadAnimation("images/cat2.png","images/cat3.png")
rat2 = loadAnimation("images/mouse2.png","images/mouse3.png")

}

function setup(){
    createCanvas(1000,800);
cat = createSprite(850,600)
cat.addImage(cat1)
cat.scale = 0.2

rat = createSprite(200,600)
rat.addImage(rat1)
rat.scale = 0.2

    //create tom and jerry sprites here

}

function draw() {

    background(bgImage);
if(cat.x-rat.x<(cat.width-rat.width)/2){
    cat.velocityX = 0
    cat.addAnimation("walking",cat2)
    rat.addAnimation("teasing",rat2)
    
    



}





    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

 if(keyCode===LEFT_ARROW)
 {cat.velocityX = -4
cat.addAnimation("walking",cat2)
cat.changeAnimation("walking")
rat.addAnimation("teasing",rat2)
rat.frameDelay = 25
rat.changeAnimation("teasing")
}
 
 
 
 
    //For moving and changing animation write code here


}
