var BrickHit = (function(){
  return {
   brickHit :  function(){
       for(c=0; c < Init.brickColumnCount; c++) {
            for(r=0; r < Init.brickRowCount; r++) {
                if(Init.x > Init.bricks[c][r].x && Init.x < Init.bricks[c][r].x+Init.brickWidth && Init.y > Init.bricks[c][r].y && Init.y < Init.bricks[c][r].y+Init.brickHeight) {
                  if(Init.bricks[c][r].status !== 0){
                    Init.dy = -Init.dy;
                    Init.bricks[c][r].status = 0;
                    Init.score++;
                  }
               }
            }
        }
    }
  };
})();
