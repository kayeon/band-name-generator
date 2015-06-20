'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var getRandomWord = require('./lib/getRandomWord');
var Adjective = require('./lib/adjective');
var Verb = require('./lib/verb');
var Noun = require('./lib/noun');
var favorites = require('./lib/favorites');

var postWord = require('./lib/postWord');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

app.post('/adjective', function(req, res) {
  res.json(postWord(req.body.word, adjective));
});

app.get('/adjective', function(req, res) {
	var word = getRandomWord(adjective);
	var favorited = favorites.isFavorite(word, 'adjective');
	var response = {
		word: word,
		favorited: favorited
	};
	res.json(response);
});


app.post('/verb', function(req, res) {
  res.json(postWord(req.body.word, verb));
});

app.get('/verb', function(req, res) {
	var word = getRandomWord(verb);
	var favorited = favorites.isFavorite(word, 'verb');
	var response = {
		word: word,
		favorited: favorited
	};
	res.json(response);
});


app.post('/noun', function(req, res) {
  res.json(postWord(req.body.word, noun));
});


app.get('/noun', function(req, res) {
	var word = getRandomWord(noun);
	var favorited = favorites.isFavorite(word, 'noun');
	var response = {
		word: word,
		favorited: favorited
	};
	res.json(response);
});


app.post('/favorite', function(req, res) {
	console.log("Received request to /favorite endpoint:");
	console.log(req.body);
	res.json(favorites.toggleFavorite(req.body.word, req.body.type));
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
