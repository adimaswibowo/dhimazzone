/**
 * this js to construct grandMenu, baik sideMenu maupun contentMenu
 */

function constructGrandMenu($scope,$rootScope,menuPosition,$http,$window,$ionicLoading){
	loadFontSize();
	var defaultMenuJsonObj;
	var menuJson;

//	if (window.localStorage.getItem('userStorage') == null){
//		if(window.localStorage.getItem('GrandMenuJson') != null){
//			defaultMenuJsonObj = JSON.parse(window.localStorage.getItem('GrandMenuJson'));
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else {
			defaultMenuJsonObj = JSON.parse(defaultMenuJson);
			menuJson = defaultMenuJsonObj.menuJson;
//		}
//	} else {
//		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
//
//		if (userStorage.ipassportData.ipassDataClient.GrandMenuJson == null && userStorage.ipassport == null){
//			defaultMenuJsonObj = JSON.parse(defaultMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport == null){
//			defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport != null){
//			defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		}
//	}
	
	if (menuPosition == 'content'){
		if (window.localStorage.getItem('userStorage') == null){
			var newMenuJson = [];
			for(var i = 0; i < menuJson.length; i++){
			    for(var key in menuJson[i]){
			    	if (key == "lvlMenu"){
			    		if (menuJson[i]["lvlMenu"] == 'publicMenu' || menuJson[i]["lvlMenu"] == 'both'){
			    			newMenuJson.push(menuJson[i]);
			    		}
			    	}
			    }
			}
			menuJson = newMenuJson;
			$rootScope.showLogin = true;
		} else {
			// cek iPassport expired
			var userStorageMap = JSON.parse(window.localStorage.getItem('userStorage'));
			console.log("userStorageMap: " + userStorageMap);
			doCheckIPassport(userStorageMap, $http, $scope, $window,$ionicLoading);
			
			var newMenuJson = [];
			for(var i = 0; i < menuJson.length; i++){
			    for(var key in menuJson[i]){
			    	if (key == "lvlMenu"){
			    		if (menuJson[i]["lvlMenu"] == 'customerMenu' || menuJson[i]["lvlMenu"] == 'both'){
			    			newMenuJson.push(menuJson[i]);
			    		}
			    	}
			    }
			}
			menuJson = newMenuJson;
			$rootScope.showLogin = false;
		}
	}
	
	$scope.mainMenus = menuJson;
	
	if (window.localStorage.getItem('userStorage') == null){
		$scope.filterBy = ['publicMenu','both'];
		$scope.rightMenu = ['publicMenu','both'];
		$scope.extraMenu = ['publicMenu','both'];
	} else {
		$scope.filterBy = ['customerMenu','both'];
		$scope.rightMenu = ['customerMenu','both'];
		$scope.extraMenu = ['customerMenu','both'];
	}
}

function constructChildGrandMenu($scope, $state,menuPosition,code,sessionData,level,id){
	loadFontSize();
	var defaultMenuJsonObj;
	var menuJson;

//	if (window.localStorage.getItem('userStorage') == null){
//		if(window.localStorage.getItem('GrandMenuJson') != null){
//			defaultMenuJsonObj = JSON.parse(window.localStorage.getItem('GrandMenuJson'));
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else {
			defaultMenuJsonObj = JSON.parse(defaultMenuJson);
			menuJson = defaultMenuJsonObj.menuJson;
//		}
//	} else {
//		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
//
//		if (userStorage.ipassportData.ipassDataClient.GrandMenuJson == null && userStorage.ipassport == null){
//			defaultMenuJsonObj = JSON.parse(defaultMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport == null){
//			defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport != null){
//			defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		}
//	}

	if (level == "1"){
		//alert("level: " + level);
		for(var i = 0; i < menuJson.length; i++){
		    for(var key in menuJson[i]){
		    	if (key == "code"){
		    		if (menuJson[i]["code"] == code){
		    			//alert(menuJson[i]["nodeList"]);
		    			sessionData.setChildMenuData(menuJson[i]["nodeList"]);
		    			var location = window.location.href;
		    			if(location.indexOf("genericChildMenu")>=1){
		    				$state.reload()
		    			}else{
		    				window.location.href = "#/app/genericChildMenu";
		    			}
		    		}
		    	}
		    }
		}
	} else if (level == "2"){
		var splitId = id.split(".");
		var rootId = splitId[0];
		var nodeList = null;
		
		for(var i = 0; i < menuJson.length; i++){
		    for(var key in menuJson[i]){
		    	if (key == "id"){
		    		if (menuJson[i]["id"] == rootId){
		    			nodeList = menuJson[i]["nodeList"];
		    		}
		    	}
		    }
		}
		for(var j = 0; j < nodeList.length; j++){
		    for(var key in nodeList[j]){
		    	if (key == "code"){
		    		if (nodeList[j]["code"] == code){
		    			sessionData.setChildMenuData(nodeList[j]["nodeList"]);
		    			window.location.href = "#/app/genericChildMenuLevel2";
		    		}
		    	}
		    }
		}
	} else {
		// ini harus nya search diynamicly
	}
	
}

function doCheckIPassport(userStorageMap, $http, $scope, $window,$ionicLoading){
	console.debug("CHECK IPASSPORT");
	console.debug("userStorageMap.ipassport: " + userStorageMap.ipassport);
	
	var url=ipaddress+"/rest/loginV2/checkIPassport";
	var ipassport = userStorageMap.ipassport;
	datajson = '{\"ipassport\":\"'+ipassport+'\"}';
	/*$ionicLoading.show({
	 	template: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });*/
	console.debug("datajson: " + datajson);
	$http.post(url,datajson).success(function(data) {
		/*$ionicLoading.hide();*/
		console.debug("result: " + JSON.stringify(data));
    	if (data.responseCode == '00'){
    	} else {
    		logout($scope, $http, $window,$ionicLoading);
    	}
	}).error(function(){
		/*$ionicLoading.hide();*/
//		$rootScope.networkIndicator = false;
//		alert("Server Error");
		return false;
	});
}

function getUrlAdvertisement($scope,$sce){
	console.debug("getUrlAdvertisement");
	var defaultMenuJsonObj;
	var menuJson;

//	if (window.localStorage.getItem('userStorage') == null){
//		if(window.localStorage.getItem('GrandMenuJson') != null){
//			defaultMenuJsonObj = JSON.parse(window.localStorage.getItem('GrandMenuJson'));
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else {
			defaultMenuJsonObj = JSON.parse(defaultMenuJson);
			menuJson = defaultMenuJsonObj.menuJson;
//		}
//	} else {
//		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
//
//		if (userStorage.ipassportData.ipassDataClient.GrandMenuJson == null && userStorage.ipassport == null){
//			defaultMenuJsonObj = JSON.parse(defaultMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport == null){
//			defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		} else if (userStorage.ipassportData.ipassDataClient.GrandMenuJson != null && userStorage.ipassport != null){
//			defaultMenuJsonObj = JSON.parse(userStorage.ipassportData.ipassDataClient.GrandMenuJson);
//			menuJson = defaultMenuJsonObj.menuJson;
//		}
//	}

	for(var i = 0; i < menuJson.length; i++){
	    for(var key in menuJson[i]){
	    	if (key == "code"){
	    		if (menuJson[i]["code"] == 'advertisement'){
	    			$scope.trustedUrl = $sce.trustAsResourceUrl(menuJson[i]["functionMenu"]);
	    			break;
	    		}
	    	}
	    }
	}
}