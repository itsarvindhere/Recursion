# PROBLEM STATEMENT

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

This might sound similar to the previous problem regarding deleting duplicates but in previous problem, we kept each value exactly once by deleting its duplicates.

Here, we need to completely delete all the duplicates and only keep those values that are occuring just once in the linked list initially.


e.g. 1 -> 1 -> 2 -> 3 -> 3

Here, only 2 is the unique node value so solution will be  -> Node 2


e.g. 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5

Since only 1,2 and 5 are unqiues, solution is : 1 -> 2 -> 5


# RECURSIVE APPROACH

WE will face two cases here.

1. When the first node of linked list is not unique
2. When the first node of linked list is unique


1. When the first node is not unique -

    e.g. 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 5

Here, as we can see, the head node itself is not unique. THis means, we first need to find the node whose value is not the same as head node. SO that node will be the node 2. 

And once we have found the node 2 and since it is unique, we just need to then find unique nodes in the next section : 3 -> 3 -> 5 

So this will be a recursive call;

2. When the first node is unique.

e.g. 1 -> 2 -> 3 -> 4 -> 4-> 5 -> 5

Here, since the first node is unique, that means we simply need to find unique nodes in the rest of the linked list. 

and once we found those, we just need to attach that unique list of nodes to our first node.


Hence, for these two cases, we will have two recursive calls


## HYPOTHESIS
We have a method deleteDuplicates(head). It takes the head of a linked list and returns the unique nodes only.

THis means, if we apply it on the head.next list, then it will give us all the unique nodes in head.next list.

And once we have found the unique nodes in the head.next list, we just need to attach this unique node to our head node. But only if head node itself is unique.

If head node is not unique, we need to first find the node whose value is not same as head node and then call deleteDuplicates() on that node.

In this case we do not need to attach our head node back since it is not unique

## BASE CASE

Our input is the head of linked list. And the smallest possible input is an empty linked list. If a linked list is empty, we cannot remove any elements from it sicne there aren't any. So return it as it is.

Also, if the linked list has only one element, it is already unique. So these two are our base conditions.

if(head == null || head.next == null) {
    return head;
} 
