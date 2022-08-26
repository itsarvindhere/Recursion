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


//Method to Merge two sorted Linked Lists
const merge = (list1, list2) => {
    //Base Conditions
    if(!list1) return list2;
    if(!list2) return list1;

    let output = new Node();

    if(list1.data <= list2.data){
        output.data = list1.data;
        output.next = merge(list1.next, list2);
    } else{
        output.data = list2.data;
        output.next = merge(list1, list2.next);
    }

    return output;
}

/**************************************************
 *  JUST FOR TESTING THE CODE
 ************************************************* */

//List1
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

let list1 = new LinkedList(node1);

//List2

let node4 = new Node(1);
let node5 = new Node(3);
let node6 = new Node(4);

node4.next = node5;
node5.next = node6;

let list2 = new LinkedList(node4);
let finalList = merge(list1.head,list2.head);

console.log("List after Merging ->")

let list = [];

while(finalList){
    list.push(finalList.data);
    finalList = finalList.next;
}

console.log(list);