const fs = require("fs");
const _ = require("lodash");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
//listen for requests.
app.listen(5206);

//routings
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
app.get("/about", (req, res) => {
    res.render("about",{title:'About'});
});
app.get("/articles", (req, res) => {
    res.render("articles",{title:'Articles'});
});
app.get("/add-article", (req, res) => {
    res.render("add-article",{title:'Add Article'});
});
//wildcard/404 redirect
app.use((req, res) => {
    res.status(404).render("404",{title:'404 Not Found'});
});
