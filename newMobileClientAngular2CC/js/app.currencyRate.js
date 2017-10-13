angular.module('app.currencyRate', ['ionic', 'currencyRate.controllers', 'ngRoute', 'pascalprecht.translate'])
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

  //Currency Rate
  .state('app.currencyRate', {
    url: '/currencyRate',
    views: {
      'menuContent': {
        templateUrl: 'templates/template-cr/currencyRate.html',
        controller: 'CurrencyRateCtrl'
      }
    }
  })
  
  //Portfolio Inquiry Result Sekuritas  
//  .state('app.portfolioInquiryResultSekuritas', {
//    url: '/portfolioInquiryResult/mutualFund/:type',
//    views: {
//      'menuContent': {
//        templateUrl: 'angular/templates/template-pwm/inquiryPortfolio/portfolioWealthManagementInquiryResult.html',
//        controller: 'PortfolioWealthManagementInquiryResultCtrl'
//      }
//    }
//  })
  ; 

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
