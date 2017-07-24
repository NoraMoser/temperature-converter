console.log("hi");  

let input = document.getElementById("userInput");
let output = 0;
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let button = document.getElementById("submitTemperature");

document.getElementById("submitTemperature").addEventListener("click", function(){
	convertTemp();
    document.getElementById("convertedTemp").innerHTML = output;

});

function convertTemp(){
	if (document.getElementById("celsius").checked === true) {
	output = (input.value * 1.8) + 32; 
	} else if (document.getElementById("fahrenheit").checked === true) {
		output = (input.value / 1.8) - 32;
	}
}
