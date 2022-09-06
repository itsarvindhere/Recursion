//Find the sum of digits of a number
let sumOfDigits = (digit) => {
    //Base Condition
    if(digit < 10) {
        return digit;
    }
    return Math.trunc(digit % 10) + sumOfDigits(Math.trunc(digit/10));
}

let arr = [12,30,3]
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
    if(v > 1) count += v * (v - 1) / 2;

})

console.log("Count of Pairs with Same Digit Sum ->", count)
