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



//Recursive Method
const swap = (pointer) => {
    //Base Case
    if(pointer.next == null || pointer.next.next == null){
        return;
    }
    
    let curr = pointer.next;
    let next = pointer.next.next;
    
    curr.next = next.next;
    next.next = curr;
    pointer.next = next;
    
    swap(curr);
}



const swapPairs = (head) => {
    let dummy = new Node(0);
    dummy.next = head;

    let pointer = dummy;

    swap(pointer);

    return dummy.next;
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;


let before = [];
let temp1 = node1;
while(temp1){
    before.push(temp1.data);
    temp1 = temp1.next;
}

console.log("Original Linked List ->", before);

let output = swapPairs(node1);


let after = [];
let temp2 = output;
while(temp2){
    after.push(temp2.data);
    temp2 = temp2.next;
}

console.log("Linked List after Swapping adjacent pairs ->", after);


