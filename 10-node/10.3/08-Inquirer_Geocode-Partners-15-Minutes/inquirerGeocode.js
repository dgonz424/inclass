// Instructions:
//     Working in pairs, convert the geocoding code below so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
//     Make sure your new code provides the exact same output as it did with process.argv.
//     HINT: Don't forget to create your package.json file and save the correct packages to it.
//     HINT: You should not need to change that much code.
//     BONUS: If you finish early, start on the extra challenge (10-ZombieChallenge).
// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder", "inquirer");

// Create an empty string for holding the address
var address = "";

// Capture all the words in the address (again ignoring the first two Node arguments)
for (var i = 2; i < nodeArgs.length; i++) {

  // Build a string with the address.
  address = address + "" + nodeArgs[i];
  console.log(address);

}


// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data) {

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
});



// Prompt the user to provide location information.
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },

  // Here we create a basic password-protected text prompt.
  {
    type: "password",
    message: "Set your password",
    name: "password"
  },

  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "Who is your President?",
    choices: ["Donald", "Trump", "Not Hillary"],
    name: "pokemon"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(user) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome " + user.name);
    console.log("That's right motherfucker! 😂");
    console.log("");
    console.log("==============================================");

  // If the user does not confirm, then a message is provided and the program quits.
  }

  else {

    console.log("");
    console.log("");
    console.log("That's okay " + user.name + ", come again when you are more sure.");
    console.log("");
    console.log("");

  }

});
