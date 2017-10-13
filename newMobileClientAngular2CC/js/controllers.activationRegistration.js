var activationRegistrationControllers = angular.module('activationRegistrationControllers',['ngTouch']);

//var ipaddress = "http://localhost:8080/IBORCL";
//var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
//var isDevice = window.localStorage.getItem("isDevice");

var langSimobi = window.localStorage.getItem("langSimobi");

if (langSimobi == null || langSimobi == "" || langSimobi == "en" || langSimobi == "null"){
	window.localStorage.setItem('langSimobi',"en");
} else {
	window.localStorage.setItem('langSimobi',"id");
}

//untuk getters & setters
activationRegistrationControllers.factory('activationRegistrationData', function () {
	var registrationInputData = "";
	var activationConfirmData = "";
	var registrationValidateTokenData = "";
	var registrationActivateUserData = "";
	
    return {
        getRegistrationInputData: function () {
            return registrationInputData;
        },
        setRegistrationInputData: function (newRegistrationInputData) {
        	registrationInputData = newRegistrationInputData;
        },
        
        getActivationConfirmData: function () {
            return activationConfirmData;
        },
        setActivationConfirmData: function (newActivationConfirmData) {
        	activationConfirmData = newActivationConfirmData;
        },

        getRegistrationValidateTokenData: function () {
            return registrationValidateTokenData;
        },
        setRegistrationValidateTokenData: function (newRegistrationValidateTokenData) {
        	registrationValidateTokenData = newRegistrationValidateTokenData;
        },

        getRegistrationActivateUserData: function () {
            return registrationActivateUserData;
        },
        setRegistrationActivateUserData: function (newRegistrationActivateUserData) {
        	registrationActivateUserData = newRegistrationActivateUserData;
        }
    };
});


/** -------------------- **/
/** Activation           **/
/** -------------------- **/
activationRegistrationControllers.controller('activationInputCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup, $ionicLoading) {
//	alert("activationInputCtrl");
   	loadFontSize();

	$scope.activateSimobiPlus = "true";
 	$scope.activateViaAtm = "";

 	$scope.activateSimobiPlusInput = function(){
	 	$scope.activateSimobiPlus = "true";
	 	$scope.activateViaAtm = "";
  	} 

 	$scope.activateViaAtmInput = function(){
	 	$scope.activateSimobiPlus = "";
	 	$scope.activateViaAtm = "true";  	
	}
 	
 	$scope.loginData = {};
 	
 	$scope.doLoginActivation = function(){
// 		alert("doLoginActivation");

 		var username = $scope.loginData.username;
 		var passwordTemp = $scope.loginData.password;
 		//console.debug('username:'+username);
 		//console.debug('passwordTemp:'+passwordTemp);
 		if (username == null || username == "" || passwordTemp == "" || passwordTemp == null){
 			if($scope.activateSimobiPlus == "true"){
 				alert("Username or Password is empty");
 			} else {
 				alert("Activation Code or PIN Code is empty");
 			}
 			return false;
 		}
 		
 		/* Implement HSM javascript for password*/
 		var password = getRPIN(passwordTemp);
 		//console.debug("password: " + password);
// 		document.getElementById('password').value = "";
 		var E2EE_RANDOM = clientRandom;
 		//console.debug("E2EE_RANDOM: " + E2EE_RANDOM);
 		
 		var newdata={};
 		newdata['usernameAct']=username;
 		newdata['pinIb']=password;
 		newdata['sessionCode']=window.localStorage.getItem("sessionCode");
 		newdata['E2EE_RANDOM']=E2EE_RANDOM;
 		
 		var datajson=JSON.stringify(newdata);
 		//console.debug("datajson:"+datajson);
 		
 		var url=ipaddress+"/rest/userActivationV2/login";
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
					window.localStorage.setItem("ipassportAct", data.ipassport);
					//var lastActiveDate = new Date(); // Now
			        //localStorage.setItem('lastActiveDate', lastActiveDate);
			        
			        window.location.href = "#/app/activationConfirm";
					
				} else if (data.responseCode == "10"){
					// Change Password using HSM
					console.debug("Change Password using HSM");
					alert(data.responseMessage);
					window.location.href = "#/app/main";
					
					// pastikan sidebar nya public
//					var pubMenu = document.querySelectorAll('.publicMenu'), i;
//					localStorage.setItem('genericLevel', '');
//					for (var i = 0; i < pubMenu.length; i ++) {
//						pubMenu[i].style.display = '';
//					}
//					var custMenu = document.querySelectorAll('.customerMenu'), i;
//
//					for (var i = 0; i < custMenu.length; i ++) {
//						custMenu[i].style.display = 'none';
//					}
//					
//					// call html change pass HSM
//					console.debug('call html change pass HSM');
//					sessionStorage.setItem("tempUsername",data.tempUsername);
//					goToChangePasswordHsmForActivationHtml();
				} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				return false;
			}
		}).error(function(){
			$ionicLoading.hide();
			alert("Unable to process transaction");
			return false;
		});
 	}
})
;

