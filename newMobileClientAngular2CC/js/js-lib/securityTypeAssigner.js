
function checkSecurityTypeAssigner($scope,$translate,$state){
	//alert("masuk checkSecurityTypeAssigner");
	
	localStorage.setItem('countSMSResend',0);
	
	//var userBoth = false;
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	var authLimit = userStorage.ipassportData.ipassDataClient.SecurityTypeAssigner.securityTypeAssigner;
	//alert(JSON.stringify(authLimit));
	var userAmount = 0; //ini ambil amount
	var mode = "";
	
	if ( ($state.is('app.ftInbankInput')) || ($state.is('app.ftExternalBankInput')) || ($state.is('app.addInbankTransferListInput')) || ($state.is('app.addExternalBankTransferListInput')) ) {
    	mode = "FT";
    	//alert(mode);
		userAmount = $("[id$='amount']").val();

	}else if ( ($state.is('app.billerType1')) || ($state.is('app.billerType2'))|| ($state.is('app.billerType3')) || ($state.is('app.billerType4')) || ($state.is('app.billerType5')) || ($state.is('app.billerType6')) || ($state.is('app.billerType7')) || ($state.is('app.billerType8')) ) {
        mode = "BP";
    	//alert(mode);
        //lg di billpay
        try{
			userAmount = $scope.amount;  		
			
			if (userAmount == null || userAmount == "" || userAmount == "undefined"){
				var errorCheckAmount = $translate.instant("purchasePayment_errorCheckAmount");
				alert(errorCheckAmount);
				return false;
			}
		
			userAmount = (userAmount).toString();	
			//alert("userAmount :"+userAmount);
        
        } catch(e) {
			alert("error "+e);
		}
        
    } else if ($state.is('app.ccLimitDetail')){
    	mode = "CCLimit";
    	//userAmount = $scope.userLimitReal;
    	userAmount = "0";
    	console.debug("userAmount: " + userAmount);
    }else if ($state.is('app.ccBlockingDetail') || $state.is('app.ccActivationDetail') || $state.is('app.ccPinReissueInput') || $state.is('app.ccResetPinCountInput')){
    	mode = "CC";
		userAmount = 0;
    	console.debug("userAmount: " + userAmount);
    } else{
    	alert=("Unknown State");
    }
    	

	
	var transactionLimitSmsTokenError = $translate.instant('transactionLimitSmsTokenError');
	var transactionLimitSimasTokenError = $translate.instant('transactionLimitSimasTokenError');
	var userTokenError = $translate.instant('userTokenError');
	
	var userToken = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
	var userPreference  = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
	console.debug("userPreference" + userPreference);
	if (mode == "CC"){
		userAmount = 0;
	} else {
		userAmount = parseInt(replaceall(userAmount,'.',''));
	}	
	console.debug("userAmount: " + userAmount);
	//alert("userPreference : "+userPreference);
	//alert("userAmount : "+userAmount);
	//alert("userPreference : "+userPreference);
	if(userPreference == "") userPreference == "8";
	if(userToken =="" || userToken ==null || userToken ==undefined || userToken =="undefined"){
		alert(userTokenError);
		return false;
	}
	console.debug("userPreference: " + userPreference);
	if(userPreference == "0"){
			if(authLimit.securityType0.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				//$scope.doConfirmBillpaymentInput();
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}

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
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
				return true;
			}else{
				alert(transactionLimitSimasTokenError+" "+authLimit.securityType1.amount);
  				return false;
			}
	}
	
	if(userPreference == "2"){
		localStorage.setItem("securityTypeCode", userPreference);
		//alert("transaksi ini menggunakan Sms Token");
			if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
	return true;
	}

	if(userPreference == "8"){
		if(userToken.indexOf("1") == "-1" && userToken.indexOf("0") != "-1"){
			if(authLimit.securityType0.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini menggunakan Sms Token");
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
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
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
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
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
				return true;
			}
			if(authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
				localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
				//alert("transaksi ini membutuhkan Simas Token");
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
				return true;
			}
			if(authLimit.securityType1.amount < userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType2.allowedSecurityTypeCode);
				//alert("transaksi ini membutuhkan Simas Token dan SMS Token");
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
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
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
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
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
				return true;
			}
		}
		if(userToken.indexOf("1") != "-1" && userToken.indexOf("0") != "-1"  && authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
	  		//alert('masuk sini gan')
			innerSecurityType($scope,$translate,"1");
			return true;
		}else if(userToken.indexOf("1") != "-1" && userToken.indexOf("0") != "-1" && userAmount > authLimit.securityType1.amount ){
			innerSecurityType($scope,$translate,"2");
			return true;
		}else{
			
			if(authLimit.securityType0.amount >= userAmount){
				localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
				//alert("transaksi ini membutuhkan Simas Token");
				if (mode == "FT"){
					$scope.doFtConfirm();
				}else if (mode == "BP"){
					$scope.doConfirmBillpaymentInput();
				}else if (mode == "CCLimit"){
					$scope.doChangeLimit();
				}else if (mode == "CC"){
					$scope.doConfirmCc();
				}else{
					alert("unknown submit page");
				}
				return true;
			}
			
		}
	}
};

