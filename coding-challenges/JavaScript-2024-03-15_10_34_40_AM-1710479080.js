/*
Remove Duplicates from Array:
Write a function that takes an array of integers and removes any duplicates, returning a new array with unique elements.

Input: [1, 2, 3, 2, 4, 5, 6, 1, 7]
Expected Output: [1, 2, 3, 4, 5, 6, 7]

*/

function removeDuplicates(array) {
  const data = [];
  const obj = {};

  for (const iterator of array) {
    if (!(iterator in obj)) {
      obj[iterator] = iterator;
      data.push(iterator);
    }
  }

  return data;
}

const array = [1, 2, 3, 2, 4, 5, 6, 1, 7, 2, 3];

const result = removeDuplicates(array);
console.log('result: ', result); // [1, 2, 3, 4, 5, 6, 7];
