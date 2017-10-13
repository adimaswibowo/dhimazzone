angular.module('app.controllers', ['ngTouch'])  /*['ksSwiper'])*/

.run(function($ionicPlatform,$cordovaDevice,$document,$window) {
	$ionicPlatform.ready(function() {
		
	    var document = $document[0]; //unwrap the document from the jquery wrapper 
	    // RMB HACK FOR IPAD NOT FOCUSING INPUTS INSIDE IFRAME
	    document.addEventListener('click', function (event) {	    	
	        var hasFocus = document.hasFocus();
	        if (!hasFocus)
	            $window.focus();
	    });
		
		// App Version. ex: 0.0.19
	    //cordova.getAppVersion.getVersionCode().then(function (version) {
		    //appVersion = version;
		    //alert("appVersion COde: " + version);
		//});

		cordova.getAppVersion.getVersionNumber().then(function (version) {
		    //alert("appVersion Name: " + version);
		    appVersion = version;
		});

		// Device Platform. ex: Android, iOS
		devicePlatform = $cordovaDevice.getPlatform();
		
		//Device Version. ex: 4.4.0, 8.2
    	deviceVersion = $cordovaDevice.getVersion();
        
		/*
        Ionic.io(); 
        var user = Ionic.User.current();
        console.log('IONIC userId='+user.id);
        if (!user.id ) {
            user.id = 'zugenk';
            console.log(' set userId='+user.id);
        }
        user.save();
        
        var push = new Ionic.Push({
          "debug": true,
          "onNotification": function(notification) {
            var payload = notification.payload;
            console.log(notification, payload);
          }
        });

        push.register(function(token) {
          console.log("Device token:",token.token);
            push.addTokenToUser(user);
            appVersion=token.token;
            user.save();
        });
        */
		
//		Ionic.io();
//
//		var push = new Ionic.Push({});
//		
//		push.register(function(token) {
//		  // Log out your device token (Save this!)
//		  alert("Got Token: ",token.token);
//		});
		
		
		var push = PushNotification.init({
		    android: {
		        senderID: "296037540789"
//		        topics: ["testTopics"]
		    },
		    ios: {
		        alert: "true",
		        badge: "true",
		        sound: "true"
		    },
		    windows: {}
		});

		push.on('registration', function(data) {
		    // data.registrationId
			pToken = data.registrationId;
//			alert("pToken: " + pToken);
		});

		push.on('notification', function(data) {
		    // data.message,
		    // data.title,
		    // data.count,
		    // data.sound,
		    // data.image,
		    // data.additionalData
//			alert("data.message: " + data.message + ", \n" +
//					"data.title: " + data.title + ", \n" +
//					"data.count: " + data.count + ", \n" +
//					"data.sound: " + data.sound + ", \n" +
//					"data.image: " + data.image + ", \n" +
//					"data.additionalData: " + data.additionalData + ", \n"
//			);
			
			
			// Add title sama alert(message) ke dalam localStorage
			// menurut babeh:
	        // {{title:'welcome',alert:'Welcome To Bank Sinarmas',data:'',flag:'read'},
	        //	{title:'Transfer',message:'Transfer Success',actions:'[ {'timeMilis':'123'},
			//															{'callback':'/app/notif'}
			//                 											{0_accountNumber:'0025677099',1_name:'Fedri Arianto',2_amount:'12000',3_toAccount:'0083601230'}
			//														  ]',
			//	flag:'unread'}
	        // }
			var notif={};
			notif['title']=data.title;
			notif['message']=data.message;
			
			var additionalData = data.additionalData;
//			alert("additionalData: " + JSON.stringify(additionalData));
			var actions = additionalData.actions;
//			alert("actions.length: " + actions.length);
			
			notif['actions']=actions;
			
//			alert("localStorage notifications:" + window.localStorage.getItem('notifications'));
			if (window.localStorage.getItem('notifications') == null || 
					window.localStorage.getItem('notifications') == 'null' ||
					window.localStorage.getItem('notifications') == 'undefined'){
				var arrayNotif = [];
				arrayNotif.push(notif);
//				alert("arrayNotif: " + arrayNotif);
				var notifications={};
				notifications['notifications']=arrayNotif;
//				alert("notifications: " + notifications);
				window.localStorage.setItem('notifications',JSON.stringify(notifications));
			} else {
				var notifications = JSON.parse(window.localStorage.getItem('notifications'));
//				alert("notifications1: " + notifications);
				var arrayNotif = notifications.notifications;
				arrayNotif.push(notif);
//				alert("arrayNotif: " + arrayNotif);
				var notifications={};
				notifications['notifications']=arrayNotif;
//				alert("notifications: " + notifications);
				window.localStorage.setItem('notifications',JSON.stringify(notifications));
			}
			
//			var additionalData = data.additionalData;
//			alert("additionalData: " + JSON.stringify(additionalData));
//			var actions = additionalData.actions;
//			alert("actions.length: " + actions.length);
			for(var i = 0; i < actions.length; i++){
			    for(var key in actions[i]){
			    	if (key == "callback"){
//			    		alert("callback: " + actions[i]["callback"]+"/"+actions[i]["timeMilis"]);
			    		window.location.href = "#"+actions[i]["callback"]+"/"+actions[i]["timeMilis"];
			    	}
			    }
			}
			
			// {"actions":[{"callback":"app.notif",..},{"callback":"app.cuekin",..}],"foreground":true,"collapse_key":"do_not_collapse"}
			// foreground : False, jika apps nya ke pause/close. True, jika apps nya open
			// coldstart : False, jika apps nya ke pause. True, jika apps nya close. NotAvailable, jika apps nya open.
			
		});

		push.on('error', function(e) {
		    // e.message
//			alert("e.message: " + e.message);
		});
		
		
		/*
		pToken='NOT CONNECTED..';
		Ionic.io(); 
	    // this will give you a fresh user or the previously saved 'current user'
	    var user = Ionic.User.current();
	    //alert('Ionic.User.current userId = '+user.id);
	    
	    // if the user doesn't have an id, you'll need to give it one.
	    if (!user.id ) {
	    	user.id = 'simas';
	        //alert('set userId (blom pernah regist) = '+user.id);
	    } else {
	    	if (window.localStorage.getItem('mobileNumberStickiness') == null){
	    		user.id = 'simas';
	    		//alert('set userId simas (pernah ter-regist) = '+user.id);
	    	} else {
	    		user.id = window.localStorage.getItem('mobileNumberStickiness');
	    		//alert('set userId mobileNumber (pernah ter-regist) = '+user.id);
	    	}
	        //alert('set userId (already registered) = '+user.id);
	    }
	    //alert("set user DONE");

	    //persist the user
	    user.save();
	      
	    var push = new Ionic.Push({
	      "debug": true,
	      "onNotification": function(notification) {
	        var payload = notification.payload;
	        //alert("payload: " + payload);
	        alert(notification.title+' : '+notification.alert);
	        //alert('akhirnya...');
	        
	        // Add title sama alert(message) ke dalam localStorage
	        // {{title:'welcome',alert:'Welcome To Bank Sinarmas',data:'',flag:'read'},
	        //	{title:'Transfer',alert:'Transfer Success',data:'{0_accountNumber:'0025677099',1_name:'Fedri Arianto',2_amount:'12000',3_toAccount:'0083601230'}',flag:'unread'}
	        // }
	        
	       },
	       "onRegister": function(data) {
	    	   //alert("onRegister: " + data.token);
	       },
	       "pluginConfig": {
	    	    "ios": {
	    	      "badge": true,
	    	      "sound": true
	    	     },
	    	     "android": {
	    	       "iconColor": "#343434"
	    	     }
	    	} 
	    });
	    
	    push.register(function(token) {
	      console.log("Device token:",token.token);
	        push.addTokenToUser(user);
	        pToken=token.token;
	        //alert(user.id+':'+token.token);
	        //alert('Setting: '+pToken); 
	        user.save();
			// alert('User Saved');
	        // $scope.pToken=pToken;
	    //    $scope.apply();
	    });
	    
	    */
	    
	    // berikut adalah message_id yg udah di queue di ionic :
	    // "message_id":"5458bbaa9f1611e59193720df003630a"
	    // berikut adalah token yg di generateByUser :
	    // DEV-66c72335-658d-453a-95f5-dd044f8d1e16
	    // ios bundleID simobiPlus Angular :
	    // com.ionicframework.simobiplus527193
    });
 })

