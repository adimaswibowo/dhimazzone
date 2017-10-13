// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//angular.module('starter', ['ionic', 'starter.controllers'])
//var simobiModule = angular.module('starter', ['ionic', 'starter.controllers', 'ngRoute', 'pascalprecht.translate', 'ui.select','billpayControllers','uiGmapgoogle-maps', 'ngCordova','mapControllers','fundTransferControllers']);

angular.module('app.fundTransfer', ['ionic', 'fundTransferControllers', 'ngRoute', 'pascalprecht.translate', 'ngCordova','ngTouch'])
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

  // Fund Transfer
  // ---Start FundTransfer Route---
	/** -------------------- **/
    /** Fund Transfer Inbank **/
    /** -------------------- **/
	.state('app.ftInbankInput', {
	  url: '/ftInbankInput',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/inbank/ftInbankInput.html',
	     controller: 'ftInbankInputCtrl'
	    }
	  }
	})
	.state('app.ftInbankConfirm', {
	  url: '/ftInbankConfirm',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/inbank/ftInbankConfirm.html',
	     controller: 'ftInbankConfirmCtrl'
	    }
	  }
	})
	.state('app.ftInbankResult', {
	  url: '/ftInbankResult',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/inbank/ftInbankResult.html',
	     controller: 'ftInbankResultCtrl'
	    }
	  }
	})

    /** -------------------------- **/
    /** Fund Transfer ExternalBank **/
    /** -------------------------- **/
	.state('app.ftExternalBankInput', {
	  url: '/ftExternalBankInput',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/externalBank/ftExternalBankInput.html',
	     controller: 'ftExternalBankInputCtrl'
	    }
	  }
	})
	.state('app.ftExternalBankConfirm', {
	  url: '/ftExternalBankConfirm',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/externalBank/ftExternalBankConfirm.html',
	     controller: 'ftExternalBankConfirmCtrl'
	    }
	  }
	})
	.state('app.ftExternalBankResult', {
	  url: '/ftExternalBankResult',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/externalBank/ftExternalBankResult.html',
	     controller: 'ftExternalBankResultCtrl'
	    }
	  }
	})
	
	
	/** -------------------- **/
    /** Fund Transfer Uangku **/
    /** -------------------- **/
	.state('app.ftUangkuInput', {
	  url: '/ftUangkuInput',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/uangku/ftUangkuInput.html',
	     controller: 'ftInbankInputCtrl'
	    }
	  }
	})
//	.state('app.ftUangkuConfirm', {
//	  url: '/ftUangkuConfirm',
//	  views: {
//	    'menuContent': {
//	     templateUrl: 'templates/template-ft/uangku/ftUangkuConfirm.html',
//	     controller: 'ftUangkuConfirmCtrl'
//	    }
//	  }
//	})
//	.state('app.ftUangkuResult', {
//	  url: '/ftUangkuResult',
//	  views: {
//	    'menuContent': {
//	     templateUrl: 'templates/template-ft/uangku/ftUangkuResult.html',
//	     controller: 'ftUangkuResultCtrl'
//	    }
//	  }
//	})
    
    /** ----------------------- **/
    /** Add TransferList Inbank **/
    /** ----------------------- **/
	.state('app.addInbankTransferListInput', {
	  url: '/addInbankTransferListInput',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addInbankTransferList/addInbankTransferListInput.html',
	     controller: 'addInbankTransferListInputCtrl'
	    }
	  }
	})
	.state('app.addInbankTransferListConfirm', {
	  url: '/addInbankTransferListConfirm',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addInbankTransferList/addInbankTransferListConfirm.html',
	     controller: 'addInbankTransferListConfirmCtrl'
	    }
	  }
	})
	.state('app.addInbankTransferListResult', {
	  url: '/addInbankTransferListResult',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addInbankTransferList/addInbankTransferListResult.html',
	     controller: 'addInbankTransferListResultCtrl'
	    }
	  }
	})
    
    /** ----------------------------- **/
    /** Add TransferList ExternalBank **/
    /** ----------------------------- **/
	.state('app.addExternalBankTransferListInput', {
	  url: '/addExternalBankTransferListInput',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addExternalBankTransferList/addExternalBankTransferListInput.html',
	     controller: 'addExternalBankTransferListInputCtrl'
	    }
	  }
	})
	.state('app.addExternalBankTransferListConfirm', {
	  url: '/addExternalBankTransferListConfirm',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addExternalBankTransferList/addExternalBankTransferListConfirm.html',
	     controller: 'addExternalBankTransferListConfirmCtrl'
	    }
	  }
	})
	.state('app.addExternalBankTransferListResult', {
	  url: '/addExternalBankTransferListResult',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addExternalBankTransferList/addExternalBankTransferListResult.html',
	     controller: 'addExternalBankTransferListResultCtrl'
	    }
	  }
	})
	
	
    /** ----------------------- **/
    /** Add TransferList Uangku **/
    /** ----------------------- **/
	.state('app.addUangkuTransferListInput', {
	  url: '/addUangkuTransferListInput',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addUangkuTransferList/addUangkuTransferListInput.html',
	     controller: 'addInbankTransferListInputCtrl'
	    }
	  }
	})
	.state('app.addUangkuTransferListConfirm', {
	  url: '/addUangkuTransferListConfirm',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addUangkuTransferList/addUangkuTransferListConfirm.html',
	     controller: 'addUangkuTransferListConfirmCtrl'
	    }
	  }
	})
	.state('app.addUangkuTransferListResult', {
	  url: '/addUangkuTransferListResult',
	  views: {
	    'menuContent': {
	     templateUrl: 'templates/template-ft/addUangkuTransferList/addUangkuTransferListResult.html',
	     controller: 'addUangkuTransferListResultCtrl'
	    }
	  }
	})
	// ---End FundTransfer Route---
  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
