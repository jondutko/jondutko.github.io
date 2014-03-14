var lat, lng;
function initialize() {
  navigator.geolocation.getCurrentPosition(access);
  var mapOptions = {
	zoom: 8,
	center: new google.maps.LatLng(lat, lng),
	mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  console.log("we got here! 2");
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
function access(position){
	lat = position.coords.latitude;
	lng = position.coords.longitude;
	console.log("latitude "+lat+" longitude "+lng);
}

