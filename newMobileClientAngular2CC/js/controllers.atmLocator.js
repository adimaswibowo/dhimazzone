/*var lang = window.localStorage.getItem("lang");
if (lang == null || lang == "" || lang == "en" || lang == "null"){
	window.localStorage.setItem('lang',"en");
} else {
	window.localStorage.setItem('lang',"id");
}*/

angular.module('atmLocatorControllers', ['ngTouch'])
.controller('AtmMapCtrl', function($scope, $ionicSideMenuDelegate, $cordovaGeolocation, $http, dataSharing) {
		
   	loadFontSize();

	 var citySelected =	window.localStorage.getItem('atmCity');
	// alert(window.localStorage.getItem('atmCity'));

	  $ionicSideMenuDelegate.canDragContent(false);
	  $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 8 };
	  $scope.options = {scrollwheel: true};
	  $scope.markericon = "css/img-map/iconMyLocation.png";
	  $scope.branchicon = "css/img-map/branchLocator.png";
	  $scope.atmicon = "css/img-map/iconATM.png";

	  $scope.markers = [];
	  var atmListLocation = window.localStorage.getItem('aTMList');
	  atmListLocation = JSON.parse(atmListLocation);
	  // get position of user and then set the center of the map to that position
	  $cordovaGeolocation
	    .getCurrentPosition()
	    .then(function (position) {
	      var lat  = position.coords.latitude;
	      var long = position.coords.longitude;
	      $scope.map = {center: {latitude: lat, longitude: long}, zoom: 13 };
	      //just want to create this loop to make more markers
	      var atmLocatorData = {
		            id: 0,
		            latitude: lat,
		            longitude: long,
		            icon: $scope.markericon,
		            title: "its u"
		        };
	     atmLocatorData.coord = ({latitude: atmLocatorData.latitude, longitude: atmLocatorData.longitude});
	     $scope.markers.push(atmLocatorData);
		 var showATMNameArray = [];
	     for (var i = 0; i < atmListLocation.length; i++) {
	 		at = atmListLocation[i].split("|"); 
	 		var atmProvince = at[0];
	 		var atmProvinceCode = at[1]; 
	 		var atmAddress = at[2];
	 		var atmType = at[3];
	 		var latPosition = at[4];
	 		var longPosition = at[5];
	 		var atmCity = at[6];
			 //alert(atmType)

	 		if(citySelected == atmCity){
	 			if(atmType == "002"){
		    		$scope.markers.push({
			            id: $scope.markers.length,
			            latitude: latPosition,
			            longitude: longPosition,
			            icon: $scope.atmicon,
			            title: atmAddress,
			            coord: ({latitude: latPosition, longitude: longPosition})
			        });
		    	
	 			
	 			    var atmListShowObject = new Object();

					atmListShowObject.atmProvince = atmProvince;
					atmListShowObject.atmProvinceCode = atmProvinceCode;
					atmListShowObject.atmAddress = atmAddress;
					atmListShowObject.atmType =	"iconATM";
					atmListShowObject.latPosition = latPosition;
					atmListShowObject.longPosition = longPosition;
					atmListShowObject.atmCity = atmCity;
		
					showATMNameArray.push(atmListShowObject);
	 			}
	 		}
	 		
	 	}
		  $scope.atmListLocation = showATMNameArray;

	    
	        //on click event
	        /*$scope.windowOptions = {
			    show: false
			};
	      
	        $scope.showStore = function(marker) {
	    	//  alert("masuk")
	    	 // $scope.windowOptions.show= !$scope.windowOptions.show;
	    	  $scope.selectedMarker = marker.model;
	    	 // alert("ahaa")
	    	  console.log("on click event")
	    	    $scope.store = $scope.stores[this.id];
	    	    var itemsEl = 
	    	      "<ul><li ng-repeat='item in store.items'>{{item}}</li></ul>";
	    	    var el = $compile(itemsEl)($scope);
	    	    $scope.$apply();
	    	    $scope.items = el.html();
	    	    $scope.showInfoWindow(evt, 'foo', this.getPosition());
	    	  };*/
	    	//----end onclick event
	    }, function(err) {
	      // error
	    });
		
	 // getProvinceATM($scope,$http);
		/*$scope.backButtonMenu = function (){
	  		//alert("backButtonMenu");
	  		//$scope.backButtonMenuShow = !$scope.backButtonMenuShow;
	  		//$scope.defaultMenuJson = JSON.parse(defaultMenuJson).menuJson;
			var userStorageMap = window.localStorage.getItem("userStorage");
			if (userStorageMap != null){
				userStorageMap = JSON.parse(userStorageMap);
				window.location.href = "#/appCustomer/customerMenu";
			}else{
				window.location.href = "#/app/main";
			}
	  	};*/
	  	$scope.locationATM = function (data){
			dataSharing.setProvinceList(data);
		    $scope.map = {center: {latitude: data.latPosition, longitude: data.longPosition}, zoom: 17 };

		};
})
.controller('showProvinceCtrl', function($scope, $ionicModal, $timeout, $http, dataSharing, $ionicLoading) {

   	loadFontSize();

	var isTimeout = calculateTimeOut();

	//alert("isTimeout :"+isTimeout);
	if (isTimeout){
		// hapus localStorage and goTo Main page
		clearSessionClient();
	} else {
		var jsonobj={longitudeUser:0,latitudeUser:0};
		var jsondata = JSON.stringify(jsonobj);

		var url=ipaddress+"/rest/atmLocator/listLookupProvince";
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		$http.post(url,jsondata)	    
		.success(function(data) {
			$ionicLoading.hide();

				provinceList = data.provinceList;
				aTMList = data.newProvinceATMList;
				window.localStorage.setItem('aTMList', JSON.stringify(aTMList));
				cityList = data.listCity;
				
				var provinceListArray = [];
				
				for (var i = 0; i < provinceList.length; i++) {
					at = provinceList[i].split("|"); 
					var nameOption = at[0]; 
					var valueOption = at[1]; 
					
					var provinceListObject = new Object();

					provinceListObject.nameOption = nameOption;
					provinceListObject.valueOption = valueOption;
					provinceListArray.push(provinceListObject);
					
				}
				$scope.showATMLocatorMenu = provinceListArray;
				
		}).error(function(){
			$ionicLoading.hide();
			alert("Server Error");
			return false;
		});
		$scope.dinamicMenu = function (data){
			window.localStorage.setItem('provinceCode', data.valueOption);
			window.location.href = "#/app/showCity";

		};
	}
})
.controller('showCityCtrl', function($scope, $ionicModal, $timeout, $http, dataSharing) {
		
   	loadFontSize();

	var aTMList = JSON.parse(window.localStorage.getItem('aTMList'));
	var provinceCode = window.localStorage.getItem('provinceCode');
	dataSharing.setProvinceList(provinceCode);
	var idProvince = provinceCode;
	var showATMNameArray = [];

	for (var i = 0; i < aTMList.length; i++) {
		at = aTMList[i].split("|"); 
		var atmProvince = at[0];
		var atmProvinceCode = at[1]; 
		var atmAddress = at[2];
		var atmType = at[3];
		var latPosition = at[4];
		var longPosition = at[5];
		var atmCity = at[6];
		
		if(parseInt(atmProvinceCode) == parseInt(idProvince) && atmType=='002'){
			var atmListShowObject = new Object();

			atmListShowObject.atmProvince = atmProvince;
			atmListShowObject.valueOption = atmProvinceCode;
			atmListShowObject.atmAddress = atmAddress;
			atmListShowObject.atmType =	atmType;
			atmListShowObject.latPosition = latPosition;
			atmListShowObject.longPosition = longPosition;
			atmListShowObject.nameOption = atmCity;
	
			showATMNameArray.push(atmListShowObject);
		}
		
	}
	
	$scope.showATMLocatorMenu = showATMNameArray;
	window.localStorage.setItem('atmListLocation', JSON.stringify(showATMNameArray));
	$scope.dinamicMenu = function (data){
		window.localStorage.setItem('atmCity', data.nameOption);
		window.location.href = "#/app/mapLocator";
	};
})
.filter('unique', function() {
	   return function(collection, keyname) {
	      var output = [], 
	          keys = [];

	      angular.forEach(collection, function(item) {
	          var key = item[keyname];
	          if(keys.indexOf(key) === -1) {
	              keys.push(key);
	              output.push(item);
	          }
	      });

	      return output;
	   };
	})

/*function getProvinceATM($scope, $http){
	
	var jsonobj={longitudeUser:0,latitudeUser:0};
	var jsondata = JSON.stringify(jsonobj);
// 	alert(ipaddress);
	var url=ipaddress+"/rest/atmLocator/listLookupProvince";
	console.debug("hsmInit, url:"+url);
	$http.post(url,jsondata)	    
	.success(function(data) {
		//unblockPage();
			//simulasiin
			//console.log('send : '+jsondata);
			provinceList = data.provinceList;
			aTMList = data.newProvinceATMList;
			cityList = data.listCity;
			console.log('provinceList : '+provinceList);
			console.log('aTMList : '+aTMList);
			window.localStorage.setItem('provinceList', provinceList);
			window.localStorage.setItem('aTMList', aTMList);

		
	}).error(function(){
		alert("Server Error");
		return false;
	});
	
	
};*/
.factory('dataSharing', function () {    
	var provinceList = "";
    return {
	
        getProvinceList: function () {
        	provinceList = newProvinceList;
        },
        setProvinceList: function (newProvinceList) {
        	provinceList = newProvinceList;
        }
        
    };
});
