
//submit billpayment input page 
function doConfirmBillpaymentInput($scope, $state, $translate, $http, billerPreferences, billpaymentModel, $ionicLoading){
	//alert("doConfirmBillpaymentInput :"+billerPreferences["billerType"]);
	
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
	
		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
		var userPreference = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
		var billerType = billerPreferences["billerType"];
		billpaymentModel.setBillpayConfirmData(null);
	
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
	
		var confirmValidation = billpayConfirmValidation($scope, $translate, billerPreferences);
		
		if (confirmValidation["response"] == "error"){
			alert(confirmValidation["message"]);
		}else{
			var idbillPay = billerPreferences["id"];
			var accSelect = document.getElementById('accountNumberHidden').value; //$scope.accSelect;
			var userAmount = $scope.amount;
				try {
					userAmount = userAmount.trim();
				} catch(e) {}
				
				try {
					userAmount = (userAmount).toString();
				} catch(e) {}
			var subscriberNo = $scope.subscriberNo;
			
			var isUsingPackageCode = billerPreferences["isUsingPackageCode"];
			var isMerchantWithSubProductCode = billerPreferences["isMerchantWithSubProductCode"];
		
			var packageCode = "";
			var subProductCode = "";
			if (isUsingPackageCode == "1"){
				packageCode = $scope.packageCode;	
			}else if (isMerchantWithSubProductCode == "1"){
				subProductCode = $scope.subProductCode;
			}
			
			//alert("accSelect : "+ accSelect + " | userAmount : "+ userAmount +" | subscriberNo : "+subscriberNo +" | billerType : "+billerType+" | securityTypeCode : "+securityTypeCode);
			//alert("packageCode : "+ packageCode + " | subProductCode : "+ subProductCode);
			
			var confirmInputType = "";
			if (billerType == "1" || billerType == "2" || billerType == "3" || billerType == "4" || billerType == "5"){
				confirmInputType = "Payment";
			}else if (billerType == "6" || billerType == "7" || billerType == "8" || billerType == "9"){
				confirmInputType = "Purchase";
			}else{
				alert("Unknown Billpayment Type");
	    		$state.go('app.payPurchase');
				return false;
			}
			
			var newdata = {};
				// default data billpay confirmation
				try {
					newdata['ipassport'] = userStorage.ipassport;
				} catch(e) {}
				try {
					newdata['lang'] = window.localStorage.getItem("lang");
				} catch(e) {}
				try {
					newdata['idbillPay'] = billerPreferences["id"];
				} catch(e) {}
				try {
					newdata['displayType'] = billerType;
				} catch(e) {}
				try {
					newdata['accSelect'] = accSelect;
				} catch(e) {}
				try {
					newdata['amount'] = userAmount;
				} catch(e) {}
				try {
					newdata['subscriberNoInput'] = subscriberNo;
				} catch(e) {}
				try {
					newdata['descInput'] = document.getElementById('description').value;
				} catch(e) {}
				try {
					newdata['securityTypeCode'] = securityTypeCode;
				} catch(e) {}
			
			if (billerType == "1"){
	  				try {
	  					newdata['billAmount'] = document.getElementById('billAmount').value;
	  				} catch(e) {}
	  				try {
	  					newdata['variableBankCharges'] = document.getElementById('variableBankCharges').value;
	  				} catch(e) {}
			}else if (billerType == "2"){
					// default data billpay confirmation
			}else if (billerType == "3"){
					try {
						newdata['billPeriod'] = document.getElementById('billPeriod').value;
					} catch(e) {}
			}else if (billerType == "4"){
	  				try {
						newdata['billAmount'] = document.getElementById('billAmount').value;
					} catch(e) {}
					try {
						newdata['variableBankCharges'] = document.getElementById('variableBankCharges').value;
					} catch(e) {}
					try {
						newdata['billPeriod'] = document.getElementById('billPeriod').value;
					} catch(e) {}
			}else if (billerType == "5"){
	  				try {
						newdata['billAmount'] = document.getElementById('billAmount').value;
					} catch(e) {}
					try {
						newdata['variableBankCharges'] = document.getElementById('variableBankCharges').value;
					} catch(e) {}
					try {
						newdata['billPeriod'] = document.getElementById('billPeriod').value;
					} catch(e) {}
			}else if (billerType == "6"){
	  				try {
						newdata['denomInput'] = userAmount;
					} catch(e) {}
					
					try {
						if (isUsingPackageCode == "1"){
							newdata['packageCode'] = packageCode;
						}else if (isMerchantWithSubProductCode == "1"){
							newdata['subProductCode'] = subProductCode;
						}	
					} catch(e) {}
					
					
			}else if (billerType == "7"){
	  				try {
	  					newdata['variableBankCharges'] = document.getElementById('variableBankCharges').value;
	  				} catch(e) {}
			}else if (billerType == "8"){
	  				try {
	  					newdata['variableBankCharges'] = document.getElementById('variableBankCharges').value;
	  				} catch(e) {}
			}else if (billerType == "9"){
  				try {
  					newdata['variableBankCharges'] = document.getElementById('variableBankCharges').value;
  					newdata['forwardingInstitutionIdentificationCode'] = document.getElementById('forwardingInstitutionIdentificationCode').value;
  				} catch(e) {}
			}
				
	  		  	var datajson=JSON.stringify(newdata);
	  		  	//alert(datajson);
	  		  $ionicLoading.show({
				 	template: 'Loading...',
			        animation: 'fade-in',
			        showBackdrop: true,
			        maxWidth: 200,
			        showDelay: 0
			    });
	  		  	$http.post(ipaddress+'/rest/billPaymentMerchantV2/doConfirmBillPay'+confirmInputType,datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide();	
		        	 if (data != null){
						if (data.responseCode == "01" || data.responseCode == "02" ||
							data.responseCode == "03" || data.responseCode == "04" ||
							data.responseCode == "05" || data.responseCode == "06" ||
							data.responseCode == "07" || data.responseCode == "08"){
								alert(data.responseMessage);
						} else if (data.responseCode == "00"){
							
							stickinessSetAccNumber("BP",accSelect);
							billpaymentModel.setBillpayConfirmData(data);
	    					$state.go('app.billpaymentConfirmation');
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
}
	

function saveToBillPayList(billpaymentModel){
	if (document.getElementById('saveToBillPaymentList').checked == 1){
		billpaymentModel.setSaveToBillPayList("ON");
	}else{
		billpaymentModel.setSaveToBillPayList("OFF");
	}
}

function viewAfterInquiry($scope){
	//alert("viewAfterInquiry");
	$scope.visibleAccNumber = "true";
	$scope.visibleSaveToBillPayList = "true";
	$scope.visibleInqInput = "false";
}

function showFooter($scope, $translate, billerPreferences){
	//alert("showFooter");

	$scope.merchantCurrency = billerPreferences["currency"];	
	$scope.visibleAmount = "true";
	$scope.visibleDescription = "true";
}

function viewTextOrTel($scope,isInquiryOnConfirm){
	if (isInquiryOnConfirm == "1"){
		$scope.visibleSubcriberText = "true";
		$scope.visibleSubcriberTel = "";
	}else{
		$scope.visibleSubcriberTel = "true";
		$scope.visibleSubcriberText = "";
	}
}

function loadDataAccNumber($scope,$translate){
	//alert("loadDataAccNumber");
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
    var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;
    var purchasePayment_defaultAccountOption = $translate.instant('purchasePayment_defaultAccountOption');
    var purchasePayment_accountNumber = $translate.instant('purchasePayment_accountNumber');
    //alert(JSON.stringify(accList));
  	//$scope.account = accList;

    var accNumberColl = "";
    var accNumberTemp = "";
    var accNumberValue = "";
    
   	var jsonArr = [];
   	var jsonAccNumber = [];
   	
    for(var i = 0; i < accList.length; i++){
        //var option = $("<option>");
        for( var key in accList[i] ){
        	if (key == "accountNumber"){

    	    	if (accList[i]["allowFlag"].indexOf("bp")>=0){
    	    		//option.attr("value", accList[i][key]);
    	    		//option.html(accList[i]["mobileLabel"]);
    	    		accNumberValue = accList[i][key];
    				accNumberTemp = accList[i]["label"];
    				//accNumberColl = accNumberColl + "<option value='"+accNumberValue+"'>"+accNumberTemp+"</option>";
    				//accNumberColl = accNumberColl + "<option value='"+accNumberValue+"' data-account-number='"+accList[i]["accountNumber"]+"'>"+accNumberTemp+"</option>";
    	    	
    				jsonArr.push({
    					id: accNumberValue,
    					label: accNumberTemp
    				});
    	    	}
    	    }
        }
    }

    /*if (jsonArr.length > 1){
    	jsonAccNumber.push({
			id: "",
			label: purchasePayment_defaultAccountOption
		});
   	}*/
    
    for(var i = 0; i < jsonArr.length; i++){
    	jsonAccNumber.push({
			id: jsonArr[i].id,
			label: jsonArr[i].label
		});
    }
    
	//alert(JSON.stringify(jsonAccNumber));
	//alert("length :"+jsonAccNumber.length);
	$scope.accListObject = jsonAccNumber;
    $scope.$apply();
	//$scope.accSelect = jsonAccNumber[0].id;

	if (jsonAccNumber.length == 1){
    	//chooseAccount(jsonAccNumber[0]);
    	$scope.queryAccountList = jsonAccNumber[0].label;
    	$scope.accountNumberSelect = jsonAccNumber[0].id;
    	$scope.$apply();
   	}else{
		stickinessGetAccNumber($scope, "BP");
   	}
	
}

function loadNumPatternDesc($translate,billerPreferences){
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var numPatternList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.NumPatternJson);
	numPatternList = numPatternList.numPattern;
	var codeBillPay = billerPreferences["code"];
	var langNameSession =  window.localStorage.getItem("lang");
	var note ="";
	
	for(var j = 0; j < numPatternList.length; j++){
		if (numPatternList[j]["type"] == codeBillPay+"_num_pattern"){
			note = numPatternList[j]["description"];
			//alert(note);
			break;
		}
	} 
	
	if (note != null || note.length == 0 || note == "") {
		var tempMessage = new Array();
		tempMessage = note.split("|");
		/*alert("tempMessage 0" + tempMessage[0]);
		alert("tempMessage 1" + tempMessage[1]);*/
		if (langNameSession == null || langNameSession == "" || langNameSession == "en"){
			note=tempMessage[0];
		}else{
			note=tempMessage[1];
		}		
	}
	
	//alert("note "+note);
	return note;
}


function fillDenom($scope,$translate,billerPreferences){
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var denominationList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.DenominationListJson);
	denominationList = denominationList.denominationList;
	//alert("denominationList :"+ JSON.stringify(denominationList));
	var codeBillPay = billerPreferences["code"];
	var isUsingPackageCode = billerPreferences["isUsingPackageCode"];
	var isMerchantWithSubProductCode = billerPreferences["isMerchantWithSubProductCode"];
	var denomKey = $translate.instant(replaceSeparatedLabel(billerPreferences["denomKey"]));
	var defaultDenomOption =$translate.instant('purchasePayment_defaultDenomOption'); 
	
		var jsonArr = [];
		var jsonDenom = [];

		for (var i = 0; i < denominationList.length; i++) {
			if (denominationList[i]["type"] == codeBillPay+"_denom"){
				
				if (isUsingPackageCode == "1"){
					jsonArr.push({
						id: denominationList[i]["code"],
						label: "["+ denominationList[i]["code"] + "] " +  denominationList[i]["name"] + " - Rp " +  denominationList[i]["filter"]
					});
				}else if (isMerchantWithSubProductCode == "1"){
					jsonArr.push({
						id: denominationList[i]["code"],
						label: "["+ denominationList[i]["code"] + "] " + " - Rp " +  denominationList[i]["filter"]
					});
				}else{
					jsonArr.push({
						id: denominationList[i]["code"],
						label: denominationList[i]["name"]
					});
				}
			}
		}
		
		//alert(JSON.stringify(jsonArr));
		
		 if (jsonArr.length > 1){
			 	jsonDenom.push({
					id: "",
					label: defaultDenomOption
				});
		   	}
		 
	    for(var i = 0; i < jsonArr.length; i++){
	    	jsonDenom.push({
				id: jsonArr[i].id,
				label: jsonArr[i].label
			});
	    }
	    
		//alert(JSON.stringify(jsonDenom[1].id));
		$scope.denomListObject = jsonDenom;
		$scope.denom = jsonDenom[0].id;		
		$scope.denomLabel = denomKey;
}


function loadBillPeriod($scope, $translate){
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var billPeriodList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.BillPeriodListJson);
	billPeriodList = billPeriodList.billPeriodList;	
  	
	$scope.billPeriodObject = billPeriodList;
	$scope.billPeriodSelect = billPeriodList[0].id;
	$scope.visibleBillPeriod = "true";
}


function billpayST($scope, $translate){
	var button_cancel = $translate.instant('button_cancel');
  	var button_confirm = $translate.instant('button_confirm');
	$scope.visibleBillpayST = "true";
  	
	document.getElementById('buttonCancelST').value = button_cancel;
	document.getElementById('buttonConfirmST').value = button_confirm;
	
	$scope.$apply();
}


function billpayInquiryValidation($scope,$translate,billerType,billerPreferences){
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var checkSubscriberNo = document.getElementById('subscriberNo').value;
  	var errorCheckAmount = $translate.instant("purchasePayment_errorCheckAmount");
  	var ccLabel = $translate.instant("purchasePayment_nameCC");
  	var invalid = $translate.instant("purchasePayment_invalid");
	var defaultAreaOption =$translate.instant('purchasePayment_defaultAreaOption'); 
  	var lang = window.localStorage.getItem("lang");
  	
	var newdata = {};
	newdata['response'] = "no error";
	newdata['message'] = "no error";
	
	if (checkSubscriberNo == null || checkSubscriberNo.lenght == "0" || checkSubscriberNo == "" ){	
		newdata['response'] = "error";
		
		if (billerType == "5"){
			newdata['message'] = ccLabel+" "+invalid;
		}else{
			newdata['message'] = $scope.subscriberNoLabel+" "+invalid;
		}
		
	}else{
		if (billerType == "7"){
			var amountInput = document.getElementById('amountInput').value;
			if (amountInput == null || amountInput.lenght == "0" || amountInput == "" ){
				newdata['response'] = "error";
				newdata['message'] = errorCheckAmount;
				return newdata;
			}
		}

		if (billerType == "10"){
			var areaCode = $scope.areaCode;
			if (areaCode == null || areaCode.lenght == "0" || areaCode == "" ){
				newdata['response'] = "error";
				newdata['message'] = defaultAreaOption;
				return newdata;
			}
		}
		
		
		var numPatternList = JSON.parse(userStorageMap.ipassportData.ipassDataClient.NumPatternJson);
		numPatternList = numPatternList.numPattern;
		
		var codeBillPay = billerPreferences["code"];
		var numPattern = "";
		var messageSubscriberNoError ="";
		
		for(var j = 0; j < numPatternList.length; j++){
			if (numPatternList[j]["type"] == codeBillPay+"_num_pattern"){
				numPattern = numPatternList[j]["code"];
				messageSubscriberNoError = numPatternList[j]["description"];
				//alert(numPattern);
				break;
			}
		} 
		
		if (numPattern != null || numPattern.length == 0 || numPattern == "") {
			var checkPattern=new RegExp(numPattern);
			if(numPattern != '' && !checkSubscriberNo.match(numPattern)) {
				//alert(messageSubscriberNoError);
				var tempMessage = new Array();
				tempMessage = messageSubscriberNoError.split("|");
				/*alert("tempMessage 0" + tempMessage[0]);
				alert("tempMessage 1" + tempMessage[1]);*/
				newdata['response'] = "error";
				if (lang == null || lang == "" || lang == "en"){
					newdata['message'] = tempMessage[0];
				}else{
					newdata['message'] = tempMessage[1];
				}		
				return newdata;
			}
		}
	}
		
	return newdata;
}


function billpayConfirmValidation($scope,$translate,billerPreferences){
  	var errorSelectAccount = $translate.instant("purchasePayment_errorSelectAccount");

	var newdata = {};
	newdata['response'] = "no error";
	newdata['message'] = "no error";
	
	
	try {
		var accSelect = document.getElementById('accountNumberHidden').value;
		if (accSelect == "" || accSelect == null || accSelect.length == "0"){
			newdata['response'] = "error";
			newdata['message'] = errorSelectAccount;
			return newdata;
		}
	} catch(e) {}
	
	try {
  		var subscriberNo = $scope.subscriberNo;
		if (subscriberNo == "" || subscriberNo == null || subscriberNo.length == "0" || subscriberNo == "undefined"){
			var message = loadNumPatternDesc($translate,billerPreferences);
			newdata['response'] = "error";
			newdata['message'] = message;
			return newdata;
		}
	} catch(e) {}


	try {
  		var vaTypeCheck = document.getElementById('vaInputMode').value;
		if (vaTypeCheck == "" || vaTypeCheck == null || vaTypeCheck.length == "0" || vaTypeCheck == "undefined"){
			//gk usah cek va
		}else{
			if(vaTypeCheck!="CLOSED"){
				var amountBP = $scope.amount;
				var billAmountBP = document.getElementById('billAmount').value;

				//alert("amountBP :"+amountBP);
				//alert("billAmountBP :"+billAmountBP);

				if(vaTypeCheck=="OPEN") {
					document.getElementById('billAmount').value = amountBP;
				}
			}
			
			if(amountBP < document.getElementById('billAmount').value){
				var message = $translate.instant("error_amountBelowMinimum_key");
				newdata['response'] = "error";
				newdata['message'] = message;
				return newdata;
			}

		}
	} catch(e) {}




	
	return newdata;
}

function constructGenericDisplay(elemen, innerElemen){
	var nodeConstructNode = document.createElement('span');
	nodeConstructNode.innerHTML = ""+innerElemen+"";
	document.getElementById(elemen).appendChild(nodeConstructNode);
}

function constructDisplayList(displayList){
	//display list must be double index array
	//alert("constructDisplay ");
	var row;
	var displayText="";
	for(i=0;i<displayList.length;i++){
		row=displayList[i];
		//alert(row);
		if(row.length==1){
			displayText+="<tr height='30' class='"+(i%2)+"'><td colspan='5'>"+row[0]+"</td></tr>";
		}else{
			displayText+="<tr height='30' class='"+(i%2)+"'>";
			displayText+="<td class='allBold' width='130px'>"+row[0]+"</td>";
			displayText+="<td class='allBold' width='10px'>:</td>";
			displayText+="<td class='allB'colspan='3'>"+row[1]+"</td>";
			displayText+="</tr>";
		}
	}

	var nodeConstructDisplay = document.createElement('span');
	nodeConstructDisplay.innerHTML = "<div id='divConstructDisplay'> <br> <br><table border='0' width='100%' cellspacing='0'>"+displayText+"</table></div>";
	document.getElementById('loadDataInquiry').appendChild(nodeConstructDisplay);
}

function constructConfirmPage(displayList){
	//display list must be double index array
	//alert("constructDisplay ");
	var rowBillpayment;
	var displayText="";
	for(i=0;i<displayList.length;i++){
		rowBillpayment=displayList[i];
		var tempRow = new Array();
		tempRow = rowBillpayment.split("|");
		//alert(tempRow);
		if(tempRow.length==1){
			displayText+="<tr height='30' class='"+(i%2)+"'><td colspan='5'>"+tempRow[0]+"</td></tr>";
		}else{
			displayText+="<tr height='30' class='"+(i%2)+"'>";
			displayText+="<td class='allBold' width='130px'>"+tempRow[0]+"</td>";
			displayText+="<td class='allBold' width='10px'>:</td>";
			displayText+="<td class='allBold' colspan='3'>"+tempRow[1]+"</td>";
			displayText+="</tr>";
			/*if(tempRow.length==3){
				displayText+="<tr height='30' class='"+(i%2)+"'><td colspan='5'>"+tempRow[2]+"</td></tr>";
			}*/
		}
	}
	
	var nodeConstructDisplay = document.createElement('span');
		nodeConstructDisplay.innerHTML = "<div id='divConstructDisplay'><table border='0' width='100%' cellspacing='0'>"+displayText+"</table></div>";
		document.getElementById('confirmList').appendChild(nodeConstructDisplay);
}

function constructResultPage(displayList){
	//display list must be double index array
	//alert("constructDisplay ");
	var rowBillpayment;
	var displayText="";
	for(i=0;i<displayList.length;i++){
		rowBillpayment=displayList[i];
		var tempRow = new Array();
		tempRow = rowBillpayment.split("|");
		//alert(tempRow);
		if(tempRow.length==1){
			displayText+="<tr height='30' class='"+(i%2)+"'><td colspan='5'>"+tempRow[0]+"</td></tr>";
		}else{
			displayText+="<tr height='30' class='"+(i%2)+"'>";
			displayText+="<td class='allBold' width='130px'>"+tempRow[0]+"</td>";
			displayText+="<td class='allBold' width='10px'>:</td>";
			displayText+="<td class='allBold' colspan='3'>"+tempRow[1]+"</td>";
			displayText+="</tr>";
			/*if(tempRow.length==3){
				displayText+="<tr height='30' class='"+(i%2)+"'><td colspan='5'>"+tempRow[2]+"</td></tr>";
			}*/
		}
	}
	
	var nodeConstructDisplay = document.createElement('span');
		nodeConstructDisplay.innerHTML = "<div id='divConstructDisplay'><table border='0' width='100%' cellspacing='0'>"+displayText+"</table></div>";
		document.getElementById('resultList').appendChild(nodeConstructDisplay);
}

function constructDisplayArrayAutoDebet(displayList, type){
	//display list must be double index array
	//alert("constructDisplay ");
	var row;
	var displayText="";
	
	if (type == "1"){
		for(i=0;i<displayList.length;i++){
			//row=displayList[i];
			//alert(row);
			displayText+="<tr height='30' class='"+(i%2)+"'><td colspan='5'>"+displayList[i]+"</td></tr>";
		}
		
	}else{
		for(i=0;i<displayList.length;i++){
			row=displayList[i];
			//alert(row);
			if(row.length==1){
				displayText+="<tr height='30' class='"+(i%2)+"'><td colspan='5'>"+row[0]+"</td></tr>";
			}else{
				displayText+="<tr height='30' class='"+(i%2)+"'>";
				displayText+="<td class='allBold' width='130px'>"+row[0]+"</td>";
				displayText+="<td class='allBold' width='10px'>:</td>";
				displayText+="<td class='allBold'colspan='3'>"+row[1]+"</td>";
				displayText+="</tr>";
			}
		}
	}
	
	var nodeConstructDisplay = document.createElement('span');
		nodeConstructDisplay.innerHTML = "<div id='divConstructDisplayAutodebet'><table border='0' width='100%' cellspacing='0'>"+displayText+"</table></div>";
		document.getElementById('resultList').appendChild(nodeConstructDisplay);

}

function addCommas2(nStr) {
	nStr = nStr.replace(/[^0-9]/g,"");  // strip non-numeric
	document.getElementById('amount').value = nStr;
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1.$2');
	}
	document.getElementById('amount').value = nStr;
}

