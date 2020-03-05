var utils = window.fizzyUIUtils;

var carousel = document.querySelector('.carousel');
var flickity = new Flickity( carousel, {
	cellAlign: 'left',
	wrapAround: true,
	prevNextButtons: false,
	pageDots: false
});

// dynamically making dots
var photos = document.querySelectorAll('.item');

for (i = 0; i < photos.length; i++) {
	var li = document.createElement('li');
	li.className = 'dot dot' + i;

	document.querySelector('.dots').appendChild(li);
}

document.querySelector('.dot').classList.add('is-selected');

// elements
var cellsButtonGroup = document.querySelector('.dots');
var cellsButtons = utils.makeArray(cellsButtonGroup.children);

// update buttons on select
flickity.on( 'select', function() {
	var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
	var selectedButton = cellsButtonGroup.children[ flickity.selectedIndex ];
	previousSelectedButton.classList.remove('is-selected');
	selectedButton.classList.add('is-selected');
});

// cell select
cellsButtonGroup.addEventListener('click', function(event) {
	if (!matchesSelector( event.target, '.dot')) {
		return;
	}
	var index = cellsButtons.indexOf(event.target);
	flickity.select(index);
});

// previous
var previousButton = document.querySelector('.button-previous');
previousButton.addEventListener('click', function() {
	flickity.previous();
});

// next
var nextButton = document.querySelector('.button-next');
nextButton.addEventListener('click', function() {
	flickity.next();
});