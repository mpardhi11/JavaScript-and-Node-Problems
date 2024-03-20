// const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

function curryUnaryFunction(a) {
  return function sum(b) {
    return function sum2(c) {
      return a + b + c;
    };
  };
}

curryUnaryFunction(1); // returns a function: b => c => 1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

console.log(curryUnaryFunction(1)(2)); // [Function: sum2]
console.log(curryUnaryFunction(1)(2)(3)); // 6

const a = curryUnaryFunction(1);
const b = a(2);
const c = b(3);

console.log(a); // [Function: sum]
console.log(b); // [Function: sum2]
console.log(c); // 6
