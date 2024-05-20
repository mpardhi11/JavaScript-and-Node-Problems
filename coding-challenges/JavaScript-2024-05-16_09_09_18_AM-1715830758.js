/* 
Write a program to create largest number from elements from the array.For ex array={5,20,90} output =90520
*/

function largestNumberFromArray(array) {
  let largestNumber = array.sort((a, b) => {
    let x = parseInt(`${b}${a}`);
    let z = parseInt(`${a}${b}`);
    console.log('Two numbers ', x, z);
    console.log('Subtraction', x - z);
    return x - z;
  });

  return largestNumber.join('');
}

let array = [5, 20, 90];
console.log(largestNumberFromArray(array)); // 90520

let array1 = [5, 20, 90, 9, 8, 2, 1];
// console.log(largestNumberFromArray(array1)); // 990852201
//905
