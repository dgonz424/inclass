var inquirer = require ("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "greatbay_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});

function sellItem () {
	inquirer.prompt([

	{
		type: "input",
		name: "item name",
		message: "What do you want to sell?"
	},
	{
		type: "input",
		name: "price",
		message: "How much do you want to sell your item for?"
	},
	{
		type: "input",
		name: "seller",
		message: "Who are you?"
	}

		]).then(function(whatever){
			connection.query("INSERT INTO warehouse")
		});
};

connection.query("SELECT * FROM warehouse", function(err, res) {
  // for (var i = 0; i < res.length; i++) {
  //   console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  // }
  // console.log("\n----------D-A-N-C-E----------------");
  if (true) {
  	inquirer.prompt([

  	{
  		type: "confirm",
  		name: "confirm",
  		message: "There's nothing available to buy. Would you like to sell something?",
  		default: true
  	}

  		]).then(function(returned){
  			if (returned.confirm) {
  				//sell program called here
  			}
  		});
  	}

 });

connection.end();