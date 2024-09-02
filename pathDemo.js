import path from "path";
import url from "url";

const filePath = "/dir1/dir2/text.html";

console.log("::path.basename()::", path.basename(filePath));
console.log("::path.dirname()::", path.dirname(filePath));
console.log("::path.extname()::", path.extname(filePath));
console.log("::path.parse()::", path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("::path.join()::", path.join(__dirname, "dir1", "dir2", "text.js"));
