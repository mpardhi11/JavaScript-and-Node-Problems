/*
Remove Duplicates:
Write a function to remove duplicate elements from an array.
*/

function removeDuplicate(array) {
  return new Set(...array);
}

const result1 = removeDuplicate([1, 23, 4, 2, 1, 5, 6]);
console.log("result1: ", result1);
