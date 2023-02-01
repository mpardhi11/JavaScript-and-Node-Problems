// Find the Amount of Potatoes

function potatoes(str) {
  const count = (str.match(/potato/g) || []).length;
  return count;
}

const value1 = potatoes("potato"); // ➞ 1

const value2 = potatoes("potatopotato"); // ➞ 2

const value3 = potatoes("potatoapple"); //  ➞ 1

console.log(value1);
console.log(value2);
console.log(value3);
