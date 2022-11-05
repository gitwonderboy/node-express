const express = require("express");

const app = express();

const server = app.listen(3000, message);

function message() {
  console.log("Sever is listening ...");
}
