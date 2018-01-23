var express = require('express');
var app = express();
var fs = require('fs');

var results = [];
<<<<<<< HEAD
var data = fs.readFileSync("yardsale.json");
var words = JSON.parse(data);
console.log(words);
=======
var file = fs.readFileSync("yardsale.json");
var data = JSON.parse(file);
console.log(data);
>>>>>>> acaf19137e4bb6d6a2e020883e6f5be3cbe04dd1


console.log("sever is starting");
app.use(express.static('/views')); 

var server = app.listen(3000, listening);

function listening(){
    console.log("listening");
}

//Empty function for now
app.get('/search/:genre', someFunction);
function someFunction(request, response){
}


//Retrieves home page
app.get('/home', function(request, response){
    console.log("Now on home page");
    response.render('yardsale.ejs');
})


//Retrieves results page 
.get('/yardsale/Results', function(request, response){
    console.log("Now on results page");
    response.render('yardsaleResults.ejs');
})