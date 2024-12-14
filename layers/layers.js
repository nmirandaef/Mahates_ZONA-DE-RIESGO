var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CASASMAHATES_1 = new ol.format.GeoJSON();
var features_CASASMAHATES_1 = format_CASASMAHATES_1.readFeatures(json_CASASMAHATES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASASMAHATES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASASMAHATES_1.addFeatures(features_CASASMAHATES_1);
var lyr_CASASMAHATES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASASMAHATES_1, 
                style: style_CASASMAHATES_1,
                popuplayertitle: "CASAS MAHATES",
                interactive: true,
                title: '<img src="styles/legend/CASASMAHATES_1.png" /> CASAS MAHATES'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_CASASMAHATES_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_CASASMAHATES_1];
lyr_CASASMAHATES_1.set('fieldAliases', {'fid': 'fid', 'No. Casa': 'No. Casa', 'Area': 'Area', 'Desde hace': 'Desde hace', '¿Cual con': '¿Cual con', '¿Ha notad': '¿Ha notad', '¿Con qué': '¿Con qué', '¿Qué niv': '¿Qué niv', '¿Qué imp': '¿Qué imp', '¿Cuál ha': '¿Cuál ha', '¿Ha recib': '¿Ha recib', });
lyr_CASASMAHATES_1.set('fieldImages', {'fid': '', 'No. Casa': '', 'Area': '', 'Desde hace': '', '¿Cual con': '', '¿Ha notad': '', '¿Con qué': '', '¿Qué niv': '', '¿Qué imp': '', '¿Cuál ha': '', '¿Ha recib': '', });
lyr_CASASMAHATES_1.set('fieldLabels', {'fid': 'inline label - always visible', 'No. Casa': 'inline label - always visible', 'Area': 'inline label - always visible', 'Desde hace': 'inline label - always visible', '¿Cual con': 'inline label - always visible', '¿Ha notad': 'inline label - always visible', '¿Con qué': 'inline label - always visible', '¿Qué niv': 'inline label - always visible', '¿Qué imp': 'inline label - always visible', '¿Cuál ha': 'inline label - always visible', '¿Ha recib': 'inline label - always visible', });
lyr_CASASMAHATES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});