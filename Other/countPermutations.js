/*Given a positive integer n>1, find the list of all lists x such that elements of x are 
positive integers greater than 0 and less than n, and elements of x add up to n.
e.g. n=4

[[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2], [1,3], [3,1]]
*/

let countPermutations = (n) => {
  
  let result = [];
  
  let recurse = (arr) => {
    let sum = arr.reduce( (accum,next) => {
      return next + accum;
    },0);
    
    if(sum === n) {
      result.push(arr);
    }
    else {
      if(sum < n) {
        for(let i = 1; i < n; i++) {
          recurse([...arr, i]);
        }
      }
      return;
    }
  }
  recurse([]);
  return result;
}