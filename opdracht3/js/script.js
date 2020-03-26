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
	genreArray.unshift('All', 'Favorites');
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
			var currentFilter = document.querySelector('.genre-item.is-selected');
			currentFilter.classList.remove('is-selected');
			var target = e.target.closest('.genre-item');
			target.classList.add('is-selected');
			var filter = target.textContent;
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
		li.setAttribute('data-fav', 'false');

		var img = document.createElement('img');
		img.classList.add('movie-visual');
		img.src = data[i].cover;

		var play = document.createElement('div');
		play.classList.add('movie-play');

		var playSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		playSvg.setAttribute('viewBox', '0 0 512 512')
		var playPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		playPath1.setAttribute('d', 'M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M357.8,265l-149.3,96c-1.8,1.1-3.8,1.7-5.8,1.7c-1.8,0-3.5-0.4-5.1-1.3c-3.4-1.9-5.6-5.5-5.6-9.4V160c0-3.9,2.1-7.5,5.6-9.4c3.4-1.9,7.6-1.7,10.9,0.4l149.3,96c3,2,4.9,5.3,4.9,9C362.7,259.6,360.8,263,357.8,265z');
		playPath1.classList.add('bg');
		var playPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		playPath2.setAttribute('d', 'M357.8,247l-149.3-96c-3.3-2.1-7.5-2.3-10.9-0.4c-3.5,1.9-5.6,5.5-5.6,9.4v192c0,3.9,2.2,7.5,5.6,9.4c1.6,0.9,3.3,1.3,5.1,1.3c2,0,4-0.6,5.8-1.7l149.3-96c3-2,4.9-5.4,4.9-9C362.7,252.3,360.8,249,357.8,247z');
		playPath2.classList.add('play');
		playSvg.appendChild(playPath1);
		playSvg.appendChild(playPath2);
		play.appendChild(playSvg);

		playSvg.addEventListener('click', function(e) {
			alert('If I had the rights to this movie, I would play it for you... You can watch the trailer though!');
		});

		var fav = document.createElement('div');
		fav.classList.add('movie-fav');

		var favSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		favSvg.setAttribute('viewBox', '0 0 512 453')
		var favPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		favPath.setAttribute('d', 'M202.8,372.16c17.08,14.56,34.66,29.54,53.2,45.65c18.54-16.11,36.11-31.09,53.19-45.65C413.26,283.49,482,224.91,482,147.9c0-31.83-10.6-61.39-29.86-83.24c-19.48-22.1-46.52-34.27-76.14-34.27c-41.13,0-67.72,25.34-82.78,46.59c-13.51,19.07-20.56,38.28-22.96,45.66C268.25,128.82,262.49,133,256,133c-6.49,0-12.25-4.18-14.26-10.35c-2.4-7.38-9.45-26.59-22.96-45.66C203.72,55.73,177.13,30.39,136,30.39c-29.62,0-56.66,12.17-76.14,34.27C40.6,86.51,30,116.07,30,147.9C30,224.91,98.74,283.49,202.8,372.16z');
		favPath.classList.add('heart');
		favSvg.appendChild(favPath);
		fav.appendChild(favSvg);

		favSvg.addEventListener('click', function(e) {
			var target = e.target.closest('.movie-item');
			if (target.getAttribute('data-fav') == 'true') {
				target.setAttribute('data-fav', 'false');
			}
			else {
				target.setAttribute('data-fav', 'true');
			}
		});

		li.append(play);
		li.append(fav);
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
		else if (filter == 'Favorites') {
			if (movies[i].getAttribute('data-fav') == 'true') {
				movies[i].classList.add('filter-active');
			}
		}
		else {
			if (movies[i].getAttribute('data-genres').includes(filter)) {
				movies[i].classList.add('filter-active');
			}
		}
	}

	flickity.destroy();

	var ul = document.querySelector('.movie-list');
	var moviesArray = Array.from(movies).sort(function(a, b) {
		return a.getAttribute('data-id') - b.getAttribute('data-id');
	});

	moviesArray.forEach(function(el) {
		ul.appendChild(el);
	});

	createCarousel(data);
	flickity.reposition();
}

function editMovieInfo(data, i) {
	var title = document.querySelector('.movie-title');
	var plot = document.querySelector('.movie-simple-plot');
	var year = document.querySelector('.movie-year');
	var genres = document.querySelector('.movie-genres');
	var time = document.querySelector('.movie-time');
	var video = document.querySelector('.lightbox-video video');

	var movielist = document.querySelector('.movie-list');
	var info = document.querySelector('.movie-data');

	if (i != null) {
		movielist.classList.remove('is-empty');
		info.classList.remove('is-hidden');
		title.textContent = data[i].title;
		plot.textContent = data[i].simple_plot;
		var date = new Date(data[i].release_date);
		year.textContent = date.getFullYear();
		genres.textContent = data[i].genres.join(' / ');
		time.textContent = "2hr13mins";
		video.src = data[i].trailer;
	}
	else {
		movielist.classList.add('is-empty');
		info.classList.add('is-hidden');
	}
}

function getCurrentMovieID() {
	var currentEl = document.querySelector('.movie-item.is-selected');

	if (currentEl) {
		return currentEl.getAttribute('data-id');
	}
	else {
		return null;
	}
}