------------------------------------
HOW TO APPROACH A RECURSIVE PROBLEM?
------------------------------------

We can use any of these methods - 

1. Recursive Tree (As discussed in previous section) (Focus on decisions)
2. Base Condition - Induction - Hypothesis (Focus on making input smaller)
3. Choice Diagram

---------------------------------------
BASE CONDITION - INDUCTION - HYPOTHESIS
---------------------------------------

In this method, for a recursive problem, we design its hypothesis.

e.g. we make a hypothesis that if we have a function named solve(n) then it prints numbers from 1 to n.

And to make it work like that, we have to write some code in the 'INDUCTION' step.

'BASE CONDITION' -> Can include the Smallest Valid Input or the Smallest Invalid Input. Basically we write Base Condition in our recursive function to return from one particular point, otherwise our function will keep calling itself endlessly.

This method is very useful in Tree or LinkedList related problems.

---------------------------------------
PRINT 1 to N
---------------------------------------

One way to do this question is to use a loop. But how to use Recursion to solve this question?

Here, we will be given a number 'N' as input and we have to print all the numbers from 1 to N.

So, input = N and output = 1, 2, 3 .. . . . . , N

---------------------------------------
STEP 1 - HYPOTHESIS
---------------------------------------

 -> We will create a method 'print(N)' and it takes the input 'N'
 -> It will print 1 to N numbers

e.g. print(7) will print 1,2,3,4,5,6,7

---------------------------------------
STEP 2 - INDUCTION
---------------------------------------

 In Mathematics, Induction is essentially used to prove that a statement P(n) holds for every natural number n = 0, 1, 2, 3, ... that is, the overall statement is a sequence of infinitely many cases P(0), P(1), P(2), P(3).

Similarly, here we can do the same.

What if we make the input smaller? i.e., print(6)
It should still print numbers from 1 to N or 1 to 6

print(6) will print 1,2,3,4,5,6

So, if print(n) prints from 1 to n then print(n-1) will print from 1 to n-1.

So, in the print(n) we know that we can say print(n-1) to print from 1 to n-1. And after that has printed all of those numbers, the only number that will be left to print is n and we can simply print that after calling print(n-1);

So, print(n) calls print(n-1) and similarly, print(n-1) calls print(n-2) and so on ...

But as the problem says, we have to print numbers starting from 1. That means, if the print method has value of N = 1, then we do not need to go any lower than that. 

---------------------------------------
STEP 3 - BASE CONDITION
---------------------------------------

And that is exactly what a Base condition is.

Here, the smallest valid input is 1. Any number lower than 1 is invalid as input. 

So, we can say in the base condition that - 

    if(n === 1){
        return 1;
    }

We can also take the smallest invalid input which is 0, which is just below 1. 

     if(n === 0){
        return;
    }

So in case of 0, we return nothing but the return keyword means we will not call the function again and just return from there itself.

const print = (n) => {
    if(n === 0){
        return; 
    }
    print(n-1);
    console.log(n);
}

EXAMPLE - print(3)

First we have the if statement, is n === 0? NO. So this if statement does not run and so the rest of the lines run. We again call print but this time with n-1. So, we call print(2)

Since we called print(2) that means print(3) will not be completely executed until print(2) finishes executing. So, in stack we will have print(3) method that is waiting for line 4 to be executed.

            |                |
            |                |
            |                |
            |print(3), line 4|

At print(2), again we run the whole function from beginning. We check if n === 0. NO! So we skip if block and call print(1). 

Again, print(2) will now wait for print(1) to finish and hence, print(2) is also put in stack.

            |                |
            |                |
            |print(2), line 4|
            |print(3), line 4|

At print(1), n is not 0 so if block is again not ran. Hence, we move to line after if block and call print(0). Again, print(1) goes into stack since it is waiting for print(0) to finish executing

            |                |
            |print(1), line 4|
            |print(2), line 4|
            |print(3), line 4|

At print(0), since n === 0, if condition is true and return statement executes. That means, our print(0) method returns from there itself and does not run any line after that. So print(0) finished executing.which means, we can move on to the line after print(0) in the print(1) function. That line is the console.log(n).

So, we print 1 in console. and print(1) finishes executing. So it is removed from stack. 

            |                |
            |                |
            |print(2), line 4|
            |print(3), line 4|
            

Since print(1) finished executing, we can move on to the line after it in print(2). So, in console, 2 is printed and print(2) also finishes executing. It is removed from stack.

            |                |
            |                |
            |                |
            |print(3), line 4|

Finally, since print(2) finished executing, that means inside print(3), we can move on to the next line and print 3 in the console. And print(3) also finishes executing and it removed from stack.

            |                |
            |                |
            |                |
            |________________| 

And since our stack is empty, that means all the functions have executed and so, our console has output as -> 1 2 3

