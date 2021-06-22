var bg;
var shuttle;
var moon;
var earth;
var bgI;
var shuttleI;
var moonI;
var earthI;
var station;
var stationI;

function preload(){
   
  bgI = loadImage("images/space.png");
  shuttleI = loadImage("images/shuttle.png");
  stationI = loadImage("images/station.png");
  moonI = loadImage("images/moon.png");
  earthI = loadImage("images/earth.png");
 
}

function setup(){
  createCanvas(displayWidth,displayHeight)
    
  earth = createSprite(1090,380,100,100)
  earth.addImage(earthI)
  earth.scale = 0.9

  moon = createSprite(325,190,70,70)
  moon.addImage(moonI)
  moon.scale = 0.7;

  shuttle = createSprite(1090,280,20,20)
  shuttle.addImage(shuttleI)
  shuttle.scale = 0.9;

  station = createSprite(320,280,50,5)
  station.addImage(stationI)
  station.scale = 0.5; 
  


  


  
  

}

function draw(){

 background(bgI);

 if(keyDown("up")){

   shuttle.y -= 5

 }

 if(keyDown("down")){

  shuttle.y += 5

}

if(keyDown("left")){

  shuttle.x -= 5

}

if(keyDown("right")){

  shuttle.x += 5

}


  drawSprites();
}

