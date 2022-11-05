const express = require("express");

const app = express();

const port = 3000;

const server = app.listen(port, message);

app.get("/", home);

app.get("/:param", home);

function home(req, res) {
  var request = req.params;
  if (!request.param == "") {
    res.send("Your request is " + request.param);
  } else {
    res.send("express server is running ...");
  }
}

function message() {
  console.log("Sever is listening in port " + port + " ...");
}
