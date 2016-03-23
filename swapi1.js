$(document).ready(function() {

var StarWars = {};

StarWars.getPerson = function (id, cb) {
	$.get('https://www.swapi.co/api/people/' + id, function(obj) {
		cb(obj)
	}); 
};

StarWars.getPeople = function (id, cb) {
	$.get('https://www.swapi.co/api/people/?page=' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getFilm = function (id, cb) {
	$.get('https://www.swapi.co/api/films/' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getFilms = function (id, cb) {
	$.get('https://www.swapi.co/api/films/?page=' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getPlanet = function (id, cb) {
	$.get('https://www.swapi.co/api/planets/' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getPlanets = function (id, cb) {
	$.get('https://www.swapi.co/api/planets/?page=' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getSpecies = function (id, cb) {
	$.get('https://www.swapi.co/api/species/' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getAllSpecies = function (id, cb) {
	$.get('https://www.swapi.co/api/species/?page=' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getStarship = function (id, cb) {
	$.get('https://www.swapi.co/api/starships/' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getStarships = function (id, cb) {
	$.get('https://www.swapi.co/api/starships/?page=' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getVehicle = function (id, cb) {
	$.get('https://www.swapi.co/api/vehicles/' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getVehicles = function (id, cb) {
	$.get('https://www.swapi.co/api/vehicles/?page=' + id, function(obj) {
		cb(obj)
	});
};

StarWars.getPeople(2, function(obj) {
	console.log(obj)
});


});


// var StarWars = {};

// StarWars.getPerson = function (id, cb) {
// 	$.get('https://www.swapi.co/api/people/' + id, function(obj) {
// 		cb(obj)
// 	});
// }

// StarWars.getPerson(1, function(obj) {
// 	console.log(obj)
// });