//variables for images
var bad = [];
var good = [];
var i;
var hungry;



function preload(){
// load images
    hungry = loadImage("images/hungry.png");
    bad[0] = loadImage("images/bad0.png");
    bad[1] = loadImage("images/bad1.png");
    bad[2] = loadImage("images/bad2.png");
    bad[3] = loadImage("images/bad3.png");
    bad[4] = loadImage("images/bad4.png");
    bad[5] = loadImage("images/bad5.png");
    good[0] = loadImage("images/good0.png");
    good[1] = loadImage("images/good1.png");
    good[2] = loadImage("images/good2.png");
    good[3] = loadImage("images/good3.png");
    good[4] = loadImage("images/good4.png");
    good[5] = loadImage("images/good5.png");
}


function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(0);
  eat.food();
  eat.move();
  control.hungry();
  control.keyPressed();
  control.keyIsDown();
  
  
}

