let quickSort = (array) => {
  let left = [];
  let right = [];
  let pivot = array[0];
  
  if(array.length === 0) {
    return [];
  }
  
  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    }
    else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}