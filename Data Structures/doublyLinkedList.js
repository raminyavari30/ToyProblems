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

    let node = new Node(value);
    this.size++;
    
    //if this is the first node in the list
    if(this.head === null) {

        this.head = node;
        this.tail = node;
    }
    else {

        let temp = this.head;
        this.head = node;
        this.head.next = temp;
        temp.prev = this.head;
    }
}

DoublyLinkedList.prototype.addAtTail = function(value) {

    let node = new Node(value);
    this.size++;
    
    //if this is the first node in the list
    if(this.tail === null) {

        this.tail = node;
        this.head = node;
    }
    else {

        let temp = this.tail;
        this.tail = node;
        this.tail.prev = temp;
        temp.next = this.tail;
    }
}

DoublyLinkedList.prototype.removeAtHead = function() {

    let valueToReturn = null;
        
    //if there is a node in the list
    if (this.head !== null) {

        this.size--;
        valueToReturn = this.head.value;
    }

    if (this.tail === this.head) {

        this.head = null;
        this.tail = null;
    } 
    else {

        this.head = this.head.next;
        this.head.prev = null;
    }
        
    return valueToReturn;
};

DoublyLinkedList.prototype.removeAtTail = function() {

    let valueToReturn = null;
        
    //if there is a node in the list
    if (this.tail !== null) {

        this.size--;
        valueToReturn = this.tail.value;
    }

    if (this.tail === this.head) {

        this.head = null;
        this.tail = null;
    } 
    else {

        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    return valueToReturn;
};

DoublyLinkedList.prototype.each = function(fn)  {

    let current = this.head;
        
    while (current !== null) {
        fn(current);
        current = current.next;
    }
};

DoublyLinkedList.prototype.print = function() {

    this.each(function (item) {

        console.log(item.value);
    });
};