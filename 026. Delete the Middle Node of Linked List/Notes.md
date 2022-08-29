# PROBLEM STATEMENT

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.


# RECURSIVE APPROACH

In the previous problem, we identified and returned the middle node.

In this problem, we will delete that node.

As we know, to delete a node in a linkedlist, we have to find the previous node to that node and then detach the node by doing.

    previous.next = previous.next.next;

So, here, we will do the same.

Our Recursive function will use three pointers this time.

1. A pointer that points to node before the middle node, initially head.
2. A Slow Pointer that pointes to middle node & moves 1 node at a time, initially head.next
3. A Fast Pointer that moves 2 nodes at a time, initially head.next.next.

And the whole recursive call remains the same as previous problem.

At the end, the recursive method returns the position of pointer that points to the node before the middle.

And at that time, all that we have to do is 

    pointer.next = pointer.next.next;