activationRegistrationControllers.controller('activationConfirmCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup, $ionicLoading) {
//	alert("activationConfirmCtrl");

   	loadFontSize();

	$scope.doLogoutActivation = function(){
		console.log("in doLogoutActivation");

		var newdata={};
		newdata['ipassport']=window.localStorage.getItem("ipassportAct");
		var datajson=JSON.stringify(newdata);
		
		var url=ipaddress+"/rest/userActivationV2/logout";
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		$http.post(url,datajson).success(function(data) {
			$ionicLoading.hide();
			//console.debug("data.responseCode: " + data.responseCode);
	    	if (data.responseCode == "00"){
	    		console.debug("back to generic menu");
	    		window.location.href = "#/app/main";
	    	} else {
	    		alert(data.responseMessage);
				return false;
	    	}
		}).error(function(){
			$ionicLoading.hide();
			alert("Unable to process transaction");
			return false;
		});
	}
	
	$scope.doSubmitEmailMdn = function(){
		
		var emailReg= /^\w+[\w-\.]*\@[\w\.-]*$/;
		//var emailReg= /^.*$/
		var mobileNoReg=/^-{0,1}\d*\.{0,1}\d+$/;
		
		var mobileNumber = document.getElementById('mobileNumber').value;
		//console.debug('mobileNumber:'+mobileNumber);
		var email = document.getElementById('email').value;
		//console.debug('email:'+email);
		if (mobileNumber == null || mobileNumber == "" || email == "" || email == null){
			alert("Phone Number or Email is empty");
			return false;
		}
		
		var isAgree=document.getElementById('doAgreeClick').checked;
		//console.debug('isAgree:'+isAgree);
		
		if (!mobileNoReg.test(mobileNumber)){
			alert("Field Phone number must be numeric");
			return false;
		} else {
			var areaCode = mobileNumber.substring(0,1);
			if (areaCode == '0'){
				mobileNumber = '62'+mobileNumber.substring(1,mobileNumber.length);
			}
		}
		
		if (!emailReg.test(email)){
			alert("Field email is invalid");
			return false;
		}
		
		//console.debug("userLoginName: "+window.localStorage.getItem("userLoginName"));
		
		var newdata={};
		newdata['mobileNumber']=mobileNumber;
		newdata['email']=email;
		newdata['ipassport']=window.localStorage.getItem("ipassportAct");
		newdata['isAgree']=isAgree;
		
		var datajson=JSON.stringify(newdata);
		//console.debug("datajson:"+datajson);
		
		var url=ipaddress+"/rest/userActivationV2/validateUserAct";
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
					activationRegistrationData.setActivationConfirmData(data);
			    	window.location.href = "#/app/activationResult";
					
//					$('#content').load('html-content/genericMessageActivate.html', function(){
//						console.debug("HTML: html-content/genericMessageActivate.html");
//						languageFunction();
//						$("#message").append(data.responseMessage);
//					});
				} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				return false;
			}
		}).error(function(){
			$ionicLoading.hide();
			alert("Unable to process transaction");
			return false;
		});
	}
})
;

activationRegistrationControllers.controller('activationResultCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup) {
//	alert("activationResultCtrl");

   	loadFontSize();

	var data = activationRegistrationData.getActivationConfirmData();
	$("#message").append(data.responseMessage);
	
	$scope.backToMain = function(){
		window.location.href = "#app/main";
	}
})
;

