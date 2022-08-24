const getNumbers = (countOf1, countOf0, output, N, list) => { 
    //Base Condition
    if(countOf0 + countOf1 === N){
        list.push(output);
        return;
    }

    if(countOf0 === countOf1){
        output += "1";
        getNumbers(countOf1 + 1, countOf0, output, N, list);
    } else{
        let output1 = output;
        let output2 = output;

        output1 += "0";
        output2 += "1";

        getNumbers(countOf1 + 1, countOf0, output2, N, list);
        getNumbers(countOf1, countOf0 + 1, output1, N, list);
    }
}


let N = 2;
let output = "1";
let list = [];

getNumbers(1,0,output,N, list);

console.log(list)