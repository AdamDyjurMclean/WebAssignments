//makeing some html elements into varriables, to make the rest of the code easier to write/read.
const submit = document.getElementById("submit");
const id = document.getElementById("id");
const name = document.getElementById("name");
const address = document.getElementById("address");
const select = document.getElementById("select");

//add an event listener for when the submit button is clicked.
submit.addEventListener("click", () =>{
    //show error message if user didn't enter info in all fields.
    if(id.value == "" || isNaN(id.value) || name.value == "" || address.value == "" ){
        alert("Please ensure all fields are entered correctly");
    }
    //if all fields entered, show the confermation message.
    else{
        alert(`Thank you, you are regestered as:\n
        Name: ${name.value}\n
        ID: ${id.value}\n
        Address: ${address.value}\n
        Status: ${select.value}`)
        window.location.href;
    }
});