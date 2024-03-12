/* Read and Print File Contents:

Description: Write a Node.js script to read the contents of a file (e.g., "example.txt") 
and print them to the console.
 */

import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const fileToRead = 'test.ts';

fs.readFile(`${__dirName}/../${fileToRead}`, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

/*
import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const fileToRead = 'package.json';

const data = await fs.readFile(`${__dirName}/../${fileToRead}`, 'utf-8');

console.log('data: 👆👆👆👆👆👆👆', data);
*/
