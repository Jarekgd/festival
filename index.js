const express = require("express"); // Synchronous import
const app = express(); // Creating server, instance of express
const PORT = 5000;
const path = require("path"); // Path to EJS files

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbPath = path.join(__dirname, "public", "data", "festival.db");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("festival.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Database opened successfully.");
  }
});

app.set("view engine", "ejs");
// Placement of EJS files:
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const lineup_query = "SELECT artist_name FROM artists";
  db.all(lineup_query, [], (err, rows) => {
    if (err) {
      console.error("Error querying database: ", err.message);
      res.status(500).send("Database error");
      return;
    }
    res.render("index", { artists: rows });
  });
});

app.get("/musicians", (req, res) => {
  const musicians_query =
    "SELECT artist_name, genre_name FROM artists \
                          INNER JOIN genres ON artists.genre_id = genres.genre_id";
  db.all(musicians_query, [], (err, rows) => {
    if (err) {
      console.error("Error querying musicians data:", err.message);
      res.status(500).send("Database error");
      return;
    }
    res.render("musicians", { artists: rows });
  });
});

app.get("/archive", (req, res) => {
  const years = {

  }
  const archive_query =
              "SELECT artist_name, genre_name, performance_date \
              FROM artists \
              INNER JOIN genres ON artists.genre_id = genres.genre_id \
              INNER JOIN performances ON artists.artist_id = performances.artist_id \
              WHERE strftime('%Y', performances.performance_date) LIKE ?;"

  db.all(archive_query, [], (err, rows) => {
    if (err) {
      console.error("Error querying musicians data:", err.message);
      res.status(500).send("Database error");
      return;
    }
    res.render("archive", {artists: rows});
  });
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


app.get("/contact", (req,res) => {
  res.render("contact");
});

app.get("/footer", (req, res) => {
res.render("footer");
});



// Serving static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
