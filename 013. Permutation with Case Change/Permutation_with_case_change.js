const permutations = (input, output, list) => {
    //Base Condition
    if(input.length === 0){
        list.push(output);
        return;
    }

    let output1 = output;
    let output2 = output;

    //Do not make the character uppercase
    output1 += input[0];

    //Make the character uppercase
    output2 += input[0].toUpperCase();

    //Recursive call on the smaller input (excluding the character that we put in outputs above)
    permutations(input.slice(1), output1, list);
    permutations(input.slice(1), output2, list);
}


let string = "ab";
let list = [];
let output = "";

permutations(string, output, list);

console.log("Permutations are ->", list);