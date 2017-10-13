/*var lang = window.localStorage.getItem("lang");
if (lang == null || lang == "" || lang == "en" || lang == "null"){
	window.localStorage.setItem('lang',"en");
} else {
	window.localStorage.setItem('lang',"id");
}*/

angular.module('bankBranchLocationControllers', ['ngTouch'])
.controller('BranchLocationMapCtrl', function($scope, $ionicSideMenuDelegate, $cordovaGeolocation, $http, dataSharing) {

   	loadFontSize();

	 var citySelected =	window.localStorage.getItem('branchCity');
	// alert(window.localStorage.getItem('branchCity'));

	  $ionicSideMenuDelegate.canDragContent(false);
	  $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 8 };
	  $scope.options = {scrollwheel: true};
	  $scope.markericon = "css/img-map/iconMyLocation.png";
	  $scope.branchicon = "css/img-map/branchLocator.png";
	//  $scope.branchicon = "css/img-map/iconBranch.png";

	  $scope.markers = [];
	  var branchListLocation = window.localStorage.getItem('aTMList');
	  branchListLocation = JSON.parse(branchListLocation);
	  // get position of user and then set the center of the map to that position
	  $cordovaGeolocation
	    .getCurrentPosition()
	    .then(function (position) {
	      var lat  = position.coords.latitude;
	      var long = position.coords.longitude;
	      $scope.map = {center: {latitude: lat, longitude: long}, zoom: 13 };
	      //just want to create this loop to make more markers
	      var branchLocatorData = {
		            id: 0,
		            latitude: lat,
		            longitude: long,
		            icon: $scope.markericon,
		            title: "its u"
		        };
	     branchLocatorData.coord = ({latitude: branchLocatorData.latitude, longitude: branchLocatorData.longitude});
	     $scope.markers.push(branchLocatorData);
		 var showBranchNameArray = [];
	     for (var i = 0; i < branchListLocation.length; i++) {
	 		at = branchListLocation[i].split("|"); 
	 		var branchProvince = at[0];
	 		var branchProvinceCode = at[1]; 
	 		var branchAddress = at[2];
	 		var branchType = at[3];
	 		var latPosition = at[4];
	 		var longPosition = at[5];
	 		var branchCity = at[6];
			 //alert(branchType)

	 		if(citySelected == branchCity){
	 			if(branchType == "001"){
		    		$scope.markers.push({
			            id: $scope.markers.length,
			            latitude: latPosition,
			            longitude: longPosition,
			            icon: $scope.branchicon,
			            title: branchAddress,
			            coord: ({latitude: latPosition, longitude: longPosition})
			        });
		    	
	 			
	 			    var branchListShowObject = new Object();

					branchListShowObject.branchProvince = branchProvince;
					branchListShowObject.branchProvinceCode = branchProvinceCode;
					branchListShowObject.branchAddress = branchAddress;
					branchListShowObject.branchType =	"branchLocator";
					branchListShowObject.latPosition = latPosition;
					branchListShowObject.longPosition = longPosition;
					branchListShowObject.branchCity = branchCity;
		
					showBranchNameArray.push(branchListShowObject);
	 			}
	 		}
	 		
	 	}
		  $scope.branchListLocation = showBranchNameArray;

	    
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
		
	 // getProvinceBranch($scope,$http);
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
	  	$scope.locationBranch = function (data){
			dataSharing.setProvinceList(data);
		    $scope.map = {center: {latitude: data.latPosition, longitude: data.longPosition}, zoom: 17 };

		};
})
.controller('showProvinceBranchCtrl', function($scope, $ionicModal, $timeout, $http, dataSharing, $ionicLoading) {
		
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
				//alert(aTMList)
				for (var i = 0; i < provinceList.length; i++) {
					at = provinceList[i].split("|"); 
					var nameOption = at[0]; 
					var valueOption = at[1]; 
					
					var provinceListObject = new Object();

					provinceListObject.nameOption = nameOption;
					provinceListObject.valueOption = valueOption;
					provinceListArray.push(provinceListObject);
					
				}
				$scope.showBranchLocatorMenu = provinceListArray;
				
		}).error(function(){
			$ionicLoading.hide();
			alert("Server Error");
			return false;
		});
		$scope.dinamicMenu = function (data){
			window.localStorage.setItem('provinceCode', data.valueOption);
			window.location.href = "#/app/showCityBranch";

		};
	}
})
.controller('showCityBranchCtrl', function($scope, $ionicModal, $timeout, $http, dataSharing) {
		
   	loadFontSize();

	var aTMList = JSON.parse(window.localStorage.getItem('aTMList'));
	var provinceCode = window.localStorage.getItem('provinceCode');
	dataSharing.setProvinceList(provinceCode);
	var idProvince = provinceCode;
	var showBranchNameArray = [];

	for (var i = 0; i < aTMList.length; i++) {

		at = aTMList[i].split("|"); 
		var branchProvince = at[0];
		var branchProvinceCode = at[1]; 
		var branchAddress = at[2];
		var branchType = at[3];
		var latPosition = at[4];
		var longPosition = at[5];
		var branchCity = at[6];
		if(parseInt(branchProvinceCode) == parseInt(idProvince) && branchType=='001'){
			var branchListShowObject = new Object();

			branchListShowObject.branchProvince = branchProvince;
			branchListShowObject.valueOption = branchProvinceCode;
			branchListShowObject.branchAddress = branchAddress;
			branchListShowObject.branchType =	branchType;
			branchListShowObject.latPosition = latPosition;
			branchListShowObject.longPosition = longPosition;
			branchListShowObject.nameOption = branchCity;
	
			showBranchNameArray.push(branchListShowObject);
		}
		
	}
	
	$scope.showBranchLocatorMenu = showBranchNameArray;
	window.localStorage.setItem('branchListLocation', JSON.stringify(showBranchNameArray));
	$scope.dinamicMenu = function (data){
		window.localStorage.setItem('branchCity', data.nameOption);
		window.location.href = "#/app/branchLocator";
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

/*function getProvinceBranch($scope, $http){
	
	var jsonobj={longitudeUser:0,latitudeUser:0};
	var jsondata = JSON.stringify(jsonobj);
// 	alert(ipaddress);
	var url=ipaddress+"/rest/branchLocator/listLookupProvince";
	console.debug("hsmInit, url:"+url);
	$http.post(url,jsondata)	    
	.success(function(data) {
		//unblockPage();
			//simulasiin
			//console.log('send : '+jsondata);
			provinceList = data.provinceList;
			aTMList = data.newProvinceBranchList;
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
