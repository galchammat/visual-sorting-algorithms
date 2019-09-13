var randomArray = []
var solutionArray = []
const FPS = 60
const soft = "#add8e6"
const bold = "#000000"
const highlight = "#FF6961"


function setup(){
	var height = 100
	var width = 100

	randomArray = genArray(width, height);
	console.log(randomArray);
	solutionArray = randomArray.slice(0).sort(function(a, b){return a - b});

	drawArray("unsortedCanvas", randomArray);
	mainLoop();
}


var mView = [];
function mainLoop(){
	sBubble = bubbleSort(randomArray.slice(0));
	sBubble.canvas = "bubbleSortCanvas";
	sSelection = selectionSort(randomArray.slice(0));
	sSelection.canvas = "selectionSortCanvas";
	mView = randomArray.slice(0);
	sMerge = mergeSort(randomArray.slice(0), 0);
	sMerge.canvas = "mergeSortCanvas";
	let sorts = [sBubble, sSelection, sMerge];
	
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
			if (sorter.canvas == "mergeSortCanvas") console.log(sortData);

			if (sortData != undefined){
		        drawArray(sorter.canvas, sortData[ARRAY], 
		        	sortData[POINTER], sortData[SWAP]);
		       
		        //The Array has been completely sorted
				if (sortData[ARRAY] == solutionArray){
					sorts.splice(x)
				}
			}
		}
	}
}


function genArray(length, maxValue){
	var array = [];
	for(i = 0; i < length; i++){
		array.push(Math.floor(Math.random() * maxValue));
	}
	return array;
}
