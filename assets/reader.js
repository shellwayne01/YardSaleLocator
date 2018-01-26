//Method 1: Retrieve markers for all sales from external JSON data. Still working on it!
//yardSales = [];
//relevant = [];
//
//alert("Before map loads, in reader.js");
//var fs = require('fs');

//Hard-Coded for now
yardSales = [ [ '2823 Sedgwick Ave Bronx, NY', 40.872994, -73.902004, 4 ],
  [ 'Villa Ave Bronx, NY', 40.876466, -73.88679, 4 ],
  [ 'Jerome Ave Bronx, NY', 40.864978, -73.899493, 4 ],
  [ 'Tibbett Ave Bronx, NY', 40.881722, -73.907561, 4 ] ];

relevant = [ { lat: 40.872994, lon: -73.902004 },
  { lat: 40.876466, lon: -73.88679 },
  { lat: 40.864978, lon: -73.899493 },
  { lat: 40.881722, lon: -73.907561 } ];


////Function works but doesnt change global variable. Fs require stops the rest from happening.
//function getInitialData(){
//    var file = fs.readFileSync("../yardsale.json");
//    var Odata = JSON.parse(file);
//    console.log("this is the original data: " + Odata );
//
//    //Get JSON data into JavaScript object
//    for(i=0; i<Odata.length;i++){
//        var data = Odata[i];
//        var address = String(data.address.street + " " + data.address.city + ", " + data.address.state);
//        var lat = parseFloat(data.address.lat);
//        var lon = parseFloat(data.address.lon);
//        var ys = [address, lat , lon, 4];
//        yardSales.push(ys);
//    }
//}

////Function works but doesnt change global variable. Fs require stops the rest from happening.
//function getInitialData(){
//    fs.readFile('../yardsale.json', function read(err, data) {
//    if (err) {
//        throw err;
//    }
//    yardSales = data;
//    
//    console.log(yardSales);   // Put all of the code here (not the best solution)
//    processFile();          // Or put the next step in a function and invoke it
//});
//
//function processFile() {
//    console.log(content);
//}    
//        
//    var Odata = JSON.parse(file);
//    console.log("this is the original data: " + Odata );
//
//    //Get JSON data into JavaScript object
//    for(i=0; i<Odata.length;i++){
//        var data = Odata[i];
//        var address = String(data.address.street + " " + data.address.city + ", " + data.address.state);
//        var lat = parseFloat(data.address.lat);
//        var lon = parseFloat(data.address.lon);
//        var ys = [address, lat , lon, 4];
//        yardSales.push(ys);
//    }
//}

//Function works but doesnt change global variable. same issue
function getRefinedData(){
    var file = fs.readFileSync("../relevantMarkers.json");
    var refinedJSON = JSON.parse(file);
    relevant = refinedJSON;
    console.log("Second JS has now recieved the relevant data: " + relevant);
}


getInitialData(); //for yardsale.ejs
getRefinedData(); //for yardsaleResults.ejs
alert("Data recieved");
