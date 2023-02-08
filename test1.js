import fs from "fs";

// async function xyz() {
//   try {
//       console.log(x);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
let x = fs.readFileSync("a.tx", "utf8");

// xyz();

console.log(x);
