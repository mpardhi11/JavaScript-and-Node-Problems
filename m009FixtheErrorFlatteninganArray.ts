// Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// ---------------------------------------------

// Examples
let ourTuple: [number, boolean, string];

function flatten(arr: Array<any>) {
  let result: Array<number | boolean | string> = [];

  arr.map((val) => {
    if (Array.isArray(val)) {
      result.push(...val);
    } else {
      result.push(val);
    }
  });
  console.log(result);
}

flatten([[1, 2], [3, 4], 5]); // ➞  Expected: [1, 2, 3, 4]

flatten([["a", "b"], "mohit", ["c", "d"]]); // ➞ // Expected: ["a", "b", "c", "d"]

flatten([
  [true, false],
  [false, false],
]); // ➞ // Expected: [true, false, false, false]
