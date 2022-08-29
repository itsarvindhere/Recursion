# PROBLEM STATEMENT

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



e.g. If list1 is 2 -> 4 -> 3
        list2 is 5 -> 6 -> 4
        Sum is   7 -> 0 -> 8

So, as we can see, we will go from left to right in both the lists and calculate the sum. If we found a carry (e.g. in case of 6 + 4 = 10) we will store the right mode digist in the node and move the carray further so that it is then used by the next nodes.

So in case of 6 + 4, sum is 10. Instead of storign 10, we store 0 which is the rightmost digit.

And so, carry is 1 here.

Now, next time we calculae 3 + 4 = 7, we also add the carry in it

7 + 1 = 8.

If there was a carry here as well, then we would've added it as a new new at the end of our result.


# RECURSIVE SOLUTION

We can easily notice the recursive pattern here. We are doing the sum of two nodes again and again until both nodes are not null.

Even if one node becoems null but there are nodes in the other list, then also we do the sum. The only thing is in that case, the list which is already null is not considered so we just take 0 as its node's value.

So, the base condition here is 

"Keep adding the nodes unless both the lists are not null".

If both the lists become null that means we have got our sum and so we can return the pointer  that points to our  result linked list.

And if after doing all of this, we have a carry left, we add it as a separate node at the end.


