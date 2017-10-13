angular.module('billpay.controllers', ['pascalprecht.translate','ngTouch'])

//controller untuk tab all biller, fav biller , n from payment list
.controller('BillpayCtrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel) {
	/*$scope.tabs = [
	              	{
	              		name: $translate.instant('button_fromPaymentList'),
	              		url: 'templates/template-bp/fromPaymentList.html',
	              		active1: true
	              	},{
	              		name: $translate.instant('button_fromNewPayment'),
	              		url: 'templates/template-bp/allBiller.html',
	              		active1: false
	              	}
	              ];
	              	
 	$scope.tab = 'templates/template-bp/fromPaymentList.html'; 
 	$scope.current = $translate.instant('button_fromPaymentList'); default active tab*/

   	loadFontSize();
 	
 	$scope.visibleFromPaymentList = "true";
 	$scope.visibleAllBillerList = "";

 	$scope.fromPaymentListMenu = function(){
	 	$scope.visibleFromPaymentList = "true";
	 	$scope.visibleAllBillerList = "";
  	} 

 	$scope.allBillerListMenu = function(){
	 	$scope.visibleFromPaymentList = "";
	 	$scope.visibleAllBillerList = "true";  	} 

  	  $ionicModal.fromTemplateUrl('templates/template-bp/fromPaymentList.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modalFromPaymentList = modal;
	  });

	  $ionicModal.fromTemplateUrl('templates/template-bp/allBiller.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modalAllBillerList = modal;
	  });

	  $scope.openPopupFromPaymentList = function() {
	    $scope.modalFromPaymentList.show();
	  };

	  $scope.openPopupAllBillerList = function() {
	    $scope.modalAllBillerList.show();
	  };
	  
	  $scope.closePopupFromPaymentList = function() {
	    $scope.modalFromPaymentList.hide();
	  };

	  $scope.closePopupAllBillerList = function() {
	    $scope.modalAllBillerList.hide();
	  };

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var bpmMenuJson = userStorageMap.ipassportData.ipassDataClient.BpmMenuJson;
	var bpmBillerJson = userStorageMap.ipassportData.ipassDataClient.BpmBillerJson;
	var dataBiller = JSON.parse(bpmBillerJson);
	var merchantList="";
	/*var dataCat = JSON.parse(bpmMenuJson);*/ //gak pake kategori lg
	
	//alert(bpmMenuJson);
	//alert(JSON.stringify(dataBiller[42]));
	
	try {
		//var payBillPayStorageMap = JSON.parse(window.localStorage.getItem('payBillPayStorage'));
		var savedMerchantListNew = JSON.parse(window.localStorage.getItem("savedMerchantListNew"));
	} catch(e) {}
	//alert("savedMerchantListNew :"+savedMerchantListNew);
	//alert("savedMerchantListNew :" +userStorageMap.ipassportData.ipassDataClient.profileScope.savedMerchantList);
	if (savedMerchantListNew == null){
		merchantList = userStorageMap.ipassportData.ipassDataClient.profileScope.savedMerchantList;
	}else{
		merchantList = savedMerchantListNew;
	}
	
	//alert("merchantList :"+JSON.stringify(merchantList));
	
  //$scope.disabled = undefined;
  //$scope.searchEnabled = undefined;

  /*$scope.setInputFocus = function (){
    $scope.$broadcast('UiSelectDemo1');
  };
*/
  /*$scope.disableSelectChoice = function() {    
    $scope.biller.selected = undefined; 
    $scope.billerFav.selected2 = undefined;
    $scope.category.selected = undefined;
    $scope.savedMerchant.selected = undefined;
  };*/

  //$scope.category = {};
  $scope.biller = {};
  $scope.savedMerchant = {};
  
  var jsonBillerFav = [];  
  
  for (var i = 0; i < dataBiller.length; i++) {
		if (dataBiller[i]["billerPreferences"]["isFavorite"] != null){
			//alert(dataBiller[i]["name"]);
			jsonBillerFav.push({
				id: dataBiller[i]["id"],
				billerPreferences: dataBiller[i]["billerPreferences"],
				name: dataBiller[i]["name"],
				path: dataBiller[i]["path"],
			});
		}
  }

  jsonBillerFav.sort(function(a, b){
    return a["billerPreferences"]["isFavorite"] - b["billerPreferences"]["isFavorite"];
  });

  var showMoreBiller = $translate.instant('show_more_biller');

  if (jsonBillerFav.length > 1){
	  jsonBillerFav.push({
			id: "showMoreBiller",
			name: showMoreBiller
		});
  }
    

  //alert(JSON.stringify(jsonBillerFav));
  //alert(jsonBillerFav.length);
  /*
  if (jsonBillerFav.length > 1){
	  jsonBillerFav.push({
			id: "",
			name: "______________________"
		});
  }
  
  for (var i = 0; i < dataBiller.length; i++) {
		jsonBillerFav.push({
			id: dataBiller[i]["id"],
			billerPreferences: dataBiller[i]["billerPreferences"],
			name: dataBiller[i]["name"],
			path: dataBiller[i]["path"],
		});
  }
  */
  /*$scope.biller = jsonBillerFav;
  $scope.savedMerchant = merchantList;*/

  $scope.savedMerchantObject = merchantList;
  $scope.allBillerObject = dataBiller;
  $scope.allBillerObjectFav = jsonBillerFav;

  //$scope.category = dataCat;
  //$scope.billerFav = jsonBillerFav;
  /*$scope.isFavorite = function(biller) {
	  //alert("isFavorite "+JSON.stringify(biller));
	  return biller.billerPreferences.isFavorite != "";
  };*/
  
  $scope.showFromPaymentList = function(){
  //alert("showFromPaymentList");
	  //var title = $translate.instant('purchasePayment_billPaymentList');
	  //showSelectList($scope,$translate,$ionicPopup,title,"fromPaymentListFilter","savedMerchantSelect","savedMerchant","savedMerchantObject","chooseSavedMerchant({{savedMerchant}});","{{savedMerchant.id}}","{{savedMerchant.label}}");   
  } 

  $scope.showFromBillerList = function(){
  //alert("showFromBillerList");
	  //var title = $translate.instant('purchasePayment_allBillerList');
	  //showSelectList($scope,$translate,$ionicPopup,title,"allBillerListFilter","allBillerSelect","allBiller","allBillerObject","chooseBiller({{allBiller}});","{{allBiller.id}}","{{allBiller.name}}");   	  
  }
  
  $scope.chooseSavedMerchant = function (savedMerchant) {
	  	//alert("chooseSavedMerchant : "+savedMerchant.billPaymentMerchant.name);
	  	//$scope.myPopup.close();
	  	$scope.modalFromPaymentList.hide();
	  	var billerPreferences = "";
	  	
     	for(var i = 0; i < dataBiller.length; i++){
    		if (dataBiller[i]["id"] == savedMerchant.billPaymentMerchant.id){
    			billerPreferences = dataBiller[i]["billerPreferences"];
    			break;
    		}
    	}  
     	
	  	billpaymentModel.setBillpaymentMerchantType(savedMerchant.billPaymentMerchant.name);
		billpaymentModel.setSubscriberNoSavedMerchant(savedMerchant.subcriberNo);
		$scope.showDetailInput("chooseSavedMerchant", billerPreferences);
  };
  
  $scope.chooseBiller = function (biller) {
	  	//alert("chooseBiller : "+biller);
	  	//$scope.myPopup.close();

	    if (biller.id == "showMoreBiller"){
	    	$scope.openPopupAllBillerList();
	    }else{
	    	$scope.modalAllBillerList.hide();
		  	var billerPreferences = biller.billerPreferences;
		  	//alert(JSON.stringify($scope.biller.selected));
		  	billpaymentModel.setBillpaymentMerchantType(biller.name);
			billpaymentModel.setSubscriberNoSavedMerchant("");
			$scope.showDetailInput("chooseBiller", billerPreferences);
		}
  };
  
  /*$scope.chooseFavBiller = function () {
		billpaymentModel.setSubscriberNoSavedMerchant("");
		$scope.showDetailInput("chooseFavBiller");
  };*/
  
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
  	};

