import fetch from "node-fetch";
// const data = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const x = async () => {
//   try {
//     let x = await fetch("https://jsonplaceholder.typicod.com/posts");
//     console.log(await x.json());
//   } catch (error) {
//     console.log("------->>>", error.type); //------->>> system
//     console.log("------->>>", error.errno); // ------->>> ENOTFOUND
//     console.log("------->>>", error.code); // ------->>> ENOTFOUND
//     console.log("------->>>", error.message); //------->>> request to https://jsonplaceholder.typicod.com/posts failed, reason: getaddrinfo ENOTFOUND jsonplaceholder.typicod.com
//     console.log("------->>>", error.erroredSysCall); //------->>> getaddrinfo
//   }
// };

// x();

async function callToAPI() {
  try {
    //   let x = await fetch("https://jsonplaceholder.typicod.com/posts");
    let x = await fetch("https://jsonplaceholder.typicode.com/posts");
    // let x = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(await x.json());
  } catch (error) {
    console.log("------->>>", error.type); //------->>> system
    console.log("------->>>", error.errno); // ------->>> ENOTFOUND
    console.log("------->>>", error.code); // ------->>> ENOTFOUND
    console.log("------->>>", error.message); //------->>> request to https://jsonplaceholder.typicod.com/posts failed, reason: getaddrinfo ENOTFOUND jsonplaceholder.typicod.com
    console.log("------->>>", error.erroredSysCall); //------->>> getaddrinfo
  }
}

callToAPI();
