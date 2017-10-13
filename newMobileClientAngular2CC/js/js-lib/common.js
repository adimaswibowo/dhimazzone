
function stickinessMobileNumber(mobileNumber){
	window.localStorage.setItem('mobileNumberStickiness',mobileNumber);
}

function stickinessUserName(userName){
	window.localStorage.setItem('userNameStickiness',userName);
}

function convertDecimalToThousandSeparator(amount){
	var newAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+".00";
	return newAmount;
}

function numberWithCommas(amount) {
	var newAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return newAmount;
}

function convertThousandSeparatorToDecimal(amount){
	var newAmount = Number(amount.replace(/[^0-9\.]+/g,""));
	return newAmount;
}

function stickinessSetAccNumber(param, accountNumber){
	window.localStorage.setItem('accountNumberStickiness'+param,accountNumber);
	//alert("accountNumberStickiness " +param+ " - " + window.localStorage.getItem('accountNumberStickiness'+param));
}

function stickinessGetMobileNumber($scope){
	var mobileNumber = window.localStorage.getItem('mobileNumberStickiness');
	if (mobileNumber != null || mobileNumber != "null" || mobileNumber != "undefined"){
		$scope.loginData.username = mobileNumber;
	}
}

function stickinessGetUserName($scope){
	var userName = window.localStorage.getItem('userNameStickiness');
	if (userName != null || userName != "null" || userName != "undefined"){
		$scope.loginData.username = userName;
	}
}

function stickinessGetAccNumber($scope, param){
	if (window.localStorage.getItem('accountNumberStickiness'+param) != null){

		var accNumber = window.localStorage.getItem('accountNumberStickiness'+param);
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;

		if (accList != null){

		    var accountNumberId = "";
		    var accountNumberLabel = "";
		    
		   	var jsonArr = [];
		   	var jsonAccNumber = [];
		   	
		    for(var i = 0; i < accList.length; i++){
		        //var option = $("<option>");
		        for( var key in accList[i] ){
		        	if (key == "accountNumber"){

		    	    	if (accList[i][key] == accNumber){
		    	    		accountNumberId = accList[i][key];
		    	    		accountNumberLabel = accList[i]["label"];
		    	    		break;
		    	    	}
		    	    }
		        }
		    }

			try {
				if (accountNumberId != null && accountNumberLabel != null){
					$scope.queryAccountList = accountNumberLabel;
					$scope.accountNumberSelect = accountNumberId;
					//document.getElementById('accountNumber').value = accountNumberLabel;
					//document.getElementById('accountNumberHidden').value = accountNumberId;
				}
			} catch(e) {}
		}
	}else{
		//console.log("stickinessGetAccNumber null "+param);
	}
}

function stickinessGetAccNumberFT($scope, param, transferType){
	if (window.localStorage.getItem('accountNumberStickiness'+param) != null){

		var accNumber = window.localStorage.getItem('accountNumberStickiness'+param);
		var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountList;

		if (accList != null){

		    var accountNumberId = "";
		    var accountNumberLabel = "";
		    
		   	var jsonArr = [];
		   	var jsonAccNumber = [];
		   	
		    for(var i = 0; i < accList.length; i++){
    	    	if (accList[i]["id"] == accNumber){
    	    		accountNumberId = accList[i]["id"];
    	    		accountNumberLabel = accList[i]["label"];
    	    		break;
    	    	}
		    }

			try {
				if (accountNumberId != null && accountNumberLabel != null){
					$scope.accountNumberText = accountNumberLabel;
					$scope.accountNumber = accountNumberId;
					if (transferType == 'inbank'){
						$scope.selectCurrency();
					}
				}
			} catch(e) {}
		}
	}else{
		//console.log("stickinessGetAccNumber null "+param);
	}
}


function loadFontSize(){
	try{

		var fontSizeObject = window.localStorage.getItem('fontSize');
	    if (fontSizeObject == null || fontSizeObject == "undefined" || fontSizeObject == "" || fontSizeObject == "null"){
			//default font sizenya nanti bisa di set
	    }else{
	    	fontSizeObject = JSON.parse(fontSizeObject);
	    	//alert("fontSizeObject :"+fontSizeObject.id);
	    	//angular.element(document.querySelectorAll('*')).css('font-size', fontSize + 'px');

	    	//angular.element(document.querySelectorAll('*')).css('font-size',fontSizeObject.fontSize+'px');


	    	angular.element(document.querySelectorAll('input')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('checkbox')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('radio')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('select')).css('font-size', fontSizeObject.fontSize + 'px');
	    	//angular.element(document.querySelectorAll('p')).css('font-size', fontSizeObject.fontSizeFooter + 'px');
	    	//angular.element(document.querySelectorAll('label')).css('font-size', fontSizeObject.fontSizeFooter + 'px');
	    	angular.element(document.querySelectorAll('.font-simobi-lang-active')).css('font-size', fontSizeObject.fontSizeHeader + 'px');
	    	angular.element(document.querySelectorAll('.item-select')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('.input-label')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('.tabs-icon-top')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('.tab-item')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('.item')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('.item-no-border')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('.button')).css('font-size', fontSizeObject.fontSize + 'px');
	    	angular.element(document.querySelectorAll('.font-markom-footer-small')).css('font-size', fontSizeObject.fontSizeFooter + 'px');

	    }

    } catch(e) {
    	console.log("error "+e);
    }

	//alert("fontSize :"+fontSize);
}

function checkVisibleSideMenu($rootScope,$state){
	$rootScope.uiRouterState = $state;
	//alert("checkVisibleSideMenu : "+$state.current.name); 
}

function removeKeyboardOpen(){	
	try {
		//document.activeElement.blur();
		document.body.classList.remove('keyboard-open');
	} catch(e) {
		console.log(e);
	}
}

function addKeyboardOpen(){
	try {
		document.body.classList.add('keyboard-open');
	} catch(e) {
		console.log(e);
	}
}


function getWidthDevice($window){
	try {
		return $window.innerWidth;
	} catch(e) {
		console.log(e);
	}
}	

function getHeightDevice($window){
	try {
		return $window.innerHeight;
	} catch(e) {
		console.log(e);
	}
}	

function showHideNavBar($rootScope){
	if ($rootScope.showLogin == true){
		$rootScope.hideNavBarValue = true;
	}else{
		$rootScope.hideNavBarValue = false;
	}
}	

function getAttributeCardBpc(attributeCardBpc,sequence){
	// attributeCardBpc: 84699|623444******0019|623444******0019|CHST0|VALID CARD|DEBIT|class ru.bpc.svis.cms.v1.CardType|TOM AND JERRY|2021-08-31+08:00|2016-08-24+08:00|0|China UnionPay (CUP)|55|1|null|8401000001|8401000001|120|Perso USD Debit Card
	if (attributeCardBpc != null && attributeCardBpc != ""){
		var arrayAttributeCardBpc = attributeCardBpc.split("|");
		var result = arrayAttributeCardBpc[sequence];
		return result;
	}
	return null;
}

//isSessionClientExpired