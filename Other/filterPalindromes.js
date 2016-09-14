/*
DIRECTIONS:

Given an array of words (array of strings), return all words 
that are palindromes.


Examples

Input: ["word", "Ana", "race car"] Output: [ "Ana", "race car" ]
*/

const filterPalindromes = (words) => {
  
  let results = [];
  for(let word of words) {
    if(isPalindrome(cleanse(word))) {
      results.push(word); 
    }
  }
  return results;
}

const isPalindrome = (word) => {
  
  for(let i = 0; i < Math.floor(word.length/2); i++) {
    if(word[i] !== word[word.length-1-i]) {
      return false;
    }
  }
  return true;
}

const cleanse = (word) => {
  return word.toLowerCase().split(' ').join('');
}