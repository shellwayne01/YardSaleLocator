relevant; //global variable from reader.js
//alert("This is relevant data: " + relevant);

//Retrieve Populated Map
      var map, infoWindow;
      function initMap() {
        var uluru = {lat: 40.8733223, lng: -73.8963282};
          
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.8733223, lng: -73.8963282},
          zoom: 14
        });
          
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
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
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
 //Iterate through the JavaScript object
        for (var i = 0; i < relevant.length; i++) {
          var yardSale = relevant[i];
          var marker = new google.maps.Marker({
            position: {lat: yardSale.lat, lng: yardSale.lon},
            map: map,
//            title: yardSale[0],
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



