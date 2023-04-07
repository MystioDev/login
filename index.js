const lg = require("./src/login");

const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")));
var __page = (__dirname += "/views/");

app.get("/", (req, res) => {
  res.sendFile(__page + "index.html");
});

app.get("/login", (req, res) => {
  lg.logins(req.query.email, req.query.password, req, res);
});

app.get("*", (req, res, next) => {
  app.get("*", (request, respond, next) => {
    respond.sendFile(__page + "404.html");
  });
  next();
});

app.listen(port, () => {
  console.log(`\n\nThe server running on: http://localhost:${port}/\n`);
});
