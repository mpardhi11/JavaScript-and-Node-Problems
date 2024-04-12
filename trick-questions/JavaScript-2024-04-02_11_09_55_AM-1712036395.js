// How can I get reference error for variable a and b?
// Meaning, how can I get that a and b are not defined?
function show() {
  {
    var a = 10;
    var b = 20;
  }
  console.log('a', a); // a 10
  console.log('b', b); // b 20
}
show();

// ---------------------------------------------------------------
// Simplest way to get reference error is to use let instead of var.
function show() {
  {
    let a = 10;
    let b = 20;
  }
  console.log('a', a); // a 10
  console.log('b', b); // b 20
}
show();
// ---------------------------------------------------------------
// By using IIFE, we can get reference error for a and b.
// Why? Because a and b are defined inside the function and not accessible outside.
function show() {
  (() => {
    var a = 10;
    var b = 20;
  })();
  console.log('a', a); // a 10
  console.log('b', b); // b 20
}

show();

// ---------------------------------------------------------------
function show() {
  (() => {
    global.a = 10; // Here we are using global object to define a and b.
    global.b = 20;
  })();
  console.log('a', a); // a 10 // resulting we can access a and b.
  console.log('b', b); // b 20
}

show();
