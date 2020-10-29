const mysql = require('mysql');

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


// /if(process.env.JAWSDB_URL){
    const db = new Database(process.env.JAWSDB_URL)
// } else {
//     const db = new Database({
//         host: 's54ham9zz83czkff.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         port: 3306,
//         user: 'h2s7o4f7i6ddc3mp',
//         password: 'ucrl2azdf3yr57wb',
//         database: 'w8pyt7g19620m1x3'
//     }); 
// }

module.exports = db;