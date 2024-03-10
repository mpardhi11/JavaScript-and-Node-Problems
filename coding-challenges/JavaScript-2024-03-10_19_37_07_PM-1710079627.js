/* Convert Celsius to Fahrenheit:

Description: Write a function to convert a temperature from Celsius to Fahrenheit.
Formula: fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr  
Input: 25
Expected Output: 77
 */

function celsiusToFahrenheit(celsius) {
  if (isNaN(celsius)) return 0;

  const fahrenheit = (celsius * 9.0) / 5.0 + 32.0;
  return fahrenheit;
}
const output = celsiusToFahrenheit(0);
console.log("output: 👆👆👆👆👆👆👆", output);
