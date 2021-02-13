const fs = require("fs");
const _ = require("lodash");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
//listen for requests.
app.listen(5206);

//routings
app.get("/", (req, res) => {
    const articles = [
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
    ];
    res.render("index", { title: "Home",articles });
});
app.get("/about", (req, res) => {
    res.render("about",{title:'About'});
});
app.get("/articles", (req, res) => {
    const articles = [
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
        {'name':'Covid -19 Effects','description':"All the effects of Covid-19 to people's life.",},
    ];
    res.render("articles",{title:'Articles', articles});
});
app.get("/add-article", (req, res) => {
    res.render("add-article",{title:'Add Article'});
});
//wildcard/404 redirect
app.use((req, res) => {
    res.status(404).render("404",{title:'404 Not Found'});
});