.factory('sessionData', function () {
	var childMenuData = "";
	var updateAppsInfo = "";
	var genericMessage = "";

    return {
        getChildMenuData: function () {
            return childMenuData;
        },
        setChildMenuData: function (newChildMenuData) {
        	childMenuData = newChildMenuData;
        },

        getUpdateAppsInfo: function () {
            return updateAppsInfo;
        },
        setUpdateAppsInfo: function (newUpdateAppsInfo) {
        	updateAppsInfo = newUpdateAppsInfo;
        },

        getGenericMessage: function () {
            return genericMessage;
        },
        setGenericMessage: function (newGenericMessage) {
        	genericMessage = newGenericMessage;
        }
    };
})

.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'https://www.banksinarmas.com']);
})

.controller('AppCtrl', function($translate, $scope, $rootScope,$ionicHistory, $ionicModal, $ionicPopup, $ionicLoading, $ionicBackdrop, $timeout, $http, $window, sessionData, $cordovaDevice,$interval,$state,$ionicLoading) {
	//alert("asd");
//	window.localStorage.clear();
	
	if (window.localStorage.getItem('clearLocalStorageKey') == null || 
			window.localStorage.getItem('clearLocalStorageKey') == undefined ||
			window.localStorage.getItem('clearLocalStorageKey') == 'null' ||
			window.localStorage.getItem('clearLocalStorageKey') == 'undefined' ){
		console.debug("clearLocalStorageKey is empty");
		_clearLocalStorageAfterUpdateApps();
		window.localStorage.setItem('clearLocalStorageKey', clearLocalStorageKey);
	} else {
		console.debug("clearLocalStorageKey is not empty");
		if (window.localStorage.getItem('clearLocalStorageKey') != clearLocalStorageKey){
			console.debug("but not same, then clear localStorage");
			_clearLocalStorageAfterUpdateApps();
			window.localStorage.setItem('clearLocalStorageKey', clearLocalStorageKey);
		} else {
			console.debug("but same, then not clear localStorage");
		}
	}

	var IpProd = window.localStorage.getItem("IPaddressProd");
	var IpDev = window.localStorage.getItem("IPaddressDev");
	var IpNow = window.localStorage.getItem("IPaddress");
	
	// are we running in native app or in a browser?
    window.isphone = false;
    if(document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
        window.isphone = true;
    }
    if( window.isphone ) {
//	    alert("window.isphone: " + window.isphone);
//      document.addEventListener("deviceready", onReady, false);
		deploy = new Ionic.Deploy();
		
		if (IpNow == IpDev){
			deploy.setChannel("dev");
		}
        
    } else {
    	console.log(" PROBABLY THIS IS BROWSER, NOT DEVICE");
		isDevice=false;
		device={platform:'unknown'};
//    	onReady();
    }
    

    if(window.localStorage.getItem('iconMode') == 'itIcon'){
		$scope.itIcon = true; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = false;
	}else  if(window.localStorage.getItem('iconMode') == 'darkIcon'){
		$scope.itIcon = false; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = true;
	} else {
		$scope.itIcon = true; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = false;
	}

	if(window.localStorage.getItem('themeMode') == null || window.localStorage.getItem('themeMode') == "null"){
		window.localStorage.setItem('themeMode',"colorGrid");
		window.localStorage.setItem('themeIonicMode','colorGrid');
		document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';

		$scope.themeMode = "colorGrid"; // harusnya pake localStorage
		$rootScope.toggledrag = true; 
	} else {
		$scope.themeMode = window.localStorage.getItem('themeMode');

		if (window.localStorage.getItem('themeIonicMode') == 'standar'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';
   	 	}else if (window.localStorage.getItem('themeIonicMode') == 'dark'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css'; // harusnya nanti bisa ganti ke ionic-dark.css
   	 	}else if (window.localStorage.getItem('themeIonicMode') == 'colorGrid'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic-color.css';
   	 	}else{
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';
   	 	}

		if (window.localStorage.getItem('themeMode') == "style1" && $rootScope.showLogin == true){
			$rootScope.toggledrag = false; 
		}else{
			$rootScope.toggledrag = true; 
		}
	}

    loadFontSize();

    checkVisibleSideMenu($rootScope,$state);
	
//	document.addEventListener("deviceready", function () {
//		alert("$cordovaDevice.getDevice(): " + $cordovaDevice.getPlatform());
//	}, false);
	
	var menuPosition = "side";
	
	// construct grandMenu untuk sideMenu
	constructGrandMenu($scope,$rootScope,menuPosition,$http,$window,$ionicLoading);


	$rootScope.$on('$stateChangeStart', 
	function(event, toState, toParams, fromState, fromParams){ 
	    removeKeyboardOpen();
   	 	loadFontSize();
	})
	

	$scope.loginData = {};

	//check network indicator
	$scope.doCheckConnection = function() {
		console.debug("controller.template.js >> doCheckConnection");
		hsmInit($http,$rootScope,$interval,$ionicLoading,$timeout);
	};

	$scope.startLoadServer = function() {
		//alert("startLoadServer");
		intervalCheckServer = setInterval("doCheckConnection()", iFrequencyCheckServer);  // run
	};
	
	$scope.goToWelcomeHtml = function() {
		window.location.href = "#/app/login";
	};
	$scope.goToATMLocator = function() {
		window.location.href = "#/app/atmLocatorMenu";
	};

	$scope.backToHome = function(){
		$state.go('app.main');
	}

	$scope.contactUs = function(){
		$state.go('app.contactUs');
	}
	
	$scope.mailUs = function(){
		$state.go('app.mailUs');
	}

	$scope.exitApp = function() {
		$ionicPopup.confirm({
          title: 'Warning',
          template: 'are you sure you want to exit from AMoBile ?'
        }).then(function(res) {
          if (res) {
            ionic.Platform.exitApp();
          }
        })
	};

	$scope.backMenu = function() {
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
	    }else if ( ($state.is('app.billerType1')) || ($state.is('app.billerType2'))|| ($state.is('app.billerType3')) || ($state.is('app.billerType4')) || ($state.is('app.billerType5')) || ($state.is('app.billerType6')) || ($state.is('app.billerType7')) || ($state.is('app.billerType8')) || ($state.is('app.billerType9'))) {
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
	    }else if ($state.is('app.changePasswordExpired') || $state.is('app.changePasswordExpiredResult')) {
	    	logoutPassExpired($scope, $http, $window, $ionicLoading);
	    }else{
	        //$ionicHistory.goBack();
	        try {
	        	$backView = $ionicHistory.backView();
	       		$backView.go();
    		} catch(e) {
	        	$state.go('app.main');
    		}
	    }

    	checkVisibleSideMenu($rootScope,$state);
	};

	
	/*//ini buat tombol popup circle kaya yg di path
	$scope.extraMenu = true;
	$scope.extraMenuLabel = "+";
	$scope.extraMenuShow = function() {
		if ($scope.extraMenu == false){
			//alert("hide dong");
			//document.getElementById('visibleExtraMenu').style.display = 'none';

			var li=$("#navs li");
			li.removeAttr('style');
			$scope.extraMenuLabel = "+";
			$scope.extraMenu = true;

      		//$ionicBackdrop.release();
		}else{
			var defaultMenuJsonObj;
			var menuJsonExtra;

			if (window.localStorage.getItem('userStorage') == null){
				defaultMenuJsonObj = JSON.parse(defaultMenuJson);
				menuJsonExtra = defaultMenuJsonObj.menuJson;
			} else {
				var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));

				if (userStorage.ipassportData.ipassDataClient.GrandMenuJson == null && userStorage.ipassport == null){
					defaultMenuJsonObj = JSON.parse(defaultMenuJson);
					menuJsonExtra = defaultMenuJsonObj.menuJson;
				} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport == null){
					defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
					menuJsonExtra = defaultMenuJsonObj.menuJson;
				} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport != null){
					defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
					menuJsonExtra = defaultMenuJsonObj.menuJson;
				}
			}

			var newMenuJsonExtra = [];
			for(var i = 0; i < menuJsonExtra.length; i++){
			    for(var key in menuJsonExtra[i]){
			    	if (key == "extraMenu"){
						if (window.localStorage.getItem('userStorage') == null){
							if (menuJsonExtra[i]["extraMenu"] == 'publicMenu' || menuJsonExtra[i]["extraMenu"] == 'both'){
								newMenuJsonExtra.push(menuJsonExtra[i]);
							}
						} else {
							if (menuJsonExtra[i]["extraMenu"] == 'customerMenu' || menuJsonExtra[i]["extraMenu"] == 'both'){
								newMenuJsonExtra.push(menuJsonExtra[i]);
							}
						}
			    	}
			    }
			}

			$scope.extraMenuLabel = "-";
			//alert("show dong");
			//document.getElementById('visibleExtraMenu').style.display = 'inline';
			$scope.extraMenu = false;

			var li=$("#navs li");
			var i=newMenuJsonExtra.length;
			var n=i-1,r=90;

			for(var a=0;a<i;a++){
				if (newMenuJsonExtra.length == 1) {
					li.eq(a).css({
						'transition-delay':""+(10*a)+"ms",
						'-webkit-transition-delay':""+(10*a)+"ms",
						'left':(r*Math.cos(90/2*1*(Math.PI/90))),
						'top':(-r*Math.sin(90/2*1*(Math.PI/90)))	
					});
				}else{				
					li.eq(a).css({
						'transition-delay':""+(10*a)+"ms",
						'-webkit-transition-delay':""+(10*a)+"ms",
						'left':(r*Math.cos(90/n*a*(Math.PI/90))),
						'top':(-r*Math.sin(90/n*a*(Math.PI/90)))	
					});
				}
			}

			//$ionicBackdrop.retain();
		}
	}

	$scope.closeExtraMenu = function() {
    	$ionicLoading.hide();
	}*/
	
	$scope.ionicLoading = function() {
		$ionicLoading.show({
	      template: '<div ng-controller="AppCtrl"><div align="right"><i class="icon ion-close-circled icon-simobi-ionic-small" on-tap="closeExtraMenu();" ></i></div><br><a ng-repeat="mainMenu in mainMenus | inArray:filterBy:\'extraMenu\'" ng-click="clickGrandMenu(mainMenu.code,mainMenu.nodeList,mainMenu.functionMenu,\'1\',mainMenu.id)"> <img width="60px" height="60px" src="css/img-app/{{mainMenu.icon}}"></a>'
	    });

	    $timeout(function() {
    		$ionicLoading.hide();
		}, 30000);
	};


	$rootScope.showLogout = false;

	//logout
	$scope.logout = function() {
		//alert("logout");
		$rootScope.showLogout = false;
		logout($scope, $http, $window,$ionicLoading);
	};
  
	$scope.clickGrandMenu = function(code,nodeList,functionMenu,level,id){
		try {
    		$ionicLoading.hide();

			$rootScope.showLogout = false;
    	} catch(e) {}

    	checkVisibleSideMenu($rootScope,$state);

		try {
    		var li=$("#navs li");
			li.removeAttr('style');
			$scope.extraMenuLabel = "+";
			$scope.extraMenu = true;
		} catch(e) {}
		
		if (code == "logout"){
			$scope.logout();
		} else if (nodeList == null || nodeList == "null" || nodeList == 'null' || nodeList == ""){
//		  	alert("nodeList null: " + code + ", [" + nodeList + "]," + functionMenu);
//			window.location.href = "#/app/"+code;
			if (functionMenu.indexOf("inAppBrowser") >= 0){
				console.debug("MODE INAPPBROWSER");
//				alert("functionMenu : "+functionMenu);
				
				// get inApp view, apakah untuk both, publicMenu or CustomerMenu
				console.debug("functionMenu: " + functionMenu);
				var start = functionMenu.indexOf("&view=");
				console.debug("start: " + start);
				var viewAt = functionMenu.substr(start+6);
				console.debug("viewAt: " + viewAt);

				// check apakah inApp nya boleh di refresh UserStorage ato enggak
				// dan cek apakah viewAt nya bisa diluar ato di dalam ato both	
				if (viewAt.match('^customerMenu')){
					if( functionMenu.indexOf('refreshUserStorage') != -1){
						window.localStorage.setItem('refreshForInAppBrowser',"1");
					} 
				}
				
				window.localStorage.setItem('functionMenuUri',functionMenu);
				window.location.href = "#/app/inAppBrowser";
			} else if (functionMenu.indexOf("onlineAccountRegistrationNew") >= 0){
				//alert("MODE ONLINE ACCOUNT REGISTRATION");
//				alert("functionMenu : "+functionMenu);
				
				if (window.localStorage.getItem('refreshForInAppBrowser') != null && 
						window.localStorage.getItem('refreshForInAppBrowser') == "1"){
					doRefreshInAppBrowser($http,$window,$ionicLoading);
				}
				
				window.localStorage.setItem('functionMenuUri',functionMenu);
				window.location.href = "#/app/onlineAccountRegistration";
			} else if (functionMenu.indexOf("event") >= 0){
				//alert("MODE EVENT");
//				alert("functionMenu : "+functionMenu);
				
				if (window.localStorage.getItem('refreshForInAppBrowser') != null && 
						window.localStorage.getItem('refreshForInAppBrowser') == "1"){
					doRefreshInAppBrowser($http,$window,$ionicLoading);
				}
				
				window.localStorage.setItem('functionMenuUri',functionMenu);
				window.location.href = "#/app/events";
			} else {
//				alert("MODE LAIN");
//				alert("code: " + code);
				
				if (window.localStorage.getItem('refreshForInAppBrowser') != null && 
						window.localStorage.getItem('refreshForInAppBrowser') == "1"){
					doRefreshInAppBrowser($http,$window,$ionicLoading);
				}
				
				window.location.href = "#/app/"+code;
			}
		} else{
		  	//alert("nodeList exist: " + code + ", [" + nodeList + "]," + functionMenu + ", level: " + level + ", id: " + id);
			// buka 1 generic list HTML page, yg isi nya si nodeList
			
			console.log("code : "+level);
			$scope.title = $translate.instant(code);
			
			if(code == 'investmentProductInformation' || code == 'mutualFund' || code == 'bancassurance'){
				alert(functionMenu);
			}
			
			//alert("MODE constructChildGrandMenu");
			if (window.localStorage.getItem('refreshForInAppBrowser') != null && 
					window.localStorage.getItem('refreshForInAppBrowser') == "1"){
				doRefreshInAppBrowser($http,$window,$ionicLoading);
			}
			
			constructChildGrandMenu($scope, $state,menuPosition,code,sessionData,level,id);
			console.log("#/app/"+code);
		}
	};

}).filter('inArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
})

