import fs from "fs/promises";
import path from "path";

const remove = async () => {
  try {
    let currentPath = path.dirname(__dirname);
    console.log("file: getDire.js:6 ~ remove ~ currentPath", currentPath);

    let dir = await fs.readdir(currentPath);
    console.log(dir);
  } catch (error) {
    console.log(error.message);
    console.log();
  }
};

remove();
