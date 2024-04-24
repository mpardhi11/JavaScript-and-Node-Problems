let x = 2;
console.log('x:', x);
console.log(x++ + x); // Output: 5
console.log('x:', x);
// Why is the output 4?
// The expression x+++x is evaluated as x++ + x.
// The first x++ returns the value of x before the increment operation, which is 2.
// The second x is incremented by 1, so it becomes 3.
// The sum of 2 and 3 is 5, which is the output of the expression.
//
