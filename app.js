const fs = require('fs');
const _ = require('lodash');
const express = require('express');

const app = express();

//listen for requests.
app.listen(5206);

//routing
app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
})
app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
})
//redirects
app.get('/home',(req,res)=>{
    res.redirect('/');
})
app.get('/about-old',(req,res)=>{
    res.redirect('/about')
})

//wildcard/404

app.use((req,res)=>{
    console.log(__dirname);
    res.sendFile('./views/404.html', {root:__dirname})
})
