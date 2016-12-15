var bad = [];
var good = [];
var images = [bad, good];
//class for healthy foods
var eat = {
 z: 20,
 w: 20,
 c: 20,
 d: 20,
 speed: 1.5,
 

  }

//variables for images
var hungry;



function preload(){
  
//array of images i want to call
  
//array of images i want to call
for (var i = 0; i< 5; i++){
  good[i] = loadImage("images/good" + i + ".png"); 
     }
  hungry = loadImage("images/hungry.png");
}

 var badFood = {
     c: 100,
     d: 100,
     
    
     display: function () {
       for (var i = 0; i< 5; i++){
         bad[i] = loadImage("images/bad" + i + ".png");
         
         
     }
     },

     update: function () {
         image(bad[0],100, 100, 100, 100);
        
     }
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
  badFood.display();
  //badFood.update();
  //eat.food();
  //food.display
  // for (var i = bad.length; i >= 0; i--){
  //   bad[i];
  // }

  
  
  
}
