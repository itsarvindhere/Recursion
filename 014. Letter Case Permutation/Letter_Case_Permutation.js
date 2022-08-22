const permutations = (input, output, list) => {
    //Base condition
    if(input.length === 0){
        list.push(output);
        return;
    }
    let char = input[0];

    input = input.slice(1);

    //If character is an alphabet, we have two choices hence two outputs
    if(char.toLowerCase() !== char.toUpperCase()){

        let output1 = output;
        let output2 = output;

        //put the character as it is in output1
        output1 += char;
        // Put the character in output2 with case changed i.e., if uppercase then put it in lowercase and vice versa
        output2 += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

        permutations(input, output1, list);
        permutations(input, output2, list);
    } else{
        // If the character is a digit, that means we put it as it is hence, there is only one choice and so only one output in that case
        let output1 = output;
        output1 += char;
        permutations(input, output1, list);
    }
}

let string = "a1b2";
let list = [];
let output = "";

permutations(string, output, list);

console.log("Letter Case Permutations are -> ", list)