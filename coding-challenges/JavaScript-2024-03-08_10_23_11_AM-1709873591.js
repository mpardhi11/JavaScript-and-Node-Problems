/*
Check Prime Number:
Write a function to determine if a given number is prime.

Input: 7
Expected Output: true
*/

function isPrimeNumber(number) {
  if (number < 2) return false;

  for (let index = 2; index < Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

console.log("isPrimeNumber: 👆👆👆👆👆👆👆", isPrimeNumber(7)); // true
console.log("isPrimeNumber: 👆👆👆👆👆👆👆", isPrimeNumber(41)); // true
console.log("isPrimeNumber: 👆👆👆👆👆👆👆", isPrimeNumber(12)); // false
