/* 
Given an sorted array A of size N. 
Find number of elements which are less than or equal to given element X.
N = 6
A[] = {1, 2, 4, 5, 8, 10}
X = 9
Output:5
 */

function countNumber(arr, x) {
  return arr.reduce((total, currentElem) => {
    if (currentElem <= x) total++;
    return total;
  }, 0);
}

console.log(countNumber([1, 2, 4, 5, 8, 10], 9));
console.log(countNumber([1, 2, 4, 5, 8, 10], 8));
console.log(countNumber([1, 2, 4, 5, 8, 10], 10));
