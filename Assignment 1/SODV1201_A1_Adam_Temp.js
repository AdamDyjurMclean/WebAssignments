const input = document.getElementById('number');            //Makes the input field a variable for easier codeing.
const submit = document.getElementById("submit");           //Makes the button a variable for easier codeing.
const result = document.getElementById("grade");              //Makes the output a variable for easier codeing.
const kelvin = document.getElementById("kelvin");

submit.addEventListener("click", () => {
    if (input.value == ""){                                 //Checking if the input field is blank
        result.innerHTML = "Field is blank";                //if so, give an error message.
        result.style.color = "red";
        kelvin.innerHTML = "";
    }
    else if (isNaN(input.value )){                          //Checking if the input field is not a number
        result.innerHTML = "Must enter a number";           //if so, give an error message.
        result.style.color = "red";
        }
    else if (input.value < -459.67){                                     //Checking if the input value is to low
        result.innerHTML = "Fahrenheit minimum value is -459.67";        //if so, give an error message.
        result.style.color = "red";
        kelvin.innerHTML = "";
    }
    else {
        let celcius = (input.value - 32) * 5/9;                 //convert fahrenheit to celsius.
        result.innerHTML = "Celsius: " + celcius.toFixed(2);    //display celcius.
        result.style.color = "black";
        let convert = celcius + 273.15;                         //convert celcius to kelvin.
        kelvin.innerHTML = "Kelvin: " + convert.toFixed(2);     //display kelvin.
    }
});