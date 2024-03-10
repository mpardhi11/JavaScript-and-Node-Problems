/* Check Palindrome Number:

Description: Write a function to check if a given number is a palindrome.
Input: 121
Expected Output: true
 */

function isNumberPalindrome(number) {
  if (isNaN(number)) return false;

  const reverse = number.toString().split("").reverse().join("");

  const result = +reverse === number;
  return result;
}

console.log("output: 👆👆👆👆👆👆👆", isNumberPalindrome(121));
