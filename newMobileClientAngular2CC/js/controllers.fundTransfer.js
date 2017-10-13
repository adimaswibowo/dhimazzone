var fundTransferControllers = angular.module('fundTransferControllers',['pascalprecht.translate','ngTouch']);

//var ipaddress = "http://localhost:8080/IBORCL";
var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
//var isDevice = window.localStorage.getItem("isDevice");

var lang = window.localStorage.getItem("lang");

if (lang == null || lang == "" || lang == "en" || lang == "null"){
	window.localStorage.setItem('lang',"en");
} else {
	window.localStorage.setItem('lang',"id");
}

//untuk getters & setters
/** test **/
fundTransferControllers.factory('fundTransferData', function () {
	var ftInbankInputData = "";
	var ftInbankConfirmData = "";
	var ftExternalBankInputData = "";
	var ftExternalBankConfirmData = "";
	var addInbankTransferListInputData = "";
	var addInbankTransferListConfirmData = "";
	var addExternalBankTransferListInputData = "";
	var addExternalBankTransferListConfirmData = "";

    return {
        getFtInbankInputData: function () {
            return ftInbankInputData;
        },
        setFtInbankInputData: function (newFtInbankInputData) {
        	ftInbankInputData = newFtInbankInputData;
        },
        
        getFtInbankConfirmData: function () {
            return ftInbankConfirmData;
        },
        setFtInbankConfirmData: function (newFtInbankConfirmData) {
        	ftInbankConfirmData = newFtInbankConfirmData;
        },
        
        getFtExternalBankInputData: function () {
            return ftExternalBankInputData;
        },
        setFtExternalBankInputData: function (newFtExternalBankInputData) {
        	ftExternalBankInputData = newFtExternalBankInputData;
        },
        
        getFtExternalBankConfirmData: function () {
            return ftExternalBankConfirmData;
        },
        setFtExternalBankConfirmData: function (newFtExternalBankConfirmData) {
        	ftExternalBankConfirmData = newFtExternalBankConfirmData;
        },
        
        getAddInbankTransferListInputData: function () {
            return addInbankTransferListInputData;
        },
        setAddInbankTransferListInputData: function (newAddInbankTransferListInputData) {
        	addInbankTransferListInputData = newAddInbankTransferListInputData;
        },
        
        getAddInbankTransferListConfirmData: function () {
            return addInbankTransferListConfirmData;
        },
        setAddInbankTransferListConfirmData: function (newAddInbankTransferListConfirmData) {
        	addInbankTransferListConfirmData = newAddInbankTransferListConfirmData;
        },
        
        getAddUangkuTransferListInputData: function () {
            return addUangkuTransferListInputData;
        },
        setAddUangkuTransferListInputData: function (newAddUangkuTransferListInputData) {
        	addUangkuTransferListInputData = newAddUangkuTransferListInputData;
        },
        
        getAddUangkuTransferListConfirmData: function () {
            return addUangkuTransferListConfirmData;
        },
        setAddUangkuTransferListConfirmData: function (newAddUangkuTransferListConfirmData) {
        	addUangkuTransferListConfirmData = newAddUangkuTransferListConfirmData;
        },
        
        getAddExternalBankTransferListInputData: function () {
            return addExternalBankTransferListInputData;
        },
        setAddExternalBankTransferListInputData: function (newAddExternalBankTransferListInputData) {
        	addExternalBankTransferListInputData = newAddExternalBankTransferListInputData;
        },
        
        getAddExternalBankTransferListConfirmData: function () {
            return addExternalBankTransferListConfirmData;
        },
        setAddExternalBankTransferListConfirmData: function (newAddExternalBankTransferListConfirmData) {
        	addExternalBankTransferListConfirmData = newAddExternalBankTransferListConfirmData;
        }
    };
});


