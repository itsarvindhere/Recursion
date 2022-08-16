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


# ANOTHER METHOD

Instead of finding the max element and then replacing the max element with the last element, what we can do is do not do that. 

We simply call the function with all elements except the last element. And when that is called, we need to take the last element and put it in its position in the array. 

The reason to do it this way is to get a better understanding of recursion. Because we will use recursion not just to sort but also to insert the element at a particular place.


## EXAMPLE

lets say we have an array = [2,1,3]

We design a method sort([2,1,3]) that takes this array as output and sorts it to [1,2,3]

And inside this method, we call it again but without the last element.

i.e., sort([2,1]) and it gives us [1,2] .

HOW??

Inside sort([2,1]) we will call sort([2])

since [2] has length == 1, that means it is already sorted so from here, we do not need to call sort() any further. This will be our base condition.

Now, inside sort([2,1]) since sort([2]) finished executing, the next thing left is to put the excluded element i.e., 1 in its pproper place. It will come before 2 and hence array becomes [1,2] which is the result of calling sort[2,1]

# HANDLING THE INSERTION OF ELEMENTS AT PROPER PLACE USING RECURSION

One way to insert elements at proper place is using a loop and ccheck each element of array and compare it with the element that we want to place in array.

But, as we know, if something can be done with a loop, it can also be done with Recursion. And so, we can use Recursion here too.

So, this is a separate problem -> INSERT an element in correct place in a sorted array

For this, we build the Hypothesis first.

## HYPOTHESIS

-> We have a method insert() that will take the array and also the element to be inserted into this array. And as a result, it will give a sorted array with the element inserted in it.

e.g. insert([1,2], 3) will give [1,2,3]
     insert([2], 1) will give [1,2]

## INDUCTION

lets take array [0,1,5] and we have to insert 2 in this array.

If we take out the last element, then that means we have an array [0,1] and we have to insert 2.

Now we can see that because the last element is smaller than the element to insert, we can simply push 2 to this array and return [0,1,2] and that will be one of the base conditions.

Because we had taken out 5 earlier, now we can push that back into this sorted array and so we get [0,1,2,5] which is the required output


## BASE CONDITION

If the array in which we have to insert the element is empty, then that means we can simply put the element in array instead of worrying about its placement and comparing with other elements. So, the base condition will be when array is of size 0.

Also, if the element that we want to insert is greater than the largest element in array then also we do not need to compare with rest of elements and we can simply append the element to insert in the end.

So our base condition for insertion becomes -> 

    if(arr.length === 0 || arr[arr.length - 1] <= element){
        arr.push(element);
        return arr;
    }
