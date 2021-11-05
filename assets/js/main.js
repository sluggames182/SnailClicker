var snails = 0;
var clickValue = 1;
var autoClickers = 0;
var scoreDisplay = document.getElementById("scoreDisplay");
var lastClickDisplay = document.getElementById("lastClick");
var buyHowMany = 1;

function displaySnails() {
	scoreDisplay.innerHTML = snails + " snails";
	lastClickDisplay.innerHTML = clickValue + " snails per click";
	console.log(snails);
}

function addSnails() {
	snails += clickValue;
	displaySnails();
}

function addAutoCliker() {
	let toTake = buyHowMany * 100;
	snails -= toTake;
	autoClickers += buyHowMany;
	let toAdd = autoClickers * clickValue;
	displaySnails()
	setInterval(function(){ 
		snails += toAdd;
		displaySnails();
	}, 1000);
}

function increaseClickValue() {
	let toTake = buyHowMany * 100;
	snails -= toTake;
	clickValue += buyHowMany;
	displaySnails()
}
