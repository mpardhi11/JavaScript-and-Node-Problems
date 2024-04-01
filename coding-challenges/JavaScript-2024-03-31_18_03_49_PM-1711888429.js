/* 
Create a function that takes a variable number of arguments,
each argument representing the number of items in a group.
The function should return the
number of permutations (combinations) of choices you would have
if you selected one item from each group.

Examples
combinations(2, 3) ➞ 6
combinations(3, 7, 4) ➞ 84
combinations(2, 3, 4, 5) ➞ 120

Notes
Input may include the number zero.
*/

function combinations(...array) {
  const result = array.reduce((acc, value) => {
    if (value !== 0) return (acc *= Math.abs(value));
    return acc;
  }, 1);
  return result;
}

console.log(combinations(2, 3)); //  ➞ 6
console.log(combinations(3, 7, 4)); //  ➞ 84
console.log(combinations(0, 2, 3, 4, 5)); // ➞ 120
console.log(combinations(0, -2, 3, 4, 5)); // ➞ 120
