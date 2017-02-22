var Bricks = (function (){
    return{
      drawBricks : function(){
          for(c = 0; c < Init.brickColumnCount; c++){
              Init.bricks[c] = [];
              for(r = 0; r < Init.brickRowCount; r++){
                  Init.bricks[c][r] = {x : 0, y : 0};
          }
        }
        for(c=0; c < Init.brickColumnCount; c++) {
        for(r=0; r < Init.brickRowCount; r++) {
            Init.brickX = (c*(Init.brickWidth + Init.brickPadding)) + Init.brickOffsetLeft;
            Init.brickY = (r*(Init.brickHeight + Init.brickPadding)) + Init.brickOffsetTop;
            Init.bricks[c][r].x = Init.brickX;
            Init.bricks[c][r].y = Init.brickY;
            Init.breakout.beginPath();
            Init.breakout.rect(Init.brickX, Init.brickY, Init.brickWidth, Init.brickHeight);
            Init.breakout.fillStyle = "#0095DD";
            Init.breakout.fill();
            Init.breakout.closePath();
              }
          }
      }
    }
})();