/*  $scope.popupSelectBiller = function (param) {
	  popupSelectBiller(param);
  };*/
  
  $scope.showDetailInput = function (type,billerPreferences) {
	    var billerType = "";
	    var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
	    
	    if ((type == "chooseSavedMerchant" || type == "chooseBiller") && billerPreferences != null){
	    	billpaymentModel.setBillerPreferences(billerPreferences);
		    billerType = billerPreferences["billerType"];
		    
	  	}else{
	  		alert("Unknown Biller");
	  		$scope.doClearReset();
	  	}
	    
	    //alert(billpaymentModel.getBillerPreferences()["billerType"]);
	 	//alert(JSON.stringify(billerPreferences));
	    //alert("billerType :"+billerType);
	    
	    if (billerType != null){
	    	$state.go('app.billerType'+billerType);
	    }else{
	    	alert("Unknown Biller");
	    	return false;
	    }
	    
  };
  
	/*  $scope.toggleTab = function(s){
  		$scope.tab = s.url;
  		$scope.current = s.name;
  		window.location.href = "#/app/payPurchase";
  		return false;
  	}; */
  	
  	/*$rootScope.$watch('refreshMenuBillpay', function () {
  		if (billpaymentModel.getSubscriberNoSavedMerchant() == null || billpaymentModel.getSubscriberNoSavedMerchant() == ""){
			$scope.biller.selected = jsonBillerFav;
		}else{
		    $scope.savedMerchant.selected = merchantList;	
		}
		$scope.$apply();
		$rootScope.refreshMenuBillpay = "OFF";
  	});*/
  	/*$rootScope.$watch('refreshMenuBillpay', function(newVal, oldVal){
		if (billpaymentModel.getSubscriberNoSavedMerchant() == null || billpaymentModel.getSubscriberNoSavedMerchant() == ""){
			$scope.biller.selected = jsonBillerFav;
		}else{
		    $scope.savedMerchant.selected = merchantList;	
		}
		$scope.$apply();
		$rootScope.refreshMenuBillpay = "OFF";
	},true);*/
  	
})


.controller('BillpayDetailType1Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $timeout, $window, billpaymentModel, $ionicLoading) {
	//alert("BillpayDetailType1Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
    var billerType = billerPreferences["billerType"];
	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["paymentSubscriberNoKey"]));
  	var nameButton = $translate.instant('purchasePayment_nameRetrieve');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];
  	
	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();

	$scope.visibleInqInput = "true";
	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}
  	
  	viewTextOrTel($scope,isInquiryOnConfirm);
  	
  	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	document.getElementById('buttonRetrieveBp').value = nameButton;
	
	/*--------------------------------------------------------------------------------------*/

	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
    };
	
  	$scope.inquiryBillPay = function () {

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
  			// hapus localStorage and goTo Welcome html
  			clearSessionClient();
  		} else {
  		
	  		var billerPreferences = billpaymentModel.getBillerPreferences();
	  		var billerType = billerPreferences["billerType"];
	  		var inqValidation = {};
	  		inqValidation = billpayInquiryValidation($scope, $translate,billerType,billerPreferences);
	  		//alert(JSON.stringify(inqValidation));
	  		//alert("response : "+inqValidation["response"] + " | message : "+inqValidation["message"]);
	  		
	  		if (inqValidation["response"] == "error"){
	  			alert(inqValidation["message"]);
	  		}else{
	  			
	  			var newdata = {};	
	  			try {
	  	  			newdata['ipassport'] = userStorageMap.ipassport;
					newdata['billPaymentMerchantInputed'] = document.getElementById('subscriberNo').value;
					newdata['idbillPay'] = billerPreferences["id"];
					newdata['displayType'] = billerType;
					newdata['lang'] = window.localStorage.getItem("lang");
	  			} catch(e) {}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  		  });
	  		  $http.post(ipaddress+'/rest/billPaymentMerchantV2/inquiryBillPay',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide(); 	
		        	 if (data != null){
				    		if (data.responseCode == "01"){
								alert(data.responseMessage);
					    	} else if (data.responseCode == "00"){
					    		
									if(data.paymentInfo != null) {
					    				if (data.additionalDataPrivate != null){
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo+" & additionalDataPrivate :"+data.additionalDataPrivate);		
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment&param="+data[0].additionalDataPrivate;	
					    				}else{
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo);
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment";
					    				}
					    			} else {
									
					    				document.getElementById('billingInfo').value = data.billingInfo;
					    				document.getElementById('displayString').value = data.displayString;
					    				document.getElementById('customerName').value = data.customerName;
					    				document.getElementById('vaInputMode').value = data.vaInputMode;
									
					    				constructDisplayList(data.displayList);	
					    				viewAfterInquiry($scope);
					    				
					    				if(data.vaInputMode == "OPEN" || data.vaInputMode == "MINIMUM"){
						    				$scope.visibleAmountVa = "true";
						    				
					    					document.getElementById('amount').value = "0";
					    					if(data.vaInputMode == "MINIMUM"){
					    						document.getElementById('billAmount').value = data.billAmount;
					    					}else{
					    						document.getElementById('billAmount').value = "0";
					    					} 
					    				}else{
					    					document.getElementById('amount').value = data.billAmount;
					    					$scope.amount = data.billAmount;
					    					document.getElementById('billAmount').value = data.billAmount; 
					    				}
					    				
					    				if (billerPreferences["inquiryTypeFooter"] =="1"){
					    					showFooter($scope,$translate,billerPreferences);
					    				}else{
						    				$scope.visibleDescription = "true";
					    				}
	
					    				billpayST($scope,$translate);	
					    				$scope.$apply();    				
					    			}
								
							//alert("Response : "+JSON.stringify(data));
						} else {
							alert(data.responseMessage);
						}
		        	 }else{
		        		 alert("Response Null");
	    				 $state.go('app.payPurchase');
		        		 return false;
		        	 }
				    	
		         }).error(function(){
		        	 	$ionicLoading.hide();
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
			     });
	  		  
	  			}
  			}
	  	};
	
})

