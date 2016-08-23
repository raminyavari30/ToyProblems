/*
Challenge

Using the JavaScript language, have the function LongestWord(sen) 
take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from 
the string with that length. Ignore punctuation and assume sen will not be empty. 

Sample Test Cases

Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love"

*/

function LongestWord(sen) { 
  let longest_word = '';
  let filtered_Array = sen.match(/[0-9a-z]+/gi);
  
  for(var index of filtered_Array) {
    if(index.length > longest_word.length) {
      longest_word = index;
    }
  }
  return longest_word;
}