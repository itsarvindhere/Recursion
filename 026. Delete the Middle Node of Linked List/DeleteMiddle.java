class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class DeleteMiddle {

    public static ListNode delete(ListNode pointer, ListNode slow, ListNode fast){
        if(fast == null || fast.next == null){
            return pointer;
        }
        
        return delete(pointer.next, slow.next, fast.next.next);
    }

    public static ListNode deleteMiddle(ListNode head){
        //If linked list has only one node
        if(head.next == null) return null;
        
        //A Pointer that points to the head node
        ListNode pointer = head;

        //pointer will point to the node just before the middle node
        pointer = delete(pointer, head.next, head.next.next);

        //Delete the middle node
        pointer.next = pointer.next.next;
        
        //Return the linked list
        return head;
    }

    public static void main(String[] args) {
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(2);
        ListNode node3 = new ListNode(3);
        ListNode node4 = new ListNode(4);
        ListNode node5 = new ListNode(5);
        

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;

        ListNode result = deleteMiddle(node1);

        System.out.print("After Deletion Linked List is -> ");

        while(result != null){
            System.out.print(result.val + " ");
            result = result.next;
        }
    }
}
