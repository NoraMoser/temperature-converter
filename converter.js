console.log("hi");  

let input = document.getElementById("userInput");
let output = 0;
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let button = document.getElementById("submitTemperature");
let celSent = "Degrees Celsius";
let fahSent = "Degrees Fahrenheit";
let submit = document.getElementById("submitTemperature");
let temperatureOutput = document.getElementById("convertedTemp");
let result = 0;
let celOutput = 0;
let fahOutput = 0;

let celColor = 0;


document.getElementById("submitTemperature").addEventListener("click", function(){
	convertTemp();
   
    // colorTempCel();
    // temperatureOutput.innerHTML = ;
    temperatureOutput.innerHTML = output;
    
   
   
});

function convertTemp(){
// debugger;
	if (document.getElementById("celsius").checked === true) {
		output = ((input.value * 1.8) + 32); 
		if (output >= 32) {
			temperatureOutput.style.color = "red";
		}
		if (output <= 0) {
			temperatureOutput.style.color = "blue";
		}
		if (output < 32 && output > 0) {
			temperatureOutput.style.color = "green";
		}
	
	} else if (document.getElementById("fahrenheit").checked === true) {
		output = ((input.value - 32) / 1.8);
		
			if (output >= 90) {
				temperatureOutput.style.color = "red";
			}
			if (output <= 32) {
				temperatureOutput.style.color = "blue";
			}
			if (output < 90 && output > 32) {
				temperatureOutput.style.color = "green";
			}
	}
 // colorTempCel();
 // colorTempFah();

}
// let str = output + " Degrees Fahrenheit.";



// function colorTempCel(){

// 	console.log(celOutput);
//  	if (celOutput >= 32){
   
//     	output = output.fontcolor("red");
   
// 	} else if (celOutput <= 0){
// 	 	output = output.fontcolor("blue");
// 	} else {
// 		result = celOutput.fontcolor("green");
// 	}

// }

// function colorTempFah(){

// 	console.log(fahOutput);
//  	if (fahOutput >= 100){
   
//     	result = fahOutput.fontcolor("red");
   
// 	} else if (fahOutput <= 50){
// 	 	result = fahOutput.fontcolor("blue");
// 	} else {
// 		result = fahOutput.fontcolor("green");
// 	}

// }

// 	if (document.getElementById("celsius").checked === true && output > 32) {
// 		celSent.fontcolor("red");
// 	}
// }

// let output = 0;
// let button = document.getElementById("subBut");

// button.addEventListener("click", function(){

// });

// let input = document.getElementById("sayIn").value;

// if (document.getElementById("celsius").checked){
// 	celOutput = ((input * 1.8) + 32);
// } else if (document.getElementById("fahrenheit").checked){
// 	fahOutput = ((input -32) / 1.8);
// }