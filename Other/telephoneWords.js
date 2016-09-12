/*

Write a function that takes up to four digits of a phone number, 
and returns a list of all of the words (in alphabetical order) 
that can be written on the phone with that number. 
(You should return all permutations, not only English words.)

Examples


"0002"  ---> [ "000A", "000B", "000C" ]

"1123" ---> [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF",
 "11CD", "11CE", "11CF" ]

*/

const phoneDigitsToLetters = {
  '0': '0',
  '1': '1',
  '2': 'ABC',
  '3': 'DEF',
  '4': 'GHI',
  '5': 'JKL',
  '6': 'MNO',
  '7': 'PQRS',
  '8': 'TUV',
  '9': 'WXYZ'
}

let telephoneWords = (digitString) => {
  
  let permutations = [];
  
  let recurse = (word, digits) => {
    
    if(digits.length === 0) {
      permutations.push(word);
      return;
    }
    
    let firstDigit = digits[0];
    let leftOverDigits = digits.slice(1);
    let digitsToLetters = phoneDigitsToLetters[firstDigit];
    
    for(let letter of digitsToLetters) {
      recurse(`${word}${letter}`, leftOverDigits);
    }
  }
  recurse('', digitString);
  return permutations;
}