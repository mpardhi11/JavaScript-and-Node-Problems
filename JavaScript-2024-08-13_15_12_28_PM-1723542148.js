// Write a JavaScript program to find the maximum number in an array.

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4, 5]));
findMax([10, 20, 30, 40, 50]); // 50
