ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [67.499558, 88.781025],// 
            zoom: 10,
            controls: ['zoomControl']
        }),

	ymaps.geoXml.load('trek.gpx').then(function (res) {
	    myMap.geoObjects.add(res.geoObjects);
	    if (res.mapState) {
	        res.mapState.applyToMap(myMap);
	    }
	});
}