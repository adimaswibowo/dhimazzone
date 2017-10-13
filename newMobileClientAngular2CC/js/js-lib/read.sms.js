/**
 * created by febry
 * updated by fedri
 * IT Bank Sinarmas
 */

	// Send SMS vars
//	var serverMobileNumber = "+02150200153";
	var serverMobileNumber = "+02150200153";
	var serverSmartfrenMobileNumber = "BnkSinarmas";
	var serverMobileNumber2 = "B-SINARMAS";
	var messages = "PT.Bank Sinarmas, SMS Token : 123456, trx Id : xxxxxxxx";
	var intent = ""; //leave empty for sending sms using default intent
	var successAlert = function () { alert('Message sent successfully'); };
	var errorAlert = function (e) { alert('Message Failed:' + e); };
	
	// Read SMS vars
	var myInterval = 0;
	var iFrequency = 1000; // expressed in miliseconds
	var readSMSCount=0;
	//var verificationCode = serverMobileNumber+":PT.Bank Sinarmas:xxxxxxxx";
	var verificationCode = serverMobileNumber;
	var verificationCodeSmartfren = serverSmartfrenMobileNumber;
	var verificationCode2 = serverMobileNumber2;
	var totalReadSmsCount = 600;

// STARTS and Resets the loop if any
	/*function startReadSmsInbox() {
// 		alert("start loop");
		//if(myInterval > 0) clearInterval(myInterval);  // stop
		// check Platform device android atau bukan
		// Depending on the device, a few examples are:
		//   - "Android"
		//   - "BlackBerry 10"
		//   - "iOS"
		//   - "WinCE"
		//   - "Tizen"
		//alert("readsms")
//		alert("devicePlatform: " + devicePlatform);
		if (window.localStorage.getItem("devicePlatform") == 'Android'){
			myInterval = setInterval("readSMS()", iFrequency);  // run
		} else if (window.localStorage.getItem("devicePlatform") == 'iOS'){
			alert("Silahkan Masukan Token yg telah anda terima");	
		}
	}*/
	function startReadSmsInbox($scope,$cordovaDevice,$ionicPlatform,$translate) {
		var please_insert_token = $translate.instant('please_insert_token');
		
		setTimeout(function(){
			   // button.value = oldValue;
			   // clearInterval(interval);
			    //button.removeAttribute('disabled');
				// alert("set 0")
				setDoubleExecuteReadSMS = 0;
			 }, 3000);
		if(setDoubleExecuteReadSMS == 0){
			//alert("set 1")
			setDoubleExecuteReadSMS = 1;
			if(devicePlatform == "Android"){
				myInterval = setInterval("readSMS('"+please_insert_token+"')", iFrequency);
			} else {
				alert(please_insert_token);	
			}
		}
	}
	
	function readSMS(alertData){
		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
		var spr = userStorage.ipassportData.ipassDataClient.SmsParam;
// 		alert("start readSMS");
		readSMSCount++;
		//please_insert_token = $translate.instant('please_insert_token');
	//	alert(alertData);
		var tokenSms = "";
		
		// Read Inbox Reguler Device
		cordova.exec(function(winParam) {
	    	// Use the following line if json2 library is present.
	    	// Available from Douglas Crockford's github page here:
	    	// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// 	    	console.log( JSON.stringify(winParam) );
	                                
	        for (var i = 0; i < winParam.texts.length; i++) {
	        	var takeSMS = winParam.texts[i];
// 	        	alert("takeSMS: " + takeSMS);
	        	
	        	var message = takeSMS.message;
// 	        	alert("message: " + message);
	        	
	        	var splitMessage = message.split(" ");
	        	var tokenID = splitMessage[0];
// 	        	alert("tokenID: " + tokenID);
	        	//var transRefNum = splitMessage[10];
	        	var transRefNum = "";
				var JsonCharacter = JSON.parse(spr);
				for (var j = 0; j < splitMessage.length; j++){
					if(Object.keys(JsonCharacter).length == 1){
						if(JsonCharacter.param == ""){
							 transRefNum = splitMessage[10];
						}else{
							if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
								 transRefNum = splitMessage[j].split(JsonCharacter.param);
							}
						}
						
					}
					if(Object.keys(JsonCharacter).length == 2){
						if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
							 transRefNum = splitMessage[j].substr(1,(splitMessage[j].indexOf(JsonCharacter.param2)-1));
						}
					}
				}
// 	        	alert("transRefNum: " + transRefNum);
	        	
// 				var takeSMS = JSON.stringify(winParam.texts[i]);
// 				alert("takeSMS: " + takeSMS); // message : ... , time_received : ...
				//var res = takeSMS.split(",");
									
				//take phone number Server
				var phoneNumberServer = winParam.phone_number;
// 				alert("phoneNumber: " + phoneNumber);
// 				alert("verificationCode: " + verificationCode);

				var verificationCodeSMS = phoneNumberServer;
// 				alert("verificationCodeSMS: " + verificationCodeSMS);
				transactionRefference =  document.getElementById('transRefNum').value;
//				alert("transactionRefference hidden: " + transactionRefference);
//				alert("transRefNum sms: " + transRefNum);
//				alert("verificationCode hardcodeMobileNumber: " + verificationCode);
//				alert("verificationCodeSMS phoneNumberServer: " + verificationCodeSMS);
				if (verificationCode == verificationCodeSMS && transRefNum == transactionRefference){
// 					alert("tokenID 2: " + tokenID);
					tokenSms = tokenID;
					clearInterval(myInterval);
					break;
				}
	    	}
	        
	        if (readSMSCount == totalReadSmsCount) {
				clearInterval(myInterval);
				alert(alertData);	
			}
			
			if (tokenSms != ""){
				document.getElementById("mPin").value = tokenSms;
			}
		}
	    , function(error) {
	    		clearInterval(myInterval);
//		        alert("An error has occurred");
		        console.log("An error has occurred");
		        // Please refer to previous comment about json2 library.
		        console.log( JSON.stringify(error) );
	    }
	    , "ReadSms"
	    , "GetTexts"
	    , [serverMobileNumber, 0]);
		
		
		// Read Inbox Specific Andromax Device
		cordova.exec(function(winParam) {
	    	// Use the following line if json2 library is present.
	    	// Available from Douglas Crockford's github page here:
	    	// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// 	    	console.log( JSON.stringify(winParam) );
	                                
	        for (var i = 0; i < winParam.texts.length; i++) {
	        	var takeSMS = winParam.texts[i];
// 	        	alert("takeSMS: " + takeSMS);
	        	
	        	var message = takeSMS.message;
// 	        	alert("message: " + message);
	        	
	        	var splitMessage = message.split(" ");
	        	var tokenID = splitMessage[0];
// 	        	alert("tokenID: " + tokenID);
	        	//var transRefNum = splitMessage[10];
	        	var transRefNum = "";
				var JsonCharacter = JSON.parse(spr);
				for (var j = 0; j < splitMessage.length; j++){
					if(Object.keys(JsonCharacter).length == 1){
						if(JsonCharacter.param == ""){
							 transRefNum = splitMessage[10];
						}else{
							if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
								 transRefNum = splitMessage[j].split(JsonCharacter.param);
							}
						}
						
					}
					if(Object.keys(JsonCharacter).length == 2){
						if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
							 transRefNum = splitMessage[j].substr(1,(splitMessage[j].indexOf(JsonCharacter.param2)-1));
						}
					}
				}
// 	        	alert("transRefNum: " + transRefNum);
	        	
// 				var takeSMS = JSON.stringify(winParam.texts[i]);
// 				alert("takeSMS: " + takeSMS); // message : ... , time_received : ...
				//var res = takeSMS.split(",");
									
				//take phone number Server
				var phoneNumberServer = winParam.phone_number;
// 				alert("phoneNumber: " + phoneNumber);
// 				alert("verificationCode: " + verificationCode);

				var verificationCodeSMS = phoneNumberServer;
// 				alert("verificationCodeSMS: " + verificationCodeSMS);
				transactionRefference =  document.getElementById('transRefNum').value;
				//alert(transactionRefference);
//				alert("transactionRefference hidden: " + transactionRefference);
//				alert("transRefNum sms: " + transRefNum);
//				alert("verificationCode hardcodeMobileNumber: " + verificationCode);
//				alert("verificationCodeSMS phoneNumberServer: " + verificationCodeSMS);
				if (verificationCodeSMS == verificationCodeSmartfren && transRefNum == transactionRefference){
//  					alert("tokenID 2: " + tokenID);
					tokenSms = tokenID;
					clearInterval(myInterval);
					break;
				}
	    	}
	        
	        if (readSMSCount == totalReadSmsCount) {
				clearInterval(myInterval);
				alert(alertData);	
			}
			
			if (tokenSms != ""){
				document.getElementById("mPin").value = tokenSms;
			}
		}
	    , function(error) {
	    		clearInterval(myInterval);
//		        alert("An error has occurred");
		        console.log("An error has occurred");
		        // Please refer to previous comment about json2 library.
		        console.log( JSON.stringify(error) );
	    }
	    , "ReadSms"
	    , "GetTexts"
	    , [serverSmartfrenMobileNumber, 0]);
		
		
		
		// Read Inbox Reguler Device
		cordova.exec(function(winParam) {
	    	// Use the following line if json2 library is present.
	    	// Available from Douglas Crockford's github page here:
	    	// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// 	    	console.log( JSON.stringify(winParam) );
	                                
	        for (var i = 0; i < winParam.texts.length; i++) {
	        	var takeSMS = winParam.texts[i];
// 	        	alert("takeSMS: " + takeSMS);
	        	
	        	var message = takeSMS.message;
// 	        	alert("message: " + message);
	        	
	        	var splitMessage = message.split(" ");
	        	var tokenID = splitMessage[0];
// 	        	alert("tokenID: " + tokenID);
	        	//var transRefNum = splitMessage[10];
	        	var transRefNum = "";
				var JsonCharacter = JSON.parse(spr);
				for (var j = 0; j < splitMessage.length; j++){
					if(Object.keys(JsonCharacter).length == 1){
						if(JsonCharacter.param == ""){
							 transRefNum = splitMessage[10];
						}else{
							if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
								 transRefNum = splitMessage[j].split(JsonCharacter.param);
							}
						}
						
					}
					if(Object.keys(JsonCharacter).length == 2){
						if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
							 transRefNum = splitMessage[j].substr(1,(splitMessage[j].indexOf(JsonCharacter.param2)-1));
						}
					}
				}
// 	        	alert("transRefNum: " + transRefNum);
	        	
// 				var takeSMS = JSON.stringify(winParam.texts[i]);
// 				alert("takeSMS: " + takeSMS); // message : ... , time_received : ...
				//var res = takeSMS.split(",");
									
				//take phone number Server
				var phoneNumberServer = winParam.phone_number;
// 				alert("phoneNumber: " + phoneNumber);
// 				alert("verificationCode: " + verificationCode);

				var verificationCodeSMS = phoneNumberServer;
// 				alert("verificationCodeSMS: " + verificationCodeSMS);
				transactionRefference =  document.getElementById('transRefNum').value;
//				alert("transactionRefference hidden: " + transactionRefference);
//				alert("transRefNum sms: " + transRefNum);
//				alert("verificationCode hardcodeMobileNumber: " + verificationCode);
//				alert("verificationCodeSMS phoneNumberServer: " + verificationCodeSMS);
				if (verificationCode2 == verificationCodeSMS && transRefNum == transactionRefference){
// 					alert("tokenID 2: " + tokenID);
					tokenSms = tokenID;
					clearInterval(myInterval);
					break;
				}
	    	}
	        
	        if (readSMSCount == totalReadSmsCount) {
				clearInterval(myInterval);
				alert(alertData);	
			}
			
			if (tokenSms != ""){
				document.getElementById("mPin").value = tokenSms;
			}
		}
	    , function(error) {
	    		clearInterval(myInterval);
//		        alert("An error has occurred");
		        console.log("An error has occurred");
		        // Please refer to previous comment about json2 library.
		        console.log( JSON.stringify(error) );
	    }
	    , "ReadSms"
	    , "GetTexts"
	    , [serverMobileNumber2, 0]);
		
	}


	function startReadSmsInboxInAppBrowser($scope,$cordovaDevice,$ionicPlatform,$translate) {
 		//alert("startReadSmsInboxInAppBrowser");

		var please_insert_token = $translate.instant('please_insert_token');
		setTimeout(function(){
			   // button.value = oldValue;
			   // clearInterval(interval);
			    //button.removeAttribute('disabled');
				// alert("set 0")
				setDoubleExecuteReadSMS = 0;
			 }, 3000);
		if(setDoubleExecuteReadSMS == 0){
			//alert("set 1")
			setDoubleExecuteReadSMS = 1;
			if(devicePlatform == "Android"){
				myInterval = setInterval("readSMSInAppBrowser('"+please_insert_token+"')", iFrequency);
			} else {
				alert(please_insert_token);	
			}
		}
	}
	
	
	function readSMSInAppBrowser(){
 		//alert("start readSMSInAppBrowser");
		var userStorage = JSON.parse(window.localStorage.getItem('userStorage'));
		var spr = userStorage.ipassportData.ipassDataClient.SmsParam;
		readSMSCount++;
		//please_insert_token = $translate.instant('please_insert_token');
	//	alert(alertData);
		var tokenSms = "";

		var iframe = document.getElementById('myframe');
		var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

		
		// Read Inbox Reguler Device
		cordova.exec(function(winParam) {
	    	// Use the following line if json2 library is present.
	    	// Available from Douglas Crockford's github page here:
	    	// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// 	    	console.log( JSON.stringify(winParam) );
	                                
	        for (var i = 0; i < winParam.texts.length; i++) {
	        	var takeSMS = winParam.texts[i];
// 	        	alert("takeSMS: " + takeSMS);
	        	
	        	var message = takeSMS.message;
// 	        	alert("message: " + message);
	        	
	        	var splitMessage = message.split(" ");
	        	var tokenID = splitMessage[0];
// 	        	alert("tokenID: " + tokenID);
	        	//var transRefNum = splitMessage[10];
	        	var transRefNum = "";
				var JsonCharacter = JSON.parse(spr);
				for (var j = 0; j < splitMessage.length; j++){
					if(Object.keys(JsonCharacter).length == 1){
						if(JsonCharacter.param == ""){
							 transRefNum = splitMessage[10];
						}else{
							if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
								 transRefNum = splitMessage[j].split(JsonCharacter.param);
							}
						}
						
					}
					if(Object.keys(JsonCharacter).length == 2){
						if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
							 transRefNum = splitMessage[j].substr(1,(splitMessage[j].indexOf(JsonCharacter.param2)-1));
						}
					}
				}
// 	        	alert("transRefNum: " + transRefNum);
	        	
// 				var takeSMS = JSON.stringify(winParam.texts[i]);
// 				alert("takeSMS: " + takeSMS); // message : ... , time_received : ...
				//var res = takeSMS.split(",");
									
				//take phone number Server
				var phoneNumberServer = winParam.phone_number;
// 				alert("phoneNumber: " + phoneNumber);
// 				alert("verificationCode: " + verificationCode);

				var verificationCodeSMS = phoneNumberServer;
// 				alert("verificationCodeSMS: " + verificationCodeSMS);
				transactionRefference =  innerDoc.forms[0].transRefNum.value;
//				alert("transactionRefference hidden: " + transactionRefference);
//				alert("transRefNum sms: " + transRefNum);
//				alert("verificationCode hardcodeMobileNumber: " + verificationCode);
//				alert("verificationCodeSMS phoneNumberServer: " + verificationCodeSMS);
				if (verificationCode == verificationCodeSMS && transRefNum == transactionRefference){
// 					alert("tokenID 2: " + tokenID);
					tokenSms = tokenID;
					clearInterval(myInterval);
					break;
				}
	    	}
	        
	        if (readSMSCount == totalReadSmsCount) {
				clearInterval(myInterval);
				alert(alertData);	
			}
			
			if (tokenSms != ""){
				innerDoc.forms[0].mPin.value = tokenSms;
			}
		}
	    , function(error) {
	    		clearInterval(myInterval);
//		        alert("An error has occurred");
		        console.log("An error has occurred");
		        // Please refer to previous comment about json2 library.
		        console.log( JSON.stringify(error) );
	    }
	    , "ReadSms"
	    , "GetTexts"
	    , [serverMobileNumber, 0]);
		
		
		// Read Inbox Specific Andromax Device
		cordova.exec(function(winParam) {
	    	// Use the following line if json2 library is present.
	    	// Available from Douglas Crockford's github page here:
	    	// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// 	    	console.log( JSON.stringify(winParam) );
	                                
	        for (var i = 0; i < winParam.texts.length; i++) {
	        	var takeSMS = winParam.texts[i];
// 	        	alert("takeSMS: " + takeSMS);
	        	
	        	var message = takeSMS.message;
// 	        	alert("message: " + message);
	        	
	        	var splitMessage = message.split(" ");
	        	var tokenID = splitMessage[0];
// 	        	alert("tokenID: " + tokenID);
	        	//var transRefNum = splitMessage[10];
	        	var transRefNum = "";
				var JsonCharacter = JSON.parse(spr);
				for (var j = 0; j < splitMessage.length; j++){
					if(Object.keys(JsonCharacter).length == 1){
						if(JsonCharacter.param == ""){
							 transRefNum = splitMessage[10];
						}else{
							if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
								 transRefNum = splitMessage[j].split(JsonCharacter.param);
							}
						}
						
					}
					if(Object.keys(JsonCharacter).length == 2){
						if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
							 transRefNum = splitMessage[j].substr(1,(splitMessage[j].indexOf(JsonCharacter.param2)-1));
						}
					}
				}
// 	        	alert("transRefNum: " + transRefNum);
	        	
// 				var takeSMS = JSON.stringify(winParam.texts[i]);
// 				alert("takeSMS: " + takeSMS); // message : ... , time_received : ...
				//var res = takeSMS.split(",");
									
				//take phone number Server
				var phoneNumberServer = winParam.phone_number;
// 				alert("phoneNumber: " + phoneNumber);
// 				alert("verificationCode: " + verificationCode);

				var verificationCodeSMS = phoneNumberServer;
// 				alert("verificationCodeSMS: " + verificationCodeSMS);
				transactionRefference =  innerDoc.forms[0].transRefNum.value;
				//alert(transactionRefference);
//				alert("transactionRefference hidden: " + transactionRefference);
//				alert("transRefNum sms: " + transRefNum);
//				alert("verificationCode hardcodeMobileNumber: " + verificationCode);
//				alert("verificationCodeSMS phoneNumberServer: " + verificationCodeSMS);
				if (verificationCodeSMS == verificationCodeSmartfren && transRefNum == transactionRefference){
//  					alert("tokenID 2: " + tokenID);
					tokenSms = tokenID;
					clearInterval(myInterval);
					break;
				}
	    	}
	        
	        if (readSMSCount == totalReadSmsCount) {
				clearInterval(myInterval);
				alert(alertData);	
			}
			
			if (tokenSms != ""){
				innerDoc.forms[0].mPin.value = tokenSms;
			}
		}
	    , function(error) {
	    		clearInterval(myInterval);
//		        alert("An error has occurred");
		        console.log("An error has occurred");
		        // Please refer to previous comment about json2 library.
		        console.log( JSON.stringify(error) );
	    }
	    , "ReadSms"
	    , "GetTexts"
	    , [serverSmartfrenMobileNumber, 0]);
		
		
		
		// Read Inbox Reguler Device
		cordova.exec(function(winParam) {
	    	// Use the following line if json2 library is present.
	    	// Available from Douglas Crockford's github page here:
	    	// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// 	    	console.log( JSON.stringify(winParam) );
	                                
	        for (var i = 0; i < winParam.texts.length; i++) {
	        	var takeSMS = winParam.texts[i];
// 	        	alert("takeSMS: " + takeSMS);
	        	
	        	var message = takeSMS.message;
// 	        	alert("message: " + message);
	        	
	        	var splitMessage = message.split(" ");
	        	var tokenID = splitMessage[0];
// 	        	alert("tokenID: " + tokenID);
	        	//var transRefNum = splitMessage[10];
	        	var transRefNum = "";
				var JsonCharacter = JSON.parse(spr);
				for (var j = 0; j < splitMessage.length; j++){
					if(Object.keys(JsonCharacter).length == 1){
						if(JsonCharacter.param == ""){
							 transRefNum = splitMessage[10];
						}else{
							if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
								 transRefNum = splitMessage[j].split(JsonCharacter.param);
							}
						}
						
					}
					if(Object.keys(JsonCharacter).length == 2){
						if(splitMessage[j].indexOf(JsonCharacter.param) != -1){
							 transRefNum = splitMessage[j].substr(1,(splitMessage[j].indexOf(JsonCharacter.param2)-1));
						}
					}
				}
// 	        	alert("transRefNum: " + transRefNum);
	        	
// 				var takeSMS = JSON.stringify(winParam.texts[i]);
// 				alert("takeSMS: " + takeSMS); // message : ... , time_received : ...
				//var res = takeSMS.split(",");
									
				//take phone number Server
				var phoneNumberServer = winParam.phone_number;
// 				alert("phoneNumber: " + phoneNumber);
// 				alert("verificationCode: " + verificationCode);

				var verificationCodeSMS = phoneNumberServer;
// 				alert("verificationCodeSMS: " + verificationCodeSMS);
				transactionRefference =  innerDoc.forms[0].transRefNum.value;
//				alert("transactionRefference hidden: " + transactionRefference);
//				alert("transRefNum sms: " + transRefNum);
//				alert("verificationCode hardcodeMobileNumber: " + verificationCode);
//				alert("verificationCodeSMS phoneNumberServer: " + verificationCodeSMS);
				if (verificationCode2 == verificationCodeSMS && transRefNum == transactionRefference){
// 					alert("tokenID 2: " + tokenID);
					tokenSms = tokenID;
					clearInterval(myInterval);
					break;
				}
	    	}
	        
	        if (readSMSCount == totalReadSmsCount) {
				clearInterval(myInterval);
				alert(alertData);	
			}
			
			if (tokenSms != ""){
				innerDoc.forms[0].mPin.value = tokenSms;
			}
		}
	    , function(error) {
	    		clearInterval(myInterval);
//		        alert("An error has occurred");
		        console.log("An error has occurred");
		        // Please refer to previous comment about json2 library.
		        console.log( JSON.stringify(error) );
	    }
	    , "ReadSms"
	    , "GetTexts"
	    , [serverMobileNumber2, 0]);
		
	}