

//var billpaymentModule = angular.module('billpayApp', ['pascalprecht.translate','ngSanitize', 'ui.select','ngRoute','billpayControllers']);
angular.module('app.account', ['accountControllers','ngTouch'])
.run(function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
		//alert('Horeeeee...');
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
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

		/** Account Balance **/
  .state('app.acc_balance', {
	    url: '/acc_balance',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/balance/inquiryBalanceInput.html',
	        controller: 'inquiryBalanceInputCtrlCC'
	      }
	    }
	  })
	  
  .state('app.inquiryBalanceResult', {
	    url: '/inquiryBalanceResult',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/balance/inquiryBalanceResult.html',
	       controller: 'inquiryBalanceResultCtrlCC'
	      }
	    }
	  })
	  
        /** --------------- **/
	    /** Account History **/

   .state('app.acc_history', {
	    url: '/acc_history',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/history/historyInput.html',
	       controller: 'historyInputCtrl'
	      }
	    }
	  })
	  
  .state('app.historyResult', {
	    url: '/historyResult',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/history/historyResult.html',
	       controller: 'historyResultCtrl'
	      }
	    }
	  })
        /** ----------------- **/
        /** Account Summary **/
   .state('app.account_summary', {
	    url: '/account_summary',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/summary/accountSummary.html',
	       controller: 'summaryCtrl'
	      }
	    }
	  })
	  
  .state('app.accountSummaryDetail', {
	    url: '/accountSummaryDetail',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/summary/accountSummaryDetail.html',
	       controller: 'summaryDetailCtrl'
	      }
	    }
	  })
	  
   .state('app.accountSummaryDetailCC', {
	    url: '/accountSummaryDetailCC',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/summary/accountSummaryDetailCC.html',
	       controller: 'summaryDetailCreditCardCtrl'
	      }
	    }
	  })
	  
   .state('app.accountCCTransactionDetail', {
    url: '/accountCCTransactionDetail',
    views: {
      'menuContent': {
       templateUrl: 'templates/template-ac/summary/accountTransactionCCDetail.html',
       controller: 'ccTransactionDetailCtrl'
      }
    }
  })
        /** ----------------- **/
        /** Account Statement **/
 .state('app.ccSelectCardStatement', {
	    url: '/ccSelectCardStatement',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/statement/ccSelectCardStatement.html',
	       controller: 'statementCardCtrlCC'
	      }
	    }
	  })

  .state('app.acc_statement', {
	    url: '/acc_statement',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/statement/statementInput.html',
	       controller: 'statementInputCtrlCC'
	      }
	    }
	  })
	  
  .state('app.statementResult', {
	    url: '/statementResult',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/statement/statementResult.html',
	       controller: 'statementResultCtrl'
	      }
	    }
	  })
  .state('app.statementResultDetail', {
	    url: '/statementResultDetail',
	    views: {
	      'menuContent': {
	       templateUrl: 'templates/template-ac/statement/statementResultDetail.html',
	       controller: 'statementResultDetailCtrl'
	      }
	    }
	  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
