# PROBLEM STATEMENT

Given two positive integers n and k, the binary string Sn is formed as follows:

    S1 = "0"
    Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1

Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).

Return kth bit of nth string. 


# RECURSIVE APPROACH

First, lets make some observations. 

It is given that for n = 1 i.e., first string, the value will always be "0". i.e., S1 = "0". This will be our base case. So if n is 1 then we simply return "0" as the bit.


Now, in each subsequent row, we find the new string by the given formula i.e., 

    Si = Si - 1 + "1" + reverse(invert(Si - 1)) 

e.g. in case of S2

    S2 = S1 + "1" + reverse(invert(S1))

    We know that S1 = "0"

So, S2 = "0" + "1" + reverse(invert("0"))

Invert means convert 0 to 1 and 1 to 0

    S2 = "0" + "1" + reverse("1")
Reverse means to reverse the string. Since we only have one character, reverse of "1" is "1" only

    S2 = "0" + "1" + "1"
    S2 = "011"

Hence, if S1 = "0"
          S2 = "011"

In similar way, we can find all the strings so we will get a pattern like ->

  N = 1         S1 = "0"
  N = 2         S2 = "011"
  N = 3         S3 = "0111001"
  N = 4         S4 = "011100110110001"


## OBSERVATIONS

Is there any similarity in next string and previous string?

YES! Take N = 2 and N = 3 as examples.

  N = 2         S2 = "011"
  N = 3         S3 = "0111001"

The length of N = 2 is 3
and till the length 3, the string S3 is the same as the string S2.

And also, length 3 is the mid of N = 3

This means if we are asked to find e.g. n = 3 and k = 2, we don't need to even find the string for n = 3 because since k = 2 and that is less than or equal to the mid, then we can find what is the bit at kth position in previous row itself. 

So, 
    if (k <= mid){
    find the kth bit of n-1 row
    }

What about the other cases?

e.g. if n = 3 and k = 4. 

This means k is mid + 1. And as per the problem, in each new row, after we copy the previous row, we add "1"

  N = 2         S2 = "011"
  N = 3         S3 = "0111001"

Here, till length = 3, S3 is same as S2. But after that, we add one extra 1. And this is the same for all the rows. Hence, if k = mid + 1 that means we are simply return "1" as the bit at that place. No computation needed.


Finally, we have k > mid + 1

e.g. n = 3, k = 5

  N = 2         S2 = "011"
  N = 3         S3 = "0111001"


Lets compare S2 and S3. 

We know that after we add "1", the next part of the string is calculated as reverse(invert(previous string))

We can divide S3 into three parts

"011" , "1" and "001"

The above two cases were for part 1 and part 2. Now we are at part 3.

This part is the result of reverse(invert("011"))

        reverse(invert("011")) = "001" 

If we only had invert("011") then part 3 would've been "100" but it is also being reversed to "001"

This means, the bit at k = 5 is the bit at k = 3 but inverted. 
Similarly, the bit at k = 6 is the bit at k = 2 but inverted
and finally, the bit at k = 7 is the bit at k = 1 but inverted.

Hence we get a pattern that if k > mid + 1 then k = length - k + 1


e.g. k = 5
So for previous row, k = 7 - 5 + 1 = 3
if k = 6, for prev row, k = 7 - 6 + 1 = 2
if k = 7, for prev row, k = 7 - 7 + 1  = 1


Hence, 
    if k > mid + 1 {
        find (length - k + 1)th bit of previous row
        }

And this is all!


## CONDITIONS

Hence, we have three conditions in our code -> 

    if(k <= mid){
            return kth bit of n-1th row
        } else if (k == mid + 1){
            return '1'
        } else {
           k = numberOfColumns - k + 1;
           return inverse of kth bit of n-1th row
        }


## BASE CONDITION

If n becomes 1 that means we return just "0" because for S1, the value is "0". We do not go below that.