/** -------------------- **/
/** Fund Transfer Inbank **/
/** -------------------- **/
fundTransferControllers.controller('ftInbankInputCtrl', function($scope,$rootScope,$ionicModal, $routeParams, $http, fundTransferData, $timeout, $ionicPopup,$translate,$state,currencyData,$compile,$ionicPlatform, $ionicLoading) {
		
   	loadFontSize();

	console.debug("currencyData.getCurrencyRateData(): " + currencyData.getCurrencyRateData());
	
	$rootScope.uangkuFlag = null;

	if (currencyData.getCurrencyRateData() != null && currencyData.getCurrencyRateData() != ""){
		$scope.isCurrencyRateData = true;	
	
		var currencyRateData = currencyData.getCurrencyRateData();
		console.debug("currencyRateData.amount: " + currencyRateData.amount);
		console.debug("currencyRateData.convertCurrency: " + currencyRateData.convertCurrency);
		// set form nya dengan currencyRateData
		$scope.amount = currencyRateData.amount;
		console.debug("currency: " + document.getElementById('currency'));
	    $scope.currency = currencyRateData.convertCurrency;

		var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
		for(var i = 0; i < accList.length; i++){
		    for(var key in accList[i]){
		    	if (key == "label"){
		    		if (currencyRateData.convertCurrency == accList[i]["currency"]){
		    			console.debug("label: " + accList[i]["label"]);

		    			console.debug("accountNumberText: " + document.getElementById('accountNumberText'));
		    			console.debug("accountNumberHidden: " + document.getElementById('accountNumberHidden'));
		    			console.debug("amount: " + document.getElementById('amount'));
		    			console.debug("currency: " + document.getElementById('currency'));
		    			
		    			$scope.accountNumberText = accList[i]["label"];
		    			$scope.accountNumber = accList[i]["id"];
		    			
		    			console.debug("accountNumberText: " + document.getElementById('accountNumberText').value);
		    			console.debug("accountNumberHidden: " + document.getElementById('accountNumberHidden').value);
		    			break;
		    		} 
		    	}
		    }
		}
	} else {
		$scope.isCurrencyRateData = false;
	}


	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var genericParamJson = userStorageMap.ipassportData.ipassDataClient.GenericParamJson;
	var directTransferMode = JSON.parse(genericParamJson).directTransferMode;
	//alert("directTransferMode : "+directTransferMode);

	$scope.ftInbank = {};
	$scope.ftInbank.directTransfer = false;
	$scope.ftInbank.showDirectTransferMode = directTransferMode;

	$scope.curr = {}; 
	
	// AccountList
	$ionicModal.fromTemplateUrl('templates/template-ft/inbank/accountList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalAccountList = modal;
	});
	
	$scope.openPopupAccountList = function() {
	    $scope.modalAccountList.show();
	};
	
	$scope.closePopupAccountList = function() {
	    $scope.modalAccountList.hide();
	};
	
	// TargetAccountList
	$ionicModal.fromTemplateUrl('templates/template-ft/inbank/targetAccountList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalTargetAccountList = modal;
	});
	
	$scope.openPopupTargetAccountList = function() {
	    $scope.modalTargetAccountList.show();
	};
	
	$scope.closePopupTargetAccountList = function() {
	    $scope.modalTargetAccountList.hide();
	};
	
	// Uangku TargetAccountList
	$ionicModal.fromTemplateUrl('templates/template-ft/uangku/targetAccountUangkuList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalTargetAccountUangkuList = modal;
	});
	
	$scope.openPopupTargetAccountUangkuList = function() {
	    $scope.modalTargetAccountUangkuList.show();
	};
	
	$scope.closePopupTargetAccountUangkuList = function() {
	    $scope.modalTargetAccountUangkuList.hide();
	};
	
	// trigger when click dropdown 
	$scope.dropdownBlockPage = function(divName){
		// debit account
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
		$scope.accList = accList;
		
		// target account inbank
		var inbankTransferList = window.localStorage.getItem("newInbankTransferList");
		if (inbankTransferList == null || inbankTransferList == ""){
			console.debug("inbankTransferList ambil dari userStorageMap");
			inbankTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.inbankTransferList;
		} else {
			console.debug("inbankTransferList ambil dari newInbankTransferList");
			inbankTransferList = JSON.parse(window.localStorage.getItem("newInbankTransferList"));
		}
		$scope.targetAccountList = inbankTransferList;
		
		// target account uangku
		var uangkuTransferList = window.localStorage.getItem("newUangkuTransferList");
		if (uangkuTransferList == null || uangkuTransferList == ""){
			console.debug("uangkuTransferList ambil dari userStorageMap");
			uangkuTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.uangkuTransferList;
		} else {
			console.debug("uangkuTransferList ambil dari newUangkuTransferList");
			uangkuTransferList = JSON.parse(window.localStorage.getItem("newUangkuTransferList"));
		}
		$scope.targetAccountUangkuList = uangkuTransferList;
		
		
		var dayRecuring = [];

		for(var i=1;i<=28;i++){
			dayRecuring.push({
		        id: i,
		        value: i
		    });
		}
		dayRecuring.push({
	        id: "End",
	        value: "End"
	    });
		$scope.dayRecuringList = dayRecuring;
		var search_account = $translate.instant('search_account');
		var search_target_account = $translate.instant('search_target_account');
		var recuring = $translate.instant('ftRecuring');
		
		if (divName == 'angularAccountList'){
			
			$scope.openPopupAccountList();
			
		} else if (divName == 'angularTargetAccount'){
			
			$scope.openPopupTargetAccountList();
			
		}else if (divName == 'angularTargetAccountUangku'){
//			alert("divName: " + divName);
			$scope.openPopupTargetAccountUangkuList();
			
		}else if (divName == 'recuringDay'){
			var nameButton = 'Close';
			 $scope.myPopup = $ionicPopup.show({
			     template: 	'<label class="item item-input">'+
						    	'<i class="icon ion-search placeholder-icon"></i>'+
						    	'<input type="text" ng-model="query" placeholder="Search">'+
						    '</label>'+
			    	 	   	'<ul>'+
			    	 	   		'<li class="item item-text-wrap" ng-repeat="dayRecuring in dayRecuringList" ng-click="copyRecuringDay(dayRecuring.id);" id="{{dayRecuring.id}}">'+
			    	 	   			'<div>{{dayRecuring.value}}'+
			    	 	   		'</li>'+
			    	 	   	'</ul>',
			     title: recuring,
			     scope: $scope,
			     buttons: [
			       { text: ''+nameButton+'' },
			     ]
			   }); 
		}
	}
	
	$scope.copyAccountList = function (accountNumber, accountLabel, transferType) {
//		$scope.myPopup.close();
		$scope.closePopupAccountList();
//		alert("yoo" + accountNumber + ", " + accountLabel + ", " + transferType);
		document.getElementById('accountNumberText').value = accountLabel;
		document.getElementById('accountNumberHidden').value = accountNumber;
		if (transferType == 'inbank'){
			$scope.selectCurrency();
		}
	}
	
	// copy taget account
	$scope.copyTargetAccount = function (id, accountLabel, transferType, transferTypeInput){
		$scope.closePopupTargetAccountList();
		document.getElementById('targetAccountText').value = accountLabel;
		document.getElementById('targetAccountHidden').value = id+'|'+transferTypeInput;
		
		if (transferType == 'inbank'){
			$scope.selectCurrency();
		}
	}
	
	// copy target account uangku
	$scope.copyTargetAccountUangku = function (id, accountLabel, transferType, transferTypeInput){
		$scope.closePopupTargetAccountUangkuList();
		document.getElementById('targetAccountText').value = accountLabel;
		document.getElementById('targetAccountHidden').value = id+'|'+transferTypeInput;
		
		if (transferType == 'inbank'){
			$scope.selectCurrency();
		}
	}
	
	$scope.copyRecuringDay = function (id){
		$scope.myPopup.close();
		document.getElementById('recurringText').value = id;
		document.getElementById('recurringHidden').value = id;
		
		
	}
	$scope.selectCurrency = function() {
		console.debug("selectCurrency");
		var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
		
		var inbankTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.inbankTransferList;
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
		
		for (var n = 0; n < accList.length; n++){
			inbankTransferList.push(accList[n]);
		}
		
		var accSelectedAccNumber = document.getElementById('accountNumberHidden').value;
		console.debug("accSelectedAccNumber: " + accSelectedAccNumber);
		var accSelectedTargetAccWithMode = document.getElementById('targetAccountHidden').value;
		console.debug("accSelectedTargetAccWithMode: " + accSelectedTargetAccWithMode);
		var accSelectedTargetAccSplit = accSelectedTargetAccWithMode.split("|");
		console.debug("accSelectedTargetAccSplit: " + accSelectedTargetAccSplit);
		var accSelectedTargetAcc = accSelectedTargetAccSplit[0];
		console.debug("accSelectedTargetAcc: " + accSelectedTargetAcc);
		var myCurrencyList = [];
		if (accSelectedAccNumber.length == 0 && accSelectedTargetAcc.length == 0){
			var select = document.getElementById('currency');
		}else{
			var select = document.getElementById('currency');
			var option;
			
			console.debug("accList.length: " + accList.length);
			for(var i = 0; i < accList.length; i++){
				if (accSelectedAccNumber == accList[i]["id"]){
					var currencySelect = document.getElementById("currency");
					var isCurrencyExist = false;
					
					for (var j=0; j<currencySelect.length; j++) {
						if (currencySelect.options[j].value == accList[i]["currency"]){
							isCurrencyExist = true;
						}
					}
					
					if (currencySelect.length == 0 || (currencySelect.length != 0 && isCurrencyExist == false)){
						/*option = document.createElement('option');
					    option.setAttribute('value', accList[i]["currency"]);
					    option.appendChild(document.createTextNode(accList[i]["currency"]));
					    select.appendChild(option);*/
						//alert(accList[i]["currency"])
						myCurrencyList.push({
							id: accList[i]["currency"]
						});

					}
					break;
				}
			}
			
			console.debug("inbankTransferList.length: " + inbankTransferList.length);
			for(var i = 0; i < inbankTransferList.length; i++){
				if (accSelectedTargetAcc == inbankTransferList[i]["id"]){
					var currencySelect = document.getElementById("currency");
					var isCurrencyExist = false;
					
					for (var j=0; j<currencySelect.length; j++) {
						if (currencySelect.options[j].value == inbankTransferList[i]["currency"]){
							isCurrencyExist = true;
						}
					}
					
					if (currencySelect.length == 0 || (currencySelect.length != 0 && isCurrencyExist == false)){
//						var option = $("<option>");
//						option.attr("value", inbankTransferList[i]["currency"]);
//		 	    		option.html(inbankTransferList[i]["currency"]);
//		 	    		$("#currency").append(option);
						/*option = document.createElement('option');
					    option.setAttribute('value', inbankTransferList[i]["currency"]);
					    option.appendChild(document.createTextNode(inbankTransferList[i]["currency"]));
					    select.appendChild(option);*/
						myCurrencyList.push({
							id: inbankTransferList[i]["currency"]
						});

					}
					break;
				}
			}
			
			console.debug("myCurrencyList: " + myCurrencyList);
			$scope.curr.myCurrencyListObjectList = myCurrencyList;
		//	alert("myAccList :"+myCurrencyList);
		}
	}
	
	$ionicModal.fromTemplateUrl('templates/template-popup/currencyList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalCurrencyList = modal;
	});

	$scope.dropdownBlockPageCurrency = function() {
		$scope.modalCurrencyList.show();
	};

	$scope.closePopupCurrencyList = function() {
		$scope.modalCurrencyList.hide();
	};

	$scope.chooseCurrencyList = function(currency){
		console.debug("chooseAccountList: "+currency);
		$scope.modalCurrencyList.hide();
		chooseCurrency(currency);
	};
	
	$scope.doAddInbankTransferList = function () {
//		alert("doAddInbankTransferList");
		window.location.href = "#/app/addInbankTransferListInput";
	};
	
	$scope.doAddUangkuTransferList = function () {
//		alert("doAddInbankTransferList");
		window.location.href = "#/app/addUangkuTransferListInput";
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		//alert('checkSecurityTypeAssigner')

		var invalidData = fundTransferValidation($scope);
		if (invalidData == true){
			return false;
		}else{
			checkSecurityTypeAssigner($scope,$translate,$state);
		}
	}
	
	/* Flag uangku */
	$scope.uangkuFlag = null;
	if (document.getElementById('uangkuFlagHidden') != null){
		$scope.uangkuFlag = document.getElementById('uangkuFlagHidden').value;
	}
	
	$scope.doFtConfirm = function () {
//		alert("Inbank doFtConfirm");
	
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {	
			var accountNumber = document.getElementById('accountNumberHidden').value;

			try {
				var directTransfer = $scope.ftInbank.directTransfer;
				//alert("directTransfer :"+directTransfer);
			} catch(e) {}
			
			// Febry: FT Recurring & Future Date
//			var transactionDate = $('input[name="transactionDate"]:checked').val();
			var transactionDate = "1";
			
			
			if(transactionDate == "0"){
				var transDate =  document.getElementById('transDate').value;
				if(transDate == ""){
					var dateEmpty = $translate.instant('ftDateEmpty');
					alert(dateEmpty);
					return false;
				}
				var diff = new Date(transDate) - new Date();
				var dayDiff = diff / 86400000; 
				
				if(dayDiff<0){
					var dateMustMore = $translate.instant('dateMustMore');
					alert(dateMustMore);
					return false;
				}
				
			}if(transactionDate == "2"){
				var recurringData =  $('input[name="recFreq"]:checked').val();
				var isMaxRecurrenceDateChecked= document.getElementById("isMaxRecurrenceDateChecked").checked;
				var isMaxRecurrenceChecked= document.getElementById("isMaxRecurrenceChecked").checked;
				//alert(isMaxRecurrenceDateChecked)
				if(recurringData == "0"){
					var recurringDay = document.getElementById('recurringHidden').value;
					if(recurringDay==""){
						var dateNotValid = $translate.instant('dateNotValid');
						alert(dateNotValid);
						return false;
					}
					
				}else if (recurringData == "1"){
						var recurringInterval = document.getElementById('recurringInterval').value;
						if(recurringInterval == ""){
							var valueNotValid = $translate.instant('valueNotValid');
							alert(valueNotValid);
							return false;
						}
				}else{
					var recurringNotValid = $translate.instant('recurringNotValid');
					alert(recurringNotValid);
					return false;
				}
				if(isMaxRecurrenceDateChecked == true){
					var maxRecurrenceDate = document.getElementById('maxRecurrenceDate').value;
					if(maxRecurrenceDate==""){
						var expiredRecurDate = $translate.instant('expiredRecurDate');
						alert(expiredRecurDate);
						return false;
					}
					
					var diffRec = new Date(maxRecurrenceDate) - new Date();
					var dayDiffRec = diffRec / 86400000; 
					
					if(dayDiffRec<0){
						var expiredRecurDateMore = $translate.instant('expiredRecurDateMore');
						alert(expiredRecurDateMore);
						return false;
					}
					
				}
				if(isMaxRecurrenceChecked == true){
					var maxRecurrence = document.getElementById('maxRecurrence').value;
					if(maxRecurrence==""){
						var valueTotalFieldRec = $translate.instant('valueTotalFieldRec');
						alert(valueTotalFieldRec);
						return false;
					}
				}
				if(isMaxRecurrenceDateChecked == false && isMaxRecurrenceChecked == false){
					var endConditionRec = $translate.instant('endConditionRec');
					alert(endConditionRec);
					return false;
				}
			}
			//alert("harusnya ga masuk")
			var targetAccountWithMode = document.getElementById('targetAccountHidden').value;
			var targetAccountSplit = targetAccountWithMode.split("|");
			var	mode = targetAccountSplit[1];

			var targetAccount = null;
			var modeInbank = null;

			if (directTransfer == true){
				targetAccount = document.getElementById('targetAccountDirectTrf').value;
				modeInbank = "direct";
				mode = "inbank";
			}else{
				targetAccount = targetAccountSplit[0];
			}
			
			//alert("mode : "+mode);
			//alert("targetAccount : "+targetAccount);

			var currency = document.getElementById('currency').value;
			var amount = document.getElementById('amount').value;
			var ownAccount = "";
			var transferList = targetAccount;
			var description = document.getElementById('description').value;
			
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
			localStorage.setItem("securityTypeCode", securityTypeCode);

			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['accountFrom'] = accountNumber; // id
			newdata['targetAccount'] = targetAccount; // id
			newdata['currency'] = currency;
			newdata['amount'] = amount;
			newdata['mode'] = mode; // transferType
			newdata['modeInbank'] = modeInbank;
			newdata['modeCategory'] = "internal";
			newdata['ownAccount'] = ownAccount;
			newdata['otherAccount'] = "";
			newdata['targetAccountName'] = "";
			newdata['targetAccountBank'] = "";
			newdata['targetAccountBankBranch'] = "";
			newdata['message'] = "";
			newdata['transferList'] = transferList;
			newdata['destination'] = "2"; // value = 2 mean transfer from transfer list
			newdata['targetAccountType'] = "inbanktransfer"; // di ib, inbank & own ini tetep sama
			newdata['description'] = description;
			newdata['recurringInterval'] = "0";
			newdata['maxRecurrence'] = "0";
			newdata['recFreq'] = "0";
			newdata['recurring'] = "0";
			newdata['dateImmediate'] = "";
			newdata['dateFuture'] = "";
			newdata['transactionDate'] = "1"; // value = 1 mean immediate transfer
			newdata['lang']=window.localStorage.getItem("lang");
			newdata['securityTypeCode'] = securityTypeCode;
			
			if ($scope.uangkuFlag != null){
				newdata['ftType'] = $scope.uangkuFlag; // uangku
			}
			
			var userStorageString = JSON.stringify(newdata);
	//		alert('userStorageString json: '+userStorageString);
			
			var url=ipaddress+"/rest/transferFundV2/doConfirmInternalTransfer";
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
		    			return false;
		    		} else if (data.responseCode == "02"){
		    			alert(data.responseMessage);
		    			return false;
		    		} else if (data.responseCode == "03"){
		    			alert(data.responseMessage);
		    			return false;
		    		} else if (data.responseCode == "04"){
		    			alert(data.responseMessage);
		    			return false;
		    		} else if (data.responseCode == "00"){
				    	fundTransferData.setFtInbankInputData(data);

						stickinessSetAccNumber("FT",accountNumber);
				    	
	//			    	alert("success");
				    	window.location.href = "#/app/ftInbankConfirm";
		    		} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Data from server not found");
	//				goToTransferInputInternalHtml();
				}
			}).error(function(){
				$ionicLoading.hide();	
				alert("Server Error");
				return false;
			});
		}
	};




	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
	$scope.accList = accList;

	try {
		if (currencyData.getCurrencyRateData() != null && currencyData.getCurrencyRateData() != ""){
			// nothing happend
		} else {
			if (accList.length == 1){
				console.debug("accList.length: " + accList.length);
				$scope.accountNumberText = accList[0].label;
				$scope.accountNumber = accList[0].id;
	
				//document.getElementById('accountNumberText').value = accList[0].label;
				//ocument.getElementById('accountNumberHidden').value = accList[0].id;
				$scope.selectCurrency();
		   	}else{
		   		console.debug("accList.length: " + accList.length);
				stickinessGetAccNumberFT($scope, "FT", "inbank");
		   	}
		}
   	} catch(e) {}
   	
   
})
.directive('ftInbankInputDirective', function() {
  return {
    templateUrl: function(elem, attr){
      return 'templates/template-ft/directive/fundTransfer-'+attr.type+'-directive.html';
    }
  };
})
;

