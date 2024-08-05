let count = 0;

const counter = (function () {
  count = 0;
  return function () {
    count += 1;
    return count;
  };
})();

count = 10;
counter();
console.log(count);

/* 
What is the output?
1) 0
2) 11       
3) 1
4) NaN
*/
// correct answer why because count is a global variable
// and it is assigned to 10 and then counter function is called which increments the count by 1
