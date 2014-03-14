var mylat = 0;
var mylng = 0;
var me = new google.maps.LatLng(mylat, mylng);
var mOptions = {
	zoom: 12,
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var inforwindow = new google.maps.InfoWindow();
var places;

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), mOptions);
  findMe();
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

function updateMap(){
	me = new google.maps.LatLng(mylat, mylng);
	map.panTo(me);
}