fundTransferControllers.controller('ftInbankInputPopupCtrl', function($scope, $routeParams, $http) {
	
   	loadFontSize();

	if (userStorageMap != null){
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
		$scope.accList = accList;
		
		var inbankTransferList = window.localStorage.getItem("newInbankTransferList");
//		alert("JSON.stringify inbankTransferList: " + window.localStorage.getItem("newInbankTransferList"));
		if (inbankTransferList == null || inbankTransferList == ""){
			console.debug("inbankTransferList ambil dari userStorageMap");
			inbankTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.inbankTransferList;
		} else {
			console.debug("inbankTransferList ambil dari newInbankTransferList");
			inbankTransferList = JSON.parse(window.localStorage.getItem("newInbankTransferList"));
		}
//		alert("inbankTransferList: " + inbankTransferList);
		$scope.targetAccountList = inbankTransferList;
	}
});

fundTransferControllers.controller('ftInbankConfirmCtrl', function($scope, $rootScope, $routeParams, $http, $compile, fundTransferData,$cordovaDevice,$ionicPlatform,$translate, $ionicLoading) {
	
   	loadFontSize();

//	alert("ftInbankConfirmCtrl");
	var ftInbankInputStorage = fundTransferData.getFtInbankInputData();
	
	if (ftInbankInputStorage.uangku != null){
		if (ftInbankInputStorage.uangku == "yes"){
			$rootScope.uangkuFlag = ftInbankInputStorage.uangku;
		}
	}

//	alert("InternalFTStorageMap.confirmDisplay: " + ftInbankInputStorage.confirmDisplay);
//	alert("InternalFTStorageMap.transferTransaction: " + ftInbankInputStorage.transferTransaction);
	
	var tableStream=constructConfirmDisplay(ftInbankInputStorage.confirmDisplay);
	$("#confirmDisplay").append(tableStream);
	
	tokenInputGeneric(ftInbankInputStorage.transferTransaction.securityTypeCode,ftInbankInputStorage.transferTransaction.amount,$scope,$compile,$translate);
	window.localStorage.setItem("transferTransactionInquiry",JSON.stringify(ftInbankInputStorage.transferTransaction));

	var transReferenceNumber = ftInbankInputStorage.transferTransaction.transRefNum;
	var securityTypeCode = ftInbankInputStorage.transferTransaction.securityTypeCode;
	window.localStorage.setItem("securityTypeCode",securityTypeCode);
	document.getElementById('transRefNum').value = transReferenceNumber;
	if(securityTypeCode == "0" || securityTypeCode=="2"){
		//alert("readsms")
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	
	$compile(document.getElementById('confirmDisplay'))($scope);
	$scope.$apply();

//	stickinessSetAccNumber(ftInbankInputStorage.transferTransaction.debitAccountNumber);
	//------- sms ng-click
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	    
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	//------
	$scope.doFtInbankResult = function () {

		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var langNameSession = window.localStorage.getItem("lang");
			if (langNameSession == null || langNameSession == "" || langNameSession == "en" || langNameSession == "null"){
				 window.localStorage.setItem("lang","en");
			}else{
				 window.localStorage.setItem("lang","in");
			}
			
			var transferTransactionObj = JSON.parse(window.localStorage.getItem("transferTransactionInquiry"));

			var securityTypeCode = window.localStorage.getItem("securityTypeCode");
			transferTransactionObj.securityTypeCode = securityTypeCode;
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
			if (transferTransactionObj.isShowDisclaimer == true){
				if(document.getElementById('isAgree').checked==false){
					alert(agreement);
					return false;
				}
			}
		
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['securityTypeCode']=securityTypeCode;
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				newdata['tokenInputed'] = document.getElementById('simasToken').value;
			}
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				newdata['mPinInputed'] = document.getElementById('mPin').value;
			}
			
			newdata['transferTransaction']=transferTransactionObj;
			newdata['lang']=window.localStorage.getItem("lang");
			
			if (ftInbankInputStorage.uangku != null){
				if (ftInbankInputStorage.uangku == "yes"){
					newdata['ftType']="uangku";
				}
			}
			
			var datajson=JSON.stringify(newdata);
	//		alert('datajson: '+datajson);
			
			var url=ipaddress+"/rest/transferFundV2/doInternalTransfer";
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
					if (data.responseCode == "01" || data.responseCode == "02" ||
							data.responseCode == "03" || data.responseCode == "04" || 
							data.responseCode == "05" || data.responseCode == "06"){
						alert(data.responseMessage);
						return false;
					} else if(data.responseCode == "00"){
						fundTransferData.setFtInbankConfirmData(data);
				    	
				    	window.location.href = "#/app/ftInbankResult";
					} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Data from server not found");
	//				goToTransferInputInternalHtml();
				}
			}).error(function(){
				$ionicLoading.hide();
				alert("Server Error");
				return false;
			});
		}
	}
});

fundTransferControllers.controller('ftInbankResultCtrl', function($scope,$rootScope, $routeParams, $http, fundTransferData) {

   	loadFontSize();

//	alert("ftInbankResultCtrl");
	var ftInbankConfirmStorage = fundTransferData.getFtInbankConfirmData();

//	alert("InternalFTStorageMap.confirmDisplay: " + ftInbankConfirmStorage.resultDisplay);
//	alert("InternalFTStorageMap.transferTransaction: " + ftInbankConfirmStorage.transferTransaction);
	
	var tableStream=constructResultDisplay(ftInbankConfirmStorage.resultDisplay);
	$("#resultDisplay").append(tableStream);

	try {
		$rootScope.showLogout = true;
		/*$timeout(function() {
			$rootScope.showLogout = false;
		}, 30000);*/
	} catch(e) {}		
});

function constructResultDisplay(stream){
	var records =stream.split("|");
	var table="";
	table=table.concat("<table id='genericTableConfirm' border='0'>");
	//iterate row
//	console.debug('records:'+records.length);
	for (var i = 0; i < records.length; i++) {
		var columns=records[i].split(";");
//		console.debug('columns:'+columns.length);
		table=table.concat("<tr>");
		for (var j = 0; j < columns.length; j++) {
			if (columns.length == 1){
				table=table.concat("<td colspan='3' class='td-label-left'>");
			} else {
				table=table.concat("<td class='td-label-left'>");
			}
			
			var columnSplit = columns[j].split(" ");
			
			if (columns[j] == "'-'"){
				table=table.concat("<hr>");
			} else if (columns[j] == "tokenCodeInput"){
				table=table.concat("<input type='text' name='mPin' id='mPin' size='8' maxlength='6'/>");
			} else if (columnSplit[0] == "checkbox"){
				table=table.concat("<input style='margin-left: 10px;padding-left: 5px' type='checkbox' name='isAgree'/>"+columns[j].replace("checkbox",""));
			} else {
				table=table.concat(columns[j]);
			}
			table=table.concat("</td>");
		}
		table=table.concat("</tr>");
	}
	table=table.concat("</table>");
	return table;
}

function constructConfirmDisplay(stream){
	var records =stream.split("|");
	var table="";
	table=table.concat("<table id='genericTableConfirm' border='0'>");
	//iterate row
//	console.debug('records:'+records.length);
	for (var i = 0; i < records.length; i++) {
		var columns=records[i].split(";");
//		console.debug('columns:'+columns.length);
		table=table.concat("<tr>");
		for (var j = 0; j < columns.length; j++) {
			if (columns.length == 1){
				table=table.concat("<td colspan='3' class='td-label-left'>");
			} else {
				table=table.concat("<td class='td-label-left'>");
			}
			
			var columnSplit = columns[j].split(" ");
			
			if (columns[j] == "'-'"){
				table=table.concat("<hr>");
			//} else if (columns[j] == "tokenCodeInput"){
			/*} else if (columns[j] == "smsTokenCodeInput"){	
				table=table.concat("<input type='text' name='mPin' class='m_content-inputtext-token' id='mPin' size='8' maxlength='6'/>");
			} else if (columns[j] == "simasTokenCodeInput"){	
				table=table.concat("<input type='text' name='simasToken' class='m_content-inputtext-token' id='simasToken' size='8' maxlength='6'/>");*/
			} else if (columnSplit[0] == "checkbox"){
				table=table.concat("<input style='margin-left: 10px;padding-left: 5px' type='checkbox' name='isAgree' id='isAgree'/>"+columns[j].replace("checkbox",""));
			} else {
				table=table.concat(columns[j]);
			}
			table=table.concat("</td>");
		}
		table=table.concat("</tr>");
	}
	table=table.concat("<tr><td colspan='3' class='td-label-left'><input type='button' name='button' class='button button-block button-positive' id='button' value='Submit' ng-click='doFtInbankResult();' /></td></tr>");
	table=table.concat("</table>");
	return table;
}








