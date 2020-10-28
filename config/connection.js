const mysql = require('mysql');
var db;

if(process.env.JAWSDB_URL){
    db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    db = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '90939065Elwin',
        database: 'burgers_db'
    });
}

db.connect();

module.exports = db;