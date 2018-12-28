var myCenter = new google.maps.LatLng(53.862023, 27.577435);

function initialize() {
  var mapProp = {
    center      : myCenter,
    zoom        : 16,
    scrollwheel : false,
    draggable   : true,
    mapTypeId   : google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);