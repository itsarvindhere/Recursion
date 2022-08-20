/*
    Given an integer array nums of unique elements, return all possible subsets (the power set).

    The solution set must not contain duplicate subsets. Return the solution in any order.

*/


/*
    This is just a simple variation of previous problem where we had a string. Here we have an array and som if we make a recursive tree for it, we see that initially,

    input = given array
    output = empty array

    list is another array to store all the outputs


    And the rest of the code is the same.

    Here as well, base condition is when input array becomes empty. In that case, we will push our output to the list of substrings.

    And in each call, we make two outputs. One is same as previous output and the other has the first element of input array.

*/

const allSubsets = (input, output, list) => {
    //base Condition
    if(input.length === 0){
        list.push(output);
        return;
    }
    
    let output1 = [...output];
    let output2 = [...output];
    
    output2.push(input[0]);
    input = input.slice(1);
            
    allSubsets(input, output1, list);
    allSubsets(input, output2, list);
}


const subsets  = (nums) => {
    let list = [];
    let output = [];

    allSubsets(nums, output, list);
    return list;
}


let nums = [1,2,3];
console.log("Subsets ->");
console.log(subsets(nums));
