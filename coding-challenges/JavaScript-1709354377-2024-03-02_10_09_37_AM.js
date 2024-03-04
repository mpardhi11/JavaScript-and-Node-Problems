/*
Write a function called isPalindrome that takes a string as input and returns true 
if the string is a palindrome (reads the same backward as forward), and false otherwise. 
Ignore spaces, punctuation, and capitalization when determining if a string is a palindrome.

For example:

isPalindrome("A man, a plan, a canal, Panama") should return true.
isPalindrome("Hello, World!") should return false.
*/

function isPalindrome(originalString) {
  const regexPunctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g; // The regular expression to match punctuation marks
  const regexEmptySpace = /\s/g; // Use to remove extra spaces

  // Use the replace function to remove the punctuation marks
  let modifiedString = originalString
    .replace(regexPunctuation, "")
    .replace(regexEmptySpace, "")
    .toLowerCase();

  let reverseString = new String(modifiedString).split("").reverse().join("");

  return modifiedString === reverseString;
}

const result1 = isPalindrome("A man, a plan, a canal,     Panama");
console.log("result1: 👆👆👆👆👆👆👆", result1);

const result2 = isPalindrome("Hello, World!");
console.log("result2: 👆👆👆👆👆👆👆", result2);
