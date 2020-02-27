var playlist = document.querySelector(".playlist");
var sortable = new Sortable(playlist, {
	ghostClass: 'ghost',
	swapThreshold: 0.30,
    animation: 150,
    delay: 200, // time in milliseconds to define when the sorting should start
	delayOnTouchOnly: true
});

var clamp = document.querySelectorAll(".song > *");

for (i = 0; i < clamp.length; i++) {
    $clamp(clamp[i], {clamp: 2});
}
