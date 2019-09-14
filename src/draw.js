function drawArray(canvasId, inputArray, pointer = null, swap = []){
	const light = "#F1F1F1";
	const soft = "#009999";
	const bold = "#000000";
	const highlight = "#FF6961";
	const compliment = "#E6BBAD";

	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");
	
	const height = canvasHeight;
	const wCanvas = canvasWidth;
	const wArray = arraySize;
	const wRectangle = wCanvas / wArray;

	// ctx.clearRect(0,0,wCanvas,height);
	// DRAW a light gray rectangle
	ctx.fillStyle = light;
	ctx.fillRect(0,0,wCanvas,height);

	ctx.fillStyle = soft;
	let length = inputArray.length

	if (pointer == null)
		pointer = [null, null];
	else if (!Array.isArray(pointer)) pointer = [pointer, pointer];



	x = 0;
	while(x < length){
		if(x >= pointer[0] && x <= pointer[1] && pointer[0] != null){
			ctx.fillStyle = bold;
			ctx.fillRect(wRectangle*x,height,wRectangle,-inputArray[x]);
			ctx.fillStyle = soft;
		}
		else if(swap.includes(x)){
			ctx.fillStyle = highlight;
			ctx.fillRect(wRectangle*x,height,wRectangle,-inputArray[x]);
			ctx.fillStyle = soft;
		}
		else ctx.fillRect(wRectangle*x,height,wRectangle,-inputArray[x]);
		x++;
	}
}


function clearAllCanvases() {
	var canvases = document.getElementsByClassName("sortCanvas");
	for (x = 0; x < canvases.length; x++){
		var ctx = canvases[x].getContext("2d");
		ctx.clearRect(0,0,canvasWidth,canvasHeight);
	}
}
