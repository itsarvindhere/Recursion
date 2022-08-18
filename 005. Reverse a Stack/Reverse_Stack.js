//Method to insert the popped element at the beginning
const insert = (stack, element) =>{
    // Base Condition
    if(stack.length === 0){
        stack.push(element);
        return;
    }

    let top = stack.pop();
    insert(stack, element);
    stack.push(top);
}

// Method to reverse the stack
const reverse = (stack) => {
    //Base Condition
    if(stack.length === 1){
        return;
    }

    let top = stack.pop();
    reverse(stack);
    insert(stack, top);
}


let stack = [1,2,3,4,5];
reverse(stack);

console.log("Stack after reversing ->", stack)