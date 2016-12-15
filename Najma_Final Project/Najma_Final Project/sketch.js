//variables for images
var bad = [];
var good = [];
var hungry;



function preload(){
  //array of images i want to call
  for (var i = 0; i< 5; i++){
        bad[i] = loadImage("images/bad" + i + ".png"); 
    }
  //array of images i want to call
  for (var i = 0; i< 5; i++){
        good[i] = loadImage("images/good" + i + ".png"); 
    }
  hungry = loadImage("images/hungry.png");
}

function setup() {
  createCanvas(600, 600);
  //emoji that user controls with up and down arrows


}

function draw() {
  background(0);
  
  control.hungry();
  control.keyPressed();
  control.keyIsDown();
  
  
  
  
}