/** -------------------------- **/
/** Fund Transfer ExternalBank **/
/** -------------------------- **/
fundTransferControllers.controller('ftExternalBankInputCtrl', function($scope,$ionicModal, $routeParams, $http, fundTransferData, $ionicPopup,$translate,$state, $ionicLoading) {
		
   	loadFontSize();
   	
   	// AccountList
	$ionicModal.fromTemplateUrl('templates/template-ft/externalBank/accountList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalExtAccountList = modal;
	});
	
	$scope.openPopupExtAccountList = function() {
	    $scope.modalExtAccountList.show();
	};
	
	$scope.closePopupExtAccountList = function() {
	    $scope.modalExtAccountList.hide();
	};
	
	// TargetAccountList
	$ionicModal.fromTemplateUrl('templates/template-ft/externalBank/targetAccountList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalExtTargetAccountList = modal;
	});
	
	$scope.openPopupExtTargetAccountList = function() {
	    $scope.modalExtTargetAccountList.show();
	};
	
	$scope.closePopupExtTargetAccountList = function() {
	    $scope.modalExtTargetAccountList.hide();
	};

	$scope.dropdownBlockPage = function(divName){
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
		$scope.accList = accList;
		
		var sknTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.sknTransferList;
		var rtgsTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.rtgsTransferList;
		var networkTransferList = getNetworkTransferList(userStorageMap);
		
		console.debug("sknlist:"+sknTransferList.length+",rtgslist:"+rtgsTransferList.length+",networklist:"+networkTransferList.length);
		
		var externalTransferList=sknTransferList.concat(rtgsTransferList,networkTransferList);
		
		if (window.localStorage.getItem("newExternalTransferList") != null){
			externalTransferList = JSON.parse(window.localStorage.getItem("newExternalTransferList"));
		}
		console.debug("externalTransferList length:"+externalTransferList.length);
		$scope.targetAccountList = externalTransferList;
		var search_account = $translate.instant('search_account');
		var search_target_account = $translate.instant('search_target_account');
		var dayRecuring = [];

		for(var i=1;i<=28;i++){
			dayRecuring.push({
		        id: i,
		        value: i
		    });
		}
		dayRecuring.push({
	        id: "End",
	        value: "End"
	    });
		$scope.dayRecuringList = dayRecuring;
		var recuring = $translate.instant('ftRecuring');
		if (divName == 'angularAccountListExt'){
			
			$scope.openPopupExtAccountList();
			
//			var nameButton = 'Close';
//			 $scope.myPopup = $ionicPopup.show({
//			     template: 	'<label class="item item-input">'+
//						    	'<i class="icon ion-search placeholder-icon"></i>'+
//						    	'<input type="text" ng-model="query" placeholder="Search">'+
//						    '</label>'+
//			    	 	   	'<ul>'+
//			    	 	   		'<li class="item item-text-wrap" ng-repeat="account in accList | filter:query" ng-click="copyAccountList(account.id, account.label,\'extBank\');" id="{{account.id}}">'+
//			    	 	   			'<div>{{account.label}}'+
//			    	 	   		'</li>'+
//			    	 	   	'</ul>',
//			     title: search_account,
//			     scope: $scope,
//			     buttons: [
//			       { text: ''+nameButton+'' },
//			     ]
//			   }); 
		} else if (divName == 'angularTargetAccountExt'){
			
			$scope.openPopupExtTargetAccountList();
			
//			var nameButton = 'Close';
//			 $scope.myPopup = $ionicPopup.show({
//			     template: 	'<label class="item item-input">'+
//						    	'<i class="icon ion-search placeholder-icon"></i>'+
//						    	'<input type="text" ng-model="query" placeholder="Search">'+
//						    '</label>'+
//			    	 	   	'<ul>'+
//			    	 	   		'<li class="item item-text-wrap" ng-repeat="targetAccount in targetAccountList | filter:query" ng-click="copyTargetAccount(targetAccount.id,targetAccount.label,\'extBank\');" id="{{targetAccount.id}}">'+
//			    	 	   			'<div>{{targetAccount.label}}'+
//			    	 	   		'</li>'+
//			    	 	   	'</ul>',
//			     title: search_target_account,
//			     scope: $scope,
//			     buttons: [
//			       { text: ''+nameButton+'' },
//			     ]
//			   }); 
		}else if (divName == 'recuringDay'){
			var nameButton = 'Close';
			 $scope.myPopup = $ionicPopup.show({
			     template: 	'<label class="item item-input">'+
						    	'<i class="icon ion-search placeholder-icon"></i>'+
						    	'<input type="text" ng-model="query" placeholder="Search">'+
						    '</label>'+
			    	 	   	'<ul>'+
			    	 	   		'<li class="item item-text-wrap" ng-repeat="dayRecuring in dayRecuringList" ng-click="copyRecuringDay(dayRecuring.id);" id="{{dayRecuring.id}}">'+
			    	 	   			'<div>{{dayRecuring.value}}'+
			    	 	   		'</li>'+
			    	 	   	'</ul>',
			     title: recuring,
			     scope: $scope,
			     buttons: [
			       { text: ''+nameButton+'' },
			     ]
			   }); 
		}
	}
	$ionicModal.fromTemplateUrl('templates/template-popup/currencyList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalCurrencyList = modal;
	});

	$scope.dropdownBlockPageCurrency = function() {
		$scope.modalCurrencyList.show();
	};

	$scope.closePopupCurrencyList = function() {
		$scope.modalCurrencyList.hide();
	};

	$scope.chooseCurrencyList = function(currency){
		//alert("chooseAccountList"+accSelect);
		$scope.modalCurrencyList.hide();
		chooseCurrency(currency);
	};
	$scope.copyAccountList = function (accountNumber, accountLabel, transferType) {
//		$scope.myPopup.close();
		$scope.closePopupExtAccountList();
//		alert("yoo" + accountNumber + ", " + accountLabel + ", " + transferType);
		document.getElementById('accountNumberText').value = accountLabel;
		document.getElementById('accountNumberHidden').value = accountNumber;
		if (transferType == 'inbank'){
			$scope.selectCurrency();
		}
	}
	
	$scope.copyTargetAccount = function (id, accountLabel, transferType){
//		$scope.myPopup.close();
		$scope.closePopupExtTargetAccountList();
		document.getElementById('targetAccountText').value = accountLabel;
		document.getElementById('targetAccountHidden').value = id;
		
		if (transferType == 'inbank'){
			$scope.selectCurrency();
		}
	}
	$scope.copyRecuringDay = function (id){
		$scope.myPopup.close();
		document.getElementById('recurringText').value = id;
		document.getElementById('recurringHidden').value = id;
		
		
	}
	$scope.doAddExternalBankTransferList = function () {
//		alert("doAddExternalBankTransferList");
		window.location.href = "#/app/addExternalBankTransferListInput";
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	}
	
	$scope.doFtConfirm = function () {
//		alert("External doFtConfirm");
	
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var langNameSession = window.localStorage.getItem("lang");
			if (langNameSession == null || langNameSession == "" || langNameSession == "en" || langNameSession == "null"){
				 window.localStorage.setItem("lang","en");
			}else{
				 window.localStorage.setItem("lang","in");
			}
			
			// Febry: FT Recurring & Future Date
//			var transactionDate = $('input[name="transactionDate"]:checked').val();
			var transactionDate = "1";
			
			if(transactionDate == "0"){
				var transDate =  document.getElementById('transDate').value;
				if(transDate == ""){
					var dateEmpty = $translate.instant('ftDateEmpty');
					alert(dateEmpty);
					return false;
				}
				var diff = new Date(transDate) - new Date();
				var dayDiff = diff / 86400000; 
				
				if(dayDiff<0){
					var dateMustMore = $translate.instant('dateMustMore');
					alert(dateMustMore);
					return false;
				}
				
			}if(transactionDate == "2"){
				//alert("masuk")
				var recurringData =  $('input[name="recFreq"]:checked').val();
				var isMaxRecurrenceDateChecked= document.getElementById("isMaxRecurrenceDateChecked").checked;
				var isMaxRecurrenceChecked= document.getElementById("isMaxRecurrenceChecked").checked;
				//alert(isMaxRecurrenceDateChecked)
				if(recurringData == "0"){
					var recurringDay = document.getElementById('recurringHidden').value;
					if(recurringDay==""){
						var dateNotValid = $translate.instant('dateNotValid');
						alert(dateNotValid);
						return false;
					}
					
				}else if (recurringData == "1"){
						var recurringInterval = document.getElementById('recurringInterval').value;
						if(recurringInterval == ""){
							var valueNotValid = $translate.instant('valueNotValid');
							alert(valueNotValid);
							return false;
						}
				}else{
					var recurringNotValid = $translate.instant('recurringNotValid');
					alert(recurringNotValid);
					return false;
				}
				if(isMaxRecurrenceDateChecked == true){
					var maxRecurrenceDate = document.getElementById('maxRecurrenceDate').value;
					if(maxRecurrenceDate==""){
						var expiredRecurDate = $translate.instant('expiredRecurDate');
						alert(expiredRecurDate);
						return false;
					}
					
					var diffRec = new Date(maxRecurrenceDate) - new Date();
					var dayDiffRec = diffRec / 86400000; 
					
					if(dayDiffRec<0){
						var expiredRecurDateMore = $translate.instant('expiredRecurDateMore');
						alert(expiredRecurDateMore);
						return false;
					}
					
				}
				if(isMaxRecurrenceChecked == true){
					var maxRecurrence = document.getElementById('maxRecurrence').value;
					//alert("maxRecurrence = "+maxRecurrence)
					if(maxRecurrence == ""){
						var valueTotalFieldRec = $translate.instant('valueTotalFieldRec');
						alert(valueTotalFieldRec);
						return false;
					}
				}
				if(isMaxRecurrenceDateChecked == false && isMaxRecurrenceChecked == false){
					var endConditionRec = $translate.instant('endConditionRec');
					alert(endConditionRec);
					return false;
				}
			}
			var accountNumber = document.getElementById('accountNumberHidden').value;
			var targetAccount = document.getElementById('targetAccountHidden').value;
			var mode= $('input:radio[name=mode]:checked').val();
			var amount = document.getElementById('amount').value;
			var description = document.getElementById('description').value;
			
			var title_warning = $translate.instant('title_warning');
			var template_warning =  $translate.instant('template_warning');
			
			if(mode=="" || mode==null || mode==undefined){
				 $ionicPopup.confirm({
			          title: title_warning,
			          template: template_warning
			        }).then(function(res) {
			          if (res) {
			        	  // agree
			        	   	amountNew =   parseInt(amount.split('.').join(""));
			        	   	//alert(amount)

			        	   	if(amountNew <= 50000000){
			        	   		mode = "network";
			        	   	}
			        	   	if(amountNew > 50000000 && amountNew <= 500000000){
			        	   		mode = "skn";
			        	   	}
			        	   	if(amountNew > 500000000){
			        	   		mode = "rtgs";
			        	   	}
			        	  	
			        	  	var newdata = {};
				  			newdata['ipassport']=userStorageMap.ipassport;
				  			newdata['accountFrom'] = accountNumber;
				  			newdata['currency'] = 'IDR';
				  			newdata['amount'] = amount;
				  			newdata['mode'] = mode;
				  			newdata['modeCategory'] = "external";
				  			newdata['transferList'] = targetAccount;
				  			newdata['description'] = description;
				  			newdata['transactionDate'] = "1"; // value = 1 mean immediate transfer
				  			newdata['lang']=window.localStorage.getItem("lang");
				  		
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
				  			localStorage.setItem("securityTypeCode", securityTypeCode);
	
				  			newdata['securityTypeCode'] = securityTypeCode;
				  			
				  			var newdata = JSON.stringify(newdata);
				  	//		alert('newdata json: '+newdata);
				  			
				  			var url=ipaddress+"/rest/transferFundV2/doConfirmInternalTransfer";
				  			$ionicLoading.show({
					  		 	template: 'Loading...',
					  	        animation: 'fade-in',
					  	        showBackdrop: true,
					  	        maxWidth: 200,
					  	        showDelay: 0
					  	    });
				  			$http.post(url,newdata).success(function(data) {
				  				$ionicLoading.hide();
				  				if (data != null){
				  		    		if (data.responseCode == "01"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "02"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "03"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "04"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "00"){
				  		    			fundTransferData.setFtExternalBankInputData(data);
				  				    	
				  				    	window.location.href = "#/app/ftExternalBankConfirm";
				  		    		} else {
				  						alert(data.responseMessage);
				  						return false;
				  					}
				  				} else {
				  					alert("Data from server not found");
				  	//				goToTransferTypeOb();
				  				}
				  			}).error(function(){
				  				$ionicLoading.hide();
				  				alert("Server Error");
				  				return false;
				  			});
			          }else{
			        	  //disagree
			        	  	var newdata = {};
				  			newdata['ipassport']=userStorageMap.ipassport;
				  			newdata['accountFrom'] = accountNumber;
				  			newdata['currency'] = 'IDR';
				  			newdata['amount'] = amount;
				  			newdata['mode'] = mode;
				  			newdata['modeCategory'] = "external";
				  			newdata['transferList'] = targetAccount;
				  			newdata['description'] = description;
				  			newdata['transactionDate'] = "1"; // value = 1 mean immediate transfer
				  			newdata['lang']=window.localStorage.getItem("lang");
				  		
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
				  			localStorage.setItem("securityTypeCode", securityTypeCode);
	
				  			newdata['securityTypeCode'] = securityTypeCode;
				  			
				  			var newdata = JSON.stringify(newdata);
				  	//		alert('newdata json: '+newdata);
				  			
				  			var url=ipaddress+"/rest/transferFundV2/doConfirmInternalTransfer";
				  			$ionicLoading.show({
					  		 	template: 'Loading...',
					  	        animation: 'fade-in',
					  	        showBackdrop: true,
					  	        maxWidth: 200,
					  	        showDelay: 0
					  	    });
				  			$http.post(url,newdata).success(function(data) {
				  				$ionicLoading.hide();
				  				if (data != null){
				  		    		if (data.responseCode == "01"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "02"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "03"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "04"){
				  		    			alert(data.responseMessage);
				  		    			return false;
				  		    		} else if (data.responseCode == "00"){
				  		    			fundTransferData.setFtExternalBankInputData(data);
				  				    	
				  				    	window.location.href = "#/app/ftExternalBankConfirm";
				  		    		} else {
				  						alert(data.responseMessage);
				  						return false;
				  					}
				  				} else {
				  					alert("Data from server not found");
				  	//				goToTransferTypeOb();
				  				}
				  			}).error(function(){
				  				$ionicLoading.hide();
				  				alert("Server Error");
				  				return false;
				  			});
			          }
			        })
			}else{
        	  	var newdata = {};
	  			newdata['ipassport']=userStorageMap.ipassport;
	  			newdata['accountFrom'] = accountNumber;
	  			newdata['currency'] = 'IDR';
	  			newdata['amount'] = amount;
	  			newdata['mode'] = mode;
	  			newdata['modeCategory'] = "external";
	  			newdata['transferList'] = targetAccount;
	  			newdata['description'] = description;
	  			newdata['transactionDate'] = "1"; // value = 1 mean immediate transfer
	  			newdata['lang']=window.localStorage.getItem("lang");
	  		
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
	  			localStorage.setItem("securityTypeCode", securityTypeCode);

	  			newdata['securityTypeCode'] = securityTypeCode;
	  			
	  			var newdata = JSON.stringify(newdata);
	  	//		alert('newdata json: '+newdata);
	  			
	  			var url=ipaddress+"/rest/transferFundV2/doConfirmInternalTransfer";
	  			$ionicLoading.show({
		  		 	template: 'Loading...',
		  	        animation: 'fade-in',
		  	        showBackdrop: true,
		  	        maxWidth: 200,
		  	        showDelay: 0
		  	    });
	  			$http.post(url,newdata).success(function(data) {
	  				$ionicLoading.hide();
	  				if (data != null){
	  		    		if (data.responseCode == "01"){
	  		    			alert(data.responseMessage);
	  		    			return false;
	  		    		} else if (data.responseCode == "02"){
	  		    			alert(data.responseMessage);
	  		    			return false;
	  		    		} else if (data.responseCode == "03"){
	  		    			alert(data.responseMessage);
	  		    			return false;
	  		    		} else if (data.responseCode == "04"){
	  		    			alert(data.responseMessage);
	  		    			return false;
	  		    		} else if (data.responseCode == "00"){
	  		    			fundTransferData.setFtExternalBankInputData(data);

	  		    			stickinessSetAccNumber("FT",accountNumber);
	  				    	
	  				    	window.location.href = "#/app/ftExternalBankConfirm";
	  		    		} else {
	  						alert(data.responseMessage);
	  						return false;
	  					}
	  				} else {
	  					alert("Data from server not found");
	  	//				goToTransferTypeOb();
	  				}
	  			}).error(function(){
	  				$ionicLoading.hide();
	  				alert("Server Error");
	  				return false;
	  			});
			}
			
		}
	};

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
	$scope.accList = accList;

	try {
		if (accList.length == 1){
			$scope.accountNumberText = accList[0].label;
			$scope.accountNumber = accList[0].id;

			//document.getElementById('accountNumberText').value = accList[0].label;
			//ocument.getElementById('accountNumberHidden').value = accList[0].id;
	   	}else{
			stickinessGetAccNumberFT($scope, "FT", "extBank");
	   	}
   	} catch(e) {}
})
.directive('ftExternalBankInputDirective', function() {
  return {
//	restrict: 'E',
    templateUrl: function(elem, attr){
      return 'templates/template-ft/directive/fundTransfer-'+attr.type+'-directive.html';
    }
  };
})
;

