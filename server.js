/*TREBA SREDITI EDITOVANJE KORISNIKA*/

const { urlencoded } = require('express');
const express = require('express');
const app = express();
const routes = require('./routes');
const session = require("express-session");



const {
    PORT = 3000,
    NODE_ENV = "development",
    SESS_NAME = "sid",
    SESS_SECRET = "discoApp",
    SESS_LIFETIME = "HALF_DAY"
} = process.env;

const IN_PROD = NODE_ENV == "production";

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs');

app.use(session({
    name:SESS_NAME,
    resave:false,
    saveUninitialized:false,
    secret:SESS_SECRET,
    cokkie:{
        maxAge:SESS_LIFETIME,
        sameSite:true,
        secure:IN_PROD
    }
}))

app.use('/',routes);

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})