var MoveBall = (function(){
  return{
    moveBall : function(){
      Init.breakout.clearRect(0,0, Init.canvas.width, Init.canvas.height);
      Elements.drawElements();
      if(Init.x + Init.dx > Init.canvas.width-Init.ballRadius || Init.x + Init.dx < Init.ballRadius) {
          Init.dx =- Init.dx;
      }

      if(Init.y + Init.dy < Init.ballRadius){
        Init.dy =- Init.dy;
      }
      else if (Init.y + Init.dy > Init.canvas.height-Init.ballRadius){
        document.location.reload();
      }
      Init.x += Init.dx;
      Init.y += Init.dy;
    }
  }
})();
