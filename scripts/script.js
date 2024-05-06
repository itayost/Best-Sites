// Initialize and add the map
let map;

async function initMap() {
  // The location of Rome, Italy as the center
  const center = { lat: 41.8719, lng: 12.5674 };

  // Request needed libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create the map
  map = new Map(document.getElementById("map"), {
    zoom: 3,
    center: center,
    mapId: "5Locations" // Replace with your actual mapId
  });

  var locations = [
    { lat: -13.1631, lng: -72.5450, title: 'Machu Picchu' },
    { lat: 45.4642, lng: 9.1900, title: 'Milano' },
    { lat: 28.5383, lng: 33.9615, title: 'Sinai' },
    { lat: 41.3851, lng: 2.1734, title: 'Barcelona' },
    { lat: 42.6507, lng: 1.1803, title: 'Pyrenees' }
  ];

  // Add markers for each location
  locations.forEach(function(location) {
    new AdvancedMarkerElement({
      map: map,
      position: { lat: location.lat, lng: location.lng },
      title: location.title
    });
  });
}

initMap();