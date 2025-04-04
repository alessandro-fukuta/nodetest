const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const database = require("./database/database");
const connection = require("./database/connection");

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

// parse application/json
app.use(bodyParser.json())


const homeController = require("./home/homeController");
app.use("/",homeController);


app.listen(4000, ()=> {
    console.log("conectado na porta 4000");
})
