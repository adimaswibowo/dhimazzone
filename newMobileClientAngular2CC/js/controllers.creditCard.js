angular.module('creditCard.controllers', ['pascalprecht.translate','ngTouch'])

.factory('creditCardData', function () {
	var ccBlockingInputData = "";
	var ccBlockingConfirmData = "";
	var ccBlockingResultData = "";
	var ccActivationInputData = "";
	var ccActivationConfirmData = "";
	var ccActivationResultData = "";	
	var ccLimitInputData = "";
	var ccLimitDetailData = "";
	var ccLimitConfirmData = "";
	var ccLimitResultData = "";
	var tempData = "";
	var ccIntlTrxInputData = "";
	var tempDataIntlTrx = "";
	var ccIntlTrxConfirmData = "";
	var ccIntlTrxResultData = "";
	var changePinData = "";
	var changePinResultData = "";
	var tempChangePinData = "";
	var ccBalanceData = "";
	var requestMap = "";
	var ccPinReissueData = "";
	var tempConfirmData = "";
	var ccPinReissueDataInput = "";
	var requestMapPinReissue = "";
	var ccResetPinCountData = "";
	var requestMapResetPinCount = "";


    return {
    	getccBalanceData: function () {
            return ccBalanceData;
        },
        setccBalanceData: function (newCcBalanceData) {
        	ccBalanceData = newCcBalanceData;
        },
        getCcBlockingInputData: function () {
            return ccBlockingInputData;
        },
        setCcBlockingInputData: function (newCcBlockingInputData) {
        	ccBlockingInputData = newCcBlockingInputData;
        },
        
        getTempDataBlocking: function () {
            return tempDataBlocking;
        },
        setTempDataBlocking: function (newTempDataBlocking) {
        	tempDataBlocking = newTempDataBlocking;
        },

        getCcBlockingConfirmData: function () {
            return ccBlockingConfirmData;
        },
        setCcBlockingConfirmData: function (newCcBlockingConfirmData) {
        	ccBlockingConfirmData = newCcBlockingConfirmData;
        },
        
        getCcBlockingResultData: function () {
            return ccBlockingResultData;
        },
        setCcBlockingResultData: function (newCcBlockingResultData) {
        	ccBlockingResultData = newCcBlockingResultData;
        },
        
        getCcActivationInputData: function () {
            return ccActivationInputData;
        },
        setCcActivationInputData: function (newCcActivationInputData) {
        	ccActivationInputData = newCcActivationInputData;
        },

        getCcActivationConfirmData: function () {
            return ccActivationConfirmData;
        },
        setCcActivationConfirmData: function (newCcActivationConfirmData) {
        	ccActivationConfirmData = newCcActivationConfirmData;
        },
        
        getTempDataActivation: function () {
            return tempDataActivation;
        },
        setTempDataActivation: function (newTempDataActivation) {
        	tempDataActivation = newTempDataActivation;
        },
        
        getCcActivationResultData: function () {
            return ccActivationResultData;
        },
        setCcActivationResultData: function (newCcActivationResultData) {
        	ccActivationResultData = newCcActivationResultData;
        },
        
        getCcLimitInputData: function () {
            return ccLimitInputData;
        },
        setCcLimitInputData: function (newCcLimitInputData) {
        	ccLimitInputData = newCcLimitInputData;
        },
        
        getCcLimitDetailData: function () {
            return ccLimitDetailData;
        },
        setCcLimitDetailData: function (newCcLimitDetailData) {
        	ccLimitDetailData = newCcLimitDetailData;
        },
    	
        getCcLimitConfirmData: function () {
            return ccLimitConfirmData;
        },
        setCcLimitConfirmData: function (newCcLimitConfirmData) {
        	ccLimitConfirmData = newCcLimitConfirmData;
        },
        
        getCcLimitResultData: function () {
            return ccLimitResultData;
        },
        setCcLimitResultData: function (newCcLimitResultData) {
        	ccLimitResultData = newCcLimitResultData;
        },
        
        getTempData: function () {
            return tempData;
        },
        setTempData: function (newTempData) {
        	tempData = newTempData;
        },
        
        getCcIntlTrxInputData: function () {
            return ccIntlTrxInputData;
        },
        setCcIntlTrxInputData: function (newCcIntlTrxInputData) {
        	ccIntlTrxInputData = newCcIntlTrxInputData;
        },
        
        getTempDataIntlTrx: function () {
            return tempDataIntlTrx;
        },
        setTempDataIntlTrx: function (newTempDataIntlTrx) {
        	tempDataIntlTrx = newTempDataIntlTrx;
        },
        
        getCcIntlTrxConfirmData: function () {
            return ccIntlTrxConfirmData;
        },
        setCcIntlTrxConfirmData: function (newCcIntlTrxConfirmData) {
        	ccIntlTrxConfirmData = newCcIntlTrxConfirmData;
        },
        
        getCcIntlTrxResultData: function () {
            return ccIntlTrxResultData;
        },
        setCcIntlTrxResultData: function (newCcIntlTrxResultData) {
        	ccIntlTrxResultData = newCcIntlTrxResultData;
        },
        
        getChangePinData: function () {
            return changePinData;
        },
        setChangePinData: function (newChangePinData) {
        	changePinData = newChangePinData;
        },
        
        getTempChangePinData: function () {
            return tempChangePinData;
        },
        setTempChangePinData: function (newTempChangePinData) {
        	tempChangePinData = newTempChangePinData;
        },
        
        getChangePinResultData: function () {
            return changePinResultData;
        },
        setChangePinResultData: function (newChangePinResultData) {
        	changePinResultData = newChangePinResultData;
        },

        getRequestMap: function () {
            return requestMap;
        },
        setRequestMap: function (newRequestMap) {
        	requestMap = newRequestMap;
        },

        getCcPinReissueData: function () {
            return ccPinReissueData;
        },
        setCcPinReissueData: function (newCcPinReissueData) {
        	ccPinReissueData = newCcPinReissueData;
        },

        getTempConfirmData: function () {
            return tempConfirmData;
        },
        setTempConfirmData: function (newTempConfirmData) {
        	tempConfirmData = newTempConfirmData;
        },

        getCcPinReissueDataInput: function () {
            return ccPinReissueDataInput;
        },
        setCcPinReissueDataInput: function (newCcPinReissueDataInput) {
        	ccPinReissueDataInput = newCcPinReissueDataInput;
        },

        getRequestMapPinReissue: function () {
            return requestMapPinReissue;
        },
        setRequestMapPinReissue: function (newRequestMapPinReissue) {
        	requestMapPinReissue = newRequestMapPinReissue;
        },


        getCcResetPinCountDataInput: function () {
            return ccResetPinCountDataInput;
        },
        setCcResetPinCountDataInput: function (newCcResetPinCountDataInput) {
        	ccResetPinCountDataInput = newCcResetPinCountDataInput;
        },

         getRequestMapResetPinCount: function () {
            return requestMapResetPinCount;
        },
        setRequestMapResetPinCount: function (newRequestMapResetPinCount) {
        	requestMapResetPinCount = newRequestMapResetPinCount;
        }
        
    };
})

//controller untuk Credit Card




// Block Credit Card
//==================
.controller('ccBlockingInputCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
//	alert("masuk ccBlockingInputCtrl");
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
//	alert("creditCardList: " + creditCardList);
	$scope.creditCardList = creditCardList;
	console.debug("creditCardList: " + JSON.stringify(creditCardList));
	
	// list CC bentuk table kaya di menu account
//	var listCcDisplay = constructDisplayListCc(creditCardList);
//	document.getElementById("listCcDisplay").innerHTML = listCcDisplay;

	


	
	$scope.email = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.email;
	
	$scope.enable = "Off";
	
	$scope.enableIntl = function(){
		if ($scope.enable == "Off"){
			$scope.enable = "On";
		} else if ($scope.enable == "On"){
			$scope.enable = "Off";
		}
	}
	
	// ccList
	$ionicModal.fromTemplateUrl('templates/template-cc/ccList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalCcList = modal;
	});
	$scope.openPopupCcList = function() {
	    $scope.modalCcList.show();
	};
	$scope.closePopupCcList = function() {
	    $scope.modalCcList.hide();
	};
	
	$scope.dropdownBlockPage = function(divName){
		if (divName == 'angularCcList'){
			$scope.openPopupCcList();
		}
	}
	
	$scope.copyCreditCardNumber = function (id, accountNumber, label){
		$scope.closePopupCcList();
		document.getElementById('ccNumberText').value = label;
		document.getElementById('ccNumberHidden').value = id;
	}
	
	$scope.doCcBlockingConfirm = function(id, accountNumber) {
//	    alert("doCcBlockingConfirm");
//		alert("id: " + id);
 		
		

 		var cardActiveStatus=null;
 		for (var i = 0; i<creditCardList.length; i++) {
	    	if(accountNumber==creditCardList[i].accountNumber){
	    		//cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
				cardActiveStatus=creditCardList[i].attributeCardBpcMap.cardStatus;
	    	}
	    }

			$scope.cardStatusTemp=cardActiveStatus;
			//$scope.cardStatus = "Block";
			if($scope.cardStatusTemp == "CHST0")
			{
				$scope.cardStatus="Unblock"
				$scope.ShowBlock = false;

			}
			else if($scope.cardStatusTemp == "CHST20" )
			{
				$scope.cardStatus="Block"
				$scope.BlockCard="Temporary";
				$scope.ShowBlock = true;
				alert("Card Status is Temporary Block");

			}
			else if($scope.cardStatusTemp == "CHST21" )
			{
				$scope.cardStatus="Block"
				$scope.BlockCard="Permanent";
				$scope.ShowBlock = true;
				alert("Card Status is Permanent Block");  
			}else{
				alert("Card Status is Inactive");  
				return false;
			}


	    setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = id; // id
			newdata['internationalizationMode'] = $scope.internationalizationMode;
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
//			var url=ipaddress+"/rest/creditCardV2/doCcBlocking";
			//var url=ipaddress+"/rest/creditCardV2/doCcLimitDetail"; //doCcGenericDetailAmb
			var url=ipaddress+"/rest/creditCardV2/doCcGenericDetailAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setCcBlockingInputData(data);
				    	
//				    	window.location.href = "#/app/ccBlockingResult";
				    	
				    	creditCardData.setTempDataBlocking(newdata);
				    	console.debug("data: " + data);
				    	window.location.href = "#/app/ccBlockingDetail";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	};
	
})

