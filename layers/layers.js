var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Kalurahan_1 = new ol.format.GeoJSON();
var features_Batas_Kalurahan_1 = format_Batas_Kalurahan_1.readFeatures(json_Batas_Kalurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kalurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kalurahan_1.addFeatures(features_Batas_Kalurahan_1);
var lyr_Batas_Kalurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kalurahan_1, 
                style: style_Batas_Kalurahan_1,
                popuplayertitle: 'Batas_Kalurahan',
                interactive: true,
                title: '<img src="styles/legend/Batas_Kalurahan_1.png" /> Batas_Kalurahan'
            });
var format_ADMINISTRASI_LN_5K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_5K_2 = format_ADMINISTRASI_LN_5K_2.readFeatures(json_ADMINISTRASI_LN_5K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_5K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_5K_2.addFeatures(features_ADMINISTRASI_LN_5K_2);
var lyr_ADMINISTRASI_LN_5K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_5K_2, 
                style: style_ADMINISTRASI_LN_5K_2,
                popuplayertitle: 'ADMINISTRASI_LN_5K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_5K_2.png" /> ADMINISTRASI_LN_5K'
            });
var format_Jalan_Sitimulyo_3 = new ol.format.GeoJSON();
var features_Jalan_Sitimulyo_3 = format_Jalan_Sitimulyo_3.readFeatures(json_Jalan_Sitimulyo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Sitimulyo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Sitimulyo_3.addFeatures(features_Jalan_Sitimulyo_3);
var lyr_Jalan_Sitimulyo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Sitimulyo_3, 
                style: style_Jalan_Sitimulyo_3,
                popuplayertitle: 'Jalan_Sitimulyo',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Sitimulyo_3.png" /> Jalan_Sitimulyo'
            });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_Vegetasi_5 = new ol.format.GeoJSON();
var features_Vegetasi_5 = format_Vegetasi_5.readFeatures(json_Vegetasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetasi_5.addFeatures(features_Vegetasi_5);
var lyr_Vegetasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vegetasi_5, 
                style: style_Vegetasi_5,
                popuplayertitle: 'Vegetasi',
                interactive: true,
                title: '<img src="styles/legend/Vegetasi_5.png" /> Vegetasi'
            });
var format_Permukiman_6 = new ol.format.GeoJSON();
var features_Permukiman_6 = format_Permukiman_6.readFeatures(json_Permukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_6.addFeatures(features_Permukiman_6);
var lyr_Permukiman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_6, 
                style: style_Permukiman_6,
                popuplayertitle: 'Permukiman',
                interactive: true,
                title: '<img src="styles/legend/Permukiman_6.png" /> Permukiman'
            });
