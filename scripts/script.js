function initMap() {
  var center = { lat: 41.8719, lng: 12.5674 }; // Rome, Italy as the center

  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 3
  });

  var locations = [
    { lat: -13.1631, lng: -72.5450, title: 'Machu Picchu' },
    { lat: 45.4642, lng: 9.1900, title: 'Milano' },
    { lat: 28.5383, lng: 33.9615, title: 'Sinai' },
    { lat: 41.3851, lng: 2.1734, title: 'Barcelona' },
    { lat: 42.6507, lng: 1.1803, title: 'Pyrenees' }
  ];

  locations.forEach(function(location) {
    new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.title
      animation: google.maps.Animation.DROP
    });
  });
}