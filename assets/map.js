// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
//Having the fs here stops the map from being run.

////Method 1: Retrieve markers for all sales from external JSON data. Still working on it!
//alert("Before map loads ");
//var fs = require('fs');
//yardSales = [];
//alert("After map function ");
//
//
//function getData(){
//var file = fs.readFile('../yardsale.json', 'utf8');
//var originalJSON = JSON.parse(file);
//var Odata = originalJSON; //data is currently an object
//alert("Before map loads ");
//
////var Odata = require('../yardsale.json');
//console.log("this is the original data: " + Odata );
//
////Get JSON data into JavaScript object
//for(i=0; i<Odata.length;i++){
//    var data = Odata[i];
//    var address = String(data.address.street + " " + data.address.city + ", " + data.address.state);
//    var lat = parseFloat(data.address.lat);
//    var lon = parseFloat(data.address.lon);
//    var ys = [address, lat , lon, 4];
//    yardSales.push(ys);
//}
//
//console.log(yardSales); 
//}


////Method 2: Retrieve markers from hardcoded data. It works and shows markers.
//var data = [{ "title": " Maria's Yard Sale",
//  "address":{
//    "lat": 40.872994,
//    "lon": -73.902004,
//    "street": "2823 Sedgwick Ave", 
//    "city": "Bronx",
//    "state": "NY", 
//    "zipCode": 10468
//    },
// "items":[
//        "chairs",
//	    "pants",
//	    "lamp"
//        ],
//  "date": "24 January 2018",
//  "Jdate": 20180124 
//},
//
//{ "title": " Joey's Yard Sale",
//  "address":{
//    "lat": 40.876466,
//    "lon": -73.88679,
//    "street": "Villa Ave", 
//    "city": "Bronx",
//    "state": "NY", 
//    "zipCode": 10468
//    },
// "items":[
//        "chairs",
//	    "shirts",
//	    "buttons"
//        ],
// "date": "25 January 2018",
// "Jdate": 20180125 
//},
//
//{ "title": " Tyriek's Yard Sale",
//  "address":{
//    "lat": 40.864978,
//    "lon": -73.899493,
//    "street": "Jerome Ave", 
//    "city": "Bronx",
//    "state": "NY", 
//    "zipCode": 10468
//    },
// "items":[
//        "chairs",
//	    "tables",
//	    "shoes"
//        ],
// "date": "26 January 2018",
// "Jdate": 20180126 
//},
//
//{ "title": " Annabelle's Yard Sale",
//  "address":{
//    "lat": 40.881722,
//    "lon": -73.907561,
//    "street": "Tibbett Ave", 
//    "city": "Bronx",
//    "state": "NY", 
//    "zipCode": 10463
//    },
// "items":[
//        "chairs",
//	    "pants",
//	    "shoes"
//        ],
// "date": "24 January 2018",
// "Jdate": 20180127 
//}];
//
//
////Get JSON data into JavaScript object
//var allTitles = []; 
//var allAddresses = [];
//var allLat = [];
//var allLon = [];
//var yardSales = [];
//              
//for(i=0; i<data.length; i++){
//    var YS = data[i];
//    var title = YS.title;
//    var address = YS.address.street + " " + YS.address.city + ", " + YS.address.state;
//    var lat = parseFloat(YS.address.lat);
//    var lon = YS.address.lon;
//    var ys = [address, lat , lon, 4];
// 
//    allTitles.push(title);
//    allAddresses.push(address);
//    allLat.push(lat);
//    allLon.push(lon);
//    yardSales.push(ys);
//    
//};
//
//console.log(yardSales);

//if(yardSales1 == yardSales){
//    console.log("They are equivalent");
//    if(yardSales1 === yardSales){
//        console.log("THEY ARE LITERALLY THE SAME THING");
//    }
//}

//if(yardSales1[0][0] == yardSales[0][0]){
//    console.log("They are equivalent");
//    if(yardSales1 === yardSales){
//        console.log("THEY ARE LITERALLY THE SAME THING");
//    }
//}

yardSales;
alert("First map: " + yardSales); //Works. Is getting data from reader.js

//Retrieve Populated Map
      var map, infoWindow;
      function initMap() {
        alert("First map is now loading ");
        var uluru = {lat: 40.8733223, lng: -73.8963282};
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.8733223, lng: -73.8963282},
          zoom: 14
        });
        //alert("Cool! checking data...");
        //alert("Cool " + yardSales[0][0]);
          
        //Method for adding markers #2
        //        var thegeo = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-73.89318466186523,40.88324745065955]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-73.90146732330322,40.87662815076682]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-73.89198303222656,40.87098175424642]}}]};
        //        
        //        map.data.addGeoJson(thegeo); 

        //Get JSON data into JavaScript object
//         var yardSales = [
//        ['RANOOOOOOO', 40.872994 , -73.902004, 4],
//        ['Coogee Beach', 40.883929 , -73.893442, 5],
//        ['Cronulla Beach', 40.878348 , -73.899794, 3],
//        ['3800 Review Pl', 40.885097, -73.899407, 2],
//        ['3506 Johnson Ave', 40.88594 , -73.909793, 1]
//        ];
         var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Wendys</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Wendys</b>, also referred to as <b>Wendys</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
 //Iterate throuhg the JavaScript object
        for (var i = 0; i < yardSales.length; i++) {
          var yardSale = yardSales[i];
          var marker = new google.maps.Marker({
            position: {lat: yardSale[1], lng: yardSale[2]},
            map: map,
            title: yardSale[0],
          });
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(contentString);
        infowindow.setOptions({maxWidth: 400});
        infowindow.open(map, marker);
      }
    }) (marker, i));
        }
        //markers from JSON file
      // var marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map,
      //     title: 'Uluru (Ayers Rock)'
      //   });
    
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
 
      // This will get the user's location
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