.controller('ccBlockingDetailCtrl', function($ionicLoading, $scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
	console.debug("ccBlockingDetailCtrl");
//	alert("ccBlockingDetailCtrl");
	var ccBlockingInputData = creditCardData.getCcBlockingInputData();
//	$scope.result = ccLimitInputData.responseMessage;
//	alert("ccLimitInputData.resultList: " + ccLimitInputData.resultList);
	document.getElementById("ccDetailDisplay").innerHTML = ccBlockingInputData.resultList;
	
	var tempDataBlocking = creditCardData.getTempDataBlocking();
	$scope.ccNumber = tempDataBlocking.accountId;
//	document.getElementById("ccNumberHidden").value = tempData.accountId;
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
	console.log("jsonnya : "+JSON.stringify(creditCardList));
	
	var cardActiveStatus=null;
	//

	//cardActiveStatus=JSON.parse(creditCardList[0].attributeCardBpc).cardStatus;
	//var accountNumber=ccBlockingInputData
	
	var accountId=tempDataBlocking.accountId;
	 for (var i = 0; i<creditCardList.length; i++) {
	      if(accountId==creditCardList[i].id){
	       cardActiveStatus=creditCardList[i].attributeCardBpcMap.cardStatus;
	      }
	     }
	$scope.cardStatusTemp=cardActiveStatus;
	//$scope.cardStatus = "Block";
	if($scope.cardStatusTemp == "CHST0")
	{
		$scope.cardStatus="Unblock"
		$scope.ShowBlock = false;
		$scope.isChecked = false;
		$scope.isCheckedBlock= false;
		$scope.isDisable=false;
		$scope.BlockCard="Temporary";
	}
	else if($scope.cardStatusTemp == "CHST20" )
	{
		$scope.cardStatus="Block"
		$scope.ShowBlock = true;
		$scope.isChecked = true;
		$scope.isCheckedBlock= false;
		$scope.isDisable=false;
		$scope.BlockCard="Temporary";

	}
	else if($scope.cardStatusTemp == "CHST21" )
	{
		$scope.cardStatus="Block"
		$scope.ShowBlock = true;
		$scope.isChecked = true;
		$scope.isCheckedBlock= true;
		$scope.isDisable=true;
		$scope.BlockCard="Permanent";
	}
	else
	{
		$scope.isDisable=true;
	}
	// $scope.BlockCard=null;
	$scope.doBlockUnblock = function(){
		if ($scope.cardStatus == "Block"){
			$scope.cardStatus = "Unblock";
			//$scope.ShowBlock == false;
			$scope.formShowBlock();
		} else if ($scope.cardStatus == "Unblock"){
			$scope.cardStatus = "Block";
			//$scope.ShowBlock == true;
			$scope.formShowBlock();
		}
	}

	//$scope.BlockCard1=["Temporary","Permanent"];

	$scope.doBlockTP = function(){
		//console.log("coy: "+$scope.BlockCard);
		if ($scope.BlockCard == "Temporary"){
			$scope.BlockCard = "Permanent";
		} else if ($scope.BlockCard == "Permanent"){
			$scope.BlockCard = "Temporary";
			
		}
		// if($scope.selectnya.value =="Permanent"){
		// 	$scope.BlockCard="Permanent";
		// }else if($scope.selectnya.value =="Temporary"){
		// 	$scope.BlockCard="Temporary";
		// }
		// $scope.BlockCard="permanent";
		// alert("PERMA");
	}
	

	$scope.formShowBlock=function()
	{
		console.log("masuk gan");
		$scope.BlockCard == "Temporary";
		if($scope.cardStatus == "Block"){
				$scope.ShowBlock = true;
			}
		else if($scope.cardStatus == "Unblock"){
				$scope.ShowBlock = false;
			}
	}
	
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccBlockingInput";
	}

	$scope.checkSecurityTypeAssigner = function(){
		console.debug("checkSecurityTypeAssigner");
		checkSecurityTypeAssigner($scope,$translate,$state);
	}
	
	$scope.doConfirmCc = function() {
		console.debug("doConfirmCc");
		//alert("doConfirmCc");
//		window.location.href = "#/app/ccLimitChangeRequest";
		


		/*try {
			setTimeout(function(){
				setDoubleClickParam = 0;
			}, 3000);

			if(setDoubleClickParam == 0){
				setDoubleClickParam = 1;
			}else{
				return false;
			}
			
		} catch(e) {console.log(e);}*/
		


		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {

			// Part untuk kirim securityTypeCode nya ke server
			// -- Start -- 
			if ($('#securityTypeCode').length){
				if($("input[name=securityTypeCode]").attr('type') == 'checkbox'){
					var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').map(function() {return this.value}).get().join('|');
				    var tempSecurityTypeCode = new Array();
				    tempSecurityTypeCode = securityTypeCode.split("|");
				    if(tempSecurityTypeCode.length > 1){
						var securityTypeCode = "2";
					}else  var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').val();
				}
				if($("input[name=securityTypeCode]").attr('type') == 'radio') var securityTypeCode = $('input[name=securityTypeCode]:radio:checked').val();
	   		}else {
	   			var securityTypeCode = localStorage.getItem("securityTypeCode");
	   		}
			
			var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
			
			if(isDevice == true){
				var securityTypeCode = securityTypeCode;
			}else{
				if(userPreference == "8"){
					if(securityTypeCode == "1"||securityTypeCode == "0"){
	    				securityTypeCode="1";
					}else{
		    			var securityTypeCode = securityTypeCode;
					}
				}else{
	    			var securityTypeCode = securityTypeCode;
				}
			}
			console.debug("securityTypeCode: " + securityTypeCode);
			localStorage.setItem("securityTypeCode", securityTypeCode);
			// -- Stop --
			console.log("test:"+$scope.BlockCard);
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = tempDataBlocking.accountId; // id
			newdata['cardStatus']=$scope.cardStatus;
			newdata['BlockCard']=$scope.BlockCard; // Temporary , Permanent
			newdata['securityTypeCode'] = securityTypeCode;
			
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcConfirmBlockingAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setCcBlockingConfirmData(data);
				    	creditCardData.setRequestMap(newdata);
		    			window.location.href = "#/app/ccBlockingConfirm";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	}
})

.controller('ccBlockingConfirmCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData, $compile, $ionicLoading, $cordovaDevice, $ionicPlatform) {
	var ccBlockingConfirmData = creditCardData.getCcBlockingConfirmData();
	var requestMap = creditCardData.getRequestMap();
	console.debug("requestMap: " + JSON.stringify(requestMap));	

	$scope.cardStatus = requestMap.cardStatus;
	$scope.cardMask = ccBlockingConfirmData.cardMask;

	// -- start -- nampilin input token & ngebaca sms inbox (klo device)
	console.debug("requestMap.securityTypeCode: " + requestMap.securityTypeCode);
	tokenInputGeneric(requestMap.securityTypeCode,"0",$scope,$compile,$translate);
	//window.localStorage.setItem("transferTransactionInquiry",JSON.stringify(ftInbankInputStorage.transferTransaction));

	var transReferenceNumber = ccBlockingConfirmData.transactionReferenceNumber;
	var securityTypeCode = requestMap.securityTypeCode;
	window.localStorage.setItem("securityTypeCode",securityTypeCode);
	document.getElementById('transRefNum').value = transReferenceNumber;
	if(securityTypeCode == "0" || securityTypeCode=="2"){
		//alert("readsms")
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	// -- end --

	// -- start - function yg dibutuhkan untuk resend sms token & checkBox
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	// -- end --

	$scope.doBlockRequest = function(){
		var securityTypeCode = window.localStorage.getItem("securityTypeCode");
		var fill_token_id = $translate.instant('fill_token_id');
		var agreement = $translate.instant('agreement'); 
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			if(document.getElementById('mPin').value!=null && document.getElementById('mPin').value==""){
				alert(fill_token_id);
				return false;
			}
		}
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			if(document.getElementById('simasToken').value!=null && document.getElementById('simasToken').value==""){
				alert(fill_token_id);
				return false;
			}
		}
	
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['accountId']=requestMap.accountId;
		newdata['cardStatus']=requestMap.cardStatus;
		newdata['BlockCard']=requestMap.BlockCard;
		newdata['securityTypeCode']=securityTypeCode;
		newdata['transReferenceNumber']=transReferenceNumber;
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			newdata['tokenInputed'] = document.getElementById('simasToken').value;
		}
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			newdata['mPinInputed'] = document.getElementById('mPin').value;
		}
		
		newdata['lang']=window.localStorage.getItem("lang");
		
		var datajson=JSON.stringify(newdata);

		var url=ipaddress+"/rest/creditCardV2/doCcBlockingAmb";
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
	    			creditCardData.setCcBlockingResultData(data);
	    			window.location.href = "#/app/ccBlockingResult";
	    		} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				alert("Response from server not found");
			}
		}).error(function(){
			$ionicLoading.hide();	
			alert("Unable to process transaction");
			return false;
		});

	}

	$scope.doBack = function() {
		window.location.href = "#/app/ccBlockingInput";
	}
})

.controller('ccBlockingResultCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData,$window,$ionicLoading) {
	var ccBlockingResultData = creditCardData.getCcBlockingResultData();
	console.debug(JSON.stringify(ccBlockingResultData));
	$scope.result = ccBlockingResultData.responseMessage;
	
	var myVar = setInterval(function(){ 
	doRefreshInAppBrowser($http,$window,$ionicLoading); 
	clearInterval(myVar);
	}, 3000);

	document.getElementById("ccResultDisplayBU").innerHTML = ccBlockingResultData.resultList;
	$scope.doBack = function() {
		window.location.href = "#/app/ccBlockingInput";
	}
})


// Activation Credit Card
//=======================
.controller('ccActivationInputCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
//	alert("masuk ccActivationInputCtrl");
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;

	// update status card di localStorage untuk kartu ini
	//var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
	// console.debug("creditCardList: " + JSON.stringify(creditCardList));
	// for (var i = 0; i<creditCardList.length; i++) {
 //    	if("6234441000000035"==creditCardList[i].accountNumber){
 //    		var card = creditCardList[i];
 //    		console.debug("card: " + JSON.stringify(card));
 //    		//card.
 //    		//card['attributeCardBpc']="test";
 //    		//var attributeCardBpc = card['attributeCardBpc'];
 //    		console.debug("attributeCardBpc: " + JSON.parse(card['attributeCardBpc']).cardStatus);
 //    		JSON.parse(card['attributeCardBpc']).cardStatus = "TESTT";
 //    		console.debug("card 2: " + JSON.stringify(card));

 //    		// card['attributeCardBpc'] = "HOLLAA";
 //    		// console.debug("card 2: " + JSON.stringify(card));
 //    		//cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
 //    	}
 //    }

//	alert("creditCardList: " + creditCardList);
	$scope.creditCardList = creditCardList;

	$scope.email = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.email;
	
	// ccList
	$ionicModal.fromTemplateUrl('templates/template-cc/ccList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalCcList = modal;
	});
	$scope.openPopupCcList = function() {
	    $scope.modalCcList.show();
	};
	$scope.closePopupCcList = function() {
	    $scope.modalCcList.hide();
	};
	
	$scope.dropdownBlockPage = function(divName){
		if (divName == 'angularCcList'){
			$scope.openPopupCcList();
		}
	}
	
	$scope.copyCreditCardNumber = function (id, accountNumber, label){
		$scope.closePopupCcList();
		document.getElementById('ccNumberText').value = label;
		document.getElementById('ccNumberHidden').value = id;
	}
	
	var cardActiveStatus=null;
	$scope.doCcActivationConfirm = function(id, accountNumber) {
	    for (var i = 0; i<creditCardList.length; i++) {
	    	if(accountNumber==creditCardList[i].accountNumber){
			cardActiveStatus=creditCardList[i].attributeCardBpcMap.cardStatus;
	    	//cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
	    	}
	    }
	     if (cardActiveStatus=="CHST20"){
			   alert("Card Status is Temporary Block");  
			   return false; 
			 }else if(cardActiveStatus=="CHST21"){
			   alert("Card Status is Permanent Block");  
			   return false;
			 }
		if (cardActiveStatus=="CHST0"){
			alert("The Card is Already Active");			
		}
		else{
		    setTimeout(function(){
				setDoubleClickParam = 0;
			}, 3000);

			if(setDoubleClickParam == 0){
				setDoubleClickParam = 1;
			}else{
				return false;
			}

			var isTimeout = calculateTimeOut();
			if (isTimeout){
				// hapus localStorage and goTo Main page
				clearSessionClient();
			} else {
				var newdata = {};
				newdata['ipassport']=userStorageMap.ipassport;
				newdata['accountId'] = id; // id
				newdata['isActivateMenu'] = "true";
				var userStorageString = JSON.stringify(newdata);
	//			alert('userStorageString json: '+userStorageString);
				
	//			var url=ipaddress+"/rest/creditCardV2/doCcActivation";
				var url=ipaddress+"/rest/creditCardV2/doCcGenericDetailAmb";
				$ionicLoading.show({
		  		 	template: 'Loading...',
		  	        animation: 'fade-in',
		  	        showBackdrop: true,
		  	        maxWidth: 200,
		  	        showDelay: 0
		  	    });
				$http.post(url,userStorageString).success(function(data) {
					$ionicLoading.hide();	
					if (data != null){
			    		if (data.responseCode == "00"){
					    	creditCardData.setCcActivationInputData(data);

					    	creditCardData.setTempDataActivation(newdata);
					    	window.location.href = "#/app/ccActivationDetail";
			    		} else {
							alert(data.responseMessage);
							return false;
						}
					} else {
						alert("Response from server not found");
					}
				}).error(function(){
					$ionicLoading.hide();	
					alert("Unable to process transaction");
					return false;
				});
			}
		};
  	};	
})

.controller('ccActivationDetailCtrl', function($ionicLoading, $scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
//	alert("ccActivationDetailCtrl");
	var ccActivationInputData = creditCardData.getCcActivationInputData();
//	$scope.result = ccLimitInputData.responseMessage;
//	alert("ccLimitInputData.resultList: " + ccLimitInputData.resultList);
	document.getElementById("ccDetailDisplay").innerHTML = ccActivationInputData.resultList;
	var tempDataActivation = creditCardData.getTempDataActivation();
	$scope.ccNumber = tempDataActivation.accountId;
//	document.getElementById("ccNumberHidden").value = tempData.accountId;
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccActivationInput";
	}
	
	$scope.checkSecurityTypeAssigner = function(){
		console.debug("checkSecurityTypeAssigner");
		checkSecurityTypeAssigner($scope,$translate,$state);
	}

	$scope.doConfirmCc = function() {
		console.debug("doConfirmCc");
		//alert("doConfirmCc2");
//		window.location.href = "#/app/ccLimitChangeRequest";
		
		/*setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);
		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}*/
		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {

			// Part untuk kirim securityTypeCode nya ke server
			// -- Start -- 
			if ($('#securityTypeCode').length){
				if($("input[name=securityTypeCode]").attr('type') == 'checkbox'){
					var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').map(function() {return this.value}).get().join('|');
				    var tempSecurityTypeCode = new Array();
				    tempSecurityTypeCode = securityTypeCode.split("|");
				    if(tempSecurityTypeCode.length > 1){
						var securityTypeCode = "2";
					}else  var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').val();
				}
				if($("input[name=securityTypeCode]").attr('type') == 'radio') var securityTypeCode = $('input[name=securityTypeCode]:radio:checked').val();
	   		}else {
	   			var securityTypeCode = localStorage.getItem("securityTypeCode");
	   		}
			
			var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
			
			if(isDevice == true){
				var securityTypeCode = securityTypeCode;
			}else{
				if(userPreference == "8"){
					if(securityTypeCode == "1"||securityTypeCode == "0"){
	    				securityTypeCode="1";
					}else{
		    			var securityTypeCode = securityTypeCode;
					}
				}else{
	    			var securityTypeCode = securityTypeCode;
				}
			}
			console.debug("securityTypeCode: " + securityTypeCode);
			localStorage.setItem("securityTypeCode", securityTypeCode);
			// -- Stop --

			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = tempDataActivation.accountId; // id
			newdata['securityTypeCode'] = securityTypeCode;
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcConfirmActivationAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setCcActivationConfirmData(data);
				    	creditCardData.setRequestMap(newdata);
		    			window.location.href = "#/app/ccActivationConfirm";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	}
})

