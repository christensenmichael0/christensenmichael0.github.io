  var map = L.map('map').setView([42.0, -70.0], 7);

  L.esri.basemapLayer('Oceans').addTo(map);
  
  //var marker = L.marker([42.0, -70.0],{icon: buoyIcon}).addTo(map);
  //var marker = L.marker([42.0, -70.0]).addTo(map);
  
  var buoyIcon = L.icon({
    iconUrl: 'https://github.com/christensenmichael0/christensenmichael0.github.io/blob/master/img/buoy_marker3.png?raw=true',
    iconSize:     [55, 55], // size of the icon
    iconAnchor:   [27, 41], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -30] // point from which the popup should open relative to the iconAnchor
});
  
  for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng], {icon: buoyIcon} )
      .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
      .addTo( map );
}