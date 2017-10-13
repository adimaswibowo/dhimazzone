
function checkSecurityTypeAssignerBP($scope,$translate){
	//alert("masuk checkSecurityTypeAssignerBP");
	
	localStorage.setItem('countSMSResend',0);
	
	//var userBoth = false;
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	var authLimit = userStorage.ipassportData.ipassDataClient.SecurityTypeAssigner.securityTypeAssigner;
	//alert(JSON.stringify(authLimit));
	var userAmount = $scope.amount;  		
	
	if (userAmount == null || userAmount == "" || userAmount == "undefined"){
	var errorCheckAmount = $translate.instant("purchasePayment_errorCheckAmount");
	alert(errorCheckAmount);
	return false;
	}
	
	userAmount = (userAmount).toString();	
	
	var transactionLimitSmsTokenError = $translate.instant('transactionLimitSmsTokenError');
	var transactionLimitSimasTokenError = $translate.instant('transactionLimitSimasTokenError');
	var userTokenError = $translate.instant('userTokenError');
	
	var userToken = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
	var userPreference  = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
	userAmount = parseInt(replaceall(userAmount,'.',''));	
	//alert("userPreference : "+userPreference);
	//alert("userAmount : "+userAmount);
	//alert("userPreference : "+userPreference);
	if(userPreference == "") userPreference == "8";
	if(userToken =="" || userToken ==null || userToken ==undefined || userToken =="undefined"){
		alert(userTokenError);
		return false;
	}

	if(userPreference == "0"){
			if(authLimit.securityType0.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				$scope.doConfirmBillpaymentInput();
				return true;
				//var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("onclick");
	      		//eval(script);
			}else{
				alert(transactionLimitSmsTokenError);
  				return false;
			}
		
	}

	if(userPreference == "1"){
			if(authLimit.securityType1.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}else{
				alert(transactionLimitSimasTokenError+" "+authLimit.securityType1.amount);
  				return false;
			}
	}
	
	if(userPreference == "2"){
		localStorage.setItem("securityTypeCode", userPreference);
		//alert("transaksi ini menggunakan Sms Token");
	$scope.doConfirmBillpaymentInput();
	return true;
	}

	if(userPreference == "8"){
		if(userToken.indexOf("1") == "-1" && userToken.indexOf("0") != "-1"){
			if(authLimit.securityType0.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}else{
				alert(transactionLimitSmsTokenError);
  				return false;
			}
		}
		if(userToken.indexOf("1") != "-1" && userToken.indexOf("0") == "-1"){
			if(authLimit.securityType1.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}else{
				alert(transactionLimitSimasTokenError+" "+authLimit.securityType1.amount);
  				return false;
			}
		}
		if(userToken.indexOf("1") != "-1" && userToken.indexOf("0") != "-1"){
			if(authLimit.securityType0.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}
			if(authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
				localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
				//alert("transaksi ini membutuhkan Simas Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}
			if(authLimit.securityType1.amount < userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType2.allowedSecurityTypeCode);
				//alert("transaksi ini membutuhkan Simas Token dan SMS Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}
		}
	}

	if(userPreference == "9"){
		if(userToken.indexOf("1") == "-1"){
			if(authLimit.securityType0.amount >= userAmount){
				alert(transactionLimitSmsTokenError);
  				return false;
			}else{
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}
		}
		if(userToken.indexOf("0") == "-1"){
			if(authLimit.securityType1.amount >= userAmount){
				alert(transactionLimitSimasTokenError+" "+authLimit.securityType1.amount);
  				return false;
			}else{
				localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
				//alert("transaksi ini membutuhkan Simas Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}
		}
		if(userToken.indexOf("1") != "-1" && userToken.indexOf("0") != "-1"  && authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
	  		//alert('masuk sini gan')
			innerSecurityTypeBP($scope,$translate,"1");
			return true;
		}else if(userToken.indexOf("1") != "-1" && userToken.indexOf("0") != "-1" && userAmount > authLimit.securityType1.amount ){
			innerSecurityTypeBP($scope,$translate,"2");
			return true;
		}else{
			
			if(authLimit.securityType0.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini membutuhkan Simas Token");
				$scope.doConfirmBillpaymentInput();
				return true;
			}
			
		}
	}
};

function innerSecurityTypeBP($scope,$translate,type){
	//alert("innerSecurityTypeBP "+type);
	$scope.disableElement = "true"; 
	$scope.visibleBillpayST = ""; 
	$scope.visibleBillpayButton = "true"; 
	
	var smsTokenInner = "<label class='item item-radio'><INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='0' value='0'><label class='m_content-caption'> </label><div class='item-content'>SMS Token</div><i class='radio-icon ion-checkmark'></i></label>";
	var simasTokenInner = "<label class='item item-radio'><INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='1' value='1'><label class='m_content-caption'> </label><div class='item-content'>Simas Token</div><i class='radio-icon ion-checkmark'></i></label>";
	var bothTokenInner = "<label class='item item-radio'><INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='2' value='2'><label class='m_content-caption'> </label><div class='item-content'>Simas & Sms Token</div><i class='radio-icon ion-checkmark'></i></label>";
	var alwayAskInnerSMS = "<label class='item item-checkbox'> <label class='checkbox'> <INPUT TYPE='checkbox' class='securityTypeCodeOption' NAME='securityTypeCodeSMS' ng-value='0' value='0'> </label>SMS Token</label>";
	var alwayAskInnerSimas = "<label class='item item-checkbox'> <label class='checkbox'> <INPUT TYPE='checkbox' class='securityTypeCodeOption' NAME='securityTypeCodeSimas' ng-value='1' value='1'> </label>Simas Token</label>";

  	var selectYourTokenLabel = $translate.instant('selectToken');
  	var needTransactionLabel = $translate.instant('needTransaction');
  	var selectOneOrTwoTokenLabel = $translate.instant('selectOneOrTwoToken');
  	var selectYourTokenLabel = $translate.instant('selectYourToken');
  	
	if(type == "1"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<br><div class='list'><p class='m_content-caption'>"+selectYourTokenLabel+"</p>"+simasTokenInner+bothTokenInner+"</div>";
	}
	if(type == "2"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<br><div class='list'><p class='m_content-caption'>"+needTransactionLabel+"</p>"+bothTokenInner+"</div>";
	}
	if(type == "-1"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<br><p class='m_content-caption'>"+selectOneOrTwoTokenLabel+"</p>"+alwayAskInnerSMS+alwayAskInnerSimas+"";
	}
	if(type == "-2"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<br><p class='m_content-caption'>"+selectYourTokenLabel+"</p>"+alwayAskInnerSMS+"";
	}
	if(type == "-3"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<br><p class='m_content-caption'>"+selectYourTokenLabel+"</p>"+alwayAskInnerSimas+"";
	}
	//document.getElementById("securityTypeConfirmation").innerHTML ="Pilih salah satu atau kedua jenis token untuk transaksi anda. <br><INPUT TYPE='radio' NAME='securityTypeCode' VALUE='0'>SMS Token<br><INPUT TYPE='radio' NAME='securityTypeCode' VALUE='1'>Simas Token";
};

function tokenInputGenericBP(securityTypeCode,userAmount,$scope,$compile){
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	var authLimit = userStorage.ipassportData.ipassDataClient.SecurityTypeAssigner.securityTypeAssigner;
	var userToken = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
	var userPreference = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;

	//userAmount = parseInt(replaceall(userAmount,'.',''));	
	//alert(userAmount);

	smsTokenInputInner = " <br> <div id='smsTokenInput'> <a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>Using SMS Token</a> <label class='item item-input smsTokenInputStyle'> <input type='text' name='mPin' id='mPin' size='8' maxlength='6' placeholder='Enter SMS Token*'/> </label> ";
	simasTokenInputInner = " <br> <div id='simasTokenInput'> <a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>Using Simas Token</a> <label class='item item-input simasTokenInputStyle'> <input type='text' name='mPin' id='simasToken' size='8' maxlength='6' placeholder='Enter Simas Token*'/>  </label></div>";
	both = smsTokenInputInner+simasTokenInputInner;
	overrideSmsToSimas = "<label class='item item-checkbox item-text-wrap'> <label class='checkbox'> <INPUT TYPE='checkbox' id='simasCheckBox' NAME='simasCheckBox' class='m_content-combobox' ng-click='simasCheckboxFunctionBP();'> </label> Check to using SMS Token </label>" ;
	overrideSimasToSms = "<label class='item item-checkbox item-text-wrap'> <label class='checkbox'> <INPUT TYPE='checkbox' id='smsCheckBox' NAME='smsCheckBox' class='m_content-combobox' ng-click='smsCheckboxFunctionBP();'> </label> Check to using Simas Token </label>" ;
	buttonResendSms = "<input type='button' id='reSendSMSToken' class='button button-assertive' value='Request SMS Token' ng-click='reSendSMSTokenBP();'><br>";
	//innerlogic
//		alert(userAmount);
	if(userPreference =="8"){
		if(isDevice){
			if(securityTypeCode == "0"){
				document.getElementById("securityTypeTokenInput").innerHTML = overrideSimasToSms+smsTokenInputInner+buttonResendSms;
				window.localStorage.setItem("securityTypeCode","0");
			}
			if(securityTypeCode == "1"){
				if(userAmount <= authLimit.securityType0.amount && userToken.indexOf("0") != -1){
					document.getElementById("securityTypeTokenInput").innerHTML = overrideSmsToSimas+simasTokenInputInner;
				}else document.getElementById("securityTypeTokenInput").innerHTML = simasTokenInputInner;
				window.localStorage.setItem("securityTypeCode","1");
			}
		}else{
			if(securityTypeCode == "1" || securityTypeCode == "0"){
					if(userAmount <= authLimit.securityType0.amount && userToken.indexOf("0") != -1){
						document.getElementById("securityTypeTokenInput").innerHTML = overrideSmsToSimas+simasTokenInputInner;
					}else document.getElementById("securityTypeTokenInput").innerHTML = simasTokenInputInner;
					window.localStorage.setItem("securityTypeCode","1");
			}
		}
		if(securityTypeCode == "2"){
			document.getElementById("securityTypeTokenInput").innerHTML = smsTokenInputInner+buttonResendSms+simasTokenInputInner;
			window.localStorage.setItem("securityTypeCode","2");
		}
	}else{
		if(securityTypeCode == "0"){
			document.getElementById("securityTypeTokenInput").innerHTML = smsTokenInputInner+buttonResendSms;
			window.localStorage.setItem("securityTypeCode","0");
		}
		if(securityTypeCode == "1"){
			document.getElementById("securityTypeTokenInput").innerHTML = simasTokenInputInner;
			window.localStorage.setItem("securityTypeCode","1");
		}
		if(securityTypeCode == "2"){
			document.getElementById("securityTypeTokenInput").innerHTML = smsTokenInputInner+buttonResendSms+simasTokenInputInner;
			window.localStorage.setItem("securityTypeCode","2");
		}
	}
	
	$compile(document.getElementById('securityTypeTokenInput'))($scope);
	$scope.$apply();
}
	
function simasCheckboxFunctionBP($scope, $http, $compile,$cordovaDevice,$ionicPlatform){
	//alert("simasCheckboxFunctionBP");
	window.localStorage.setItem("securityTypeCode","0");
    document.getElementById("securityTypeTokenInput").innerHTML = "";
    isOverrideSMSChecked = "<a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>Using SMS Token</a>";
    smsTokenInputInner = "<div id='smsTokenInput'> <label class='item item-input smsTokenInputStyle'> <input type='text' name='mPin' id='mPin' size='8' maxlength='6' placeholder='Enter SMS Token*'/> </label> </div>";
    buttonResendSms = "<input type='button' id='reSendSMSToken' class='button button-assertive' value='Request SMS Token' ng-click='reSendSMSTokenBP();'>";
    document.getElementById("securityTypeTokenInput").innerHTML = isOverrideSMSChecked+smsTokenInputInner+buttonResendSms;
    
    $compile(document.getElementById('securityTypeTokenInput'))($scope);
	$scope.$apply();
	
    sendSMSTokenFirstTimeBP($http);
	startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform);
	//alert("Sms sent to your mobile phone number");

}
	
function smsCheckboxFunctionBP(){
	//alert("smsCheckboxFunctionBP");
	window.localStorage.setItem("securityTypeCode","1");
	document.getElementById("securityTypeTokenInput").innerHTML = "";
	isOverrideSimasChecked = "<a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>Using Simas Token</a>";
	simasTokenInputInner = "<div id='simasTokenInput'> <label class='item item-input simasTokenInputStyle'> <input type='text' name='mPin' id='simasToken' size='8' maxlength='6' placeholder='Enter Simas Token*' /> </label> </div>";
	document.getElementById("securityTypeTokenInput").innerHTML = isOverrideSimasChecked+simasTokenInputInner;
}
	
function reSendSMSTokenBP($http,$translate){
	//alert("reSendSMSTokenBP");
	
	var button = document.getElementById('reSendSMSToken');
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	maksResendSms = userStorage.ipassportData.ipassDataClient.MaksResendSms;
	delayReSendSMS = userStorage.ipassportData.ipassDataClient.DelayReSendSMS;
	
    var alertResendSMSMax = $translate.instant('alertResendSMSMax');
    var alertResendSMSMax2 = $translate.instant('alertResendSMSMax2');
    var failureReqSMS = $translate.instant('failureReqSMS');

	countSMSResend=parseInt(localStorage.getItem('countSMSResend'));
	countSMSResend=countSMSResend+1;
	maksResendSms = parseInt(maksResendSms)+1;
	delayReSendSMS = parseInt(delayReSendSMS);

	//alert(countSMSResend)
	if(countSMSResend >= maksResendSms){
		//alert("Maximum resend sms only "+maksResendSms+" times");
		alert(alertResendSMSMax+" "+maksResendSms+" "+alertResendSMSMax2);
		button.value = "Cannot ReSend ";
		button.setAttribute('disabled', true);
		return false;
	}
	
	 var oldValue = button.value;
	 count = delayReSendSMS;	
	 countDelaySms = count*1000;
	    
	 button.setAttribute('disabled', true);
	 var interval = setInterval(function(){
	    count-=1;
	    button.value = "Please Wait... ";
	 }, 1000); 
	 setTimeout(function(){
	    button.value = oldValue;
	    clearInterval(interval);
	    button.removeAttribute('disabled');
	 }, countDelaySms);
	 
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var newdata = {};
	newdata['ipassport']=userStorageMap.ipassport;
	newdata['transRefNum']=document.getElementById('transRefNum').value;
	var userStorageString = JSON.stringify(newdata);
	
	$http.post(ipaddress+'/rest/requestSMSV2/doSendSMS',userStorageString)
    	.success(function(data) {
    		
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
						//startReadSmsInbox();
	    			localStorage.setItem('countSMSResend',countSMSResend);
	    			//alert(data.responseMessage);
	    		} else {
	    			alert(data.responseMessage);
					return false;
				}
			} else {
				alert(failureReqSMS);
				return false;
			}
	    	
    	}).error(function(){
    	 	alert("Server Error");
    	 	alert(failureReqSMS);
			return false;
    	});
}
	