.controller('BillpayDetailType10Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, $timeout, $window, billpaymentModel, $ionicLoading) {
	//alert("BillpayDetailType1Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);
	
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
    var billerType = billerPreferences["billerType"];
	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["paymentSubscriberNoKey"]));
  	var nameButton = $translate.instant('purchasePayment_nameRetrieve');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();

	$scope.visibleInqInput = "true";
	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}
  	
  	viewTextOrTel($scope,isInquiryOnConfirm);
  	
  	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	document.getElementById('buttonRetrieveBp').value = nameButton;


	var areaCodeList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.GenericParamJson);
	var areaCode = JSON.parse(areaCodeList.areaCode).areaCodeList;

	var defaultAreaOption =$translate.instant('purchasePayment_defaultAreaOption'); 
	
		var jsonArr = [];
		var jsonArea = [];

		for (var i = 0; i < areaCode.length; i++) {
			jsonArr.push({
				id: areaCode[i]["code"],
				label: areaCode[i]["name"]
			});
		}
		
		//alert(JSON.stringify(jsonArr));
		
		 if (jsonArr.length > 1){
			 	jsonArea.push({
					id: "",
					label: defaultAreaOption
				});
		   	}
		 
	    for(var i = 0; i < jsonArr.length; i++){
	    	jsonArea.push({
				id: jsonArr[i].id,
				label: jsonArr[i].label
			});
	    }
	    
		$scope.areaCodeObject = jsonArea;
		$scope.areaCode = jsonArea[0].id;		
	
	/*--------------------------------------------------------------------------------------*/

	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
    };
	
  	$scope.inquiryBillPay = function () {

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
  			// hapus localStorage and goTo Welcome html
  			clearSessionClient();
  		} else {
  		
	  		var billerPreferences = billpaymentModel.getBillerPreferences();
	  		var billerType = billerPreferences["billerType"];
	  		var inqValidation = {};
	  		inqValidation = billpayInquiryValidation($scope, $translate,billerType,billerPreferences);
	  		//alert(JSON.stringify(inqValidation));
	  		//alert("response : "+inqValidation["response"] + " | message : "+inqValidation["message"]);
	  		
	  		if (inqValidation["response"] == "error"){
	  			alert(inqValidation["message"]);
	  		}else{
	  			
	  			var newdata = {};	
	  			try {
	  	  			newdata['ipassport'] = userStorageMap.ipassport;
					newdata['billPaymentMerchantInputed'] = document.getElementById('subscriberNo').value;
					newdata['idbillPay'] = billerPreferences["id"];
					newdata['displayType'] = billerType;
					newdata['areaCode'] = $scope.areaCode;
					newdata['billerCode'] = billerPreferences["code"];
					newdata['lang'] = window.localStorage.getItem("lang");
	  			} catch(e) {}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
	  		 	template: 'Loading...',
	  	        animation: 'fade-in',
	  	        showBackdrop: true,
	  	        maxWidth: 200,
	  	        showDelay: 0
	  		  });
	  		  $http.post(ipaddress+'/rest/billPaymentMerchantV2/inquiryBillPay',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide(); 	
		        	 if (data != null){
				    		if (data.responseCode == "01"){
								alert(data.responseMessage);
					    	} else if (data.responseCode == "00"){
					    		
									if(data.paymentInfo != null) {
					    				if (data.additionalDataPrivate != null){
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo+" & additionalDataPrivate :"+data.additionalDataPrivate);		
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment&param="+data[0].additionalDataPrivate;	
					    				}else{
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo);
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment";
					    				}
					    			} else {
									
					    				document.getElementById('billingInfo').value = data.billingInfo;
					    				document.getElementById('displayString').value = data.displayString;
					    				document.getElementById('customerName').value = data.customerName;
					    				document.getElementById('vaInputMode').value = data.vaInputMode;
									
					    				constructDisplayList(data.displayList);	
					    				viewAfterInquiry($scope);
					    				
					    				if(data.vaInputMode == "OPEN" || data.vaInputMode == "MINIMUM"){
						    				$scope.visibleAmountVa = "true";
						    				
					    					document.getElementById('amount').value = "0";
					    					if(data.vaInputMode == "MINIMUM"){
					    						document.getElementById('billAmount').value = data.billAmount;
					    					}else{
					    						document.getElementById('billAmount').value = "0";
					    					} 
					    				}else{
					    					document.getElementById('amount').value = data.billAmount;
					    					$scope.amount = data.billAmount;
					    					document.getElementById('billAmount').value = data.billAmount; 
					    				}
					    				
					    				if (billerPreferences["inquiryTypeFooter"] =="1"){
					    					showFooter($scope,$translate,billerPreferences);
					    				}else{
						    				$scope.visibleDescription = "true";
					    				}
	
					    				billpayST($scope,$translate);	
					    				$scope.$apply();    				
					    			}
								
							//alert("Response : "+JSON.stringify(data));
						} else {
							alert(data.responseMessage);
						}
		        	 }else{
		        		 alert("Response Null");
	    				 $state.go('app.payPurchase');
		        		 return false;
		        	 }
				    	
		         }).error(function(){
		        	 	$ionicLoading.hide();
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
			     });
	  		  
	  			}
  			}
	  	};
	
})

.controller('BillpayDetailType2Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel,$ionicLoading) {
	//alert("BillpayDetailType2Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);

	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
	var billerType = billerPreferences["billerType"];
  	var nameSaveToBP = $translate.instant('purchasePayment_nameSaveToBP');	
  	var subscriberNoKeyLabel = $translate.instant('purchasePayment_nameSubscriber');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);
  	
	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	$scope.numPatternDesc = loadNumPatternDesc($translate,billerPreferences);
	
	if (billerPreferences["inquiryTypeFooter"] =="1"){
		showFooter($scope,$translate,billerPreferences);
	}
	
	billpayST($scope,$translate);
	

	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};	
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
  	};

})

.controller('BillpayDetailType3Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel,$ionicLoading) {
	//alert("BillpayDetailType3Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);

	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
  	var nameSaveToBP = $translate.instant('purchasePayment_nameSaveToBP');	
  	var subscriberNoKeyLabel = $translate.instant('purchasePayment_nameSubscriber');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
	
	loadDataAccNumber($scope,$translate);
	loadBillPeriod($scope, $translate);
	
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);
  	
	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	$scope.numPatternDesc = loadNumPatternDesc($translate,billerPreferences);
	if (billerPreferences["inquiryTypeFooter"] =="1"){
		showFooter($scope,$translate,billerPreferences);
	}
	billpayST($scope,$translate);
	

	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};

	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
  	};

})

