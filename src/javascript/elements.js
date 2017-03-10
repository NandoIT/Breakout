var Elements = (function(){
  return{
    drawElements : function(){
      Score.drawScore();
      Bricks.drawBricks();
      Ball.drawBall();
      Paddle.drawPaddle();
      BrickHit.brickHit();
    }
  }
})();
