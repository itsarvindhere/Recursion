# PROBLEM STATEMENT

We are given two integers -> N and k. We have to generate a grammer from these two values.

We build a table of N rows (1-indexed). We start by writing 0 in the 1st row. 

Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

e.g. N = 3
1st row -> 0
2nd row -> 0 1 <- Since last row value is 0 so replace 0 with 01
3rd row -> 0 1 1 0 <- Since last row value is 01 so replace 0 with 01 and 1 with 10

k is also given as input. k represents the column.

e.g. in above, is N = 3 and k = 3 that means 3rd row and 3rd column. In the 3rd row, we have 0110 so, at column 1 we have 0, at column 2 we have 1, at colum 3 we have 1 and at column 4 we have 0.

So, return 0 in this case.

Also, we already have the base condition specified here. That is -> if n = 1, k = 1, we return 0.

We can see that it is a Recursive problem because it says that to generate a symbol for Nth row, we need to see what is the symbol of N-1th row and so on... till we get to the N = 1 row.

# RECURSIVE APPROACH

## HYPOTHESIS

We will design a method kthSymbol(n,k) that takes the n and k as input and returns one bit. Either 0 or 1, based on the bit in nth row and kth column.

## INDUCTION

Now in Induction, we try to do the same thing on a smaller input.
In Array or stack problems, we could easily just remove the last element or top element to make input smaller. But here, we have to choose wisely.

WE have two inputs here -> n and k.

Since n denotes the rows and they are incrementing by 1, we can simply make n = n - 1 i.e., reduce the row. 

But, in case of k, we will see that column count is not increasing by 1. 

e.g.

0 -> 1
0 1 -> 2
0 1 1 0 -> 4
0 1 1 0 1 0 0 1 -> 8
0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0 -> 16

So, if previous row had k rows, the next row has k * 2 rows.

Another observation is that if the previous row has k columns, then in the next row, the bits will be same till kth column.

e.g.

   N = 1    0
   N = 2    0 1 
   N = 3    0 1 1 0 
   N = 4    0 1 1 0 1 0 0 1
   N = 5    0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0

If we see, in row 4, we have 0 1 1 0. And the same bits are there in Row 8 till the 4th column.

Similarly, we have  0 1 1 0 1 0 0 1 in the row 4 and the same bits till 8th column in row 5th. 

So, in the next row, only the secodn half is different than the previous row. The first half remains the same as previous row.

That means. e.g. if N = 5 and k = 3, we don't even need to geenrate the grammer for 5th row. Becuse since k = 3 and the 4th row has 8 columns, that means 3 < 8 and so, the 3rd column of row 5 will have the same value that the 3rd column of the 4th row has.

In fact, the 3rd column of 4th row will have same bit that 3rd column of 3rd row has because the 3rd row has 4 columns and 3 < 4

So, if k is <=mid of the row, then we can simply see what is the value at kth column of n - 1 row.


What about the second half??

e.g. 

   N = 3    0 1 1 0 
   N = 4    0 1 1 0 1 0 0 1

If we observe, the first half is the same as the N = 3 row. And the second half is the complement of the first half.

So, if first half is 0 1 1 0
Second half is       1 0 0 1


CONCLUSION -> For row N, we will first find the length of the row and then check if k <= mid or not. If k is <= mid it will be same as the kth column bit for N - 1 row. 

    So in that case, we can return whatever solve(N-1,k) returns

If k > mid then, we are simply complementing the bits of N-1 row.
How to find which bit's complement to take?

N = 3    0 1 1 0 
N = 4    0 1 1 0 1 0 0 1
         1 2 3 4 5 6 7 8

Here, mid = 4
If k = 5, that means it is the complement of the k = 1 of N-1 row. 
If k = 6, that means it is the complement of k = 2 of N - 1 row

So, basically, we are reducing mid from k to get the k for previous row.

So in this case, we can return whatever solve(N-1,k-mid) returns