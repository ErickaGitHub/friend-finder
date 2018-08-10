// ===============================================================================
// LOAD DATA
// ===============================================================================

var surveyData = require("../data/surveyData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

// ---------------------------------------------------------------------------

app.get("/api/home", function (req, res) {
    res.json(surveyData);
});


// ---------------------------------------------------------------------------

app.post("/api/surveyData", function (req, res) {
    surveyData.push(req.body)
});

// if (surveyData.length < 5) {
//     surveyData.push(req.body);
//     res.json(true);
// } else {
//     surveyData.push(req.body);
//     res.json(false);
// }
// });

app.post("/api/clear", function () {
    // Empty out the arrays of data
    surveyData = [];

    console.log(surveyData);
});
};