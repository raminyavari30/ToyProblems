let Queue = () => {
  
  let storage = {};
  let queueMethods = {};
  let head = -1;
  let tail = -1;

  queueMethods.enqueue = (val) => {
    tail++;
    storage[tail] = val;
  }
  
  queueMethods.dequeue = () => {
    if(queueMethods.size() > 0) {
      head++;
      let temp = storage[head];
      delete storage[head];
      return temp;
    }
  }
  
  queueMethods.size = () => {
    return tail - head;
  }
  
  return queueMethods;
}

