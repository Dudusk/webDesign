function initMap() {
	var lati = position.coords.latitude;
	var longi =  position.coords.longitude;

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 43.529742, lng: 5.4474270000000615},
		zoom: 12
	});
	var infoWindow = new google.maps.InfoWindow({map: map});

	// Test de fonctionnement
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent("T'es ici uesh.");
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// WebBrowser supporte pas géolocalisation
		handleLocationError(false, infoWindow, map.getCenter());
	}

	

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
	'Error: Le service de géolocalisation ne fonctionne pas.' :
	'Error: WebBrowser ne supporte pas la géolocalisation.');
}