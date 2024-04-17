/* 
You are given a sorted array of unique integers. 
It is given that each element in the array is unique. 
Also, an element is given. 
Write a Java program to find the index of the element present in the array. 
If the element is not present in the array, then find the index where it should be put in the array so that the array remains sorted even after putting the element.
*/

function findIndexOrReturnIndex(arr, ele) {
  if (arr.length < 1) return -1;

  if (isNaN(ele)) return -1;

  let index = arr.indexOf(ele);
  if (index !== -1) return index;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const nxtElement = arr[i + 1] || Infinity;
    if (ele > element && ele < nxtElement) {
      return i + 1;
    } else if (ele < element) {
      return i;
    }
  }
}

console.log(findIndexOrReturnIndex([1, 3, 5, 6], 5)); // 2
console.log(findIndexOrReturnIndex([1, 3, 5, 9], 6)); // 3
console.log(findIndexOrReturnIndex([1], 5)); // 1
console.log(findIndexOrReturnIndex([6], 5)); // 0
