const express = require('express');
const chalk = require('chalk');
const nunjucks = require("nunjucks");
const twitterApp = express(); 

// Adding Nunjucks Template Engine
const locals = {
    title: "What Universe",
    subtitle: "would you like to live in",
    people: [
        {name: "Gandalf"},
        {name: "Frodo"},
        {name: "Hermione"},
        {name: "Yang"},
        {name: "Augusto"}
    ]
};

// Nunjucks and Express Integration
twitterApp.engine("html", nunjucks.render);
twitterApp.set("view engine", "html");


nunjucks.configure("views", {noCache: true});
nunjucks.render("index.html", locals, function (err, output){
    console.log(output);
})
const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];

twitterApp.use((req, res, next) => {
    res.render('index', locals);
});


twitterApp.get('/cat',(req, res) => res.send('sent you twitterApp stuff! we changed something!'))







twitterApp.listen(3000, () => console.log(chalk.blue('twitterApp is working!')));