function addCommas2Generic(nStr) {
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

function addCommasAmountInput(nStr) {
	nStr = nStr.replace(/[^0-9]/g,"");  // strip non-numeric
	document.getElementById('amountInput').value = nStr;
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1.$2');
	}
	document.getElementById('amountInput').value = nStr;
}

function addCommasIdAmountVa(nStr) {
	nStr = nStr.replace(/[^0-9]/g,"");  // strip non-numeric
	document.getElementById('idAmountVa').value = nStr;
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1.$2');
	}
	document.getElementById('idAmountVa').value = nStr;
}
      
function replaceall(str,replace,with_this)
{
    var str_hasil ="";
    var temp;

    for(var i=0;i<str.length;i++) // not need to be equal. it causes the last change: undefined..
    {
        if (str[i] == replace)
        {
            temp = with_this;
        }
        else
        {
                temp = str[i];
        }

        str_hasil += temp;
    }

    return str_hasil;
}

 

function doBackBillpayment($state){
	if ($state.is('app.payPurchase')) {
        $state.go('app.main');
    }else if ( ($state.is('app.billerType1')) || ($state.is('app.billerType2'))|| ($state.is('app.billerType3')) || ($state.is('app.billerType4')) || ($state.is('app.billerType5')) || ($state.is('app.billerType6')) || ($state.is('app.billerType7')) || ($state.is('app.billerType8'))  || ($state.is('app.billerType9')) ) {
        $state.go('app.payPurchase');
    }else if ( ($state.is('app.billpaymentConfirmation')) || ($state.is('app.billpaymentResult')) ) {
        $state.go('app.payPurchase');
    }else{
        $state.go('app.main');
    }
}