fundTransferControllers.controller('ftExternalBankInputPopupCtrl', function($scope, $routeParams, $http) {
	
   	loadFontSize();

	if (userStorageMap != null){
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
		$scope.accList = accList;
		
		var sknTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.sknTransferList;
		var rtgsTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.rtgsTransferList;
		var networkTransferList = getNetworkTransferList(userStorageMap);
		
		console.debug("sknlist:"+sknTransferList.length+",rtgslist:"+rtgsTransferList.length+",networklist:"+networkTransferList.length);
		
		var externalTransferList=sknTransferList.concat(rtgsTransferList,networkTransferList);
		
		if (window.localStorage.getItem("newExternalTransferList") != null){
			externalTransferList = JSON.parse(window.localStorage.getItem("newExternalTransferList"));
		}
		console.debug("externalTransferList length:"+externalTransferList.length);
		$scope.targetAccountList = externalTransferList;
	}
});

function getNetworkTransferList(userStorageMap){
	var networkTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.networkTransferList;
	
	var newNetworkTransferList = JSON.parse(window.localStorage.getItem("newNetworkTransferList"));
	
	if (newNetworkTransferList == null || newNetworkTransferList == ""){
		newNetworkTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.networkTransferList;
	} else {
		networkTransferList = newNetworkTransferList;
	} 
	return networkTransferList;
}


fundTransferControllers.controller('ftExternalBankConfirmCtrl', function($scope, $routeParams, $http, $compile, fundTransferData,$cordovaDevice,$ionicPlatform,$translate, $ionicLoading) {
		
   	loadFontSize();

	var ftExternalBankInputStorage = fundTransferData.getFtExternalBankInputData();

	var tableStream=constructExternalConfirmDisplay(ftExternalBankInputStorage.confirmDisplay);
	$("#confirmDisplay").append(tableStream);
	tokenInputGeneric(ftExternalBankInputStorage.transferTransaction.securityTypeCode,ftExternalBankInputStorage.transferTransaction.amount,$scope,$compile,$translate);

	window.localStorage.setItem("transferTransactionInquiry",JSON.stringify(ftExternalBankInputStorage));
	
	var transReferenceNumber = ftExternalBankInputStorage.transferTransaction.transRefNum;
    document.getElementById('transRefNum').value = transReferenceNumber;
    
    var securityTypeCode = ftExternalBankInputStorage.transferTransaction.securityTypeCode;
    window.localStorage.setItem("securityTypeCode",securityTypeCode);
    if(securityTypeCode == "0" || securityTypeCode=="2"){
    	startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
//	stickinessSetAccNumber(data.transferTransaction.debitAccountNumber);
  //------- sms ng-click
	//alert("12345");

    $scope.simasCheckboxFunction = function () {
	//	alert("simasCheckboxFunction");

		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	    
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	//------
    $compile(document.getElementById('confirmDisplay'))($scope);
	$scope.$apply();
	
	$scope.doFtExternalBankResult = function () {
		//alert("doFtExternalBankResult");

		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var langNameSession = window.localStorage.getItem("lang");
			if (langNameSession == null || langNameSession == "" || langNameSession == "en" || langNameSession == "null"){
				 window.localStorage.setItem("lang","en");
			}else{
				 window.localStorage.setItem("lang","in");
			}
			
			var transferTransactionObj = JSON.parse(window.localStorage.getItem("transferTransactionInquiry"));
			var securityTypeCode = window.localStorage.getItem("securityTypeCode");
			transferTransactionObj.transferTransaction.securityTypeCode = securityTypeCode;
			transferTransactionObj = transferTransactionObj;
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
			if (transferTransactionObj.isShowDisclaimer == true){
				if(document.getElementById('isAgree').checked==false){
					alert(agreement);
					return false;
				}
			}
			
			var newdata = {};
			newdata['securityTypeCode'] = securityTypeCode;
			newdata['ipassport']=userStorageMap.ipassport;
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				newdata['tokenInputed'] = document.getElementById('simasToken').value;
			}
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				newdata['mPinInputed'] = document.getElementById('mPin').value;
			}
			
			newdata['transferTransaction']=transferTransactionObj;
			newdata['lang']=window.localStorage.getItem("lang");
			var datajson=JSON.stringify(newdata);
	//		alert("datajson: " + datajson);
			
			var url=ipaddress+"/rest/transferFundV2/doInternalTransfer";
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
					if (data.responseCode == "01" || data.responseCode == "02" ||
							data.responseCode == "03" || data.responseCode == "04" || 
							data.responseCode == "05" || data.responseCode == "06"){
						alert(data.responseMessage);
						return false;
					} else if(data.responseCode == "00"){
						fundTransferData.setFtExternalBankConfirmData(data);
				    	
				    	window.location.href = "#/app/ftExternalBankResult";
					} else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Data from server not found");
	//				goToTransferTypeOb();
				}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Server Error");
				return false;
			});
		}
	}
});

