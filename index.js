const express = require('express');
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5000;

app.set("View engine", "ejs");
// Placement of static files:
app.use(express.static("public"));

// routs:
app.get("/", (req, res) => {
    res.render("index.ejs", { name: 'Home' })
})

app.get("/views/", (req, res) => {
    res.render("lineup", { name: 'lineup' })
})

app.get("/views/", (req, res) => {
    res.render("musicians", { name: 'musicians' })
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT} `)
})
