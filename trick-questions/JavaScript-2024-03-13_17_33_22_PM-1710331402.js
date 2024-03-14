// Guess the output
// const x = (1, 2, 3, 4);
// const x = (true === true, false === false); // true
//                         o/p true
const x = (true === true, false === false, 4 > 5 ? 'John' : 'Jane'); // x =  Jane
//                                         o/p Jane
console.log('x = ', x); //x =  4

/*
Why is the output 4?
treated as expression 

The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. In this case, the last operand is 4. Therefore, the value of x is 4.
*/
