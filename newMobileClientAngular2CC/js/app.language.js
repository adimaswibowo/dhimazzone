
angular.module('app.language', ['ionic', 'language.controllers', 'ngRoute', 'pascalprecht.translate','ngCordova','ngTouch'])
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
    .state('app.chaLangThemes', {
    url: '/chaLangThemes',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-lang/language.html',
       controller: 'LanguageCtrl'
      }
    }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
