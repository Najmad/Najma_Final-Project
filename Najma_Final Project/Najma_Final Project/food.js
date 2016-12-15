
//function to display and move food
var eat = {
 w: 100,
 d: 40,
 c: 600,
 b: 300,
 speed: 5,
  
  food: function(){
  for (i = 0; i < 6; i++){
    image(bad[i], this.c, this.b, this.w, this.w);
    image(good[i], this.c, this.b, this.w, this.w);
  }
  },
  
  move: function(){
    if (frameCount >= 50){
      this.c = this.c -= this.speed;
      //this.b = this.b -= this.speed;
      console.log(frameCount);
    }
  }
  
}