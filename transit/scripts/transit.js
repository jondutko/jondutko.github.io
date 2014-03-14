var mylat = 0;
var mylng = 0;
var me = new google.maps.LatLng(mylat, mylng);
var mOptions = {
	zoom: 12,
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var stations = [];
var map;
var currentMarker;
var inforwindow = new google.maps.InfoWindow();
var places;

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), mOptions);
  initializeStations();
  findMe();
  calculateShortest();
}

function initializeStations(){
	stations.push({'line' : "Blue", 'name' : "Airport",
		'lat' : 42.37426, 'lng' : -71.0304});
	stations.push({'line' : "Blue", 'name' : "Aquarium",
		'lat' : 42.35978, 'lng' : -71.0517});
	stations.push({'line' : "Blue", 'name' : "Beachmont",
		'lat' : 42.39754, 'lng' : -70.9923});
	stations.push({'line' : "Blue", 'name' : "Bowdoin",
		'lat' : 42.36137, 'lng' : -71.062});
	stations.push({'line' : "Blue", 'name' : "Government Center",
		'lat' : 42.35971, 'lng' : -71.0592});
	stations.push({'line' : "Blue", 'name' : "Maverick",
		'lat' : 42.26915, 'lng' : -71.0395});
	stations.push({'line' : "Blue", 'name' : "Orient Hiehgts",
		'lat' : 42.38687, 'lng' : -71.0047});
	stations.push({'line' : "Blue", 'name' : "Revere Beach",
		'lat' : 42.40784, 'lng' : -70.9925});
	stations.push({'line' : "Blue", 'name' : "State Street",
		'lat' : 42.35898, 'lng' : -71.0576});
	stations.push({'line' : "Blue", 'name' : "Suffolk Downs",
		'lat' : 42.3905, 'lng' : -70.9971});
	stations.push({'line' : "Blue", 'name' : "Wonderland",
		'lat' : 42.41342, 'lng' : -70.9916});
	stations.push({'line' : "Blue", 'name' : "Wood Island",
		'lat' : 42.41342, 'lng' : -71.0229});
}

function findMe(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			mylat = position.coords.latitude;
			mylng = position.coords.longitude;
			updateMap();
		});
	}
	else{
		alert("Geolocation is not supported by you internet browser.");
	}
}

function calculateShortest(){
	var j = stations.length;
	var idealStation = stations[0];
	var idealDistance = haversine(stations[0].lat, stations[0].lng);
	var currentStation, currentDistance;
	for (var i = 1; i < j; i++){
		currentStation = stations[i];
		currentDistance = haversine(currentStation.lat, currentStation.lng);
		if(currentDistance < idealDistance){
			idealDistance = currentDistance;
			idealStation = currentStation;
		}
	}
	console.log("ideal station: " + idealStation + "idealDistance: " + idealDistance);
}

function haversine(stationLat, stationLng){
	var R = 6371; // km
	var dLat = (mylat-stationLat).toRad();
	var dLon = (mylng-stationLng).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	return d;
}

function updateMap(){
	me = new google.maps.LatLng(mylat, mylng);
	map.panTo(me);
	currentMarker = new google.maps.Marker({
		position: me,
		title: "You are here."
		
	});
	currentMarker.setMap(map);
}