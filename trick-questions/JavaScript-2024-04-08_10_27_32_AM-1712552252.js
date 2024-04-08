var x = 20;

function myFunction() {
  console.log(x); // undefined Due to 1) hoisting and 2) variable shadowing
  var x = 10; // x shadows the global variable x
}

myFunction();
