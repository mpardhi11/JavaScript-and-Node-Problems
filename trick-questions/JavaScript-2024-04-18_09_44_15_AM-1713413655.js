/* What is the output?
1) 1
2) 2undefined
3) 1undefined
4) TypeError 
*/

var x = 1;
// function f() {} is a truthy value
// but the function f() {} is not assigned to any variable
if (function f() {}) {
  x += typeof f; // x = 1 + typeof f i.e undefined
  // 1+undefined = 1undefined
}
console.log(x);

function f() {}
console.log(typeof f); // function
