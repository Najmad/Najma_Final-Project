//variables 
var bad = [];
var good = [];
//var foods = [];
var i;
var hungry;
var w = 50;
var d = 100;
var a = [1, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];
var speed = 3;
var c;
var c2;
var rand;
var gameStarted;
var f1;
var c1;
var r;
var t;
var t2;
var g;
var c2;

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
  //a = numbs[random(numbs.length)];
  //rand = random(bad.length && good.length);
  f1 = new foods();
  c1 = new control();
  r = random(bad);
  t = random(a);
  t2 = random(a);
  g = random(good);
  c = random(600, 650);
  c2 = random(600, 650);
  
  }


function draw(){
  background(0);
  
  // if(gameStarted == true){
  
    // hide start button
    //startButton.hide();
    c1.hungry();
    c1.position();
    
    //eat();
    //for (var j = 0; j < 100; j++){
   
    
    f1.badFood();
    
   
    f1.goodFood();
    
    //}
    f1.move();
    
    if (c1.intersects(f1.badFood)){
       c1.bigger();
  
     }
    
    if (c1.intersecting(f1.goodFood)){
      c1.smaller();
  
    }
    f1.resets();

  
  
// }

}

// function play(){
    
// }
function keyReleased(){
    c1.stop();
    }

  
  //move with up and down arrow keys
function keyPressed(){
    if (keyCode === DOWN_ARROW) {
      c1.go(1);
  } else if 
  (keyCode === UP_ARROW) {
    c1.go(-1);
  } 
}