.controller('ccActivationConfirmCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData, $compile, $ionicLoading, $cordovaDevice, $ionicPlatform) {
	var ccActivationConfirmData = creditCardData.getCcActivationConfirmData();
	var requestMap = creditCardData.getRequestMap();
	console.debug("requestMap: " + JSON.stringify(requestMap));

	$scope.cardMask= ccActivationConfirmData.cardMask;

	// -- start -- nampilin input token & ngebaca sms inbox (klo device)
	console.debug("requestMap.securityTypeCode: " + requestMap.securityTypeCode);
	tokenInputGeneric(requestMap.securityTypeCode,"0",$scope,$compile,$translate);
	//window.localStorage.setItem("transferTransactionInquiry",JSON.stringify(ftInbankInputStorage.transferTransaction));

	var transReferenceNumber = ccActivationConfirmData.transactionReferenceNumber;
	var securityTypeCode = requestMap.securityTypeCode;
	window.localStorage.setItem("securityTypeCode",securityTypeCode);
	document.getElementById('transRefNum').value = transReferenceNumber;
	if(securityTypeCode == "0" || securityTypeCode=="2"){
		//alert("readsms")
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	// -- end --

	// -- start - function yg dibutuhkan untuk resend sms token & checkBox
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	// -- end --

	$scope.doActivationRequest = function(){
		var securityTypeCode = window.localStorage.getItem("securityTypeCode");
		var fill_token_id = $translate.instant('fill_token_id');
		var agreement = $translate.instant('agreement'); 
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			if(document.getElementById('mPin').value!=null && document.getElementById('mPin').value==""){
				alert(fill_token_id);
				return false;
			}
		}
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			if(document.getElementById('simasToken').value!=null && document.getElementById('simasToken').value==""){
				alert(fill_token_id);
				return false;
			}
		}
	
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['accountId']=requestMap.accountId;
		newdata['securityTypeCode']=securityTypeCode;
		newdata['transReferenceNumber']=transReferenceNumber;
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			newdata['tokenInputed'] = document.getElementById('simasToken').value;
		}
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			newdata['mPinInputed'] = document.getElementById('mPin').value;
		}
		
		newdata['lang']=window.localStorage.getItem("lang");
		
		var datajson=JSON.stringify(newdata);

		var url=ipaddress+"/rest/creditCardV2/doCcActivationAmb";
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
	    			creditCardData.setCcActivationResultData(data);

	    			// update status card di localStorage untuk kartu ini
	    			//var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
	    			//for (var i = 0; i<creditCardList.length; i++) {
				    	//if(requestMap.accountId==creditCardList[i].accountId){
				    		//var card = creditCardList[i];
				    		//card.

				    		//cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
				    	//}
				    //}

	    			window.location.href = "#/app/ccActivationResult";
	    		} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				alert("Response from server not found");
			}
		}).error(function(){
			$ionicLoading.hide();	
			alert("Unable to process transaction");
			return false;
		});

	}

	$scope.doBack = function() {
		window.location.href = "#/app/ccActivationInput";
	}
})


.controller('ccActivationResultCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData, $window,$ionicLoading) {
	var ccActivationResultData = creditCardData.getCcActivationResultData();
	$scope.result = ccActivationResultData.responseMessage;
	document.getElementById("ccResultDisplay").innerHTML = ccActivationResultData.resultList;

	var myVar = setInterval(function(){ 
					doRefreshInAppBrowser($http,$window,$ionicLoading); 
					clearInterval(myVar);
				}, 3000);

	$scope.doBack = function() {
		window.location.href = "#/app/ccActivationInput";
	}
})


// Call CS Credit Card
//====================
.controller('ccCallCsCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
//	alert("ccCallCsCtrl");
})


// Limit Credit Card
//==================
.controller('ccLimitInputCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
//	alert("masuk ccLimitInputCtrl");
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	//console.debug("userStorage: " + window.localStorage.getItem("userStorage"));
//	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountListAll;
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
	console.debug("creditCardList: " + creditCardList);
	$scope.creditCardList = creditCardList;
	
	$scope.email = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.email;
	
	// ccList
	$ionicModal.fromTemplateUrl('templates/template-cc/ccList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalCcList = modal;
	});
	$scope.openPopupCcList = function() {
	    $scope.modalCcList.show();
	};
	$scope.closePopupCcList = function() {
	    $scope.modalCcList.hide();
	};
	
	$scope.dropdownBlockPage = function(divName){
		if (divName == 'angularCcList'){
			$scope.openPopupCcList();
		}
	}
	
	$scope.copyCreditCardNumber = function (id, accountNumber, label){
		$scope.closePopupCcList();
		document.getElementById('ccNumberText').value = label;
		document.getElementById('ccNumberHidden').value = id;
	}

	$scope.doCcLimitConfirm = function(id,accountNumber) {
//	    alert("doCcLimitConfirm");
		for (var i = 0; i<creditCardList.length; i++) {
	    	if(accountNumber==creditCardList[i].accountNumber){
	    		console.log("accountNumber  aa: "+creditCardList[i].accountNumber);
	    		//var cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
				var cardActiveStatus=creditCardList[i].attributeCardBpcMap.cardStatus;
	    	}
	    }
	    	console.log("cardActiveStatus : "+cardActiveStatus);
			 if (cardActiveStatus=="CHST20"){
			   alert("Card Status is Temporary block");  
			   return false; 
			 }else if(cardActiveStatus=="CHST21"){
			   alert("Card Status is Permanent block");  
			   return false;
			 }

	    setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var accountId = document.getElementById('ccNumberHidden').value;
		
		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = id; // id
			newdata['lang'] = window.localStorage.getItem("lang");
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcGenericDetailAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setCcLimitInputData(data); //balikan dari server
				    	creditCardData.setTempData(newdata);
				    	window.location.href = "#/app/ccLimitDetail";
	        		}else if (data.responseCode == "99"){
						alert(data.responseMessage);
		        		return false;
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	};
	
})

