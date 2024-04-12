const a = [1, 2, 3];
const b = a.slice(0, 2).push(4);
console.log(b); // 3
console.log(a); // [ 1, 2, 3 ]

/* 
What is the output?
1) [1, 2, 4]
2) [1, 2]
3) 3 // correct answer due to the push method returns the length of the array
4) 4 
*/
