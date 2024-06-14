const express = require("express"); // Synchronous import
const app = express(); // Creating server, instance of express
const PORT = 5000;
const path = require("path"); // Path to EJS files

// middleware
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const dbPath = path.join(__dirname, "public", "data", "festival.db");

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("festival.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Database opened successfully.");
  }
});

// const contacts = new sqlite3.Database("contacts.db", (err) => {
//   if (err) {
//     console.error("Error opening database:", err.message);
//   } else {
//     console.log("Contacts opened successfully.");
//   }
// });

app.set("view engine", "ejs");
// Placement of EJS files:
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const lineup_query = "SELECT artist_name, performance_time \
    FROM artists \
    INNER JOIN performances ON artists.artist_id=performances.artist_id \
    WHERE performance_date LIKE '%2024%'";
  db.all(lineup_query, [], (err, rows) => {
    if (err) {
      console.error("Error querying database: ", err.message);
      res.status(500).send("Database error");
      return;
    }
    res.render("index", { artists: rows });
  });
});

app.get("/nav", (req, res) => {
  res.render("nav");
});

app.get("/nav_other", (req, res) => {
  res.render("nav_other");
});

app.get("/musicians", (req, res) => {
  const musicians_query =
    "SELECT artist_name, genre_name, artist_picture, artist_description \
    FROM artists \
    INNER JOIN genres ON artists.genre_id = genres.genre_id \
    INNER JOIN performances ON artists.artist_id=performances.artist_id \
    WHERE performance_date LIKE '%2024%'";
  db.all(musicians_query, [], (err, rows) => {
    if (err) {
      console.error("Error querying musicians data:", err.message);
      res.status(500).send("Database error");
      return;
    }
    res.render("musicians", { artists: rows });
  });
});

// contacts.serialize(() => {
//   contacts.run(`CREATE TABLE IF NOT EXISTS contacts(
//     contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     contact_name TEXT,
//     contact_email TEXT,
//     message TEXT
//   )`);
// });

app.get("/events", (req, res) => {
  res.render("events");
});

app.get("/quizzes", (req, res) => {
  res.render("quizzes");
});

app.get("/scenes", (req, res) => {
  res.render("scenes");
});

app.get('/archive', (req, res) => {
  const year = req.query.year;
  if (!year) {
    res.render('archive', { artists: null, year: null });
    return;
  }

  const archiveQuery = "SELECT artist_name, performance_date \
    FROM artists \
    INNER JOIN performances ON artists.artist_id = performances.artist_id \
    WHERE strftime('%Y', performance_date) = ?";

  db.all(archiveQuery, [year], (err, rows) => {
    if (err) {
      console.error('Error querying archive data:', err.message);
      res.status(500).send('Database error');
      return;
    }

    res.render('archive', { artists: rows, year: year });
  });
});

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.post('/save_contact', (req, res) =>{
  const contact_query = 'INSERT INTO contacts (contact_name, contact_email, subject, message) \
                     VALUES (?, ?, ?, ?);'
  db.run(contact_query, Object.values(req.body), (err) =>{ // Object.values(req.body) makes array object
    if (err)
    {
      res.render('confirmation', {response: "Database error"})
    }
    else{
      res.render('confirmation', {response: "Message sent succesfully."})
    }
  }) 
});


app.get('/cookie_banner', (req, res) => {
  res.render('cookie_banner');
});

// Serving static files
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});