# PROBLEM STATEMENT

We are given an array and we have to return a sorted array.
e.g.
    Input  = [2,3,7,6,4,5,9]
    Output = [2,3,4,5,6,7,9]

# HOW TO APPROACH THIS PROBLEM TO SOLVE IT USING RECURSION

It is quite difficult to understand what decisions we can take here so instead of going for a Recursive Tree, We can use the Induction - Hypothesis - Base method here which focuses on smaller input.

## HYPOTHESIS

We have a method sort(array) that takes an array as input and returns a sorted array.

e.g. sort([2,3,7,6,4,5,9]) will return [2,3,4,5,6,7,9]

So, if we remove the last element '9' and then call the method, that means sort([2,3,4,6,4,5]) will return [2,3,4,5,6,7]

## INDUCTION

In Induction step, we write the code to make our method work as we described in Hypothesis.

Because in recursive call, we are not including the last element of the array, that means, this last element should be the greatest element at that time in array so that it is at right place and our sorting is not affected if we do not include it in recursive call.

So, in the induction step, before making a recursive call, we will find the largest element in the array at that time and replace it with the last element in the array.

And then, the recursive call simply includes teh array without the last element.

 sort([2,3,7,6,4,5,9]) will give [2,3,4,5,6,7,9]
 sort([2,3,4,6,4,5]) will give [2,3,4,5,6,7]

Since we are swapping the max element and last element at each recursive call, that means array is being sorted in place and we do not need to use any extra space here.


## BASE CONDITION

What is the Base condition? Since we are making size of array smaller in each recursive call, the smallest valid size is 1.
So, our base condition will check if the size of array is 1 then return from there. Because if an array has a single element, that means it is already sorted.

    if(array.length === 1){
        return;
    }