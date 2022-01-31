const express = require("express");
//const fs = require("fs");
const fetch = require("node-fetch");
const app = express();

let fetchDataFromURL = async () => {
  let res = await fetch("https://reqres.in/api/users");
  let result = await res.json();
  return result.data;
};

let apiData = fetchDataFromURL();
app.get("/", function (req, res) {
  res.send("<h1>Welcome to Home Page</h1>");
});

// let readJsonFile = () => {
//   let data = fs.readFileSync("./api.json", "utf-8", function (_, data) {
//     return data;
//   });
//   return JSON.parse(data);
// };

app.get("/users", function (req, res) {
  apiData.then((data) => {
    res.send(
      data.map((user) => {
        return {
          id: user.id,
          email: user.email,
          url: `${req.url}/${user.id}`,
        };
      })
    );
  });
});

app.get("/users/:id", function (req, res) {
  apiData.then((data) => {
    res.send(data[req.params.id - 1]);
  });
});

app.listen(3000, function (req, res) {
  console.log("Running");
});
