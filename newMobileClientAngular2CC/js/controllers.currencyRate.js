angular.module('currencyRate.controllers', ['pascalprecht.translate'])

.factory('currencyData', function () {   
	var currencyRateList = "";
	var currencyRateData = "";

    return {
        getCurrencyRateList: function () {
            return currencyRateList;
        },
        setCurrencyRateList: function (newCurrencyRateList) {
        	currencyRateList = newCurrencyRateList;
        },

        getCurrencyRateData: function () {
            return currencyRateData;
        },
        setCurrencyRateData: function (newCurrencyRateData) {
        	currencyRateData = newCurrencyRateData;
        }
    };
})

/*Currency Rate*/
.controller('CurrencyRateCtrl', function($scope, $rootScope, $routeParams, $http, $translate, $ionicModal, $rootScope, $ionicPopover,currencyData, $ionicLoading) {
		
   	loadFontSize();

	$scope.curr = {}; 
	
	console.debug("CurrencyRateCtrl");
	
	console.debug("ipaddress :"+ipaddress);	
	console.debug("lang :"+lang);
	console.debug("ipassport :"+userStorageMap.ipassport);

	
//	alert("activationInputCtrl");
	$scope.tabCurrencyRate = "true";
 	$scope.tabConverterCurrRate = "";

 	$scope.tabCurrencyRateInput = function(){
	 	$scope.tabCurrencyRate = "true";
	 	$scope.tabConverterCurrRate = "";
  	} 

 	$scope.tabConverterCurrRateInput = function(){
	 	$scope.tabCurrencyRate = "";
	 	$scope.tabConverterCurrRate = "true";  	
	}
 	
 	if ($scope.tabCurrencyRate == "true"){
 		console.log("currencyRate");
  		var isTimeout = calculateTimeOut();
  		//console.log("isTimeout :"+isTimeout);
  		if (isTimeout){
  			// hapus localStorage and goTo Welcome html
  			clearSessionClient();
  		} else {
  			var newdata = {};	
  			try {
  	  			newdata['ipassport'] = userStorageMap.ipassport; //userStorageMap.ipassport;
				newdata['lang'] = window.localStorage.getItem("lang"); //window.localStorage.getItem("lang");
  			} catch(e) {}
			
  		  	var datajson=JSON.stringify(newdata);
  		  	console.log("datajson : "+datajson);
  		    $ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  	    });	  		  		  		  	
  		  	$http.post(ipaddress+'/rest/currencyRateControllerV2/currencyRateMobile',datajson)
	         .success(function(data) {
	        	 $ionicLoading.hide();	
	        	 if (data != null){
	        		 console.log("data : "+JSON.stringify(data));
//	        		 newMap.put("ipassport", userMap.get("ipassport"));
//	        		 newMap.put("lang", lang);
//	        		 newMap.put("currencyRateList", currencyRateList);
	        		 $scope.curr.myCurrencyListObjectList = data.currencyRateList;
	        		 /*myCurrencyList.push({
							id: accList[i]["currency"]
						});*/
//	        		 currencyData.setCurrencyRateList(data.currencyRateList);
	        		 
	        	 }else{
	        		 alert("Response Null");
	        		 window.location.href = "#/app/main";
	        		 return false;
	        	 }
			    	
	         }).error(function(){
	        	 	//blockUI.stop();
	        	 	$ionicLoading.hide();
	        	 	alert("Server Error");
	        	 	window.location.href = "#/app/main";
	        	 	return false;
		     });
  		}
 	}
 	
	$scope.convertCurrency = function(){
		var intoCurrency = document.getElementById('convertCurrency').value; // USD
		var amount = document.getElementById('amount').value; // 1.4
		var convertCurrency = document.getElementById('intoCurrency').value; // IDR
		var creditRate;
		var debitRate;
		
		var isValas = true;
		
		var currencyRateList = $scope.curr.myCurrencyListObjectList;
		for (i = 0; i < currencyRateList.length; i++){
			var jsonCurrencyRate = currencyRateList[i]; // object CurrencyRate
			if (convertCurrency == jsonCurrencyRate.currency){
//				$scope.total = result;
				debitRate = jsonCurrencyRate.buyRate;
			}
			if (intoCurrency == jsonCurrencyRate.currency){
//				$scope.total = result;
				creditRate = jsonCurrencyRate.sellRate;
			}
			
		}
		
		if (convertCurrency == 'IDR'){
			debitRate = 1;
		}
		if (intoCurrency == 'IDR'){
			creditRate = 1;
		}
//		alert("creditRate="+creditRate+", debitRate="+debitRate);
		
		var temenosTreasuryRate = 1;
		var baseCurrency = "IDR";
		if ((baseCurrency == convertCurrency)
				|| (baseCurrency == intoCurrency)){
			//bila slh satu dari debit currency dan credit currency itu IDR (bukan full cross currency)
			temenosTreasuryRate = debitRate * creditRate; // creditTreasureRate;
		}else if (debitRate > creditRate){
			temenosTreasuryRate = debitRate / creditRate;
		}else{
			temenosTreasuryRate = creditRate / debitRate;
		}
//		alert("temenosTreasuryRate: " + temenosTreasuryRate)
		
		var amountInDebitCurr = amount;
		var amountInCreditCurr = amount;
		
		if (intoCurrency == convertCurrency){
			amountInDebitCurr = amount;
		} else if (baseCurrency == convertCurrency){
			amountInDebitCurr = amount * temenosTreasuryRate;
		} else if ((baseCurrency == convertCurrency)
				|| (baseCurrency == intoCurrency)){
			if (intoCurrency == convertCurrency){
				amountInDebitCurr = amount * temenosTreasuryRate;
			} else {
				amountInDebitCurr = amount / temenosTreasuryRate;
			}
		} else if ((baseCurrency != convertCurrency)
				&& (baseCurrency != intoCurrency)){
			if (debitRate > creditRate && intoCurrency == intoCurrency){
				amountInDebitCurr = amount / temenosTreasuryRate;
			} else if (debitRate < creditRate && intoCurrency == intoCurrency){
				amountInDebitCurr = amount * temenosTreasuryRate;
			}
		}
//		alert("amountInDebitCurr: " + amountInDebitCurr);
		
		if(isValas && creditRate != null){
			if(debitRate>creditRate){
				amountInCreditCurr=amountInDebitCurr * temenosTreasuryRate;
			} else {
				amountInCreditCurr=amountInDebitCurr / temenosTreasuryRate;
			}
		}
//		alert("amountInCreditCurr: " + amountInCreditCurr);
		
		$scope.total = parseFloat(Math.round(amountInDebitCurr * 100) / 100).toFixed(2);
		
 	}
	$ionicModal.fromTemplateUrl('templates/template-popup/currencyListMenu.html', {
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
		chooseCurrencyRate(currency);
	};
	$ionicModal.fromTemplateUrl('templates/template-popup/currencyListInto.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalCurrencyListInto = modal;
	});

	$scope.dropdownBlockPageCurrencyInto = function() {
		$scope.modalCurrencyListInto.show();
	};

	$scope.closePopupCurrencyListInto = function() {
		$scope.modalCurrencyListInto.hide();
	};

	$scope.chooseCurrencyListInto = function(currency){
		//alert("chooseAccountList"+accSelect);
		$scope.modalCurrencyListInto.hide();
		chooseCurrencyRate(currency);
	};
	$scope.chooseCurrencyListInto = function(currency){
		//alert("chooseAccountList"+accSelect);
		$scope.modalCurrencyListInto.hide();
		chooseCurrencyInto(currency);
	};

	$scope.swapCurrency = function(){
		var convertCurrency = document.getElementById('convertCurrency').value;
		var intoCurrency = document.getElementById('intoCurrency').value;
		console.debug("convertCurrency: " + convertCurrency);
		console.debug("intoCurrency: " + intoCurrency);

		document.getElementById('convertCurrency').value = intoCurrency;
		document.getElementById('intoCurrency').value = convertCurrency;
	}

    $scope.doTransfer = function(){
    	console.debug("doFundTransfer");
		var convertCurrency = document.getElementById('convertCurrency').value;
		var amount = document.getElementById('amount').value;
		console.debug("convertCurrency: " + convertCurrency);
		console.debug("amount: " + amount);

		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;

		var currencyIsExist = false;
		for(var i = 0; i < accList.length; i++){
		    for(var key in accList[i]){
		    	if (key == "label"){
		    		if (convertCurrency == accList[i]["currency"]){
		    			console.debug("label: " + accList[i]["label"]);
		    			currencyIsExist = true;
		    			break;
		    		} 
		    	}
		    }
		}

		console.debug("currencyIsExist: " + currencyIsExist);
		if (currencyIsExist == true){
			// map currency data yg telah di convert
			var currencyRateData={};
			currencyRateData['convertCurrency']=convertCurrency;
			currencyRateData['amount']=amount;

			currencyData.setCurrencyRateData(currencyRateData);

			window.location.href = "#/app/ftInbankInput";
		} else {
			//window.localStorage.setItem('refreshForInAppBrowser',"1");
				
			window.localStorage.setItem('functionMenuUri','inAppBrowser("inAppBrowserAngularV2.do?action=inAppBrowserAngularMobile&route=preOpenAcc&view=customerMenu");');
			window.location.href = "#/app/inAppBrowser";
		}
    }
});
function chooseCurrencyRate(currency){
	//alert("chooseCurrency :"+currency.id);
	try {
		document.getElementById('convertCurrency').value = currency.currency;
	} catch(e) {}
}
function chooseCurrencyInto(currency){
	//alert("chooseCurrency :"+currency.id);
	try {
		document.getElementById('intoCurrency').value = currency.currency;
	} catch(e) {}
}
