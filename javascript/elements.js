var Elements = (function(){
  return{
    drawElements : function(){

      Bricks.drawBricks();
      Ball.drawBall();
      Paddle.drawPaddle();
      BrickHit.brickHit();
    }
  }
})();
