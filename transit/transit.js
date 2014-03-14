var latitude, longitude;

function getNav(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(acquire);
	}
}

function initialize(){
	getNav();
    var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

function acquire(position){
	latitude=position.coords.latitude;
	longitude=position.coords.longitude;
}