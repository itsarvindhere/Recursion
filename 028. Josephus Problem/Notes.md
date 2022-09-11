# PROBLEM STATEMENT

We are given two numbers -> n and k.

n = total number of people standing in a circle
k = indicates that k-1 persons are skipped and kth person is killed in circle

So, we have to choose a place such that we can survive and all others get killed

e.g. 

If n = 4 and k = 2

It means there are 4 people in a circle. We start from the first, and get to the kth position and kill the person in kth place. Then we start from next person and so on.

The circle is like -
                    n1
                n4       n2
                    n3


From n1, we count k positions (including itself)

So 2nd position from n1 is n2 so n2 is killed and now circle becomes -= 

                        n1
                                
                   n4          n3


Now we start from k + 1th positon i.e., n3. Again count k positions. So n4 is killed.

Circle becomes - 

                    n1

                    n3


Finally, we are at n1 and we count k positions. So n3 is killed

And so, n1 is the one that survives.

This means, for n = 4 and k = 2, we have to be on the 1st position if we want to survive. So return 1.

# HOW TO IDENTIFY RECURSION IN THIS PROBLEM?

Do we have any choices or decisions? If yes then we can try to create a recursive tree.

But we don't see any specific choices or decisions here so we will see if there is any recursive pattern in this problem.

We see that when we kill a person, then again the same process starts with the next person. Then he kills someone. Then again the process starts with next person and so on till one is left.

This means, we have a recursive pattern in this problem and that's why it can be solved using Recursion.



# RECURSIVE APPROACH

Initially, we will have an array of n length and as a person gets killed, his position will become empty so that will then have to be filled by next positions i.e., we have to shift the elements to left if a person is killed. But do note that this will change the index of a person. So we ill keep the values in array as the original positions so that they don't change when we shift.


One problem we will face is when we are at the last index in array. We are given that person are standing in a circle. Which means from last index, we again have to go to the beginning when we count.

So we will have to use modulus here (%) in case index goes out of bounds

From n we create an n sized array.
And since array is 0 indexed, it means instead of k, we kill person at (k-1) position

## HYPOTHESIS

We have a method solve(arr,k) which takes the array of length n and the k (k-1 to be precise)

This method will return the last position that is left in the array.

## INDUCTION

Now lets define this hypothesis on a smaller input

Since we start from 0th index. We know we have to kill person at 
         ((0 + k) % length) index

So, we can kill that person and then apply the same method on the array without the position of person who got killed. i.e., apply the same method on a smaller array.


## BASE CONDITION

Since we want the one position that is safe, when array has only one element left, then that is the safe position and we can return from there.



