// James Black
// SDI 1303
// Project 3


// json
var artistInfo = {
    "artist": [
        { artistFirstName: "Caleb",
          artistLastName: "Hart",
          artistBudget: 1000.00,
          artistCostPerSong: 350.00
        }
    ],    
};

var objNew = artistInfo;
for (var key in objNew.artist) {
    console.log("Artist: " + objNew.artist[key].artistFirstName);
};

// My Object
var info = {
    "name"       : "Caleb Hart",
    "budget"     : 1000.00,
    "costPerSong": 350.00,
    "totalSongs"  : function(){ // Method: Accessor (Getter)
        var totalSongs = info.budget / info.costPerSong;
        return totalSongs;
    }, // end totalSongs method;
    "setBudget": function(newBudget){ // Method: Mutator (Setter)
        info.budget = newBudget;
    }
    }; // end info object
    
console.log("The totalsongs with this budget is: " + info.totalSongs());

var newBudget = info;

info.setBudget(1500.00);

console.log("The new number of songs with this new budget is: " + info.totalSongs());

// My Variables
var artist = "calebhart";
var pricePerSong = 350.00;
var budget = 1000.00;
var work = "money";


// My Outputs
console.log("the name of the artist is: " + artist);
console.log("It cost " + pricePerSong + " Dollars per song.");
console.log("Artist budget is " + budget + " Dollars.");
console.log("Caleb will record a new song if the " + work + " Is Rite.");

// My Conditionals
if (artist === artist) {
    // what happens if true
    if (pricePerSong <= 350.00) {
    pricePerSong = pricePerSong + 0;
    console.log("If Caleb has " + 350.00 + " \dollars," + "he will record a new song.");
    } else {
        console.log("caleb is going to work on time.");
    }
} else {
    console.log("This is what happens if pricePerSong is false.");
} 

// function
var totalsongs = function (budget,pricePerSong) {
    // this is the total amount of songs per budget.
    totalsongs = budget/pricePerSong;

    return totalsongs;
};

var test = totalsongs(1000,350);
console.log(test);


// My while loop
var songs = 2;

while (songs > 0) {
 
    console.log(songs + " New songs being recorded,");
    console.log("Caleb just recorded new songs with his budget,");
    
    songs = songs - 1;
    
    if (songs > 0) {
        //True
        console.log(songs + " new song is being recorded.");
    } else {
        console.log(" No new songs recorded.")
    }
}

// My Boolean 
var Caleb = true, recording = false, work = false;

if ((Caleb && recording) || work) {
        console.log("Caleb is true");
    } else {
        console.log("Caleb is false");
    }
    
console.log("Caleb is " + ((Caleb && recording) || work));