import http from "http";
import { loadEnv } from "./loadEnv.js";
loadEnv();

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/plain");
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Om Namah Shivay</h1>");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        "<h1>Shiva</h1><p>Is the Supreme Being in Shaivism, one of the major traditions within Hinduism. Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu. In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe.</p>"
      );
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<p>Not found</p>");
      break;
  }
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
