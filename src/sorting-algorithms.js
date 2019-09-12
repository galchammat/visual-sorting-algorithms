var swapsMS = 0;
var swapsBS = 0;
var swapsSS = 0;

function* bubbleSort(array) {
	var lastswap = [];
	for(i = 0; i < array.length - 1; i ++){
		for(j = 0; j < array.length - 1 - i; j ++){
			if (array[j] >  array[j+1]){
				array = swap(array, j, j+1);
				lastswap = [j+1];
			}
			yield [array, j, lastswap];
		}
	}
}


function* selectionSort(array) {
	var lastswap = [];
    for(var i=0; i<array.length; i++){
        var mi = i;
        
        for(var j = i + 1; j<array.length; j++) {
        	yield [array, j, lastswap];
            if(array[j] < array[mi])
                mi = j;
        }

        swap(array, i, mi);
        lastswap = [i, mi];
    }
    yield [array, j, lastswap];
};


function* mergeSort(array) {
	console.log(randomArray.length - array.length);
	if (array.length <2) return array;
	var middle = Math.floor(array.length / 2);
	var left = array.slice(0, middle);
	var right = array.slice(middle, array.length);

	yield[mView, middle];
	// console.log(mView);
	return merge(yield* mergeSort(left), yield* mergeSort(right));

}


function merge(left, right) {
	var result = [];

	while (left.length && right.length){
		if (left[0] <= right[0]) {
			result.push(left.shift());
		}
		else {
			result.push(right.shift());
		}
	}

	while (left.length) result.push(left.shift());
	while (right.length) result.push(right.shift());
	return result;
}


function swap(array, a, b) {
	let temp = array[a];
	array[a] = array[b];
	array[b] = temp;
	return array
}


function buildRecursedArray(main, changes) {
	return
}
