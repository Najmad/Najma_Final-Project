//class for game controller / emoji
var control = {
 x: 10,
 y: 300,
 z: 40,
 speed: 0,
 
 //displays game controller emoji
 
 hungry: function() {
    image(hungry, this.x, this.y, this.z, this.z);
  },
  
  bigger: function(){
    this.z += 10;
  },
  
  stop: function(){
    this.speed = 0;
  },
  
  go: function(direction){
    this.speed = direction * 3;
  },
  
  position: function(){
    this.y += this.speed;
    
  },
  
  collide: function(){
    
  }
  
  
  
  
  
}
