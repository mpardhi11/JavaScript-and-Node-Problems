/*
Factorial:
Write a function to calculate the factorial of a given number.

*/

function factorial(number) {
  if (isNaN(number)) return "N/A";

  return number <= 1 ? number : number * factorial(number - 1);
}

console.log("factorial()", factorial(5));
