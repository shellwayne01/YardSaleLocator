//alert("Before map loads, in reader.js");

//Method 1: Hard-Coded for now
yardSales = [ [ '2823 Sedgwick Ave Bronx, NY', 40.872994, -73.902004, 4 ],
  [ 'Villa Ave Bronx, NY', 40.876466, -73.88679, 4 ],
  [ 'Jerome Ave Bronx, NY', 40.864978, -73.899493, 4 ],
  [ 'Tibbett Ave Bronx, NY', 40.881722, -73.907561, 4 ] ];

relevant = [ { lat: 40.872994, lon: -73.902004 },
  { lat: 40.876466, lon: -73.88679 },
  { lat: 40.864978, lon: -73.899493 },
  { lat: 40.881722, lon: -73.907561 } ];


//Method 2: Retrieve markers for all sales from external JSON data. Still working on it!
//yardSales = [];
//relevant = [];
//var fs = require('fs');

////Trying using Synchronous readFile. Function works but doesnt change global variable. Fs require stops the rest from happening after initMap is called.
function getInitialData(){
    var file = fs.readFileSync("../yardsale.json");
    var Odata = JSON.parse(file);
    console.log("this is the original data: " + Odata );

    //Get JSON data into JavaScript object
    for(i=0; i<Odata.length;i++){
        var data = Odata[i];
        var address = String(data.address.street + " " + data.address.city + ", " + data.address.state);
        var lat = parseFloat(data.address.lat);
        var lon = parseFloat(data.address.lon);
        var ys = [address, lat , lon, 4];
        yardSales.push(ys);
    }
}

////Trying using Asynchronous readFile. Function works but same issue.
function getInitialData(){
    fs.readFile('../yardsale.json', function read(err, data) {
    if (err) {
        throw err;
    }
    Odata = JSON.parse(data);
        
    //Get JSON data into JavaScript object
    for(i=0; i<Odata.length;i++){
        var data = Odata[i];
        var address = String(data.address.street + " " + data.address.city + ", " + data.address.state);
        var lat = parseFloat(data.address.lat);
        var lon = parseFloat(data.address.lon);
        var ys = [address, lat , lon, 4];
        yardSales.push(ys);
    }
    processFile();          
});
}

        function processFile() {
            console.log(yardSales);
        } 


////Function works but doesnt change global variable. same issue
function getRefinedData(){
    var file = fs.readFileSync("../relevantMarkers.json");
    var refinedJSON = JSON.parse(file);
    relevant = refinedJSON;
    console.log("Second JS has now recieved the relevant data: " + relevant);
}


//getInitialData(); //for dynamic yardsale.ejs
//getRefinedData(); //for dynamic yardsaleResults.ejs
//alert("Data recieved");

