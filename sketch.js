var background1,ironman,robo1,robo2,robo3,robo7,birdrobo,dogrobo,robo4,bullet,SCORE
var backgroundImage,ironmanImage,bulletImage,robo1Image,robo2Image,robo3Image,robo4Image,birdroboImage,dogroboImage
var robo1Group,robo2Group,robo3Group,robo4Group,dogroboGroup,birdroboGroup
SCORE=0
function preload(){
  backgroundImage=loadImage("background 2.jpg")
  ironmanImage=loadImage("ironman.png")
  bulletImage=loadImage("bullet.png")
  robo1Image=loadImage("robo1.png")
  robo2Image=loadImage("robo2.png")
  robo3Image=loadImage("robo3.png")
  robo7Image=loadImage("robo7.png")
  birdroboImage=loadImage("birdrobo.png")
  dogroboImage=loadImage("dogrobo.png")
  
}
function setup() {
  createCanvas(1200,900);
  background1=createSprite(600,450,1200,900)
  background1.addImage(backgroundImage)
  background1.velocityX=-3
  background.scale=1
  
  ironman=createSprite(100,100,20,20)
  ironman.addImage(ironmanImage)
  ironman.scale=0.23
  
 robo1Group = new Group()
 robo2Group = new Group()
 robo3Group = new Group()
 robo4Group = new Group()
 robo7Group = new Group()
 birdroboGroup = new Group()
 dogroboGroup = new Group()
 bulletGroup = new Group() 
}

function draw() {
  background(220);
  
  if(background1.x<250){
    background1.x=700
  }
 
  if(keyDown(UP_ARROW)){
    ironman.y=ironman.y-7
  }
  
  if(keyDown(DOWN_ARROW)){
    ironman.y=ironman.y+7
  }
  
                                            
  if(keyDown("space")){
      bullet ()
 
    
  }
  var robot = Math.round(random(1,6));
       
  if (World.frameCount % 100 == 0) {
    if (robot == 1) {
      robo1();
    } else if (robot == 2) {
      robo2();
    } else if (robot == 3) {
      robo3();
    } else if (robot == 4){
      robo7();
    
    }
     else if (robot == 6){
    birdrobo();
     } else if (robot == 7){
       dogrobo();
     }
  }
 
  if(bulletGroup.isTouching(robo1Group)){
  bulletGroup.destroyEach()
  robo1Group.destroyEach()
  SCORE=SCORE+2
  }

  if(bulletGroup.isTouching(robo2Group)){
    bulletGroup.destroyEach()
    robo2Group.destroyEach()
    SCORE=SCORE+2
    }

    if(bulletGroup.isTouching(robo3Group)){
      bulletGroup.destroyEach()
      robo3Group.destroyEach()
      SCORE=SCORE+2
      }

      if(bulletGroup.isTouching(robo4Group)){
        bulletGroup.destroyEach()
        robo4Group.destroyEach()
        SCORE=SCORE+2
        }
     
        if(bulletGroup.isTouching(robo7Group)){
          bulletGroup.destroyEach()
          robo7Group.destroyEach()
          SCORE=SCORE+2
          }

           if(bulletGroup.isTouching(dogroboGroup)){
             bulletGroup.destroyEach()
             dogroboGroup.destroyEach()
            SCORE=SCORE+2
             }

               if(bulletGroup.isTouching(birdroboGroup)){
               bulletGroup.destroyEach()
               birdroboGroup.destroyEach()
               SCORE=SCORE+2
               }
  
  
  drawSprites()
  fill("black")
  textSize(25) 
  text("SCORE: "+SCORE,1000,50)

}

function bullet(){
  var bullet=createSprite(130,80,20,20)
  bullet.addImage(bulletImage)
  bullet.scale=0.1
  bullet.velocityX=7
  bullet.y=ironman.y
  bulletGroup.add(bullet)
}

function robo1(){
  var robo1=createSprite(1200,Math.round(random(50,850)),10,10)
  robo1.addImage(robo1Image)
  robo1.velocityX=-4
  robo1.lifetime = 600
  robo1.scale=0.23
  robo1Group.add(robo1)
  return robo1
} 

function robo2(){
  var robo2=createSprite(1200,Math.round(random(50,850)),10,10)
  robo2.addImage(robo2Image)
  robo2.velocityX=-4
  robo2.lifetime = 600
  robo2.scale=0.23
  robo2Group.add(robo2)
  return robo2
} 

function robo3(){
  var robo3=createSprite(1200,Math.round(random(50,850)),10,10)
  robo3.addImage(robo3Image)
  robo3.velocityX=-4
  robo3.lifetime = 600
  robo3.scale=0.23
  robo3Group.add(robo3)
  return robo3
} 


function robo7(){
  var robo7=createSprite(1200,Math.round(random(50,850)),10,10)
  robo7.addImage(robo7Image)
  robo7.velocityX=-4
  robo7.lifetime = 600
  robo7.scale=0.23
  robo7Group.add(robo7)
  return robo7
} 

 function birdrobo(){
   var birdrobo=createSprite(1200,Math.round(random(50,850)),10,10)
   birdrobo.addImage(birdroboImage)
   birdrobo.velocityX=-4
   birdrobo.lifetime = 600
   birdrobo.scale=0.23
   birdroboGroup.add(birdrobo)
   return birdrobo
 } 
      
 function dogrobo(){
   var dogrobo=createSprite(1200,Math.round(random(50,850)),10,10)
   dogrobo.addImage(dogroboImage)
   dogrobo.velocityX=-4
   dogrobo.lifetime = 600
   dogrobo.scale=0.23
   dogroboGroup.add(dogrobo)
   return dogrobo
 } 
