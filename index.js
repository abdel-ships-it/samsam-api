const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const $http = require('request-promise');

// middleware
var port = process.env.PORT || 8080;
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(200);
})

app.get("/product/:id", (req, res) => {
    res.json({
        price: 500,
        image: 'someimage',
        title: "rains shirt"
    });
});

app.post("/checkout", (req, res) => {
    
});

//use port variable for deployment
app.listen(port, () => console.log('listening on ', port) )