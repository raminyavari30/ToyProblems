/*

DIRECTIONS:

Implement a function that finds the longest palindrome in a given 
string. For example, in the string “My dad is a racecar athlete”, 
the longest palindrome is “a racecar a”. Count whitespaces as valid 
characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ 
(including whitespace on each side of dad).

*/

const longestPalindrome = (string) => {
  let max = '';
  let cur = '';

  for (let i = 0; i < string.length; i++) {

    cur = '';
    for (let j = i; j < string.length; j++) {

      cur+=string[j];

      if (isPalindrome(cur) && cur.length > max.length) {
        max = cur;
      }
    }
  }
  return max;
}

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}