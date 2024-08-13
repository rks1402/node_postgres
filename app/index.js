const express = require('express');
const {Pool,Client} = require('pg');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');

app.use(express.static(__dirname));

// Body Parser Middleware for parsing the coming form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form/main.html');
});

//Database connection
//const connectionString = 'postgressql://username:password@localhost:5433/databasename';
const connectionString = 'postgressql://postgres:root@localhost:5433/contactcustomer';

const client = new Client({
    connectionString: connectionString
});

app.post('/form', (req, res) => {
    const {fname, lname, phone, email, date, moving_from, moving_to, additional_queries} = req.body;
    client.connect();
    const query = "INSERT INTO form_submissions (first_name, last_name, phone_number, email, moving_date, moving_from, moving_to, additional_queries) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    client.query(query, [fname, lname, phone, email, date, moving_from, moving_to, additional_queries], (err, res) => {
        console.log(err, res);
        client.end();
    });

    res.sendFile(__dirname + '/form/main.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});