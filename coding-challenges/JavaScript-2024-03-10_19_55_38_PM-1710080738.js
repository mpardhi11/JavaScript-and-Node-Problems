/* 
Calculate Factorial:

Description: Write a function to calculate the factorial of a given number.
Input: 5
Expected Output: 120
 */

function factorial(number) {
  if (isNaN(number)) return 0;
  if (number === 0 || number === 1) return 1;

  return number * factorial(number - 1);
}
console.log("factorial ~ factorial: 👆👆👆👆👆👆👆", factorial(5));