function innerSecurityType($scope,$translate,type){
	//alert("innerSecurityType "+type);
	
	try {		
		$scope.cardLimit.disableElement = "true"; 
		$scope.cardLimit.visibleChangeLimitAppST = ""; 
		$scope.cardLimit.visibleChangeLimitAppButton = "true";
	} catch(e) {
		console.log("error "+e);
	}

	
	
	
	$scope.disableElement = "true"; 
	$scope.visibleBillpayST = ""; 
	$scope.visibleBillpayButton = "true"; 

	var smsTokenInner = "<label class='item item-radio'><INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='0' value='0'><label class='m_content-caption'> </label><div class='item-content'>SMS Token</div><i class='radio-icon ion-checkmark'></i></label>";
	var simasTokenInner = "<label class='item item-radio'><INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='1' value='1'><label class='m_content-caption'> </label><div class='item-content'>Simas Token</div><i class='radio-icon ion-checkmark'></i></label>";
	var bothTokenInner = "<label class='item item-radio'><INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='2' value='2'><label class='m_content-caption'> </label><div class='item-content'>Simas & Sms Token</div><i class='radio-icon ion-checkmark'></i></label>";
	var alwayAskInnerSMS = "<label class='item item-checkbox'> <label class='checkbox'> <INPUT TYPE='checkbox' class='securityTypeCodeOption' NAME='securityTypeCodeSMS' ng-value='0' value='0'> </label>SMS Token</label>";
	var alwayAskInnerSimas = "<label class='item item-checkbox'> <label class='checkbox'> <INPUT TYPE='checkbox' class='securityTypeCodeOption' NAME='securityTypeCodeSimas' ng-value='1' value='1'> </label>Simas Token</label>";

	//var smsTokenInner = "<INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='0' value='0'><label class='m_content-caption'> SMS Token</label>";
	//var simasTokenInner = "<INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='1' value='1'><label class='m_content-caption'> Simas Token</label>";
	//var bothTokenInner = "<INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' ng-model='securityTypeCode' ng-value='2' value='2'><label class='m_content-caption'> Simas & Sms Token</label>";
	//var alwayAskInnerSMS = "<INPUT TYPE='checkbox' class='securityTypeCodeOption' NAME='securityTypeCodeSMS' ng-value='0' value='0'><label class='m_content-caption'> SMS Token</label>";
	//var alwayAskInnerSimas =	"<INPUT TYPE='checkbox' class='securityTypeCodeOption' NAME='securityTypeCodeSimas' ng-value='1' value='1'><label class='m_content-caption'> Simas Token</label>";

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

function tokenInputGeneric(securityTypeCode,userAmount,$scope,$compile,$translate){
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	var authLimit = userStorage.ipassportData.ipassDataClient.SecurityTypeAssigner.securityTypeAssigner;
	var userToken = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
	var userPreference = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;

	//userAmount = parseInt(replaceall(userAmount,'.',''));	
	//alert(userAmount);
	 var use_sms = $translate.instant('use_sms');

	 var use_simas = $translate.instant('use_simas');
	 var enter_sms = $translate.instant('enter_sms');
	 var enter_simas = $translate.instant('enter_simas');
	 var check_using_sms = $translate.instant('check_using_sms');
	 var check_using_simas = $translate.instant('check_using_simas');
	 var req_sms_token = $translate.instant('req_sms_token');
		
	smsTokenInputInner = " <br> <div id='smsTokenInput'> <a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>"+use_sms+"</a> <label class='item item-input smsTokenInputStyle'> <input type='text' name='mPin' id='mPin' size='8' maxlength='6' placeholder='"+enter_sms+"'/> </label> ";
	simasTokenInputInner = " <br> <div id='simasTokenInput'> <a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>"+use_simas+"</a> <label class='item item-input simasTokenInputStyle'> <input type='text' name='mPin' id='simasToken' size='8' maxlength='6' placeholder='"+enter_simas+"'/>  </label></div>";
	both = smsTokenInputInner+simasTokenInputInner;
	overrideSmsToSimas = "<label class='item item-checkbox item-text-wrap'> <label class='checkbox'> <INPUT TYPE='checkbox' id='simasCheckBox' NAME='simasCheckBox' class='m_content-combobox' ng-click='simasCheckboxFunction();'> </label>"+check_using_sms+"</label>" ;
	overrideSimasToSms = "<label class='item item-checkbox item-text-wrap'> <label class='checkbox'> <INPUT TYPE='checkbox' id='smsCheckBox' NAME='smsCheckBox' class='m_content-combobox' ng-click='smsCheckboxFunction();'> </label>"+check_using_simas+"</label>" ;
	buttonResendSms = "<br><br> <input type='button' id='reSendSMSToken' class='button button-assertive' value='"+req_sms_token+"' ng-click='reSendSMSToken();'>";
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
	
function simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform,$translate,$ionicLoading){
	//alert("simasCheckboxFunction");
	var use_sms = $translate.instant('use_sms');
	var enter_sms = $translate.instant('enter_sms');
	var req_sms_token = $translate.instant('req_sms_token');
	
	window.localStorage.setItem("securityTypeCode","0");
    document.getElementById("securityTypeTokenInput").innerHTML = "";
    isOverrideSMSChecked = "<div id='smsTokenInput'> <a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>"+use_sms+"</a>";
	smsTokenInputInner = "<label class='item item-input smsTokenInputStyle'> <input type='text' name='mPin' id='mPin' size='8' maxlength='6' placeholder='"+enter_sms+"'/> </label> ";
	buttonResendSms = "<br><br> <input type='button' id='reSendSMSToken' class='button button-assertive' value='"+req_sms_token+"' ng-click='reSendSMSToken();'>";
    document.getElementById("securityTypeTokenInput").innerHTML = isOverrideSMSChecked+smsTokenInputInner+buttonResendSms;
    
    $compile(document.getElementById('securityTypeTokenInput'))($scope);
	$scope.$apply();
	
    sendSMSTokenFirstTime($http,$translate,$ionicLoading);
	startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate);
}
	