.controller('ccLimitDetailCtrl', function($ionicLoading,  $ionicScrollDelegate, $parse, $compile, $scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
//	alert("ccLimitDetailCtrl");

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
	
	$scope.limitCard = {};
	$scope.cardLimit = {};
	$scope.tempData ={};

	cancelCheckSecurityChangeLimit($scope);
	
    $scope.cancelCheckSecurityChangeLimit = function () {
    	cancelCheckSecurityChangeLimit($scope);
    };
    
	var ccLimitInputData = creditCardData.getCcLimitInputData();
	var cardLimitData = ccLimitInputData.cardLimitData.cardLimit;
	console.log("cardLimitData : "+JSON.stringify(cardLimitData));
	
//	console.log("ccLimitInputData.resultList: " + ccLimitInputData.resultList);
	document.getElementById("ccDetailDisplay").innerHTML = ccLimitInputData.resultList; //construct buat card info
	
	var treshold = null;
	var firstMultiplier = null;
	var secondMultiplier = null;
	var maxInputManual = null;
	var tempData = creditCardData.getTempData();
	$scope.ccNumber = tempData.accountId;
	
	// Check input type
	$scope.manuallyInputCheck = false;
	$scope.maxLimit = false;


	$scope.changeInputType = function(inputType, tempLimit){
			$scope.maxLimit = false;
			$scope.manuallyInputCheck = inputType;
			//console.log(convertThousandSeparatorToDecimal(tempLimit.limitValue.toString()));
			
			
			//$scope.limitCard.limit = addCommas2Generic($scope.limitCard.limit.toString());
			

		if (inputType == true){
			if (tempLimit.limitValueNew == null || tempLimit.limitValueNew == undefined || tempLimit.limitValueNew == "") {
				$scope.limitCard.limit = addCommas2GenericLimit(tempLimit.limitValue.toString());
			}else{
				$scope.limitCard.limit = addCommas2GenericLimit(tempLimit.limitValueNew.toString());
			}
//			$scope.limitCard.limit= addCommas2Generic($scope.limitCard.limitValueTemp.toString()); //convert dari int ke string
			//$scope.limitCard.limit= $scope.limitCard.limitValueTemp.toString(); //convert dari int ke string
//			$scope.limitCard.limit= convertThousandSeparatorToDecimal($scope.limitCard.limitValueTemp.toString()); //convert dari int ke string
//			$scope.limitCard.limit= $scope.limitCard.limitValueTemp;
		}
		else{
			// for (var i=0; i<cardLimitData.length; i++) {
		 //    if (tempLimit.limitId == tempLimit.limitId) {
		 //    	if(tempLimit.limitType ==2){
			//  		cardLimitData[i].limitValueNew = addCommas2GenericLimit(tempLimit.limitValue.toString());
			// 		$scope.limitCard.limitValueTemp = addCommas2GenericLimit(tempLimit.limitValue.toString());
			// 	}else {
			// 		cardLimitData[i].limitValueNew = (tempLimit.limitValue);
		 // 			$scope.limitCard.limitValueTemp = (tempLimit.limitValue);
		 // 		}
		 //      break;
		 //    }
		 //  }
		
			// $scope.limitCard.cardLimit = cardLimitData;
			$scope.userLimitForSlider = 0;
		}
	}

	//var jsonCardLimitData = [];
	
	console.log("cardLimitData length : "+cardLimitData.length);
	for(var v = 0; v < cardLimitData.length; v++){
//		alert("cardLimitData :"+cardLimitData[v]["limitId"]);
		if(typeof(cardLimitData[v].limitValue)!="number"){
		 	//alert("is not number");
		 	cardLimitData[v].limitValue = convertThousandSeparatorToDecimal(cardLimitData[v].limitValue);
		 }
		
		var limitxValue = "limit_"+cardLimitData[v]["limitId"];
		var modelLimitxValue = $parse(limitxValue);// Get the model
		modelLimitxValue.assign($scope, cardLimitData[v]["limitValue"]);// Assigns a value to it

//		jsonCardLimitData.push({
//			cardNo: cardLimitData[v]["cardNo"],
//			limitId: cardLimitData[v]["limitId"],
//			limitType: cardLimitData[v]["limitType"],
//			limitTypeDesc: cardLimitData[v]["limitTypeDesc"],
//			currentValue: cardLimitData[v]["currentValue"],
////			limitValueNew: cardLimitData[v]["limitValue"],
////			limitValue: cardLimitData[v]["limitValue"],
//			limitValueNew: addCommas2Generic(cardLimitData[v]["limitValue"].toString()),
//			limitValue: addCommas2Generic(cardLimitData[v]["limitValue"].toString()),
//			limitCurr: cardLimitData[v]["limitCurr"],
//			description: cardLimitData[v]["description"],
//			cycleLength: cardLimitData[v]["cycleLength"],
//			cycleType: cardLimitData[v]["cycleType"],
//			cycleTypeDesc: cardLimitData[v]["cycleTypeDesc"]
//		});
		
		//cardLimitData[v].limitValueNew = addCommas2Generic(cardLimitData[v]["limitValue"].toString());
//		cardLimitData[v].limitValue = addCommas2Generic(cardLimitData[v]["limitValue"].toString());
		if(cardLimitData[v].limitType == 2){
		 	cardLimitData[v].limitValue = addCommas2GenericLimit((cardLimitData[v].limitValue).toString());
		 }else {
		 	cardLimitData[v].limitValue = convertDecimalToThousandSeparator(cardLimitData[v]["limitValue"].toString());	 		
		 } 	
		//cardLimitData[v].limitValue = convertDecimalToThousandSeparator(cardLimitData[v]["limitValue"].toString());
		
		//jsonCardLimitData.push(cardLimitData[v]);
		
	}
	
	//scope.limitCard.cardLimit untuk tampilan detail pakai col sama row nya ionic
	//$scope.limitCard.cardLimit = cardLimitData; //object kiriman dari server belum pakai separator titik untuk limit value
	$scope.limitCard.cardLimit = cardLimitData; //object baru pakai separator titik untuk limit value
//	console.log("cardLimitData : "+JSON.stringify(jsonCardLimitData));
	
	
	//---------------------------------------------------------------------------------------------------------------------//
	
	var initChangeLimit = 0;
	$scope.showChangeLimit = function(cardLimitSelect){
		console.log(">> showChangeLimit <<");
		console.log("limitId : "+cardLimitSelect.limitId);
		console.log("length : "+cardLimitData.length);
		 $ionicScrollDelegate.scrollBottom();
		$scope.maxLimit = false;
		var jsonCardLimitDataNew = [];
		for (var v=0; v<cardLimitData.length; v++) {
		    if (cardLimitData[v].limitId == cardLimitSelect.limitId) {	

//				cardLimitData[v].limitValue = addCommas2Generic(cardLimitData[v]["limitValue"].toString());
//				cardLimitData[v].limitValueNew = addCommas2Generic(cardLimitData[v]["limitValue"].toString());
				cardLimitData[v].limitValue = cardLimitData[v]["limitValue"].toString();
				//cardLimitData[v].limitValueNew = cardLimitData[v]["limitValue"].toString();
				jsonCardLimitDataNew.push(cardLimitData[v]);
		      break;
		    }
		  }
		
		// if (jsonCardLimitDataNew[0].limitValueNew == "undefined" || jsonCardLimitDataNew[0].limitValueNew == "" || jsonCardLimitDataNew[0].limitValueNew == null){
		// 	$scope.limitCard.limit = addCommas2GenericLimit(jsonCardLimitDataNew[0].limitValue.toString());			
		// 	//$scope.limitCard.limit = parseInt(jsonCardLimitDataNew[0].limitValue).toString();
		// }else{
		// 	$scope.limitCard.limit = addCommas2GenericLimit(jsonCardLimitDataNew[0].limitValueNew.toString());
		// 	//$scope.limitCard.limit = parseInt(jsonCardLimitDataNew[0].limitValueNew).toString();
		// }

		//$scope.limitCard.limit = addCommas2Generic($scope.limitCard.limit);

		console.log("limit new : "+jsonCardLimitDataNew[0].limitValue.toString());
		console.log("limit existing : "+jsonCardLimitDataNew[0].limitValue.toString());

		//ga jadi di pake, langsung ambil dari model yang di ng-repeat
		$scope.limitCard.dataCardNo = jsonCardLimitDataNew[0].cardNo;
		$scope.limitCard.dataLimitId = jsonCardLimitDataNew[0].limitId;
		$scope.limitCard.dataLimitType = jsonCardLimitDataNew[0].limitType;
		$scope.limitCard.dataLimitTypeDesc = jsonCardLimitDataNew[0].limitTypeDesc;
		$scope.limitCard.dataCurrentValue = jsonCardLimitDataNew[0].currentValue;
//		$scope.limitCard.dataLimitValue = jsonCardLimitDataNew[0].limitValue;
//		$scope.limitCard.dataLimitValue = addCommas2Generic(jsonCardLimitDataNew[0].limitValue.toString());
		$scope.limitCard.dataLimitValue = jsonCardLimitDataNew[0].limitValue.toString();
		$scope.limitCard.dataLimitCurr = jsonCardLimitDataNew[0].limitCurr;
		$scope.limitCard.dataDescription = jsonCardLimitDataNew[0].description;
		$scope.limitCard.dataCycleLength = jsonCardLimitDataNew[0].cycleLength;
		$scope.limitCard.dataCycleType = jsonCardLimitDataNew[0].cycleType;
		$scope.limitCard.dataCycleTypeDesc = jsonCardLimitDataNew[0].cycleTypeDesc;
		
		
		
		try {
			if (initChangeLimit == 1){
				$('#DivLimit').remove();
			}
			//alert(document.getElementById('changeLimitRange').value);
			
		} catch(e) {}
		
		try {
			if (jsonCardLimitDataNew[0].limitValueNew == "" || jsonCardLimitDataNew[0].limitValueNew == "undefined" ||jsonCardLimitDataNew[0].limitValueNew == undefined || jsonCardLimitDataNew[0].limitValueNew == null){
				$scope.limitCard.limitValueTemp  = "";
				$scope.limitCard.limit = addCommas2GenericLimit(jsonCardLimitDataNew[0].limitValue.toString());	
				//alert("temp limit null: "+$scope.limitCard.limitValueTemp);
			}else{
				$scope.limitCard.limit = addCommas2GenericLimit(jsonCardLimitDataNew[0].limitValueNew.toString());
				console.log("type : "+cardLimitData[0].limitType);
				if(cardLimitSelect.limitType ==2){
		 			jsonCardLimitDataNew[0].limitValueNew = addCommas2GenericLimit((jsonCardLimitDataNew[0].limitValueNew).toString());
			 		$scope.limitCard.limitValueTemp  = addCommas2GenericLimit(jsonCardLimitDataNew[0].limitValueNew.toString());
			 	}else {
		 			jsonCardLimitDataNew[0].limitValueNew = jsonCardLimitDataNew[0]["limitValueNew"].toString();	 		
		 			$scope.limitCard.limitValueTemp  = jsonCardLimitDataNew[0].limitValueNew.toString();
		 		} 	
				
				//alert("temp limit : "+$scope.limitCard.limitValueTemp);
			}
			
//			$scope.limitCard.limitValueTemp  = convertDecimalToThousandSeparator(Number(jsonCardLimitDataNew[0].limitValue));
			$scope.limitCard.dataBaru = jsonCardLimitDataNew[0];
			console.log(JSON.stringify(jsonCardLimitDataNew[0]));
			$scope.userLimitForSlider = 0;
			
			// if(jsonCardLimitDataNew[0].limitValueNew!=undefined || jsonCardLimitDataNew[0].limitValueNew!=null){
			// 	var newLimit = convertThousandSeparatorToDecimal(jsonCardLimitDataNew[0].limitValueNew);
			// }
			
			// var oldLimit = convertThousandSeparatorToDecimal(jsonCardLimitDataNew[0].limitValue);

			var exceedLimit = "*Max limit on this transaction is {{maxLimitError}}";

			var displayText="";
			
			displayText+="<div class='list list-inset'>";
			displayText+="<table width='100%' border='0' cellspacing='0' cellpadding='0'>";
			displayText+="<tr>";
			displayText+="<td class='txtTitleAccDetSmall' width='45%' align='left'>Existing Limit</td>";
			displayText+="<td> : </td>";
//			displayText+="<td class='txtTitleAccDet' width='45%' align='left'>"+addCommas2Generic(jsonCardLimitDataNew[0].limitValueNew.toString());+"</td>";
			displayText+="<td class='txtTitleAccDet' width='45%' align='left'>"+jsonCardLimitDataNew[0].limitValue.toString();+"</td>";
			displayText+="</tr>";
			displayText+="<tr>";
			displayText+="<td class='txtTitleAccDetSmall' width='45%' align='left'>New Limit</td>";
			displayText+="<td> : </td>";
			displayText+="<td class='txtTitleAccDet' width='45%' align='left'>{{limitCard.limitValueTemp}}</td>";
			displayText+="</tr>";
			displayText+="<tr>";
			displayText+="<td class='txtTitleAccDetSmall' width='45%' align='left'>Description</td>";
			displayText+="<td> : </td>";
			displayText+="<td class='txtTitleAccDet' width='45%' align='left'>"+jsonCardLimitDataNew[0].description+"</td>";
			displayText+="</tr>";
//			displayText+="<p>limit untuk id : "+jsonCardLimitDataNew[0].limitId+"</p>";
//			displayText+="<p>limitnya : {{limitCard.limitValueTemp}} {{manuallyInputCheck}} </p>";
			displayText+="</table>";
			displayText+="</div>";
			
			displayText+="<div ng-show='manuallyInputCheck == false'>";
			displayText+="<div class='item range range-positive'>";
			displayText+="<i class='icon ion-arrow-graph-down-left'></i>";
			displayText+="<input type='range' min='0' max='100' ng-model='userLimitForSlider' ng-change='changeLimitSlider({{limitCard.dataBaru}})'>";
			displayText+="<i class='icon ion-arrow-graph-up-right'></i>";
			displayText+="</div>";
			displayText+="</div>";

			displayText+="<label class='item item-checkbox item-text-wrap'>";
			displayText+="<label class='checkbox'>";
			displayText+="<input type='checkbox' ng-model='manuallyInputCheck' ng-true-value='true' ng-false-value='false' ng-change='changeInputType(manuallyInputCheck, {{limitCard.dataBaru}})'/>";
			displayText+="</label>";
			displayText+="Please check to input manually";
			displayText+="</label>";
			
			displayText+="<div ng-if='manuallyInputCheck == true'>";

			
			//displayText+="<table width='100%' border='0' cellspacing='0' cellpadding='0'>";
			//displayText+="<tr>";
			//displayText+="<td width='85%'>";
			displayText+="<label class='item item-input'>";
			displayText+="<input type='tel' ng-model='limitCard.limit' name='limit' id='limit' size='17' style='font-size:20px;font-weight:bold;' ng-change='changeLimitInputManual({{limitCard.dataBaru}})' maxlength='15' placeholder='Input Limit' only-digits/>";
			displayText+="</label>";
			displayText+="<div ng-show='maxLimit == true'>";
			displayText+="<p>"+exceedLimit.fontcolor("red") + "</p>";
			displayText+="</div>";
			//displayText+="</td>";
			//displayText+="<td width='1%'>";
			//displayText+=".";
			//displayText+="</td>";
			//displayText+="<td width='14%'>";
			//displayText+="<label class='item item-input'>";
			//displayText+="<input type='tel' size='5' style='font-size:20px;font-weight:bold;' maxlength='2' only-digits/>";
			//displayText+="</label>";
			//displayText+="</td>";
			//displayText+="</tr>";
			//displayText+="</table>";
			displayText+="</div>";


			var nodeConstructDisplay = document.createElement('span');
			nodeConstructDisplay.innerHTML = " <div id='DivLimit'> "+displayText+" </div>";
			document.getElementById('changeLimitRange').appendChild(nodeConstructDisplay);
			
			$compile(document.getElementById('changeLimitRange'))($scope);
			$scope.$apply();
			initChangeLimit = 1;
		} catch(e) {
			console.log(e)
		}
	}
	
	//---------------------------------------------------------------------------------------------------------------//
	
	$scope.changeLimitInputManual = function(cardLimitSelect){
		console.log(">> changeLimitInputManual Try<<");

		//alert("showChangeLimit "+$scope.userLimitForSlider);
		//var limitDefault = parseInt(cardLimitSelect.limitValue);
		//var limitKali = parseInt($scope.userLimitForSlider);
		//alert("limitKali "+limitKali);
		if(checkTypeAndCurrency(cardLimitSelect.limitType, cardLimitSelect.limitCurr)=="USD"){
			maxInputManual = 85000;
			console.log("type 1 , curr USD : " +maxInputManual);
		}else if(checkTypeAndCurrency(cardLimitSelect.limitType, cardLimitSelect.limitCurr)=="CNY"){
			maxInputManual = 170000;
			console.log("type 1 , curr CNY : " +maxInputManual);
		}else if(checkTypeAndCurrency(cardLimitSelect.limitType, cardLimitSelect.limitCurr)=="velocity"){
			maxInputManual = 100;
			console.log("type 2 : "+maxInputManual);
		}else{
			console.log("Fail to retrieve currency");
			//var maxLimit = $scope.userLimitForSlider.valueOf() * 500000;	
		}
		var maxLimit = convertThousandSeparatorToDecimal(cardLimitSelect.limitValue) + maxInputManual;
		

		var newUserLimitReal = "";
		if($scope.limitCard.limit==null ||$scope.limitCard.limit==""){
			$scope.limitCard.limitValueTemp = "";
			newUserLimitReal = "";
		}else{
			if($scope.limitCard.limit > maxLimit){
				$scope.maxLimit = true;
				newUserLimitReal = maxLimit;
			}else{
				$scope.maxLimit = false;
				
				newUserLimitReal = $scope.limitCard.limit;
			//	console.log("newUserLimitReal before : "+newUserLimitReal);
			}
		}


//		$scope.limitCard.limitValueTemp = addCommas2Generic(newUserLimitReal.toString());
//		$scope.limitCard.limit = addCommas2Generic(newUserLimitReal.toString());
		if(!isNaN(Number(newUserLimitReal.toString()))){
				if(cardLimitSelect.limitType ==2){
			 		$scope.limitCard.limitValueTemp = addCommas2GenericLimit(newUserLimitReal.toString());
			 		$scope.maxLimitError = addCommas2GenericLimit(maxLimit.toString());
			 	}else {
			 		if(addCommas2GenericLimit(newUserLimitReal.toString())=="0"){
      					 $scope.limitCard.limitValueTemp = "0.00";
    				}else{
       					$scope.limitCard.limitValueTemp = convertDecimalToThousandSeparator(newUserLimitReal.toString());
       					$scope.maxLimitError = convertDecimalToThousandSeparator(maxLimit);
     				}
		 			//$scope.limitCard.limitValueTemp = convertDecimalToThousandSeparator(newUserLimitReal.toString());
		 			//$scope.maxLimitError = convertDecimalToThousandSeparator(maxLimit);
		 		} 	
		//	$scope.limitCard.limitValueTemp = convertDecimalToThousandSeparator(newUserLimitReal.toString());
		}else{
			$scope.limitCard.limitValueTemp = "Wrong number format";
		}
//		$scope.limitCard.limitValueTemp = convertDecimalToThousandSeparator(Number(newUserLimitReal.toString()));
		
		//$scope.limitCard.limit = newUserLimitReal.toString();
		$scope.limitCard.limit = addCommas2GenericLimit(newUserLimitReal.toString());

		for (var i=0; i<cardLimitData.length; i++) {
		    if (cardLimitData[i].limitId == cardLimitSelect.limitId) {
//		    	cardLimitData[i].limitValueNew = addCommas2Generic(newUserLimitReal);
				
				if(!isNaN(Number(newUserLimitReal))){
					if(cardLimitSelect.limitType ==2){
			 			cardLimitData[i].limitValueNew = addCommas2GenericLimit(newUserLimitReal.toString());
			 		}else {
			 			if(addCommas2GenericLimit(newUserLimitReal.toString())=="0"){
      						cardLimitData[i].limitValueNew = "0.00";
    					}else{
       						cardLimitData[i].limitValueNew = convertDecimalToThousandSeparator(newUserLimitReal);
     					}
			 		}
				}else{
					cardLimitData[i].limitValueNew = "Wrong number format";
				}
		    	
				
				$scope.limitCard.dataCardNo = cardLimitData[i].cardNo;
				$scope.limitCard.dataLimitId = cardLimitData[i].limitId;
				$scope.limitCard.dataLimitType = cardLimitData[i].limitType;
				$scope.limitCard.dataLimitTypeDesc = cardLimitData[i].limitTypeDesc;
				$scope.limitCard.dataCurrentValue = cardLimitData[i].currentValue;
//				$scope.limitCard.dataLimitValue = cardLimitData[i].limitValue;
				console.log("newUserLimitReal after : "+cardLimitData[i].limitValue.toString());
//				$scope.limitCard.dataLimitValue = addCommas2Generic(newUserLimitReal);
				$scope.limitCard.dataLimitValue = newUserLimitReal;
				$scope.limitCard.dataLimitCurr = cardLimitData[i].limitCurr;
				$scope.limitCard.dataDescription = cardLimitData[i].description;
				$scope.limitCard.dataCycleLength = cardLimitData[i].cycleLength;
				$scope.limitCard.dataCycleType = cardLimitData[i].cycleType;
				$scope.limitCard.dataCycleTypeDesc = cardLimitData[i].cycleTypeDesc;
		      break;
		    }
		  }
		
		$scope.limitCard.cardLimit = cardLimitData;
	}
	
	$scope.changeLimitSlider = function(cardLimitSelect){
		console.log(">> changeLimitSlider <<");
//		alert("showChangeLimit "+$scope.userLimitForSlider);
		if (cardLimitSelect.limitValueNew == "undefined" || cardLimitSelect.limitValueNew == "" || cardLimitSelect.limitValueNew == null){
			cardLimitSelect.limitValueNew = cardLimitSelect.limitValue;
			$scope.limitCard.limit = cardLimitSelect.limitValue;
		}else{
			$scope.limitCard.limit = cardLimitSelect.limitValueNew;
		}
		
		console.log("cardLimitSelect.limitValue before : "+cardLimitSelect.limitValue);
		
		//var limitDefault = parseInt(cardLimitSelect.limitValue); 
		//var limitDefault = parseInt(replaceall(cardLimitSelect.limitValue,'.',''));
		var limitDefault = (convertThousandSeparatorToDecimal(cardLimitSelect.limitValue)).valueOf();
		console.log("limitDefault before replaceall . : "+limitDefault +"type : "+typeof(limitDefault));

		if(checkTypeAndCurrency(cardLimitSelect.limitType, cardLimitSelect.limitCurr)=="USD"){
			console.log("type 1 , curr USD");
			treshold = 30;
			firstMultiplier = 500;
			secondMultiplier = 1000;
		}else if(checkTypeAndCurrency(cardLimitSelect.limitType, cardLimitSelect.limitCurr)=="CNY"){
			console.log("type 1 , curr CNY");
			treshold = 30;
			firstMultiplier = 1000;
			secondMultiplier = 2000;
		}else if(checkTypeAndCurrency(cardLimitSelect.limitType, cardLimitSelect.limitCurr)=="velocity"){
			console.log("type 2");
			treshold = 100;
			firstMultiplier = 1;
			secondMultiplier = 1;
		}else{
			alert("Currency not found");
		}


		if($scope.userLimitForSlider<=treshold){
			var limitKali = $scope.userLimitForSlider * firstMultiplier;
		}else if($scope.userLimitForSlider>treshold){
			var limitKali = ($scope.userLimitForSlider-treshold) * secondMultiplier + (firstMultiplier*treshold);
		}
		// var limitKali = $scope.userLimitForSlider.valueOf() * 1000000;
		//console.log("limitDefault kali sejuta . : "+show);
		console.log("limit x "+limitKali + "type : "+typeof(limitKali));
		//alert("limitKali "+limitKali);
	
		var newUserLimitReal = limitDefault+limitKali;
		//var newUserLimitReal = limitDefault + limitKali;
		console.log("newUserLimitReal : "+newUserLimitReal);
		
//		$scope.limitCard.limitValueTemp = addCommas2Generic(newUserLimitReal.toString());
		
		if(cardLimitSelect.limitType ==2){
			$scope.limitCard.limitValueTemp = addCommas2GenericLimit(newUserLimitReal.toString());
		}else {
			$scope.limitCard.limitValueTemp = convertDecimalToThousandSeparator(newUserLimitReal.toString());
		}
//		$scope.limitCard.limitValueTemp = convertDecimalToThousandSeparator(Number(newUserLimitReal.toString()));
		
		for (var i=0; i<cardLimitData.length; i++) {
		    if (cardLimitData[i].limitId == cardLimitSelect.limitId) {
		    	cardLimitData[i].limitValueNew = $scope.limitCard.limitValueTemp;
//		    	cardLimitData[i].limitValueNew = convertThousandSeparatorToDecimal($scope.limitCard.limitValueTemp);
		    	
				$scope.limitCard.dataCardNo = cardLimitData[i].cardNo;
				$scope.limitCard.dataLimitId = cardLimitData[i].limitId;
				$scope.limitCard.dataLimitType = cardLimitData[i].limitType;
				$scope.limitCard.dataLimitTypeDesc = cardLimitData[i].limitTypeDesc;
				$scope.limitCard.dataCurrentValue = cardLimitData[i].currentValue;
//				$scope.limitCard.dataLimitValue = cardLimitData[i].limitValue;
				$scope.limitCard.dataLimitValue = $scope.limitCard.limitValueTemp;
//				$scope.limitCard.dataLimitValue = convertThousandSeparatorToDecimal($scope.limitCard.limitValueTemp);
				$scope.limitCard.dataLimitCurr = cardLimitData[i].limitCurr;
				$scope.limitCard.dataDescription = cardLimitData[i].description;
				$scope.limitCard.dataCycleLength = cardLimitData[i].cycleLength;
				$scope.limitCard.dataCycleType = cardLimitData[i].cycleType;
				$scope.limitCard.dataCycleTypeDesc = cardLimitData[i].cycleTypeDesc;
		      break;
		    }
		  }
		
		$scope.limitCard.cardLimit = cardLimitData;
	}
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccLimitInput";
	}

	$scope.doChangeLimit = function() {
		console.log(">> doChangeLimit <<");
		console.log("cardLimitData.length: "+cardLimitData.length);
		
		console.log("start validasi");
		var jsonArrConfirm = [];
		for (var i=0; i<cardLimitData.length; i++) {
			var limitValue = cardLimitData[i]["limitValue"];
			var limitValueNew = cardLimitData[i]["limitValueNew"];
			if (limitValue != limitValueNew && limitValueNew != null && limitValueNew != "" && limitValueNew != "undefined"){

				jsonArrConfirm.push(cardLimitData[i]);
			}
//			alert("limitValue : "+limitValue);
//			alert("limitValueNew : "+limitValueNew);
		}
		console.log("end validasi - total cardlimit change : "+jsonArrConfirm.length);

		//if(jsonArrConfirm.length >= 1 && limitValueNew != "0.00"){
		if(jsonArrConfirm.length >= 1){
			console.log("newLimit size : "+jsonArrConfirm.length);
		}else{
			alert("New Limit is Required");
			$state.go('app.ccLimitDetail');
			return false;
		}
		
		//gk tau ini buat apa
		/*var jsonArr = [];
		for(var v = 0; v < cardLimitData.length; v++){
			var limitId = cardLimitData[v]["limitId"];
			var limitValue = cardLimitData[v]["limitValue"];
//			var limitValue = $scope.limitCard.limitValueTemp;
			//alert("limitId ke "+v+" : "+limitId);
			//alert("limitValue ke "+v+" : "+limitValue);

	   		jsonArr.push({
				limitId: limitId,
				limitValue: limitValue
			});
		}
	
   		console.log("jsonArr :"+jsonArr.length);
   		console.log("jsonArr :"+JSON.stringify(jsonArr));*/
		
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {

			
			var securityTypeCode = "";
			var securityTypeCodeOption = document.getElementsByClassName('securityTypeCodeOption');
			
			if (securityTypeCodeOption.length){
				var checkedValue = null;
				
				for(var i=0; i < securityTypeCodeOption.length; ++i){
					  if(securityTypeCodeOption[i].checked){
						  if (checkedValue != null){
							  checkedValue = checkedValue+"|"+securityTypeCodeOption[i].value;
						  }else{
							  checkedValue = securityTypeCodeOption[i].value;
						  }
						  //break;
					  }
				} 
				
				if (checkedValue == null) {
					alert("Please Choose Security Type Option");
					return false;
				}
				
				if(securityTypeCodeOption[0].type == "checkbox"){
					var tempSecurityTypeCode = new Array();
				    tempSecurityTypeCode = checkedValue.split("|");
				    
				    if(tempSecurityTypeCode.length > 1){
						securityTypeCode = "2";
					}else{
						securityTypeCode = checkedValue;
					}
				}else if(securityTypeCodeOption[0].type == "radio"){
					var securityTypeCode = checkedValue;
				}
			}else{
				securityTypeCode = localStorage.getItem("securityTypeCode");
			}
		   
			if(isDevice == true){
				var securityTypeCode = securityTypeCode;
			}else{
			//	alert(userPreference);
				if(userPreference == "8"){
					if(securityTypeCode == "1"||securityTypeCode == "0"){
						//alert(securityTypeCode)
						securityTypeCode="1";
					}else{
		    			var securityTypeCode = securityTypeCode;
					}
				}else{
					var securityTypeCode = securityTypeCode;
				}
			}
			localStorage.setItem("securityTypeCode", securityTypeCode);
		
			//alert("securityTypeCode :"+securityTypeCode);
			
			var newDataDetail = {};
			newDataDetail['jsonArr'] = jsonArrConfirm;
			newDataDetail['jsonArrExisting'] = cardLimitData;
			
			creditCardData.setCcLimitDetailData(newDataDetail);
			
			var newdata = {};
			newdata['ipassport']= userStorageMap.ipassport;
			newdata['securityTypeCode'] = securityTypeCode;
			newdata['accountId'] = tempData.accountId; // id
			newdata['jsonArr'] = jsonArrConfirm;
			newdata['jsonArrExisting'] = cardLimitData;
			newdata['lang']=window.localStorage.getItem("lang");

			
			var userStorageString = JSON.stringify(newdata);
//			console.log('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcLimitConfirmAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();
				if (data != null){
	        	 	if (data.responseCode == "01"){
						alert(data.responseMessage);
			    	} else if (data.responseCode == "00"){
			    		creditCardData.setCcLimitConfirmData(data);
			    		creditCardData.setTempConfirmData(tempData);
  						$state.go('app.ccLimitConfirm');
	        		}else if (data.responseCode == "99"){
						alert(data.responseMessage);
		        		return false;
			    	}else{
						alert(data.responseMessage);
			    	}
	        	 }else{
	        		 alert("Response Null");
  					 $state.go('app.ccLimitInput');
	        		 return false;
	        	 }
			}).error(function(){
				$ionicLoading.hide();
				alert("Unable to process transaction");
				return false;
			});
			
//			if ($scope.newLimit > $scope.userLimitExisting){
//				// Munculin Request ke CS
//				requestChangeLimit(creditCardData, newdata, $ionicLoading, $http);
//			} else if ($scope.newLimit < $scope.userLimitExisting){
//				// Munculin Token yg sesuai aturan token IB
//	//			$scope.newLimit = "20.000.000";
//				//checkSecurityTypeAssigner($scope,$translate,$state);
//				
//				console.debug("lempar ke Confirm Page");
//
//				newdata['securityTypeCode'] = securityTypeCode;
//				newdata['lang']=window.localStorage.getItem("lang");
//
//				var datajson=JSON.stringify(newdata);
//	  		  	//console.debug("datajson : "+datajson);
//
//				// request POST to server
//				$ionicLoading.show({
//				 	template: 'Loading...',
//			        animation: 'fade-in',
//			        showBackdrop: true,
//			        maxWidth: 200,
//			        showDelay: 0
//			    });  	
//	  		  	$http.post(ipaddress+'/rest/creditCardV2/doCcLimitConfirmAmb',datajson)
//	  		  	//var url=ipaddress+"/rest/creditCardV2/doCcRequestChangeLimitAmb";
//	  		  	
//		         .success(function(data) {
//		        	 
//		        	 $ionicLoading.hide();
//		        	 	
//		        	 if (data != null){
//		        	 	if (data.responseCode == "01"){
//							alert(data.responseMessage);
//				    	} else if (data.responseCode == "00"){
//				    		//alert("displayOpenAccConfirm : "+data.openAccConfirm.displayOpenAccConfirm);
//				    		//openAccModel.setOpenAccConfirmData(data.openAccConfirm);
//
//				    		console.debug("data: " + data);
//				    		newdata['responseLimitConfirm'] = data; 
//				    		creditCardData.setCcLimitConfirmData(newdata);
//
//				    		if( (pageMode != null && pageMode != "") && pageMode == "desktop"){
//		  						console.log("page mode desktop");
//				    			$state.go('app.ccLimitConfirmDesktop');
//				    		} else {
//		  						console.log("page mode mobile");
//		  						$state.go('app.ccLimitConfirm');
//				    		}
//							
//				    	}else{
//							alert(data.responseMessage);
//				    	}
//
//		        	 }else{
//		        		 alert("Response Null");
//	  					 $state.go('app.ccLimitInput');
//		        		 return false;
//		        	 }
//				    	
//		         }).error(function(){
//		        	 	$ionicLoading.hide();
//		        	 	alert("Server Error");
//	  					$state.go('app.ccLimitInput');
//		        	 	return false;
//			     });
//				
//			} else {
//				alert("You are using this limit currently, please change it before do this action");
//			}
		}
	}
	
	// Tokenization
	$scope.checkSecurityTypeAssigner = function () {
		console.debug("checkSecurityTypeAssigner");
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
})