.controller('MainCtrl', function($scope,$rootScope,$http,$window,$interval,$state,sessionData,$ionicLoading,$timeout,$ionicPlatform,$ionicHistory,$sce,$ionicLoading) {
	//alert("MainCtrl");
	generateSessionCode();
	$scope.doCheckConnection();
	$scope.title = "Home";
	
	//hsmInit($http,$rootScope);
	var menuPosition = "content";

	if(window.localStorage.getItem('iconMode') == 'itIcon'){
		$scope.itIcon = true; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = false;
	}else  if(window.localStorage.getItem('iconMode') == 'darkIcon'){
		$scope.itIcon = false; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = true;
	} else {
		$scope.itIcon = true; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = false;
	}

	if(window.localStorage.getItem('themeMode') == null || window.localStorage.getItem('themeMode') == "null"){
		window.localStorage.setItem('themeMode',"colorGrid");
		window.localStorage.setItem('themeIonicMode','colorGrid');
		document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';

		$scope.themeMode = "colorGrid"; // harusnya pake localStorage
		$rootScope.toggledrag = true; 
	} else {
		$scope.themeMode = window.localStorage.getItem('themeMode');

		if (window.localStorage.getItem('themeIonicMode') == 'standar'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';
   	 	}else if (window.localStorage.getItem('themeIonicMode') == 'dark'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css'; // harusnya nanti bisa ganti ke ionic-dark.css
   	 	}else if (window.localStorage.getItem('themeIonicMode') == 'colorGrid'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic-color.css';
   	 	}else{
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';
   	 	}

		if (window.localStorage.getItem('themeMode') == "style1" && $rootScope.showLogin == true){
			$rootScope.toggledrag = false; 
		}else{
			$rootScope.toggledrag = true; 
		}
	}

    loadFontSize();

    checkVisibleSideMenu($rootScope,$state);
	
	// construct grandMenu untuk contentMenu
	constructGrandMenu($scope,$rootScope,menuPosition,$http,$window,$ionicLoading);
	
	$scope.contactUs = function(){
		window.location.href = "#app/contactUs";
	}
	
	$scope.mailUs = function(){
		window.location.href = "#app/mailUs";
	}

	$scope.backToHome = function(){
		$state.go('app.main');
	}

//	checkServerOnload = $interval(function() {
//		hsmInit($http,$rootScope,$interval,$ionicLoading,$timeout);
//	}, iFrequencyCheckServer);


var isCorporate =false;
var isDevicePersonal=isDevice;
$scope.isDevicePersonal=isDevicePersonal;
$scope.checkCorporate = function(isCorp){
    if (isDevice && !isCorp ){
    	isDevicePersonal=true; //mobilenumber
    }
    else if(!isDevice || isCorp){
    	isDevicePersonal=false; //text
    }
    $scope.isDevicePersonal=isDevicePersonal;
    isCorporate=isCorp;
}

	// Login Controller
	$scope.isDevice = isDevice;
	$scope.loginData = {};
	$scope.showPassword = false;

	$rootScope.showLogout = false;
	$scope.doLogin = function() {
		if ($rootScope.networkIndicator == true){
			doLogin($scope, $http, $window, sessionData,$ionicLoading,$timeout,$ionicPlatform,$rootScope,$interval,isDevicePersonal);
		} else {
			//alert("Please wait for checking connection");
			$ionicLoading.show({
		      template: 'Please wait for checking connection'
		    });

		    $timeout(function() {
	    		$ionicLoading.hide();
			}, 1500);
		}
	};

	$scope.backMenu = function() {
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
	        	$backView = $ionicHistory.backView();
	       		$backView.go();
    		} catch(e) {
	        	$state.go('app.main');
    		}
	    }

    	checkVisibleSideMenu($rootScope,$state);
	};


	if (isDevicePersonal){
		stickinessGetMobileNumber($scope);
	}else{
		stickinessGetUserName($scope);
	}

	//var trusted;
	//trusted = $filter('trusted')($sce.trustAsResourceUrl(url));

	//$scope.trusted = function (url) {
	//	alert("url: " + url);
	//    $sce.trustAsResourceUrl(url)
	//}

	//$scope.trustedUrl = $sce.trustAsResourceUrl('https://www.banksinarmas.com');
	getUrlAdvertisement($scope,$sce);

}).filter('inArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
})
//.filter('trusted', ['$sce', function ($sce) {
//    return function(url) {
//        return $sce.trustAsResourceUrl(url);
//    };
//}])

