'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var getRandomWord = require('./lib/getRandomWord');
var Adjective = require('./lib/adjective');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var adjective = new Adjective();

var Verb = function() {
  this.sleeping = true;
  this.skiing = true;
  this.flopped = true;
  this.waiting = true;
  this.plotting = true;
  this.burping = true;
  this.sneezing = true;
  this.flying = true;
  this.snoozing = true;
  this.dancing = true;
};
var verb = new Verb();

var Noun = function() {
  this.ninjas = true;
  this.cowboys = true;
  this.bears = true;
  this.beats = true;
  this.alligators = true;
  this.hamsters = true;
  this.otters = true;
  this.helicopters = true;
  this.unicorns = true;
  this.rhymes = true;
};
var noun = new Noun();

function postWord(word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = "we already have your awesome word: ";
  } else {
    wordObject[word] = true;
    msg = "we saved the cool world: ";
  }
  console.log(wordObject);
  return {message: msg, confirm: word};
}


app.post('/adjective', function(req, res) {
  res.json(postWord(req.body.word, adjective));
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

// app.get('/', function(req, res) {
//   res.send('hello, universe');
// });
