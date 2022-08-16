const sort = (arr, n) => {

    // Base Condition
    if(n === 1){
        return arr;
    }

    // The last element should be the greatest element in array at any time
    let maxElement = arr[n-1];
    let indexOfMax = n-1;

    for(let i = 0; i < n - 1; i++){
        if(arr[i] > maxElement){
            maxElement = arr[i];
            indexOfMax = i;
        }
    }

    // Swap last element with max element in array
    arr[indexOfMax] = arr[n-1];
    arr[n-1]= maxElement;
    
    // Recursive Call on the array except the last element
    sort(arr, n - 1);
}

let arr = [3,1,2];
let n = 3;
sort(arr, n);
console.log("Array after sorting -> ", arr);