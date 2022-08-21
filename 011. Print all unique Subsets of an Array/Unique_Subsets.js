/*
    Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

    The solution set must not contain duplicate subsets. Return the solution in any order.

*/

/*
    This problem is a variation of the previous problem where we returned all subsets of an array. Here, we have to return only the unique subsets.

    Because we know that when we find subsets, order does not matter. Which means [1,4] is same as [4,1]

    So, in this problem, we need to make sure that we avoid duplicates. 

    To make sure we spot duplicates, we can sort the output first and then push it in the list. in that way, if output = [1,4] then it will be put into list as [1,4]

    And if it is [4,1] then also it will be put into list as [1,4]

    So that makes it easier to filter out the unique subsets.

*/



const subsets = (input, output, list) => {
    //Base condition
    if(input.length === 0){
        //e.g. if output is [4,1] and list already has [1,4] we need to make sure we store it has [1,4] only so that it is easier to sort later on
        output.sort(); 
        list.push(output);
        return;
    }

    //As per our Recursive tree, for every input/output, we will have two outputs.One will be the same as previous one but the other will have the first character of string included.
    let output1 = [...output];
    let output2 = [...output];

    // Include the first character in output2 and remove that character from input string.
    output2.push(input[0]);
    input = input.slice(1);

    // Now again make a recursive call for each input/output.
    subsets(input,output1,list);
    subsets(input,output2,list);
}


let arr = [4,4,4,1,4];

let list = [];
subsets(arr, [], list);


// In JavaScript there is no built in way to maintain a set of unique arrays. So here we have to first convert the array into a JSON String so that set can then only store unique JSON Strings.
let set = new Set(list.map(JSON.stringify));

// And now, we just need to convert this set back to an array with each individual array inside it converted back to its original form using JSON.parse
console.log(Array.from(set).map(JSON.parse));