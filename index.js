const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.get("/", (req,res) => { 

	res.render("index");

});


app.get("/clientes", (req,res) => {
    res.render("clientes");
});


app.listen(4000, ()=> {
    console.log("conectado na porta 4000");
})