.controller('BillpayDetailType4Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel, $ionicLoading) {
	//alert("BillpayDetailType4Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
  	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["paymentSubscriberNoKey"]));
  	var nameButton = $translate.instant('purchasePayment_nameRetrieve');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
	
  	$scope.visibleInqInput = "true";
  	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);

  	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	document.getElementById('buttonRetrieveBp').value = nameButton;
	

	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
 	};

	
	$scope.inquiryBillPay = function () {

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
			// hapus localStorage and goTo Welcome html
			clearSessionClient();
		} else {
		
	  		var billerPreferences = billpaymentModel.getBillerPreferences();
	  		var billerType = billerPreferences["billerType"];
	  		var inqValidation = {};
	  		inqValidation = billpayInquiryValidation($scope, $translate,billerType,billerPreferences);
	  		//alert(JSON.stringify(inqValidation));
	  		//alert("response : "+inqValidation["response"] + " | message : "+inqValidation["message"]);
	  		
	  		if (inqValidation["response"] == "error"){
	  			alert(inqValidation["message"]);
	  		}else{
	  			
	  			var newdata = {};	
	  			try {
	  	  			newdata['ipassport'] = userStorageMap.ipassport;
					newdata['billPaymentMerchantInputed'] = document.getElementById('subscriberNo').value;
					newdata['idbillPay'] = billerPreferences["id"];
					newdata['displayType'] = billerType;
					newdata['lang'] = window.localStorage.getItem("lang");
	  			} catch(e) {}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
		  		 	template: 'Loading...',
		  	        animation: 'fade-in',
		  	        showBackdrop: true,
		  	        maxWidth: 200,
		  	        showDelay: 0
		  	  });	
	  		  $http.post(ipaddress+'/rest/billPaymentMerchantV2/inquiryBillPay',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide(); 		
		        	 if (data != null){
				    		if (data.responseCode == "01"){
								alert(data.responseMessage);
					    	} else if (data.responseCode == "00"){
					    		
						    		var redirect="";
					    			var custBufferBox="";
					    			var totalDiv=0;
					    			var sumCharges=0;
					    			//var bufferBoxes="";
					    			
					    			if(data.paymentInfo != null){	
					    				alert("plnErrorPage :"+data.paymentInfo);
					    				//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo;
					    			}else{
					    				for(var i=1; i <= 1 ;i++){
					    					//bufferBoxes += "<tr><td><input  type='hidden' name='listPayment' value='"+data.billPriod+"'/><input type='hidden' name='displayAmount' value='"+data.billAmount+"' >";
					    					//bufferBoxes += "<li><td>"+data.billPriod+"</td><td> - IDR "+ data.billAmount +"</tr><br>";
					    					//bufferBoxes += "<li><td>&nbsp;</td><td> - IDR "+data.billAmount+"</tr><br>";
					    					//ini ngambil bill period yang pertama aja, karena blom nemu case multiple bill untuk mobile
					    					document.getElementById('billPeriod').value = data.billPriod;
					    					totalDiv+=data.billAmount;
					    					sumCharges+=1;
					    				}
					    				
					    				$scope.totalDiv = "IDR "+new NumberFormat(totalDiv).toFormatted();
					    				$scope.customerName = data[0].customerName;
					    				document.getElementById("customerName").value = data[0].customerName;
					    				document.getElementById("billingInfo").value = data[0].billingInfo;
					    				document.getElementById("amount").value = totalDiv;
					    				$scope.amount = totalDiv;
					    				document.getElementById("billAmount").value = totalDiv;
					    				document.getElementById("variableBankCharges").value = sumCharges;
					    				
					    				viewAfterInquiry($scope);
					    				$scope.visibleAdditionalAfterInquiry = "true";
					    				
					    				if (billerPreferences["inquiryTypeFooter"] =="1"){
					    					showFooter($scope,$translate,billerPreferences);
					    				}else{
						    				$scope.visibleDescription = "true";
					    				}
					    				
					    				billpayST($scope,$translate);	  
					    				$scope.$apply();
					    			}
								
							//alert("Response : "+JSON.stringify(data));
						} else {
							alert(data.responseMessage);
						}
		        	 }else{
		        		 alert("Response Null");
	    				 $state.go('app.payPurchase');
		        		 return false;
		        	 }
				    	
		         }).error(function(){
		        	 	$ionicLoading.hide(); 	
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
			     });
	  		  
	  			}
			}
	  	};
})

.controller('BillpayDetailType5Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel, $ionicLoading) {
	//alert("BillpayDetailType5Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);


	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
  	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["paymentSubscriberNoKey"]));
  	var nameButton = $translate.instant('purchasePayment_nameRetrieve');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
	
	$scope.visibleInqInput = "true";
	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);

  	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	document.getElementById('buttonRetrieveBp').value = nameButton;
	

	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
  	};	

	
	$scope.inquiryBillPay = function () {

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
			// hapus localStorage and goTo Welcome html
			clearSessionClient();
		} else {
		
	  		var billerPreferences = billpaymentModel.getBillerPreferences();
	  		var billerType = billerPreferences["billerType"];
	  		var inqValidation = {};
	  		inqValidation = billpayInquiryValidation($scope, $translate,billerType,billerPreferences);
	  		//alert(JSON.stringify(inqValidation));
	  		//alert("response : "+inqValidation["response"] + " | message : "+inqValidation["message"]);
	  		
	  		if (inqValidation["response"] == "error"){
	  			alert(inqValidation["message"]);
	  		}else{
	  			
	  			var newdata = {};	
	  			try {
	  	  			newdata['ipassport'] = userStorageMap.ipassport;
					newdata['billPaymentMerchantInputed'] = document.getElementById('subscriberNo').value;
					newdata['idbillPay'] = billerPreferences["id"];
					newdata['displayType'] = billerType;
					newdata['lang'] = window.localStorage.getItem("lang");
	  			} catch(e) {}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
		  		 	template: 'Loading...',
		  	        animation: 'fade-in',
		  	        showBackdrop: true,
		  	        maxWidth: 200,
		  	        showDelay: 0
		  	  });		
	  		  $http.post(ipaddress+'/rest/billPaymentMerchantV2/inquiryBillPay',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide(); 		
	
		        	 if (data != null){
				    		if (data.responseCode == "01"){
								alert(data.responseMessage);
					    	} else if (data.responseCode == "00"){
					    		
						    		var vaType = data.vaInputMode;
									
						    		if(data.paymentInfo != null){
						    			alert("plnErrorPage :"+data.paymentInfo);
						    			//window.location="<% out.print(plnErrorPage); %>&message="+data.paymentInfo;
						    		}else {
						    			if(data.billAmount != "0.0"){
						    				vaType="close";							
						    			}else if(data.billAmount == "0.0"){
						    				vaType="open";
						    			}
						    			document.getElementById('vaInputMode').value = vaType;
						    			
						    			if(vaType == "open"){
						    				$scope.visibleAmountVa = "true";
						    			}else if(vaType == "close"){
		
						    				$scope.visibleCloseAmount = "true";
						    				var bAmount = data.billAmount;
						    				if (bAmount == null) bAmount ="0.0";
						    				$scope.bAmount = bAmount;
						    				
					    					document.getElementById('amount').value = bAmount;
					    					$scope.amount = bAmount;
					    					document.getElementById('billAmount').value = bAmount;		
						    			}else if(vaType == "openMinimum"){
		
						    				$scope.visibleAmountVa = "true";
						    				
						    				var bAmount = data.billAmount;
						    				if (bAmount == null) bAmount ="0.0";
		
					    					document.getElementById('amountVa').value = bAmount;
						    				document.getElementById('billAmount').value = bAmount;
						    			}
						    			
						    			document.getElementById('billPeriod').value = data.billPeriod;	
						    			document.getElementById('billingInfo').value = data.billingInfo;	
						    			document.getElementById('displayString').value = data.displayString;	
						    			
						    			viewAfterInquiry($scope);
										
										constructDisplayList(data.displayList);	
										
										if (billerPreferences["inquiryTypeFooter"] =="1"){
					    					showFooter($scope,$translate,billerPreferences);
					    				}else{
						    				$scope.visibleDescription = "true";
					    				}
					    				
										billpayST($scope,$translate);	  
					    				$scope.$apply();
									
						    		}
								
							//alert("Response : "+JSON.stringify(data));
						} else {
							alert(data.responseMessage);
						}
		        	 }else{
			        	 $ionicLoading.hide(); 		
		        		 alert("Response Null");
	    				 $state.go('app.payPurchase');
		        		 return false;
		        	 }
				    	
		         }).error(function(){
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
			     });
	  		  
	  			}
			}
	  	};
})

