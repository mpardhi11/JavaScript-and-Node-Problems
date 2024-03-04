/*
Create a function called findUniqueNumbers that takes an array of numbers as input 
and returns an array containing only the unique numbers from the input array. 
Ensure that the function works efficiently for large arrays 
and doesn't use any built-in JavaScript functions that directly solve this problem.
*/

const inputArray = [1, 2, 3, 4, 2, 5, 6, 1];
// Output: [1, 2, 3, 4, 5, 6]

function findUniqueNumbers(inputArray) {
  const uniqueElem = [];
  const visitedNumbers = new Set();

  for (const num of inputArray) {
    if (!visitedNumbers.has(num)) {
      uniqueElem.push(num);
      visitedNumbers.add(num);
    }
  }

  return uniqueElem;
}

const result = findUniqueNumbers(inputArray);
console.log("result1: 👆👆👆👆👆👆👆", result); // [ 1, 2, 3, 4, 5, 6 ]

function findUniqueNumbersUsingSet(numbers) {
  return Array.from(new Set(numbers));
}

const result2 = findUniqueNumbersUsingSet(inputArray);
console.log("result2: 👆👆👆👆👆👆👆", result2); // [ 1, 2, 3, 4, 5, 6 ]

function findUniqueNumbersUsingSetDestructureWay(numbers) {
  return [...new Set(numbers)];
}

const result3 = findUniqueNumbersUsingSetDestructureWay(inputArray);
console.log("result3: 👆👆👆👆👆👆👆", result3); // [ 1, 2, 3, 4, 5, 6 ]
