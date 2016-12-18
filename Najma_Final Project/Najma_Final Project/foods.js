
  
    //functions to display and move food
 
  function badFood(){
   for (i = 0; i < 6; i++){
    image(bad[i], c, a, w, w);
  }
 
  }

  function goodFood(){
   for (i = 0; i < 6; i++){
    image(good[i], c, a, w, w);
  }
 
   
  }
  
 
  
   function move(){
      c = c -= speed;
  }
  
  
    function resets(){
    if (c < -50){
      c = 600;
      a = random(1, 550);
      speed = random(4, 10);
    }
  }
