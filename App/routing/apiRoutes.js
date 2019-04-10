var path = require("path");
var friendsData = require("../data/friends.js");



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    
    
    });

    app.post("/api/friends", function (req, res) {
        var newFriendsInfo = req.body;
        var userResponse = newFriendsInfo.scores;
        console.log(userResponse)
        console.log(newFriendsInfo)
    
        var matchName = "";
        var matchImage = "";
        var totalDifference = Infinity;
        
        
    
    for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;
    
            for (var j = 0; j < userResponse.length; j++) {
                difference += Math.abs(parseInt(userResponse[j]) - parseInt(friendsData[i].scores[j]));
            }
             if (difference < totalDifference){
                 totalDifference = difference;
               console.log(difference)
                 matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;        
            }
            
        }
    
        friendsData.push(newFriendsInfo)
            res.json({status: "OK", matchName: matchName, matchImage: matchImage});
    
    });

    
};

