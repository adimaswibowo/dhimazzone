function logout($scope, $http, $window,$ionicLoading){
	if (null != window.localStorage.getItem("userStorage") && window.localStorage.getItem("userStorage") != ""){
		var	userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
		
		var newdata={};
		newdata['ipassport']=userStorageMap.ipassport;
		var datajson=JSON.stringify(newdata);
		
		var url=ipaddress+"/rest/logoutV2";
		console.debug("hsmInit, url:"+url);
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		$http.post(url,datajson).success(function(data) {
			$ionicLoading.hide();
		    _clearLocalStorage();
			window.location.href = "#/app/main";
			$window.location.reload();

		}).error(function(){
			$ionicLoading.hide();
			_clearLocalStorage();
			window.location.href = "#/app/main";
			$window.location.reload();
			//alert("Server Error");
			//return false;
		});
	}
}
		
// function logoutPassExpired($scope, $http, $window,$ionicLoading){
// 	console.debug("logoutPassExpired");
// 	if (null != window.sessionStorage.getItem("tempData") && window.sessionStorage.getItem("tempData") != ""){
// 		console.debug("tempData not null");
// 		var	userStorageMap = JSON.parse(window.sessionStorage.getItem("tempData"));
		
// 		var newdata={};
// 		newdata['ipassport']=userStorageMap.ipassport;
// 		var datajson=JSON.stringify(newdata);
		
// 		var url=ipaddress+"/rest/logoutV2";
// 		console.debug("hsmInit, url:"+url);
// 		$ionicLoading.show({
// 		 	template: 'Loading...',
// 	        animation: 'fade-in',
// 	        showBackdrop: true,
// 	        maxWidth: 200,
// 	        showDelay: 0
// 	    });
// 		$http.post(url,datajson).success(function(data) {
// 			$ionicLoading.hide();
// 		    _clearLocalStorage();
// 			window.location.href = "#/app/main";
// //			$window.location.reload();

// 		}).error(function(){
// 			$ionicLoading.hide();
// 			_clearLocalStorage();
// 			window.location.href = "#/app/main";
// //			$window.location.reload();
// 			//alert("Server Error");
// 			//return false;
// 		});
// 	}
// }

function logoutPassExpired($scope, $http, $window,$ionicLoading){
	console.debug("logoutPassExpired");
	if (null != window.localStorage.getItem("userStorage") && window.localStorage.getItem("userStorage") != ""){
		console.debug("userStorage not null");
		var	userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
		
		var newdata={};
		newdata['ipassport']=userStorageMap.ipassport;
		var datajson=JSON.stringify(newdata);
		
		var url=ipaddress+"/rest/logoutV2";
		console.debug("hsmInit, url:"+url);
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		$http.post(url,datajson).success(function(data) {
			$ionicLoading.hide();
		    _clearLocalStorage();
			window.location.href = "#/app/main";
//			$window.location.reload();

		}).error(function(){
			$ionicLoading.hide();
			_clearLocalStorage();
			window.location.href = "#/app/main";
//			$window.location.reload();
			//alert("Server Error");
			//return false;
		});
	}
}

