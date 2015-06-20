'use strict';

var favorites = {
	adjective: [],
	noun: [],
	verb: []
};

module.exports.isFavorite = function(word, type) {
	var index = favorites[type].indexOf(word);
	if (index == -1) {
		return false;
	} else {
		return true;
	}
};

module.exports.toggleFavorite = function (word, type) {
	console.log("Toggling favorite for word " + word + " of type " + type);
	var index = favorites[type].indexOf(word);
	if (index == -1) {
		console.log(word + " was not in the favorites list, adding it");
		favorites[type].push(word);
		console.log("New favorites list for type " + type + ": ");
		console.log(favorites[type]);
		return {favorited: true};
	} else {
		console.log(word + " was in the favorites list, removing it");
		favorites[type].splice(index, 1);
		console.log("New favorites list for type " + type + ": ");
		console.log(favorites[type]);
		return {favorited: false};
	}
};



