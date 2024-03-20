/* 
Write a function that takes n number of arrays of integers and returns an array of distinct integers 
i.e. the integers should appear only once among the input arrays. 
Example: [1,2,3], [2,3,4], [3,4,5] => [1,5]. 

Note: number of arrays can be n. 
The function should work when inputs are increased or decreased.
 */

function getDistinctIntegers(...arrays) {
  const newArray = [].concat(...arrays);
  const distinctIntegers = newArray.filter((num, _, array) => {
    return array.indexOf(num) === array.lastIndexOf(num);
  });
  return distinctIntegers || [];
}

const result1 = getDistinctIntegers([1, 2, 3], [2, 3, 4], [3, 4, 5]);
console.log(result1); // [1, 5]
const result2 = getDistinctIntegers([1, 2, 3], [2, 3, 4], [3, 4, 5, 9]);
console.log(result2); // [1, 5, 9]
const result3 = getDistinctIntegers([1, 2, 3], [2, 3, 4], [3, 4, 5, 9], [99, 88]);
console.log(result3); // [1, 5, 9, 99, 88]