function _clearLocalStorage(){
	var ipAddressDefault = window.localStorage.getItem("IPaddress");
    var IPaddressProd = window.localStorage.getItem("IPaddressProd");
    var IPaddressDev = window.localStorage.getItem("IPaddressDev");

    var mobileNumberStickiness = window.localStorage.getItem("mobileNumberStickiness");
    var userNameStickiness = window.localStorage.getItem("userNameStickiness");
    var accountNumberStickinessALL = window.localStorage.getItem("accountNumberStickinessALL");
    var accountNumberStickinessFT = window.localStorage.getItem("accountNumberStickinessFT");
    var accountNumberStickinessBP = window.localStorage.getItem("accountNumberStickinessBP");
    var iconMode = window.localStorage.getItem('iconMode');
    var themeMode = window.localStorage.getItem('themeMode');
    var language = window.localStorage.getItem('lang');
    var fontSize = window.localStorage.getItem('fontSize');
    var themeIonicMode = window.localStorage.getItem('themeIonicMode');
    var sessionCode = window.localStorage.getItem("sessionCode");
    var grandMenuJson = window.localStorage.getItem("GrandMenuJson");
    var internationalizationSimobiPlus = window.localStorage.getItem('InternationalizationSimobiPlus');
    
    var notifications = null;
    if (window.localStorage.getItem('notifications') == null || 
			window.localStorage.getItem('notifications') == 'null' ||
			window.localStorage.getItem('notifications') == 'undefined'){
    	// do nothing, alias biar aja kesimpen null or undefined
    } else {
    	notifications = window.localStorage.getItem('notifications');
    }

	var clearLocalStorageKeyTemp = null;
	if (window.localStorage.getItem('clearLocalStorageKey') != null){
		clearLocalStorageKeyTemp = window.localStorage.getItem('clearLocalStorageKey');
	}

    
	//untuk ngilangin data" temporary yg di keep di local storage
	window.localStorage.clear();
	window.sessionStorage.clear();

	
	window.localStorage.setItem('IPaddress',ipAddressDefault);
    window.localStorage.setItem('IPaddressProd',IPaddressProd);
    window.localStorage.setItem('IPaddressDev',IPaddressDev);

	window.localStorage.setItem('mobileNumberStickiness',mobileNumberStickiness);
    window.localStorage.setItem('userNameStickiness',userNameStickiness);
    window.localStorage.setItem('accountNumberStickinessALL',accountNumberStickinessALL);
    window.localStorage.setItem('accountNumberStickinessFT',accountNumberStickinessFT);
    window.localStorage.setItem('accountNumberStickinessBP',accountNumberStickinessBP);
    window.localStorage.setItem('iconMode',iconMode);
    window.localStorage.setItem('themeMode',themeMode);
	window.localStorage.setItem('lang',language);
	window.localStorage.setItem('fontSize',fontSize);
	window.localStorage.setItem('themeIonicMode',themeIonicMode);
	window.localStorage.setItem('notifications',notifications);
	window.localStorage.setItem('sessionCode',sessionCode);
	window.localStorage.setItem('GrandMenuJson',grandMenuJson);
	window.localStorage.setItem('clearLocalStorageKey',clearLocalStorageKeyTemp);
	if (internationalizationSimobiPlus != null){
		window.localStorage.setItem('InternationalizationSimobiPlus',internationalizationSimobiPlus);
	}
}



// function ini dipanggil JIKA apps yg lama butuh di clear LocalStorage nya secara auto
function _clearLocalStorageAfterUpdateApps(){
	var ipAddressDefault = window.localStorage.getItem("IPaddress");
    var IPaddressProd = window.localStorage.getItem("IPaddressProd");
    var IPaddressDev = window.localStorage.getItem("IPaddressDev");

    var themeMode = window.localStorage.getItem('themeMode');
    var language = window.localStorage.getItem('lang');
    var fontSize = window.localStorage.getItem('fontSize');
    var themeIonicMode = window.localStorage.getItem('themeIonicMode');
    var iconMode = window.localStorage.getItem('iconMode');
    
    
	//untuk ngilangin data" temporary yg di keep di local storage
	window.localStorage.clear();
	window.sessionStorage.clear();

	
	window.localStorage.setItem('IPaddress',ipAddressDefault);
    window.localStorage.setItem('IPaddressProd',IPaddressProd);
    window.localStorage.setItem('IPaddressDev',IPaddressDev);

    window.localStorage.setItem('themeMode',themeMode);
	window.localStorage.setItem('lang',language);
	window.localStorage.setItem('fontSize',fontSize);
	window.localStorage.setItem('themeIonicMode',themeIonicMode);
	window.localStorage.setItem('iconMode',iconMode);

	console.debug("clear data Success");
}


					
	
	//----------------------------------------------------------------------------------harusnya nanti ini di file lain 
	//dipanggil disaat timeout 10 menit di client

	function clearSession(){
		_clearLocalStorage();
		backToIndex();
	}
	
	function clearSessionClient(){
		_clearLocalStorage();
		window.location.href = "#/app/main";
		window.location.reload();
	}

	function getThemes(){
		var themes = window.localStorage.getItem("themes");
		if (themes == "" || themes == null || themes == "null"){
			themes = "default";
		}
		return themes;
	}

	function getFontSize(){
		var fontSize = window.localStorage.getItem("fontSize");
		if (fontSize == "" || fontSize == null || fontSize == "null"){
			fontSize = "S";
		}
		return fontSize;
	}
		
