var map=L.map("map").setView([42,-70],7);L.esri.basemapLayer("Oceans").addTo(map);for(var buoyIcon=L.icon({iconUrl:"https://christensenmichael0.github.io/dist/surf/img/buoy-marker3-42small.png",iconSize:[55,55],iconAnchor:[27,41],popupAnchor:[-5,-30]}),i=0;i<markers.length;++i)L.marker([markers[i].lat,markers[i].lng],{icon:buoyIcon}).bindPopup('<a href="'+markers[i].url+'" target="_blank">'+markers[i].name+"</a>").addTo(map);