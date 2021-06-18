var mysql = require('mysql');

// function Connection() {
// var mysqlHost = process.env.MYSQL_HOST || 'localhost';
// var mysqlPort = process.env.MYSQL_PORT || '3306';
// var mysqlUser = process.env.MYSQL_USER || 'root';
// var mysqlPass = process.env.MYSQL_PASS || 'root';
// var mysqlDB = process.env.MYSQL_DB || 'bank_db';

// var connectionOptions = {
//     host: mysqlHost,
//     port: mysqlPort,
//     user: mysqlUser,
//     password: mysqlPass,
//     database: mysqlDB
// };

// var connection = mysql.createConnection(connectionOptions);
// connection.connect();

// return connection;

// }

function Data(callback, data) {

    var mysqlHost = process.env.MYSQL_HOST || 'localhost';
    var mysqlPort = process.env.MYSQL_PORT || '3306';
    var mysqlUser = process.env.MYSQL_USER || 'root';
    var mysqlPass = process.env.MYSQL_PASS || 'root';
    var mysqlDB = process.env.MYSQL_DB || 'bank_db';

    var connectionOptions = {
        host: mysqlHost,
        port: mysqlPort,
        user: mysqlUser,
        password: mysqlPass,
        database: mysqlDB
    };

    var connection = mysql.createConnection(connectionOptions);
    connection.connect();

    if (data[0] == "INSERT") {
        connection.query(data[1], [data[2]], function (err, rows, fields) {
            if (err) 
            {
                console.log(err);
                return callback(err, null);
            }
            console.log(data[1])
            return callback(null, rows);
        })

        connection.end();
    } 
    else 
    {   
        connection.query(data[1], function (err, result, fields) {

            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        })

        connection.end();
    }

}


function Extrait(data, callback) {

    Data(function (err, rows) {
        if (! err) 
        {
            callback(null, rows);

        } 
        else 
        {
            callback(true, err);
        }
    }, data);
}

module.exports = {
    Extrait,
    Data
};
