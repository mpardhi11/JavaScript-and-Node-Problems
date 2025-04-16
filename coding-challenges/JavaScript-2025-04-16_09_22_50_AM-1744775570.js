console.log('2' > '10'); // true
/* Why is this true?
    Because when comparing strings, JavaScript compares them character by character based on their Unicode values.
    In this case, '2' has a higher Unicode value is 32 and '1' is 31.
    So, '2' is considered greater than '1'.
    Therefore, '2' is greater than '10' when compared as strings.
 */

console.log('2' > 10); // false
/* Why is this false?
    Because when comparing a string and a number, 
    JavaScript converts the string to a number.
    In this case, '2' is converted to 2, and 2 is not greater than 10.
    Therefore, '2' is less than 10 when compared as numbers.
 */