.controller('ContactUsCtrl', function($scope, $http, $window, $rootScope,$interval,$ionicLoading,$timeout,$translate,$ionicPopup) {

   	loadFontSize();

	var IpProd = window.localStorage.getItem("IPaddressProd");
	var IpDev = window.localStorage.getItem("IPaddressDev");
	var IpNow = window.localStorage.getItem("IPaddress");
	
	if (IpNow == IpDev){
		$scope.PROD = false;
	}else if (IpNow == IpProd){
		$scope.PROD = true;
	}

	$scope.version = "version not available for browser";
	
	if (isDevice){
		// Update app code with new release from Ionic Deploy
		$scope.doUpdate = function() {
		    deploy.update().then(function(res) {
		    	//$cordovaProgress.showSuccess(true, "Success!");
		    	$ionicLoading.hide();
		    	//$scope.$apply();
		    	alert('Ionic Deploy: Update Success! ', res);
		    }, function(err) {
		    	$ionicLoading.hide();
		    	alert('Ionic Deploy: Update error! ', err);
		    }, function(prog) {
		    	console.debug('Ionic Deploy: Progress... ', prog);
		    	// Setup the loader
				$ionicLoading.show({
				    content: 'Loading',
				    animation: 'fade-in',
				    showBackdrop: true,
				    maxWidth: 200,
				    showDelay: 0
				});
		    });
		};

		// Check Ionic Deploy for new code
		$scope.checkForUpdates = function() {
			alert('Ionic Deploy: Checking for updates');
		    deploy.check().then(function(hasUpdate) {
		    	alert('Ionic Deploy: Update available: ' + hasUpdate);
		      	$scope.hasUpdate = hasUpdate;
		      	$scope.$apply();
		    }, function(err) {
		    	alert('Ionic Deploy: Unable to check for updates', err);
		    });
		};
		
		$scope.version = appVersion;
	}

	//logout
	$scope.logout = function() {
		//alert("logout");
		$rootScope.showLogout = false;
		logout($scope, $http, $window,$ionicLoading);
	};

	// Clear Data
	$scope.doClearData = function() {
		console.debug('Clear Data');
		if (window.localStorage.getItem('userStorage') == null){
	    	_clearLocalStorageAfterUpdateApps();
	    	alert($translate.instant('clear_data_success'));
    		window.location.href = "#/app/main";
			window.location.reload();
	    } else {

	    	$ionicPopup.confirm({
				title: $translate.instant('Warning'),
				template: $translate.instant('clear_data_warning')
	        }).then(function(res) {
	          if (res) {
	          		window.localStorage.setItem('clearLocalStorageKey', null);
					$scope.logout();
	          }
	        })

	    }

	    //window.localStorage.clear();
		//window.sessionStorage.clear();
	};
	
	$scope.changeIpAddr = function(){
		var IPaddressProd = window.localStorage.getItem("IPaddressProd");
		var IPaddressDev = window.localStorage.getItem("IPaddressDev");
		var IPaddress = window.localStorage.getItem("IPaddress");
		
		
		//alert("now :"+IPaddress);
		clickCounter++;
		if (clickCounter >= 10){
			
//			try {
//				$('#divDataValueHeader').remove();
//			} catch(e) {}
			
//			constructGenericDisplay('dinamicValue',"<div id='divDataValueHeader'>  <input type='hidden' name='headerTitleProd' id='headerTitleProd' value=' id='headerTitleProd' data-i18n='headerTitleProd' ' /> <input type='hidden' name='headerTitleDev' id='headerTitleDev' value=' id='headerTitleDev' data-i18n='headerTitleDev' ' /></div>");
//			languageFunction(); //bahasa
//			var headerTitleProd = document.getElementById('headerTitleProd').value;
//			var headerTitleDev = document.getElementById('headerTitleDev').value;
			
			alert('Debug Mode');
			clickCounter=0;
			
			if (IPaddress == IPaddressDev){
				alert("IPaddress Set Prod: "+IPaddressProd);
//				window.localStorage.setItem('genericHeaderTitle',headerTitleProd);
				window.localStorage.setItem('IPaddress',IPaddressProd);
				ipaddress = IPaddressProd;
				$scope.PROD = true;
			}else if (IPaddress == IPaddressProd){
				alert("IPaddress Set Dev: "+IPaddressDev);
//				window.localStorage.setItem('genericHeaderTitle',headerTitleDev);
				window.localStorage.setItem('IPaddress',IPaddressDev);
				ipaddress = IPaddressDev;
				$scope.PROD = false;
			}else{
//				window.localStorage.setItem('genericHeaderTitle',headerTitleProd);
				window.localStorage.setItem('IPaddress',IPaddressProd);
				ipaddress = IPaddressProd;
				$scope.PROD = true;
				alert("IPaddress Set Prod: "+IPaddressProd);
			}

//			$.getScript("js-mobileClient/var.js");	
//			goToChangeHeaderTitle();
		}
		hsmInit($http,$rootScope,$interval,$ionicLoading,$timeout);
//		$.getScript("js-mobileClient/load.server.js");
//		doCheckConnection();
		//alert("total click : "+clickCounter);
	}
})

