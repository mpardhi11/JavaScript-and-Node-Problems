/*
Check for Palindrome:
Write a function to check if a given word is a palindrome.
*/

function checkPalindrome(originalString) {
  let reverseString = new String(originalString).split("").reverse().join("");

  return originalString === reverseString;
}

const result1 = checkPalindrome("XYBYBYX"); // true
console.log("result1: ", result1);

const result2 = checkPalindrome("Mohit"); // false
console.log("result2: ", result2);
