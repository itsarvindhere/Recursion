let count = 0;
maxBitwiseORSubsets = (input, output, maxOR) => {
    //Base Condition
    if(input.length === 0){
        if(output === maxOR) count++;
        return;
    }
    
    let output1 = output;
    let output2 = output;
    
    output2 |= input[0];
    input = input.slice(1);
    
    maxBitwiseORSubsets(input, output1, maxOR);
    maxBitwiseORSubsets(input, output2, maxOR);
}


let arr = [3,1];
// Calculate the maximum XOR of the array
let maxOR = 0;
arr.forEach(val => maxOR |= val);

//Here, 0 is the initial XOR value. We will XOR each output with this and update this value in each recursive call. Basically, this acts as XOR so far.
maxBitwiseORSubsets(arr, 0, maxOR)

console.log("Max Bitwise OR is ->", maxOR);
console.log("Count of Subsets with Bitwise OR = Maximum Bitwise OR ->", count)