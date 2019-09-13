function drawArray(canvasId, inputArray, pointer = null, swap = []){
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");
	
	var height = canvas.height;
	ctx.clearRect(0,0,canvas.width,height);

	ctx.fillStyle = soft;
	let length = inputArray.length

	if (pointer == null)
		pointer = [null, null];
	else if (!Array.isArray(pointer)) pointer = [pointer, pointer];



	x = 0;
	while(x < length){
		if(x >= pointer[0] && x <= pointer[1] && pointer[0] != null){
			ctx.fillStyle = bold;
			ctx.fillRect(2*x,height,2,-inputArray[x]);
			ctx.fillStyle = soft;
		}
		else if(swap.includes(x)){
			ctx.fillStyle = highlight;
			ctx.fillRect(2*x,height,2,-inputArray[x]);
			ctx.fillStyle = soft;
		}
		else ctx.fillRect(2*x,height,2,-inputArray[x]);
		x++;
	}
}