function smsCheckboxFunction($translate){
	//alert("smsCheckboxFunction");
	var use_simas = $translate.instant('use_simas');
	var enter_simas = $translate.instant('enter_simas');
	 
	window.localStorage.setItem("securityTypeCode","1");
	document.getElementById("securityTypeTokenInput").innerHTML = "";
	isOverrideSimasChecked = "<a class='item item-icon-left'><i class='icon ion-android-clipboard'></i>"+use_simas+"</a>";
	simasTokenInputInner = "<div id='simasTokenInput'> <label class='item item-input simasTokenInputStyle'> <input type='text' name='mPin' id='simasToken' size='8' maxlength='6' placeholder='"+enter_simas+"' /> </label> </div>";
	document.getElementById("securityTypeTokenInput").innerHTML = isOverrideSimasChecked+simasTokenInputInner;
}
	
function reSendSMSToken($http,$translate,$ionicLoading){
	//alert("reSendSMSToken");
	 setTimeout(function(){
		   // button.value = oldValue;
		   // clearInterval(interval);
		    //button.removeAttribute('disabled');
			// alert("set 0")
			 setDoubleExecuteSendSMS = 0;
		 }, 3000);
	if(setDoubleExecuteSendSMS == 0){
		//alert("set 1")
		setDoubleExecuteSendSMS = 1;
		var button = document.getElementById('reSendSMSToken');
		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
		maksResendSms = userStorage.ipassportData.ipassDataClient.MaksResendSms;
		delayReSendSMS = userStorage.ipassportData.ipassDataClient.DelayReSendSMS;
		
	    var alertResendSMSMax = $translate.instant('alertResendSMSMax');
	    var alertResendSMSMax2 = $translate.instant('alertResendSMSMax2');
	    var failureReqSMS = $translate.instant('failureReqSMS');
	    var failureReqSMS = $translate.instant('failureReqSMS');
	    var please_wait = $translate.instant('please_wait');
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
		    button.value = please_wait;
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
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		$http.post(ipaddress+'/rest/requestSMSV2/doSendSMS',userStorageString)
	    	.success(function(data) {
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
	    		$ionicLoading.hide();
	    	 	alert("Unable to process transaction");
	    	 	alert(failureReqSMS);
				return false;
	    	});
	}
}
	
