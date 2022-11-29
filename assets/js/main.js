var snails = 0;
var clickValue = 1;
var autoClickers = 0;
var superSnails = 0;
var scoreDisplay = document.getElementById("scoreDisplay");
var lastClickDisplay = document.getElementById("lastClick");
var alertDisplay = document.getElementById("alerts");
var buyHowMany = 1;
var priceMultiplier = 1;

function alertNotEnoughSnails() {
	alertDisplay.innerHTML = "Not Enough Snails";
	alert("Not Enough Snails");
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
	let toTake = buyHowMany * (100 * priceMultiplier);
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
		changePriceMultiplier()
	}
	
	let toAdd = autoClickers * clickValue;
}

function increaseClickValue() {
	let toTake = buyHowMany * (100 * priceMultiplier);
	if (snails < toTake) {
		alertNotEnoughSnails();
	}
	
	else {
		snails -= toTake;
		clickValue += buyHowMany;
		displaySnails()
		changePriceMultiplier()
	}
}

function addSuperSnail() {
	let toTake = buyHowMany * (1000 * priceMultiplier);
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
		changePriceMultiplier()
	}
	
	let toAdd = superSnails * clickValue;
}

function changePriceMultiplier() {
	priceMultiplier = priceMultiplier + 0.01;
	console.log("changed price multiplier");
}
