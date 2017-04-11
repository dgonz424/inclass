// Instructions: Build a Node application called bank.js which takes in bank transactions via the command line.
//
// The transactions possible are:
// - total - this should tally up all of the money in the bank balance and display it for the user.
// - deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)
// - withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)
// - lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
// For all deposits, withdrawals, or lotto purchases the transaction should be registered in the bank.txt file.
// ** HINT ** Reference png images in this folder to see how it should operate.

// ** HINT ** Consider making a series of if-then or switch-case statements to identify the "type" of transaction
//              and the "amount" involved (if relevant).
//
// *** Bonus *** If you finish early, consider finding creative ways to expand the functionality.
//  Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to
//      withdraw more than they hold, etc.

// As always, we grab the fs package to handle read/write
var fs = require("fs");

// We then store the textfile filename given to us from the command line
var action = process.argv[2];

var amount = process.argv[3];

function deposit () {

	fs.appendFile(textFile, "Hello World!", function(err) {

    // If an error was experienced we say it.
    if (err) {
        console.log(err);
    }

    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
        console.log("Content Added!");
    }

});

	function withdraw () {

	fs.appendFile(textFile, "Hello World!", function(err) {

    // If an error was experienced we say it.
    if (err) {
        console.log(err);
    }

    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
        console.log("Content Added!");
    }

});

function total () {

	fs.readFile("bank.txt", "utf8", function(error, data) {

		var result = 0;

		for (var i = 0; i < result.length; i++) {
			result[i]
		}

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});