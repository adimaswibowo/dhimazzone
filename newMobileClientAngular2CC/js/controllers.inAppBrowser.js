angular.module('inAppBrowser.controllers', ['ngTouch'])

//inAppBrowser
.controller('InAppBrowserCtrl', function($scope, $rootScope, $routeParams, $http, $translate, $sce, $ionicLoading, $ionicPlatform, $cordovaDevice) {
		
   	loadFontSize();

	console.debug("<<<< InAppBrowserCtrl >>>>");

	var functionMenuUri = window.localStorage.getItem("functionMenuUri");
	console.debug("functionMenuUri: " + functionMenuUri);
	var start = functionMenuUri.indexOf("&view=");
	console.debug("start: " + start);
	var viewAt = functionMenuUri.substr(start+6);
	console.debug("viewAt: " + viewAt);

	$scope.readSmsInApp = function () {
		//alert("readSmsInApp ");
		startReadSmsInboxInAppBrowser($scope,$cordovaDevice,$ionicPlatform,$translate);
	}

	if (viewAt.match('^both') || viewAt.match('^publicMenu')){
		console.debug("gak pake ipassport gan, pake sessionCode");
		var substringUrl = functionMenuUri.substring(14); //substring jadi xxx");	
		var url = substringUrl.substr(0, substringUrl.length-3); //substring jadi xxx

		$scope.inAppBrowserMobile = function () {
			// var default minimum version untuk advance theme android
			var defMinAndroidThemeVersion = 440;

			var fontSize = "";
			var fontSizeObject = window.localStorage.getItem('fontSize');
		    if (fontSizeObject == null || fontSizeObject == "undefined" || fontSizeObject == "" || fontSizeObject == "null"){
				fontSize = "0";
		    }else{
		    	fontSizeObject = JSON.parse(fontSizeObject);
		    	fontSize = fontSizeObject.id;
		    }
	    	
	    	//alert("isDevice fontSize: " + fontSize);
	    	
	    	var iconMode = window.localStorage.getItem("iconMode");
	    	//alert("isDevice iconMode: " + iconMode);
	    	
	    	if(iconMode == null || iconMode == "null"){
	    		window.localStorage.setItem('iconMode',"itIcon");
	    	}
	    	
	    	var themeMode = window.localStorage.getItem("themeMode");
	    	//alert("isDevice themeMode: " + themeMode);
	    	
	    	if(themeMode == null || themeMode == "null"){
	    		window.localStorage.setItem('themeMode',"colorGrid");
	    	}
	    	
	    	var themeIonicMode = window.localStorage.getItem("themeIonicMode");
	    	//alert("isDevice themeIonicMode: " + themeIonicMode);
	    	
	    	if(themeIonicMode == null || themeIonicMode == "null"){
	    		window.localStorage.setItem('themeIonicMode',"colorGrid");
	    	}
				
			if(isDevice){
				//alert("app isDevice: "+isDevice);

		    	var clearDeviceVersion = deviceVersion.replace(/\./g,'');
		    	//alert("isDevice true clearDeviceVersion: " + clearDeviceVersion);

		    	if (devicePlatform == 'Android'){
		    		if (clearDeviceVersion < defMinAndroidThemeVersion){
		    			//alert('Android themes lama');
		    	    	
		    			/* Implement Advance or Classic */
		    			themesVersion = 'c';
		    			//console.debug("isDevice true themesVersion: " + themesVersion);
		    	    	
		    		} else {
		    			//alert('Android themes baru');
		    	    	
		    			/* Implement Advance or Classic */
		    			themesVersion = 'a';
		    			//console.debug("isDevice true themesVersion: " + themesVersion);
		    		}
		    		
		    	} else {
		    		//alert('iOS themes baru');

		    		/* Implement Advance or Classic */
					themesVersion = 'a';
					//console.debug("isDevice true themesVersion: " + themesVersion);
		    	}
		    	
			}else{
				//alert("browser isDevice: "+isDevice);
					
		    	/* Implement Advance or Classic */
				themesVersion = 'a';
				//console.debug("isDevice false themesVersion: " + themesVersion);
			}			

    		var lang = window.localStorage.getItem("lang"); 

    	   	console.debug("ipaddress : "+ipaddress);
    	   	console.debug("url : "+url);
			//alert("ipassport: "+userStorage.ipassport);
    	   	//alert("isDevice : "+isDevice);
    		//alert("devicePlatform : "+devicePlatform);
    		//alert("iconMode : "+iconMode);
    		//alert("themeMode : "+themeMode);
    		//alert("themeIonicMode : "+themeIonicMode);
    	   	//alert("fontSize : "+fontSize);
    	   	//alert("themesVersion : "+themesVersion);
    		//alert("lang : "+lang);
    		
    	   	//logic buat loading
    		$ionicLoading.show({
    			template: '<i class=""></i>Loading...'
    		});
    		
    		$scope.iframeUrl = '';
    		ionic.Platform.ready(function(){
    			$scope.iframeUrl = ipaddress+'/'+url+'&ipassport='+window.localStorage.getItem("sessionCode")+'&isDevice='+isDevice+'&devicePlatform='+devicePlatform+'&iconMode='+iconMode+'&themeMode='+themeMode+'&themeIonicMode='+themeIonicMode+'&fontSize='+fontSize+'&themesVersion='+themesVersion+'&lang='+lang;
    		});
    			
    		$scope.iframeLoadedCallBack = function(){
    			$ionicLoading.hide();
    		}	           	
		}
			
		$scope.inAppBrowserMobile();

	} else {
		console.debug("pake ipassport gan");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			//var functionMenuUri = window.localStorage.getItem("functionMenuUri");
			
			//	inAppBrowser("xxx");
			var substringUrl = functionMenuUri.substring(14); //substring jadi xxx");	
			var url = substringUrl.substr(0, substringUrl.length-3); //substring jadi xxx
			
			$scope.inAppBrowserMobile = function () {
			//	alert("function inAppBrowserMobile");
					
					//ini buat dapetin category di menu portfolio
			//		if (url.indexOf("portfolioWealthManagementV2") >= 0 || url.indexOf("linkUnlinkWealthManagementV2") >= 0 || url.indexOf("inAppBrowserAngularV2") >= 0){
			//			var urlIndexOf = url.indexOf("cat=");			
			//			var urlSubstring = url.substring(urlIndexOf);
			////			alert("urlIndexOf : "+urlIndexOf);
			////			alert("urlSubstring : "+urlSubstring);
			//			
			//	 		var urlResult = "";
			//	 		var splitUrl = new Array();
			//	 		
			//	 		if (urlSubstring.indexOf("&") >= 0){
			//	 			splitUrl = urlSubstring.split("&");
			//		 		urlResult = splitUrl[0];
			//	 		}else{
			//	 			urlResult = urlSubstring;
			//	 		}
			//	 		
			//	 		var splitUrlResult = new Array();
			//	 		splitUrlResult = urlResult.split("=");
			// 			//alert("urlResult : "+splitUrlResult[0]);
			// 			//alert("urlResult : "+splitUrlResult[1]);
			//	 	  
			//	 		cat = splitUrlResult[1];
			////	 		alert("cat : "+cat);
			//	 		
			//			window.localStorage.setItem('cat',cat);
			//		}
					
				// var default minimum version untuk advance theme android
				var defMinAndroidThemeVersion = 440;
				
				var devicePlatform = "";

		    	var fontSize = "";
				var fontSizeObject = window.localStorage.getItem('fontSize');
			    if (fontSizeObject == null || fontSizeObject == "undefined" || fontSizeObject == "" || fontSizeObject == "null"){
					fontSize = "0";
			    }else{
			    	fontSizeObject = JSON.parse(fontSizeObject);
			    	fontSize = fontSizeObject.id;
			    }
		    	//alert("isDevice fontSize: " + fontSize);
		    	
		    	var iconMode = window.localStorage.getItem("iconMode");
		    	//alert("isDevice iconMode: " + iconMode);
		    	
		    	if(iconMode == null || iconMode == "null"){
		    		window.localStorage.setItem('iconMode',"itIcon");
		    	}
		    	
		    	var themeMode = window.localStorage.getItem("themeMode");
		    	//alert("isDevice themeMode: " + themeMode);
		    	
		    	if(themeMode == null || themeMode == "null"){
		    		window.localStorage.setItem('themeMode',"colorGrid");
		    	}
		    	
		    	var themeIonicMode = window.localStorage.getItem("themeIonicMode");
		    	//alert("isDevice themeIonicMode: " + themeIonicMode);
		    	
		    	if(themeIonicMode == null || themeIonicMode == "null"){
		    		window.localStorage.setItem('themeIonicMode',"colorGrid");
		    	}
				
				if(isDevice){
					//alert("app isDevice: "+isDevice);

					// Device Platform. ex: Android, iOS
					devicePlatform = $cordovaDevice.getPlatform();				
					//alert("isDevice true devicePlatform: " + devicePlatform);
			    	var deviceVersion = $cordovaDevice.getVersion(); //'4.0.0' //'4.4.0';
			    	//alert("isDevice true deviceVersion: " + deviceVersion);
			    	var clearDeviceVersion = deviceVersion.replace(/\./g,'');
			    	//alert("isDevice true clearDeviceVersion: " + clearDeviceVersion);

			    	if (devicePlatform == 'Android'){
			    		if (clearDeviceVersion < defMinAndroidThemeVersion){
			    			//alert('Android themes lama');
			    	    	
			    			/* Implement Advance or Classic */
			    			themesVersion = 'c';
			    			//console.debug("isDevice true themesVersion: " + themesVersion);
			    	    	
			    		} else {
			    			//alert('Android themes baru');
			    	    	
			    			/* Implement Advance or Classic */
			    			themesVersion = 'a';
			    			//console.debug("isDevice true themesVersion: " + themesVersion);
			    		}
			    		
			    	} else {
			    		//alert('iOS themes baru');

			    		/* Implement Advance or Classic */
						themesVersion = 'a';
						//console.debug("isDevice true themesVersion: " + themesVersion);
			    	}
			    	
				}else{
					//alert("browser isDevice: "+isDevice);
						
			    	/* Implement Advance or Classic */
					themesVersion = 'a';
					//console.debug("isDevice false themesVersion: " + themesVersion);
				}			

				if ( window.localStorage.getItem('userStorage')==null){
	//				alert("userStorage kosong");
				} else {
//					alert("userStorage ada isi nya");
			   		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	//		   		alert(JSON.stringify(userStorage));
			           if (userStorage.ipassport != null){
			        		var lang = window.localStorage.getItem("lang"); 

			        	   	//alert("ipaddress : "+ipaddress);
			        	   	//alert("url : "+url);
							//alert("ipassport: "+userStorage.ipassport);
			        	   	//alert("isDevice : "+isDevice);
			        		//alert("devicePlatform : "+devicePlatform);
			        		//alert("iconMode : "+iconMode);
			        		//alert("themeMode : "+themeMode);
			        		//alert("themeIonicMode : "+themeIonicMode);
			        	   	//alert("fontSize : "+fontSize);
			        	   	//alert("themesVersion : "+themesVersion);
			        		//alert("lang : "+lang);
			        		
			        	   	//logic buat loading
			        		$ionicLoading.show({
			        			template: '<i class=""></i>Loading...'
			        		});
			        		
			        		$scope.iframeUrl = '';
			        		ionic.Platform.ready(function(){
			        			$scope.iframeUrl = ipaddress+'/'+url+'&ipassport='+userStorage.ipassport+'&isDevice='+isDevice+'&devicePlatform='+devicePlatform+'&iconMode='+iconMode+'&themeMode='+themeMode+'&themeIonicMode='+themeIonicMode+'&fontSize='+fontSize+'&themesVersion='+themesVersion+'&lang='+lang;
			        		});
			        			
			        		$scope.iframeLoadedCallBack = function(){
			        			$ionicLoading.hide();
			        		}
			        	   
	//		        		$scope.url = {src:ipaddress+'/'+url+'&ipassport='+userStorage.ipassport+'&isDevice='+isDevice+'&themes='+themes+'&fontSize='+fontSize+'&themesVersion='+themesVersion+'&route='+route, title:"test"};
	//
	//		        		$scope.trustSrc = function(src) {
	//		        		    return $sce.trustAsResourceUrl(src);
	//		        		}

			           }else{
			           	//console.debug("ipassport kosong isi nya");
			           }
				} 		
			}
			
			$scope.inAppBrowserMobile();
		}
	}

})


