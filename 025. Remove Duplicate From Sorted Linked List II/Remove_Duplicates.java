/**
 * Remove_Duplicates
 */

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class Remove_Duplicates {
    public static ListNode deleteDuplicates(ListNode head) {   
                //Base Case - If Linked List is empty or there's only one node
                if(head == null || head.next == null) return head;
    
                //If head node is unique, just find the unique nodes after head node and then attach that unique list to head and return the head
                if(head.val != head.next.val){
                    head.next = deleteDuplicates(head.next);
                    return head;
                }
                
                
                // If head node is not unique
                ListNode pointer = head;
                while((pointer.next != null) && pointer.val == pointer.next.val){
                    pointer = pointer.next;
                }
                return deleteDuplicates(pointer.next);
                
            }
    public static void main(String[] args) {
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(2);
        ListNode node3 = new ListNode(2);
        ListNode node4 = new ListNode(3);
        ListNode node5 = new ListNode(5);
        

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;

        ListNode pointer = node1;
        System.out.println("Linked List before removing all duplicates : ");

        while(pointer != null){
            System.out.print(pointer.val + (pointer.next != null ? " -> " : ""));
            pointer = pointer.next;
        }
        System.out.println("");

        ListNode result = deleteDuplicates(node1);

        System.out.println("Linked List after removing all duplicates : ");
        while(result != null){
            System.out.print(result.val + (result.next != null ? " -> " : ""));
            result = result.next;
        }
    }
}