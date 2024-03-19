/*
Write to a File:
Explain how you would use the fs module to write data to a file asynchronously. Provide an example code snippet.

const fs = require('fs');

fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data written to file');
});

*/

import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __fileName = dirname(import.meta.url);
const __dirName = dirname(__fileName);

const newFileName = 'example.txt';
const path = `${__dirName}/${newFileName}`;
console.log('path: 👆👆👆👆👆👆👆', path);

const dataToWrite = `
[Done] exited with code=0 in 0.144 seconds

[Running] node "c:\Users\mohit.pardhi\Documents\JavaScript-and-Node-Problems\fileNameCreator.js"
JavaScript-2024-03-18_11_06_35_AM-1710740195
Node-2024-03-18_11_06_35_AM-1710740195
JS-Theory-2024-03-18_11_06_35_AM-1710740195

[Done] exited with code=0 in 0.155 seconds
`;
if (fs.existsSync(newFileName)) {
  console.error('file already exist');
} else {
  const result = fs.writeFile(newFileName, dataToWrite, function cd(error) {
    if (error) throw error;
    console.log('File Save Successfully');
  });
}
