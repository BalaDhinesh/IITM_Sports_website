const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("pages/home");
});

app.get("/SOC", function (req, res) {
  res.render("pages/people/SOC");
});

app.get("/gymkhana", function (req, res) {
  res.render("pages/people/Gymkhana");
});

app.get("/interiit", function (req, res) {
  res.render("pages/records/interiit");
});

app.get("/athletics", function (req, res) {
  res.render("pages/records/interiit-sports/athletics");
});

app.get("/aquatics", function (req, res) {
  res.render("pages/records/interiit-sports/aquatics");
});

app.get("/badminton", function (req, res) {
  res.render("pages/records/interiit-sports/badminton");
});

app.get("/basketball", function (req, res) {
  res.render("pages/records/interiit-sports/basketball");
});

app.get("/chess", function (req, res) {
  res.render("pages/records/interiit-sports/chess");
});

app.get("/cricket", function (req, res) {
  res.render("pages/records/interiit-sports/cricket");
});

app.get("/football", function (req, res) {
  res.render("pages/records/interiit-sports/football");
});

app.get("/hockey", function (req, res) {
  res.render("pages/records/interiit-sports/hockey");
});

app.get("/squash", function (req, res) {
  res.render("pages/records/interiit-sports/squash");
});

app.get("/tennis", function (req, res) {
  res.render("pages/records/interiit-sports/tennis");
});

app.get("/tabletennis", function (req, res) {
  res.render("pages/records/interiit-sports/tabletennis");
});

app.get("/volleyball", function (req, res) {
  res.render("pages/records/interiit-sports/volleyball");
});

app.get("/weightlifting", function (req, res) {
  res.render("pages/records/interiit-sports/weightlifting");
});

app.listen(PORT, function () {
  console.log("Server is running on localhost", PORT);
});
