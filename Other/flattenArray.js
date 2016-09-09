/*
Directions:

Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.
*/

let flattenArray = (arr) => {
  
  let result = [];
  let recurse = (element) => {
    if(!Array.isArray(element)) {
      result.push(element);
      return;
    }
    else {
      for(let i = 0; i < element.length; i++) {
        recurse(element[i]);
      }
    }
  }
  recurse(arr);
  return result;
}