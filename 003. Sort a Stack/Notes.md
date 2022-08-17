# PROBLEM STATEMENT

We are given a stack and we have to return a sorted stack.
e.g.
    Input  = [2,3,7,6,4,5,9]
                     
        |      9      | <- Top
        |      5      |
        |      4      |
        |      6      |
        |      7      |
        |      3      |
        |______2______|


    Output = [2,3,4,5,6,7,9]

        |      9      | <- Top
        |      7      |
        |      6      |
        |      5      |
        |      4      |
        |      3      |
        |______2______|

## HYPOTHESIS

We have a method sort(stack) that will take a stack as input and return the sorted stack.

e.g. sort([2,3,7,6,4,5,9]) will give [2,3,4,5,6,7,9]
And similarly, if we ignore the top element then, sort([2,3,7,6,4,5]) will give [2,3,4,5,6,7]

## INDUCTION

So, what we can do is take a temporary stack and then we use this temporary stack to store all the elements smaller than the max element.

e.g. sort([2,3,7,6,4,5])

our top is currently 5. so we initialize max = 5.

Now, we will keep popping elements and check if the element popped is > max or not. if it is then we need to make that element the new max and push the previous maximum to the temporary stack since that is not the biggest. If the element popped is not > max, then we need to push the element popped into the temp stack.

Finally, we will have the max equal to the biggest element in stack and the tempstack will have all the other elements. So at this time, we push all elemets from tempstack back into the original stack and apply sort again. Since max element was never pushed to tempStack, that means when we call sort() again, then the stack will not have the max element this time.

e.g. in case of sort([2,3,7,6,4,5]), it will call sort([2,3,6,4,5]) and max = 7

And as per our hypothesis sort([2,3,6,4,5]) will return [2,3,4,5,6] And now, all that we need to do is push the max into this to get [2,3,4,5,6,7]


## BASE CONDITION

if stack has only one element, then it is already sorted. So that is the base condition. 


# SECOND METHOD

Instead of using a temporary stack, what we can do is simply call sort on all elements except the top element. 

Because of our hypothesis, if we have an array [2,3,7,6,4,5] and we call sort on this array but except the last element i.e.,

sort([2,3,7,6,4]) then we it will give us [2,3,4,6,7]

So, all that is left to do is to insert the element that we did not include in this call i.e., 5. 

And for that, we can use another Recursive method insert() that takes a stack and an element to be inserted.

For that, we again make a hypothesis that if we have a method insert(stack,element) it will give us a stack with the element at right place.

so, insert([2,3,4,6,7],5) will give us [2,3,4,6,7,5]

Again, here the base condition will be when array is empty because at that time, all that we need to do is push the element to be inserted into the array.

Also, since we know that whatever stack we have in insert() method is already sorted,  if the element to insert is greater than the topmost element, that means we can simply push the element on top of the stack. So that is another base condition.

    if(stack.length === 0 || stack[stack.length - 1] <= element){
        stack.push(element);
        return stack;
    }

And the rest is again same as sort() method. We call insert() again but without the top element. Then after it is called, we push back the top element into the stack.