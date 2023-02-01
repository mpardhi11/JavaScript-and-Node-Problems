import fs from "fs";

const data = fs.readFile("app.txt", function (err, data) {
  if (err) {
    console.log("--->>>", err.path);
    console.log("--->>>");
    throw err;
  } else {
    console.log(data.toString());
  }
});

// data;//

let APIDat = async function () {
  let apiData = await call;
};
