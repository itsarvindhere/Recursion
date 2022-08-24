//Find the sum of digits of a number
let sumOfDigits = (digit) => {
    //Base Condition
    if(digit < 10) {
        return digit;
    }
    return Math.trunc(digit % 10) + sumOfDigits(Math.trunc(digit/10));
}

// Recursive Method to find the number of unique pairs if n numbers have the same digit count in the array
let countOfUniquePairs = (n) => {
    //Base Condition
    if(n == 2){
        return 1;
    }
    return (n-1) + countOfUniquePairs(n-1);
}


let arr = [32,50,14,23]
let map = new Map();
let count = 0;

//Fill the Map => key = sum of digits and value = count of numbers with this sum in the array
arr.forEach(el => {
    let sum = sumOfDigits(el);
    if(map.has(sum)){
        map.set(sum,map.get(sum) + 1)
    } else{
        map.set(sum,1)
    }
})

//For each count, find how many unique pairs will be there in the array
map.forEach((v,_) => {
    if(v > 1) count += countOfUniquePairs(v);

})

console.log("Count of Pairs with Same Digit Sum ->", count)