function doClearResetBillpayment($state){
	$state.go('app.payPurchase');
}

function backToIndex($state){
	$state.go('app.main');
}

function clearAccountInput(){
	 //alert("chooseAccount");
	try {
		document.getElementById('accountNumber').value = "";
		document.getElementById('accountNumberHidden').value = "";
	} catch(e) {}
}

function showSelectList($scope, $translate, $ionicPopup, title, filterName, ngModel, ngRepeat, dataSource, ngClick, id, item){
	 //alert("showSelectList");
  	 var nameButton = $translate.instant('button_close');
	 $scope.myPopup = $ionicPopup.show({
	     template: 	'<label class="item item-input">'+
				    '<i class="icon ion-search placeholder-icon"></i>'+
				    '<input type="text" ng-model="'+filterName+'" placeholder="Search">'+
				    '</label>'+
	    	 	   	'<ul>'+
	    	 	   	'<li class="item item-text-wrap" ng-model="'+ngModel+'" ng-repeat="'+ngRepeat+' in '+dataSource+' | filter:'+filterName+'" ng-click="'+ngClick+'" id="'+id+'">'+
	    	        '<div>'+item+''+
	    	        '</li>'+
	    	 	   	'</ul>',
	     title: ''+title+'',
	     scope: $scope,
	     buttons: [
	       { text: ''+nameButton+'' },
	     ]
	   });   
}

function chooseAccount(account){
	//alert("chooseAccount :"+account.label);
	try {
		document.getElementById('accountNumber').value = account.label;
		document.getElementById('accountNumberHidden').value = account.id;
	} catch(e) {}
}

function replaceSeparatedLabel(label){
	try {
		var newLabel = label.replace(/\./g, '_');
		//alert("newLabel :"+newLabel);
		return newLabel;
	} catch(e) {}
}