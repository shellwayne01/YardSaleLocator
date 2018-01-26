var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser'); 

console.log("sever is starting");
app.use(express.static('/views')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use('/assets',express.static('assets'));
app.use(express.static('assets')); 

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
    var requestedItem = request.params.item;
    console.log(requestedItem);
    
    var relevantYS = [];
    var relevantTitles = [];
    var relevantAddresses = [];
    var relevantSoldItems = [];
    var relevantDates = [];
    
    for(i=0; i<data.length; i++){
        var YS = data[i];
        var title = YS.title;
        var address = YS.address.street + " " + YS.address.city + ", " + YS.address.state;
        var itemsSold = YS.items;
        var date = YS.date;
        
        for(x=0; x<itemsSold.length; x++){
            if( (itemsSold[x]) == requestedItem ){
                relevantYS.push(YS);
                relevantTitles.push(title);
                relevantAddresses.push(address);
                relevantSoldItems.push(itemsSold);
                relevantDates.push(date);
            }
        }
    }

    console.log(relevantSoldItems);

    response.render('yardsaleResults.ejs', {sales: relevantTitles, addresses: relevantAddresses, 
                                            items: relevantSoldItems, dates: relevantDates});
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


//Retrieves results page for new yard sale via generator after search btn is clicked
.post('/yardsale/newYardSale', function(request, response){
    var userInput = request.body.userInput;
    console.log(userInput);
    console.log("User searched for " + userInput + ".");
    console.log("Redirecting");
    response.redirect("/search/" + userInput );
})

//Retrieves results page with all data from new yard sale 
.get('/yardsale/newYardSale', function(request, response){
    response.render('newYardSale.ejs', {sales:JSON.stringify(data)});
})
