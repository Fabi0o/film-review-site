const express = require("express");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cors = require("cors");

app.use(cors());

require("dotenv").config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

const db = mysql.createPool({
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});
db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected succesful:" + connection.threadId);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server Started on port ${port}...`));

app.use(express.json());

app.post("/createUser", async (req, res) => {
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const name = req.body.name;
  const status = req.body.status;
  const sqlSearch = "SELECT * FROM users WHERE email = ?";
  const search_query = mysql.format(sqlSearch, [email]);
  const sqlInsert = "INSERT INTO users VALUES (null,?,?,?,?)";
  const insert_query = mysql.format(sqlInsert, [
    name,
    email,
    hashedPassword,
    status,
  ]);
  db.query(search_query, (err, result) => {
    if (err) throw err;
    console.log("------> Search Results");
    console.log(result.length);
    if (result.length != 0) {
      console.log("------> User already exists");
      res.sendStatus(409);
    } else {
      db.query(insert_query, (err, result) => {
        if (err) throw err;
        console.log("--------> Created new User");
        console.log(result.insertId);
        res.sendStatus(201);
      });
    }
  });
});
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sqlSearch = "Select * from users where email = ?";
  const search_query = mysql.format(sqlSearch, [email]);
  db.query(search_query, async (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      console.log("--------> User does not exist");
      res.sendStatus(404);
    } else if (result[0].status == "blocked") {
      console.log("--------> User blocked");
      res.sendStatus(404);
    } else {
      const hashedPassword = result[0].password;
      if (await bcrypt.compare(password, hashedPassword)) {
        console.log("---------> Login Successful");
        res.send(result[0].username);
      } else {
        console.log("---------> Password Incorrect");
        res.sendStatus(404);
      }
    }
  });
});
app.get("/reviews", (req, res) => {
  db.query("SELECT * FROM reviews", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
