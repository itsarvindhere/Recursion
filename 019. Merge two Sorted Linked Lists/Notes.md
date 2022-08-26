# PROBLEM STATEMENT

Given two linked lists that are sorted in increasing order. Combine them into a single linked list using Recursion. 

# RECURSIVE APPROACH

We will make use of the Induction-Base-Hypothesis method here.

## HYPOTHESIS

We have a method merge(list1,list2) it takes the head nodes of both the lists. Now, we need to return a single list that is the combination of bvoth the lists but the sorted order is maintained.

e.g. if list1 = [1,2] and list2 = [2,3] then merge(list1,list2) should return 1 -> 2 -> 2 -> 3


## BASE CONDITION

Suppose if list1 is empty. That means we simply return list2.
Similarly, if list2 is empty, that means we simply return list1.

This will be our base condition

## INDUCTION

We need to make input smaller in this step. Since there are two lists, we need to see which list to make smaller.

So, we will compare data in both lists. Whatever list has smaller data we will take that data, put in the output and then apply the merge method on the remaining list.

e.g. list1 = [1,2] and list2 = [2,3]

data in list1 = 1
data in list2 = 2

Since 1 <= 2 That means, we need to put 1 in output list and then to get the next node to attach to output, apply merge method on remaining list1 and list2 i.e, merge([2], [1,2])

Here again, we do the same. 

Here, data in list1 = 2
data in list2 = 1

Since 2 > 1, that means we need to attach list2 data in output. And again apply merge on remaining to get the next node.

merge([2], [2])

data in list1 = 2
data in list2 = 2

Finally, since 2 <= 2 we will put data in list1 in output.

finally, apply merge([], [2])

Here, base condition is true since list1 is null. So simply return list2 in this case. 

And finally, return the output.