//sortable
var swapOptions = {
	swap: true,
	group: 'swapshared',
	animation: 150
}

var insertOptions = {
	group: 'shared',
	swapThreshold: 0.50,
	invertSwap: true,
	animation: 150,
	onSort: function (evt) {
		moveSpareChild(evt);
	}
}

var pages = document.querySelectorAll('.page');
var containers = document.querySelectorAll('.item-container');
var swapToggle = document.querySelector('.js-swaptoggle');

var pageSortables = [] 
for (i = 0; i < pages.length; i++) {
	pageSortables[i] = new Sortable(pages[i], insertOptions);
}

var containerSortables = []

swapToggle.addEventListener("change", function() {
	if (swapToggle.checked == true) {
		for (i = 0; i < containers.length; i++) {
			containerSortables[i] = new Sortable(containers[i], swapOptions);
		}
	}
	else {
		for (i = 0; i < containers.length; i++) {
			containerSortables[i].destroy();
		}		
	}
});

function getElementIndex(el) {
	return Array.from(el.parentNode.children).indexOf(el);
}

function moveSpareChild(evt) {
	var fromEl = evt.from;
	var toEl = evt.target;
	var fromElChildren = fromEl.querySelectorAll('.item-container');
	var toElChildren = toEl.querySelectorAll('.item-container');
	var fromElCount = fromEl.childElementCount;
	var toElCount = toEl.childElementCount;

	if (fromEl != toEl) {
		if (toElCount >= toEl.dataset.maxphotos) { //if the target page has the maximum amount of photos
			if (getElementIndex(toEl) > getElementIndex(fromEl)) { //if the receiving page has a higher index number than the giving page
				fromEl.appendChild(toElChildren[0]); //select the overflowing page's first item and move it to the page with room
			}
			else if (getElementIndex(toEl) < getElementIndex(fromEl)) { //if the receiving page has a lower index number
				fromEl.insertBefore(toElChildren[toElChildren.length - 1], fromElChildren[0]); //select the overflowing page's last item and move it to the page with room
			}
		}
	}
}

//flickity
var utils = window.fizzyUIUtils;

var carousel = document.querySelector('.grid-container');

var flickityDrag = {
	cellAlign: 'left',
	draggable: true,
	groupCells: true,
	prevNextButtons: false,
	pageDots: false
}

var flickityNoDrag = {
	cellAlign: 'left',
	draggable: false,
	groupCells: true,
	prevNextButtons: false,
	pageDots: false
}

var flickity = new Flickity( carousel, flickityDrag);

// flickity.on( 'dragStart', function( event, pointer ) {
// 	var target = pointer.target;
// 	if (target.classList.contains('photo') || target.classList.contains('item')) {
// 		flickity._pointerCancel(event, event);
// 	}
// });

// dynamically making dots
var photos = document.querySelectorAll('.page');

for (i = 0; i < Math.ceil(photos.length / 2); i++) {
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

//Set empty containers height to equal other containers' height
var emptyContainers = document.querySelectorAll('.page .item-empty');
var nonEmpty = document.querySelector('.page .item:not(.item-empty)');
for (i = 0; i < emptyContainers.length; i++) {
	emptyContainers[i].style.width = nonEmpty.offsetWidth;
	emptyContainers[i].style.height = nonEmpty.offsetHeight;
}

var items = document.querySelectorAll('.item');
//Disable flickity dragging when hovering over items
for (i = 0; i < items.length; i++) {
	items[i].addEventListener('mouseenter', function() {
		flickity.options.draggable = false;
		flickity.updateDraggable();
	})
}

for (i = 0; i < items.length; i++) {
	items[i].addEventListener('mouseleave', function() {
		flickity.options.draggable = true;
		flickity.updateDraggable();
	})
}