// Instructions: Modify the code shown below from the instructor demo to
//	create an app that has two web servers.
// - One that listens on port 7000 and one that listens on port 7500.
// - The one listening on port 7000 will always tell the user something 
//	 good about themselves.
// - The one listening on 7500 will always tell the user something bad 
//   about themselves.
// - Make sure you create a Github repo and commit this code!
// ** Bonus **
// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

// ** PSEUDOCODE YOUR MODIFICATIONS BEFORE HAMMERING AWAY AT THE KEYBOARD **

// CODE shown in 01-FirstServer-Instructor-Demo ............................

// Require/import the HTTP module
var http = require("http");

// Define a port to listen to
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user 
  // 	visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when the program
  //	starts listening on the assigned PORT
  console.log("Server listening on: http://localhost:%s", PORT);

});