function sendSMSTokenFirstTimeBP($http){
	//alert("kirim SMS");
	//countSMSResend=parseInt(localStorage.getItem('countSMSResend'));

	//countSMSResend=countSMSResend+1;
	//alert(countSMSResend)
	//if(countSMSResend == 4){
	//	alert("Maximum resend sms only 3 times");
	//	return false;
	//}
	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var newdata = {};
	newdata['ipassport']=userStorageMap.ipassport;
	newdata['transRefNum']=document.getElementById('transRefNum').value;
	var userStorageString = JSON.stringify(newdata);
	
	$http.post(ipaddress+'/rest/requestSMSV2/doSendSMS',userStorageString)
		.success(function(data) {

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
						//startReadSmsInbox();
	    			//alert("Send SMS");
	    		} else {
	    			alert(data.responseMessage);
					return false;
				}
			} else {
				languageFunction(); //bahasa
				alert(failureReqSMS);
				return false;
			}
    	
    	}).error(function(){
    	 	alert("Server Error");
    	 	alert(failureReqSMS);
			return false;
    	});
}


function cancelCheckSecurityBP($scope){
	$scope.disableElement = "false"; 
	$scope.visibleBillpayST = "true"; 
	$scope.visibleBillpayButton = ""; 
	document.getElementById("securityTypeConfirmation").innerHTML = "";
};