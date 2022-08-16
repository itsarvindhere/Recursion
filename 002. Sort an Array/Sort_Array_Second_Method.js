/*
    TRACKING HOW IT IS WORKING

    suppose array = [3,1,2]

    We call sort([3,1,2]) which sets max = 2 and then again calls sort([3,1])
    sort([3,1]) will set max = 1 and then call sort([3])

    ----------------sort([3,1])-----------------------

    In sort([3]), base condition kicks in. Since length is array is now 1, it is already sorted. 

    So now, we move on to next line in sort([3,1]) which is insert([3], 1)

    We come to insert method. We check if condition and it is not true. So we move on.

    max = 3.
    
    insert([],1) is called.
    And now, if condition becomes true and so it pushes 1 to empty array and returns [1]

    So, we move on to the next line in insert([3],1) which is to push 3 to arr = [1]

    So, insert([3],1) results in arr = [1,3]

    And hence, sort[3,1] completes and returns [1,3]
   ---------------------------------------

   because sort[3,1] returned [1,3] that means now, we can move on to next line inside sort([3,1,2]) method because this method was waiting for sort([3,1]) to finish. It will call insert([1,3],2)


   And now, inside insert([1,3]) method, if statement is not true. So we move on. max = 3 and we call insert([1],2)
   Inside insert([1],2) method, if statement is true because 1 <= 2. So, 2 is pushed to this array. and it returns [1,2]

   Because insert([1],2) returned [1,2] we can move on to next line in insert([1,3],2) which is to push max = 3 to [1,2]

   So we get [1,2,3] And so, sort([3,1,2]) completes


   Hence, finally, we get [1,2,3] which is the sorted array.

*/


const insert = (arr, element) => {
    //Base Condition
    if(arr.length === 0 || arr[arr.length - 1] <= element){
        arr.push(element);
        return arr;
    }

    //Induction
    let max = arr.pop();
    insert(arr, element);
    arr.push(max);
}

const sort = (arr) => {

    // Base Condition
    if(arr.length === 1){
        return arr;
    }

    //Induction
    let max = arr.pop();
    sort(arr);
    insert(arr, max);
}


let arr = [5,2,0,1];
sort(arr);
console.log("Array after sorting -> ", arr);
