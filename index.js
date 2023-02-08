import fs from "fs";

const fsPromises = fs.promises;

async function readFile() {
  try {
    // let x = await fs.open("a.txt", "r", 0o666);
    let x = await fsPromises.readFile("a.txt", "utf8");

    console.log(x);
  } catch (error) {
    console.log(error);
  }
}

readFile();
