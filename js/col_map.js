var extent = [0, 0, 1024, 968];
var projection = new ol.proj.Projection({
  code: 'map-image',
  units: 'pixels',
  extent: extent
});

var map = new ol.Map({
  layers: [
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        attributions: [
          new ol.Attribution({
            html: '&copy; <a href="https://sourceafrica.net/documents/21198-Pfizer-Map.html">sourceAFRICA</a>'
          })
        ],
        url: 'https://sourceafrica.net/documents/21198/pages/Pfizer-Map-p1-large.gif?1455362846',
        projection: projection,
        imageExtent: extent
      })
    })
  ],
  target: 'map',
  view: new ol.View({
    projection: projection,
    center: ol.extent.getCenter(extent),
    zoom: 2
  })
});
