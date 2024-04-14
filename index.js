const express = require('express');
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5000;

app.set("View engine", "ejs");
// Placement of static files:
app.use(express.static("public"));

app.get("/", (req,res) =>{
res.render("index", {})
})


app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT} `)
})