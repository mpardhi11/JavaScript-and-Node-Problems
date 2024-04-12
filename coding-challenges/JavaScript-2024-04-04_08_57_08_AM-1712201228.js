// Function to calculate GCD (Greatest Common Divisor) using Euclid's algorithm
function gcd(a, b) {
  if (b === 0) {
    console.log('gcd ~ a: 👆👆👆👆👆👆👆', a, b);
    return a;
  } else {
    const temp = a % b;
    console.log('gcd ~ temp and b', temp, b);
    const op = gcd(b, temp);
    return op;
  }
}

// Function to calculate LCM (Least Common Multiple)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const num1 = 12;
const num2 = 18;
const result = lcm(num1, num2);
console.log(`LCM of ${num1} and ${num2} is ${result}`);
