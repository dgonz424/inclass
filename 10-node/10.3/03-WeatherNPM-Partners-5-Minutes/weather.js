// Using the weather-js External Node Package, find the weather for `Anchorage, AK` and display it in the terminal
// ** HINT ** External Node Package information can be found on npmjs.com
// ** HINT ** Don't forget to install the package on your computer before trying to run the program
var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'Anchorage, AK', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
});