class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

const removeDuplicates  = (head) => {
    //Base Case
    if(head == null || head.next == null){
        return head;
    }
    
    //Apply the method to the list after head node which will remove the duplicates
    let dupRemoved = removeDuplicates(head.next);
    
    // Now compare the head node value to this dupRemoved list's head node val.
    if(head.data == dupRemoved.data){
        return dupRemoved; //if values are same, that means they are duplicate so we simply return the dupRemoved list
    }
    
    //Otherwise, add back the head node to the beginning of dupRemoved list
    head.next = dupRemoved; 
    
    return head;
}

let list = new Node(1);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(3);


list.next= node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

let newList = removeDuplicates(list);


console.log("Linked List Without Duplicates ->");
let arr = [];
while(newList){
    arr.push(newList.data);
    newList = newList.next;
}

console.log(arr);