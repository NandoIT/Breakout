var Ball = (function(){
  return {
   drawBall :  function(){
      Init.breakout.beginPath();
      Init.breakout.arc(Init.x, Init.y, Init.ballRadius, 0, Math.PI*2);
      Init.breakout.fillStyle = "#0c7702";
      Init.breakout.fill();
      Init.breakout.closePath();
    }
  }
})();
