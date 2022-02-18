var snails = 0;
var clickValue = 1;
var autoClickers = 0;
var superSnails = 0;
var scoreDisplay = document.getElementById("scoreDisplay");
var lastClickDisplay = document.getElementById("lastClick");
var alertDisplay = document.getElementById("alerts");
var buyHowMany = 1;

function alertNotEnoughSnails() {
	alertDisplay.innerHTML = "Not Enough Snails";
}

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
	if (snails < toTake) {
		alertNotEnoughSnails();
	}
	
	else {
		snails -= toTake;
		autoClickers += buyHowMany;
		displaySnails()
		setInterval(function(){ 
			snails += toAdd;
			displaySnails();
		}, 1000);
	}
	
	let toAdd = autoClickers * clickValue;
}

function increaseClickValue() {
	let toTake = buyHowMany * 100;
	if (snails < toTake) {
		alertNotEnoughSnails();
	}
	
	else {
		snails -= toTake;
		clickValue += buyHowMany;
		displaySnails()
	}
}

function addSuperSnail() {
	let toTake = buyHowMany * 1000;
	if (snails < toTake) {
		alertNotEnoughSnails();
	}
	
	else {
		snails -= toTake;
		superSnails += buyHowMany;
		displaySnails()
		setInterval(function(){ 
			snails += toAdd;
			displaySnails();
		}, 100);
	}
	
	let toAdd = superSnails * clickValue;
}
