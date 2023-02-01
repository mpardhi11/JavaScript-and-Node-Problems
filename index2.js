const arr = [11, 552, 6, 7, 4, 8, 11, 55, 62, 45, 11, 88];

// function reorder(a, b, arr) {
//   const result = [...b];

//   for (item of arr) {
//     result.push(item);
//   }

//   result.push(...a);
//   //   result.push(b);
//   return result;
// }

// const data = reorder(
//   [arr.shift(), arr.shift()],
//   [arr.shift(), arr.shift()],
//   arr
// );

// let a = arr.shift();
// let b = arr.shift();

arr.push(arr.shift(), arr.shift());

console.log(arr.toString());
