var MovePaddle = (function (){
	return{
		movePaddle : function(key){
			switch (key.keyCode) {
				case 37:
					if ( Init.paddleX > 0){
						Init.paddleX -= 20;

						Elements.drawElements();
					} else {
						Init.paddlePosX = Init.paddlePosX;
					}
					break;
				case 39:
					if (Init.paddleX < Init.canvas.width-Init.paddleWidth){
						Init.paddleX += 20;

						Elements.drawElements();
					} else {
						Init.paddlePosX = Init.paddlePosX;
					}
					break;
				case 32:
					clearInterval(Init.ballInterval);
					Init.ballInterval = setInterval(MoveBall.moveBall, 10);
					break;
			}
		}
	};
})();