function sendSMSTokenFirstTime($http,$translate,$ionicLoading){
	//alert("kirim SMS");
	//countSMSResend=parseInt(localStorage.getItem('countSMSResend'));

	//countSMSResend=countSMSResend+1;
	//alert(countSMSResend)
	//if(countSMSResend == 4){
	//	alert("Maximum resend sms only 3 times");
	//	return false;
	//}
	var button = document.getElementById('reSendSMSToken');
	button.setAttribute('disabled', true);

	 setTimeout(function(){
		   // button.value = oldValue;
		   // clearInterval(interval);
		    //button.removeAttribute('disabled');
			// alert("set 0")
			 setDoubleExecuteSendSMS = 0;
			 button.removeAttribute('disabled');
		 }, 3000);
	if(setDoubleExecuteSendSMS == 0){
		//alert("set 1")
		setDoubleExecuteSendSMS = 1;
		var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['transRefNum']=document.getElementById('transRefNum').value;
		var userStorageString = JSON.stringify(newdata);
		var send_sms =  $translate.instant('send_sms');
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		$http.post(ipaddress+'/rest/requestSMSV2/doSendSMS',userStorageString)
			.success(function(data) {
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
							//startReadSmsInbox();
		    		//	alert(send_sms);
		    			
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
				$ionicLoading.hide();
	    	 	alert("Unable to process transaction");
	    	 	alert(failureReqSMS);
				return false;
	    	});
		}
}


function cancelCheckSecurity($scope){
	$scope.disableElement = "false"; 
	$scope.visibleBillpayST = "true"; 
	$scope.visibleBillpayButton = ""; 
	document.getElementById("securityTypeConfirmation").innerHTML = "";
};

function cancelCheckSecurityChangeLimit($scope){
	try {
		$scope.cardLimit.disableElement = "false"; 
		$scope.cardLimit.visibleChangeLimitAppST = "true"; 
		$scope.cardLimit.visibleChangeLimitAppButton = "";
		document.getElementById("securityTypeConfirmation").innerHTML = "";
	} catch(e) {
		console.log("error "+e);

	}
};

window.addEventListener('message',function(event) {
   try {
   	 	var eventData = event.data;
	   	eventData = eventData.trim();
	  	//alert("eventData coy : "+eventData);

	  	if (eventData == "doReadSms"){
    		angular.element(document.getElementById('InAppBrowserCtrl')).scope().readSmsInApp();
	  	}

	} catch(e) {
		console.log("error "+e);
	}
      
},false);