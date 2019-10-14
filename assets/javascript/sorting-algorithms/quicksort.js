function partition(arr, low, high) {
    
    let pivot = arr[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            i++;    // increment index of smaller element
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, high);
    return i+1;
}

function* quickSort(arr) { 
        let l = 0;
        let h = arr.length - 1;
        var stack = []
  
        // push initial values of l and h to stack 
        stack.push(l);
        stack.push(h);
  
        // Keep popping from stack while is not empty 
        while (stack.length != 0) { 
            // Pop h and l 
            h = stack.pop()
            l = stack.pop()
  
            // Set pivot element at its correct position 
            // in sorted array 
            let p = partition(arr, l, h); 
  
            // If there are elements on left side of pivot, 
            // then push left side to stack 
            if (p - 1 > l) { 
                stack.push(l); 
                stack.push(p - 1); 
            } 
  
            // If there are elements on right side of pivot, 
            // then push right side to stack 
            if (p + 1 < h) { 
                stack.push(p + 1); 
                stack.push(h); 
            }
            yield([arr, p]);
        } 

    }
    
randoma = [3,1,6,2,3,5,1,7,3,7,8,3];
solutiona = quickSort(randoma);  