fundTransferControllers.controller('ftExternalBankResultCtrl', function($scope,$rootScope, $routeParams, $http, fundTransferData) {
		
   	loadFontSize();

	var ftExternalBankConfirmStorage = fundTransferData.getFtExternalBankConfirmData();

	var tableStream=constructResultDisplay(ftExternalBankConfirmStorage.resultDisplay);
	$("#resultDisplay").append(tableStream);

	try {
		$rootScope.showLogout = true;
		/*$timeout(function() {
			$rootScope.showLogout = false;
		}, 30000);*/
	} catch(e) {}
});

function constructExternalConfirmDisplay(stream){
	var records =stream.split("|");
	var table="";
	table=table.concat("<table id='genericTableConfirm' border='0'>");
	//iterate row
//	console.debug('records:'+records.length);
	for (var i = 0; i < records.length; i++) {
		var columns=records[i].split(";");
//		console.debug('columns:'+columns.length);
		table=table.concat("<tr>");
		for (var j = 0; j < columns.length; j++) {
			if (columns.length == 1){
				table=table.concat("<td colspan='3' class='td-label-left'>");
			} else {
				table=table.concat("<td class='td-label-left'>");
			}
			
			var columnSplit = columns[j].split(" ");
			
			if (columns[j] == "'-'"){
				table=table.concat("<hr>");
			} else if (columns[j] == "smsTokenCodeInput"){	
				table=table.concat("<input type='text' name='mPin' class='m_content-inputtext-token' id='mPin' size='8' maxlength='6'/>");
			} else if (columns[j] == "simasTokenCodeInput"){	
				table=table.concat("<input type='text' name='simasToken' class='m_content-inputtext-token' id='simasToken' size='8' maxlength='6'/>");
			} else if (columnSplit[0] == "checkbox"){
				table=table.concat("<input style='margin-left: 10px;padding-left: 5px' type='checkbox' name='isAgree' id='isAgree'/>"+columns[j].replace("checkbox",""));
			} else {
				table=table.concat(columns[j]);
			}
			table=table.concat("</td>");
		}
		table=table.concat("</tr>");
	}
	table=table.concat("<tr><td colspan='3' class='td-label-left'><input type='button' class='button button-block button-positive' name='button' id='button' value='Submit' ng-click='doFtExternalBankResult();' /></td></tr>");
	table=table.concat("</table>");
	return table;
}








/** ----------------------- **/
/** Add TransferList Inbank **/
/** ----------------------- **/
fundTransferControllers.controller('addInbankTransferListInputCtrl', function($scope, $routeParams, $http, fundTransferData,$translate, $ionicLoading) {
		
   	loadFontSize();

	$scope.addInbankTL = {};
	
	$scope.doAddUangkuTransferListConfirm = function (){
//		alert("doAddInbankTransferListConfirm");
		
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var targetAccount = $scope.addInbankTL.targetAccount;
			var description = $scope.addInbankTL.description;
			//alert(targetAccount + ", " + description);
			var required_target_account = $translate.instant('required_target_account');

			if (targetAccount == null || targetAccount == "" ){
				alert(required_target_account);
				return false;
			} else {
				var securityTypeCode;
				var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
				var userToken = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
				//alert(userPreference+"sas"+$.inArray("1", userToken))
				if(isDevice == true){
					if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
						var securityTypeCode = "0";
					}else{ 
						if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
							var securityTypeCode = "0";
						}
						if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
							var securityTypeCode = "1";
						}
					}
				}else{
					if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
							var securityTypeCode = "1";
					}else{ 
						if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
							var securityTypeCode = "0";
						}
						if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
							var securityTypeCode = "1";
						}
					}
				}
	    		localStorage.setItem("securityTypeCode", securityTypeCode);
	    		
				var newdata = {};
				newdata['ipassport']=userStorageMap.ipassport;
				newdata['targetAccount'] = targetAccount;
				newdata['description'] = description;
				newdata['securityTypeCode'] = securityTypeCode;
				newdata['ftType'] = "uangku";
				var datajson=JSON.stringify(newdata);
				//alert("datajson: " + datajson);
				
				var url=ipaddress+"/rest/transferListV2/doAddInbankPayee";
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
			    		if(data.responseCode=="00"){
			    			fundTransferData.setAddUangkuTransferListInputData(data);
					    	
					    	window.location.href = "#/app/addUangkuTransferListConfirm";
			    		} else {
							alert(data.responseMessage);
							return false;
						}
					} else {
						alert("Data from server not found");
						return false;
					}
				}).error(function(){
	  				$ionicLoading.hide();
					alert("Server Error");
					return false;
				});
			}
		}
	}

	$scope.doAddInbankTransferListConfirm = function (){
//		alert("doAddInbankTransferListConfirm");
	
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var targetAccount = $scope.addInbankTL.targetAccount;
			var description = $scope.addInbankTL.description;
			//alert(targetAccount + ", " + description);
			var required_target_account = $translate.instant('required_target_account');

			if (targetAccount == null || targetAccount == "" ){
				alert(required_target_account);
				return false;
			} else {
				var securityTypeCode;
				var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
				var userToken = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
				//alert(userPreference+"sas"+$.inArray("1", userToken))
				if(isDevice == true){
					if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
						var securityTypeCode = "0";
					}else{ 
						if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
							var securityTypeCode = "0";
						}
						if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
							var securityTypeCode = "1";
						}
					}
				}else{
					if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
							var securityTypeCode = "1";
					}else{ 
						if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
							var securityTypeCode = "0";
						}
						if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
							var securityTypeCode = "1";
						}
					}
				}
	    		localStorage.setItem("securityTypeCode", securityTypeCode);
	    		
				var newdata = {};
				newdata['ipassport']=userStorageMap.ipassport;
				newdata['targetAccount'] = targetAccount;
				newdata['description'] = description;
				newdata['securityTypeCode'] = securityTypeCode;
				var datajson=JSON.stringify(newdata);
				//alert("datajson: " + datajson);
				
				var url=ipaddress+"/rest/transferListV2/doAddInbankPayee";
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
			    		if(data.responseCode=="00"){
			    			fundTransferData.setAddInbankTransferListInputData(data);
					    	
					    	window.location.href = "#/app/addInbankTransferListConfirm";
			    		} else {
							alert(data.responseMessage);
							return false;
						}
					} else {
						alert("Data from server not found");
						return false;
					}
				}).error(function(){
	  				$ionicLoading.hide();
					alert("Server Error");
					return false;
				});
			}
		}
	}
});	

fundTransferControllers.controller('addInbankTransferListConfirmCtrl', function($scope, $routeParams, $http, $compile, fundTransferData,$cordovaDevice,$ionicPlatform,$translate, $ionicLoading) {
		
   	loadFontSize();

	var addInbankTransferListInputStorage = fundTransferData.getAddInbankTransferListInputData();
	//alert(JSON.stringify(addInbankTransferListInputStorage));

	$scope.targetAccount = addInbankTransferListInputStorage.targetAccountScope.accountNumber;
	$scope.targetAccountType = addInbankTransferListInputStorage.targetAccountScope.targetType.name;
	$scope.targetAccountName = addInbankTransferListInputStorage.targetAccountScope.name;
	$scope.targetAccountBank = addInbankTransferListInputStorage.targetAccountScope.bankName;
	$scope.targetAccountBankBranch = addInbankTransferListInputStorage.targetAccountScope.bankBranchName;
	$scope.description = addInbankTransferListInputStorage.targetAccountScope.description;
	//$scope.transRefNum = addInbankTransferListInputStorage.transRefNum;

	//var nodeTargetAccount = document.createElement('span');
	//nodeTargetAccount.innerHTML = "<label>"+addInbankTransferListInputStorage.targetAccountScope.accountNumber+"</label>";
	//document.getElementById('targetAccount').appendChild(nodeTargetAccount);
	//alert(addInbankTransferListInputStorage.targetAccountScope.accountNumber);

	//var nodeTargetAccountType = document.createElement('span');
	//nodeTargetAccountType.innerHTML = "<label>"+addInbankTransferListInputStorage.targetAccountScope.targetType.name+"</label>";
	//document.getElementById('targetAccountType').appendChild(nodeTargetAccountType);
	
	//var nodeTargetAccountName = document.createElement('span');
	//nodeTargetAccountName.innerHTML = "<label>"+addInbankTransferListInputStorage.targetAccountScope.name+"</label>";
	//document.getElementById('targetAccountName').appendChild(nodeTargetAccountName);
	
	//var nodeTargetAccountBank = document.createElement('span');
	//nodeTargetAccountBank.innerHTML = "<label>"+addInbankTransferListInputStorage.targetAccountScope.bankName+"</label>";
	//.getElementById('targetAccountBank').appendChild(nodeTargetAccountBank);
	
	//var nodeTargetAccountBankBranch = document.createElement('span');
	//nodeTargetAccountBankBranch.innerHTML = "<label>"+addInbankTransferListInputStorage.targetAccountScope.bankBranchName+"</label>";
	//document.getElementById('targetAccountBankBranch').appendChild(nodeTargetAccountBankBranch);
	
	//var nodeDescription = document.createElement('span');
	//nodeDescription.innerHTML = "<label>"+addInbankTransferListInputStorage.targetAccountScope.description+"</label>";
	//document.getElementById('description').appendChild(nodeDescription);
	
	var transReferenceNumber = addInbankTransferListInputStorage.transRefNum;
    document.getElementById('transRefNum').value = transReferenceNumber;

	localStorage.setItem('countSMSResend',0);

	var securityTypeCode = localStorage.getItem("securityTypeCode")
	tokenInputGeneric(securityTypeCode,"0",$scope,$compile,$translate);
	if(securityTypeCode == "0"){
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	//------- sms ng-click
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	    
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	//------
	$scope.doAddInbankTransferListResult = function(){

		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var securityTypeCode = window.localStorage.getItem("securityTypeCode");
			var fill_token_id = $translate.instant('fill_token_id');
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				if(document.getElementById('mPin').value==null || document.getElementById('mPin').value==""){
					alert(fill_token_id);
					return false;
				}
			}
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				if(document.getElementById('simasToken').value==null || document.getElementById('simasToken').value==""){
					alert(fill_token_id);
					return false;
				}
			}
			
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				newdata['tokenInputed'] = document.getElementById('simasToken').value;
			}
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				newdata['mPinInputed'] = document.getElementById('mPin').value;
			}
			newdata['securityTypeCode']=securityTypeCode;
			var datajson=JSON.stringify(newdata);
	//		alert("datajson:"+datajson);
			
			var url=ipaddress+"/rest/transferListV2/doNewConfirmPayee";
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
		    		fundTransferData.setAddInbankTransferListConfirmData(data);
			    	
			    	window.location.href = "#/app/addInbankTransferListResult";
				} else {
					alert(data.responseMessage);
	    			return false;
				}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Server Error");
				return false;
			});
		}
	}
});

