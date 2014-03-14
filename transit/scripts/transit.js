var map;
var mapOptions = {
  zoom: 8,
  center: new google.maps.LatLng(-34.397, 150.644)
};

function initialize() {
  console.log("we got here");
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
