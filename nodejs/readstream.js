const fs = require("fs");

const readableStream = fs.createReadStream("./joko.txt", {
  highWaterMark: 20,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("Done");
});

const tulis = fs.createWriteStream("write.txt");
tulis.write("baris pertama \n");
tulis.end("baris kedua \n");
process.stdout.write(`[${tulis.read()}`);
tulis.on("end", () => {
  console.log("done");
});
