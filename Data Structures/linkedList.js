let LinkedList = () => {

  //nodes to put into LinkedList
  let Node = (value) => {

    let node = {};
    node.value = value;
    node.next = null;
    return node;
  };
  
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = (value) => {

    //create a new node
    let newTail = Node(value);
    //if the head is null
    if (list.head === null) {
      list.head = newTail;
    }
    //if there is a tail
    if (list.tail !== null) {
      //add the new tail to the end
      list.tail.next = newTail;
    }
    //assign list.tail to the new tail
    list.tail = newTail;
  };

  list.removeHead = () => {
    //if no head, return null;
    if(list.head === null) {
      return null;
    }
    
    let currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = (target) => {

    let checkList = (node) => {
      if(node === null) {
        return false;
      } else if(node.value === target) {
        return true;
      } else if(node.next === null) {
        return false;
      }
      return checkList(node.next);
    }
    return checkList(list.head);
  };
  return list;
};