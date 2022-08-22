const permutationWithSpaces = (input, output, list) => {

    // Base Condition
    if(input.length === 0){
        list.push(output);
        return;
    }
    
    let output1 = output;
    let output2 = output;
    
    //Do not include a space in output1 so just take the character
    output1 += input[0];

    // Include a space in output2 so first add a space and then the character
    output2 += " " + input[0];
      
    permutationWithSpaces(input.slice(1), output2, list);
    permutationWithSpaces(input.slice(1), output1, list);
}


let string = "ABC";
let list = [];
let output = string[0];
string = string.slice(1);

permutationWithSpaces(string, output, list);

console.log("Permutations are ->", list);