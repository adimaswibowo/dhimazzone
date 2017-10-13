/**
 * do login
 */

function _updateUserStorageAfterLogin(data){
	console.debug("JSON.stringify(data): " + JSON.stringify(data));
	console.debug("ipassport: " + data.ipassport);
	console.debug("sessionId: " + data.sessionId);
	console.debug("ipassportData: " + data.ipassportData);

	var defaultMenuJsonObj;
	if(data.reconstructIPassportData!=null){
		// ipassport reconstruct dr awal = data full dapet dari server"
		window.localStorage.setItem('userStorage', JSON.stringify(data));

		// update grandMenu nya
		//alert("GrandMenuJson: " + data.ipassportData.ipassDataClient.GrandMenuJson);
		console.debug("defaultMenuJson: " + defaultMenuJson);
		defaultMenuJsonObj = JSON.parse(defaultMenuJson);
		if (data.ipassportData.ipassDataClient.GrandMenuJson == null || 
			data.ipassportData.ipassDataClient.GrandMenuJson == undefined ||
			data.ipassportData.ipassDataClient.GrandMenuJson == 'undefined'){
			window.localStorage.setItem('GrandMenuJson', defaultMenuJsonObj);
		} else {
			window.localStorage.setItem('GrandMenuJson', data.ipassportData.ipassDataClient.GrandMenuJson);
		}
	}else{
		// ipassport gak reconstruct dr awal, update ipassport&sessionId aja
		var userStorage=JSON.parse(window.localStorage.getItem('userStorage'));
		userStorage.ipassport=data.ipassport;
		userStorage.sessionId=data.sessionId;//sebenernya ipassport = sessionId sih...
		window.localStorage.setItem('userStorage', JSON.stringify(userStorage));
	}
}

function doLogin($scope, $http, $window, sessionData,$ionicLoading,$timeout,$ionicPlatform,$rootScope,$interval,isDevicePersonal){
	var userName = $scope.loginData.username;
	var password = $scope.loginData.password;

	if (isDevicePersonal){
		if (userName == null || userName == "" || password == "" || password == null){
			alert("Mobile number or Password is empty");
			return false;
		}

		var mobileNumber = getNewPhoneNumber(userName);

		// flag untuk cegah user untuk login jika update page muncul
    	var rcVersionCheck = null;
    	var rcDayCount = null;

		// check App Version
		var url=ipaddress+"/rest/serverCheckV2/versioncheck";
		var datajson = '{\"currentVersion\":\"'+appVersion+'\",\"devicePlatform\":\"'+devicePlatform+'\",\"vcMobileNumber\":\"'+mobileNumber+'\",\"vcPassword\":\"'+password+'\"}';
		/*$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });*/
		$http.post(url,datajson).success(function(data) {
			/*$ionicLoading.hide();*/
			if (data.responseCode == '00'){
				rcVersionCheck = data.responseCode;
				rcDayCount = data.dayCount;

				if (data.dayCount > 0){
					// notification update, apps masih bisa Login
					console.debug("Masa berlaku apps anda tinggal " + data.dayCount + " hari, mohon segera melakukan update apps");

					var newdata={};
					newdata['status']="semiUpdate";
    				newdata['dayCount']=data.dayCount;
    				newdata['latestVersion']=data.latestVersion;
    				newdata['description']=data.description;
    				newdata['updateLink']=data.updateLink;
    				newdata['mobileNumber']=mobileNumber;
    				newdata['password']=password;
    				var newDataJson=JSON.stringify(newdata);

					sessionData.setUpdateAppsInfo(newDataJson);
					window.location.href = "#/app/updateApps";
				} else {
					// notification update, apps Force Update
					console.debug("Apps tidak dapat digunakan karena out of date, mohon segera melakukan update");

					var newdata={};
					if (data.dayCount == null){
						newdata['status']="semiUpdate";
						newdata['mobileNumber']=mobileNumber;
    					newdata['password']=password;
    					newdata['dayCount']='n';
					} else {
						newdata['status']="forceUpdate";
						newdata['dayCount']=data.dayCount;
					}
    				newdata['latestVersion']=data.latestVersion;
    				newdata['description']=data.description;
    				newdata['updateLink']=data.updateLink;
    				var newDataJson=JSON.stringify(newdata);

					sessionData.setUpdateAppsInfo(newDataJson);
					$window.location.href = "#/app/updateApps";
				}
			} else if (data.responseCode == '01'){
				// Login
				login($scope, $http, $window, sessionData,$ionicLoading,$timeout,$ionicPlatform,$rootScope,$interval,isDevicePersonal);
			} else if (data.responseCode == '02'){
				rcVersionCheck = data.responseCode;
				
				console.debug("Error in server");
				console.debug(data.responseMessage);

				sessionData.setGenericMessage(data.responseMessage);
				window.location.href = "#/app/genericMessage";
			} else {
				rcVersionCheck = data.responseCode;
				
				console.debug(data.responseMessage);

				sessionData.setGenericMessage(data.responseMessage);
				window.location.href = "#/app/genericMessage";
			}
		}).error(function(){
			//alert("Connection Timeout, Please check your connection. If the problem persist, call our Customer Care in Contact Us menu");
			
			$ionicLoading.show({
		      template: 'Connection Timeout, Please check your connection. If the problem persist, call our Customer Care in Contact Us menu'
		    });

		    $timeout(function() {
	    		$ionicLoading.hide();
			}, 1500);
			return false;
		});

		// call Login Function
	}else{
		if (userName == null || userName == "" || password == "" || password == null){
			alert("Username or Password is empty");
			return false;
		}

		// call Login Function
		login($scope, $http, $window, sessionData,$ionicLoading,$timeout,$ionicPlatform,$rootScope,$interval,isDevicePersonal);
	}

};

