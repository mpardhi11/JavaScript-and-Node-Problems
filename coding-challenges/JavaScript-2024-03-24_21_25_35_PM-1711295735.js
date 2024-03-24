/*
Write functions to compress and decompress strings
*/

function compressString(string) {
  let count = 1;
  let compress = '';

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    const nxtElement = string[index + 1] || '';

    if (element === nxtElement) count++;

    if (element !== nxtElement) {
      compress += `${element}${count}`;
      count = 1;
    }
  }
  return compress;
}

function deCompressString(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 2) {
    const element = string[index];
    let elementCount = parseInt(string[index + 1] || 0);

    while (elementCount > 0) {
      result = `${result}${element}`;
      elementCount--;
    }
  }
  return result;
}

const strToCompress = '%%(((abbdddd  && 8 === ffoo 00';
const compress = compressString(strToCompress);
const deCompress = deCompressString(compress);

console.log('original: ', strToCompress); // %%(((abbdddd  && 8 === ffoo 00
console.log('compress: ', compress); // %2(3a1b2d4 2&2 181 1=3 1f2o2 102
console.log('deCompress: ', deCompress); // %%(((abbdddd  && 8 === ffoo 00
console.log('isTheyEqual', strToCompress === deCompress); // true
