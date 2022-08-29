/**
 * Middle
 */

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class Middle {

    public static ListNode middle(ListNode slow, ListNode fast){
        //Base Case
        if(fast == null || fast.next == null){
            return slow;
        } 
        
        return middle(slow.next, fast.next.next);
    }

    public static ListNode middleNode (ListNode head){
        //If linkedlist has zero or only one node
        if(head == null || head.next == null) return head;
        
        return middle(head.next, head.next.next);
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

        ListNode result = middleNode(node1);

        System.out.print("Middle Node is ->" + result.val);
    }
}