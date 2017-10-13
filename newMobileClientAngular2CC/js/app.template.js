// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//angular.module('starter', ['ionic', 'starter.controllers'])
//var simobiModule = angular.module('starter', ['ionic', 'starter.controllers', 'ngRoute', 'pascalprecht.translate', 'ui.select','billpayControllers','uiGmapgoogle-maps', 'ngCordova','mapControllers','fundTransferControllers']);

angular.module('app.template', ['ionic', 'ionic.service.core', 'app.controllers', 'ngRoute', 'pascalprecht.translate','ngCordova','ngTouch'])
.run(function($ionicPlatform, $state, $ionicPopup, $ionicHistory, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $ionicPlatform.registerBackButtonAction(function(event) {
    $rootScope.showLogout = false;

    var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));

    if ($state.is('app.main')) {
        $ionicPopup.confirm({
          title: 'Warning',
          template: 'are you sure you want to exit from AMoBile ?'
        }).then(function(res) {
          if (res) {
            ionic.Platform.exitApp();
          }
        })


    //FT
      }else if ( ($state.is('app.ftInbankInput')) || ($state.is('app.ftExternalBankInput')) ) {
          $state.go('app.genericChildMenu');
      }else if ( ($state.is('app.ftInbankConfirm')) || ($state.is('app.ftInbankResult')) || ($state.is('app.addInbankTransferListInput')) ) {
    	  if ($rootScope.uangkuFlag != null){
	        	$state.go('app.ftUangkuInput');
	      } else {
	        	$state.go('app.ftInbankInput');
	      }
      }else if ( ($state.is('app.ftExternalBankConfirm')) || ($state.is('app.ftExternalBankResult')) || ($state.is('app.addExternalBankTransferListInput')) ) {
          $state.go('app.ftExternalBankInput');

      //Add Trf List
      }else if ( ($state.is('app.addInbankTransferListConfirm')) || ($state.is('app.addInbankTransferListResult')) ) {
          $state.go('app.addInbankTransferListInput');
      }else if ( ($state.is('app.addExternalBankTransferListConfirm')) || ($state.is('app.addExternalBankTransferListResult')) ) {
          $state.go('app.addExternalBankTransferListInput');

    //Billpay
      }else if ($state.is('app.payPurchase')) {
          $state.go('app.main');
      }else if ( ($state.is('app.billerType1')) || ($state.is('app.billerType2'))|| ($state.is('app.billerType3')) || ($state.is('app.billerType4')) || ($state.is('app.billerType5')) || ($state.is('app.billerType6')) || ($state.is('app.billerType7')) || ($state.is('app.billerType8')) || ($state.is('app.billerType9')) ) {
          $state.go('app.payPurchase');
      }else if ( ($state.is('app.billpaymentConfirmation')) || ($state.is('app.billpaymentResult')) ) {
          $state.go('app.payPurchase');

      }else if ( ($state.is('app.chaLangThemes')) || ($state.is('app.changePassword'))) {
        if (userStorage == "" || userStorage == null || userStorage == "undefined"){
            $state.go('app.main');
        }else{
            $state.go('app.genericChildMenu');
        }
      }else if ($state.is('app.genericChildMenu')) {
          $state.go('app.main');
      }else if ($state.is('app.inAppBrowser')) {
          try {
            document.getElementById("myframe").contentWindow.backMenuInApp();
          } catch(e) {
                try {
                  $backView = $ionicHistory.backView();
                  $backView.go();
              } catch(e) {
                  $state.go('app.main');
              }
            }
      }else{
          //$ionicHistory.goBack();
          try {
            $rootScope.showLogout = false;
            $backView = $ionicHistory.backView();
            $backView.go();
        } catch(e) {
            $state.go('app.main');
        }
      }

  }, 100);
})

//simobiModule.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
//uiGmapGoogleMapApiProvider.configure({
//	 key: 'AIzaSyDFberVyWaVDCxFLaRxYLxUuSd4uPb_I2s',
//	 v: '3.17',
//	 libraries: 'weather,geometry,visualization',
//	 language: 'en',
//	 sensor: 'false',
//});
	
$stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sideMenu.html',
    controller: 'AppCtrl'
  })

   .state('app.main', {
	 url: '/main',
	 views: {
	   'menuContent': {
	     templateUrl: 'templates/main.html',
	     controller: 'MainCtrl'
	   }
	 }
   })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  
  .state('app.contactUs', {
    url: '/contactUs',
    views: {
      'menuContent': {
        templateUrl: 'templates/contactUs.html',
        controller: 'ContactUsCtrl'
      }
    }
  })
  
  .state('app.mailUs', {
    url: '/mailUs',
    views: {
      'menuContent': {
        templateUrl: 'templates/mailUs.html',
        controller: 'ContactUsCtrl'
      }
    }
  })
  
  .state('app.notif', {
    url: '/notif',
    views: {
      'menuContent': {
        templateUrl: 'templates/notif.html',
        controller: 'NotifCtrl'
      }
    }
  })
  
  .state('app.notifDetail', {
    url: '/notif/:notifTimeMilis',
    views: {
      'menuContent': {
        templateUrl: 'templates/notifDetail.html',
        controller: 'NotifDetailCtrl'
      }
    }
  })

  .state('app.updateApps', {
    url: '/updateApps',
    views: {
      'menuContent': {
        templateUrl: 'templates/updateApps.html',
        controller: 'UpdateAppsCtrl'
      }
    }
  })

  .state('app.genericMessage', {
    url: '/genericMessage',
    views: {
      'menuContent': {
        templateUrl: 'templates/genericMessage.html',
        controller: 'genericMessageCtrl'
      }
    }
  })

  .state('app.changePassword', {
    url: '/changePassword',
    views: {
      'menuContent': {
        templateUrl: 'templates/changePassword.html',
        controller: 'ChangePasswordCtrl'
      }
    }
  })
  

  .state('app.changePasswordResult', {
    url: '/changePasswordResult',
    views: {
      'menuContent': {
        templateUrl: 'templates/changePasswordResult.html',
        controller: 'ChangePasswordResultCtrl'
      }
    }
  })
  

  .state('app.changePasswordExpired', {
    url: '/changePasswordExpired',
    views: {
      'menuContent': {
        templateUrl: 'templates/changePasswordExpired.html',
        controller: 'ChangePasswordExpiredCtrl'
      }
    }
  })


  .state('app.changePasswordExpiredResult', {
      url: '/changePasswordExpiredResult',
      views: {
        'menuContent': {
          templateUrl: 'templates/changePasswordExpiredResult.html',
          controller: 'changePasswordExpiredResultCtrl'
        }
      }
    })

  
  .state('app.customerPage', {
    url: '/customerPage',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      }
    }
  })
  
  .state('app.genericChildMenu', {
    url: '/genericChildMenu',
    views: {
      'menuContent': {
        templateUrl: 'templates/genericChildMenu.html',
        controller: 'GenericChildMenuCtrl'
      }
    }
  })
  
  .state('app.genericChildMenuLevel2', {
    url: '/genericChildMenuLevel2',
    views: {
      'menuContent': {
        templateUrl: 'templates/genericChildMenu.html',
        controller: 'GenericChildMenuCtrl'
      }
    }
  })
  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
  
  $ionicConfigProvider.navBar.alignTitle('center');
});
