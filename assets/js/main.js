var snails = 0;
var clickValue = 1;
var autoClickers = 0;
var scoreDisplay = document.getElementById("scoreDisplay");

function displaySnails() {
	scoreDisplay.innerHTML = snails;
	console.log(snails)
}

function addSnails() {
	snails += clickValue;
	displaySnails();
}

function addAutoCliker() {
	autoClickers ++;
	let toAdd = autoClickers * clickValue;
	setInterval(function(){ 
		snails += toAdd;
		displaySnails();
	}, 1000);
}

function increaseClickValue() {
	clickValue ++;
}