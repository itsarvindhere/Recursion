# PROBLEM STATEMENT

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

# RECURSIVE APPROACH

# HYPOTHESIS
We have a method deleteDuplicates() which takes the head of linkedlist and returns the linked list without any duplicates.

# INDUCTION

Lets keep the head node aside and take the rest of the linked list.

i.e., head.next

As per our hypothesis, deleteDuplicates(head.next) should give us the list without duplicates here.

So, once we have got a list without duplicates , we just need to compare the head node that we excluded and the first node of this linked list returned by deleteDuplicates(head.next);

e.g. Linked List  = 1 -> 1 -> 2 -> 3 -> 3

So, if we apply deleteDuplicates of the linked list except head.

deleteDuplicates(1 -> 2 -> 3 -> 3) gives us 1 -> 2 -> 3

So now, all that is needed is join our head node back to this linked list only if the head node val is not same as head node value of this new linked list val. Since here we see that it is same, we don't add our head node. 

So, the final list is 1 -> 2 -> 3


# BASE CONDITION

If the head node is null or there is no node after head node that means we can safely return from there.