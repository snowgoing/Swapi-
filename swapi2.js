

	var swapi = "https://www.swapi.co/api/";

	var StarWars = {};

StarWars.getPerson = function (id) {
	$.get(swapi + 'people/' + id, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getPeople = function (page) {
	$.get(swapi + 'people/?pages=' + page, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getFilm = function (id) {
	$.get(swapi + 'films/' + id, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getFilms = function (page) {
	$.get(swapi + 'films/?pages=' + page, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getPlanet = function (id) {
	$.get(swapi + 'planets/' + id, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getPlanets = function (page) {
	$.get(swapi + 'planets/?pages=' + page, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getSpecies = function (id) {
	$.get(swapi + 'species/' + id, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getAllSpecies = function (page) {
	$.get(swapi + 'species/?pages=' + page, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getStarship = function (id) {
	$.get(swapi + 'starships/' + id, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getStarships = function (page) {
	$.get(swapi + 'starships/?pages=' + page, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getVehicle = function (id) {
	$.get(swapi + 'vehicles/' + id, function(obj) {
		console.log(obj)
	}); 
};

StarWars.getVehicles = function (page) {
	$.get(swapi + 'vehicles/?pages=' + page, function(obj) {
		console.log(obj)
	}); 
};





