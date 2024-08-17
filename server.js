import http from "http";

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Om Namah Shivay</h1>");
});

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});
