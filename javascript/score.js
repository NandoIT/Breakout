var Score = (function(){
    return {
        drawScore : function(){
          Init.breakout.font = '16px Arial';
          Init.breakout.fillStyle = "#000000";
          Init.breakout.fillText("Score: "+ Init.score, 8, 20);

        }
    }
})();
