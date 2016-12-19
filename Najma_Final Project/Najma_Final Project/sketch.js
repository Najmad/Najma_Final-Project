//variables 
var bad = [];
var good = [];
//var i;
var hungry;
var w = 50;
var d = 100;
var a = [1, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];
//var rand;
var gameStarted;
var f1;
var c1;
var c2;
var c;
var t;
var t2;
var count = 0;
var mmm;



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
    bad[6] = loadImage("images/bad6.png");
    bad[7] = loadImage("images/bad7.png");
    bad[8] = loadImage("images/bad8.png");
    good[0] = loadImage("images/good0.png");
    good[1] = loadImage("images/good1.png");
    good[2] = loadImage("images/good2.png");
    good[3] = loadImage("images/good3.png");
    good[4] = loadImage("images/good4.png");
    good[5] = loadImage("images/good5.png");
    good[6] = loadImage("images/good6.png");
    good[7] = loadImage("images/good7.png");
    good[8] = loadImage("images/good8.png");
    mmm = loadSound("sound/mmm.mp3");
    
    
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
  

  
  }


function draw(){
  background(0);
  //count ++;
  //console.log(count)
  //var mil = millis();
  //console.log(mil)
  
  // window.setInterval(f1.badFood(), Math.floor(Math.random()*10));
  // window.setInterval(f1.goodFood(), Math.floor(Math.random()*10));
  // window.setInterval(f1.move(), Math.floor(Math.random()*10));
  // // if(gameStarted == true){
  
    // hide start button
    //startButton.hide();
    c1.hungry();
    c1.position();
    
    // if (mil >= 500){
    // f1.badFood();
    // f1.goodFood();
    // f1.move();
    // } 
    // if (mil >= 1000){
    //   f1.badFood();
    //   f1.goodFood();
    //   f1.move();
    // }
     
    window.setTimeout(f1.badFood(), Math.floor(Math.random()*10000));
    window.setTimeout(f1.goodFood(), Math.floor(Math.random()*10000));
    window.setTimeout(f1.move(), Math.floor(Math.random()*10000));
    console.log("hello")
    // f1.badFood();
    // f1.goodFood();
    // f1.move();
     
  
    
    if (c1.intersects(f1.badFood)){
       c1.bigger();
       f1.resetsBadFood();
       mmm.play();
  
     }
    
       

     
    if (c1.intersecting(f1.goodFood)){
      c1.smaller();
      f1.resetsGoodFood();
      mmm.play();
  
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







