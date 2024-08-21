import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
import { loadEnv } from "./loadEnv.js";
loadEnv();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  //   res.setHeader("Content-Type", "text/plain");
  let filePath;
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      filePath = path.join(__dirname, "public", "index.html");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      filePath = path.join(__dirname, "public", "about.html");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      filePath = path.join(__dirname, "public", "not-found.html");
      break;
  }

  const data = await fs.readFile(filePath);
  res.end(data);
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
