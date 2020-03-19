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
	createCarousel(data);

	flickity = new Flickity( '.movie-list', {
		wrapAround: true,
		cellAlign: 'center',
		prevNextButtons: false,
		pageDots: false,
		imagesLoaded: true,
		on: {
			ready: function() {
				editMovieInfo(data, 0);
			}
		}
	});

	flickity.on('change', function(i) {
		flickity.reposition();
		editMovieInfo(data, i)
	});

	var hamburger = document.querySelector('.hamburger');
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('is-active');
		flickity.reposition();
	});
});

function createFilters(data) {
	var ul = document.querySelector('.genre-list');

	for (i = 0; i < data.length; i++) {
		var li = document.createElement('li');
		var span = document.createElement('span');
		span.textContent = data[i];
		li.classList.add('genre-item');
		if (i == 0) {
			li.classList.add('is-selected');
		}
		li.appendChild(span);
		ul.appendChild(li);
	}
}

function createCarousel(data) {
	var ul = document.querySelector('.movie-list')

	for (i = 0; i < data.length; i++) {
		var li = document.createElement('li');
		li.classList.add('movie-item');

		var img = document.createElement('img');
		img.classList.add('movie-visual');
		img.src = data[i].cover;

		li.appendChild(img);
		ul.appendChild(li);
	}
}

function editMovieInfo(data, i) {
	var title = document.querySelector('.movie-title');
	var year = document.querySelector('.movie-year');
	var genres = document.querySelector('.movie-genres');
	var time = document.querySelector('.movie-time');
	var trailer = document.querySelector('.movie-trailer');
	var details = document.querySelector('.movie-details');

	title.textContent = data[i].title;
	var date = new Date(data[i].release_date);
	year.textContent = date.getFullYear();
	genres.textContent = data[i].genres.join(' / ');
	time.textContent = "2hr13mins";
}