/** -------------------- **/
/** Registration           **/
/** -------------------- **/
activationRegistrationControllers.controller('registrationInputCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup, $ionicLoading) {
//	alert("registrationInputCtrl");

   	loadFontSize();

	var id=Math.random() * 1000;
	$('#captchaImg').attr('src',ipaddress+"/captcha.do?id="+id+"&ipassport="+id);
	$('#captchaId').attr('value',id);
	
	$scope.reloadCaptcha = function() {
// 		alert('reload!');
		//initOption();
		var random = Math.random() * 1000;
		var url = ipaddress+"/captcha.do?id=" + random + "&ipassport=" + random;
//	 	var url = "captcha.do?id=" + random;
		//alert(url);
// 		$('#captchaImg').attr('src',url);
		document.getElementById("captchaImg").src = url;
		document.getElementById("captchaId").value = random;
		return false;
	}
	
	$scope.doRegister = function() {
		
//		alert("doRegister");
		var emailReg= /^\w+[\w-\.]*\@[\w\.-]*$/;
		//var emailReg= /^.*$/
		var mobileNoReg=/^-{0,1}\d*\.{0,1}\d+$/;
		
		var idKtpReg = /^\d{16}$/;
		
		var cardNumber = document.getElementById('cardNumber').value;
		//console.debug('cardNumber:'+cardNumber);
		//var accountNumber = document.getElementById('accountNumber').value;
		//console.debug('accountNumber:'+accountNumber);
		var phoneNumber = document.getElementById('phoneNumber').value;
		//console.debug('phoneNumber:'+phoneNumber);
		var email = document.getElementById('email').value;
		//console.debug('email:'+email);
		var idKtp = document.getElementById('idKtp').value;
		//console.debug('idKtp:'+idKtp);
		var dateOfBirth = document.getElementById('dateOfBirth').value;
		//console.debug('dateOfBirth:'+dateOfBirth);
		var captchaId=document.getElementById('captchaId').value;
		//console.debug('captchaId:'+captchaId);
		var captchaInput=document.getElementById('captchaInput').value;
		//console.debug('captchaInput:'+captchaInput);
		
		var isAgree=document.getElementById('doAgreeClick').checked;
		//console.debug('isAgree:'+isAgree);
		var alertErrorData='';
		if (phoneNumber == null || phoneNumber == "" || email == null || email == ""
				|| idKtp == null || idKtp == "" || dateOfBirth == null || dateOfBirth == ""
				|| cardNumber == null || cardNumber == ""){
			//alert("One of fields is empty /br");
			//return false;
			alertErrorData = alertErrorData+'- One of fields is empty \r\n';
		}
		
		if (!mobileNoReg.test(cardNumber)){
		 	//alert("Field account number must be numeric /br");
		 	//return false;
		 	alertErrorData = alertErrorData+'- Field card number must be numeric \r\n';
		} 
		
		if (!mobileNoReg.test(phoneNumber)){
			//alert("Field phone number must be numeric /br");
			//return false;
			alertErrorData = alertErrorData+'- Field phone number must be numeric \r\n';

		} else {
			var areaCode = phoneNumber.substring(0,1);
			if (areaCode == '0'){
				phoneNumber = '62'+phoneNumber.substring(1,phoneNumber.length);
			}
		}
		
		if (!emailReg.test(email)){
			//alert("Field email is invalid /br");
			//return false;
			alertErrorData = alertErrorData+'- Field email is invalid \r\n';
		}
		
		//if (!mobileNoReg.test(idKtp)){
			//alert("Field ID KTP must be numeric /br");
			//return false;
			//alertErrorData = alertErrorData+'- Field ID KTP must be numeric \r\n';
		//} 

		if (!mobileNoReg.test(dateOfBirth)){
		 	//alert("Field account number must be numeric /br");
		 	//return false;
		 	alertErrorData = alertErrorData+'- Field birthdate must be numeric \r\n';
		} 
		
		// if (!idKtpReg.test(idKtp)){
		// 	//alert("Field ID KTP must be 16 digit number /br");
		// 	//return false;
		// 	alertErrorData = alertErrorData+'- Field ID KTP must be 16 digit number \r\n';
		// }
		if(alertErrorData != ''){
			alert(alertErrorData);
			return false;
		}
		var newdata={};
		newdata['cardNumber']=cardNumber;
		newdata['mobileNumber']=phoneNumber;
		newdata['email']=email;
		newdata['idKtp']=idKtp;
		newdata['birthdate']=dateOfBirth;
		
		newdata['captchaId']=captchaId;
		newdata['ipassport']=captchaId;
		newdata['captchaInput']=captchaInput;
		newdata['isAgree']=isAgree;
		
		var userStorageMap = window.localStorage.getItem("userStorage");
		//console.debug('userStorageMap:'+userStorageMap);
		if (userStorageMap != null){
			userStorageMap = JSON.parse(userStorageMap);
			
			if (userStorageMap.ipassport!=null){
				newdata['ipassport']=userStorageMap.ipassport;
			}
		}
		
		var datajson=JSON.stringify(newdata);
		//console.debug("datajson:"+datajson);
		
		var url=ipaddress+"/rest/userRegistrationV2/register";
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
					activationRegistrationData.setRegistrationInputData(data);

			    	window.location.href = "#/app/registrationValidateToken/"+data.t;
				} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				return false;
			}
		}).error(function(){
			$ionicLoading.hide();

			alert("Unable to process transaction");
			return false;
		});
	}
});

