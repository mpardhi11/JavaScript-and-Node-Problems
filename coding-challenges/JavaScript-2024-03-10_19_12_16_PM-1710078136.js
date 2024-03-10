/* Calculate Average:

Description: Write a function to calculate the average of an array of numbers.
Input: [10, 20, 30, 40, 50]
Expected Output: 30
 */

function calculateAverage(numbersArray) {
  if (!Array.isArray(numbersArray)) return 0;

  const sum = (total, currentValue) => total + currentValue;
  const total = numbersArray.reduce(sum, 0);
  const avg = total / numbersArray.length;

  return avg;
}

console.log("calculateAverage: ", calculateAverage([10, 20, 30, 40, 50]));
console.log("calculateAverage: ", calculateAverage(10));