.controller('LoginCtrl', function($scope, $http, $window,$rootScope,sessionData,$ionicLoading,$timeout,$ionicPlatform,$interval) {	

   	loadFontSize();
//	alert("isDevice: " + isDevice);
	$scope.isDevice = isDevice;
	$scope.loginData = {};
	
	$scope.showPassword = false;

	$scope.doLogin = function() {
		if ($rootScope.networkIndicator == true){
			doLogin($scope, $http, $window, sessionData,$ionicLoading,$timeout,$ionicPlatform,$rootScope,$interval);
		} else {
			//alert("Please wait for checking connection");
			$ionicLoading.show({
		      template: 'Please wait for checking connection'
		    });

		    $timeout(function() {
	    		$ionicLoading.hide();
			}, 1500);
		}
	};

	if (isDevice){
		stickinessGetMobileNumber($scope);
	}else{
		stickinessGetUserName($scope);
	}
})

.controller('ChangePasswordCtrl', function($scope, $http, $window, $ionicLoading) {

   	loadFontSize();

	//alert("ChangePasswordCtrl");
   	
   	var lang = window.localStorage.getItem("lang");

   	if (lang == null || lang == "" || lang == "null"){
   		lang = "en";
   	}

	$scope.passwordData = {};

	$scope.validatePassword = function(oldPassword,newPassword,confirmNewPassword){
		console.debug("doChangePassword");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var strError="";
	//	    var passReg= /(?=^.[0-9a-zA-Z]{7,20}$)(?=.*\d)(?=.*[a-zA-Z]).*/;
			
			var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
			
			// dari DB
//			var passReg = "(?=.*[a-z])|(?=.*[A-Z])|.*[0-9].*|^((?!badword).)*$|^.{7,20}$";
//			var alertChangePasswordEN = "lower case|upper case|digit|not contains|range character";
//			var alertChangePasswordID = "huruf kecil|huruf besar|angka|tidak mengandung|range password";
//			var alertChangePasswordConfirmEN = "lower case confirm|upper case confirm|digit confirm|not contains confirm|range character confirm"
//			var alertChangePasswordConfirmID = "huruf kecil confirm|huruf besar confirm|angka confirm|tidak mengandung confirm|range password confirm";
			var passReg = userStorage.ipassportData.ipassDataClient.passReg;
			var alertChangePasswordEN = userStorage.ipassportData.ipassDataClient.alertChangePasswordEN;
			var alertChangePasswordID = userStorage.ipassportData.ipassDataClient.alertChangePasswordID;
			var alertChangePasswordConfirmEN = userStorage.ipassportData.ipassDataClient.alertChangePasswordConfirmEN;
			var alertChangePasswordConfirmID = userStorage.ipassportData.ipassDataClient.alertChangePasswordConfirmID;
			console.debug("passReg: " + passReg);
			console.debug("alertChangePasswordEN: " + alertChangePasswordEN);
			console.debug("alertChangePasswordID: " + alertChangePasswordID);
			console.debug("alertChangePasswordConfirmEN: " + alertChangePasswordConfirmEN);
			console.debug("alertChangePasswordConfirmID: " + alertChangePasswordConfirmID);
			
			// dari localStorage
			var username = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.loginName;
			console.debug("username: " + username);
			
			var alertChangePassword = "";
			if (lang == "en"){
				alertChangePassword = alertChangePasswordEN;
			} else {
				alertChangePassword = alertChangePasswordID;
			}
			
			var alertChangePasswordConfirm = "";
			if (lang == "en"){
				alertChangePasswordConfirm = alertChangePasswordConfirmEN;
			} else {
				alertChangePasswordConfirm = alertChangePasswordConfirmID;
			}
	
			if (oldPassword == "") {
				strError+='- Old password must be filled \n';
			}
			if (newPassword == "") {
				strError+='- New password must be filled \n';	
			} 
			if (confirmNewPassword == "") {
				strError+='- Re-confirmation new password must be filled \n';	
			}	
	
			if (strError != "") {
				alert(strError);
				return false;
			}
			
			// check regex
			//strError = passwordAgainstRegex(passReg, newPassword, confirmNewPassword, strError, alertChangePassword, alertChangePasswordConfirm, username);
			
	//		if (!passReg.test(newPassword)){
	//			strError+='- Password baru harus terdiri dari 8 sampai 20 nomor dan karakter! \n';			
	//		}
	//		if (!passReg.test(confirmNewPassword)){
	//			strError+='- Konfirmasi Password Baru harus terdiri dari 8 sampai 20 nomor dan karakter! \n';			
	//		}
			
			if(newPassword != confirmNewPassword){
				strError+='- Re-confirmation password does not match New Password! \n';		
			}
			if(newPassword == oldPassword){
				strError+='- Old password and new password can not be same! \n';		
			}
	
			if (strError == ""){
				return true;
			}else{
				alert(strError);
				return false;
			}
		}
	}

	$scope.doChangePassword = function() {
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		//alert("doChangePassword");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var oldPassword = $scope.passwordData.oldPass;
			var newPassword = $scope.passwordData.newPass;
			var confirmNewPassword = $scope.passwordData.newPassConfirm;
			console.debug("oldPassword: " + oldPassword);
			console.debug("newPassword: " + newPassword);
			console.debug("confirmNewPassword: " + confirmNewPassword);
			
			var isContinue = $scope.validatePassword(oldPassword,newPassword,confirmNewPassword);
			if(isContinue==false)return false;
			
			var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
			var ipassport = userStorageMap.ipassport;
			console.debug("ipassport: " + ipassport);
			
			// var E2EE_RANDOM = userStorageMap[ipassport];
			// console.debug("E2EE_RANDOM: " + E2EE_RANDOM);
			
			// init lagi si RSA nya
			// rsa = new RSAEngine();
			// console.debug("publickey: " + publickey);
			// console.debug("sid: " + sid);
			// rsa.init(publickey, sid, E2EE_RANDOM);
			
			var newdata = {};
			newdata['oldPassword'] = oldPassword;
			newdata['newPassword'] = newPassword;
			newdata['confirmNewPassword'] = confirmNewPassword;
			newdata['ipassport']=ipassport;
			// newdata['E2EE_RANDOM']=E2EE_RANDOM;
			newdata['lang']=window.localStorage.getItem("lang");
			var datajson=JSON.stringify(newdata);
			console.debug('datajson:'+datajson);
			
			var url=ipaddress+"/rest/changePasswordV2";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,datajson).success(function(data) {
  				$ionicLoading.hide();
		    	if (data.responseCode == "00"){
		    		var userStorage = JSON.parse(window.localStorage.getItem("userStorage"));

		    		var newdata = {};
					newdata[ipassport] = data[ipassport];
		 			$.extend(true, userStorage, newdata);

		 			window.localStorage.setItem('userStorage', JSON.stringify(userStorage));
		 			console.debug("E2EE_RANDOM: " + userStorageMap[ipassport]);
				    	
				    window.location.href = "#/app/changePasswordResult";
		    	} else {
		    		alert(data.responseMessage);
		    	}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Unable to process transaction");
				return false;
			});
		}
	};
})

.controller('ChangePasswordResultCtrl', function($scope, $http, $window) {
		$scope.doBack = function() {
		window.location.href = "#/app/changePassword";
	}
})

.controller('ChangePasswordExpiredResultCtrl', function($scope, $http, $window, $ionicLoading) {
	$scope.doLogout = function() {
		logout($scope, $http, $window, $ionicLoading);
	}
	
	$scope.doGotoHome = function() {
		$window.location.reload();
		window.location.href = "";
	}
})

