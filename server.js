import http from "http";
import { loadEnv } from "./loadEnv.js";
loadEnv();

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Om Namah Shivay</h1>");
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
