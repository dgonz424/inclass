// Instructions:  Use constructors to create simplistic characters for use within a basic Role Playing Game (RPG)
//  Sample output can be found in the character-screenshot.png image in this folder
// Each character created using your constructor should have the following properties...
// - Name: The character's name --> String
// - Profession: What the character does for a living --> String
// - Gender: The character's gender --> String
// - Age: The character's age --> Integer
// - Strength: Abstraction for how strong the character is --> Integer
// - HitPoints (HP): Abstraction for how much health the character has --> Integer
// - PrintStats: Function which prints all of a character's properties to the screen
function Character (name, profession, gender, age, strength, hitpoints) {
	this.name = name,
	this.profession = profession,
	this.gender = gender,
	this.age = age,
	this.strength = strength,
	this.hitpoints = hitpoints,
	this.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
    "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
    this.strength + "\nHitPoints: " + this.hitpoints);
    console.log("\n-------------\n");
  };
}


var andoo = new Character("Andrew", "Stripper", "Nonconforming", 24, 0, 0);
var me = new Character("Daniel", "Pimp", "Alphamale", 24, 100, 100);
var skirl = new Character("Linda", "doggy", "babyGirl", 5, 1, 1);

andoo.printStats();
me.printStats();
skirl.printStats();
// Once you have created your constructor, create two new characters and print their properties to the screen

// Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// Now that you feel comfortable with your constructor, it is time to start making this character creation
//      system a little more reactive by adding in some more methods...
// Add these methods to your character constructor
// - IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and
//              determining whether they are above or below zero.
// - Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
// - LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

// ** BONUS ** After completing the previous sections and making sure they work, you now have everything you need
//      to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this
//      part of the activity as, by completing the above sections you are well on your way to mastering constructors!