// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var surveyData = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = surveyData;



// Determine the user 's most compatible friend using the following as a guide:



// Convert each user 's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user 's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


// Example:


//   User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5



// Remember to use the absolute value of the differences.Put another way: no negative solutions!Your app should calculate both 5 - 3 and 3 - 5 as 2, and so on.
// The closest match will be the user with the least amount of difference.