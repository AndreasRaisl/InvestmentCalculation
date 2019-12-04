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

	let result = myCalculator(inputPrice, inputCapital, inputZins, inputTilgung);

	showComprisedResult(result);

	e.preventDefault();	
}

function showComprisedResult(result) {
	document.getElementById('response').innerHTML = `<div class="response">
																										<p> Sie möchten eine Immobilie kaufen/bauen?  Hier ist Ihr Finanzplan: </p>
																										<p> Sie werden	Ihren Kredit im ${result.totalYears}. Jahr abbezahlt haben </p>
																										<p> Insgesamt werden Sie dann ${result.totalInterest} Euro für Zinsen bezahlt haben. </p>
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

