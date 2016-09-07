let insertionSort = (array) => {
  
  for(var i = 1; i < array.length; i++) {
    
    let value = array[i];
    let index = i;
    
    while(value < array[index -1]) {
      array[index] = array[index - 1];
      index-=1;
    }
     
    array[index] = value;
  }
  return array;
}