.controller('ChangePasswordExpiredCtrl', function($scope, $http, $window, $ionicLoading, $translate) {

   	loadFontSize();

	console.debug("ChangePasswordExpiredCtrl");
   	
   	var lang = window.localStorage.getItem("lang");

   	if (lang == null || lang == "" || lang == "null"){
   		lang = "en";
   	}

	$scope.passwordData = {};

	$scope.validatePassword = function(oldPassword,newPassword,confirmNewPassword){
		console.debug("doChangePassword");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var strError="";
	//	    var passReg= /(?=^.[0-9a-zA-Z]{7,20}$)(?=.*\d)(?=.*[a-zA-Z]).*/;
			
			var userStorage = JSON.parse(window.sessionStorage.getItem('tempData'));
			
			// dari DB
//			var passReg = "(?=.*[a-z])|(?=.*[A-Z])|.*[0-9].*|^((?!badword).)*$|^.{7,20}$";
//			var alertChangePasswordEN = "lower case|upper case|digit|not contains|range character";
//			var alertChangePasswordID = "huruf kecil|huruf besar|angka|tidak mengandung|range password";
//			var alertChangePasswordConfirmEN = "lower case confirm|upper case confirm|digit confirm|not contains confirm|range character confirm"
//			var alertChangePasswordConfirmID = "huruf kecil confirm|huruf besar confirm|angka confirm|tidak mengandung confirm|range password confirm";
			var passReg = userStorage.ipassportData.ipassDataClient.passReg;
			var alertChangePasswordEN = userStorage.ipassportData.ipassDataClient.alertChangePasswordEN;
			var alertChangePasswordID = userStorage.ipassportData.ipassDataClient.alertChangePasswordID;
			var alertChangePasswordConfirmEN = userStorage.ipassportData.ipassDataClient.alertChangePasswordConfirmEN;
			var alertChangePasswordConfirmID = userStorage.ipassportData.ipassDataClient.alertChangePasswordConfirmID;
			console.debug("passReg: " + passReg);
			console.debug("alertChangePasswordEN: " + alertChangePasswordEN);
			console.debug("alertChangePasswordID: " + alertChangePasswordID);
			console.debug("alertChangePasswordConfirmEN: " + alertChangePasswordConfirmEN);
			console.debug("alertChangePasswordConfirmID: " + alertChangePasswordConfirmID);
			
			// dari localStorage
			var username = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.loginName;
			console.debug("username: " + username);
			
			var alertChangePassword = "";
			if (lang == "en"){
				alertChangePassword = alertChangePasswordEN;
			} else {
				alertChangePassword = alertChangePasswordID;
			}
			
			var alertChangePasswordConfirm = "";
			if (lang == "en"){
				alertChangePasswordConfirm = alertChangePasswordConfirmEN;
			} else {
				alertChangePasswordConfirm = alertChangePasswordConfirmID;
			}
	
			if (oldPassword == "" || oldPassword == undefined) {
				strError+='- '+ $translate.instant('password_old_required') +' \n';
			}
			if (newPassword == "" || newPassword == undefined) {
				strError+='- '+ $translate.instant('password_new_required') +' \n';	
			} 
			if (confirmNewPassword == "" || confirmNewPassword == undefined) {
				strError+='- '+ $translate.instant('password_confirm_new_required') +' \n';	
			}	
			console.debug("strError: " + strError);
			if (strError != "") {
				alert(strError);
				return false;
			}
			
			// check regex
			strError = passwordAgainstRegex(passReg, newPassword, confirmNewPassword, strError, alertChangePassword, alertChangePasswordConfirm, username);
			
			if(newPassword != confirmNewPassword){
				strError+='- '+ $translate.instant('passwordConfirmNew_notMatch_passwordNew') +' \n';	
			}
			if(newPassword == oldPassword){
				strError+='- '+ $translate.instant('passwordNew_passwordOld_same') +' \n';	
			}
	
			if (strError == ""){
				return true;
			}else{
				alert(strError);
				return false;
			}
		}
	}
	
	$scope.doLogoutPassExpired = function() {
		logoutPassExpired($scope, $http, $window, $ionicLoading);
	}
	
	$scope.doChangePassword = function() {
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		//alert("doChangePassword");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var oldPassword = $scope.passwordData.oldPass;
			var newPassword = $scope.passwordData.newPass;
			var confirmNewPassword = $scope.passwordData.newPassConfirm;
			console.debug("oldPassword: " + oldPassword);
			console.debug("newPassword: " + newPassword);
			console.debug("confirmNewPassword: " + confirmNewPassword);
			
			var isContinue = $scope.validatePassword(oldPassword,newPassword,confirmNewPassword);
			if(isContinue==false)return false;
			
			var userStorageMap = JSON.parse(window.sessionStorage.getItem("tempData"));
			var ipassport = userStorageMap.ipassport;
			console.debug("ipassport: " + ipassport);
			
			var E2EE_RANDOM = userStorageMap[ipassport];
			console.debug("E2EE_RANDOM: " + E2EE_RANDOM);
			
			// init lagi si RSA nya
			rsa = new RSAEngine();
			console.debug("publickey: " + publickey);
			console.debug("sid: " + sid);
			rsa.init(publickey, sid, E2EE_RANDOM);
			
			var newdata = {};
			newdata['oldPassword'] = "";
			newdata['newPassword'] = getRPIN2(oldPassword,newPassword);
			newdata['confirmNewPassword'] = "";
			newdata['ipassport']=ipassport;
			newdata['E2EE_RANDOM']=E2EE_RANDOM;
			newdata['lang']=window.localStorage.getItem("lang");
			var datajson=JSON.stringify(newdata);
			console.debug('datajson:'+datajson);
			
			var url=ipaddress+"/rest/changePasswordV2";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,datajson).success(function(data) {
  				$ionicLoading.hide();
		    	if (data.responseCode == "00"){
		    		var userStorage = JSON.parse(window.sessionStorage.getItem("tempData"));

		    		var newdata = {};
					newdata[ipassport] = data[ipassport];
		 			$.extend(true, userStorage, newdata);

//		 			window.localStorage.setItem('userStorage', JSON.stringify(userStorage));
		 			console.debug("E2EE_RANDOM: " + userStorageMap[ipassport]);
		 			
		 			_updateUserStorageAfterLogin(userStorage);
		 			
		 			var lastActiveDate = new Date(); // Now
			        localStorage.setItem('lastActiveDate', lastActiveDate);

			        createInternationalization(userStorage);
					
//					$window.location.reload();
//					window.location.href = "";
				    	
				    window.location.href = "#/app/changePasswordExpiredResult";
		    	} else {
		    		alert(data.responseMessage);
		    	}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Server Error");
				return false;
			});
		}
	};
})



