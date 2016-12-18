
  
    //functions to display and move food
 
  function badFood(){
   for (i = 0; i < bad.length; i++){
    image(bad[i], c, a[i], w, w);
  }
 
  }

  function goodFood(){
   for (i = 0; i < 6; i++){
    image(good[i], c, b[i], w, w);
  }
 
   
  }
  
  function move(){
      speed = 3; 
      c = c -= speed;
  }
  
   function resets(){
    if (c < -10){
      c = 600;
    }
  }
  
  
  

