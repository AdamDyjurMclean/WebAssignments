//setting up fs, express, and useing port 3000.
const fs = require('fs');
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Using port ${PORT}`));

//so that the html files can get thier css/js files
const path = require('path')
app.use(express.static(path.join(__dirname)));

//to use request.body, makes the info from the push request readable.
app.use(express.urlencoded({extended:true}));

//Sends the index.html file to /
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
  });

//send the register/html file to /register
app.get("/register", (request, response) => {
  response.sendFile(__dirname + "/register.html");
});

//On the /roster route, send an array with all the current sign ups.
app.get("/roster", (request, response) => {
  fs.readFile('roster.json', function (err, data){
    let current = JSON.parse(data);
    response.status(200).send(current);
  });
});

//this runs everytime the form is submitted on the register.hmtl. First checks if the post is sending a vailid application, 
//and if it is, reads the json file, adds an object to the array, writes the updated array to the json file. Finally, sends
//the register page back to the user again.
app.post("/post", (request, response) => {
  if(request.body.id != "" && typeof parseInt(request.body.id) == 'number' && request.body.name != "" && request.body.address != ""){
    fs.readFile('roster.json', function (err, data){
      let current = JSON.parse(data);
      current.push(request.body);
      fs.writeFileSync('roster.json', JSON.stringify(current));
      response.sendFile(__dirname + "/register.html");
    });
  }
  else{
    response.sendFile(__dirname + "/register.html");
  }
});