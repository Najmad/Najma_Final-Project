//class for game controller / emoji
function control(x, y) {
 this.x = 10;
 this.y = 300;
 this.r = 60;
 this.z = 40;
 this.speed = 0;
 
 //displays game controller emoji
 
 this.hungry = function() {
    fill(0, 255);
    image(hungry, this.x, this.y, this.z, this.z);
  }
  
  //makes bigger
  this.bigger = function(){
    this.z += 1.1;
    if (this.z >= 125){
      this.r = 70;
    }
  }
  
  //makes smaller
  this.smaller = function(){
    this.z -= 1;
    if (this.z <= 35){
      this.z = 35;
    }
  }
  
  //stops when button is released
  this.stop = function(){
    this.speed = 0;
  }
  
  //moves when button is released
  this.go = function(direction){
    if (this.z < 65){
    this.speed = direction * 5;
  } else this.speed = direction * 3;
  }
  
  //controls position
  this.position = function(){
    this.y += this.speed;
     
    
  }
  //collision detection btwn controller and food
  this.intersects = function(other) {
    var d = dist(this.x, this.y, c, t);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  
  //collision detection btwn controller and food
  this.intersecting = function(other) {
    var d = dist(this.x, this.y, c, t2);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  
 
  
  
  
}
