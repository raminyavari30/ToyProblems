function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoublyLinkedList.prototype.addToHead = function(value) {
    var node = new Node(value);
    this.size++;
    //if this is the first node in the list
    if(this.head === null) {

        this.head = node;
        this.tail = node;
    }
    else {
        var temp = this.head;
        this.head = node;
        this.head.next = temp;
        temp.prev = this.head;
    }
}

DoublyLinkedList.prototype.addAtTail = function(value) {
    var node = new Node(value);
    this.size++;

    if(this.tail === null) {
        this.tail = node;
        this.head = node;
    }
    else {
        var temp = this.tail;
        this.tail = node;
        this.tail.prev = temp;
        temp.next = this.tail;
    }
}