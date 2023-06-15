const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_university'
})

connection.query('SELECT * FROM students;', (err, result) => {
    if (err) {
        throw err;
    }
    console.log(result);
})