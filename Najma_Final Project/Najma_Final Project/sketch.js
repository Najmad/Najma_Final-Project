//variables for images
var bad = [];
var good = [];
//var foods = [];
var i;
var hungry;

//variables for good and bad foods
var w = 50;
var d = 40;
var b = [300, 350, 400, 450, 500, 550];
var a = [1, 50, 100, 150, 200, 250];
var speed = 0;
var c = 600;

var gameStarted;

function preload(){
  //foods[i].goodbad = 1;
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

function startGame()
{
  // change gameStarted variable
  gameStarted = true;
  

}

function setup(){
  createCanvas(600, 600);
  // create clear button
  // startButton = createButton('Start Game');
  // startButton.position(height/2, width/2);
  // startButton.mousePressed(startGame);
  
  // // set gameStarted equal to false
  // gameStarted = false;
  
}

function draw(){
  background(0);
  
  // if(gameStarted == true){
  
    // hide start button
    //startButton.hide();
    move();
    resets();
    control.hungry();
    control.position();
    badFood();
    goodFood();
    eat();
  
  
  
// }

}

function play(){
    
}
function keyReleased(){
    control.stop();
    }

  
  //move with up and down arrow keys
function keyPressed(){
    if (keyCode === DOWN_ARROW) {
      control.go(1);
  } else if 
  (keyCode === UP_ARROW) {
    control.go(-1);
  } 
}

// function eatBadFood(){
//   if(c == control.x && control.y == b){
//       

//     }
// }



