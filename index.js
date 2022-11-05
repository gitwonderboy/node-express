const express = require("express");

const app = express();

const port = 3000;

const server = app.listen(port, message);

app.use(express.static("dist"));

function message() {
  console.log("Website ready...");
  console.log("Sever is listening in port " + port + " ...");
}
