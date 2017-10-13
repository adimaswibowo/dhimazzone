angular.module('app.creditCard', ['creditCard.controllers','ngTouch'])
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

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

  /** ccBlocking **/
  .state('app.ccBlockingInput', {
      url: '/ccBlockingInput',
      views: {
        'menuContent': {
         templateUrl: 'templates/template-cc/ccBlocking/ccBlockingInput.html',
         controller: 'ccBlockingInputCtrl'
        }
      }
    })
    
    .state('app.ccBlockingDetail', {
        url: '/ccBlockingDetail',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccBlocking/ccBlockingDetail.html',
           controller: 'ccBlockingDetailCtrl'
          }
        }
      })

     .state('app.ccBlockingConfirm', {
        url: '/ccBlockingConfirm',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccBlocking/ccBlockingConfirm.html',
           controller: 'ccBlockingConfirmCtrl'
          }
        }
      })
    
  .state('app.ccBlockingResult', {
      url: '/ccBlockingResult',
      views: {
        'menuContent': {
         templateUrl: 'templates/template-cc/ccBlocking/ccBlockingResult.html',
         controller: 'ccBlockingResultCtrl'
        }
      }
    })
    
/** --------------- **/
/** ccActivation **/
.state('app.ccActivationInput', {
      url: '/ccActivationInput',
      views: {
        'menuContent': {
         templateUrl: 'templates/template-cc/ccActivation/ccActivationInput.html',
         controller: 'ccActivationInputCtrl'
        }
      }
    })
    
    .state('app.ccActivationDetail', {
        url: '/ccActivationDetail',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccActivation/ccActivationDetail.html',
           controller: 'ccActivationDetailCtrl'
          }
        }
      })
    
    .state('app.ccActivationConfirm', {
        url: '/ccActivationConfirm',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccActivation/ccActivationConfirm.html',
           controller: 'ccActivationConfirmCtrl'
          }
        }
      })

  .state('app.ccActivationResult', {
      url: '/ccActivationResult',
      views: {
        'menuContent': {
         templateUrl: 'templates/template-cc/ccActivation/ccActivationResult.html',
         controller: 'ccActivationResultCtrl'
        }
      }
    })
    
    
  /** --------------- **/
  /** ccCallCS **/
  .state('app.ccCallCs', {
      url: '/ccCallCs',
      views: {
        'menuContent': {
         templateUrl: 'templates/template-cc/ccCallCs/ccCallCs.html',
         controller: 'ccCallCsCtrl'
        }
      }
    })
    
    
  /** --------------- **/
  /** ccLimit **/
  .state('app.ccLimitInput', {
        url: '/ccLimitInput',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccLimit/ccLimitInput.html',
           controller: 'ccLimitInputCtrl'
          }
        }
      })

  .state('app.acc_balance_cc', {
        url: '/acc_balance_cc',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccLimit/ccLimitInput.html',
           controller: 'ccLimitInputCtrl'
          }
        }
      })


      
    .state('app.ccLimitDetail', {
        url: '/ccLimitDetail',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccLimit/ccLimitDetail.html',
           controller: 'ccLimitDetailCtrl'
          }
        }
      })
      
    .state('app.ccLimitConfirm', {
        url: '/ccLimitConfirm',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccLimit/ccLimitConfirm.html',
           controller: 'ccLimitConfirmCtrl'
          }
        }
      })
      
      .state('app.ccLimitChangeRequest', {
        url: '/ccLimitChangeRequest',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccLimit/ccLimitChangeRequest.html',
           controller: 'ccLimitChangeRequestCtrl'
          }
        }
      })
      
      .state('app.ccLimitResult', {
        url: '/ccLimitResult',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccLimit/ccLimitResult.html',
           controller: 'ccLimitResultCtrl'
          }
        }
      })

      // .state('app.ccStatementInput', {
      //   url: '/ccStatementInput',
      //   views: {
      //     'menuContent': {
      //      templateUrl: 'templates/template-ac/balance/statementInput.html',
      //      controller: 'ccStamementInput'
      //     }
      //   }
      // })
    

      
// International Transaction
// -------------------------
    .state('app.ccIntlTrxInput', {
        url: '/ccIntlTrxInput',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccIntlTrx/ccIntlTrxInput.html',
           controller: 'ccIntlTrxInputCtrl'
          }
        }
      })
      
    .state('app.ccIntlTrxDetail', {
        url: '/ccIntlTrxDetail',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccIntlTrx/ccIntlTrxDetail.html',
           controller: 'ccIntlTrxDetailCtrl'
          }
        }
      })
      
      .state('app.ccIntlTrxConfirm', {
        url: '/ccIntlTrxConfirm',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccIntlTrx/ccIntlTrxConfirm.html',
           controller: 'ccIntlTrxConfirmCtrl'
          }
        }
      })
      
      .state('app.ccIntlTrxResult', {
        url: '/ccIntlTrxResult',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccIntlTrx/ccIntlTrxResult.html',
           controller: 'ccIntlTrxResultCtrl'
          }
        }
      })
      
      
      
      
  /** ccBlocking DESKTOP**/
  .state('app.ccBlockingInputDesktop', {
      url: '/ccBlockingInputDesktop',
      views: {
        'menuContent': {
         templateUrl: 'templates-desktop/template-cc/ccBlocking/ccBlockingInput.html',
         controller: 'ccBlockingInputCtrl'
        }
      }
    })
    
    
    
    /** Change PIN **/
  .state('app.changePin', {
      url: '/changePin',
      views: {
        'menuContent': {
          templateUrl: 'templates/template-cc/changePin/changePin.html',
          controller: 'ChangePinCtrl'
        }
      }
    })
    
    .state('app.changePinDetail', {
      url: '/changePinDetail',
      views: {
        'menuContent': {
          templateUrl: 'templates/template-cc/changePin/changePinDetail.html',
          controller: 'ChangePinDetailCtrl'
        }
      }
    })
    
    .state('app.changePinResult', {
        url: '/changePinResult',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/changePin/changePinResult.html',
           controller: 'ChangePinResultCtrl'
          }
        }
      })


    /** PIN Reissue **/
    .state('app.ccPinReissueInput', {
        url: '/ccPinReissueInput',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccPinReissue/ccPinReissueInput.html',
           controller: 'PinReissueInputCtrl'
          }
        }
      })

    .state('app.ccPinReissueConfirm', {
        url: '/ccPinReissueConfirm',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccPinReissue/ccPinReissueConfirm.html',
           controller: 'PinReissueConfirmCtrl'
          }
        }
      })

    .state('app.ccPinReissueResult', {
        url: '/ccPinReissueResult',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccPinReissue/ccPinReissueResult.html',
           controller: 'PinReissueResultCtrl'
          }
        }
      })

    /** ccResetPinCount   **/
      .state('app.ccResetPinCountInput', {
        url: '/ccResetPinCountInput',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccResetPinCount/ccResetPinCountInput.html',
           controller: 'ccResetPinCountInputCtrl'
          }
        }
      })

       .state('app.ccResetPinCountConfirm', {
        url: '/ccResetPinCountConfirm',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccResetPinCount/ccResetPinCountConfirm.html',
           controller: 'ccResetPinCountConfirmCtrl'
          }
        }
      })

        .state('app.ccResetPinCountResult', {
        url: '/ccResetPinCountResult',
        views: {
          'menuContent': {
           templateUrl: 'templates/template-cc/ccResetPinCount/ccResetPinCountResult.html',
           controller: 'ccResetPinCountResultCtrl'
          }
        }
      })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