.controller('ccLimitConfirmCtrl', function($compile, $ionicLoading, $scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData, $cordovaDevice,$ionicPlatform) {
	console.debug("ccLimitConfirmCtrl");

	//loadFontSizeInApp();

	$scope.limitCard = {};
	 
	if (lang != null && lang != 'en'){
		lang = 'id';
	}
	console.log("lang : "+lang);
	$translate.use(lang);

	var ccLimitDetailData = creditCardData.getCcLimitDetailData();
	console.log("Existing"+JSON.stringify(ccLimitDetailData.jsonArrExisting));
	console.log("New : "+JSON.stringify(ccLimitDetailData.jsonArr));

		$scope.limitCard.cardLimitExisting = ccLimitDetailData.jsonArrExisting;
		$scope.limitCard.cardLimitNew = ccLimitDetailData.jsonArr;

		// try {
		// $scope.limitCard.cardLimitExisting = convertDecimalToThousandSeparator(Number(ccLimitDetailData.jsonArrExisting));
		// $scope.limitCard.cardLimitNew = convertDecimalToThousandSeparator(Number(ccLimitDetailData.jsonArr));
		// 	} catch(e) {}

	var ccLimitConfirmData = ccLimitDetailData.jsonArr;
//	console.log(ccLimitConfirmData);

	var jsonCardLimitData = [];
	
	console.log("ccLimitConfirmData length : "+ccLimitConfirmData.length);
	for(var v = 0; v < ccLimitConfirmData.length; v++){
		var decimalLimitValue = convertThousandSeparatorToDecimal(ccLimitConfirmData[v].limitValue);
		var decimalLimitValueNew = convertThousandSeparatorToDecimal(ccLimitConfirmData[v].limitValueNew);
		// ccLimitConfirmData[v].limitValue = decimalLimitValue;
		// ccLimitConfirmData[v].limitValueNew = decimalLimitValueNew;
		console.log(decimalLimitValue +" "+ decimalLimitValueNew);
	
		 jsonCardLimitData.push(ccLimitConfirmData[v]);
	}	
	
	console.debug("jsonCardLimitData: " + JSON.stringify(jsonCardLimitData)); //object baru yang limit value nya tanpa titik buat kirim ke server
	
	var tempConfirmData = creditCardData.getTempConfirmData();
	//console.debug("ccLimitConfirmData: " + ccLimitConfirmData);

	var ccLimitConfirmData = creditCardData.getCcLimitConfirmData();

	var transReferenceNumber = ccLimitConfirmData.transactionReferenceNumber;
	console.debug("transReferenceNumber: " + transReferenceNumber);
    $scope.transRefNum = transReferenceNumber;
    window.localStorage.setItem('transRefNum', transReferenceNumber);

	var securityTypeCode = ccLimitConfirmData.securityTypeCode;
	console.debug("securityTypeCode: " + securityTypeCode);

	if (securityTypeCode != null ){
		tokenInputGeneric(securityTypeCode, "0", $scope, $compile,$translate);
	}else{
		alert("Error Token Type");
    	$state.go('app.ccLimitInput');
    	return false;
	}
    
    if(securityTypeCode == "0" || securityTypeCode=="2"){
    	startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
    	//doStartReadSmsInbox();
	}

	//-------------------------
	$scope.simasCheckboxFunction = function () {
        simasCheckboxFunction($scope, $http, $compile, $translate, $ionicLoading);
	};
    
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
    
	$scope.reSendSMSToken = function () {
		console.debug("reSendSMSToken");
        reSendSMSToken($http, $translate, $ionicLoading);
	};


	$scope.doChangeLimitBackDesktop = function() {
		console.log("doChangeLimitBackDesktop");
		window.location.href = "#/app/ccLimitInputDesktop";
	}

	$scope.doRequestChangeLimit = function() {
		console.log(">> doRequestChangeLimit <<");

		var noError = "0";
		var securityTypeCode = "";
		var transRefNum = "";
		try {
			securityTypeCode = window.localStorage.getItem("securityTypeCode");
			transRefNum = window.localStorage.getItem("transRefNum");
			console.debug("securityTypeCode: " + securityTypeCode);
			console.debug("transRefNum: " + transRefNum);
		} catch(e) {}
		
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			if(document.getElementById('mPin').value!=null && document.getElementById('mPin').value==""){
				alert("Please fill in the Token id ");
				noError = "1";
				return false;
			}
		}
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			if(document.getElementById('simasToken').value!=null && document.getElementById('simasToken').value==""){
				alert("Please fill in the Token id ");
				noError = "1";
				return false;
			}
		}

		console.debug("noError: " + noError);
		if (noError == "0"){
			try {
				if (securityTypeCode == "1" || securityTypeCode == "2"){
					ccLimitConfirmData['tokenInputed'] = document.getElementById('simasToken').value;
				}
				if (securityTypeCode == "0" || securityTypeCode == "2"){
					ccLimitConfirmData['mPinInputed'] = document.getElementById('mPin').value;
				}
			} catch(e) {}
			try {
				ccLimitConfirmData['securityTypeCode'] = securityTypeCode;
				ccLimitConfirmData['transRefNum'] = transRefNum;
			} catch(e) {}
		}

		//console.log("limit data : "+JSON.stringify(jsonCardLimitData));

		for(var v = 0; v < jsonCardLimitData.length; v++){
		//alert("masuk for");
		var decimalLimitValue = convertThousandSeparatorToDecimal(jsonCardLimitData[v].limitValue);
		var decimalLimitValueNew = convertThousandSeparatorToDecimal(jsonCardLimitData[v].limitValueNew);
		 jsonCardLimitData[v].limitValue = decimalLimitValue.toString();
		 jsonCardLimitData[v].limitValueNew = decimalLimitValueNew.toString();
		console.log(decimalLimitValue +" "+ decimalLimitValueNew);
	
		// jsonCardLimitData.push(ccLimitConfirmData[v]);
		}	


		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var newdata = {};
			newdata['ipassport']= userStorageMap.ipassport;
			newdata['securityTypeCode'] = securityTypeCode;
			newdata['accountId'] = tempConfirmData.accountId;
			newdata['transRefNum']=transRefNum;
//			newdata['jsonArr']=ccLimitDetailData.jsonArr; 
			newdata['jsonArr']=jsonCardLimitData; //tanpa separator titik
			newdata['lang']=window.localStorage.getItem("lang");

			if (securityTypeCode == "1" || securityTypeCode == "2"){
				newdata['tokenInputed'] = document.getElementById('simasToken').value;
			}
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				newdata['mPinInputed'] = document.getElementById('mPin').value;
			}
			
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcRequestChangeLimitAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setCcLimitResultData(data);
		    			window.location.href = "#/app/ccLimitResult";
        		    }else if (data.responseCode == "99"){
						alert(data.responseMessage);
		        		return false;
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();
				alert("Unable to process transaction");
				return false;
			});
		}
	}

})



