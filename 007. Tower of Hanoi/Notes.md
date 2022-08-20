# PROBLEM STATEMENT

We are given 3 poles or rodes. 

Pole 1 is the source pole and Pole 3 is the Destination Pole.
The Pole 2 is a helper pole which we can make use of to correctly put discs in order in the pole 3.

We are given N number of discs and initially, these discs are in the Pole 1. We have to move these discs to the Pole 3. And in output, we have to print the steps that we did to move the discs. 

e.g. "move disk 1 from pole 1 to pole 2"
     "move disk 2 from pole 1 to pole 3"
     "move disk 1 from pole 2 to pole 3"


Also, the bigger disc cannot be put on top of a smaller disc. 

So, Rules are ->
    1. Pick one Disc at a time
    2. Bigger Disc cannot be put on top of a smaller Disc


# RECURSIVE APPROACH

Lets assume we have 3 disks so N = 3.

The disks are initally in Pole 1 in ascending order from top to botom which means, the disk at the top is the smallest and the one at the bottom is the largest. They are numbered from 1 to N from top to bottom. So, the topmost disk is the disk 1, and bottom disk is disk N.

## HYPOTHESIS

We have a method steps(N, source, destination, helper)

Here, N -> number of disks
      source -> Pole 1
      destination -> Pole 3
      helper -> Pole 2

So, this method will take all the disks and move them from source to destination

## INDUCTION

Now, we want to apply this on a smaller input. Lets ignore the largest disk on the bottom for now. i.e., we want to apply the method on n-1

steps(N-1, source, destination, helper)

So, as per our hypothesis, this method should move the N-1 disks from source to destination.

And when it does that, all that is left is the move the final largest disk that we ignored initially in N-1. And that will solve our problem, right??? NO!!

Because, if steps(N-1, source, destination, helper) moves N-1 disks to destination, then that means, at the end, we will be putting the Nth disk on top of the smallest which violates the rule. The Nth disk should be at the bottom of Pole 3, not at the top.

So, here, we can make use of the helper method.

In steps(N-1, source, destination, helper), instead of moving all the disks from Pole 1 to Pole 3, we can use the Pole 2 which is our helper pole and keep the N-1 disks in that pole. Then, the Pole 1 will only have the Nth disk which is also the largest. And now, all that we need to do is put that Nth disk from Pole 1 to Pole 3. And when that is done, now we need to think about putting other disks on top of it in Pole 3.


## BASE CONDITION

Since we are making the input smaller, there will be one case when N becomes 1. i.e., only one plate is there that we have to move so we can simply move that from source to destination instead of taking help of the helper method.

