var DEBUGGER_ENABLED = false;
function breakpoint() {
  if(DEBUGGER_ENABLED) {
    debugger;
  }
}


var randomArray = [];
var solutionArray = [];
var FPS = 10;
const soft = "#add8e6";
const bold = "#000000";
const highlight = "#FF6961";


function setup(){
	var height = 100;
	var width = 100;

	randomArray = genArray(width, height);
	solutionArray = randomArray.slice(0).sort(function(a, b){return a - b});

	drawArray("unsortedCanvas", randomArray);

	sBubble = bubbleSort(randomArray.slice(0));
	sBubble.canvas = "bubbleSortCanvas";
	sSelection = selectionSort(randomArray.slice(0));
	sSelection.canvas = "selectionSortCanvas";
	mView = randomArray.slice(0);
	sMerge = mergeSort(randomArray.slice(0), 0);
	sMerge.canvas = "mergeSortCanvas";
	let sorts = [sBubble, sSelection, sMerge];

	mainLoop(sorts);
}


var mView = [];
function mainLoop(sorts){

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

				if (sorter.canvas == "mergeSortCanvas"){
					if (!Array.isArray(sortData[0])) {
						sortData = [sortData,[],[]];
					};
				};

				//The Array has been completely sorted
				if (JSON.stringify(sortData[ARRAY])==JSON.stringify(solutionArray)){
					//Speed up after merge sort completion.. eventually speed up after all faster algorithms
					if (sorter.canvas == "mergeSortCanvas") FPS *= 10;
					// sorts.splice(x);
				};
		        drawArray(sorter.canvas, sortData[ARRAY], 
		        	sortData[POINTER], sortData[SWAP]);
			};
		};
		breakpoint();
	}
}


function genArray(length, maxValue){
	var array = [];
	for(i = 0; i < length; i++){
		array.push(Math.floor(Math.random() * maxValue));
	}
	return array;
}
