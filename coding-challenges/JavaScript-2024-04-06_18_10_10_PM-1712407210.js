/* 
Disarium Number
A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

Create a function that determines whether a number is a Disarium or not.

Examples
isDisarium(75) // ➞ false // 7^1 + 5^2 = 7 + 25 = 32
isDisarium(135) // ➞ true // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
isDisarium(544) ➞ false
isDisarium(518) ➞ true
isDisarium(8) ➞ true
isDisarium(466) ➞ false

Notes

Position of the digit is 1-indexed.
A recursive version of this challenge can be found via this link. 
*/

function isDisarium(num) {
  if (isNaN(num)) {
    return 0;
  }

  const arr = Array.from(String(num), Number);
  const sum = arr.reduce((acc, value, idx, array) => {
    // return (acc += Math.pow(value, idx + 1));
    return (acc += value ** (idx + 1));
  }, 0);

  return num === sum ? true : false;
}

console.log(isDisarium(75)); // ➞ false // 7^1 + 5^2 = 7 + 25 = 32
console.log(isDisarium(135)); // ➞ true // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
console.log(isDisarium(544)); // ➞ false
console.log(isDisarium(518)); // ➞ true
console.log(isDisarium(8)); // ➞ true
console.log(isDisarium(466)); // ➞ false

let [numVector, resVector] = [
  [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
  [true, false, true, false, false, true, true, false, false, true, true, true],
];
for (let i in numVector) {
  console.log(isDisarium(numVector[i]), 'O/P', resVector[i]);
}
