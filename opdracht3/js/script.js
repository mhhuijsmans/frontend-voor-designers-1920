var url = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var request = new XMLHttpRequest();
request.open('get', url);
request.responseType = 'json';
request.send();

request.addEventListener("load", function(){
	var data = request.response;
	console.log(data);
});