function login($scope, $http, $window, sessionData,$ionicLoading,$timeout,$ionicPlatform,$rootScope,$interval,isDevicePersonal){
	var userName = $scope.loginData.username;
	var password = $scope.loginData.password;
	var newdata={};
	var E2EE_RANDOM = clientRandom;
	if(isDevicePersonal == true){
		newdata['loginMobileNumber']=getNewPhoneNumber(userName);
		newdata['pushToken']=pToken;
	} else{
		newdata['username']=userName;
	}
	
//	newdata['loginPassword']=getRPIN(password);
	newdata['loginPassword']=password;
	newdata['clientCheck']=webBrowser;
	newdata['sessionCode']=window.localStorage.getItem("sessionCode");
	newdata['E2EE_RANDOM']=E2EE_RANDOM;
	newdata['isDevice']=isDevice;
	
	var datajson=JSON.stringify(newdata);
	console.debug("datajson: " + datajson);
	var url=ipaddress+"/rest/loginV2/newAmb";
	console.debug("url: " + url);
	$ionicLoading.show({
	 	template: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
	$http.post(url,datajson).success(function(data) {
		$ionicLoading.hide();
		if (data != null){
			if (data.responseCode == "00"){
				if(isDevicePersonal == true){
					stickinessMobileNumber(getNewPhoneNumber(userName));
				} else{
					stickinessUserName(userName);
				}
				
				// jika password expired, more than 90 days
				if (data.changePassword == "true"){
					console.debug('password expired');
					alert(data.expiredNote);
					localStorage.setItem("userStorage",JSON.stringify(data));
					window.location.href = "#/app/changePasswordExpired";
				} else {
					_updateUserStorageAfterLogin(data);
					
					var lastActiveDate = new Date(); // Now
			        localStorage.setItem('lastActiveDate', lastActiveDate);

			        createInternationalization(data);
					
					$window.location.reload();
					window.location.href = "";
				}
			} if (data.responseCode == "03"){
				// HSM gagal validasi, maka call initHSM lagi
				console.debug("login.js >> data.responseCode == 03");
				hsmInit($http,$rootScope,$interval,$ionicLoading,$timeout);
				
				$ionicLoading.show({
			      template: data.responseMessage
			    });
			    $timeout(function() {
		    		$ionicLoading.hide();
				}, 1500);
			    
			    return false;
			} else {
				if (data.responseMessage == null || data.responseMessage == "null"){
					//alert("Your account doesn't exist");

					$ionicLoading.show({
				      template: 'Your account doesn\'t exist'
				    });

				    $timeout(function() {
			    		$ionicLoading.hide();
					}, 1500);
				} else  {
					//alert(data.responseMessage);

					$ionicLoading.show({
				      template: data.responseMessage
				    });

				    $timeout(function() {
			    		$ionicLoading.hide();
					}, 1500);
				}
				return false;
			}
		} else {
			return false;
		}
	}).error(function(){
		//alert("Connection Timeout, Please check your connection. If the problem persist, call our Customer Care in Contact Us menu");
		
		$ionicLoading.show({
	      template: 'Connection Timeout, Please check your connection. If the problem persist, call our Customer Care in Contact Us menu'
	    });

	    $timeout(function() {
    		$ionicLoading.hide();
		}, 1500);
		return false;
	});
}

function getNewPhoneNumber(mobileNumber){
	var newPhoneNumber = mobileNumber;
	var areaCode = mobileNumber.substring(0, 3);
	var phoneNumberLength = mobileNumber.length;
	if (areaCode.substring(0, 3) == "+62"){
		newPhoneNumber = mobileNumber.substring(1, 3) + mobileNumber.substring(3, phoneNumberLength);
	} else if (areaCode.substring(0, 1) == "0"){
		newPhoneNumber = "62" + mobileNumber.substring(1, phoneNumberLength);
	} else if (areaCode.substring(0, 1) == "8"){
		newPhoneNumber = "62" + mobileNumber.substring(0, phoneNumberLength);
	}
	return newPhoneNumber;
}

function doRefreshInAppBrowser($http,$window,$ionicLoading) {
	//alert("*** doRefreshInAppBrowser");
	// cek apakah session nya sudah timeout
	var isTimeout = calculateTimeOut();
	if (isTimeout){
		// hapus localStorage and goTo Welcome html
		clearSessionClient();
	} else {
		
		var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
		var sessionCode = window.localStorage.getItem("sessionCode");

		var newdata={};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['sessionCode']=sessionCode;
		newdata['lang']=window.localStorage.getItem("lang");
		
		var datajson=JSON.stringify(newdata);
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		$http.post(ipaddress+'/rest/inApp/constructUserStorage',datajson)
        .success(function(data) {
        	$ionicLoading.hide();
        	if (data != null){
				if (data.responseCode == "00"){
					//alert("*** return SUCCESS from Server");
					_clearLocalStorage();
					
					_updateUserStorageAfterLogin(data);
					//alert("*** SUCCESS Update UserStorage");	
					
	 	    // 		try {
	 					// var savedMerchantListNew = JSON.parse(window.localStorage.getItem("savedMerchantListNew"));

	 					// //buat billpay
		 				// if (savedMerchantListNew != null){
		 	   //  			window.localStorage.setItem('savedMerchantListNew', "");
		 				// }
	 	    // 		} catch(e) {}
					
					$window.location.reload();
					window.location.href = "";

				} else {
					if (data.responseMessage == null || data.responseMessage == "null"){
						alert("Your account doesn't exist");
					} else  {
						alert(data.responseMessage);
					}
					return false;
				} 
			} else {
				return false;
			}
		      
        }).error(function(){
        	$ionicLoading.hide();
        	alert("Unable to process transaction");
       	 	return false;
	    });
	}
}

function createInternationalization(data){
	//alert("CaptionGrandMenuJson: " + data.ipassportData.ipassDataClient.CaptionGrandMenuJson);
	if(data.ipassportData.ipassDataClient.CaptionGrandMenuJson != null){
		// dari server
		var CaptionGrandMenuObj = JSON.parse(data.ipassportData.ipassDataClient.CaptionGrandMenuJson);
		var enCaptionGrandMenuObj = CaptionGrandMenuObj.en;
		var idCaptionGrandMenuObj = CaptionGrandMenuObj.id;

		// di local
		var langEnObj = JSON.parse(langEn);
		var langIdObj = JSON.parse(langId);

		// Merge dari yg di local dengan dari server
		var objectEn = angular.merge(langEnObj, enCaptionGrandMenuObj);
		var objectId = angular.merge(langIdObj, idCaptionGrandMenuObj);

		var newdata={};
		newdata['en']=objectEn;
		newdata['id']=objectId;
		
		var newI18n=JSON.stringify(newdata);

		// create localStorage Internationalization
		window.localStorage.setItem('InternationalizationSimobiPlus', newI18n);
	}
}