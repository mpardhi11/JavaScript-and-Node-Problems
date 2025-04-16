let y = 1;

// eslint-disable-next-line no-constant-condition
if (function f() {}) {
  y += typeof f;
}
console.log(y); // 1undefined
/* 
1. var y = 1; — sets y to 1.
2.  The if (function f() {}) condition:
    •   This declares a function expression named f, but in this context (inside an if statement), it’s not treated as a declaration in the global scope.
    •   The function itself returns undefined, but the function expression is truthy, so the if block executes.
3.  Inside the if block: y += typeof f;
    •   Here’s the tricky part: f is not defined in this scope because it was not hoisted outside the function expression.
    •   So typeof f returns "undefined" (not an error).
    •   y += "undefined" becomes '1undefined' due to type coercion (y becomes a string).
4.  console.log(y); outputs:


*/

// -------------
/* var x = 1;

if (function f() {}) {
  x += typeof x;
}
console.log(x); */