activationRegistrationControllers.controller('registrationValidateTokenCtrl', function($stateParams, $scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup, $ionicLoading) {
	//console.debug("registrationValidateTokenCtrl");
	//console.debug("email Token: " + $stateParams.t);

	var t = $stateParams.t;

   	loadFontSize();

	var data = activationRegistrationData.getRegistrationInputData();
	//$("#message").append(data.responseMessage);

	$scope.doResendSms = function(){
		console.debug("*** doResendSms");
		
		// call ke server 
		var newdata={};
		newdata['t']=t;
		
		var userStorageMap = window.localStorage.getItem("userStorage");
		//console.debug('userStorageMap:'+userStorageMap);
		if (userStorageMap != null){
			userStorageMap = JSON.parse(userStorageMap);
			
			if (userStorageMap.ipassport!=null){
				newdata['ipassport']=userStorageMap.ipassport;
			}
		}
		
		var datajson=JSON.stringify(newdata);
		//console.debug("datajson:"+datajson);
		
		var url=ipaddress+"/rest/userRegistrationV2/resendSmsToken";
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
					// activationRegistrationData.setRegistrationValidateTokenData(data);
			  		// window.location.href = "#/app/registrationActivateUser";
			  		alert("We already send sms token, please check your inbox");
				} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				return false;
			}
		}).error(function(){
			$ionicLoading.hide();

			alert("Unable to process transaction");
			return false;
		});
	}

	$scope.doValidateToken = function(){
		var smsToken = document.getElementById('smsToken').value;
		//console.debug('smsToken: '+smsToken);
		var emailToken = document.getElementById('emailToken').value;
		//console.debug('emailToken: '+emailToken);

		var alertErrorData='';
		if (smsToken == null || smsToken == "" || emailToken == null || emailToken == ""){
			//alert("One of fields is empty /br");
			//return false;
			alertErrorData = alertErrorData+'- One of fields is empty \r\n';
		}

		if(alertErrorData != ''){
			alert(alertErrorData);
			return false;
		}

		var newdata={};
		newdata['smsToken']=smsToken;
		newdata['emailToken']=emailToken;
		
		var userStorageMap = window.localStorage.getItem("userStorage");
		//console.debug('userStorageMap:'+userStorageMap);
		if (userStorageMap != null){
			userStorageMap = JSON.parse(userStorageMap);
			
			if (userStorageMap.ipassport!=null){
				newdata['ipassport']=userStorageMap.ipassport;
			}
		}
		
		var datajson=JSON.stringify(newdata);
		//console.debug("datajson:"+datajson);
		
		var url=ipaddress+"/rest/userRegistrationV2/registerValidationToken";
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
					activationRegistrationData.setRegistrationValidateTokenData(data);
			    	window.location.href = "#/app/registrationActivateUser";
				} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				return false;
			}
		}).error(function(){
			$ionicLoading.hide();

			alert("Unable to process transaction");
			return false;
		});
	}
	
	$scope.backToMain = function(){
		window.location.href = "#app/main";
	}
});