.controller('BillpayDetailType6Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel,$ionicLoading) {
	//alert("BillpayDetailType6Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
  	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["purchaseSubscriberNoKey"]));
  	var nameSaveToBP = $translate.instant('purchasePayment_nameSaveToBP');	
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
		
	//clearAccountInput();

	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);

	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	$scope.numPatternDesc = loadNumPatternDesc($translate,billerPreferences);
	
	fillDenom($scope, $translate, billerPreferences);
	
	if (billerPreferences["inquiryTypeFooter"] =="1"){
		showFooter($scope,$translate,billerPreferences);
	}
	
	billpayST($scope,$translate);
	
	$scope.$apply();

	
	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
  	};

	
	$scope.checkPurchaseCode = function () {
		var isUsingPackageCode = billerPreferences["isUsingPackageCode"];
		var isMerchantWithSubProductCode = billerPreferences["isMerchantWithSubProductCode"];
		var denominationList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.DenominationListJson);
		denominationList = denominationList.denominationList;
		//alert("denominationList :"+ JSON.stringify(denominationList));
		var codeBillPay = billerPreferences["code"];
		var denomId = $scope.denom;
		
		if (isUsingPackageCode == "1" || isMerchantWithSubProductCode == "1"){
			for (var i = 0; i < denominationList.length; i++) {
				if (denominationList[i]["type"] == codeBillPay+"_denom"){
					if (denominationList[i]["code"] == denomId){
						if (isUsingPackageCode == "1"){
							$scope.packageCode = denomId;
						}else if (isMerchantWithSubProductCode == "1"){
							$scope.subProductCode = denomId;
						}
						$scope.amount = denominationList[i]["filter"];
						break;
					}
				}
			}
		}else{	
			try {
				$scope.amount = denomId.trim();
			} catch(e) {
				$scope.amount = denomId;
			}
		}
	};
})

.controller('BillpayDetailType7Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel, $ionicLoading) {
	//alert("BillpayDetailType7Ctrl")

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
  	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["purchaseSubscriberNoKey"]));
  	var nameButton = $translate.instant('purchasePayment_nameInformation');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
	
	$scope.visibleInqInput = "true";
	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);

	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	$scope.merchantCurrency = billerPreferences["currency"];	
	document.getElementById('buttonRetrieveBp').value = nameButton;	
	

	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
 	};

	
	$scope.inquiryBillPay = function () {

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
			// hapus localStorage and goTo Welcome html
			clearSessionClient();
		} else {
		
	  		var billerPreferences = billpaymentModel.getBillerPreferences();
	  		var billerType = billerPreferences["billerType"];
	  		var inqValidation = {};
	  		inqValidation = billpayInquiryValidation($scope, $translate,billerType,billerPreferences);
	  		//alert(JSON.stringify(inqValidation));
	  		//alert("response : "+inqValidation["response"] + " | message : "+inqValidation["message"]);
	  		
	  		if (inqValidation["response"] == "error"){
	  			alert(inqValidation["message"]);
	  		}else{
	  			
	  			var newdata = {};	
	  			try {
	  	  			newdata['ipassport'] = userStorageMap.ipassport;
					newdata['billPaymentMerchantInputed'] = document.getElementById('subscriberNo').value;
					newdata['idbillPay'] = billerPreferences["id"];
					newdata['displayType'] = billerType;
					newdata['lang'] = window.localStorage.getItem("lang");
					newdata['amount'] = document.getElementById('amountInput').value;
	  			} catch(e) {}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
		  		 	template: 'Loading...',
		  	        animation: 'fade-in',
		  	        showBackdrop: true,
		  	        maxWidth: 200,
		  	        showDelay: 0
		  	  });		
	  		  $http.post(ipaddress+'/rest/billPaymentMerchantV2/inquiryBillPay',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide(); 		
		        	 if (data != null){
				    		if (data.responseCode == "01"){
								alert(data.responseMessage);
					    	} else if (data.responseCode == "00"){
					    		
						    		if(data.paymentInfo != null) {
					    				if (data.additionalDataPrivate != null){
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo+" & additionalDataPrivate :"+data.additionalDataPrivate);		
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment&param="+data[0].additionalDataPrivate;	
					    				}else{
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo);
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment";
					    				}
					    			} else {
					    				var cekBillAmount = data.billAmount;
					    				if(cekBillAmount!=null){
					    					document.getElementById('amountId').value = data.billAmount;
					    					$scope.amount = data.billAmount;;
					    				}
					    				
					    				document.getElementById('billingInfo').value = data.billingInfo;
					    				document.getElementById('displayString').value = data.displayString;
					    			}
					    			
					    			viewAfterInquiry($scope);
				    				
				    				if (billerPreferences["inquiryTypeFooter"] =="1"){
				    					showFooter($scope,$translate,billerPreferences);
				    				}
				    				
				    				constructDisplayList(data.displayList);	
				    				
				    				billpayST($scope,$translate);	  
				    				$scope.$apply();
									
								
							//alert("Response : "+JSON.stringify(data));
						} else {
							alert(data.responseMessage);
						}
		        	 }else{
		        		 alert("Response Null");
	    				 $state.go('app.payPurchase');
		        		 return false;
		        	 }
				    	
		         }).error(function(){
		        	 	$ionicLoading.hide(); 	
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
			     });
	  		  
	  			}
			}
	  	};
})

