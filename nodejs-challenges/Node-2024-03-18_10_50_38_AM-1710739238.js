/*
Read File Contents:
Describe how you would use the fs module in Node.js to read the contents of a file asynchronously. Provide an example code snippet.
*/

import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const file = `${__dirName}/../closere.js`;

const data = await fs.readFile(file, 'utf-8');
console.log('data2: 👆👆👆👆👆👆👆', data);
