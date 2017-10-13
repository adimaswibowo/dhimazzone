
//var simobiModule = angular.module('starter', ['ionic', 'starter.controllers', 'ngRoute', 'pascalprecht.translate', 'ui.select','billpayControllers','uiGmapgoogle-maps', 'ngCordova','mapControllers','fundTransferControllers']);

angular.module('app.atmLocator', ['ionic', 'atmLocatorControllers', 'ngRoute', 'pascalprecht.translate','ngCordova','uiGmapgoogle-maps','ngTouch'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//simobiModule.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
uiGmapGoogleMapApiProvider.configure({
	 key: 'AIzaSyDFberVyWaVDCxFLaRxYLxUuSd4uPb_I2s',
	 v: '3.17',
	 libraries: 'weather,geometry,visualization',
	 language: 'en',
	 sensor: 'false',
});
	
$stateProvider

 

   //---Start Map Route---
  .state('app.mapLocator', {
	    url: '/mapLocator',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-al/mapLocator.html',
	       controller: 'AtmMapCtrl'
	      }
	    }
	  })
	  
  .state('app.atmLocator', {
	    url: '/atmLocator',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-al/provinceMenu.html',
	       controller: 'showProvinceCtrl'
	      }
	    }
	  })
	  .state('app.showCity', {
	    url: '/showCity',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-al/cityMenu.html',
	       controller: 'showCityCtrl'
	      }
	    }
	  })

  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