//Online Account Registration
.controller('OnlineAccountRegistrationCtrl', function($scope, $rootScope, $routeParams, $http, $translate, $sce, $ionicLoading) {
	
   	loadFontSize();

//	alert("<<<< OnlineAccountRegistrationCtrl >>>>");

	var functionMenuUri = window.localStorage.getItem("functionMenuUri");
	
//	inAppBrowser("xxx");
	var substringUrl = functionMenuUri.substring(30); //substring jadi xxx");	
	var url = substringUrl.substr(0, substringUrl.length-3); //substring jadi xxx
//	alert("substringUrl : "+substringUrl);
//	alert("url : "+url);
	
	//logic buat loading
	$ionicLoading.show({
		template: '<i class=""></i>Loading...'
	});
	
	$scope.iframeUrl = '';
	ionic.Platform.ready(function(){
		$scope.iframeUrl = url;
	});
	
	$scope.iframeLoadedCallBack = function(){
		$ionicLoading.hide();
	}

	
//	$scope.url = {src:url, title:"Online Account Registration"};
//
//	$scope.trustSrc = function(src) {
//	    return $sce.trustAsResourceUrl(src);
//	}
	
})


//Events
.controller('EventsCtrl', function($scope, $rootScope, $routeParams, $http, $translate, $sce, $ionicLoading) {
		
   	loadFontSize();

//	alert("<<<< EventsCtrl >>>>");

	var functionMenuUri = window.localStorage.getItem("functionMenuUri");
	
//	inAppBrowser("xxx");
	var substringUrl = functionMenuUri.substring(8); //substring jadi xxx");	
	var url = substringUrl.substr(0, substringUrl.length-3); //substring jadi xxx
//	alert("substringUrl : "+substringUrl);
//	alert("url : "+url);
	 $rootScope.toggledrag = false; 
	//logic buat loading
	$ionicLoading.show({
		template: '<i class=""></i>Loading...'
	});
	
	$scope.iframeUrl = '';
	ionic.Platform.ready(function(){
		$scope.iframeUrl = url;
	});
	
	$scope.iframeLoadedCallBack = function(){
		$ionicLoading.hide();
	}

	
//	$scope.url = {src:url, title:"Online Account Registration"};
//
//	$scope.trustSrc = function(src) {
//	    return $sce.trustAsResourceUrl(src);
//	}
	
})

	.filter('trusted', ['$sce', function ($sce) {
	    return function(url) {
	        return $sce.trustAsResourceUrl(url);
	    };
	}])

	.directive('iframeOnload', [function(){
	  return {
	    scope: {
	        callBack: '&iframeOnload'
	    },
	    link: function(scope, element, attrs){
	        element.on('load', function(){
	            return scope.callBack();
	        })
	    }
	}}])


;

