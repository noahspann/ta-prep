const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mysql = require('mysql');
const db = require('../database/index.js')

const app = express();
//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.get("/api", (req, res) => {
  console.log("successful request!");
  let query = 'SELECT * FROM todos';
  db.query(query, (err, data) => {
    if (err) {
      console.log('error in app.get query', err)
    } else {
     res.send(data)
    }
  })
});

app.post('/todos', (req, res) => {
  console.log('succesfully in post handler', req.body);
  let todo = req.body.title;
  let user = req.body.user;
  let query = `INSERT INTO todos (user, title) VALUES('${user}', '${todo}')`;
  db.query(query, (err, data) => {
    if (err) {
      console.log('error in database insertion query', err);
    } else {
      console.log('successful database insertion');
      res.send(req.body);
    }
  })
})

app.listen(3000, () => console.log("Now listening on port 3000!"));
