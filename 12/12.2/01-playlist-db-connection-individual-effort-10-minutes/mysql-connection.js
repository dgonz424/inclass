// Instructions:  Create a database named playlist_db in MySQL Workbench, then create a NODE connection to it using
//                  mysql npm.
// ** Remember, you must create a database before attempting to connect to it. Doing otherwise will return an error.

// BONUS: Using MySQL Workbench, create a table in your database with four columns...
// - Primary Key of "ID" which auto-increments
// - Column called "title"
// - Column called "artist"
// - Column called "genre"

// BONUS X2: Using MySQL Workbench, populate your table with a few rows of dummy data

// BONUS MULTIPLIER: Start looking into how you can use the MySQL package to read data from a MySQL database

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port: 8889,
  database : 'icecream_db'
});
 
connection.connect(function(err) {
  if (err) {
    throw (err) ;
  } else {
  	console.log('Connected')
  }
});