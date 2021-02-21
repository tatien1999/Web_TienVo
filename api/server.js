// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
//const config = require('./DB.js');
const personsRoute = require('./persons.route');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/reactcrud').then(() => console.log("conected to mongodb...")).catch(err => console.log("could not connect to mongDB...", err));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/persons', personsRoute);


app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});