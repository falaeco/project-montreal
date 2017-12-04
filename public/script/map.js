mapboxgl.accessToken = 'pk.eyJ1IjoiZmFsYWVjbyIsImEiOiJjamFrYmVoY3IyaGx5MzJvMjE1d2s1dHJzIn0.-2tWYSs1iMpDlYGte2ObwQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/falaeco/cjaokgoxsfkie2rsue8nnw5vy',
  center: [-73.628817, 45.498973],
  minZoom: 8,
  zoom: 11
});

map.addControl(new mapboxgl.NavigationControl());
var marker = new mapboxgl.Marker();
marker.setLngLat([0, 0]);
marker.addTo(map);

map.on('click', function (e) {
  marker.setLngLat(e.lngLat);
})