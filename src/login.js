const mysql = require("mysql");

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // admin
  database: "login", // database
});

exports.logins = (username, password, req, res) => {
  if (username === "") {
    res.send('<h1 style="color: red;">Error!</h1>');
  } else {
    con.connect((err) => {
      if (err) console.log(err.message);

      con.query("SELECT `email`, `password` FROM `admin`", (error, respond) => {
        if (error) console.log(error);

        if (
          !(respond[0].email === username && respond[0].password === password)
        ) {
          res.send(
            `<h1 style="color: red;">Incorrect password or username!</h1>`
          );
        } else {
          res.send(
            `<h1>Welcome <span style="color:teal;">${username}</span>!</h1>`
          );
        }
      });
    });
  }
};
