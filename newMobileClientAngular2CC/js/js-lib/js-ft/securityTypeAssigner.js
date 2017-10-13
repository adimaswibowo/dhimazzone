function noAmountCheckSecurityTypeAssigner(){
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	//var authLimit = userStorage.securityTypeAssignerList;
	var authLimit = userStorage.ipassportData.ipassDataClient.SecurityTypeAssigner.securityTypeAssigner;
	var userToken = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
	var userPreference = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
	if(userPreference == "") userPreference == "0";
	if(userToken ==""||userToken ==null||userToken ==undefined||userToken =="undefined"){
		alert(userTokenError);
		languageFunction(); //bahasa
		return;
	}
	if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
	  		innerSecurityType("-1");
			return;
	}
	if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
	  		innerSecurityType("-2");
			return;
	}
	if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
	  		innerSecurityType("-3");
			return;
	}
}
function checkSecurityTypeAssigner($scope){
//	alert("checkSecurityTypeAssigner($scope)");
	//$("#blockDiv").css("pointer-events:none");
	//$('#blockDiv').find('input, textarea, button, select').attr('disabled',true);
	//$('#blockDiv').children().prop('disabled', true);
	//$('#blockDiv').fadeTo('slow',.6);
	//$('#blockDiv').append('<div style="position: absolute;top:0;left:0;width: 100%;height:100%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');
	localStorage.setItem('countSMSResend',0);
//	if (inquiryType == undefined || inquiryType == null || inquiryType == ""){
//		var invalidData = fundTransferValidation();
//	}else  {
		var invalidData = false;
//	}
	
	if (invalidData == true){
//		goToTransferInputInternalHtml();
		//alert("2");
		return false;
	} else {
		var userBoth = false;
		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
		var authLimit = userStorage.ipassportData.ipassDataClient.SecurityTypeAssigner.securityTypeAssigner;
		
		var userAmount = "";
		if (inquiryType == undefined || inquiryType == null || inquiryType == ""){
			userAmount = $("[id$='amount']").val();
		}else{
			if (inquiryType == "1"){
				var vaTypeInputType1 = window.localStorage.getItem('vaType');
				
				var amountInputType1 = "";
				
				if(vaTypeInputType1 =="OPEN" || vaTypeInputType1 =="MINIMUM"){
					var idAmountVaInputType1 = document.getElementById('idAmountVa').value;
					amountInputType1 = idAmountVaInputType1;
				}else{
					amountInputType1 = document.getElementById('amount').value;
				}
				
				if (amountInputType1 == "" || amountInputType1 == null || amountInputType1.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = amountInputType1;
				
			}else if (inquiryType == "2"){
				var amountInputType2 = document.getElementById('amount').value;
				
				if (amountInputType2 == "" || amountInputType2 == null || amountInputType2.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = amountInputType2;
				
			}else if (inquiryType == "3"){
				var amountInputType3 = document.getElementById('amount').value;
				
				if (amountInputType3 == "" || amountInputType3 == null || amountInputType3.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = amountInputType3;
							
			}else if (inquiryType == "4"){
				var amountInputType4 = document.getElementById('amount').value;
				
				if (amountInputType4 == "" || amountInputType4 == null || amountInputType4.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = amountInputType4;
				
			}else if (inquiryType == "5"){
				var idAmountVaInputType5 = document.getElementById('idAmountVa').value;
				
				if (idAmountVaInputType5 == "" || idAmountVaInputType5 == null || idAmountVaInputType5.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = idAmountVaInputType5;
					
			}else if (inquiryType == "6"){
				var denomInputType6 = document.getElementById('denom').value;
				
				if (denomInputType6 == "" || denomInputType6 == null || denomInputType6.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = denomInputType6;
						
			}else if (inquiryType == "7"){
				var amountInputType7 = window.localStorage.getItem("amountInput");
				
				if (amountInputType7 == "" || amountInputType7 == null || amountInputType7.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = amountInputType7;
				
			}else if (inquiryType == "8"){
				var amountInputType8 = window.localStorage.getItem("amountInput");
				
				if (amountInputType8 == "" || amountInputType8 == null || amountInputType8.length == "0"){
					constructGenericDisplay('dinamicValue',"<div id='divAllertMessageNew'>  <input type='hidden' name='errorCheckAmount' id='errorCheckAmount' value=' id='alertData' data-i18n='purchasePayment.errorCheckAmount' ' /> </div>");
					languageFunction(); //bahasa
					var alertData = document.getElementById('errorCheckAmount').value;
					alert(alertData);
					return false;
				}
				
				userAmount = amountInputType8;
			}
		}
		
		var userToken = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
		var userPreference  = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
		//var userPreference = "0";
		userAmount = parseInt(replaceall(userAmount,'.',''));	
		//alert(userPreference)
		//alert(userAmount)
		//alert(userPreference)
		if(userPreference == "") userPreference == "8";
		if(userToken ==""||userToken ==null||userToken ==undefined||userToken =="undefined"){
			alert(userTokenError);
			languageFunction(); //bahasa
			return;
		}
		//userPreference = 0
		if(userPreference == "0"){
			/*if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
				if(authLimit.securityType0.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("onclick");
		      		eval(script);
		    		return;
				}
				if(authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
					localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token");
					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("onclick");
		      		eval(script);
		    		return;
				}
				if(authLimit.securityType1.amount < userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType2.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token dan SMS Token");
					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("onclick");
		      		eval(script);
		    		return;
				}
			}else{*/
				if(authLimit.securityType0.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtConfirm();
				}else{
					alert(transactionLimitSmsTokenError);
					languageFunction(); //bahasa
				}
			/*}*/
			
		}
		
		//userPreference = 1
		if(userPreference == "1"){
			/*if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
				if(authLimit.securityType0.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("onclick");
		      		eval(script);
		    		return;
				}
				if(authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
					localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token");
					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("onclick");
		      		eval(script);
		    		return;
				}
				if(authLimit.securityType1.amount < userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType2.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token dan SMS Token");
					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("onclick");
		      		eval(script);
		    		return;
				}
			}else{*/
				if(authLimit.securityType1.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtConfirm();
				}else{
					alert(transactionLimitSimasTokenError+" "+authLimit.securityType1.amount);
			  		languageFunction(); //bahasa
				}
			/*}*/
			
		}
		
		//userPreference = 2
		if(userPreference == "2"){
			localStorage.setItem("securityTypeCode", userPreference);
			//alert("transaksi ini menggunakan Sms Token");
//			var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//	  		eval(script);
//			return;
			$scope.doFtConfirm();
		}
		//userPreference = 8
		if(userPreference == "8"){
			if($.inArray("1", userToken) == -1 && $.inArray("0", userToken) != -1){
				if(authLimit.securityType0.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtConfirm();
				}else{
					alert(transactionLimitSmsTokenError);
					languageFunction(); //bahasa
				}
			}
			if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) == -1){
				if(authLimit.securityType1.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtConfirm();
				}else{
					alert(transactionLimitSimasTokenError+" "+authLimit.securityType1.amount);
			  		languageFunction(); //bahasa
				}
			}
			if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1){
				if(authLimit.securityType0.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtConfirm();
				}
				if(authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
					localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtConfirm();
				}
				if(authLimit.securityType1.amount < userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType2.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token dan SMS Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtConfirm();
				}
			}
		}
		//userPreference = 9 
		if(userPreference == "9"){
			if($.inArray("1", userToken) == -1){
				if(authLimit.securityType0.amount >= userAmount){
					alert(transactionLimitSmsTokenError);
					languageFunction(); //bahasa
					return;
				}else{
					localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
					//alert("transaksi ini menggunakan Sms Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtInbankConfirm();
				}
			}
			if($.inArray("0", userToken) == -1){
				if(authLimit.securityType1.amount >= userAmount){
					alert(transactionLimitSimasTokenError+" "+authLimit.securityType1.amount);
					languageFunction(); //bahasa
			  		return;
				}else{
					localStorage.setItem("securityTypeCode", authLimit.securityType1.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtInbankConfirm();
				}
			}
			if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1  && authLimit.securityType0.amount < userAmount && userAmount <= authLimit.securityType1.amount){
		  		//alert('masuk sini gan')
				innerSecurityType("1");
				return;
			}else if($.inArray("1", userToken) != -1 && $.inArray("0", userToken) != -1 && userAmount > authLimit.securityType1.amount ){
				innerSecurityType("2");
				return;
			}else{
				
				if(authLimit.securityType0.amount >= userAmount){
					localStorage.setItem("securityTypeCode", authLimit.securityType0.allowedSecurityTypeCode);
					//alert("transaksi ini membutuhkan Simas Token");
//					var script = $('.m_content-button-submit[nodeST="buttonConfirm"]').attr("ng-click");
//		      		eval(script);
//		    		return;
					$scope.doFtInbankConfirm();
				}
				
			}
		}
	
	

	}
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
function innerSecurityType(type){
	if (inquiryType == undefined || inquiryType == null || inquiryType == ""){
		$("#blockDiv :input").attr("disabled", "disabled");
	}else{
		$("#loadData :input").attr("disabled", "disabled");
	}
	//alert(type);
	var smsTokenInner = "<INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode VALUE='0'><label class='m_content-caption'> SMS Token</label>";
	var simasTokenInner = "<INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' VALUE='1'><label class='m_content-caption'> Simas Token</label>";
	var bothTokenInner = "<INPUT TYPE='radio' class='m_content-radiobutton securityTypeCodeOption' NAME='securityTypeCode' VALUE='2'><label class='m_content-caption'> Simas & Sms Token</label>";
	var alwayAskInnerSMS = "<INPUT TYPE='checkbox' id='securityTypeCode' NAME='securityTypeCode' VALUE='0'>SMS Token";
	var alwayAskInnerSimas =	"<INPUT TYPE='checkbox' NAME='securityTypeCode' VALUE='1'>Simas Token";
	
	$('.m_content-button-submit[nodeST="buttonCheckST"]').hide();
	$('.m_content-button-submit[nodeST="buttonConfirm"]').show();
	$('.m_content-button-submit[nodeST="buttonCancel"]').show();
	$('.m_content-button-back[nodeST="buttonCheckST"]').hide();
	/*try {
		$('#divButtonCheckST').remove();
	} catch(e) {}
	try {
		$('#nodeDivSecurityType').remove();
	} catch(e) {}*/
	//alert("masuk inner");
	
	
	if(type == "1"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<p data-i18n='selectToken' class='m_content-caption' /> <br>"+simasTokenInner+"<br>"+bothTokenInner;
  		languageFunction(); //bahasa
	}
	if(type == "2"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<p data-i18n='needTransaction' class='m_content-caption' /> <br>"+bothTokenInner;
		languageFunction(); //bahasa
	}
	if(type == "-1"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<p data-i18n='selectOneOrTwoToken' class='m_content-caption' /> <br>"+alwayAskInnerSMS+"<br>"+alwayAskInnerSimas;
		languageFunction(); //bahasa
	}
	if(type == "-2"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<p data-i18n='selectYourToken' class='m_content-caption' /> <br>"+alwayAskInnerSMS;
		languageFunction(); //bahasa
	}
	if(type == "-3"){
		document.getElementById("securityTypeConfirmation").innerHTML = "<p data-i18n='selectYourToken' class='m_content-caption' /> <br>"+alwayAskInnerSimas;
		languageFunction(); //bahasa
	}
	//document.getElementById("securityTypeConfirmation").innerHTML ="Pilih salah satu atau kedua jenis token untuk transaksi anda. <br><INPUT TYPE='radio' NAME='securityTypeCode' VALUE='0'>SMS Token<br><INPUT TYPE='radio' NAME='securityTypeCode' VALUE='1'>Simas Token";
}
function cancelCheckSecurity(){
	$("#blockDiv :input").removeAttr("disabled");
	if (inquiryType == undefined || inquiryType == null || inquiryType == ""){
		$("#blockDiv :input").removeAttr("disabled");
	}else{
		$("#loadData :input").removeAttr("disabled");
	}
	$('.m_content-button-submit[nodeST="buttonCheckST"]').show();
	$('.m_content-button-submit[nodeST="buttonConfirm"]').hide();
	$('.m_content-button-submit[nodeST="buttonCancel"]').hide();
	$('.m_content-button-back[nodeST="buttonCheckST"]').show();

	document.getElementById("securityTypeConfirmation").innerHTML = "";

}

function tokenInputGeneric(securityTypeCode,userAmount,isDevice,$scope,$compile){
//	alert("tokenInputGeneric(securityTypeCode,userAmount,isDevice)");
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	var authLimit = userStorage.ipassportData.ipassDataClient.SecurityTypeAssigner.securityTypeAssigner;
	var userToken = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userToken;
	var userPreference = userStorage.ipassportData.ipassDataClient.profileScope.userLogin.userPreference;
	
	//userAmount = parseInt(replaceall(userAmount,'.',''));	
	//alert(userAmount);
	smsTokenInputInner = " <br> <div id='smsTokenInput'> SMS Token*  : <label class='button button-outline button-positive'> <input type='text' name='mPin' id='mPin' size='8' maxlength='6'/> </label> ";
	simasTokenInputInner = " <br> <div id='simasTokenInput'> Simas Token* : <label class='button button-outline button-assertive'> <input type='text' name='mPin' id='simasToken' size='8' maxlength='6'/>  </label></div>";
	both = smsTokenInputInner+simasTokenInputInner;
	overrideSmsToSimas = "<br> <INPUT TYPE='checkbox' id='simasCheckBox' NAME='simasCheckBox' class='m_content-combobox' ng-click='simasCheckboxFunction();'> Check to using SMS Token <br>" ;
	overrideSimasToSms = "<br> <INPUT TYPE='checkbox' id='smsCheckBox' NAME='smsCheckBox' class='m_content-combobox' onclick='smsCheckboxFunction();'> Check to using Simas Token <br>" ;
	buttonResendSms = " <br> <input type='button' class='button button-assertive' value='Request SMS Token' ng-click='reSendSMSToken();'/>";
	//innerlogic

//	alert(userAmount);
	if(userPreference =="8"){
		if(isDevice){
			if(securityTypeCode == "0"){
				document.getElementById("securityTypeTokenInput").innerHTML = overrideSimasToSms+smsTokenInputInner+buttonResendSms;
				window.localStorage.setItem("securityTypeCode","0");
//				languageFunction(); //bahasa
			}
			if(securityTypeCode == "1"){
				if(userAmount <= authLimit.securityType0.amount && $.inArray("0", userToken) != -1){
					document.getElementById("securityTypeTokenInput").innerHTML = overrideSmsToSimas+simasTokenInputInner;
				}else {
					document.getElementById("securityTypeTokenInput").innerHTML = simasTokenInputInner;
				}
				window.localStorage.setItem("securityTypeCode","1");
//				languageFunction(); //bahasa
			}
		}else{
			if(securityTypeCode == "1" || securityTypeCode == "0"){
					if(userAmount <= authLimit.securityType0.amount && $.inArray("0", userToken) != -1){
						document.getElementById("securityTypeTokenInput").innerHTML = overrideSmsToSimas+simasTokenInputInner;
					}else {
						document.getElementById("securityTypeTokenInput").innerHTML = simasTokenInputInner;
					}
					window.localStorage.setItem("securityTypeCode","1");
//					languageFunction(); //bahasa
			}
		}
		if(securityTypeCode == "2"){
			document.getElementById("securityTypeTokenInput").innerHTML = smsTokenInputInner+buttonResendSms+simasTokenInputInner;
			window.localStorage.setItem("securityTypeCode","2");
//			languageFunction(); //bahasa
		}
	}else{
		if(securityTypeCode == "0"){
			document.getElementById("securityTypeTokenInput").innerHTML = smsTokenInputInner+buttonResendSms;
			window.localStorage.setItem("securityTypeCode","0");
//			languageFunction(); //bahasa
		}
		if(securityTypeCode == "1"){
			document.getElementById("securityTypeTokenInput").innerHTML = simasTokenInputInner;
			window.localStorage.setItem("securityTypeCode","1");
//			languageFunction(); //bahasa
		}
		if(securityTypeCode == "2"){
			document.getElementById("securityTypeTokenInput").innerHTML = smsTokenInputInner+buttonResendSms+simasTokenInputInner;
			window.localStorage.setItem("securityTypeCode","2");
//			languageFunction(); //bahasa
		}
	}
	
	$compile(document.getElementById('securityTypeTokenInput'))($scope);
	$scope.$apply();
}
function sendSMSTokenFirstTime($http){
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
function reSendSMSToken($http){
	//alert("reSendSMSToken");
	
	var button = document.getElementById('reSendSMSToken');
	var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
	maksResendSms = userStorage.ipassportData.ipassDataClient.MaksResendSms;
	delayReSendSMS = userStorage.ipassportData.ipassDataClient.DelayReSendSMS;
	
    var alertResendSMSMax = "Maximum resend sms only";
    var alertResendSMSMax2 = "times";
    var failureReqSMS = "Failure request SMS Token";

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
function simasCheckboxFunction($scope, $http, $compile,$cordovaDevice,$ionicPlatform){
    	//alert("aaa")
	window.localStorage.setItem("securityTypeCode","0");
    document.getElementById("securityTypeTokenInput").innerHTML = "";
    isOverrideSMSChecked = "<br> Using SMS Token :<br>";
    smsTokenInputInner = " <br> <div id='smsTokenInput'> SMS Token*  : <label class='button button-outline button-positive'> <input type='text' name='mPin' id='mPin' size='8' maxlength='6'/> </label> </div>";
    buttonResendSms = " <br> <input type='button' id='reSendSMSToken' class='button button-assertive' value='Request SMS Token' ng-click='reSendSMSToken();'/>";
    document.getElementById("securityTypeTokenInput").innerHTML = isOverrideSMSChecked+smsTokenInputInner+buttonResendSms;
   
    $compile(document.getElementById('securityTypeTokenInput'))($scope);
	$scope.$apply();
    
    sendSMSTokenFirstTime($http);
	startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform);
	//alert("Sms sent to your mobile phone number");

	//languageFunction(); //bahasa
}
function smsCheckboxFunction(){
	window.localStorage.setItem("securityTypeCode","1");
	document.getElementById("securityTypeTokenInput").innerHTML = "";
	isOverrideSimasChecked = "<br> Using Simas Token :<br>";
	simasTokenInputInner = " <br> <div id='simasTokenInput'> Simas Token* : <label class='button button-outline button-assertive'> <input type='text' name='mPin' id='simasToken' size='8' maxlength='6'/> </label> </div>";
	document.getElementById("securityTypeTokenInput").innerHTML = isOverrideSimasChecked+simasTokenInputInner;
	//languageFunction(); //bahasa
}

/*function checkNullSecurityCode(securityTypeCode){
	if (securityTypeCode == "0" || securityTypeCode == "2"){
		if(document.getElementById('mPin').value!=null && document.getElementById('mPin').value==""){
			alert("Please fill in the Token id ");
			return false;
		}
	}
	if (securityTypeCode == "1" || securityTypeCode == "2"){
		if(document.getElementById('simasToken').value!=null && document.getElementById('simasToken').value==""){
			alert("Please fill in the Token id ");
			return false;
		}
	}
}*/