.controller('ChangePasswordExpiredCtrl', function($scope, $http, $window, $ionicLoading) {

   	loadFontSize();

	//alert("ChangePasswordCtrl");
   	
   	var lang = window.localStorage.getItem("lang");

   	if (lang == null || lang == "" || lang == "null"){
   		lang = "en";
   	}

	$scope.passwordData = {};

	$scope.validatePassword = function(oldPassword,newPassword,confirmNewPassword){
		console.debug("doChangePassword");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var strError="";
	//	    var passReg= /(?=^.[0-9a-zA-Z]{7,20}$)(?=.*\d)(?=.*[a-zA-Z]).*/;
			
			var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
			
			// dari DB
//			var passReg = "(?=.*[a-z])|(?=.*[A-Z])|.*[0-9].*|^((?!badword).)*$|^.{7,20}$";
//			var alertChangePasswordEN = "lower case|upper case|digit|not contains|range character";
//			var alertChangePasswordID = "huruf kecil|huruf besar|angka|tidak mengandung|range password";
//			var alertChangePasswordConfirmEN = "lower case confirm|upper case confirm|digit confirm|not contains confirm|range character confirm"
//			var alertChangePasswordConfirmID = "huruf kecil confirm|huruf besar confirm|angka confirm|tidak mengandung confirm|range password confirm";
			var passReg = userStorage.ipassportData.ipassDataClient.passReg;
			var alertChangePasswordEN = userStorage.ipassportData.ipassDataClient.alertChangePasswordEN;
			var alertChangePasswordID = userStorage.ipassportData.ipassDataClient.alertChangePasswordID;
			var alertChangePasswordConfirmEN = userStorage.ipassportData.ipassDataClient.alertChangePasswordConfirmEN;
			var alertChangePasswordConfirmID = userStorage.ipassportData.ipassDataClient.alertChangePasswordConfirmID;
			console.debug("passReg: " + passReg);
			console.debug("alertChangePasswordEN: " + alertChangePasswordEN);
			console.debug("alertChangePasswordID: " + alertChangePasswordID);
			console.debug("alertChangePasswordConfirmEN: " + alertChangePasswordConfirmEN);
			console.debug("alertChangePasswordConfirmID: " + alertChangePasswordConfirmID);
			
			// dari localStorage
			var username = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.loginName;
			console.debug("username: " + username);
			
			var alertChangePassword = "";
			if (lang == "en"){
				alertChangePassword = alertChangePasswordEN;
			} else {
				alertChangePassword = alertChangePasswordID;
			}
			
			var alertChangePasswordConfirm = "";
			if (lang == "en"){
				alertChangePasswordConfirm = alertChangePasswordConfirmEN;
			} else {
				alertChangePasswordConfirm = alertChangePasswordConfirmID;
			}
	
			if (oldPassword == "") {
				strError+='- Old password must be filled \n';
			}
			if (newPassword == "") {
				strError+='- New password must be filled \n';	
			} 
			if (confirmNewPassword == "") {
				strError+='- Re-confirmation new password must be filled \n';	
			}	
	
			if (strError != "") {
				alert(strError);
				return false;
			}
			
			// check regex
			//strError = passwordAgainstRegex(passReg, newPassword, confirmNewPassword, strError, alertChangePassword, alertChangePasswordConfirm, username);
			
	//		if (!passReg.test(newPassword)){
	//			strError+='- Password baru harus terdiri dari 8 sampai 20 nomor dan karakter! \n';			
	//		}
	//		if (!passReg.test(confirmNewPassword)){
	//			strError+='- Konfirmasi Password Baru harus terdiri dari 8 sampai 20 nomor dan karakter! \n';			
	//		}
			
			if(newPassword != confirmNewPassword){
				strError+='- Re-confirmation password does not match New Password! \n';		
			}
			if(newPassword == oldPassword){
				strError+='- Old password and new password can not be same! \n';		
			}
	
			if (strError == ""){
				return true;
			}else{
				alert(strError);
				return false;
			}
		}
	}

	$scope.doLogoutPassExpired = function() {
		logoutPassExpired($scope, $http, $window, $ionicLoading);
	}

	$scope.doChangePassword = function() {
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		//alert("doChangePassword");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var oldPassword = $scope.passwordData.oldPass;
			var newPassword = $scope.passwordData.newPass;
			var confirmNewPassword = $scope.passwordData.newPassConfirm;
			console.debug("oldPassword: " + oldPassword);
			console.debug("newPassword: " + newPassword);
			console.debug("confirmNewPassword: " + confirmNewPassword);
			
			var isContinue = $scope.validatePassword(oldPassword,newPassword,confirmNewPassword);
			if(isContinue==false)return false;
			
			var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
			var ipassport = userStorageMap.ipassport;
			console.debug("ipassport: " + ipassport);
			
			// var E2EE_RANDOM = userStorageMap[ipassport];
			// console.debug("E2EE_RANDOM: " + E2EE_RANDOM);
			
			// init lagi si RSA nya
			// rsa = new RSAEngine();
			// console.debug("publickey: " + publickey);
			// console.debug("sid: " + sid);
			// rsa.init(publickey, sid, E2EE_RANDOM);
			
			var newdata = {};
			newdata['oldPassword'] = oldPassword;
			newdata['newPassword'] = newPassword;
			newdata['confirmNewPassword'] = confirmNewPassword;
			newdata['ipassport']=ipassport;
			// newdata['E2EE_RANDOM']=E2EE_RANDOM;
			newdata['lang']=window.localStorage.getItem("lang");
			var datajson=JSON.stringify(newdata);
			console.debug('datajson:'+datajson);
			
			var url=ipaddress+"/rest/changePasswordV2";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,datajson).success(function(data) {
  				$ionicLoading.hide();
		    	if (data.responseCode == "00"){
		    		var userStorage = JSON.parse(window.localStorage.getItem("userStorage"));

		    		var newdata = {};
					newdata[ipassport] = data[ipassport];
		 			$.extend(true, userStorage, newdata);

		 			window.localStorage.setItem('userStorage', JSON.stringify(userStorage));
		 			console.debug("E2EE_RANDOM: " + userStorageMap[ipassport]);
				    	
				    window.location.href = "#/app/changePasswordExpiredResult";
		    	} else {
		    		alert(data.responseMessage);
		    	}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Unable to process transaction");
				return false;
			});
		}
	};
})


.controller('changePasswordExpiredResultCtrl', function($scope, $http,$ionicLoading, $window) {
	$scope.doGotoHome = function() {
		$window.location.reload();
		window.location.href = "";
		localStorage.setItem("pageType",null);
	}

	$scope.doLogout = function() {
		logout($scope, $http, $window, $ionicLoading);
	}
})


.controller('GenericChildMenuCtrl', function($scope, $rootScope, $http, sessionData) {

   	loadFontSize();

	var childMenuData = sessionData.getChildMenuData();
	$scope.mainMenus = childMenuData;

	if(window.localStorage.getItem('iconMode') == 'itIcon'){
		$scope.itIcon = true; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = false;
	}else  if(window.localStorage.getItem('iconMode') == 'darkIcon'){
		$scope.itIcon = false; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = true;
	} else {
		$scope.itIcon = true; // harusnya pake localStorage
		$scope.markomIcon = false;
		$scope.darkIcon = false;
	}

	if(window.localStorage.getItem('themeMode') == null || window.localStorage.getItem('themeMode') == "null"){
		window.localStorage.setItem('themeMode',"colorGrid");
		window.localStorage.setItem('themeIonicMode','colorGrid');
		document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';

		$scope.themeMode = "colorGrid"; // harusnya pake localStorage
		$rootScope.toggledrag = true; 
	} else {
		$scope.themeMode = window.localStorage.getItem('themeMode');

		if (window.localStorage.getItem('themeIonicMode') == 'standar'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';
   	 	}else if (window.localStorage.getItem('themeIonicMode') == 'dark'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css'; // harusnya nanti bisa ganti ke ionic-dark.css
   	 	}else if (window.localStorage.getItem('themeIonicMode') == 'colorGrid'){
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic-color.css';
   	 	}else{
			document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';
   	 	}

		if (window.localStorage.getItem('themeMode') == "style1" && $rootScope.showLogin == true){
			$rootScope.toggledrag = false; 
		}else{
			$rootScope.toggledrag = true; 
		}
	}


    loadFontSize();
	
	if (window.localStorage.getItem('userStorage') == null){
		$scope.filterBy = ['publicMenu','both'];
	} else {
		$scope.filterBy = ['customerMenu','both'];
	}
	
}).filter('inArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
})

.controller('UpdateAppsCtrl', function($scope, $http, $window,sessionData,$ionicPlatform,$ionicLoading,$timeout,$rootScope,$interval) {

   	loadFontSize();

	var updateAppsInfo = JSON.parse(sessionData.getUpdateAppsInfo());
	$scope.status = updateAppsInfo.status;
	$scope.version = appVersion;
	$scope.dayCount = updateAppsInfo.dayCount;
	$scope.latestVersion = updateAppsInfo.latestVersion;
	$scope.description = updateAppsInfo.description;
	$scope.updateLink = updateAppsInfo.updateLink;

	if ($scope.status == "semiUpdate"){
		$scope.loginData.username = updateAppsInfo.mobileNumber;
		$scope.loginData.password = updateAppsInfo.password;
	}

	$scope.downloadApps = function(){
		$ionicPlatform.ready(function() {
			var appId = $scope.updateLink;
		    cordova.plugins.market.open(appId, {
		       success: function() {
		       // Your stuff here 
		       },
		       failure: function() {
		       // Your stuff here
		       }
		    });
		});
	}

	$scope.login = function(){
		login($scope, $http, $window, sessionData,$ionicLoading,$timeout,$ionicPlatform,$rootScope,$interval);
	}
})

