
  
    //functions to display and move food
 function foods(){
    var r;
    var g;
    r = random(bad);
    t = random(a);
    t2 = random(a);
    g = random(good);
    c = random(600, 650);
    c2 = random(600, 650);
    var speed = 4;

  this.badFood = function(){
    image(r, c, t, w, w);
  }
 

  this.goodFood = function(){
    image(g, c2, t2, w, w);
  }
 
   
  
  
 
  
   this.move = function(){
      c = c -= speed;
      c2 = c2 -= speed;
  }
  
  
    this.resets = function(){
    if (c < -50) {
      c = random(600, 700);
      t = random(50, 550);
      speed = random(4, 10);
    } else if (c2 < -50){
      c2 = random(600, 700);
      t2 = random(50, 550);
      speed = random(5, 8);
      
    }
    
    
  }
  
    this.resetsBadFood = function(){
      c = random(600, 700);
      t = random(50, 550);
    }
    
    this.resetsGoodFood = function(){
      c2 = random(600, 700);
      t2 = random(50, 550);
    }
 }
