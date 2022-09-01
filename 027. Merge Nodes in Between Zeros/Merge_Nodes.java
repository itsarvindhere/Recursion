/**
 * Merge_Nodes
 */

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class Merge_Nodes {

    public static ListNode mergeNodes(ListNode head) {        
        // Base Case 
        while(head.next == null) return null;
        
        
        //Get the sum of all nodes until we get to the next zero value node
        int sum = 0;
        ListNode pointer = head.next;
        
        while(pointer.val != 0){
            sum += pointer.val;
            pointer = pointer.next;
        } 
        
        //Set the value of head.next node as sum
        head.next.val = sum;
        
        //Pointer now points to the next node with value 0
        //Make a recursive call to get the next node by passing the pointer
        head.next.next = mergeNodes(pointer);
        
        return head.next;
        
    }
    public static void main(String[] args) {
        ListNode node1 = new ListNode(0);
        ListNode node2 = new ListNode(3);
        ListNode node3 = new ListNode(1);
        ListNode node4 = new ListNode(0);
        ListNode node5 = new ListNode(4);
        ListNode node6 = new ListNode(5);
        ListNode node7 = new ListNode(2);
        ListNode node8 = new ListNode(0);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;

        System.out.println("Original Linked List is:");
        ListNode p = node1;

        while(p != null){
            System.out.print(p.val + (p.next != null ? " -> " : ""));
            p = p.next;
        }
        System.out.println("");

        ListNode output = mergeNodes(node1);

        System.out.println("After merging nodes, Linked List is:");

        while(output != null){
            System.out.print(output.val + (output.next != null ? " -> " : ""));
            output = output.next;
        }
        System.out.println("");


    }
}