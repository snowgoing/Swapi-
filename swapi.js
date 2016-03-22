$(document).ready(function() {

var StarWars = {};

StarWars.getPerson = function (id, cb) {
	$.get('https://www.swapi.co/api/people/' + id, function(obj) {
		cb(obj)
	});
}


});




StarWars.getPerson(1, function(obj) {
	console.log(obj)
});