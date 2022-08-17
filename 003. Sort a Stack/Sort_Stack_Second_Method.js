/*
 Similar to how we did in case of sorting an array with second method, in case of stack as well, we can do the same thing. 
*/


const insert = (stack, element) => {
    if(stack.length === 0 || stack[stack.length - 1] <= element){
        stack.push(element);
        return stack;
    }

    let max = stack.pop();
    insert(stack,element);
    stack.push(max);
}


const sort = (stack) => {
    //Base Condition
    if(stack.length === 1){
        return stack;
    }

    let max = stack.pop();

    // Recursive Call on n-1 length stack i.e., excluding the top element
    sort(stack);

    // Finally, we can push the biggest element in stack
    insert(stack,max);

}


let stack = [5,1,0,2,6];
sort(stack);
console.log("Sorted stack is ->", stack);