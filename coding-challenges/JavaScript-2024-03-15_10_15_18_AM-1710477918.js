/* Find Missing Number:
Write a function that takes an array of integers from 1 to n (inclusive) with one missing number, and returns the missing number.

Input:
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
Expected Output: 5
 */

function missingNumber() {
  const missingNumbers = [];
  for (let index = 0; index < numbers.length - 1; index++) {
    const element = numbers[index];
    const nxtElement = numbers[index + 1];
    if (element + 1 !== nxtElement) {
      missingNumbers.push(element + 1);
    }
  }

  return missingNumbers;
}

const numbers = [11, 12, 13, 14, 16, 17, 19, 21];
const result = missingNumber(numbers);
console.log('result: ', result); // [ 15, 18, 20 ]
