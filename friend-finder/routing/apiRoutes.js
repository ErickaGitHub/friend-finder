
/////// LOAD DATA ///////

var surveyData = require("../data/friends");

////////// ROUTING /////////
/////remember linking module exports in the friends.js/////

module.exports = function (app) {

////GET////////
app.get("/api/friends", function (req, res) { 
    res.json(surveyData);
});

//////POST//////
app.post("/api/surveyData", function (req, res) {

console.log(req.body);

// Set up a variable for the users' score. //

let userResults = req.body;
let userScores = req.body.scores;

// console.log(typeof userResults)

// Determining  user 's compatiblty friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

// Set up a variable for the users' score. //
freindsNumScores = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10"];


// pass a function to map methods //
const map1 = freindsNumScores.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


// Need to add for loop w/ for each //
//then push array or join // 

// need to add totalDifference and compare // 

// Example:

// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5


// need to add a type of math function // 
// need to send back to the survey data // 


    surveyData.push(req.body)
    //     res.json(match);
    //     res.json();

});


app.post("/api/clear", function () {
    // Empty out the arrays of data
    surveyData = [];

    console.log(surveyData);
});
};