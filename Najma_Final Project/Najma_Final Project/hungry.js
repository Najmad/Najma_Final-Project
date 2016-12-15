//class for game controller / emoji
var control = {
 x: 10,
 y: 300,
 z: 40,
 speed: 1.5,
 
 //displays game controller emoji
 
 hungry: function() {
    image(hungry, this.x, this.y, this.z, this.z);
  },
  
  //move with up and down arrow keys
  keyPressed: function(){
    if (keyCode === DOWN_ARROW) {
      this.y = this.y += this.speed;
  } else if 
  (keyCode === UP_ARROW) {
    this.y = this.y -= this.speed;
  } 
  
},

 keyIsDown: function(){
   if (keyCode === (UP_ARROW) | (DOWN_ARROW)){
   this.speed = this.speed ++;
  } else if (keyReleased){
    this.speed = 0;
  }
}
}