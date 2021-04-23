let today = new Date();                                                 //setting up a variable to show the current date
let day = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();
if(day<10) {
    day = '0'+day
}
if(month<10) {
    month = '0'+month
} 
today = month + '/' + day + '/' + year;
let date = document.getElementById("date");
date.innerText = today;                                                 //display the current date

setTimeout(
    function() {
      document.getElementById("invs").style.opacity = "1";              //change opacity after 10 seconds to make the picture name visable
    }, 10000);
