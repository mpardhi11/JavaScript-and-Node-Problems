/* Nathan loves cycling. 
Because Nathan knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling. 
Given the time in hours, you need to return the number of litres of water 
that Nathan will drink, rounded to the smallest value.

 */

console.log(litres(0)); // 0
console.log(litres(2)); // 1
console.log(litres(1.4)); // 0
console.log(litres(12.3)); // 6
console.log(litres(0.82)); // 0
console.log(litres(11.8)); // 5
console.log(litres(1787)); // 893
console.log(litres('qq')); // Invalid input
console.log(litres(-2)); // Invalid input

function litres(time) {
  if (isNaN(time) || time < 0) return 'Invalid input';

  return Math.floor(time * 0.5);
}
