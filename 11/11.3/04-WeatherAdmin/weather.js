var WeatherAdmin = require("./WeatherAdmin");

var alreadySearched = require("./log.txt");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
var MyAdmin = new WeatherAdmin();

if (loginType === "admin") {

  MyAdmin.getData(alreadySearched);

}

else {

  MyAdmin.newUserSearch(userName, userLocation);

}

// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

var fs = require("fs");
var UserSearch = require("./UserSearch");

var WeatherAdmin = function() {

  this.getData = function() {
    fs.readFile("log.txt", "utf8", function(error, data){

      console.log(data);

    });
  };

  this.newUserSearch = function(name, location) {

    var newUserSearch = new UserSearch(name, location);
    var logTxt = "\nName: " + newUserSearch.name +
    " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;

    fs.appendFile("log.txt", logTxt);

    newUserSearch.getWeather();

  };

};

module.exports = WeatherAdmin;

var weather = require('weather-js');

 
// Options: 
// search:     location name or zipcode 
// degreeType: F or C w
 
weather.find({search: userLocation, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});