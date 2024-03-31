/*
Write fun to merge 2 sorted array
*/
function mergeArray(arr1, arr2) {
  let result = [];

  let array1Idx1st = arr1?.at(0);
  let array1IdxLast = arr1?.at(-1);
  let array2Idx1st = arr2?.at(0);
  let array2IdxLast = arr2?.at(-1);

  if (array1Idx1st < array1IdxLast && array1IdxLast < array2Idx1st) {
    return arr1?.concat(...arr2);
  }

  if (array1Idx1st < array1IdxLast && array1Idx1st > array2Idx1st && array1Idx1st > array2IdxLast) {
    return arr2?.concat(...arr1);
  }
  result = arr1?.concat(...arr2);

  result = bubbleSort(result);
  return result;
}

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(mergeArray([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(mergeArray([4, 5, 6], [1, 2, 3])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(mergeArray([1, 2, 3], [1, 5, 6])); // [ 1, 1, 2, 3, 5, 6 ]
