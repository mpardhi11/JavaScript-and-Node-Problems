/*
Find the Largest Element:
Write a function to find the largest element in an array.
*/

const array = [1, 435, 7, 12, 99, 342];

function largestElement(arr) {
  return arr.sort((a, b) => a - b).at(-1); // Node V-20
  //   return arr.sort((a, b) => a - b)[arr.length - 1];
}

console.log("largestElement", largestElement(array));
