/*
 Make a function that takes an array, and returns true if 2 numbers
 in the array equal 0. If no 2 numbers equal 0, return false
*/

//Solution 1:

const sumZero = (arr) => {
  
  for(var i = 0; i < arr.length; i++) {
    
    for(var j = i+1; j < arr.length; j++) {
      
      if(arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}

//Solution 2:

const sumZero = (arr) => {
  
  arr = arr.reduce( (accum, val) => {
    if(!accum[val]) {
      accum[val] = 1;
    }
    else {
      accum[val]++;
    }
    return accum;
  },{});
  
  for(let key in arr) {
    if(arr["-" + key]) {
      return true;
    }
  }
  return false;
}
