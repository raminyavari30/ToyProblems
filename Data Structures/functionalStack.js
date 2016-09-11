let Stack = () => {
  
  let stackMethods = {};
  let size = 0;
  let storage = {};

  stackMethods.push = (value)=> {
    storage[size] = value;
    size++;
  };

  stackMethods.pop = () => {
    if(size > 0) {
      size--;
    }
    let result = storage[size];
    delete storage[size];
    return result;
  }

  stackMethods.size = () => {
    return size;
  };
  
  return stackMethods;
};