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

const apiServer = http.createServer((req, res) => {
  const users = [
    { id: 1, name: "Shiv" },
    { id: 2, name: "Parvati" },
    { id: 3, name: "Kartikeya" },
    { id: 4, name: "Ganesh" },
  ];

  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-Type", "application/json");
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "Not found!" }));
    }
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Not found!" }));
    res.end();
  }
});

apiServer.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
