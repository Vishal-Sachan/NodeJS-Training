var http = require("http");
var options = {
  host: "www.youtube.com",
  path: "/LoganWolF",
  method: "GET",
};

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Hii There \nI am Vishal Sachan");
      res.end();
    }
    if (req.url === "/logan/wolf") {
      res.write(JSON.stringify([1, 2, 3, 4]));
      res.end();
    }
  })
  .listen(3000);
console.log("Listening on 3000...");
http
  .request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
  })
  .end();
