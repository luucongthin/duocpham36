(function () {
    'use strict';
    // DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE
    angular
        .module('footballBeApp')
        .constant('VERSION', "0.0.1-SNAPSHOT")
        .constant('DEBUG_INFO_ENABLED', true)
        .constant('BUILD_TIMESTAMP', "")
        .constant('KEY_GOOGLE_MAP_API', "AIzaSyCn1McjKZGgwkBbK9Kh64f4NmhnPM7MeS8")
        .constant('API_CONFIG', {
	"URL_UPLOAD_GENERAL": "http://localhost:9696/content/uploads/general/",
	"URL_UPLOAD_HOTEL": "http://localhost:9696/content/uploads/hotel/",
	"DEFAULT_LANG": "en",
	"DEFAULT_CURRENCY": "USD"
})
;
})();