activationRegistrationControllers.controller('registrationActivateUserCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup, $ionicLoading) {
	console.debug("registrationActivateUserCtrl");

   	loadFontSize();

	var sessionData = activationRegistrationData.getRegistrationValidateTokenData();
	//$("#message").append(data.responseMessage);
	$scope.isAlreadyExist=false;
	var loginName=sessionData.loginName;
	if(loginName==null || loginName=="" || loginName=="undefined" ){
		$scope.isAlreadyExist=false;
	}else{
		$scope.isAlreadyExist=true;
	}
	$scope.username=loginName;

	$scope.doActivateUser = function(){
		var username = document.getElementById('username').value;
		//console.debug('username: '+username);
		var password = document.getElementById('password').value;
		//console.debug('password: '+password);
		var passwordConfirm = document.getElementById('passwordConfirm').value;
		//console.debug('passwordConfirm: '+passwordConfirm);

		var alertErrorData='';
		if (username == null || username == "" || password == null || password == "" || passwordConfirm == null || passwordConfirm == ""){
			//alert("One of fields is empty /br");
			//return false;
			alertErrorData = alertErrorData+'- One of fields is empty \r\n';
		}

		if (password != passwordConfirm){
			//alert("One of fields is empty /br");
			//return false;
			alertErrorData = alertErrorData+'- Password must be same with Confirm Password \r\n';
		}

		if(alertErrorData != ''){
			alert(alertErrorData);
			return false;
		}

		var newdata={};
		newdata['username']=username;
		newdata['password']=password;
		newdata['passwordConfirm']=passwordConfirm;
		newdata['transRefNum']=sessionData.transRefNum;
		
		var userStorageMap = window.localStorage.getItem("userStorage");
		//console.debug('userStorageMap:'+userStorageMap);
		if (userStorageMap != null){
			userStorageMap = JSON.parse(userStorageMap);
			
			if (userStorageMap.ipassport!=null){
				newdata['ipassport']=userStorageMap.ipassport;
			}
		}
		
		activationRegistrationData.setRegistrationActivateUserData(newdata);
		window.location.href = "#/app/registrationActivateUserConfirm";
	}
	
	$scope.backToMain = function(){
		window.location.href = "#app/main";
	}
});

activationRegistrationControllers.controller('registrationActivateUserConfirmCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup, $ionicLoading) {
	console.debug("registrationActivateUserConfirmCtrl");

   	loadFontSize();

	var sessionData = activationRegistrationData.getRegistrationActivateUserData();
	//$("#message").append(data.responseMessage);

	$scope.username = sessionData.username;

	$scope.doActivateUserOk = function(){
		var username = sessionData.username;
		//console.debug('username: '+username);
		var password = sessionData.password;
		//console.debug('password: '+password);
		var passwordConfirm = sessionData.passwordConfirm;
		//console.debug('passwordConfirm: '+passwordConfirm);

		var sessionCode = window.localStorage.getItem("sessionCode");
		//console.debug('sessionCode: '+sessionCode);

		var newdata={};
		newdata['username']=username;
		newdata['password']=password;
		newdata['passwordConfirm']=passwordConfirm;
		newdata['transRefNum']=sessionData.transRefNum;
		newdata['sessionCode']=sessionCode;
		
		var userStorageMap = window.localStorage.getItem("userStorage");
		//console.debug('userStorageMap:'+userStorageMap);
		if (userStorageMap != null){
			userStorageMap = JSON.parse(userStorageMap);
			
			if (userStorageMap.ipassport!=null){
				newdata['ipassport']=userStorageMap.ipassport;
			}
		}
		
		var datajson=JSON.stringify(newdata);
		//console.debug("datajson:"+datajson);
		
		var url=ipaddress+"/rest/userRegistrationV2/registerActivateUserConfirm";
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
					//activationRegistrationData.setRegistrationInputData(data);

					_updateUserStorageAfterLogin(data);

					var lastActiveDate = new Date(); // Now
		        	localStorage.setItem('lastActiveDate', lastActiveDate);

		        	createInternationalization(data);

			    	window.location.href = "#/app/registrationActivateUserOk";
				} else {
					alert(data.responseMessage);
					return false;
				}
			} else {
				return false;
			}
		}).error(function(){
			$ionicLoading.hide();

			alert("Unable to process transaction");
			return false;
		});
	}
	
	$scope.backToMain = function(){
		window.location.href = "#app/main";
	}
});

activationRegistrationControllers.controller('registrationActivateUserOkCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup, $ionicLoading, $window) {
	console.debug("registrationActivateUserOkCtrl");

   	loadFontSize();

	//var sessionData = activationRegistrationData.getRegistrationActivateUserData();
	//$("#message").append(data.responseMessage);

	$scope.doLoginToCustomerPage = function(){
		console.debug("doLoginToCustomerPage");
		$window.location.reload();
		window.location.href = "";
	}

	$scope.doLogoutToMainPage = function(){
		console.debug("doLogoutToMainPage");
		logout($scope, $http, $window,$ionicLoading);
	}
	
	$scope.backToMain = function(){
		window.location.href = "#app/main";
	}
});

activationRegistrationControllers.controller('registrationResultCtrl', function($scope, $routeParams, $http, activationRegistrationData, $timeout, $ionicPopup) {
//	alert("registrationResultCtrl");

   	loadFontSize();

	var data = activationRegistrationData.getRegistrationInputData();
	$("#message").append(data.responseMessage);
	
	$scope.backToMain = function(){
		window.location.href = "#app/main";
	}
});