.controller('ccLimitResultCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
	
	$scope.limitCard = {};
	
	var ccLimitResultData = creditCardData.getCcLimitResultData().cardList;

	var jsonCardLimitData = [];
	
	console.log("ccLimitConfirmData length : "+ccLimitResultData.length);
	for(var v = 0; v < ccLimitResultData.length; v++){
		if(ccLimitResultData[v].limitType == 2){
		 	ccLimitResultData[v].limitValue = addCommas2GenericLimit(ccLimitResultData[v].limitValue);
			ccLimitResultData[v].limitValueNew = addCommas2GenericLimit(ccLimitResultData[v].limitValueNew);
		 }else {
		 	ccLimitResultData[v].limitValue = convertDecimalToThousandSeparator(ccLimitResultData[v].limitValue);
			ccLimitResultData[v].limitValueNew = convertDecimalToThousandSeparator(ccLimitResultData[v].limitValueNew);
		 }
		
		jsonCardLimitData.push(ccLimitResultData[v]);
		
	}
	
	console.debug("jsonCardLimitData: " + jsonCardLimitData);
	
	$scope.limitCard.cardLimitResult = jsonCardLimitData;
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccLimitInput";
	}
	
})


// International Transaction
//==========================
.controller('ccIntlTrxInputCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
//	alert("masuk ccIntlTrxInputCtrl");
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.creditCardList;
//	alert("creditCardList: " + creditCardList);
	$scope.creditCardList = creditCardList;
	
	$scope.email = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.email;
	
	// ccList
	$ionicModal.fromTemplateUrl('templates/template-cc/ccList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalCcList = modal;
	});
	$scope.openPopupCcList = function() {
	    $scope.modalCcList.show();
	};
	$scope.closePopupCcList = function() {
	    $scope.modalCcList.hide();
	};
	
	$scope.dropdownBlockPage = function(divName){
		if (divName == 'angularCcList'){
			$scope.openPopupCcList();
		}
	}
	
	$scope.copyCreditCardNumber = function (id, accountNumber, label){
		$scope.closePopupCcList();
		document.getElementById('ccNumberText').value = label;
		document.getElementById('ccNumberHidden').value = id;
	}
	
	
	
	$scope.doCcIntlTrxConfirm = function(id) {
//	    alert("doCcIntlTrxConfirm");
	    setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var accountId = document.getElementById('ccNumberHidden').value;
		
		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = id; // id
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcLimitDetail";
//			var url=ipaddress+"/rest/creditCardV2/doCcIntlTrxDetail";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
//		    			alert("data: "+ data)
		    			creditCardData.setCcIntlTrxInputData(data);
		    			
				    	creditCardData.setTempDataIntlTrx(newdata);
				    	window.location.href = "#/app/ccIntlTrxDetail";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	};
	
})

.controller('ccIntlTrxDetailCtrl', function($ionicLoading, $scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
//	alert("ccIntlTrxDetailCtrl");
	var ccIntlTrxInputData = creditCardData.getCcIntlTrxInputData();
//	$scope.result = ccLimitInputData.responseMessage;
//	alert("ccLimitInputData.resultList: " + ccLimitInputData.resultList);
	document.getElementById("ccDetailDisplay").innerHTML = ccIntlTrxInputData.resultList;
	
	var tempDataIntlTrx = creditCardData.getTempDataIntlTrx();
	$scope.ccNumber = tempDataIntlTrx.accountId;
//	document.getElementById("ccNumberHidden").value = tempData.accountId;
	
	
	$scope.intl = "Off";
	
	$scope.enableIntl = function(){
		if ($scope.intl == "Off"){
			$scope.intl = "On";
		} else if ($scope.intl == "On"){
			$scope.intl = "Off";
		}
	}
	
	$scope.ecommerce = "Off";
	
	$scope.enableEcommerce = function(){
		if ($scope.ecommerce == "Off"){
			$scope.ecommerce = "On";
		} else if ($scope.ecommerce == "On"){
			$scope.ecommerce = "Off";
		}
	}
	
	$scope.cashAdvance = "Off";
	
	$scope.enableCashAdvance = function(){
		if ($scope.cashAdvance == "Off"){
			$scope.cashAdvance = "On";
		} else if ($scope.cashAdvance == "On"){
			$scope.cashAdvance = "Off";
		}
	}
	
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccIntlTrxInput";
	}
	
	$scope.doIntlTrxRequest = function() {
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['accountId'] = tempDataIntlTrx.accountId; // id
		newdata['newLimit'] = "";
		newdata['intlTrx'] = $scope.intl;
		newdata['ecommerce'] = $scope.ecommerce;
		newdata['cashAdvance'] = $scope.cashAdvance;
		
		creditCardData.setCcIntlTrxConfirmData(newdata);
		
		if ($scope.intl == "On" || $scope.ecommerce == "On" || $scope.cashAdvance == "On"){
			// lempar ke ConfirmPage
			checkSecurityTypeAssigner($scope,$translate,$state);
			
//			window.location.href = "#/app/ccIntlTrxConfirm";
		} else {
			// lempar ke ResultPage
			requestIntlTrx(creditCardData, newdata, $ionicLoading, $http);
		}
	}
})

