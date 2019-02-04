let mysql = require('mysql');


let connection = mysql.createConnection({
    host:'localhost',
    user:'student',
    password:'student',
    database: 'todos'
});

connection.connect((err) => {
    if (err) {
        console.log('error in database connection')
    } else {
        console.log('Successful db connection!')
    }
})

module.exports = connection;