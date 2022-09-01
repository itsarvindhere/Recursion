# PROBLEM STATEMENT

You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

# RECURSIVE APPROACH

First, lets break down our problem into parts.

1. First, we want to get the sum of all nodes between two zero nodes.
2. Next, we want to take that sum and assign it as the value of the output linked list's first node.
3. And next, we do the same thing again for the next set of nodes between zero value nodes.

## HYPOTHESIS

We have a method mergeNodes(head). What it does is merges all the nodes that lie between zero nodes.

e.g.  0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0

Here, mergeNodes(head) will give us 4 -> 11

Lets make this input smaller.

What if we have only two consecutive zeros.

e.g. 0 -> 3 -> 1 -> 0

mergeNodes(head) gives us 4

So if mergeNodes(0 -> 3 -> 1 -> 0) gives us 4

That means for the next portion, 0 -> 4 -> 5 -> 2 -> 0

We can make another call mergeNodes(0 -> 4 -> 5 -> 2 -> 0) which will give us 11

And now, all that we need to do is join these two values.

So, node with value 4 will have next node with value 11.

## BASE CONDITION

As the question says, the first and last nodes are always zero value nodes. So that means, if we have

    mergeNodes(0 -> null)

Then, since it is the last node, we do not include it in our output and so, we simply return null.

Hence, the base case will be when we are at the last node.

