var mapOptions = {
  zoom: 8,
  center: new google.maps.LatLng(-34.397, 150.644),
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

function initialize() {
  console.log("we got here! 2");
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

