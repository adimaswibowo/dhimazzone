angular.module('app.inAppBrowser', ['ionic', 'inAppBrowser.controllers', 'ngRoute', 'pascalprecht.translate','ngCordova','ngTouch'])
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

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

.state('app.inAppBrowser', {
  url: '/inAppBrowser',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-ia/inAppBrowser.html',
     controller: 'InAppBrowserCtrl'
    }
  }
})

.state('app.onlineAccountRegistration', {
  url: '/onlineAccountRegistration',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-ia/onlineAccountRegistration.html',
     controller: 'OnlineAccountRegistrationCtrl'
    }
  }
})

.state('app.events', {
  url: '/events',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-ev/events.html',
     controller: 'EventsCtrl'
    }
  }
})
  
;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
