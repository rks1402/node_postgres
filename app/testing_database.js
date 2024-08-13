const {Pool,Client} = require('pg');

//const connectionString = 'postgressql://username:password@localhost:5433/databasename';
const connectionString = 'postgressql://postgres:root@localhost:5433/contactcustomer';

const client = new Client({
    connectionString: connectionString
});

// client.connect();

// client.query('Select * from form_submissions', (err, res) => {
//     console.log(err, res);
//     client.end();
// });


const query = "INSERT into form_submissions (first_name, last_name, phone_number, email, moving_date, moving_from, moving_to, additional_queries) VALUES ('Deven', 'Jain', '9876334234', 'deven@example.com', TO_DATE('14-10-2024', 'DD-MM-YYYY'), 'Bhiwani', 'Bangalore', 'Would like to know about insurance options.')";
client.connect();
client.query(query, (err,res) => {
    console.log(err, res);
    client.end();
});



