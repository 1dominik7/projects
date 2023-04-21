var express = require('express')
var mysql = require('mysql2')
var app = express()
var cors = require('cors')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'florek'
});

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected')
    }
})

app.use(cors())