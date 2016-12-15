//function to display food
var eat = {
  
  food: function(){
  for (i = 0; i < 6; i++){
    image(bad[i], 150, 150, 100, 100);
    image(good[i], 50, 50, 100, 100);
  }
  }
}