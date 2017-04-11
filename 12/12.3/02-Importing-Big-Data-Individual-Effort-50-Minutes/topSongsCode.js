// Instructions: Now that we have learned how to import big collections of data into a server, it is time to put this
//               new knowledge to the test by importing all of the data contained within TopSongs.csv into our database.

// HINT: Remember, bigger data sets require more time to import properly, so be patient
// HINT: If you feel that the import process is taking far too long, feel free to use Top1000Songs.csv instead.
//       We would highly recommend working with the bigger data set if you can, however.
// HINT: Take the downtime you have been given to start on the next part of the activity

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "topsongs_db"
});
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected");
// });


//  NODE    NODE    NODE    NODE    NODE    NODE    NODE    NODE    NODE    NODE    NODE    NODE    NODE    NODE
// With all of your data successfully imported into the database, begin working on a Node console application
//      which will allow you to collect more specialized pieces of data. For example...
// - A query which returns all data for songs sung by a specific artist
    var userartist = "the Beatles";
    var query = "SELECT position, song, year FROM top5000 WHERE ?";
    connection.query(query, { artist: userartist }, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
      }
    });
// - A query which returns all artists who appear within the top 5000 more than once
  var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
  });
// - A query which returns all data contained within a specific range
var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
var startPosition = "";
var endPosition = "";
    connection.query(query, [startPosition, endPosition], function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Artist: " + res[i].artist
          + " || Year: " + res[i].year);
      }
    });
// - A query which searches for a specific song in the top 5000 and returns the data for it
connection.end();
// HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish.
// Feel free to look at MySQL's documentation to find some of them.