import http from "http";

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ name: "Om Namah Shivay" }));
});

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});
