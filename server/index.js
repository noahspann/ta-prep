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
  request ('https://jsonplaceholder.typicode.com/todos', (err, response, body) =>{
    if (err) {
      console.log('error in app.get request function', err);
      
    } else {
     let parsedBody = JSON.parse(body)
      console.log('this is the api body', parsedBody);
      res.send(parsedBody)
    }
  })
});

app.post('/todos', (req, res) => {
  console.log('succesfully in post handler', req.body.title);
  let todo = req.body.title;
  let query = `INSERT INTO todos VALUES(${todo})`
})

app.listen(3000, () => console.log("Now listening on port 3000!"));
