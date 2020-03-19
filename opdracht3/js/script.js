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
	createFilters(genreArray, data);
	createMovies(data);
	createCarousel(data);

	var hamburger = document.querySelector('.hamburger');
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('is-active');
		flickity.reposition();
	});

	var videoBox = document.querySelector('.lightbox-video');
	var video = document.querySelector('.lightbox-video video');
	var trailerBtn = document.querySelector('.btn-trailer');
	trailerBtn.addEventListener('click', function() {
		videoBox.classList.add('is-active');
		video.play();
	});

	var details = document.querySelector('.movie-details');

	var closeLightbox = document.querySelectorAll('.js-close-lightbox');
	for (i = 0; i < closeLightbox.length; i++) {
		closeLightbox[i].addEventListener('click', function(e) {
			var lightbox = e.target.closest('.lightbox')
			lightbox.classList.remove('is-active');
			if (lightbox.classList.contains('lightbox-video')) {
				video.pause();
			}
		});
	}
});

function createFilters(filters, data) {
	var ul = document.querySelector('.genre-list');

	for (i = 0; i < filters.length; i++) {
		var li = document.createElement('li');
		var span = document.createElement('span');
		span.textContent = filters[i];
		li.classList.add('genre-item');
		if (i == 0) {
			li.classList.add('is-selected');
		}
		span.addEventListener('click', function(e) {
			var filter = e.target.closest('.genre-item').textContent;
			filterMovies(filter, data);
		})
		li.appendChild(span);
		ul.appendChild(li);
	}
}

function createMovies(data) {
	var ul = document.querySelector('.movie-list')

	for (i = 0; i < data.length; i++) {
		var li = document.createElement('li');
		li.classList.add('movie-item');
		li.classList.add('filter-active');
		li.setAttribute('data-id', i);
		li.setAttribute('data-genres', data[i].genres);

		var img = document.createElement('img');
		img.classList.add('movie-visual');
		img.src = data[i].cover;

		li.appendChild(img);
		ul.appendChild(li);
	}
}

function createCarousel(data) {
	flickity = new Flickity( '.movie-list', {
		// wrapAround: true,
		cellAlign: 'center',
		prevNextButtons: false,
		pageDots: false,
		imagesLoaded: true,
		cellSelector: '.filter-active',
		on: {
			ready: function() {
				editMovieInfo(data, getCurrentMovieID());
			},
			change: function() {
				editMovieInfo(data, getCurrentMovieID());
				flickity.reposition();
			}
		}
	});
}

function filterMovies(filter, data) {
	var movies = document.querySelectorAll('.movie-item');

	for (i = 0; i < movies.length; i++) {
		movies[i].classList.remove('filter-active');

		if (filter == 'All') {
			movies[i].classList.add('filter-active');
		}
		//todo: favorites
		else if (filter == 'Favorites') {
			movies[i].classList.add('filter-active');
		}
		else {
			if (movies[i].getAttribute('data-genres').includes(filter)) {
				movies[i].classList.add('filter-active');
			}
		}
	}

	flickity.destroy();
	createCarousel(data);
	flickity.reposition();
}

function editMovieInfo(data, i) {

	var title = document.querySelector('.movie-title');
	var plot = document.querySelector('.movie-simple-plot');
	var year = document.querySelector('.movie-year');
	var genres = document.querySelector('.movie-genres');
	var time = document.querySelector('.movie-time');
	var video = document.querySelector('.lightbox-video');

	title.textContent = data[i].title;
	plot.textContent = data[i].simple_plot;
	var date = new Date(data[i].release_date);
	year.textContent = date.getFullYear();
	genres.textContent = data[i].genres.join(' / ');
	time.textContent = "2hr13mins";
}

function getCurrentMovieID() {
	var currentEl = document.querySelector('.movie-item.is-selected').getAttribute('data-id');

	return currentEl;
}