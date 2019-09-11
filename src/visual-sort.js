var randomArray = []
const FPS = 1000
const soft = "#add8e6"
const bold = "#000000"
const highlight = "#FF6961"


function setup(){
	var height = 200
	var width = 100

	randomArray = genArray(width, height)
	drawArray("unsortedCanvas", randomArray);
	mainLoop();
}


function mainLoop(){
	sBubble = bubbleSort(randomArray.slice(0));
	sBubble.canvas = "bubbleSortCanvas";
	sSelection = selectionSort(randomArray.slice(0));
	sSelection.canvas = "selectionSortCanvas"
	let sorts = [sBubble, sSelection]
	
	doFrame();

	function doFrame(){
		requestAnimationFrame(stepAllSorts);
		setTimeout(doFrame, 1000/FPS);
	}

	function stepAllSorts(){
		const ARRAY = 0;
		const POINTER = 1;
		const SWAP = 2;

		for(var x = 0; x < sorts.length; x++){
			sorter = sorts[x];
			sortData = sorter.next().value;
			if (sortData != undefined){
		        drawArray(sorter.canvas, sortData[ARRAY], 
		        	sortData[POINTER], sortData[SWAP]);
			}
		}
	}
}


function drawArray(canvasId, inputArray, pointer = null, swap = []){
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");
	
	var height = canvas.height;
	ctx.clearRect(0,0,canvas.width,height);

	ctx.fillStyle = soft;
	let length = inputArray.length

	x = 0;
	while(x < length){
		if(x == pointer){
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


function genArray(length, maxValue){
	var array = [];
	for(i = 0; i < length; i++){
		array.push(Math.floor(Math.random() * maxValue));
	}
	return array;
}
