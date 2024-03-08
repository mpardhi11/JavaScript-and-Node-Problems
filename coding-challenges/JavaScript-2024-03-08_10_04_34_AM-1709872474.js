/*
Rotate Array:
Implement a function to rotate the elements of an array to the right by a given number of steps.

Input: ([1, 2, 3, 4, 5], 2)
Expected Output: [4, 5, 1, 2, 3]
*/

function rotateElementsArray(array, numberOfSteps) {
  for (let index = 0; index < numberOfSteps; index++) {
    const popElem = array.pop();
    array.unshift(popElem);
  }

  return array;
}

const result1 = rotateElementsArray([1, 2, 3, 4, 5], 3);
console.log("result1: 👆👆👆👆👆👆👆", result1); // [ 3, 4, 5, 1, 2 ]

const result2 = rotateElementsArray([1, 2, 3, 54, 18.4, 4, 5], 8);
console.log("result2: 👆👆👆👆👆👆👆", result2); // [5, 1, 2, 3, 54, 18.4, 4];
