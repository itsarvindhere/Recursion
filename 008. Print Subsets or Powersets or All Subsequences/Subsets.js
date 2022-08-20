const subsets = (input, output) => {
    //Base condition
    if(input.length === 0){
        console.log(output);
        return;
    }

    //As per our Recursive tree, for every input/output, we will have two outputs.One will be the same as previous one but the other will have the first character of string included.
    let output1 = output;
    let output2 = output;

    // Include the first character in output2 and remove that character from input string.
    output2 += input[0];
    input = input.slice(1);

    // Now again make a recursive call for each input/output.
    subsets(input,output1);
    subsets(input,output2);
}


let string = "abc";


console.log(`Subsets of ${string} are ->`)
// Initially, input = given string and output= ""
subsets(string, "");