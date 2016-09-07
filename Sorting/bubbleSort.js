let bubbleSort = (array) => {
  
  let temp;
  let count = 0;
  
  let subRoutine = function(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1] ) {
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        count++;
      }
    }
      if(count !== 0) {
        count = 0;
        return subRoutine(arr);
      }
    return arr;
  }
  return subRoutine(array);
}