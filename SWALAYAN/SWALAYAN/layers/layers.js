var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1 = new ol.format.GeoJSON();
var features_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1 = format_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1.readFeatures(json_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1.addFeatures(features_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1);
var lyr_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1, 
                style: style_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1,
                popuplayertitle: 'RBI50K_KOTAPEKANBARU_KUGI50_20221231 — ADMINISTRASI_AR_KECAMATAN',
                interactive: true,
    title: 'RBI50K_KOTAPEKANBARU_KUGI50_20221231 — ADMINISTRASI_AR_KECAMATAN<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_0.png" /> Binawidya<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_1.png" /> Bukit Raya<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_2.png" /> Kulim<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_3.png" /> Lima Puluh<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_4.png" /> Marpoyan Damai<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_5.png" /> Payung Sekaki<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_6.png" /> Pekanbaru Kota<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_7.png" /> Rumbai<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_8.png" /> Rumbai Barat<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_9.png" /> Rumbai Timur<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_10.png" /> Sail<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_11.png" /> Senapelan<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_12.png" /> Sukajadi<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_13.png" /> Tenayan Raya<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_14.png" /> Tuahmadani<br />\
    <img src="styles/legend/RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1_15.png" /> <br />' });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });
var format_dataswalayan_4 = new ol.format.GeoJSON();
var features_dataswalayan_4 = format_dataswalayan_4.readFeatures(json_dataswalayan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataswalayan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataswalayan_4.addFeatures(features_dataswalayan_4);
var lyr_dataswalayan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataswalayan_4, 
                style: style_dataswalayan_4,
                popuplayertitle: 'data swalayan',
                interactive: true,
                title: '<img src="styles/legend/dataswalayan_4.png" /> data swalayan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_dataswalayan_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1,lyr_Clipped_2,lyr_Clipped_3,lyr_dataswalayan_4];
lyr_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDEBPS': 'Kode BPS Kelurahan/Desa', 'KDEPUM': 'Kode PUM Kelurahan/Desa', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'LUASWH': 'Luas Wilayah Menurut Peraturan (HA)', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Nama wilayah administrasi Kecamatan/Distrik', 'WADMKD': 'Nama wilayah administrasi Kelurahan/Desa', 'WADMKK': 'Nama wilayah administrasi Kabupaten/Kota', 'WADMPR': 'Nama wilayah administrasi Provinsi', 'WIADKC': 'Nama wilayah induk administrasi Kecamatan/Distrik', 'WIADKK': 'Nama wilayah induk administrasi Kabupaten/Kota', 'WIADPR': 'Nama wilayah induk administrasi Provinsi', 'WIADKD': 'Nama wilayah induk administrasi Kelurahan/Desa', 'UUPP': 'Referensi Peraturan', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Clipped_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'Shape_Length': 'Shape_Length', });
lyr_Clipped_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'LAYER': 'LAYER', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_dataswalayan_4.set('fieldAliases', {'NAMA SWALAYAN/SUPERMARKET': 'NAMA SWALAYAN/SUPERMARKET', 'ALAMAT': 'ALAMAT', 'Y': 'Y', 'X': 'X', 'field_5': 'field_5', });
lyr_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'ValueMap', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ARHRJL': '', 'AUTRJL': '', 'FGSRJL': '', 'JARRJL': '', 'JPARJL': '', 'KLLRJL': '', 'KONRJL': '', 'KPMSTR': '', 'LKONOF': '', 'LKSBSP': '', 'LKSRTA': '', 'LLHRRT': '', 'LOCRJL': '', 'LBRBHJ': '', 'LBRJLN': '', 'MATRJL': '', 'MEDRJL': '', 'SPCRJL': '', 'STARJL': '', 'TOLRJL': '', 'UTKRJL': '', 'VLCPRT': '', 'WLYRJL': '', 'TGL_SK': '', 'JLNLYG': '', 'KLSRJL': '', 'Shape_Length': '', });
lyr_Clipped_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'UKRSGI': '', 'LAYER': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_dataswalayan_4.set('fieldImages', {'NAMA SWALAYAN/SUPERMARKET': 'TextEdit', 'ALAMAT': 'DateTime', 'Y': 'TextEdit', 'X': 'TextEdit', 'field_5': 'TextEdit', });
lyr_RBI50K_KOTAPEKANBARU_KUGI50_20221231ADMINISTRASI_AR_KECAMATAN_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'Shape_Length': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'UKRSGI': 'no label', 'LAYER': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_dataswalayan_4.set('fieldLabels', {'NAMA SWALAYAN/SUPERMARKET': 'no label', 'ALAMAT': 'no label', 'Y': 'no label', 'X': 'no label', 'field_5': 'no label', });
lyr_dataswalayan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});