// Instructions:  Create a Node application that:
// - Reads the best_things_ever.txt file
// - Parses the comma separated elements
// - Console logs each element in the file on separate lines
//
// ** HINT: If you are struggling to figure out how to loop your way through the text, look into the .split() method.
//          This could make your life a whole lot easier.
//
// Your final output should look something like this:
//
// Harley-Davidson
// massage
// meditation
// hot shower
// cheese fondue
// hot coffee with whole milk

// fs is an NPM package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // Loop Through the newly created output array
  for (var i = 0; i < output.length; i++) {

    // Print each element (item) of the array/
    console.log(output[i]);
  }

});

