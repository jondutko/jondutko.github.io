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
}

function initializeStations(){
	stations.push({'line' : "Blue", 'name' : "Airport",
		'lat' : 42.37426, 'lng' : -71.0304});
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