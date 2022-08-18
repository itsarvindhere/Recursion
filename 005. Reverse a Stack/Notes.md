# PROBLEM STATEMENT

Given a stack. Reverse it using Recursion.

## HYPOTHESIS

We have a stack e.g. [1,2,3,4]

        |             |
        |      4      |<- Top
        |      3      |
        |      2      |
        |______1______|

We will have a method reverse(stack) that takes a stack and reverses it.

So, reverse(stack) will give us -> 

        |             |
        |      1      |<- Top
        |      2      |
        |      3      |
        |______4______|

## INDUCTION

If we reduce the input i..e, remove top element and then apply the reverse method on the stack ->

        |             |
        |             |
        |      3      |<- Top
        |      2      |
        |______1______|

Then as per our hypothesis, reverse(stack) should give us -> 

        |             |
        |             |
        |      1      |<- Top
        |      2      |
        |______3______|

And now, all that is left is to put back the popped element in this stack at beginning of stack. And that can be a separate recursive method itself.

For that, we can design a hypothesis that insert(stack, element) will take the element and add it to the beginning of the stack.

e.g. insert([3,2,1],4) will put 4 at the beginning and give -> [4,3,2,1]

if we reduce the input i.e., remove the top element i.e., 1
insert([3,2],4) will put 4 at the beginning and give -> [4,3,2]

So, all that is left here is to push back 1.

So, in the insert(stack, element) method, we provide the stack and the element to be inserted. We know that if the stack is empty, that means we can safely insert the element in it because our motive is to insert the element in the beginning of stack. 

If it is not empty, we pop the top element, then again call insert(stack, element) on this smaller input and when that is finished, we push back the popped element.

## BASE CONDITION

If the stack has only one element, that means it is already reversed.

if(stack.length === 1){
        return;
}