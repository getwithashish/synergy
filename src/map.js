// Initialize map with Open Street Map Tile
var map = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Tile({
      preload: 4,
      source: new ol.source.OSM(),
    }),
  ],
  // Set Center of India as the default view
  view: new ol.View({
    center: ol.proj.fromLonLat([80.3882, 21.5948]),
    zoom: 4.8,
    minZoom: 5,
    updateWhileAnimating: true,
    constrainResolution: true,
  }),
});

var sourceMarkerLayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
});

var destinationMarkerLayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
});

map.addLayer(sourceMarkerLayer);
map.addLayer(destinationMarkerLayer);

var railwayLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: "INDIAN_RAILWAYS.geojson", // Replace with the path to your GeoJSON file
    format: new ol.format.GeoJSON(),
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "red", // Change the color as needed
      width: 3,
    }),
  }),
});

map.addLayer(railwayLayer);

//   Change to dark theme
map.on("postcompose", function (e) {
  document.querySelector("canvas").style.filter =
    "invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)";
});

function goToLocation(lon, lat, zoomLevel = 17) {
  const centerCoordinates = map.getView().getCenter();
  const [currentLongitude, currentLatitude] = ol.proj.transform(
    centerCoordinates,
    "EPSG:3857",
    "EPSG:4326"
  );
  const halfWayLongitude = (currentLongitude + lon) / 2;
  const halfWayLatitude = (currentLatitude + lat) / 2;
  var halfWayCenter = ol.proj.fromLonLat([halfWayLongitude, halfWayLatitude]);

  var newCenter = ol.proj.fromLonLat([lon, lat]);
  const zoomOutAnimation = map.getView().animate(
    {
      center: halfWayCenter,
      zoom: map.getView().getZoom() - 4,
      constrainResolution: true,
      duration: 1000,
      easing: ol.easing.easeOut,
    },
    {
      zoom: zoomLevel,
      center: newCenter,
      constrainResolution: true,
      duration: 1000,
      easing: ol.easing.easeIn,
    }
  );
}

function buildMarker(lon, lat) {
  var marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
  });
  marker.setStyle(
    new ol.style.Style({
      image: new ol.style.Icon({
        src: "location-source-icon-png.png", // Add your marker image path
        scale: 0.3,
      }),
    })
  );
  return marker;
}

function addSourceMarker(stationCode) {
  sourceMarkerLayer.getSource().clear();

  getCoordinates(stationCode).then((resp) => {
    goToLocation(resp.longitude, resp.latitude);
    let marker = buildMarker(resp.longitude, resp.latitude);
    sourceMarkerLayer.getSource().addFeature(marker);
  });
}

function addDestinationMarker(stationCode) {
  destinationMarkerLayer.getSource().clear();

  getCoordinates(stationCode).then((resp) => {
    goToLocation(resp.longitude, resp.latitude);
    let marker = buildMarker(resp.longitude, resp.latitude);
    destinationMarkerLayer.getSource().addFeature(marker);
  });
}

function removeMarkers() {
  destinationMarkerLayer.getSource().clear();
  sourceMarkerLayer.getSource().clear();
}

function getCoordinates(stationCode) {
  var stationPlaceName = stationCode + " railway station";
  var url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
    encodeURIComponent(stationPlaceName);

  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      if (data && data.length > 0) {
        var result = data[0];
        var longitude = parseFloat(result.lon);
        var latitude = parseFloat(result.lat);
        return {
          longitude,
          latitude,
        };
      } else {
        alert("Place Not Found");
        return {};
      }
    });
}
