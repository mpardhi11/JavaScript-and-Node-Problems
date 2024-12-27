function hof() {
  return () => 'Hello World';
}

const value = hof();

console.log(value());
