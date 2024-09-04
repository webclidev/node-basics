import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";
const urlObj = new URL(urlString);
console.log("::urlObj.search::", urlObj.search);
console.log("::url.format(urlObj)::", url.format(urlObj));

const params = new URLSearchParams(urlObj.search);
console.log("::params.get('q')", params.get("q"));

params.append("limit", 5);
console.log("::params.toString()::", params.toString());

console.log(
  "::url.fileURLToPath(import.meta.url)::",
  url.fileURLToPath(import.meta.url)
);