fundTransferControllers.controller('addUangkuTransferListConfirmCtrl', function($scope, $routeParams, $http, $compile, fundTransferData,$cordovaDevice,$ionicPlatform,$translate, $ionicLoading) {
	
   	loadFontSize();

	var addUangkuTransferListInputStorage = fundTransferData.getAddUangkuTransferListInputData();
	//alert(JSON.stringify(addUangkuTransferListInputStorage));

	$scope.targetAccount = addUangkuTransferListInputStorage.targetAccountScope.accountNumber;
	$scope.phoneNumber = addUangkuTransferListInputStorage.targetAccountScope.phoneNumber;
	$scope.targetAccountType = addUangkuTransferListInputStorage.targetAccountScope.targetType.name;
	$scope.targetAccountName = addUangkuTransferListInputStorage.targetAccountScope.name;
	$scope.targetAccountBank = addUangkuTransferListInputStorage.targetAccountScope.bankName;
	$scope.targetAccountBankBranch = addUangkuTransferListInputStorage.targetAccountScope.bankBranchName;
	$scope.description = addUangkuTransferListInputStorage.targetAccountScope.description;
	
	var transReferenceNumber = addUangkuTransferListInputStorage.transRefNum;
    document.getElementById('transRefNum').value = transReferenceNumber;

	localStorage.setItem('countSMSResend',0);

	var securityTypeCode = localStorage.getItem("securityTypeCode")
	tokenInputGeneric(securityTypeCode,"0",$scope,$compile,$translate);
	if(securityTypeCode == "0"){
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	//------- sms ng-click
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	    
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	//------
	$scope.doAddUangkuTransferListResult = function(){

		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var securityTypeCode = window.localStorage.getItem("securityTypeCode");
			var fill_token_id = $translate.instant('fill_token_id');
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				if(document.getElementById('mPin').value==null || document.getElementById('mPin').value==""){
					alert(fill_token_id);
					return false;
				}
			}
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				if(document.getElementById('simasToken').value==null || document.getElementById('simasToken').value==""){
					alert(fill_token_id);
					return false;
				}
			}
			
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				newdata['tokenInputed'] = document.getElementById('simasToken').value;
			}
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				newdata['mPinInputed'] = document.getElementById('mPin').value;
			}
			newdata['securityTypeCode']=securityTypeCode;
			newdata['ftType'] = "uangku";
			var datajson=JSON.stringify(newdata);
	//		alert("datajson:"+datajson);
			
			var url=ipaddress+"/rest/transferListV2/doNewConfirmPayee";
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
		    		fundTransferData.setAddUangkuTransferListConfirmData(data);
			    	
			    	window.location.href = "#/app/addUangkuTransferListResult";
				} else {
					alert(data.responseMessage);
	    			return false;
				}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Server Error");
				return false;
			});
		}
	}
});

fundTransferControllers.controller('addInbankTransferListResultCtrl', function($scope, $routeParams, $http, fundTransferData) {
		
   	loadFontSize();

	var addInbankTransferListConfirmStorage = fundTransferData.getAddInbankTransferListConfirmData();

	var nodeMessage = document.createElement('span');
	nodeMessage.innerHTML = "<label>"+addInbankTransferListConfirmStorage.responseMessage+"</label>";
	document.getElementById('message').appendChild(nodeMessage);
	
	var inbankTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.inbankTransferList;
	
	var newTargetType = {};
	newTargetType["name"] = addInbankTransferListConfirmStorage.targetAccountType;
	
	var newTargetAccount = {};
	newTargetAccount["targetType"] = newTargetType;
	newTargetAccount["accountNumber"] = addInbankTransferListConfirmStorage.targetAccount;
	newTargetAccount["name"] = addInbankTransferListConfirmStorage.targetAccountName;
	newTargetAccount["bankName"] = addInbankTransferListConfirmStorage.targetAccountBankName;
	newTargetAccount["id"] = addInbankTransferListConfirmStorage.id;
	newTargetAccount["currency"] = addInbankTransferListConfirmStorage.currency;
	newTargetAccount["transferType"] = addInbankTransferListConfirmStorage.transferType;
	newTargetAccount["label"] = addInbankTransferListConfirmStorage.label;

	inbankTransferList.push(newTargetAccount);
//	alert("JSON.stringify inbankTransferList: " + JSON.stringify(inbankTransferList));
	
	window.localStorage.setItem("newInbankTransferList", JSON.stringify(inbankTransferList));
});

fundTransferControllers.controller('addUangkuTransferListResultCtrl', function($scope, $routeParams, $http, fundTransferData) {
	
   	loadFontSize();

	var addUangkuTransferListConfirmStorage = fundTransferData.getAddUangkuTransferListConfirmData();

	var nodeMessage = document.createElement('span');
	nodeMessage.innerHTML = "<label>"+addUangkuTransferListConfirmStorage.responseMessage+"</label>";
	document.getElementById('message').appendChild(nodeMessage);
	
	var uangkuTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.uangkuTransferList;
	
	var newTargetType = {};
	newTargetType["name"] = addUangkuTransferListConfirmStorage.targetAccountType;
	
	var newTargetAccount = {};
	newTargetAccount["targetType"] = newTargetType;
	newTargetAccount["accountNumber"] = addUangkuTransferListConfirmStorage.targetAccount;
	newTargetAccount["name"] = addUangkuTransferListConfirmStorage.targetAccountName;
	newTargetAccount["bankName"] = addUangkuTransferListConfirmStorage.targetAccountBankName;
	newTargetAccount["id"] = addUangkuTransferListConfirmStorage.id;
	newTargetAccount["currency"] = addUangkuTransferListConfirmStorage.currency;
	newTargetAccount["transferType"] = addUangkuTransferListConfirmStorage.transferType;
	newTargetAccount["label"] = addUangkuTransferListConfirmStorage.label;

	uangkuTransferList.push(newTargetAccount);
//	alert("JSON.stringify uangkuTransferList: " + JSON.stringify(uangkuTransferList));
	
	window.localStorage.setItem("newUangkuTransferList", JSON.stringify(uangkuTransferList));
});






/** ----------------------------- **/
/** Add TransferList ExternalBank **/
/** ----------------------------- **/
fundTransferControllers.controller('addExternalBankTransferListInputCtrl', function($scope, $routeParams, $http, fundTransferData, $ionicPopup,$translate, $ionicLoading, $ionicModal) {
		
   	loadFontSize();

	//hide 'targetAccountName' field as default. Will show if the transfer method require it
	$('#targetAccountHolderName').hide();

	//bind radio button ke method yang toggle content nama pemilik rekening dll nantinya jika ada
	var radios = document.getElementsByName('transferMethod');
	for (var i = 0, length = radios.length; i < length; i++) {
		radios[i].onclick=function(){
			_toggleContentBySelectedTransferMethod(this);
		};
	}
	
	// BankList
	$ionicModal.fromTemplateUrl('templates/template-ft/externalBank/bankList.html', {
	    scope: $scope
	}).then(function(modal) {
	    $scope.modalBankList = modal;
	});
	
	$scope.openPopupBankList = function() {
	    $scope.modalBankList.show();
	};
	
	$scope.closePopupBankList = function() {
	    $scope.modalBankList.hide();
	};
	
	$scope.dropdownBlockPage = function(divName){
		var externalBankList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.ExternalBankListJson);
		$scope.bankList = externalBankList.externalBankList;
		
		if (divName == 'angularBankNameList'){
			
			$scope.openPopupBankList();
			
//			var nameButton = 'Close';
//			 $scope.myPopup = $ionicPopup.show({
//			     template: 	'<label class="item item-input">'+
//						    	'<i class="icon ion-search placeholder-icon"></i>'+
//						    	'<input type="text" ng-model="query" placeholder="Search">'+
//						    '</label>'+
//			    	 	   	'<ul>'+
//			    	 	   		'<li class="item item-text-wrap" ng-repeat="bank in bankList | filter:query" ng-click="copyBankNameList(bank.id, bank.bankName);" id="{{bank.id}}">'+
//			    	 	   			'<div>{{bank.bankName}}'+
//			    	 	   		'</li>'+
//			    	 	   	'</ul>',
//			     title: 'Bank List',
//			     scope: $scope,
//			     buttons: [
//			       { text: ''+nameButton+'' },
//			     ]
//			   }); 
		}
	}
	
	$scope.copyBankNameList = function (id, bankLabel){
//		$scope.myPopup.close();
		$scope.closePopupBankList();
		document.getElementById('bankNameText').value = bankLabel;
		document.getElementById('bankNameHidden').value = id;
		
		_toggleTransferMethodBySelectedBank(id);
	}
	
	$scope.addExternalTL = {};
	$scope.doAddExternalBankTransferListConfirm = function (){
//		alert("doAddExternalBankTransferListConfirm");
	
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}

		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var targetAccountType = $('input[name="transferMethod"]:checked').val();
			var targetAccount = $scope.addExternalTL.targetAccount;
			var targetAccountBank = $('input[name="bankNameHidden"]').val();
			var targetAccountName = $scope.addExternalTL.targetAccountName;
			var description = $scope.addExternalTL.description;
			//alert(targetAccountType + ", " + targetAccount + ", " + targetAccountBank + ", " + targetAccountName + ", " + description);
			var required_target_account = $translate.instant('required_target_account');
			var required_bank_name = $translate.instant('required_bank_name');
			var required_account_name = $translate.instant('required_account_name');
/*			var fill_token_id = $translate.instant('fill_token_id');
*/
			if (targetAccount == null || targetAccount == "" ){
				alert(required_target_account);
				return false;
			} else if (targetAccountBank == null || targetAccountBank == "" ){
				alert(required_bank_name);
				return false;
			}
			
			if (targetAccountType == 'networkTransfer'){
				targetAccountName = "";
			} else{
				if (targetAccountName == null || targetAccountName == "" ){
					alert(required_account_name);
					return false;
				}
			}
	//		alert("targetAccountName: " + targetAccountName);
			
			/*var securityTypeCode = "0";
			if (securityTypeCode == null || securityTypeCode == "" ){
				alert(fill_token_id);
				return false;
			}*/
			var securityTypeCode;
			var userPreference = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
			var userToken = userStorageMap.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
			//alert(userPreference+"sas"+$.inArray("1", userToken))
			if(isDevice == true){
				if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
					var securityTypeCode = "0";
				}else{ 
					if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
						var securityTypeCode = "0";
					}
					if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
						var securityTypeCode = "1";
					}
				}
			}else{
				if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
						var securityTypeCode = "1";
				}else{ 
					if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
						var securityTypeCode = "0";
					}
					if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
						var securityTypeCode = "1";
					}
				}
			}
			localStorage.setItem("securityTypeCode", securityTypeCode);

			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['targetAccount'] = targetAccount; // nomer account
			newdata['targetAccountName'] = targetAccountName; // nama pemilik account
			newdata['targetAccountBank'] = targetAccountBank; // bank nya
			newdata['targetAccountType'] = targetAccountType; // jenis transfer nya
			newdata['description'] = description;
			newdata['securityTypeCode'] = securityTypeCode;

			var datajson=JSON.stringify(newdata);
			//alert("datajson: "+datajson);
			
			var url=ipaddress+"/rest/transferListV2/doAddExternalPayee";
			//alert(datajson)
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
		    		if(data.responseCode=="00"){
		    			fundTransferData.setAddExternalBankTransferListInputData(data);
				    	
				    	window.location.href = "#/app/addExternalBankTransferListConfirm";
					}else {
						alert(data.responseMessage);
						return false;
					}
				} else {
					alert("Data from server not found");
					return false;
				}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Server Error");
				return false;
			});
		}
	}
})
.directive('addExternalBankTransferListInputDirective', function() {
  return {
//	restrict: 'E',
    templateUrl: function(elem, attr){
      return 'templates/template-ft/directive/fundTransfer-'+attr.type+'-directive.html';
    }
  };
})
;

