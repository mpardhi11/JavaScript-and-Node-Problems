/* 
Pandigital Numbers
A pandigital number contains all digits (0-9) at least once. 
Write a function that takes an integer, returning true if the integer is pandigital, 
and false otherwise.

Examples
isPandigital(98140723568910) ➞ true
isPandigital(90864523148909) ➞ false // 7 is missing.
isPandigital(112233445566778899) ➞ false
Notes

Think about the properties of a pandigital number when all duplicates are removed.
 */

function isPandigital(num) {
  const arr = num.toString().split('');
  const newSet = new Set();
  for (const key of arr) {
    newSet.add(parseInt(key));
  }

  return newSet.size === 10 ? true : false;
}

console.log(isPandigital(98140723568910)); //➞ true
console.log(isPandigital(90864523148909)); // ➞ false // 7 is missing.
console.log(isPandigital(112233445566778899)); //➞ false
