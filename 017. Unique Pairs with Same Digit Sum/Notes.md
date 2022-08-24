# PROBLEM STATEMENT

Given an array. Find how many unique pairs are there with the same digit Sum.

e.g. arr = [32,50,14]

Here, each number has digit sum = 5 e.g. 3 + 2 = 5, 5 + 0 = 5, 1 + 4 = 5

So, unique pairs are -> (32,50), (50,14) and (32,14)

Hence for above array, return 3 as count of unique pairs with the same digit sum.

# RECURSIVE APPROACH FOR SUM OF DIGITS

First, we will take each number of the array and find its digit SUM. We can do it with a loop but to practice recursion, we can use Recursion.

Here, we will use the Inducation-Base-Hypothesis method.

## Hypothesis

We have a method sumOfDigits(n) which takes a number as input and returns the sum of its digits
e.g. sumOfDigits(123) -> 6

## Inducation
Now, in the inducation step, we will reduce this input. Suppose we remove the last digit and only calculate sum of the rest of the digits.
sumOfDigits(12) -> 3

This means, to find sum of 123, we can find sum of 12 and then sum the 3 to  it.

To separate last digit from number, we can simply use mod (%) 10. 

e.g. 123 % 10 = 3
And to reduce input, we can divide by 10 -> 123/10 = 12

## Base Condition
if a number is smaller than 10, then we won't again call sumOfDigits() in that case. We wil simply return that number.

because, a single digit number has sum = number itself


So, now, we have got the sum of each element of the array. Now, we will use a Map to store how many numbers have the same count.

We will get map as -> {5 -> 3}

This means, there are 3 numbers in the array with sum of digits = 5

Now, we have to find how many unique pairs are there if count = 3 for a given sum. Again, we can use Recursion

# RECURSIVE APPROACH FOR COUNT OF UNIQUE PAIRS WITH SAME DIGIT SUM

We see that if array has 3 elements with same digit sum then there are 3 pairs. 

What about other numbers?

lets take arr = [12,30]

Here, sum if 3 and both numbers have same sum. So count = 2 here.

Here, there is only one pair (12,30)

This means, if count is 2 for any SUM, then unique pairs = 1

lets take arr = [50,23,14,32]

Here, all the numbers have sum = 5 and there are 4 numbers.

Pairs -> (50,23), (50,14), (50,32), (23,14), (23,32), (14,32)

So, if there are 4 elements with same digit SUM, there will be 6 pairs.

Finally, lets take arr = [60,51,42,33,24]

All numbers have sum = 6 and there are 5 numbers.

Pairs -> (60,51), (60,42), (60,33), (60,24), (51,42), (51,33), (51,24), (42,33), (42,24), (33,24)

So if there are 5 elements with same digit SUM, pairs = 10


Hence we get a pattern as -

    2                       1
    
    3                       3
    
    4                       6
    
    5                       10


If we see, if n is the number of elements with same digit sum, then for it, unique pairs = (n-1) + number of unique pairs for (n-1)
e.g. for 5, it is 10 which is 4 + 6. 4 is 5-1 and 6 is the count of unique pairs for 4.

So, we got our recursive pattern here.

# BASE CONDITION
The base condition will be when number of elements with same digit sum = 2. At that time, we know there is only one pair. And we return from there.
