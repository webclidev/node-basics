import fs from "fs/promises";

(async () => {
  await fs.writeFile("./text.txt", "Om Namah Shivay");
  await fs.appendFile("./text.txt", "\nJai Shree Ram");
})();

const file = await fs.readFile("./text.txt", "utf-8");

console.log(file);
