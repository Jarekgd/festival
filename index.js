const express = require("express"); // Synchronous import
const app = express(); // Creating server
const PORT = 5000;
const path = require("path"); // Path to EJS files

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('festival.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Database opened successfully.");
    }
});

app.set("view engine", "ejs");
// Placement of EJS files:
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

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get data from the database
app.get('/festival.db', (req, res) => {
    const query = 'SELECT * FROM musicians;';
    console.log("Executing query:", query);

    database.all(query, (err, rows) => {
        if (err) {
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            console.log("Query result:", rows);
            res.json(rows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
