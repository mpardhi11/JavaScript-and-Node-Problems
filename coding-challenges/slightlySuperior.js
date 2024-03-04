// isFirstSuperior([1, 2, 4], [1, 2, 3]); //  ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]); //  ➞ true

// isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]); //  ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]); //  ➞ false

// isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]); //  ➞ false

function isFirstSuperior(arr1, arr2) {
  console.log(arr1.toString() === arr2.toString());
  if (arr1.toString() !== arr2.toString()) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}
