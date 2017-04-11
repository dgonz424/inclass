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
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});
// connection.query("SELECT * FROM topsongs_db", ["Dance"], function(err, res) {
//   for (var i = 0; i < res.length; i++) {
//     console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//   }
//     console.log("\n---------C-L-A-S-S-I-C--------------");
// });