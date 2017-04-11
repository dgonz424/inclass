// Instructions:

// Make two objects:
// A dogs object with three keys...
// -  First key called "raining" with a value of true
// -  Second key called "noise" with a value of "Woof!"
// -  Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

var dogs = { 
    raining : true, 
    noise : "Woof!",
    makeNoise : function () {console.log(dogs.noise)}; 
};

// A cats object with three keys...
// -  First key called "raining" with a value of false
// -  Second key called "noise" with a value of "Meow!"
// -  Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

var cats = { 
    raining : false, 
    noise : "Meow!",
    makeNoise : console.log(noise) 
};

// Make the dog bark

console.log(dogs.makeNoise);

// Make the cat meow

console.log(cats.makeNoise);

// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints
//          "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.

// BONUS: Look to see if you can find any means to simplify your code further and further