const express = require("express");
const app = express(); // Creating server
const PORT = 5000;
const path = require("path"); // path to ejs files

const sql = require("sqlite3");

app.use(express.static("src"));
app.set("view engine", "ejs");
// Placement of ejs files:
app.set("views", path.join(__dirname, "views"));

// Running root file default index.js
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/musicians", (req, res) => {
  res.render("musicians");
});

app.get("/archive", (req, res) => {
  res.render("archive");
});

app.get("/events", (req, res) => {
    res.render("events");
  });
  
  app.get("/quizzes", (req, res) => {
    res.render("quizzes");
  });
  
  app.get("/scenes", (req, res) => {
    res.render("scenes");
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
