ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [67.499558, 88.781025],// 
            zoom: 10,
            controls: ['zoomControl']
        }),
        gpxButton = $('.load-gpx');

    // Отключение кеширования атрибута disabled в Firefox.
    gpxButton.get(0).disabled = false;


    // При нажатии на кнопку загружаем соответствующий XML-файл
    // и отображаем его данные на карте.
    gpxButton.click(function (e) {
        ymaps.geoXml.load('trek.gpx')
            .then(onGeoXmlLoad);
        e.target.disabled = true;
    });

    // Обработчик загрузки XML-файлов.
    function onGeoXmlLoad(res) {
        myMap.geoObjects.add(res.geoObjects);
        if (res.mapState) {
            res.mapState.applyToMap(myMap);
        }
        else {
            myMap.setBounds(res.geoObjects.getBounds());
        }
    }
}