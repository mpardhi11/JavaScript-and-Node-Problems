/* 
24-Hour Time
Write a function that receives the time in 12-hour AM/PM format and returns 
a string representation of the time in military (24-hour) format.

Examples
Notes
Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
*/

function convertTime(str) {
  let result = '';
  if (str?.length < 10) {
    throw new Error('Invalid format');
  }

  let [hour, minutes, secAndOther] = str?.split(':');
  hour = hour;
  minutes = minutes;
  const amOrPm = secAndOther.slice(2);
  let sec = secAndOther?.replace(amOrPm, '');

  if (amOrPm === 'AM') {
    if (hour == 12) {
      result = `00:${minutes}:${sec}`;
    } else if (hour < 12) {
      result = `${hour}:${minutes}:${sec}`;
    }
  } else if (amOrPm === 'PM') {
    if (hour == 12) {
      result = `12:${minutes}:${sec}`;
    } else if (hour < 12) {
      result = `${12 + +hour}:${minutes}:${sec}`;
    }
  }
  console.log('result', result);
}

convertTime('07:05:45PM'); //, '19:05:45');
convertTime('12:40:22AM'); //, '00:40:22');
convertTime('12:45:54PM'); //, '12:45:54');
convertTime('05:32:33PM'); //, '17:32:33');
convertTime('11:59:59PM'); //, '23:59:59');
convertTime('11:59:59AM'); //, '11:59:59');
convertTime('06:00:19AM'); //, '06:00:19');
