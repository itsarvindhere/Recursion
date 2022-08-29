# PROBLEM STATEMENT
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

# RECURSIVE APPROACH

Normally, if we do this problem using a loop, then we use two pointers where one will traverse one node at a time whereas the other traverses two nodes at a time. This way, when the faster pointer reaches the end, the slower pointer points to the middle node.

So, at each iteration, we are moving the slow pointer by one node and faster pointer by two nodes and check if the faster pointer became null i.e., it reached the end or not. If it did, just return the slow pointer as it will point to middle node.


## BASE CONDITION
if the fast pointer is null or the next node of fast pointer is null that means we are at the end.