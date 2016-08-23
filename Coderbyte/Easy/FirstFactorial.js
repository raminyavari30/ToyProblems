/*

Challenge

Using the JavaScript language, have the function 
FirstFactorial(num) take the num parameter being passed 
and return the factorial of it (e.g. if num = 4,
return (4 * 3 * 2 * 1)). For the test cases, the range will 
be between 1 and 18. 

Sample Test Cases

Input:4
Output:24

Input:8
Output:40320

*/

//recursive solution
function FirstFactorial(num) { 
  return num < 1 ? 1 : num * FirstFactorial(num-1);
}

//iterative solution
function FirstFactorial(num) {
  
  var result = 1;
  
  for(var i = 1; i <= num; i++) {
    result*= i;
  }
  return result;
}