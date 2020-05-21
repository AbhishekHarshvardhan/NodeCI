const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hi there");
});

app.listen(process.env.PORT || 3000);

function sum(a, b) {
  return a + b;
}
module.exports = sum;
