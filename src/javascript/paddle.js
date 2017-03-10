var Paddle = (function(){
  return {
   drawPaddle :  function(){
      Init.breakout.beginPath();
      Init.breakout.rect(Init.paddleX, Init.canvas.height-Init.paddleHeight, Init.paddleWidth, Init.paddleHeight);
      Init.breakout.fillStyle = "#0c7702";
      Init.breakout.fill();
      Init.breakout.closePath();
    }
  };
})();
