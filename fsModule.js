import fs from "fs";

// Callback version
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous version
const data = fs.readFileSync("./text.txt", "utf-8");
console.log(data);
