const express = require("express");
const app = express();

const port = 3000;

// Route 1 - Home
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

// Route 2 - About
app.get("/about", (req, res) => {
    res.send("This is About Page");
});

// Route 3 - Contact
app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});

// Route 4 - Services
app.get("/services", (req, res) => {
    res.send("Our Services Page");
});

// Route 5 - User
app.get("/user", (req, res) => {
    res.send("User Profile Page");
});

// Server start
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});