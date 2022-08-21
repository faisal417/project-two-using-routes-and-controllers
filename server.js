// require
const express = require('express');
const http = require('http');
const colors = require('colors');
const dotenv = require('dotenv');
const pageRoute = require('./routes/pageRoute')


// environment setup
dotenv.config();
const port = process.env.PORT || 4040;

// init express
const app = express();

//manage data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// static folder
app.use('/public',express.static('public'));

//route
app.use(pageRoute)

//server listen
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`.bgGreen.black);
})