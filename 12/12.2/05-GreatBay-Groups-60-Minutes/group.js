var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "playlist_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});
connection.query("SELECT * FROM songs", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
  console.log("\n----------D-A-N-C-E----------------");
});
connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
    console.log("\n---------C-L-A-S-S-I-C--------------");
});
var genre = "Classic Rock"; // Say WHAT?  This is so weird...
connection.query("SELECT * FROM songs WHERE genre = ?", [genre], function(err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
});
connection.end();