var format_Jalan_Sitimulyo_7 = new ol.format.GeoJSON();
var features_Jalan_Sitimulyo_7 = format_Jalan_Sitimulyo_7.readFeatures(json_Jalan_Sitimulyo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Sitimulyo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Sitimulyo_7.addFeatures(features_Jalan_Sitimulyo_7);
var lyr_Jalan_Sitimulyo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Sitimulyo_7, 
                style: style_Jalan_Sitimulyo_7,
                popuplayertitle: 'Jalan_Sitimulyo',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Sitimulyo_7.png" /> Jalan_Sitimulyo'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_Batas_Kalurahan_1.setVisible(true);lyr_ADMINISTRASI_LN_5K_2.setVisible(true);lyr_Jalan_Sitimulyo_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_Vegetasi_5.setVisible(true);lyr_Permukiman_6.setVisible(true);lyr_Jalan_Sitimulyo_7.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Batas_Kalurahan_1,lyr_ADMINISTRASI_LN_5K_2,lyr_Jalan_Sitimulyo_3,lyr_Sungai_4,lyr_Vegetasi_5,lyr_Permukiman_6,lyr_Jalan_Sitimulyo_7];
lyr_Batas_Kalurahan_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKD': 'WIADKD', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ADMINISTRASI_LN_5K_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'KARKTR': 'KARKTR', 'KLBADM': 'KLBADM', 'PJGBTS': 'PJGBTS', 'STSBTS': 'STSBTS', 'TIPLOK': 'TIPLOK', 'TIPTBT': 'TIPTBT', 'UUPP': 'UUPP', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_Sitimulyo_3.set('fieldAliases', {'FID_jalan_': 'FID_jalan_', 'FID_Jalan1': 'FID_Jalan1', 'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'COLOR': 'COLOR', 'FID_Bantul': 'FID_Bantul', 'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'FID_Bant_1': 'FID_Bant_1', 'OBJECTID_1': 'OBJECTID_1', 'PROVINSI_1': 'PROVINSI_1', 'KODE_KAB_1': 'KODE_KAB_1', 'SHAPE_LE_2': 'SHAPE_LE_2', 'KODE_PRO_1': 'KODE_PRO_1', 'KABUPATE_1': 'KABUPATE_1', 'AREA_1': 'AREA_1', 'PERIMETE_1': 'PERIMETE_1', 'HECTARES_1': 'HECTARES_1', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_Sungai_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Vegetasi_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JNSTCP': 'JNSTCP', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JNSSMK': 'JNSSMK', 'JNSSWH': 'JNSSWH', 'TNMSWH': 'TNMSWH', 'JNSKBNSMS': 'JNSKBNSMS', 'JNSKBNTHN': 'JNSKBNTHN', 'JNSSLK': 'JNSSLK', 'TKTHLT': 'TKTHLT', 'TKTHLR': 'TKTHLR', 'JNSPDG': 'JNSPDG', 'JHTNM': 'JHTNM', });
lyr_Permukiman_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_Sitimulyo_7.set('fieldAliases', {'FID_jalan_': 'FID_jalan_', 'FID_Jalan1': 'FID_Jalan1', 'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'COLOR': 'COLOR', 'FID_Bantul': 'FID_Bantul', 'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'FID_Bant_1': 'FID_Bant_1', 'OBJECTID_1': 'OBJECTID_1', 'PROVINSI_1': 'PROVINSI_1', 'KODE_KAB_1': 'KODE_KAB_1', 'SHAPE_LE_2': 'SHAPE_LE_2', 'KODE_PRO_1': 'KODE_PRO_1', 'KABUPATE_1': 'KABUPATE_1', 'AREA_1': 'AREA_1', 'PERIMETE_1': 'PERIMETE_1', 'HECTARES_1': 'HECTARES_1', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_Batas_Kalurahan_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKD': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_ADMINISTRASI_LN_5K_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADMIN1': '', 'ADMIN2': '', 'KARKTR': '', 'KLBADM': '', 'PJGBTS': '', 'STSBTS': '', 'TIPLOK': '', 'TIPTBT': '', 'UUPP': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAKLD1': '', 'WAKLD2': '', 'WAPRO1': '', 'WAPRO2': '', 'SHAPE_Leng': '', });
lyr_Jalan_Sitimulyo_3.set('fieldImages', {'FID_jalan_': '', 'FID_Jalan1': '', 'ENTITY': '', 'LAYER': '', 'ELEVATION': '', 'THICKNESS': '', 'COLOR': '', 'FID_Bantul': '', 'OBJECTID': '', 'PROVINSI': '', 'KODE_KAB': '', 'SHAPE_LENG': '', 'KODE_PROP': '', 'KABUPATEN': '', 'AREA': '', 'PERIMETER': '', 'HECTARES': '', 'Shape_Le_1': '', 'Shape_Area': '', 'FID_Bant_1': '', 'OBJECTID_1': '', 'PROVINSI_1': '', 'KODE_KAB_1': '', 'SHAPE_LE_2': '', 'KODE_PRO_1': '', 'KABUPATE_1': '', 'AREA_1': '', 'PERIMETE_1': '', 'HECTARES_1': '', 'Shape_Le_3': '', 'Shape_Ar_1': '', });
lyr_Sungai_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'UKRSGI': '', 'LAYER': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Vegetasi_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JNSTCP': '', 'LAYER': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'JNSSMK': '', 'JNSSWH': '', 'TNMSWH': '', 'JNSKBNSMS': '', 'JNSKBNTHN': '', 'JNSSLK': '', 'TKTHLT': '', 'TKTHLR': '', 'JNSPDG': '', 'JHTNM': '', });
lyr_Permukiman_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'LAYER': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Jalan_Sitimulyo_7.set('fieldImages', {'FID_jalan_': '', 'FID_Jalan1': '', 'ENTITY': '', 'LAYER': '', 'ELEVATION': '', 'THICKNESS': '', 'COLOR': '', 'FID_Bantul': '', 'OBJECTID': '', 'PROVINSI': '', 'KODE_KAB': '', 'SHAPE_LENG': '', 'KODE_PROP': '', 'KABUPATEN': '', 'AREA': '', 'PERIMETER': '', 'HECTARES': '', 'Shape_Le_1': '', 'Shape_Area': '', 'FID_Bant_1': '', 'OBJECTID_1': '', 'PROVINSI_1': '', 'KODE_KAB_1': '', 'SHAPE_LE_2': '', 'KODE_PRO_1': '', 'KABUPATE_1': '', 'AREA_1': '', 'PERIMETE_1': '', 'HECTARES_1': '', 'Shape_Le_3': '', 'Shape_Ar_1': '', });
lyr_Batas_Kalurahan_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKD': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_ADMINISTRASI_LN_5K_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'KARKTR': 'no label', 'KLBADM': 'no label', 'PJGBTS': 'no label', 'STSBTS': 'no label', 'TIPLOK': 'no label', 'TIPTBT': 'no label', 'UUPP': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_Sitimulyo_3.set('fieldLabels', {'FID_jalan_': 'no label', 'FID_Jalan1': 'no label', 'ENTITY': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'COLOR': 'no label', 'FID_Bantul': 'no label', 'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KODE_KAB': 'no label', 'SHAPE_LENG': 'no label', 'KODE_PROP': 'no label', 'KABUPATEN': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'FID_Bant_1': 'no label', 'OBJECTID_1': 'no label', 'PROVINSI_1': 'no label', 'KODE_KAB_1': 'no label', 'SHAPE_LE_2': 'no label', 'KODE_PRO_1': 'no label', 'KABUPATE_1': 'no label', 'AREA_1': 'no label', 'PERIMETE_1': 'no label', 'HECTARES_1': 'no label', 'Shape_Le_3': 'no label', 'Shape_Ar_1': 'no label', });
lyr_Sungai_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'UKRSGI': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Vegetasi_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JNSTCP': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'JNSSMK': 'no label', 'JNSSWH': 'no label', 'TNMSWH': 'no label', 'JNSKBNSMS': 'no label', 'JNSKBNTHN': 'no label', 'JNSSLK': 'no label', 'TKTHLT': 'no label', 'TKTHLR': 'no label', 'JNSPDG': 'no label', 'JHTNM': 'no label', });
lyr_Permukiman_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_Sitimulyo_7.set('fieldLabels', {'FID_jalan_': 'no label', 'FID_Jalan1': 'no label', 'ENTITY': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', 'THICKNESS': 'no label', 'COLOR': 'no label', 'FID_Bantul': 'no label', 'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KODE_KAB': 'no label', 'SHAPE_LENG': 'no label', 'KODE_PROP': 'no label', 'KABUPATEN': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'FID_Bant_1': 'no label', 'OBJECTID_1': 'no label', 'PROVINSI_1': 'no label', 'KODE_KAB_1': 'no label', 'SHAPE_LE_2': 'no label', 'KODE_PRO_1': 'no label', 'KABUPATE_1': 'no label', 'AREA_1': 'no label', 'PERIMETE_1': 'no label', 'HECTARES_1': 'no label', 'Shape_Le_3': 'no label', 'Shape_Ar_1': 'no label', });
lyr_Jalan_Sitimulyo_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});