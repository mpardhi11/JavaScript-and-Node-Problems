import fs from "fs/promises";

const remove = async () => {
  try {
    await fs.rmdir("test", { maxRetries: 2 });
    console.log("Done");
  } catch (error) {
    console.log(error.message);
    console.log();
  }
};

remove();
