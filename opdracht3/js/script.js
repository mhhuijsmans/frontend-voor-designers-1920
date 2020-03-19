var url = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
var flickity;

var request = new XMLHttpRequest();
request.open('get', url);
request.responseType = 'json';
request.send();

request.addEventListener("load", function(){
	var data = request.response;
	console.log(data);

	// getting all the genres from the data
	var genreSet = new Set();
	data.map(function(item) {
		var genres = item.genres;
		for (i = 0; i < genres.length; i++) {
			genreSet.add(genres[i]);
		}
	})

	var genreArray = Array.from(genreSet).sort();
	genreArray.unshift("All", "Favorites");
	createFilters(genreArray);
	createMovies(data);

	flickity = new Flickity( '.movie-list', {
		wrapAround: true,
		cellAlign: 'center',
		prevNextButtons: false,
		pageDots: false
	});
});

function createFilters(data) {
	var ul = document.querySelector('.genre-list');

	for (i = 0; i < data.length; i++) {
		var li = document.createElement('li');
		li.textContent = data[i];
		li.classList.add('genre-item');
		if (i == 0) {
			li.classList.add('is-selected');
		}
		ul.appendChild(li);
	}
}

function createMovies(data) {
	var ul = document.querySelector('.movie-list')

	for (i = 0; i < data.length; i++) {
		var li = document.createElement('li');
		li.classList.add('movie-item');

		var img = document.createElement('img');
		img.classList.add('movie-visual');
		img.src = data[i].cover;

		var divData = document.createElement('div');
		divData.classList.add('movie-data');

		var spanTitle = document.createElement('span');
		spanTitle.classList.add('movie-title');
		spanTitle.textContent = data[i].title;

		var divInfo = document.createElement('div');
		divInfo.classList.add('movie-info');

		var date = new Date(data[i].release_date);
		var spanYear = document.createElement('span');
		spanYear.classList.add('movie-year');
		spanYear.textContent = date.getFullYear();

		var spanGenres = document.createElement('span');
		spanGenres.classList.add('movie-genres');
		spanGenres.textContent = data[i].genres.join(' / ');

		var spanTime = document.createElement('span');
		spanTime.classList.add('movie-time');
		spanTime.textContent = "2hr13mins";

		var divButtons = document.createElement('div');
		divButtons.classList.add('buttons');

		var buttonTrailer = document.createElement('button');
		buttonTrailer.classList.add('movie-trailer');
		buttonTrailer.textContent = "Trailer";

		var buttonDetails = document.createElement('button');
		buttonDetails.classList.add('movie-details');
		buttonDetails.textContent = "Details";

		divButtons.appendChild(buttonTrailer);
		divButtons.appendChild(buttonDetails);
		divInfo.appendChild(spanYear);
		divInfo.appendChild(spanGenres);
		divInfo.appendChild(spanTime);
		divData.appendChild(spanTitle);
		divData.appendChild(divInfo);
		divData.appendChild(divButtons);
		li.appendChild(img);
		li.appendChild(divData);
		ul.appendChild(li);
	}
}