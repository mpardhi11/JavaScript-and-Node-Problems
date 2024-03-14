import moment from 'moment-timezone';
// Assuming you have moment.js library included in your project

// Get the current timestamp in Unix format
const unixTimestamp = moment().unix();

// Format the date as per your requirement
const formattedDate = moment().format('YYYY-MM-DD_HH_mm_ss_A');

// Combine the components to create the desired string
let resultString = `JavaScript-${formattedDate}-${unixTimestamp}`;
console.log(resultString);
resultString = `Node-${formattedDate}-${unixTimestamp}`;
console.log(resultString);
resultString = `JS-Theory-${formattedDate}-${unixTimestamp}`;
console.log(resultString);
