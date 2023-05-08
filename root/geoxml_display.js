ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [67.491651, 91.069856],// 
            zoom: 7,
            controls: ['zoomControl']
        });

	ymaps.geoXml.load('trek.gpx').then(function (res) {
	    myMap.geoObjects.add(res.geoObjects);
	    if (res.mapState) {
	        res.mapState.applyToMap(myMap);
	    }
	});
}