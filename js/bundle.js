(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const myCalculator = require('calc-immo-investment');


document.getElementById("myForm").addEventListener('submit', calculateInvestment);

function calculateInvestment(e)
{

	var inputPrice = document.getElementById('price').value;
	var inputCapital = document.getElementById('capital').value;
	var inputZins = document.getElementById('zins').value;
	var inputTilgung = document.getElementById('tilgungpromonat').value;

	console.log(inputPrice);
	console.log(inputCapital);
	console.log(inputZins);
	console.log(inputTilgung);

	let result = myCalculator.calcImmoInvestment(inputPrice, inputCapital, inputZins, inputTilgung);

	showComprisedResult(result);

	e.preventDefault();	
}

function showComprisedResult(result) {
	document.getElementById('response').innerHTML = `<div class="response">
																										<p> Sie möchten eine Immobilie kaufen/bauen?  Hier ist Ihr Finanzplan: </p>
																										<p> Sie werden	Ihren Kredit im ${result.totalYears}. Jahr abbezahlt haben </p>
																										<p> Insgesamt werden Sie dann ${result.interestTotal} Euro für Zinsen bezahlt haben. </p>
																										<button class="btn btn-primary" id="buttonShowDetails" onclick="showDetails()">
																										Details </button>			
																									</div>` ;
	document.getElementById('response').style.display = 'block';
}


	// let restSchuld = inputPrice - inputCapital;
	// console.log(restSchuld);

	// //let zinsen = restSchuld /100 * inputZins;	

	// let counter = 0;
	// let interestTotal = 0;
	// let detailsOutput = "";
	// let details = {};
	// details.zinsen = [];
	// details.restSchuld = [];
	// details.reineJahresTilgung = [];


	// while(restSchuld > 0)
	// {
	// 	zinsen = restSchuld / 100 * inputZins;
	// 	details.zinsen.push(zinsen);
	// 	interestTotal += zinsen;
	// 	reineJahresTilgung = inputTilgung * 12 - zinsen;
	// 	details.reineJahresTilgung.push(reineJahresTilgung);
	// 	restSchuld = restSchuld - reineJahresTilgung;	
	// 	details.restSchuld.push(restSchuld);	
	// 	counter++;		
	// }

// 	showResults(counter, restSchuld, interestTotal);

	


// function showResults (counter, restSchuld, interestTotal) {	
// 	document.getElementById('response').innerHTML = `<div class="response">
// 																										<p> Sie möchten eine Immobilie kaufen/bauen?  Hier ist Ihr Finanzplan: </p>
// 																										<p> Sie werden	Ihren Kredit im ${counter}. Jahr abbezahlt haben </p>
// 																										<p> Insgesamt werden Sie dann ${interestTotal} Euro für Zinsen bezahlt haben. </p>
// 																										<button class="btn btn-primary" id="buttonShowDetails" onclick="showDetails()">
// 																										 Details </button>			
// 																									 </div>` ;
// 	document.getElementById('response').style.display = 'block';
// 	showDetails()
// }

// function fillDetailsOutput(counter, restSchuld, zinsen, reineJahresTilgung) {


// }


},{"calc-immo-investment":2}],2:[function(require,module,exports){
exports.calcImmoInvestment = function (inputPrice, inputCapital, inputZins, inputTilgung)
{	
	let restSchuld = inputPrice - inputCapital;
	console.log(restSchuld);

	let counter = 0;
	let interestTotal = 0;	
	let details = {};
	details.zinsen = [];
	details.restSchuld = [];
	details.reineJahresTilgung = [];

	while(restSchuld > 0)
	{
		zinsen = restSchuld / 100 * inputZins;
		details.zinsen.push(zinsen);
		interestTotal += zinsen;
		reineJahresTilgung = inputTilgung * 12 - zinsen;
		details.reineJahresTilgung.push(reineJahresTilgung);
		restSchuld = restSchuld - reineJahresTilgung;	
		details.restSchuld.push(restSchuld);	
		counter++;		
  }

  details.totalYears = counter;
  details.restSchuldEnd = restSchuld;
  details.interestTotal = interestTotal;  
  return details;		
}

},{}]},{},[1]);
