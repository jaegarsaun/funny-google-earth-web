function initMap() {
    let locArray = [
        { lat: 51.5030943, lng: -0.1778232 },
        { lat: 49.9504392, lng: -105.5552578 },
        { lat: 59.9210557, lng: 30.3506658 },
        { lat: 32.7685757, lng: -117.2526967 },
        { lat: 63.9276163, lng: -20.9985304 },
        { lat: 35.7040744, lng: 139.5577317 },
        { lat: 59.6738319, lng: 10.6057555 },
        { lat: 65.0931801, lng: 28.9032142 },
        { lat: 57.9286866, lng: -5.1976373 },
        { lat: 59.34096331, lng: 28.13045578 },


        { lat: 56.6405366, lng: 8.7819477 },
        { lat: 30.2417765, lng: -97.7268773 },



    ];

    randomLoc = locArray[Math.floor(Math.random() * locArray.length)];
    console.log(randomLoc);
    const fenway = { lat: 42.345573, lng: -71.098326 };

        // Center the map on the user's current location
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: randomLoc,
          mapTypeId: 'streetview'
        });
        // Display the street view in car mode of the user's current location



            const panorama = new google.maps.StreetViewPanorama(
                document.getElementById("map"),
                {
                  position: randomLoc,
                  pov: {
                    heading: 34,
                    pitch: 10,
                  },
                }
              );
        map.setStreetView(panorama);
      }
 

  