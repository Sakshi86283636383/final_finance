const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const path = require("path");
const Contact = require("./models/registers");
require("./db/conn"); // Ensure the connection file is executed

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: false }));

// Setup Handlebars as the template engine
app.engine("hbs", engine({ extname: "hbs", defaultLayout: false }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates"));

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "../assets")));

// Route to render the form
app.get("/", (req, res) => {
  res.render("index-2");
});
app.get("/index-2.html", (req, res) => {
  res.render("index-2");
});
app.get("/about.html", (req, res) => {
  res.render("about");
});
app.get("/read_more1.html", (req, res) => {
  res.render("read_more1");
});
app.get("/read_more2.html", (req, res) => {
  res.render("read_more2");
});
app.get("/read_more3.html", (req, res) => {
  res.render("read_more3");
});
app.get("/services.html", (req, res) => {
  res.render("services");
});

// Route to handle form submission
app.post("/sub", async (req, res) => {
  const { name, email, phone, business } = req.body;

  const newContact = new Contact({
    name,
    email,
    phone,
    business,
  });

  try {
    await newContact.save();
    res.json({ successMessage: "yahi message script ka code me jaega." });
    // alert("hello");
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "Error saving data: " + error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