.controller('BillpayDetailType8Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel, $ionicLoading) {
	//alert("BillpayDetailType8Ctrl")

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["purchaseSubscriberNoKey"]));
  	var nameButton = $translate.instant('purchasePayment_nameInformation');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
	
	$scope.visibleInqInput = "true";
	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);

	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	document.getElementById('buttonRetrieveBp').value = nameButton;	
	

	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}
	
	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
  	};
	
	$scope.inquiryBillPay = function () {

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
			// hapus localStorage and goTo Welcome html
			clearSessionClient();
		} else {
		
	  		var billerPreferences = billpaymentModel.getBillerPreferences();
	  		var billerType = billerPreferences["billerType"];
	  		var inqValidation = {};
	  		inqValidation = billpayInquiryValidation($scope, $translate,billerType,billerPreferences);
	  		//alert(JSON.stringify(inqValidation));
	  		//alert("response : "+inqValidation["response"] + " | message : "+inqValidation["message"]);
	  		
	  		if (inqValidation["response"] == "error"){
	  			alert(inqValidation["message"]);
	  		}else{
	  			
	  			var newdata = {};	
	  			try {
	  	  			newdata['ipassport'] = userStorageMap.ipassport;
					newdata['billPaymentMerchantInputed'] = document.getElementById('subscriberNo').value;
					newdata['idbillPay'] = billerPreferences["id"];
					newdata['displayType'] = billerType;
					newdata['lang'] = window.localStorage.getItem("lang");
	  			} catch(e) {}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
		  		 	template: 'Loading...',
		  	        animation: 'fade-in',
		  	        showBackdrop: true,
		  	        maxWidth: 200,
		  	        showDelay: 0
		  	  });	
	  		  $http.post(ipaddress+'/rest/billPaymentMerchantV2/inquiryBillPay',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide();
		        	 if (data != null){
				    		if (data.responseCode == "01"){
								alert(data.responseMessage);
					    	} else if (data.responseCode == "00"){
					    		
						    		if(data.paymentInfo != null) {
					    				if (data.additionalDataPrivate != null){
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo+" & additionalDataPrivate :"+data.additionalDataPrivate);		
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment&param="+data[0].additionalDataPrivate;	
					    				}else{
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo);
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment";
					    				}
					    			} else {
					    				var cekBillAmount = data.billAmount;
					    				if(cekBillAmount!=null){
					    					document.getElementById('amountId').value = data.billAmount;
					    					$scope.amount = data.billAmount;;
					    				}
					    				
					    				document.getElementById('billingInfo').value = data.billingInfo;
					    				document.getElementById('displayString').value = data.displayString;
					    			}
					    			
					    			viewAfterInquiry($scope);
				    				
				    				if (billerPreferences["inquiryTypeFooter"] =="1"){
				    					showFooter($scope,$translate,billerPreferences);
				    				}
				    				
				    				constructDisplayList(data.displayList);	
				    				
				    				billpayST($scope,$translate);	  
				    				$scope.$apply();
									
								
							//alert("Response : "+JSON.stringify(data));
						} else {
							alert(data.responseMessage);
						}
		        	 }else{
		        		 $ionicLoading.hide();
		        		 alert("Response Null");
	    				 $state.go('app.payPurchase');
		        		 return false;
		        	 }
				    	
		         }).error(function(){
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
			     });
	  		  
	  			}
			}
	  	};
})


.controller('BillpayDetailType9Ctrl', function($scope, $state, $ionicModal, $routeParams, $http, $translate, billpaymentModel, $ionicLoading) {
	//alert("BillpayDetailType9Ctrl");

   	loadFontSize();

	billpaymentModel.setBillpayConfirmData(null);
	billpaymentModel.setBillpayConfirmOkData(null);

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billerPreferences = billpaymentModel.getBillerPreferences();
	var subscriberNoSavedMerchant = billpaymentModel.getSubscriberNoSavedMerchant();
  	var subscriberNoKeyLabel = $translate.instant(replaceSeparatedLabel(billerPreferences["purchaseSubscriberNoKey"]));
  	var nameButton = $translate.instant('purchasePayment_nameInformation');
  	var isInquiryOnConfirm = billerPreferences["isInquiryOnConfirm"];

	$scope.billpaymentMerchantType = billpaymentModel.getBillpaymentMerchantType();
	
	$scope.visibleInqInput = "true";
	
	loadDataAccNumber($scope,$translate);
  	if (billerPreferences["inquiryTypeHeader"] =="1"){
  		$scope.visibleAccNumber = "true";
	}

  	viewTextOrTel($scope,isInquiryOnConfirm);

	$scope.subscriberNoLabel = subscriberNoKeyLabel;
	$scope.subscriberNo = subscriberNoSavedMerchant;
	$scope.merchantCurrency = billerPreferences["currency"];	
	document.getElementById('buttonRetrieveBp').value = nameButton;	

	$scope.numPatternDesc = loadNumPatternDesc($translate,billerPreferences);
	fillDenom($scope, $translate, billerPreferences);	

	/*--------------------------------------------------------------------------------------*/
	$ionicModal.fromTemplateUrl('templates/template-popup/accountList.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modalAccountList = modal;
	});

	$scope.openPopupAccounttList = function() {
		$scope.modalAccountList.show();
	};

	$scope.closePopupAccountList = function() {
		$scope.modalAccountList.hide();
	};

	$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.modalAccountList.hide();
		chooseAccount(account);
	}

	$scope.doConfirmBillpaymentInput = function () {
		doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences,billpaymentModel,$ionicLoading);
	};
	
	$scope.checkSecurityTypeAssigner = function () {
		checkSecurityTypeAssigner($scope,$translate,$state);
	};
	
	$scope.cancelCheckSecurity = function () {
		cancelCheckSecurity($scope);
	};
	
	$scope.saveToBillPayList = function () {
		saveToBillPayList(billpaymentModel);
	};
	
	$scope.backToBillpay = function () {
  		doBackBillpayment($state);
 	};

	
	$scope.inquiryBillPay = function () {
		//alert("inquiryBillPay");

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
			// hapus localStorage and goTo Welcome html
			clearSessionClient();
		} else {
		
	  		var billerPreferences = billpaymentModel.getBillerPreferences();
	  		var billerType = billerPreferences["billerType"];
	  		var inqValidation = {};
	  		inqValidation = billpayInquiryValidation($scope, $translate,billerType,billerPreferences);
	  		//alert(JSON.stringify(inqValidation));
	  		//alert("response : "+inqValidation["response"] + " | message : "+inqValidation["message"]);
	  		
	  		if (inqValidation["response"] == "error"){
	  			alert(inqValidation["message"]);
	  		}else{
	  			
	  			var newdata = {};	
	  			try {
	  	  			newdata['ipassport'] = userStorageMap.ipassport;
					newdata['billPaymentMerchantInputed'] = document.getElementById('subscriberNo').value;
					newdata['idbillPay'] = billerPreferences["id"];
					newdata['displayType'] = billerType;
					newdata['lang'] = window.localStorage.getItem("lang");
					newdata['amount'] = document.getElementById('amountInput').value;
	  			} catch(e) {}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
		  		 	template: 'Loading...',
		  	        animation: 'fade-in',
		  	        showBackdrop: true,
		  	        maxWidth: 200,
		  	        showDelay: 0
		  	  });		
	  		  $http.post(ipaddress+'/rest/billPaymentMerchantV2/inquiryBillPay',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide(); 		
		        	 if (data != null){
				    		if (data.responseCode == "01"){
								alert(data.responseMessage);
					    	} else if (data.responseCode == "00"){
					    		
						    		if(data.paymentInfo != null) {
					    				if (data.additionalDataPrivate != null){
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo+" & additionalDataPrivate :"+data.additionalDataPrivate);		
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment&param="+data[0].additionalDataPrivate;	
					    				}else{
					    					alert("plnErrorPage paymentInfo:"+ data.paymentInfo);
					    					//window.location="<% out.print(plnErrorPage); %>&message="+data[0].paymentInfo+"&action=billPayment";
					    				}
					    			} else {
					    				/*var cekBillAmount = data.billAmount;
					    				if(cekBillAmount!=null){
					    					document.getElementById('amountId').value = data.billAmount;
					    					$scope.amount = data.billAmount;;
					    				}*/
					    				
					    				document.getElementById('billingInfo').value = data.billingInfo;
					    				document.getElementById('displayString').value = data.displayString;
					    				document.getElementById('forwardingInstitutionIdentificationCode').value = data.forwardingInstitutionIdentificationCode; //PLNPrepaid, edd butuh di echo balik
					    			}
					    			
					    			viewAfterInquiry($scope);
				    				
				    				if (billerPreferences["inquiryTypeFooter"] =="1"){
				    					showFooter($scope,$translate,billerPreferences);
				    				}
				    				
				    				constructDisplayList(data.displayList);	
				    				
				    				billpayST($scope,$translate);	  
				    				$scope.$apply();
									
								
							//alert("Response : "+JSON.stringify(data));
						} else {
							alert(data.responseMessage);
						}
		        	 }else{
		        		 alert("Response Null");
	    				 $state.go('app.payPurchase');
		        		 return false;
		        	 }
				    	
		         }).error(function(){
		        	 	$ionicLoading.hide(); 	
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
			     });
	  		  
	  			}
			}
	  	};

	$scope.checkPurchaseCode = function () {
		var isUsingPackageCode = billerPreferences["isUsingPackageCode"];
		var isMerchantWithSubProductCode = billerPreferences["isMerchantWithSubProductCode"];
		var denominationList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.DenominationListJson);
		denominationList = denominationList.denominationList;
		//alert("denominationList :"+ JSON.stringify(denominationList));
		var codeBillPay = billerPreferences["code"];
		var denomId = $scope.denom;
		
		if (isUsingPackageCode == "1" || isMerchantWithSubProductCode == "1"){
			for (var i = 0; i < denominationList.length; i++) {
				if (denominationList[i]["type"] == codeBillPay+"_denom"){
					if (denominationList[i]["code"] == denomId){
						if (isUsingPackageCode == "1"){
							$scope.packageCode = denomId;
						}else if (isMerchantWithSubProductCode == "1"){
							$scope.subProductCode = denomId;
						}
						$scope.amount = denominationList[i]["filter"];
						break;
					}
				}
			}
		}else{	
			try {
				$scope.amount = denomId.trim();
			} catch(e) {
				$scope.amount = denomId;
			}
		}
	};
})
		
