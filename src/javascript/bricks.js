var Bricks = (function (){
    return{
      drawBricks : function(){
        for(c = 0; c < Init.brickColumnCount; c++){
          if(!Init.bricks[c]){
            Init.bricks[c] = [];
            for(r = 0; r < Init.brickRowCount; r++){
                Init.bricks[c][r] = {x : 0, y : 0, status : 1};

            }
          }
        }
        for(c=0; c < Init.brickColumnCount; c++) {
          for(r=0; r < Init.brickRowCount; r++) {
            if(Init.bricks[c][r].status == 1){
                Init.brickX = (c*(Init.brickWidth + Init.brickPadding)) + Init.brickOffsetLeft;
                Init.brickY = (r*(Init.brickHeight + Init.brickPadding)) + Init.brickOffsetTop;
                Init.bricks[c][r].x = Init.brickX;
                Init.bricks[c][r].y = Init.brickY;
                Init.breakout.beginPath();
                Init.breakout.rect(Init.brickX, Init.brickY, Init.brickWidth, Init.brickHeight);
                Init.breakout.fillStyle = "#CC4B4B";
                Init.breakout.fill();
                Init.breakout.closePath();
            }
          }
        }
      }
    };
})();