.controller('ccIntlTrxConfirmCtrl', function($compile, $ionicLoading, $scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
	var ccIntlTrxConfirmData = creditCardData.getCcIntlTrxConfirmData();
	
//	$scope.newLimit = ccLimitConfirmData.newLimit;
//	$scope.userLimitExisting = addCommas2Generic(ccLimitConfirmData.userLimitExisting);
	
	$scope.intl = ccIntlTrxConfirmData.intlTrx;
	$scope.ecommerce = ccIntlTrxConfirmData.ecommerce;
	$scope.cashAdvance = ccIntlTrxConfirmData.cashAdvance;
	
	console.debug("securityTypeCode').length: " + $('#securityTypeCode').length);
	if ($('#securityTypeCode').length){
		console.debug("a");
		if($("input[name=securityTypeCode]").attr('type') == 'checkbox'){
			console.debug("b");
			var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').map(function() {return this.value}).get().join('|');
		    var tempSecurityTypeCode = new Array();
		    tempSecurityTypeCode = securityTypeCode.split("|");
		    if(tempSecurityTypeCode.length > 1){
		    	console.debug("c");
				var securityTypeCode = "2";
			}else  var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').val();
		}
		if($("input[name=securityTypeCode]").attr('type') == 'radio') var securityTypeCode = $('input[name=securityTypeCode]:radio:checked').val();
	}else {
		console.debug("d");
		var securityTypeCode = localStorage.getItem("securityTypeCode");
		console.debug("securityTypeCode: " + securityTypeCode);
	}
	
	var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
	console.debug("userPreference: " + userPreference);
	
	if(isDevice == true){
		var securityTypeCode = securityTypeCode;
		console.debug("securityTypeCode 1: " + securityTypeCode);
	}else{
		if(userPreference == "8"){
			console.debug("securityTypeCode 2: " + securityTypeCode);
			if(securityTypeCode == "1"||securityTypeCode == "0"){
				console.debug("securityTypeCode 3: " + securityTypeCode);
				securityTypeCode="1";
			}else{
				console.debug("securityTypeCode 4: " + securityTypeCode);
    			var securityTypeCode = securityTypeCode;
			}
		}else{
			console.debug("securityTypeCode 5: " + securityTypeCode);
			var securityTypeCode = securityTypeCode;
		}
	}
	console.debug("securityTypeCode 6: " + securityTypeCode);
	localStorage.setItem("securityTypeCode", securityTypeCode);
	
	tokenInputGeneric(securityTypeCode,"0",$scope,$compile,$translate);
	
	$compile(document.getElementById('securityTypeTokenInput'))($scope);
	$scope.$apply();	
	
	$scope.doRequestIntlTrx = function() {
		requestIntlTrx(creditCardData, ccIntlTrxConfirmData, $ionicLoading, $http);
	}
})

.controller('ccIntlTrxResultCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
	var ccIntlTrxResultData = creditCardData.getCcIntlTrxResultData();
	
//	$scope.result = ccIntlTrxResultData.responseMessage;
	$scope.result = "Request international transaction successfully sent";
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccIntlTrxInput";
	}
	
})



// Change PIN
.controller('ChangePinCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
//	alert("masuk ChangePinCtrl");
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
//	alert("creditCardList: " + creditCardList);
	$scope.creditCardList = creditCardList;
	
	// list CC bentuk table kaya di menu account
//	var listCcDisplay = constructDisplayListCc(creditCardList);
//	document.getElementById("listCcDisplay").innerHTML = listCcDisplay;
	
	$scope.email = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.email;
	
	$scope.enable = "Off";
	
	$scope.enableIntl = function(){
		if ($scope.enable == "Off"){
			$scope.enable = "On";
		} else if ($scope.enable == "On"){
			$scope.enable = "Off";
		}
	}
	
	// ccList
	$ionicModal.fromTemplateUrl('templates/template-cc/ccList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalCcList = modal;
	});
	$scope.openPopupCcList = function() {
	    $scope.modalCcList.show();
	};
	$scope.closePopupCcList = function() {
	    $scope.modalCcList.hide();
	};
	
	$scope.dropdownBlockPage = function(divName){
		if (divName == 'angularCcList'){
			$scope.openPopupCcList();
		}
	}
	
	$scope.copyCreditCardNumber = function (id, accountNumber, label){
		$scope.closePopupCcList();
		document.getElementById('ccNumberText').value = label;
		document.getElementById('ccNumberHidden').value = id;
	}
	
	$scope.doChangePinDetail = function(id, accountNumber) {
//	    alert("doCcBlockingConfirm");
//		alert("id: " + id);
	    setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = id; // id
			newdata['internationalizationMode'] = $scope.internationalizationMode;
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
//			var url=ipaddress+"/rest/creditCardV2/doCcBlocking";
			//var url=ipaddress+"/rest/creditCardV2/doCcLimitDetail"; //doCcGenericDetailAmb
			var url=ipaddress+"/rest/creditCardV2/doCcGenericDetailAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setChangePinData(data);
				    	
		    			creditCardData.setTempChangePinData(newdata);
				    	window.location.href = "#/app/changePinDetail";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	};
	
})


.controller('ChangePinDetailCtrl', function($ionicLoading, $scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
//	alert("ccActivationDetailCtrl");
	var changePinData = creditCardData.getChangePinData();
//	$scope.result = ccLimitInputData.responseMessage;
//	alert("ccLimitInputData.resultList: " + ccLimitInputData.resultList);
	document.getElementById("ccDetailDisplay").innerHTML = changePinData.resultList;
	
	var tempDataActivation = creditCardData.getTempChangePinData();
	$scope.ccNumber = tempDataActivation.accountId;
//	document.getElementById("ccNumberHidden").value = tempData.accountId;
	
	
	$scope.passwordData = {};
	
	$scope.doBack = function() {
		window.location.href = "#/app/changePin";
	}
	
	$scope.doChangePinResult = function() {
//		window.location.href = "#/app/ccLimitChangeRequest";
		
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);
		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = tempDataActivation.accountId; // id
			newdata['oldPin'] = $scope.passwordData.oldPin;
			newdata['newPin'] = $scope.passwordData.newPin;
			newdata['newPinConfirm'] = $scope.passwordData.newPinConfirm;
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doChangePinAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setChangePinResultData(data);
				    	
		    			window.location.href = "#/app/changePinResult";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	}
})


.controller('ChangePinResultCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
	var changePinData = creditCardData.getChangePinResultData();
	
//	$scope.result = ccIntlTrxResultData.responseMessage;
	$scope.result = "Request change pin successfully sent";
	
	$scope.doBack = function() {
		window.location.href = "#/app/changePin";
	}
	
})


// Pin Reissue Credit Card
//========================
.controller('PinReissueInputCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
//	alert("masuk ccBlockingInputCtrl");
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
//	alert("creditCardList: " + creditCardList);
	$scope.creditCardList = creditCardList;
	console.debug("creditCardList: " + JSON.stringify(creditCardList));
		
	$scope.email = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.email;

	var idTempData;
	var accountNumberTempData;
	$scope.doCcPinReissueCheckSecurityType = function(id, accountNumber){
			console.log("accountNumber : "+accountNumber);
		for (var i = 0; i<creditCardList.length; i++) {
	    	if(accountNumber==creditCardList[i].accountNumber){
	    		console.log("accountNumber  aa: "+creditCardList[i].accountNumber);
				var cardActiveStatus=creditCardList[i].attributeCardBpcMap.cardStatus;
	    		//var cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
	    	}
	    }
	    	console.log("cardActiveStatus : "+cardActiveStatus);
			 if (cardActiveStatus=="CHST20"){
			   alert("Card Status is Temporary Block");  
			   return false; 
			 }else if(cardActiveStatus=="CHST21"){
			   alert("Card Status is Permanent Block");  
			   return false;
			 }
		console.debug("checkSecurityTypeAssigner");
		idTempData = id;
		accountNumberTempData = accountNumber;
		checkSecurityTypeAssigner($scope,$translate,$state);
	}
	
	$scope.doConfirmCc = function() {
	 //    setTimeout(function(){
		// 	setDoubleClickParam = 0;
		// }, 3000);

		// if(setDoubleClickParam == 0){
		// 	setDoubleClickParam = 1;
		// }else{
		// 	return false;
		// }

		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			// Part untuk kirim securityTypeCode nya ke server
			// -- Start -- 
			if ($('#securityTypeCode').length){
				if($("input[name=securityTypeCode]").attr('type') == 'checkbox'){
					var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').map(function() {return this.value}).get().join('|');
				    var tempSecurityTypeCode = new Array();
				    tempSecurityTypeCode = securityTypeCode.split("|");
				    if(tempSecurityTypeCode.length > 1){
						var securityTypeCode = "2";
					}else  var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').val();
				}
				if($("input[name=securityTypeCode]").attr('type') == 'radio') var securityTypeCode = $('input[name=securityTypeCode]:radio:checked').val();
	   		}else {
	   			var securityTypeCode = localStorage.getItem("securityTypeCode");
	   		}
			
			var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
			
			if(isDevice == true){
				var securityTypeCode = securityTypeCode;
			}else{
				if(userPreference == "8"){
					if(securityTypeCode == "1"||securityTypeCode == "0"){
	    				securityTypeCode="1";
					}else{
		    			var securityTypeCode = securityTypeCode;
					}
				}else{
	    			var securityTypeCode = securityTypeCode;
				}
			}
			console.debug("securityTypeCode: " + securityTypeCode);
			localStorage.setItem("securityTypeCode", securityTypeCode);
			// -- Stop --


			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = idTempData; // id
			newdata['securityTypeCode'] = securityTypeCode;
			var userStorageString = JSON.stringify(newdata);
//			alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcPinReissueInputAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setCcPinReissueDataInput(data);
				    	creditCardData.setRequestMapPinReissue(newdata);
				    	console.debug("data: " + data);
				    	window.location.href = "#/app/ccPinReissueConfirm";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	};
	
})

.controller('PinReissueConfirmCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData, $compile, $ionicLoading, $cordovaDevice, $ionicPlatform) {
	var ccPinReissueDataInput = creditCardData.getCcPinReissueDataInput();
	var requestMap = creditCardData.getRequestMapPinReissue();
	console.debug("requestMap: " + JSON.stringify(requestMap));	

	// $scope.cardStatus = requestMap.cardStatus;
	// $scope.cardMask = ccPinReissueDataInput.cardMask;

	// -- start -- nampilin input token & ngebaca sms inbox (klo device)
	console.debug("requestMap.securityTypeCode: " + requestMap.securityTypeCode);
	tokenInputGeneric(requestMap.securityTypeCode,"0",$scope,$compile,$translate);
	//window.localStorage.setItem("transferTransactionInquiry",JSON.stringify(ftInbankInputStorage.transferTransaction));

	var transReferenceNumber = ccPinReissueDataInput.transactionReferenceNumber;
	var securityTypeCode = requestMap.securityTypeCode;
	window.localStorage.setItem("securityTypeCode",securityTypeCode);
	document.getElementById('transRefNum').value = transReferenceNumber;
	if(securityTypeCode == "0" || securityTypeCode=="2"){
		//alert("readsms")
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	// -- end --

	// -- start - function yg dibutuhkan untuk resend sms token & checkBox
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	// -- end --

	$scope.doReissuePinRequest = function(){
		var securityTypeCode = window.localStorage.getItem("securityTypeCode");
		var fill_token_id = $translate.instant('fill_token_id');
		var agreement = $translate.instant('agreement');
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			if(document.getElementById('mPin').value!=null && document.getElementById('mPin').value==""){
				alert(fill_token_id);
				return false;
			}
		}
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			if(document.getElementById('simasToken').value!=null && document.getElementById('simasToken').value==""){
				alert(fill_token_id);
				return false;
			}
		}
	
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['accountId']=requestMap.accountId;
		// newdata['cardStatus']=requestMap.cardStatus;
		newdata['securityTypeCode']=securityTypeCode;
		newdata['transReferenceNumber']=transReferenceNumber;
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			newdata['tokenInputed'] = document.getElementById('simasToken').value;
		}
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			newdata['mPinInputed'] = document.getElementById('mPin').value;
		}
		
		newdata['lang']=window.localStorage.getItem("lang");
		
		var datajson=JSON.stringify(newdata);

		var url=ipaddress+"/rest/creditCardV2/doCcPinReissue";
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
	    			creditCardData.setCcPinReissueData(data);
	    			window.location.href = "#/app/ccPinReissueResult";
	    		} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				alert("Response from server not found");
			}
		}).error(function(){
			$ionicLoading.hide();	
			alert("Unable to process transaction");
			return false;
		});

	}

	$scope.doBack = function() {
		window.location.href = "#/app/ccPinReissueInput";
	}
})

