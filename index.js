const express = require("express");

const app = express();

const port = 3000;

const server = app.listen(port, message);

app.get("/", home);

function home(req, res) {
  res.send("I love express");
}

function message() {
  console.log("Sever is listening in port " + port + " ...");
}
