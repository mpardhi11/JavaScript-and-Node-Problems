setTimeout(() => {
  console.log("Timer stops");
}, 5000);

function x(y) {
  console.log("x is called");

  y();
}

x(() => {
  console.log("y is called");
});
