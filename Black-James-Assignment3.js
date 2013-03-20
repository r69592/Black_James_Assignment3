// James Black
// SDI 1303
// Project 2
//

// var, function, // json
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