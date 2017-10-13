
//var simobiModule = angular.module('starter', ['ionic', 'starter.controllers', 'ngRoute', 'pascalprecht.translate', 'ui.select','billpayControllers','uiGmapgoogle-maps', 'ngCordova','mapControllers','fundTransferControllers']);

angular.module('app.bankBranch', ['ionic', 'bankBranchLocationControllers', 'ngRoute', 'pascalprecht.translate','ngCordova','uiGmapgoogle-maps','ngTouch'])
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
  .state('app.branchLocator', {
	    url: '/branchLocator',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-bl/mapLocator.html',
	       controller: 'BranchLocationMapCtrl'
	      }
	    }
	  })
	  
  .state('app.bankBranchLocation', {
	    url: '/bankBranchLocation',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-bl/provinceMenu.html',
	       controller: 'showProvinceBranchCtrl'
	      }
	    }
	  })
	  .state('app.showCityBranch', {
	    url: '/showCityBranch',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-bl/cityMenu.html',
	       controller: 'showCityBranchCtrl'
	      }
	    }
	  })

  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
