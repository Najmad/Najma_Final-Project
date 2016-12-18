//variables for images
var bad = [];
var good = [];
//var foods = [];
var i;
var hungry;

//variables for good and bad foods
var w = 50;
var d = 40;
var numbs = [1, 50, 100, 150, 200, 250,300, 350, 400, 450, 500, 550];
var speed = 3;
var c = 600;
var rand;

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
 // c = random(100, 600);
  a = numbs[Math.floor(Math.random() * numbs.length)];
  //rand = random(bad.length && good.length);
  
}

function draw(){
  background(0);
  
  // if(gameStarted == true){
  
    // hide start button
    //startButton.hide();
    resets();
    move();
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



