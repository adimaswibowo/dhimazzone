// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//angular.module('starter', ['ionic', 'starter.controllers'])
//var simobiModule = angular.module('starter', ['ionic', 'starter.controllers', 'ngRoute', 'pascalprecht.translate', 'ui.select','billpayControllers','uiGmapgoogle-maps', 'ngCordova','mapControllers','fundTransferControllers']);

angular.module('app.activationRegistration', ['ionic', 'activationRegistrationControllers', 'ngRoute', 'pascalprecht.translate', 'ngCordova','ngTouch'])
.run(function($ionicPlatform) {
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
})

//simobiModule.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
.config(function($stateProvider, $urlRouterProvider) {
  
$stateProvider

  /** -------------------- **/
    /** Activation           **/
    /** -------------------- **/

  .state('app.newActivation', {
    url: '/newActivation',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ar/activation/activationInput.html',
       controller: 'activationInputCtrl'
      }
    }
  })
  .state('app.activationConfirm', {
      url: '/activationConfirm',
      views: {
        'menuContent': {
         templateUrl: 'templates/template-ar/activation/activationConfirm.html',
         controller: 'activationConfirmCtrl'
        }
      }
    })
    .state('app.activationResult', {
      url: '/activationResult',
      views: {
          'menuContent': {
           templateUrl: 'templates/template-ar/activation/activationResult.html',
           controller: 'activationResultCtrl'
          }
        }
    })
  
  
  
//  .state('app.newActivation', {
//    url: '/newActivation',
//    views: {
//      'menuContent': {
//       templateUrl: 'templates/template-ar/activation/activationLogin.html',
//       controller: 'activationLoginCtrl'
//      }
//    }
//  })
//  .state('app.newActivationSimobiplus', {
//    url: '/newActivationSimobiplus',
//    views: {
//      'menuContent': {
//       templateUrl: 'templates/template-ar/activation/activationSimobiplusLogin.html',
//       controller: 'activationLoginCtrl'
//      }
//    }
//  })
//  .state('app.ftInbankResult', {
//    url: '/ftInbankResult',
//    views: {
//      'menuContent': {
//       templateUrl: 'templates/template-ft/inbank/ftInbankResult.html',
//       controller: 'ftInbankResultCtrl'
//      }
//    }
//  })

    /** -------------------------- **/
    /** Registration         **/
    /** -------------------------- **/
  .state('app.registration', {
    url: '/registration',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ar/registration/registrationInput.html',
       controller: 'registrationInputCtrl'
      }
    }
  })
  .state('app.registrationValidateToken', {
    url: '/registrationValidateToken/:t',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ar/registration/registrationValidateToken.html',
       controller: 'registrationValidateTokenCtrl'
      }
    }
  })
  .state('app.registrationActivateUser', {
    url: '/registrationActivateUser',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ar/registration/registrationActivateUser.html',
       controller: 'registrationActivateUserCtrl'
      }
    }
  })
  .state('app.registrationActivateUserConfirm', {
    url: '/registrationActivateUserConfirm',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ar/registration/registrationActivateUserConfirm.html',
       controller: 'registrationActivateUserConfirmCtrl'
      }
    }
  })
  .state('app.registrationActivateUserOk', {
    url: '/registrationActivateUserOk',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ar/registration/registrationActivateUserOk.html',
       controller: 'registrationActivateUserOkCtrl'
      }
    }
  })
  .state('app.registrationResult', {
    url: '/registrationResult',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ar/registration/registrationResult.html',
       controller: 'registrationResultCtrl'
      }
    }
  })
  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
