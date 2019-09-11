function* bubbleSort(array){
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


function swap(array, a, b){
	let temp = array[a];
	array[a] = array[b];
	array[b] = temp;
	return array
}
