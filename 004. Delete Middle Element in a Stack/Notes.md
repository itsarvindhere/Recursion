# PROBLEM STATEMENT

Given a stack, delete the middle element from this stack and return the stack. 

Middle: (size_of_stack/2) + 1

And we are taking 1-based indexing.

e.g. stack = [1,2,3,4,5]
    Here, size of stack = 5 so middle element is at 5/2 + 1 => 3rd position.

    Since we are taking 1-based indexing, 3rd position = 2nd index
    So, 3 is the middle element and hence after removing we return [1,2,4,5]

e.g. stack = [1,2,3,4,5,6]
    Here, size = 6 so, middle element position = 6/2 + 1 => 4
    So, 4 is the middle element here since it is at 4th position


# SOLVING THIS PROBLEM RECURSIVELY

## HYPOTHESIS

We have a method deleteMiddle() which takes a stack as input and removes the middle element.

e.g. deleteMiddle([1,2,3,4,5,6]) will give [1,2,3,5,6]
     deleteMiddle([1,2,3,4,5]) will give [1,2,4,5] 

## INDUCTION
Suppose we have this stack -> [1,2,3,4,5,6]

        |             | 
        |      6      | <- Top
        |      5      |
        |      4      |
        |      3      |
        |      2      |
        |______1______|


Here, middle element is 3 because 6/2 + 1 = 4 and we are taking the position from top of stack.

So, from top, 4th position is occupied by 3

Now, we know that in induction step, we make input smaller. So, we remove the top element from the stack and store it somewhere so that later we can push it back.

Now our stack is like - 

        |             | 
        |             | 
        |      5      | <- Top
        |      4      |
        |      3      |
        |      2      |
        |______1______|

Now we see that the position of 3 is 3 from top. That means as we pop the element from the stack, position will reduce by 1.

Similarly, we now store 5 somewhere and again call delete method with this reduced input. Stack looks like - 

        |             | 
        |             | 
        |             | 
        |      4      | <- Top
        |      3      |
        |      2      |
        |______1______|

Now we see that 3 is at 2nd position. 

Again we pop 4, store it and call the delete method.

        |             | 
        |             | 
        |             | 
        |             | 
        |      3      |  <- Top
        |      2      |
        |______1______|


And now, we see that 3 is at position 1. That means it is at top of stack and so we can pop it from the stack and return from there. Because we have removed the middle element.

And when it is removed, finally, we will just push back the elements we popped before this step.

## BASE CONDITION

The base condition will check if the middle position from the top is 1 or not. If it is 1, we know the element to remove is at top of stack and we can simply pop and return from there.

    if(middlePos === 1){
        stack.pop();
        return;
    }