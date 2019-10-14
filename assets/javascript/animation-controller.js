var DEBUGGER_ENABLED = false;
function breakpoint() {
  if(DEBUGGER_ENABLED) {
    debugger;
  }
}

window.onload = function() {
	setup();
};


var randomArray = [];

var FPS;
var arraySize;

var canvasWidth;
var canvasHeight;

var pauseAnimation;
var stopAnimation;


function setup() {
	setupInputs();

	sampleCanvas = document.getElementById("unsortedCanvas");
	canvasHeight = sampleCanvas.height;
	canvasWidth = sampleCanvas.width;

	randomArray = genRandomArray(arraySize, canvasHeight);

	sorts = setupAnimation();
}


function setupAnimation() {
	clearAllCanvases();
	drawArray("unsortedCanvas", randomArray);

	var sBubble = bubbleSort(randomArray.slice(0));
	sBubble.canvas = "bubbleSortCanvas";
	var sSelection = selectionSort(randomArray.slice(0));
	sSelection.canvas = "selectionSortCanvas";
	mView = randomArray.slice(0);
	var sMerge = mergeSort(randomArray.slice(0), 0);
	sMerge.canvas = "mergeSortCanvas";
	var sQuick = quickSort(randomArray.slice(0));
	sQuick.canvas = "quickSortCanvas";
	return [sBubble, sSelection, sMerge, sQuick];
}


function startAnimation(sorts) {
	mainLoop(sorts);
}


var mView = [];
function mainLoop(sorts){

	doFrame();

	function doFrame(){
		if (stopAnimation == true){
			return
		}
		if(!pauseAnimation){
			nextFrame = requestAnimationFrame(stepAllSorts);
		}
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

				if (sorter.canvas == "mergeSortCanvas"){
					if (!Array.isArray(sortData[0])) {
						sortData = [sortData,[],[]];
					};
				};
		        drawArray(sorter.canvas, sortData[ARRAY], 
		        	sortData[POINTER], sortData[SWAP]);
			};
		};
		breakpoint();
	}
}


function genRandomArray(length, maxValue){
	var array = [];
	for(i = 0; i < length; i++){
		array.push(Math.floor(Math.random() * maxValue));
	}
	return array;
}


function resizeArray(size) {
	arraySize = size;
	randomArray = genRandomArray(arraySize, canvasHeight);
	resetAnimation();
}


function resetAnimation() {
	stopAnimation = true;
	setTimeout(setupAnimation, 50);
}


function setFps(fps) {
	FPS = fps;
}


function clickPlay() {
	if(stopAnimation){
		stopAnimation = false;
		pauseAnimation = false;

		sorts = setupAnimation();
		startAnimation(sorts);
	}
	else pauseAnimation = !pauseAnimation;
}
