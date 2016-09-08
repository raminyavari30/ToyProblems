let selectionSort = function(arr) {
  let index = arguments[1] || 0;
  let smallestNumber = 9007199254740991;
  let smallIndex;
  let temp;
  let count = 0;
  
  for(let i = index; i < arr.length; i++) {
    if(arr[i] < smallestNumber) {
      count++;
      smallestNumber = arr[i];
      smallIndex = i;
    }
  }
  if(count !== 0) {
    temp = smallestNumber;
    arr[smallIndex] = arr[index];
    arr[index] = temp;
    
    return selectionSort(arr, index+1);
  }
  else {
    return arr;
  }
}