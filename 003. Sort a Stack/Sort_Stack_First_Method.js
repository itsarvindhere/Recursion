const sort = (stack) => {
    //Base Condition
    if(stack.length === 1){
        return stack;
    }

    // Induction
    let tempStack = [];
    let top = stack.pop();
    let max = top;

    //We will have a temporary stack that we will use to store all the elements smaller than the current top element. If we find any element that is bigger than the top element, then we push the top element to this temporary stack and make that bigger element as the new max. 
    while(stack.length > 0){
        let top = stack.pop();
        if(top > max){ //If we want to sort in decreasing order, we simply need to change > to < here
            tempStack.push(max);
            max = top;
        } else{
            tempStack.push(top);
        }
    }    

    // And now all that we need to do is to push all the elements in tempStack back to the original stack. Since tempstack does not have the max element that we found above, the new stack formed will have one less element than before and that one element that is not included is always the biggest element at any time in the stack.
    while(tempStack.length > 0){
        stack.push(tempStack.pop());
    }

    // Recursive Call on n-1 length stack i.e., excluding the top element
    sort(stack);

    // Finally, we can push the biggest element in stack
    stack.push(max);

}


let stack = [5,1,0,2,6];
sort(stack);
console.log("Sorted stack is ->", stack);