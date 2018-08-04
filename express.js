var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var TablesArray = [];
var ReservationArray = [];

app.get("/api/TablesArray", function(req, res) {
    return res.json(TablesArray);
});

app.get("/api/ReservationArray", function(req, res) {
    return res.json(ReservationArray);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });