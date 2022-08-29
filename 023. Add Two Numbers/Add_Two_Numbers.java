/**
 * Add_Two_Numbers
 */

class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }

public class Add_Two_Numbers {

    static ListNode dummy = new ListNode(0);
    static ListNode pointer = dummy;
    static int carry = 0;

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        //Base Condition
         if(l1 == null && l2 == null){
             return pointer;
         }
         
         //Getting the SUM and CARRY
         int n1 = l1 != null ? l1.val : 0;
         int n2 = l2 != null ? l2.val : 0;
             
         int sum = n1 + n2 + carry;
         carry = sum/10;
                 
         pointer.next = new ListNode(sum % 10);
         pointer = pointer.next;
         
         l1 = l1 != null ? l1.next : l1;
         l2 = l2 != null ? l2.next : l2;
         
         //Make a recursive call to calculate the Sum of next two nodes
         addTwoNumbers(l1,l2);
         
         //Finally, If we have carry then add it at the end as a separate node
         if(carry != 0){
             pointer.next = new ListNode(carry);
         }
 
         return dummy.next;
     }
    public static void main(String[] args) {
        ListNode list1 = new ListNode(2);
        ListNode n2 = new ListNode(4);
        ListNode n3 = new ListNode(3);

        list1.next = n2;
        n2.next = n3;

        ListNode list2 = new ListNode(5);
        ListNode n4 = new ListNode(6);
        ListNode n5 = new ListNode(4);

        list2.next = n4;
        n4.next = n5;

        ListNode result = addTwoNumbers(list1, list2);

        System.out.println("After adding two linked lists ->");
        while(result != null){
            System.out.print(result.val + " ");
            result = result.next;
        }

    }
}