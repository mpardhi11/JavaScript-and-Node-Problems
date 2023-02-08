import fs from "fs/promises";

const rename = async () => {
  try {
    await fs.rename("a.txt", "b.txt"); // -> a.txt to b.txt
    console.log("Done");
  } catch (error) {
    try {
      await fs.rename("b.txt", "c.txt"); // if b.txt to c.txt
      console.log("Done");
    } catch (error) {
      console.log(error.message);
    }
  }
};

rename();

// const rename = async () => {
//   try {
//     await fs.rename("a.txt", "b.txt");
//     console.log("Done");
//   } catch (error) {
//     console.log(error.message);
//     console.log(error.errno);
//     console.log(error.code);
//     console.log(error.syscall);
//     console.log(error.path);
//     try {
//       await fs.rename("b.txt", "c.txt");
//       console.log("Done");
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// };

// rename();

// export default rename;
