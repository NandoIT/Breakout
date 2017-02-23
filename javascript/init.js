var Init = (function(){
  var canvas = document.getElementById("breakout");

  return{
     canvas : canvas,
     breakout : canvas.getContext("2d"),

     ballRadius : 10,
     x : canvas.width/2,
     y : canvas.height-20,
     dx : 2,
     dy : -2,

     paddleHeight : 10,
     paddleWidth : 65,
     paddleX : (canvas.width-65)/2,

     rightPressed : false,
     leftPressed : false,

     brickRowCount : 4,
     brickColumnCount : 9,
     brickX : 0,
     brickY : 0,
     b : 0,
     brickWidth : 55,
     brickHeight : 20,
     brickPadding : 20,
     brickOffsetTop : 30,
     brickOffsetLeft : 10,
     bricks : [],

  }

})();
