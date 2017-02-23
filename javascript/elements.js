var Elements = (function(){
  return{
    drawElements : function(){
      Bricks.drawBricks();
      Ball.drawBall();
      Paddle.drawPaddle();
      Bricks.brickHit();
    }
  }
})();
