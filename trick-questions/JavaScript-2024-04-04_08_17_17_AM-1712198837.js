const a = [1, 2, 3];
const b = a.flatMap((x) => [x, x * 2]);
console.log(b); // [ 1, 2, 2, 4, 3, 6 ]

/* 
What is the output?
1) [1, 2, 3, 2, 4, 6]
2) [1, 2, 2, 4, 3, 6]  ✅✅✅✅
3) [2, 4, 6]
4) [1, 2, 3]
 */