//controller for billpayment confirm page
.controller('BillpaymentConfirmCtrl', function($scope, $state, $routeParams, $http, $translate, $compile, billpaymentModel,$cordovaDevice,$ionicPlatform, $ionicLoading) {
	//alert("BillpaymentConfirmCtrl");

   	loadFontSize();

		var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
		var data = billpaymentModel.getBillpayConfirmData();
		var billerPreferences = billpaymentModel.getBillerPreferences();
		var displayType = data.displayType;
		var confirmType = "";
		billpaymentModel.setBillpayConfirmOkData(null);
		
		if (displayType == "1" || displayType == "2" || displayType == "3" || displayType == "4" || displayType == "5"){
			confirmType = "payment";
		}else if (displayType == "6" || displayType == "7" || displayType == "8" || displayType == "9"){
			confirmType = "purchase";
		}else{
			alert("Unknown Billpayment Type");
	    	$state.go('app.payPurchase');
			return false;
		}
		

	    try {
			var transReferenceNumber = data.bpmTransRefNum;
		    //document.getElementById('transRefNum').value = transReferenceNumber;
	    	$scope.transRefNum = transReferenceNumber;
		    window.localStorage.setItem('transRefNum', transReferenceNumber);
		} catch(e) {}
	    
	    constructConfirmPage(data.confirmPage);
	    
	    if (data.securityTypeCode != null ){
			tokenInputGeneric(data.securityTypeCode, data.amountNumber, $scope, $compile,$translate);
		}else{
			alert("Error Token Type");
	    	$state.go('app.payPurchase');
			return false;
		}
	    
	    if(data.securityTypeCode == "0" || data.securityTypeCode=="2"){
	    	startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
		}
	
		/*--------------------------------------------------------------------------------------*/
	    $scope.simasCheckboxFunction = function () {
	    	simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading);
		};
	    
		$scope.smsCheckboxFunction = function () {
			smsCheckboxFunction($translate);
		};
	    
		$scope.reSendSMSToken = function () {
			reSendSMSToken($http, $translate,$ionicLoading);
		};
		
		$scope.backToBillpay = function () {
  			doBackBillpayment($state);
  		};

		
		//submit billpayment confirm page
		$scope.doSubmitConfirmBillpay = function () {
			//alert("doSubmitConfirmBillpay");

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
				// hapus localStorage and goTo Welcome html
				clearSessionClient();
			} else {
				var noError = "0";
				try {
					var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
				} catch(e) {}
				try {
					var savedBillpayList = billpaymentModel.getSaveToBillPayList();
				} catch(e) {}
				try {
					var securityTypeCode = window.localStorage.getItem("securityTypeCode");
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
				
				if (noError == "0"){
					var newdata = {};
					try {
						newdata['ipassport']=userStorageMap.ipassport;
					} catch(e) {}
					try {
						if (securityTypeCode == "1" || securityTypeCode == "2"){
							newdata['tokenInputed'] = document.getElementById('simasToken').value;
						}
						if (securityTypeCode == "0" || securityTypeCode == "2"){
							newdata['mPinInputed'] = document.getElementById('mPin').value;
						}
					} catch(e) {}
					try {
						newdata['savedBillpayList'] = savedBillpayList;
					} catch(e) {}
					try {
						newdata['securityTypeCode'] = securityTypeCode;
					} catch(e) {}
					
					var datajson=JSON.stringify(newdata);
					//console.debug('datajson:'+datajson);
					 $ionicLoading.show({
				  		 	template: 'Loading...',
				  	        animation: 'fade-in',
				  	        showBackdrop: true,
				  	        maxWidth: 200,
				  	        showDelay: 0
				  	  });
					$http.post(ipaddress+'/rest/billPaymentMerchantV2/'+confirmType,datajson)
			         .success(function(data) {
			        	 	$ionicLoading.hide();
					    	if (data != null){
		
					    		//alert(data.responseCode);
					    		if (data.responseCode == "01" || data.responseCode == "02" ||
						    		data.responseCode == "03" || data.responseCode == "04" ||
									data.responseCode == "05" || data.responseCode == "06" ||
									data.responseCode == "07" || data.responseCode == "08" ||
									data.responseCode == "09" || data.responseCode == "99"){
										alert(data.responseMessage);
	    								$state.go('app.payPurchase');
										return false;
					    		} else if (data.responseCode == "17"){
					    			try {
						    			if (securityTypeCode == "1" || securityTypeCode == "2"){
											document.getElementById('simasToken').value = "";
										}
										if (securityTypeCode == "0" || securityTypeCode == "2"){
											document.getElementById('mPin').value = "";
										}
					    			} catch(e) {}
					    			alert(data.responseMessage);
								} else if (data.responseCode == "00"){
									billpaymentModel.setBillpayConfirmOkData(data);
									
									if (data.savedMerchantList != null){
						 	    		window.localStorage.setItem('savedMerchantListNew', JSON.stringify(data.savedMerchantList));
						 	    	}
									
									$state.go('app.billpaymentResult');
								} else {
									try {
						    			if (securityTypeCode == "1" || securityTypeCode == "2"){
											document.getElementById('simasToken').value = "";
										}
										if (securityTypeCode == "0" || securityTypeCode == "2"){
											document.getElementById('mPin').value = "";
										}
					    			} catch(e) {}
									alert(data.responseMessage);
								}
							} else {
								alert("Response Null");
	    						$state.go('app.payPurchase');
								return false;
							}
					    	
				         }).error(function(){
				        	 	$ionicLoading.hide();
				        	 	alert("Server Error");
	    						$state.go('app.payPurchase');
				        	 	return false;
					     });
				}else{
					//alert("Please fill in the Token id ");
					return false;
				}
			}
		};
})

