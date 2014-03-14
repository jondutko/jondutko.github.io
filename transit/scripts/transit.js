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
	stations.push({'line' : "Orange", 'name' : "Back Bay",
		'lat' : 42.34735, 'lng' : -71.0757});
	stations.push({'line' : "Orange", 'name' : "Chinatown",
		'lat' : 42.35255, 'lng' : -71.0628});
	stations.push({'line' : "Orange", 'name' : "Community College",
		'lat' : 42.37362, 'lng' : -71.0695});
	stations.push({'line' : "Orange", 'name' : "Downtown Crossing",
		'lat' : 42.35552, 'lng' : -71.0602});
	stations.push({'line' : "Orange", 'name' : "Forest Hills",
		'lat' : 42.30052, 'lng' : -71.1137});
	stations.push({'line' : "Orange", 'name' : "Green Street",
		'lat' : 42.31053, 'lng' : -71.1074});
	stations.push({'line' : "Orange", 'name' : "Haymarket",
		'lat' : 42.36302, 'lng' : -71.0583});
	stations.push({'line' : "Orange", 'name' : "Jackson Square",
		'lat' : 42.32313, 'lng' : -71.0996});
	stations.push({'line' : "Orange", 'name' : "Malden Center",
		'lat' : 42.32313, 'lng' : -71.0741});
	stations.push({'line' : "Orange", 'name' : "Mass Ave",
		'lat' : 42.34151, 'lng' : -71.0834});
	stations.push({'line' : "Orange", 'name' : "North Station",
		'lat' : 42.36558, 'lng' : -71.0613});
	stations.push({'line' : "Orange", 'name' : "Oak Grove",
		'lat' : 42.43668, 'lng' : -71.0711});
	stations.push({'line' : "Orange", 'name' : "Roxbury Crossing",
		'lat' : 42.3314, 'lng' : -71.0955});
	stations.push({'line' : "Orange", 'name' : "Ruggles",
		'lat' : 42.33638, 'lng' : -71.089});
	stations.push({'line' : "Orange", 'name' : "State Street",
		'lat' : 42.35898, 'lng' : -71.0576});
	stations.push({'line' : "Orange", 'name' : "Stony Brook",
		'lat' : 42.31706, 'lng' : -71.1042});
	stations.push({'line' : "Orange", 'name' : "Sullivan",
		'lat' : 42.38398, 'lng' : -71.077});
	stations.push({'line' : "Orange", 'name' : "Tufts Medical",
		'lat' : 42.34966, 'lng' : -71.0639});
	stations.push({'line' : "Orange", 'name' : "Wellington",
		'lat' : 42.40237, 'lng' : -71.0771});
	stations.push({'line' : "Red", 'name' : "Alewife",
		'lat' : 42.39543, 'lng' : -71.1425});	
	stations.push({'line' : "Red", 'name' : "Andrew",
		'lat' : 42.33015, 'lng' : -71.0577});
	stations.push({'line' : "Red", 'name' : "Ashmont",
		'lat' : 42.28465, 'lng' : -71.0645});
	stations.push({'line' : "Red", 'name' : "Braintree",
		'lat' : 42.20785, 'lng' : -71.0011});
	stations.push({'line' : "Red", 'name' : "Broadway",
		'lat' : 42.34262, 'lng' : -71.057});
	stations.push({'line' : "Red", 'name' : "Central Square",
		'lat' : 42.36549, 'lng' : -71.1038});
	stations.push({'line' : "Red", 'name' : "Charles/MGH",
		'lat' : 42.36117, 'lng' : -71.0706});
	stations.push({'line' : "Red", 'name' : "Davis",
		'lat' : 42.39674, 'lng' : -71.1218});	
	stations.push({'line' : "Red", 'name' : "Downtown Crossing",
		'lat' : 42.35552, 'lng' : -71.0602});
	stations.push({'line' : "Red", 'name' : "Fields Corner",
		'lat' : 42.30009, 'lng' : -71.0617});		
	stations.push({'line' : "Red", 'name' : "Harvard Square",
		'lat' : 42.37336, 'lng' : -71.119});
	stations.push({'line' : "Red", 'name' : "JFK/UMass",
		'lat' : 42.32069, 'lng' : -71.0524});
	stations.push({'line' : "Red", 'name' : "Kendall/MIT",
		'lat' : 42.36249, 'lng' : -71.0862});
	stations.push({'line' : "Red", 'name' : "North Quincy",
		'lat' : 42.27528, 'lng' : -71.0296});
	stations.push({'line' : "Red", 'name' : "Park Street",
		'lat' : 42.27528, 'lng' : -71.0624});
	stations.push({'line' : "Red", 'name' : "Porter Square",
		'lat' : 42.3884, 'lng' : -71.1191});
	stations.push({'line' : "Red", 'name' : "Quincy Adams",
		'lat' : 42.23339, 'lng' : -71.0072});
	stations.push({'line' : "Red", 'name' : "Quincy Center",
		'lat' : 42.25181, 'lng' : -71.0054});
	stations.push({'line' : "Red", 'name' : "Savin Hill",
		'lat' : 42.31129, 'lng' : -71.0533});
	stations.push({'line' : "Red", 'name' : "Shawmut",
		'lat' : 42.29313, 'lng' : -71.0657});
	stations.push({'line' : "Red", 'name' : "South Station",
		'lat' : 42.35227, 'lng' : -71.0552});
	stations.push({'line' : "Red", 'name' : "Wollaston",
		'lat' : 42.26651, 'lng' : -71.0203});			
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
			console.log("switch!");
			idealDistance = currentDistance;
			idealStation = currentStation;
		}
	}
	console.log("ideal station: " + idealStation.name + "idealDistance: " + idealDistance);
}

Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}

function haversine(stationLat, stationLng){
	var R = 6371; // km

	var x1 = mylat-stationLat;
	var dLat = x1.toRad();  
	var x2 = mylng-stationLng;
	var dLon = x2.toRad();  
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(stationLat.toRad()) * Math.cos(mylat.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; 
	//console.log(d);
	return d;
}

function updateMap(){
	me = new google.maps.LatLng(mylat, mylng);
	map.panTo(me);//
	currentMarker = new google.maps.Marker({
		position: me,
		title: "You are here."
		
	});
	currentMarker.setMap(map);
}