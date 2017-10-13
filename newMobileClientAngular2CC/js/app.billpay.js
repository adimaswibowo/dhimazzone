
angular.module('app.billpay', ['ionic', 'billpay.controllers', 'ngRoute', 'pascalprecht.translate','ngCordova','ngTouch'])
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
  //---Start Billpayment Route---
    .state('app.payPurchase', {
    url: '/payPurchase',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-bp/billpaymentInput.html',
       controller: 'BillpayCtrl'
      }
    }
  })
  
  .state('app.billerType1', {
  url: '/billpayment/billerType1/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType1.html',
     controller: 'BillpayDetailType1Ctrl'
    }
  }
})
  
  .state('app.billerType2', {
  url: '/billpayment/billerType2/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType2.html',
     controller: 'BillpayDetailType2Ctrl'
    }
  }
})
  
  .state('app.billerType3', {
  url: '/billpayment/billerType3/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType3.html',
     controller: 'BillpayDetailType3Ctrl'
    }
  }
})
  
  .state('app.billerType4', {
  url: '/billpayment/billerType4/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType4.html',
     controller: 'BillpayDetailType4Ctrl'
    }
  }
})
  
  .state('app.billerType5', {
  url: '/billpayment/billerType5/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType5.html',
     controller: 'BillpayDetailType5Ctrl'
    }
  }
})
  
  .state('app.billerType6', {
  url: '/billpayment/billerType6/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType6.html',
     controller: 'BillpayDetailType6Ctrl'
    }
  }
})
  
  .state('app.billerType7', {
  url: '/billpayment/billerType7/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType7.html',
     controller: 'BillpayDetailType7Ctrl'
    }
  }
})
  
  .state('app.billerType8', {
  url: '/billpayment/billerType8/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType8.html',
     controller: 'BillpayDetailType8Ctrl'
    }
  }
})  


  .state('app.billerType9', {
  url: '/billpayment/billerType9/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType9.html',
     controller: 'BillpayDetailType9Ctrl'
    }
  }
})  

  .state('app.billerType10', {
  url: '/billpayment/billerType10/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billerType10.html',
     controller: 'BillpayDetailType10Ctrl'
    }
  }
})  
  
  .state('app.billpaymentConfirmation', {
  url: '/billpaymentConfirmation/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billpaymentConfirm.html',
     controller: 'BillpaymentConfirmCtrl'
    }
  }
})
	  
  .state('app.billpaymentResult', {
  url: '/billpaymentResult/:billerId',
  views: {
    'menuContent': {
     templateUrl: 'templates/template-bp/billpaymentResult.html',
     controller: 'BillpaymentResultCtrl'
    }
  }
})
  //---End Billpayment Route---
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