.controller('PinReissueResultCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
	var ccPinReissueData = creditCardData.getCcPinReissueData();
	$scope.result = ccPinReissueData.responseMessage;
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccPinReissueInput";
	}
})



// Reset Pin Count
//========================
.controller('ccResetPinCountInputCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $ionicLoading, creditCardData) {
 	
 	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;

	$scope.creditCardList = creditCardList;
	console.debug("creditCardList: " + JSON.stringify(creditCardList));
		
	$scope.email = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.email;

	var idTempData;
	var accountNumberTempData;
	$scope.doCcResetPinCountCheckSecurityType = function(id, accountNumber){

		console.log("accountNumber : "+accountNumber);
		for (var i = 0; i<creditCardList.length; i++) {
	    	if(accountNumber==creditCardList[i].accountNumber){
	    		console.log("accountNumber  aa: "+creditCardList[i].accountNumber);
	    		var cardActiveStatus=creditCardList[i].attributeCardBpcMap.cardStatus;
	    		//var cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
	    	}
	    }
	    	console.log("cardActiveStatus : "+cardActiveStatus);
			 if (cardActiveStatus=="CHST20"){
			   alert("Card Status is Temporary Block");  
			   return false; 
			 }else if(cardActiveStatus=="CHST21"){
			   alert("Card Status is Permanent Block");  
			   return false;
			 }
		console.debug("checkSecurityTypeAssigner");
		idTempData = id;
		accountNumberTempData = accountNumber;
		checkSecurityTypeAssigner($scope,$translate,$state);
	}
	
	$scope.doConfirmCc = function() {
	 //    setTimeout(function(){
		// 	setDoubleClickParam = 0;
		// }, 3000);

		// if(setDoubleClickParam == 0){
		// 	setDoubleClickParam = 1;
		// }else{
		// 	return false;
		// }

		var isTimeout = calculateTimeOut();
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			// Part untuk kirim securityTypeCode nya ke server
			// -- Start -- 
			if ($('#securityTypeCode').length){
				if($("input[name=securityTypeCode]").attr('type') == 'checkbox'){
					var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').map(function() {return this.value}).get().join('|');
				    var tempSecurityTypeCode = new Array();
				    tempSecurityTypeCode = securityTypeCode.split("|");
				    if(tempSecurityTypeCode.length > 1){
						var securityTypeCode = "2";
					}else  var securityTypeCode = $('input[name=securityTypeCode]:checkbox:checked').val();
				}
				if($("input[name=securityTypeCode]").attr('type') == 'radio') var securityTypeCode = $('input[name=securityTypeCode]:radio:checked').val();
	   		}else {
	   			var securityTypeCode = localStorage.getItem("securityTypeCode");
	   		}
			
			var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
			
			if(isDevice == true){
				var securityTypeCode = securityTypeCode;
			}else{
				if(userPreference == "8"){
					if(securityTypeCode == "1"||securityTypeCode == "0"){
	    				securityTypeCode="1";
					}else{
		    			var securityTypeCode = securityTypeCode;
					}
				}else{
	    			var securityTypeCode = securityTypeCode;
				}
			}
			console.debug("securityTypeCode: " + securityTypeCode);
			localStorage.setItem("securityTypeCode", securityTypeCode);
			// -- Stop --


			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountId'] = idTempData; // id
			newdata['securityTypeCode'] = securityTypeCode;
			var userStorageString = JSON.stringify(newdata);
			//alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/creditCardV2/doCcResetPinCountInputAmb";
			$ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });
			$http.post(url,userStorageString).success(function(data) {
				$ionicLoading.hide();	
				if (data != null){
		    		if (data.responseCode == "00"){
		    			creditCardData.setCcResetPinCountDataInput(data);
				    	creditCardData.setRequestMapResetPinCount(newdata);
				    	console.debug("data: " + data);
				    	window.location.href = "#/app/ccResetPinCountConfirm";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Response from server not found");
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Unable to process transaction");
				return false;
			});
		}
	};
	
})


.controller('ccResetPinCountConfirmCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData, $compile, $ionicLoading, $cordovaDevice, $ionicPlatform) {
	var ccResetPinCountDataInput = creditCardData.getCcResetPinCountDataInput();
	var requestMap = creditCardData.getRequestMapResetPinCount();
	console.debug("requestMap: " + JSON.stringify(requestMap));	


	// -- start -- nampilin input token & ngebaca sms inbox (klo device)
	console.debug("requestMap.securityTypeCode: " + requestMap.securityTypeCode);
	tokenInputGeneric(requestMap.securityTypeCode,"0",$scope,$compile,$translate);
	//window.localStorage.setItem("transferTransactionInquiry",JSON.stringify(ftInbankInputStorage.transferTransaction));

	var transReferenceNumber = ccResetPinCountDataInput.transactionReferenceNumber;
	var securityTypeCode = requestMap.securityTypeCode;
	window.localStorage.setItem("securityTypeCode",securityTypeCode);
	document.getElementById('transRefNum').value = transReferenceNumber;
	if(securityTypeCode == "0" || securityTypeCode=="2"){
		//alert("readsms")
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	// -- end --

	// -- start - function yg dibutuhkan untuk resend sms token & checkBox
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	// -- end --

	$scope.doResetPinCountRequest = function(){
		var securityTypeCode = window.localStorage.getItem("securityTypeCode");
		var fill_token_id = $translate.instant('fill_token_id');
		var agreement = $translate.instant('agreement');
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			if(document.getElementById('mPin').value!=null && document.getElementById('mPin').value==""){
				alert(fill_token_id);
				return false;
			}
		}
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			if(document.getElementById('simasToken').value!=null && document.getElementById('simasToken').value==""){
				alert(fill_token_id);
				return false;
			}
		}
	
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['accountId']=requestMap.accountId;
		// newdata['cardStatus']=requestMap.cardStatus;
		newdata['securityTypeCode']=securityTypeCode;
		newdata['transReferenceNumber']=transReferenceNumber;
		if (securityTypeCode == "1" || securityTypeCode == "2"){
			newdata['tokenInputed'] = document.getElementById('simasToken').value;
		}
		if (securityTypeCode == "0" || securityTypeCode == "2"){
			newdata['mPinInputed'] = document.getElementById('mPin').value;
		}
		
		newdata['lang']=window.localStorage.getItem("lang");
		
		var datajson=JSON.stringify(newdata);

		var url=ipaddress+"/rest/creditCardV2/doCcResetPinCount";
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
	    			creditCardData.setCcResetPinCountDataInput(data);
	    			window.location.href = "#/app/ccResetPinCountResult";
	    		} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				alert("Response from server not found");
			}
		}).error(function(){
			$ionicLoading.hide();	
			alert("Unable to process transaction");
			return false;
		});

	}

	$scope.doBack = function() {
		window.location.href = "#/app/ccResetPinCountInput";
	}
})



.controller('ccResetPinCountResultCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, creditCardData) {
	var ccResetPinCountData = creditCardData.getCcResetPinCountDataInput();
	$scope.result = ccResetPinCountData.responseMessage;
	
	$scope.doBack = function() {
		window.location.href = "#/app/ccResetPinCountInput";
	}
})


.directive('onlyDigits', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attr, ctrl) {
        function inputValue(val) {
          if (val) {
            var digits = val.replace(/[^0-9]/g, '');
            if (digits !== val) {
              ctrl.$setViewValue(digits);
              ctrl.$render();
            }
            return parseInt(digits,10);
          }
          return undefined;
        }            
        ctrl.$parsers.push(inputValue);
      }
    };
});

function requestChangeLimit(creditCardData, ccLimitConfirmData, $ionicLoading, $http){
	setTimeout(function(){
		setDoubleClickParam = 0;
	}, 3000);

	if(setDoubleClickParam == 0){
		setDoubleClickParam = 1;
	}else{
		return false;
	}

	var isTimeout = calculateTimeOut();
	if (isTimeout){
		// hapus localStorage and goTo Main page
		clearSessionClient();
	} else {
		var newdata = {};
		newdata['ipassport']=ccLimitConfirmData.ipassport;
		newdata['accountId'] = ccLimitConfirmData.accountId; // id
		newdata['newLimit1'] = ccLimitConfirmData.newLimit1;
		newdata['newLimit2'] = ccLimitConfirmData.newLimit2;
		newdata['newLimit3'] = ccLimitConfirmData.newLimit3;
		var userStorageString = JSON.stringify(newdata);
//		alert('userStorageString json: '+userStorageString);
		
		var url=ipaddress+"/rest/creditCardV2/doCcRequestChangeLimitAmb";
		$ionicLoading.show({
  		 	template: 'Loading...',
  	        animation: 'fade-in',
  	        showBackdrop: true,
  	        maxWidth: 200,
  	        showDelay: 0
  	    });
		$http.post(url,userStorageString).success(function(data) {
			$ionicLoading.hide();
			if (data != null){
	    		if (data.responseCode == "00"){
	    			creditCardData.setCcLimitResultData(data);
			    	
	    			window.location.href = "#/app/ccLimitResult";
	    		} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				alert("Response from server not found");
			}
		}).error(function(){
			$ionicLoading.hide();
			alert("Unable to process transaction");
			return false;
		});
	}
}

function requestIntlTrx(creditCardData, newdata, $ionicLoading, $http){
	setTimeout(function(){
		setDoubleClickParam = 0;
	}, 3000);

	if(setDoubleClickParam == 0){
		setDoubleClickParam = 1;
	}else{
		return false;
	}

	var isTimeout = calculateTimeOut();
	if (isTimeout){
		// hapus localStorage and goTo Main page
		clearSessionClient();
	} else {
		var userStorageString = JSON.stringify(newdata);
//		alert('userStorageString json: '+userStorageString);
		
		var url=ipaddress+"/rest/creditCardV2/doCcRequestChangeLimit";
//		alert("url: " + url);
//		var url=ipaddress+"/rest/creditCardV2/doCcRequestIntlTrx";
		$ionicLoading.show({
  		 	template: 'Loading...',
  	        animation: 'fade-in',
  	        showBackdrop: true,
  	        maxWidth: 200,
  	        showDelay: 0
  	    });
		$http.post(url,userStorageString).success(function(data) {
			$ionicLoading.hide();	
			if (data != null){
	    		if (data.responseCode == "00"){
	    			creditCardData.setCcIntlTrxResultData(data);
			    	
	    			window.location.href = "#/app/ccIntlTrxResult";
	    		} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				alert("Response from server not found");
			}
		}).error(function(){
			$ionicLoading.hide();	
			alert("Unable to process transaction");
			return false;
		});
	}
}

function clearPeriodRange(){
//	alert("clearPeriodRange");
	try {
		$('#divFromDateLabel').remove();
		$('#divToDateLabel').remove();
		$('#divFromDate').remove();
		$('#divToDate').remove();
	} catch(e) {}
}


function checkTypeAndCurrency(type, currency){
//	alert("clearPeriodRange");
	var limit = null;
	if(type=="1"){
		if(currency=="CNY"){
			limit = "CNY";
			return limit;
		}else if(currency=="USD"){
			limit = "USD";
			return limit;
		}
	}else if(type=="2"){
		limit = "velocity"
		return limit;
	}
}

function addCommas2GenericLimit(nStr) {
	console.debug("test addCommas2GenericLimit: " + nStr);
	var result = null;
	if (nStr=="" || nStr==null) {
		result = "0";
		return result;
	}
	else{
		nStr = nStr.replace(/[^0-9\.]/g,"");  // strip non-numeric except dot
	if (nStr.indexOf("\.")>0) {
		nStr = nStr.substring(0, nStr.indexOf("\."));
	}
	console.debug("test nStr: " + nStr);
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1,$2');
	}
	
	if (document.getElementById('amount') != null){
		document.getElementById('amount').value = nStr;
	}
	
	result = nStr;
	return result;
	}
}

function addCommas2Generic(nStr) {
	console.debug("test addCommas2Generic: " + nStr);
	var result = null;
	
	nStr = nStr.replace(/[^0-9]/g,"");  // strip non-numeric

	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1.$2');
	}
	
	if (document.getElementById('amount') != null){
		document.getElementById('amount').value = nStr;
	}
	
	result = nStr;
	return result;
}