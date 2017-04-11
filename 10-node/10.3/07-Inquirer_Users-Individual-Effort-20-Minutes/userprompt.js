// Instructions: Create a basic command line Node application using the inquirer package.
//
// Your application should ask the user any five questions of your choosing.
// - The question set should include at least one:
//      - Basic input,
//      - List,
//      - Checkbox,
//      - Confirm
// - and a Password
// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
//
// HINT: See the inquirer GitHub documentation "examples" page if you need help.
//
//     Remember to get creative with your code!

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "Andrew ... was the only U.S. President who paid off the entire national debt.",
    name: "name"
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
  if (answer === onlyPresident.back) {
      score++;
      console.log("That is correct!");
    }
    else {
      score--;
      console.log("The correct answer is" + onlyPresident.back);
    }

});
