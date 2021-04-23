const input = document.getElementById('number');            //Makes the input field a variable for easier codeing.
const submit = document.getElementById("submit");           //Makes the button a variable for easier codeing.
const result = document.getElementById("grade");              //Makes the output a variable for easier codeing.

submit.addEventListener("click", () =>{                     //This code will run whenever the submit button is clicked.
    if (input.value == ""){                                 //Checking if the input field is blank
        result.innerHTML = "Field is blank";                //if so, give an error message.
        result.style.color = "red";
    }
    else if (isNaN(input.value )){                          //Checking if the input field is not a number
        result.innerHTML = "Mark must be a number";         //if so, give an error message.
        result.style.color = "red";
    }
    else if (input.value < 0){                              //Checking is the input field is less than 0
        result.innerHTML = "Mark can not be less than 0";   //if so, give an error message.
        result.style.color = "red";
    }
    else if (input.value > 100){                             //Checking is the input field is more than 100
        result.innerHTML = "Mark can not be more than 100";  //if so, give an error message.
        result.style.color = "red";
    }
                                                            //at this point, the value in the input field should be a number between 0 and 100.
    else if (input.value < 50){                             //Checking if the number is below 50
        result.innerHTML = "Grade: F";                      //if so, the grade is an f.
        result.style.color = "black";
    }
    else if (input.value < 70){                             //Checking if the number is below 70
        result.innerHTML = "Grade: D";                      //if so, the grade is a d.
        result.style.color = "black";
    }
    else if (input.value < 80){                             //Checking if the number is below 80
        result.innerHTML = "Grade: C";                      //if so, the grade is a c.
        result.style.color = "black";
    }
    else if (input.value < 90){                             //Checking if the number is below 90
        result.innerHTML = "Grade: B";                      //if so, the grade is a B.
        result.style.color = "black";
    }
    else {
        result.innerHTML = "Grade A";                      //The only remaining possibility is an a.
        result.style.color = "black";
    }
});