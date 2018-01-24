var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser'); 



console.log("sever is starting");
app.use(express.static('/views')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var results = [];
var file = fs.readFileSync("yardsale.json");
var data = JSON.parse(file);
console.log(data);

var server = app.listen(3000, listening);

function listening(){
    console.log("listening");
    
}

//Generates relevant yard sale results
app.get('/search/:item', getYardSales);

function getYardSales(request, response){
    var item = request.params.item;
    console.log(item);
    
    var relevantYS = [];

    for(i=0; i<data.length; i++){
        var YS = data[i];
        var title = data[i].title;
        var itemsSold = data[i].items;
        
        console.log(title);
        console.log(itemsSold);
        
        for(x=0; x<itemsSold.length; x++){
            if( (itemsSold[x]) == item ){
                relevantYS.push(title);   
            }
        }
    }

    response.render('yardsaleResults.ejs', {sales:relevantYS});
}


//Retrieves home page
app.get('/home', function(request, response){
    response.render('yardsale.ejs', {sales: JSON.stringify(data), show: listening()});
    console.log("Now on home page");
})


//Retrieves results page with all data 
.get('/yardsale/Results', function(request, response){
    console.log("Now on results page");
    response.render('yardsaleResults.ejs', {sales:JSON.stringify(data)});
})

//Retrieves results page for user via generator after search btn is clicked
.post('/yardsale/searchResults', function(request, response){
    var userInput = request.body.userInput;
    console.log(userInput);
    console.log("User searched for " + userInput + ".");
    console.log("Redirecting");
    response.redirect("/search/" + userInput );
})