.controller('genericMessageCtrl', function($scope, $http, $window, sessionData) {

   	loadFontSize();

	var genericMessage = sessionData.getGenericMessage();
	$scope.genericMessage = genericMessage;
})

.controller('NotifCtrl', function($scope, $http, $window,$rootScope,sessionData,$ionicLoading,$timeout,$ionicPlatform) {

   	loadFontSize();

//	alert("-- NotifCtrl -- ");
	if (isDevice){
//		alert("localStorage notifications:" + window.localStorage.getItem('notifications'));
		if (window.localStorage.getItem('notifications') == null || 
				window.localStorage.getItem('notifications') == 'null' ||
				window.localStorage.getItem('notifications') == 'undefined'){
			// tampilkan no notification
			$scope.notifications = "There is no notifications";
		} else {
			// tampilkan notifications
			var notifications = JSON.parse(window.localStorage.getItem('notifications'));
//			alert("notifications:" + notifications);
			arrayNotif = notifications.notifications;
//			alert("arrayNotif:" + arrayNotif);
			
			var newInboxNotif = copyTimeMilis(arrayNotif);
			
			$scope.notifications = newInboxNotif;
		}
	} else {
//		var notif={};
//		notif['title']="Welcome";
//		notif['message']="Selamat Datang di Simas Mobile Banking";
//		
//		var actions={};
//		actions['timeMilis']="123";
//		actions['callback']="/app/notif";
//		var actionsList = [];
//		actionsList.push(actions);
//		
//		notif['actions']=actionsList;
//		
//		
//		
//		var notif2={};
//		notif2['title']="Fund Transfer";
//		notif2['message']="FT to 00025677099, amount IDR 12.000";
//		
//		var actions2={};
//		actions2['timeMilis']="124";
//		actions2['callback']="/app/notif";
//		var actionsList2 = [];
//		actionsList2.push(actions2);
//		
//		notif2['actions']=actionsList2;
//		
//		var inboxNotif = [];
//		inboxNotif.push(notif);
//		inboxNotif.push(notif2);
//		
//		// proses copy timeMilis dari dalam actions ke luar
//		var newInboxNotif = copyTimeMilis(inboxNotif);
//		
//		$scope.notifications = newInboxNotif;
		
		
		$scope.notifications = "Notifications not supported for now";
	}
	
})

.controller('NotifDetailCtrl', function($stateParams,$scope,$http,$window,$rootScope,sessionData,$ionicLoading,$timeout,$ionicPlatform) {
	
   	loadFontSize();

//	alert("NotifDetailCtrl: " + $stateParams.notifTimeMilis);
	var timeMilis = $stateParams.notifTimeMilis;
	
//	var notif={};
//	notif['timeMilis']="123";
//	notif['title']="Welcome";
//	notif['message']="Selamat Datang di Simas Mobile Banking";
//	
//	var notif2={};
//	notif2['timeMilis']="124";
//	notif2['title']="Fund Transfer";
//	notif2['message']="FT to 00025677099, amount IDR 12.000";
//	
//	var inboxNotif = [];
//	inboxNotif.push(notif);
//	inboxNotif.push(notif2);
	
	// tampilkan notifications
	var notifications = JSON.parse(window.localStorage.getItem('notifications'));
//	alert("notifications:" + notifications);
	arrayNotif = notifications.notifications;
//	alert("arrayNotif:" + arrayNotif);
	
	var inboxNotif = copyTimeMilis(arrayNotif);
	
	for(var i = 0; i < inboxNotif.length; i++){
	    for(var key in inboxNotif[i]){
	    	if (key == "timeMilis"){
	    		if (inboxNotif[i]["timeMilis"] == timeMilis){
	    			$scope.detailNotification = inboxNotif[i]["message"];
	    			break;
	    		}
	    	}
	    }
	}
	
})

.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.transition('none');
})

;

function copyTimeMilis(arrayNotif){
	var inboxNotif = [];
	
	for(var i = 0; i < arrayNotif.length; i++){
	    for(var key in arrayNotif[i]){
	    	if (key == "title"){
	    		
	    		var arrayActions = arrayNotif[i]["actions"];
	    		var timeMilis;
	    		for(var j = 0; j < arrayActions.length; j++){
	    		    for(var key in arrayActions[j]){
	    		    	if (key == "timeMilis"){
	    		    		timeMilis = arrayActions[j]["timeMilis"];
	    		    	}
	    		    }
	    		}
	    		
	    		var olddata = arrayNotif[i];
	    		var newdata = {};
	    		newdata['timeMilis'] = timeMilis;
	    		$.extend(true, olddata, newdata);
//	    		alert(JSON.stringify(olddata));
	    		
	    		inboxNotif.push(olddata);
	    	}
	    }
	}
	
	return inboxNotif;
}

function passwordAgainstRegex(passReg, newPassword, confirmNewPassword, strError, alertChangePassword, alertChangePasswordConfirm, username){
	console.debug("*** passwordAgainstRegex");
	console.debug("passReg: " + passReg);
	console.debug("newPassword: " + newPassword);
	console.debug("confirmNewPassword: " + confirmNewPassword);
	console.debug("strError: " + strError);
	console.debug("alertChangePassword: " + alertChangePassword);
	
	var passRegArray = passReg.split("|");
	var alertChangePasswordArray = alertChangePassword.split("|");
	var alertChangePasswordConfirmArray = alertChangePasswordConfirm.split("|");
	// newPassword
	for (i = 0; i < passRegArray.length; i++) { 
		console.debug("passRegArray ["+i+"] : " + passRegArray[i]);
		
		// 0 = huruf kecil
		// 1 = huruf besar
		// 2 = angka
		// 3 = not contains
		// 4 = 7-20 character
		var regex = passRegArray[i];
		if (regex.indexOf("badword") > -1){
			var regexArr = regex.split("/");
			console.debug("regexArr[0] : " + regexArr[0]);
			console.debug("regexArr[1] : " + regexArr[1]);
			var newRegex;
			if (regexArr.length > 1){
				newRegex = new RegExp (regexArr[0].replace(/badword/g, username), regexArr[1]);
			} else {
				newRegex = new RegExp (regex.replace(/badword/g, username));
			}
			console.debug("match "+newRegex+" : " + newRegex.test(newPassword));
			if (!newRegex.test(newPassword)){
				strError+='- '+alertChangePasswordArray[i]+' \n';			
			}
			console.debug("strError: " + strError);
		} else {
			regex = new RegExp (regex);
			console.debug("match "+regex+" : " + regex.test(newPassword));
			if (!regex.test(newPassword)){
				strError+='- '+alertChangePasswordArray[i]+' \n';			
			}
			console.debug("strError: " + strError);
		}
	}
	console.debug("strError: " + strError);
	
	// confirmNewPassword
	for (j = 0; j < passRegArray.length; j++) { 
		console.debug("passRegArray ["+j+"] : " + passRegArray[j]);
		
		// 0 = huruf kecil
		// 1 = huruf besar
		// 2 = angka
		// 3 = not contains
		// 4 = 7-20 character
		var regex = passRegArray[j];
		if (regex.indexOf("badword") > -1){
			var regexArr = regex.split("/");
			console.debug("regexArr[0] : " + regexArr[0]);
			console.debug("regexArr[1] : " + regexArr[1]);
			var newRegex;
			if (regexArr.length > 1){
				newRegex = new RegExp (regexArr[0].replace(/badword/g, username), regexArr[1]);
			} else {
				newRegex = new RegExp (regex.replace(/badword/g, username));
			}
			console.debug("match "+newRegex+" : " + newRegex.test(confirmNewPassword));
			if (!newRegex.test(confirmNewPassword)){
				strError+='- '+alertChangePasswordConfirmArray[j]+' \n';			
			}
			console.debug("strError: " + strError);
		} else {
			regex = new RegExp (regex);
			console.debug("match "+regex+" : " + regex.test(confirmNewPassword));
			if (!regex.test(confirmNewPassword)){
				strError+='- '+alertChangePasswordConfirmArray[j]+' \n';			
			}
			console.debug("strError: " + strError);
		}
	}
	console.debug("strError: " + strError);
	
	return strError;
}