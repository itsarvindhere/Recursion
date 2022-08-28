# PROBLEM STATEMENT

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


# RECURSIVE APPROACH

Where is the Recursive pattern? What is something that we are doing again and again in this problem? Well, that's the swapping. 

We start from the beginning, swap the first wo nodes.
Then we swap the next two adjacent nodes and so on...

Hence, this is a recursive pattern. 

## HYPOTHESIS

We have a method swap() which takes the pointer that points to the node before the head node. THis pointer will be used to swap the pointer.next and pointer.next.next nodes. 

e.g.

Suppose we have a linked list 1->2->3->4

We add a dummy node before this head node. Lets say value of dummy node is 0. So, our linkedlist now looks like

    0 -> 1 -> 2 -> 3 -> 4

Now, we have a pointer that points to this dummy node.

And what we have to do is now swap 1 and 2. 

1 -> pointer.next
2 -> pointer.next.next

So, we have to swap pointer.next and pointer.next.next

How can we swap?

Well, we can break the link between 1 and 2 first so that 1 now points to 3 -> 4
    Once we do that, our linked list becomes

    0 -> 1 -> 3 -> 4

Now, we have to make this node 2 point to node 1.

THis will result in 
    2 -> 1 -> 3 -> 4

And finally, we make sure our pointer to dummy node pointer to this new head now. i.e., 

    pointer.next = Node with val 2;

So finally, our linkedlist becomes
    0 -> 2 -> 1 -> 3 -> 4

Hence, we have swapped 1 and 2. Now, we want to do the same with 3 and 4. For that, we want our pointer to now point to the node before 3. i.e, node with val 1.

    So, we again call the recursive method but with pointer = node with val 1.

All of this keeps happening until we do not have the next node or there is no node after the next node. This will happen when there are odd number of elements.

e.g. 1 -> 2 -> 3 -> 4 -> 5

In this case, the result will be 2 -> 1 -> 4 -> 3 -> 5

## BASE CONDITION
The base condition will be when the pointer does not have any next node i.e., it points to the last node. Or, it points to second last node but there is only 1 node after it. which means pointer.next.next is null. 

So if either of these two cases are true, we cannot swap.