//controller for billpayment result page
.controller('BillpaymentResultCtrl', function($scope, $state,$timeout, $rootScope, $routeParams, $http, $translate, $compile, billpaymentModel, $ionicLoading) {
	//alert("BillpaymentResultCtrl");		
	
   	loadFontSize();

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
  	var nameButton = $translate.instant('autoDebet_registerAutoDebet_key');	
	var data = billpaymentModel.getBillpayConfirmOkData();
	//alert(JSON.stringify(data.resultPage));
	constructResultPage(data.resultPage);
    
	try {
		var autoDebetEnabled = data.autoDebetEnabled;
		//alert("autoDebetEnabled :"+autoDebetEnabled);
	} catch(e) {}


	try {
		$rootScope.showLogout = true;
		/*$timeout(function() {
			$rootScope.showLogout = false;
		}, 30000);*/
	} catch(e) {}		
	
	if (autoDebetEnabled == "true"){
 		constructGenericDisplay('resultList',"<div id='divConstructDisplay'><table border='0' width='100%' cellspacing='0'><br><hr></table></div>");
 		constructGenericDisplay('resultList',"<div id='divRegisterAutoDebet'><table border='0' width='100%' cellspacing='0'><input type='button' name='button' class='button button-block button-positive' id='registerAutoDebetButton' ng-click='registerAutoDebet();' /></table></div>");
		document.getElementById('registerAutoDebetButton').value = nameButton;	
		$compile(document.getElementById('resultList'))($scope);
		$scope.$apply();
	}	
	
	
	$scope.backToBillpay = function () {
		$rootScope.showLogout = false;
  		doBackBillpayment($state);
  	};

	
	//button for registerAutoDebet
	$scope.registerAutoDebet = function () {
			
		setTimeout(function(){
			setDoubleClickParam = 0;
		}, 3000);

		if(setDoubleClickParam == 0){
			setDoubleClickParam = 1;
		}else{
			return false;
		}
		
		//alert("registerAutoDebet");		
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Welcome html
			clearSessionClient();
		} else {
		
			try {
				var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
				var parameterAutoDebet = data.parameterAutoDebet;
				//alert("parameterAutoDebet :"+JSON.stringify(parameterAutoDebet));
			} catch(e) {}
			
			try {
				var elem = document.getElementById("divConstructDisplayAutodebet");
				elem.parentNode.removeChild(elem);
			} catch(e) {}
			
			if (parameterAutoDebet == "" || parameterAutoDebet.length =="0" || parameterAutoDebet == null || parameterAutoDebet == "undefined"){
				alert("Register AutoDebet Failed");
			}else{
				var newdata = {};
				try {
					newdata['ipassport']=userStorageMap.ipassport;
				} catch(e) {}
				try {
					newdata['lang'] = window.localStorage.getItem("lang");
				} catch(e) {}
				try {
					newdata['parameterAutoDebet']=parameterAutoDebet;
				} catch(e) {}
				
				var userStorageString = JSON.stringify(newdata);
		//	 	alert("userStorageString: " + userStorageString);
				 $ionicLoading.show({
			  		 	template: 'Loading...',
			  	        animation: 'fade-in',
			  	        showBackdrop: true,
			  	        maxWidth: 200,
			  	        showDelay: 0
			  	  });
				$http.post(ipaddress+'/rest/billPaymentMerchantV2/registerAutoDebet',userStorageString)
	        	.success(function(data) {
	        			$ionicLoading.hide();
				    	if (data != null){
				    		
				    		if (data.responseCode == "01"){
								alert(data.responseMessage); 
	
								constructDisplayArrayAutoDebet(data.resultAutoDebet, "1");
							} else if (data.responseCode == "00"){
								document.getElementById("registerAutoDebetButton").disabled = true;
								
								if (data.resultAutoDebetType == "dynamicBlock"){
									constructDisplayArrayAutoDebet(data.resultAutoDebet, "0");
								}else{
									constructDisplayArrayAutoDebet(data.resultAutoDebet, "1");
								}
							} else {
								alert(data.responseMessage);
							}
						} else {
							alert("Response Null");
	    					$state.go('app.payPurchase');
			        	 	return false;
						}
				    	
		        	}).error(function(){
		        		$ionicLoading.hide();
		        	 	alert("Server Error");
	    				$state.go('app.payPurchase');
		        	 	return false;
		        	});
				}
			}
		};
})
  
//untuk getters & setters
.factory('billpaymentModel', function () {    
    var billerPreferences = "";  
    var currentBpMenu = "";
    var subscriberNoSavedMerchant = "";
    var saveToBillPayList = "";
    var billpaymentMerchantType = "";
    var billpayConfirmData = "";
    var billpayConfirmOkData = "";

    return {
        getBillerPreferences: function () {
            return billerPreferences;
        },
        setBillerPreferences: function (newBillerPreferences) {
        	billerPreferences = newBillerPreferences;
        },
        
        getBillpaymentMerchantType: function () {
            return billpaymentMerchantType;
        },
        setBillpaymentMerchantType: function (newBillpaymentMerchantType) {
        	billpaymentMerchantType = newBillpaymentMerchantType;
        },
        
        getSubscriberNoSavedMerchant: function () {
            return subscriberNoSavedMerchant;
        },
        setSubscriberNoSavedMerchant: function (newSubscriberNo) {
        	subscriberNoSavedMerchant = newSubscriberNo;
        },
        
        getSaveToBillPayList: function () {
            return saveToBillPayList;
        },
        setSaveToBillPayList: function (newSaveToBillPayList) {
        	saveToBillPayList = newSaveToBillPayList;
        },
        
        getBillpayConfirmData: function () {
            return billpayConfirmData;
        },
        setBillpayConfirmData: function (newBillpayConfirmData) {
        	billpayConfirmData = newBillpayConfirmData;
        },
        
        getBillpayConfirmOkData: function () {
            return billpayConfirmOkData;
        },
        setBillpayConfirmOkData: function (newBillpayConfirmOkData) {
        	billpayConfirmOkData = newBillpayConfirmOkData;
        }
        
    };
})



.filter('propsFilter', function() {
	  return function(items, props) {
	    var out = [];

	    if (angular.isArray(items)) {
	      var keys = Object.keys(props);
	        
	      items.forEach(function(item) {
	        var itemMatches = false;

	        for (var i = 0; i < keys.length; i++) {
	          var prop = keys[i];
	          var text = props[prop].toLowerCase();
	          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
	            itemMatches = true;
	            break;
	          }
	        }

	        if (itemMatches) {
	          out.push(item);
	        }
	      });
	    } else {
	      // Let the output be the input untouched
	      out = items;
	    }

	    return out;
	  };
	})

;
