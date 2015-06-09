var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bandNames = [
"wicked",
"princess",
"neverly"
];

app.get("/", function(req, res) {
   var randomIndex = Math.floor(Math.random()*bandNames.length);
 res.send(bandNames[randomIndex]);
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});



// JSON

var adjectives = [
"beautiful",
"sick",
"green",
"slippery",
"happy"
];

app.get("/adjectives", function(req, res) {
 var randomIndex = Math.floor(Math.random()*adjectives.length);
 res.json({ word: adjectives[randomIndex]});
});

