const deleteMiddle = (stack, middlePos) => {
    //Base Condition
    if(middlePos === 1){
        stack.pop();
        return;
    }

    let top = stack.pop();
    deleteMiddle(stack, middlePos - 1);
    stack.push(top);
}

const remove_Middle_Element = (stack) => {
    // To get the position of middle from top of stack, we add 1 to the size/2
    let middle = Math.trunc((stack.length)/2) + 1;

    // Calling the deleteMiddle() method and passing in it the stack and the middle element's position from top of stack
    deleteMiddle(stack, middle);
}


let stack = [1,2,3,4,5,6]
remove_Middle_Element(stack);

console.log("Stack After Deletion of Middle Element ->", stack)
