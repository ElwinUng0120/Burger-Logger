const mysql = require('mysql');
var connection;

// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: '90939065Elwin',
//         database: ''
//     });
// }

// connection.connect();

// use this wrapper to create promise around mysql
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args=[] ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

// at top INIT DB connection
const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "90939065Elwin",
    database: "employee_db"
});

module.exports = db;