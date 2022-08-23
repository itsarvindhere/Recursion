const generateParenthesis = (open, close, output, list) => {
    //Base Condition
    if(open === 0){
        while(close-- > 0) output += ")";
        list.push(output);
        return;
    }

    if(open === close){
        output += "(";
        generateParenthesis(open - 1, close, output, list);
    } else{
        let output1 = output;
        let output2 = output;

        output1 += "(";
        output2 += ")";

        generateParenthesis(open - 1, close, output1, list);
        generateParenthesis(open, close - 1, output2, list);
    }
}


let n = 3;
// N = 3 means 3 open brackets and 3 close brackets
let openBrackets = 3;
let closeBrackets = 3

let list = [];
let output = "";

generateParenthesis(openBrackets, closeBrackets, output, list);
console.log("Valid Balanced Parenthesis are ->");
list.forEach(val => console.log(val));