fundTransferControllers.controller('addExternalBankTransferListInputPopupCtrl', function($scope, $routeParams, $http) {
	
   	loadFontSize();

	if (userStorageMap != null){
		var externalBankList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.ExternalBankListJson);
		$scope.bankNameList = externalBankList.externalBankList;
	}
});

function _toggleContentBySelectedTransferMethod(selectedTransferMethod){
//	alert('_toggleContentBySelectedTransferMethod: '+selectedTransferMethod.value);
	if("sknTransfer"==selectedTransferMethod.value || "rtgsTransfer"==selectedTransferMethod.value){
		//keluarin field buat isi nama pemilik target account
		$('#targetAccountHolderName').show();
	}else{
		$('#targetAccountHolderName').hide();
	}
}

function _toggleTransferMethodBySelectedBank(selectedBankId){
//	alert("_toggleTransferMethodBySelectedBank(selectedBankId)");
	var externalBankList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.ExternalBankListJson);
	externalBankList = externalBankList.externalBankList;
	console.log('selected value:'+selectedBankId);
	console.log('selectedBank value:'+selectedBankId);
	
	var sknRb = document.getElementById("sknRb");
	var rtgsRb = document.getElementById("rtgsRb");
	var networkRb = document.getElementById("networkRb");
	
	for(var i = 0; i < externalBankList.length; i++){
		console.log(selectedBankId+' == '+externalBankList[i]["id"]);
		if(selectedBankId==externalBankList[i]["id"]){
			console.log(">>>>>"+externalBankList[i]["sknEnabled"]+","+externalBankList[i]["rtgsEnabled"]+","+
					externalBankList[i]["networkEnabled"]);
			if("yes"==externalBankList[i]["sknEnabled"]) sknRb.disabled=false;
			else sknRb.disabled=true;
			if("yes"==externalBankList[i]["rtgsEnabled"]) rtgsRb.disabled=false;
			else rtgsRb.disabled=true;
			if("yes"==externalBankList[i]["networkEnabled"]) networkRb.disabled=false;
			else networkRb.disabled=true;
			break;
		}
	}
}

fundTransferControllers.controller('addExternalBankTransferListConfirmCtrl', function($scope, $routeParams, $http, $compile, fundTransferData,$cordovaDevice,$ionicPlatform,$translate, $ionicLoading) {
		
   	loadFontSize();

	var addExternalBankTransferListInputStorage = fundTransferData.getAddExternalBankTransferListInputData();
	$scope.targetAccount = addExternalBankTransferListInputStorage.targetAccountScope.accountNumber;
	$scope.targetAccountType = addExternalBankTransferListInputStorage.targetAccountScope.targetType.name;
	$scope.targetAccountName = addExternalBankTransferListInputStorage.targetAccountScope.name;
	$scope.targetAccountBank = addExternalBankTransferListInputStorage.targetAccountScope.bankName;
	$scope.targetAccountBankBranch = addExternalBankTransferListInputStorage.targetAccountScope.bankBranchName;
	$scope.description = addExternalBankTransferListInputStorage.targetAccountScope.description;

	//var nodeTargetAccount = document.createElement('span');
	//nodeTargetAccount.innerHTML = "<label>"+addExternalBankTransferListInputStorage.targetAccountScope.accountNumber+"</label>";
	//document.getElementById('targetAccount').appendChild(nodeTargetAccount);
	
	//var nodeTargetAccountType = document.createElement('span');
	//nodeTargetAccountType.innerHTML = "<label>"+addExternalBankTransferListInputStorage.targetAccountScope.targetType.name+"</label>";
	//document.getElementById('targetAccountType').appendChild(nodeTargetAccountType);
	
	//var nodeTargetAccountName = document.createElement('span');
	//nodeTargetAccountName.innerHTML = "<label>"+addExternalBankTransferListInputStorage.targetAccountScope.name+"</label>";
	//document.getElementById('targetAccountName').appendChild(nodeTargetAccountName);
	
	//var nodeTargetAccountBank = document.createElement('span');
	//nodeTargetAccountBank.innerHTML = "<label>"+addExternalBankTransferListInputStorage.targetAccountScope.bankName+"</label>";
	//document.getElementById('targetAccountBank').appendChild(nodeTargetAccountBank);
	
	//var nodeTargetAccountBankBranch = document.createElement('span');
	//nodeTargetAccountBankBranch.innerHTML = "<label>"+addExternalBankTransferListInputStorage.targetAccountScope.bankBranchName+"</label>";
	//document.getElementById('targetAccountBankBranch').appendChild(nodeTargetAccountBankBranch);
	
	//var nodeDescription = document.createElement('span');
	//nodeDescription.innerHTML = "<label>"+addExternalBankTransferListInputStorage.targetAccountScope.description+"</label>";
	//document.getElementById('description').appendChild(nodeDescription);
	
	var transReferenceNumber = addExternalBankTransferListInputStorage.transRefNum;
	document.getElementById('transRefNum').value = transReferenceNumber;
	
	localStorage.setItem('countSMSResend',0);
	var securityTypeCode = localStorage.getItem("securityTypeCode")
	tokenInputGeneric(securityTypeCode,"0",$scope,$compile,$translate);
	if(securityTypeCode == "0"){
		startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
	}
	//------- sms ng-click
	$scope.simasCheckboxFunction = function () {
		simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
	};
	$scope.smsCheckboxFunction = function () {
		smsCheckboxFunction($translate);
	};
	    
	$scope.reSendSMSToken = function () {
		reSendSMSToken($http, $translate,$ionicLoading);
	};
	//------
	$scope.doAddExternalBankTransferListConfirm = function () {
		//alert("doAddExternalBankTransferListConfirm");
			
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		var isTimeout = calculateTimeOut();
		
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var fill_token_id = $translate.instant('fill_token_id');
			var agreement = $translate.instant('agreement'); 

			var securityTypeCode = window.localStorage.getItem("securityTypeCode")
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				if(document.getElementById('mPin').value==null || document.getElementById('mPin').value==""){
					alert(fill_token_id);
					return false;
				}
			}
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				if(document.getElementById('simasToken').value==null || document.getElementById('simasToken').value==""){
					alert(fill_token_id);
					return false;
				}
			}

			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			
			if (securityTypeCode == "1" || securityTypeCode == "2"){
				newdata['tokenInputed'] = document.getElementById('simasToken').value;
			}
			if (securityTypeCode == "0" || securityTypeCode == "2"){
				newdata['mPinInputed'] = document.getElementById('mPin').value;
			}
			newdata['securityTypeCode'] = securityTypeCode;
			
			var datajson=JSON.stringify(newdata);
	//		alert("datajson: "+datajson);
			
			var url=ipaddress+"/rest/transferListV2/doNewConfirmPayee";
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
		    		if(data.responseCode=="00"){
		    			fundTransferData.setAddExternalBankTransferListConfirmData(data);
				    	
				    	window.location.href = "#/app/addExternalBankTransferListResult";
		    		} else {
		    			alert(data.responseMessage);
		    			return false;
		    		}
				} else {
					unblockPage();
					alert("Data from server not found");
					return false;
				}
			}).error(function(){
  				$ionicLoading.hide();
				alert("Server Error");
				return false;
			});
		}
	}
});

fundTransferControllers.controller('addExternalBankTransferListResultCtrl', function($scope, $routeParams, $http, fundTransferData) {
		
   	loadFontSize();

	var addExternalBankTransferListConfirmStorage = fundTransferData.getAddExternalBankTransferListConfirmData();
	
	var nodeMessage = document.createElement('span');
	nodeMessage.innerHTML = "<label>"+addExternalBankTransferListConfirmStorage.responseMessage+"</label>";
	document.getElementById('message').appendChild(nodeMessage);
	
	var sknTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.sknTransferList;
	var rtgsTransferList = userStorageMap.ipassportData.ipassDataClient.profileScope.rtgsTransferList;
	var networkTransferList = getNetworkTransferList(userStorageMap);
	
	var externalTransferList=sknTransferList.concat(rtgsTransferList,networkTransferList);
	console.debug("externalTransferList: "+externalTransferList);
	
	var newTargetType = {};
	newTargetType["name"] = addExternalBankTransferListConfirmStorage.targetAccountType;
	console.debug("newTargetType: " + newTargetType);
	
	var newTargetAccount = {};
	newTargetAccount["targetType"] = newTargetType;
	newTargetAccount["accountNumber"] = addExternalBankTransferListConfirmStorage.targetAccount;
	newTargetAccount["name"] = addExternalBankTransferListConfirmStorage.targetAccountName;
	newTargetAccount["bankName"] = addExternalBankTransferListConfirmStorage.targetAccountBankName;
	newTargetAccount["id"] = addExternalBankTransferListConfirmStorage.id;
	newTargetAccount["label"] = addExternalBankTransferListConfirmStorage.label;
	console.debug("newTargetAccount: " + newTargetAccount);

	externalTransferList.push(newTargetAccount);
	console.debug("externalTransferList result: " + externalTransferList);
	
	window.localStorage.setItem("newExternalTransferList", JSON.stringify(externalTransferList));
});	

function chooseCurrency(currency){
	console.debug("chooseCurrency : "+currency.id);
	try {
		document.getElementById('currency').value = currency.id;
	} catch(e) {}
}