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
	var vSwap = [];
    for(var i=0; i<array.length; i++){
        var mi = i;
        
        for(var j = i + 1; j<array.length; j++) {
        	yield [array, j, vSwap];
            if(array[j] < array[mi])
                mi = j;
        }

        swap(array, i, mi);
        vSwap = [i, mi];
    }

    yield [array, j, vSwap];
}


function* mergeSort(array, vStart) {
	if (array.length <2) return array;
	// Pointer for array reconstruction for visual representation
	const vEnd = vStart + array.length;
	const pointer = [vStart,vEnd];

	yield[mView, pointer];

	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle, array.length);



	return merge(yield* mergeSort(left, vStart), yield* mergeSort(right, vStart + middle), pointer);

}


function merge(left, right, pointer) {
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

	mView = buildRecursedArray(mView, result, pointer);
	return result;
}


function swap(array, a, b) {
	let temp = array[a];
	array[a] = array[b];
	array[b] = temp;
	return array
}


function buildRecursedArray(main, changes, pointer) {
	start = pointer[0];
	end = pointer[1];

	for (x = start; x < end; x++){
		main[x] = changes[x - start];
	}
	return main
}
