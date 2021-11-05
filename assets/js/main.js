var snails = 0;
var clickValue = 1;
var autoClickers = 0;
var scoreDisplay = document.getElementById("scoreDisplay");
var lastClickDisplay = document.getElementById("lastClick");

function displaySnails() {
	scoreDisplay.innerHTML = snails;
	lastClickDisplay.innerHTML = clickValue;
	console.log(snails);
}

function addSnails() {
	snails += clickValue;
	displaySnails();
}

function addAutoCliker() {
	snails -= 100;
	autoClickers ++;
	let toAdd = autoClickers * clickValue;
	setInterval(function(){ 
		snails += toAdd;
		displaySnails();
	}, 1000);
}

function increaseClickValue() {
	snails -= 100;
	clickValue ++;
}
