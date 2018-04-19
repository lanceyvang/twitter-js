const express = require('express');
const chalk = require('chalk');
const twitterApp = express(); //create an instance of an express application

twitterApp.use((req, res, next) => {
    // console.log('the middleware works!');
    res.send('we sent something');
    next();
});


twitterApp.get('/cat',(req, res) => res.send('sent you twitterApp stuff! we changed something!'))












twitterApp.listen(3000, () => console.log(chalk.blue('twitterApp is working!')));