const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const $http = require('request-promise');
const firebase = require('firebase-admin');

var serviceAccount = require("./firebaseCredit.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://samsam-431d1.firebaseio.com"
});

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

    firebase.database().ref(`/${req.params.id}`).once('value').then( data => {
       res.json(data.val())
    });
});

app.post("/product", (req, res) => {
    firebase.database().ref('products/').push(req.body.product);
});

//use port variable for deployment
app.listen(port, () => console.log('listening on ', port) )