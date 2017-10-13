//var billpayControllers = angular.module('billpayControllers', ['blockUI']);
var accountControllers = angular.module('accountControllers', ['pascalprecht.translate','ngTouch']);

var lang = window.localStorage.getItem("lang");
if (lang == null || lang == "" || lang == "en" || lang == "null"){
	window.localStorage.setItem('lang',"en");
} else {
	window.localStorage.setItem('lang',"id");
}


accountControllers.factory('accountData', function () {   
	var accountBalanceData = "";
	var accountHistoryData = "";
	var accountNumber = "";
	var cardNumber = "";
	var accountNumberCC = "";
	var accountSummaryCCClientData = "";
	var accountSummaryCCServerData = "";
	var accountStatementData = "";
	var accountStatementCCData = "";
	var accountType = "";

    return {
        getAccountBalanceData: function () {
            return accountBalanceData;
        },
        setAccountBalanceData: function (newAccountBalanceData) {
        	accountBalanceData = newAccountBalanceData;
        }, 
        
        getAccountHistoryData: function () {
            return accountHistoryData;
        },
        setAccountHistoryData: function (newAccountHistoryData) {
        	accountHistoryData = newAccountHistoryData;
        },
        
        getAccountNumber: function () {
            return accountNumber;
        },
        setAccountNumber: function (newAccountNumber) {
        	accountNumber = newAccountNumber;
        },

        getCardNumber: function () {
            return cardNumber;
        },
        setCardNumber: function (newCardNumber) {
        	cardNumber = newCardNumber;
        },
        
        getAccountNumberCC: function () {
            return accountNumberCC;
        },
        setAccountNumberCC: function (newAccountNumberCC) {
        	accountNumberCC = newAccountNumberCC;
        },
        
        getAccountSummaryCCClientData: function () {
            return accountSummaryCCClientData;
        },
        setAccountSummaryCCClientData: function (newAccountSummaryCCClientData) {
        	accountSummaryCCClientData = newAccountSummaryCCClientData;
        },
        
        getAccountSummaryCCServerData: function () {
            return accountSummaryCCServerData;
        },
        setAccountSummaryCCServerData: function (newAccountSummaryCCServerData) {
        	accountSummaryCCServerData = newAccountSummaryCCServerData;
        },
        
        getAccountStatementData: function () {
            return accountStatementData;
        },
        setAccountStatementData: function (newAccountStatementData) {
        	accountStatementData = newAccountStatementData;
        },
        
        getAccountStatementCCData: function () {
            return accountStatementCCData;
        },
        setAccountStatementCCData: function (newAccountStatementCCData) {
        	accountStatementCCData = newAccountStatementCCData;
        },
        
        getAccountType: function () {
            return accountType;
        },
        setAccountType: function (newAccountType) {
        	accountType = newAccountType;
        }
    };
});


/** --------------- **/
/** Account Balance **/
/** --------------- **/
accountControllers.controller('inquiryBalanceInputCtrlCC', function($scope, $routeParams, $http,$translate,$ionicPopup,$ionicModal, $ionicLoading, accountData) {
   	loadFontSize();

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var creditCardList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
	$scope.creditCardList = creditCardList;

	$scope.doBalance = function (accountNumber, accNumber) {
		for (var i = 0; i<creditCardList.length; i++) {
	    	if(accNumber==creditCardList[i].accountNumber){
	    		//var cardActiveStatus=JSON.parse(creditCardList[i].attributeCardBpc).cardStatus;
				var cardActiveStatus=creditCardList[i].attributeCardBpcMap.cardStatus;
	    	}
	    }
		if (cardActiveStatus=="CHST20"){
			   alert("Card Status is Temporary Block");  
			   return false; 
			 }else if(cardActiveStatus=="CHST21"){
			   alert("Card Status is Permanent Block");  
			   return false;
			 }
		//alert("doing balance");
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			alert("timeout");
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			//alert("masuk else");
			//var accountNumber = document.getElementById('accountNumberHidden').value;
			var newdata = {};
			console.debug('userStorageMap ipassport:'+userStorageMap.ipassport);
			newdata['accSelect'] = accountNumber;
			newdata['ipassport'] = userStorageMap.ipassport;
			var datajson = JSON.stringify(newdata);
			console.debug('datajson:'+datajson);
			$ionicLoading.show({
			 	template: 'Loading...',
		        animation: 'fade-in',
		        showBackdrop: true,
		        maxWidth: 200,
		        showDelay: 0
		    });
			  $http.post(ipaddress+'/rest/infoProcessV2/balanceInquiry',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide();
		        	 	if (data.responseCode == "01"){
									alert(data.responseMessage);
					    		}else{

					 stickinessSetAccNumber("ALL",accountNumber);
		        	 accountData.setAccountBalanceData(data);
 					 
				     window.location.href = "#/app/inquiryBalanceResult";
				     			}
		         }).error(function(){
		        	 	$ionicLoading.hide();
		        	 	alert("Fail to Retrieve Balance Inquiry");
		        	 	return false;
			     });
		}
	};
  
});

accountControllers.controller('inquiryBalanceResultCtrlCC', function($scope, $routeParams, $http, accountData) {
   	loadFontSize();
	var accountBalanceStorage = accountData.getAccountBalanceData();
	console.debug("accountBalanceStorage: " + accountBalanceStorage);
	console.debug("accountBalanceStorage.AvailableBalance: " + accountBalanceStorage['AvailableBalance']);
	var balance = accountBalanceStorage['AvailableBalance'].toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

	$("#balanceStatement").append(accountBalanceStorage['balanceRedesign']);
});

accountControllers.controller('inquiryBalanceInputCtrl', function($scope, $routeParams, $http, accountData,$translate,$ionicPopup,$ionicModal, $ionicLoading) {
	//alert("aa")

   	loadFontSize();

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	console.debug(window.localStorage.getItem("userStorage"))

	var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;

    var accNumberColl = "";
    var accNumberTemp = "";
    var accNumberValue = "";
    
   	var jsonArr = [];
   	
    for(var i = 0; i < accList.length; i++){
        for( var key in accList[i] ){
        	if (key == "accountNumber"){
        			accNumberValue = accList[i][key];
    				accNumberTemp = accList[i]["label"];
    	    	    	
    				jsonArr.push({
    					id: accNumberValue,
    					label: accNumberTemp
    				});
    	    	//}
    	    }
        }
    }

	$scope.accListObject = jsonArr;
	$scope.showAccountList = function(){
		showSelectList($scope,$translate,$ionicPopup,"Account","queryAccountList","accountSelect","accSelect","accListObject","chooseAccountList({{accSelect}});","{{accSelect.id}}","{{accSelect.label}}");   
	}

	/*$scope.chooseAccountList = function(account){
		$scope.myPopup.close();
		chooseAccount(account);
	}*/

	$scope.doBalance = function () {
		
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var accountNumber = document.getElementById('accountNumberHidden').value;
			var newdata = {};
			console.debug('userStorageMap ipassport:'+userStorageMap.ipassport);
			
			newdata['accSelect'] = accountNumber;
			newdata['ipassport'] = userStorageMap.ipassport;
			var datajson = JSON.stringify(newdata);
			console.debug('datajson:'+datajson);
			$ionicLoading.show({
			 	template: 'Loading...',
		        animation: 'fade-in',
		        showBackdrop: true,
		        maxWidth: 200,
		        showDelay: 0
		    });
			  $http.post(ipaddress+'/rest/infoProcessV2/balanceInquiry',datajson)
		         .success(function(data) {
		        	 $ionicLoading.hide();
					 stickinessSetAccNumber("ALL",accountNumber);
		        	 accountData.setAccountBalanceData(data);
				     window.location.href = "#/app/inquiryBalanceResult";
		         }).error(function(){
		        	 	$ionicLoading.hide();
		        	 	alert("Server Error");
		        	 	return false;
			     });
		}
	};

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

	if (jsonArr.length = 1){
    	$scope.queryAccountList = jsonArr[0].label;
    	$scope.accountNumberSelect = jsonArr[0].id;
   	}else{
		stickinessGetAccNumber($scope, "ALL");
   	}
});



accountControllers.controller('statementCardCtrlCC', function($scope, $routeParams, $http, accountData,$translate,$ionicPopup,$ionicModal, $ionicLoading) {
	loadFontSize();

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.cardList;
	
	$scope.creditCardList = accList;
	$scope.doStatement = function (accountNumber, accNumber) {
		for (var i = 0; i<accList.length; i++) {
	    	if(accNumber==accList[i].accountNumber){
	    		//var cardActiveStatus=JSON.parse(accList[i].attributeCardBpc).cardStatus;
				var cardActiveStatus=accList[i].attributeCardBpcMap.cardStatus;
	    		console.log("card status : "+cardActiveStatus);
	    	}
	    }
		if (cardActiveStatus=="CHST20"){
			   alert("Card Status is Temporary Block");  
			   return false; 
			 }else if(cardActiveStatus=="CHST21"){
			   alert("Card Status is Permanent Block");  
			   return false;
		}
		//alert("doing statement" + accountNumber);
		var isTimeout = calculateTimeOut();
		if (isTimeout){
			alert("timeout");
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			accountData.setAccountNumber(accountNumber);
			accountData.setCardNumber(accNumber);
			window.location.href = "#/app/acc_statement";

		}
	};

	
});

accountControllers.controller('statementInputCtrlCC', function($scope, $routeParams, $http, accountData,$translate,$ionicPopup,$ionicModal, $ionicLoading) {
	//alert("masuk ke controller yang statementInputCtrlCC di account");
   	loadFontSize();

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	console.debug(window.localStorage.getItem("userStorage"))
	var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountListAll;

    var accNumberColl = "";
    var accNumberTemp = "";
    var accNumberValue = "";
    
   	var jsonArr = [];
   	
   	$scope.selectedCard = accountData.getAccountNumber();
   //	alert("Account Number : "+accountData.getAccountNumber());
	/*$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.myPopup.close();
		chooseAccount(account);
	}*/
	$scope.periodToday = function () {
		//alert("periodToday");
		window.localStorage.setItem('period', "today");	
		clearPeriodRange();
	};
	$scope.periodCurMonth = function () {
		//alert("periodCurMonth");
		window.localStorage.setItem('period', "curMonth");	
		clearPeriodRange();
	};
	$scope.period1MonthAgo = function () {
		//alert("period1MonthAgo");
		window.localStorage.setItem('period', "1MonthAgo");
		clearPeriodRange();
	};
	$scope.period2MonthAgo = function () {
		//alert("period2MonthAgo");
		window.localStorage.setItem('period', "2MonthAgo");	
		clearPeriodRange();
	};
	$scope.period3MonthAgo = function () {
		//alert("period3MonthAgo");
		window.localStorage.setItem('period', "3MonthAgo");	
		clearPeriodRange();
	};
	$scope.periodRange = function () {
		//alert("periodRange");
		clearPeriodRange();
		
		window.localStorage.setItem('period', "range");	
		var fromDate = $translate.instant('accountStatement_fromDate');
		var toDate = $translate.instant('accountStatement_toDate');

		constructGenericDisplay("loadFromDate", "<div id='divFromDateLabel'> <td> "+fromDate+" </td> </div> ");
		constructGenericDisplay("loadFromDate", "<div id='divFromDate'>  <td colspan='2'> <input type='text' id='fromDate' class='m_content-inputtext' maxlength='11' size='11'> </td> </div> ");
     	
		constructGenericDisplay("loadToDate", "<div id='divToDateLabel'> <td> "+toDate+" </div> ");
		constructGenericDisplay("loadToDate", "<div id='divToDate'> <td colspan='2'> <input type='text' id='toDate' class='m_content-inputtext' maxlength='11' size='11'> </td> </div> ");
     	
     	var myCalendar = new dhtmlXCalendarObject(["fromDate","toDate"]);
     	myCalendar.hideTime();
     	myCalendar.setDateFormat("%d-%m-%Y");
     	
    	var currentTime = new Date();
    	var month = currentTime.getMonth()+1;
    	var day = currentTime.getDate();
    	var year = currentTime.getFullYear();
    	var dateNow = day+"-"+ month +"-"+year;
   // 	alert("dateNow :"+dateNow);
        
        document.getElementById('fromDate').value = dateNow;
        document.getElementById('toDate').value = dateNow;
	};
	
	$scope.doAccountStatementResult = function () {
			
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var accountNumber = accountData.getAccountNumber();
			if (accountNumber == null || accountNumber == ""){
				alert("Please choose account number");
			} else {
				var periodOption = window.localStorage.getItem("period");	
				if (periodOption == null || periodOption == ""){
					alert("Please choose Period");
				}else{
					var period = window.localStorage.getItem("period");
					if (periodOption=="range"){
						var sFormDate = document.getElementById('fromDate').value;
						var sToDate = document.getElementById('toDate').value;
						
						var sFormDateConvert = new Array();
						sFormDateConvert = sFormDate.split("-");
						//alert('sFormDateConvert:'+sFormDateConvert);
						sFormDate = sFormDateConvert[2]+"-"+sFormDateConvert[1]+"-"+sFormDateConvert[0];
						//alert('sFormDate:'+sFormDate);
						
						var sToDateConvert = new Array();
						sToDateConvert = sToDate.split("-");
						//alert('sToDateConvert:'+sToDateConvert);
						sToDate = sToDateConvert[2]+"-"+sToDateConvert[1]+"-"+sToDateConvert[0];
					//	alert('sToDate:'+sToDate);
					}
					//alert("period"+period);
					
					// add accSelected to Json Data
					var newdata = {};			
					newdata['accStatementSelect'] = accountData.getAccountNumber();
					newdata['period'] = period;
					newdata['ipassport'] = userStorageMap.ipassport;
					newdata['lang']=window.localStorage.getItem("lang");
					if (periodOption=="range"){
						newdata['sFromDate']=sFormDate;
						newdata['sToDate']=sToDate;
					}
					var datajson=JSON.stringify(newdata);
	//				$.extend(true, userStorageMap, newdata);
	//				var userStorageString = JSON.stringify(userStorageMap);
					//alert("datajson: " + datajson);
					$ionicLoading.show({
					 	template: 'Loading...',
				        animation: 'fade-in',
				        showBackdrop: true,
				        maxWidth: 200,
				        showDelay: 0
				    });
					 $http.post(ipaddress+'/rest/historyV2/accountStatement',datajson)
				     .success(function(data) {
				    	 $ionicLoading.hide();
				    	 if(data!=null){
					    		if (data.responseCode == "01"){
									alert(data.responseMessage);
					    		}else{
					    			//alert("data.headerBuff: " + data.headerBuff);
					    			//alert("data.lineBuff: " + data.lineBuff);
	//					    		window.localStorage.setItem('headerBuff', JSON.stringify(data.headerBuff));
	//					    		window.localStorage.setItem('lineBuff', JSON.stringify(data.lineBuff));
						    		
	//					    		$('#content').load('html-content/accountStatementResult.html', function(){
	//					    			var tableheader=constructAccountStatementDisplay(data.headerBuff);
	//					    			var tableStream=constructAccountStatementDisplay(data.lineBuff);
	//					    			$("#statement").append(tableheader+"<br>");
	//									$("#statement").append(tableStream);
	//					    		});
					    			
					 				stickinessSetAccNumber("ALL",accountNumber);
					    			accountData.setAccountStatementData(data);
					    			window.location.href = "#/app/statementResult";
					    			
					    		}
					    	}else{
					    		passFromErrorHandling(GED_STATEMENT,data,goToTransferInputInternalHtml);
					    	}
					    	
					    	//stickinessSetAccNumber(accountNumber);
					   }).error(function(){
					    	$ionicLoading.hide();
				    	 	alert("Unable to process transaction");
				    	 	//window.location.href = "#/app/payPurchase";
				    	 	return false;
				     });
					
				}
			}
		}	
	};
	});


accountControllers.controller('inquiryBalanceResultCtrl', function($scope, $routeParams, $http, accountData) {

   	loadFontSize();

	var accountBalanceStorage = accountData.getAccountBalanceData();
	var balance = accountBalanceStorage['AvailableBalance'].toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

	/*var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd
	} 
	if(mm<10){
		mm='0'+mm
	} 
	today = mm+'/'+dd+'/'+yyyy+' '+today.getHours()+":"+today.getMinutes();

	var node = document.createElement('span');
	var node2 = document.createElement('span');
	var node3 = document.createElement('span');
	var isiNode = "";
	
	try {
		$('#divDataValueNew').remove();
	} catch(e) {}
	
	constructGenericDisplay('dinamicValue',"<div id='divDataValueNew'>  <input type='hidden' name='balanceResult' id='balanceResult' value=' id='balanceResult' data-i18n='account.balanceResult' ' /> </div>");
	var dataValue = document.getElementById('balanceResult').value;
	var tempMessage = new Array();
	tempMessage = dataValue.split("|");
	
	var langNameSession = window.localStorage.getItem("lang");
	if (langNameSession == null || langNameSession == "" || langNameSession == "en" || langNameSession == "null"){
		isiNode = "<label class='m_content-caption'>"+ "Your " +accountBalanceStorage['ProductType']+"</label>"+" "+"<label class='m_content-caption'>"+accountBalanceStorage['AccountNumber']+"</label></br>"+"<label class='m_content-caption'>"+ "account balance as on " + today + " is" +"</label>"+" "+"<label class='m_content-caption'></br> "+ accountBalanceStorage['Currency'] + " " +"</label>";
	} else {
		isiNode = "<label class='m_content-caption'>"+accountBalanceStorage['ProductType']+" "+ "Your " +"</label>"+" "+"<label class='m_content-caption'>"+accountBalanceStorage['AccountNumber']+"</label></br>"+"<label class='m_content-caption'>"+ "account balance as on " + today + " is" +"</label>"+" "+"<label class='m_content-caption'></br> "+ accountBalanceStorage['Currency'] + " " +"</label>";
	}
	node.innerHTML = isiNode;
	node.style.cssText = 'font-family:Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", serif;font-size:12px;';
	node2.innerHTML = "<div> <label class='m_content-field-currency'>"+balance+"</label> </div>";
	node2.style.cssText = 'font-family:Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", serif;font-size:14px;font-weight:bold;';
	
	node3.appendChild(node);
	node3.appendChild(node2);
	document.getElementById('balanceStatement').appendChild(node3);*/

	$("#balanceStatement").append(accountBalanceStorage['balanceRedesign']);
});

function constructGenericDisplay(elemen, innerElemen){
	var nodeConstructNode = document.createElement('span');
	nodeConstructNode.innerHTML = ""+innerElemen+"";
	document.getElementById(elemen).appendChild(nodeConstructNode);
}


/** --------------- **/
/** Account History **/
/** --------------- **/
accountControllers.controller('historyInputCtrl', function($scope, $routeParams, $http, accountData, $translate,$ionicPopup,$ionicModal, $ionicLoading) {
		
   	loadFontSize();

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	//console.debug(window.localStorage.getItem("userStorage"))

	var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountListAll;

    var accNumberColl = "";
    var accNumberTemp = "";
    var accNumberValue = "";
    
   	var jsonArr = [];
   	
    for(var i = 0; i < accList.length; i++){
        for( var key in accList[i] ){
        	if (key == "accountNumber"){
    	    		accNumberValue = accList[i][key];
    				accNumberTemp = accList[i]["label"];
      				jsonArr.push({
    					id: accNumberValue,
    					label: accNumberTemp
    				});
    	    	//}
    	    }
        }
    }

	$scope.accListObject = jsonArr;
	$scope.showAccountList = function(){
		showSelectList($scope,$translate,$ionicPopup,"Account","queryAccountList","accountSelect","accSelect","accListObject","chooseAccountList({{accSelect}});","{{accSelect.id}}","{{accSelect.label}}");   
	}

	/*$scope.chooseAccountList = function(account){
		$scope.myPopup.close();
		chooseAccount(account);
	}*/
	$scope.doHistory = function () {
		
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var accountNumber = document.getElementById('accountNumberHidden').value;
			var newdata = {};
			newdata['accHistorySelect'] = accountNumber;
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['lang']=window.localStorage.getItem("lang");
			var datajson=JSON.stringify(newdata);
			$ionicLoading.show({
			 	template: 'Loading...',
		        animation: 'fade-in',
		        showBackdrop: true,
		        maxWidth: 200,
		        showDelay: 0
		    });
			 $http.post(ipaddress+'/rest/historyV2/transactionHistory',datajson)
	         .success(function(data) {
	        	 $ionicLoading.hide();
				  stickinessSetAccNumber("ALL",accountNumber);
	        	  accountData.setAccountHistoryData(data);
			      window.location.href = "#/app/historyResult";
			      
	         }).error(function(){
	        	 $ionicLoading.hide();
	        	 	alert("Server Error");
	        	 	return false;
		     });
		}
	};

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
	
	if (jsonArr.length = 1){
    	$scope.queryAccountList = jsonArr[0].label;
    	$scope.accountNumberSelect = jsonArr[0].id;
   	}else{
		stickinessGetAccNumber($scope, "ALL");
   	}
});

accountControllers.controller('historyResultCtrl', function($scope, $routeParams, $http, accountData) {
	//console.debug("HTML: html-content/history.html");

   	loadFontSize();

	var accountHistoryStorage = accountData.getAccountHistoryData();
	accountHistoryStorage = accountHistoryStorage.responseMessage;
	//var tableStream=accountHistoryStorage;
//									console.log('tableStream:'+tableStream);
	$("#history").append(accountHistoryStorage);



	//alert(accountHistoryStorage.responseMessage)
	//var tableStream=constructMiniStatementDisplay(accountHistoryStorage.responseMessage);
	//alert(tableStream)
	//alert(document.getElementById('history'))
	//alert(tableStream)
	//document.getElementById("history").innerHTML = tableStream;
});

function constructMiniStatementDisplay(stream){
	var records = stream.split("|");
	var table = "";
	table = table
			.concat("<table id='genericTable' border='0' cellpadding='1' cellspacing='1' >");

	var odd = true;
	for (var i = 0; i < records.length; i++) {
		var columns = records[i].split(";");
		if (i == 0) {
			// header
			table = table.concat("<tr class='table-header-account'>");
		} else {
			// content
			table = table.concat("<tr>");
			odd = !odd;
			if (odd) {
				table = table.concat("<tr class='oddLine'>");
			} else {
				table = table.concat("<tr class='evenLine'>");
			}
		}
		for (var j = 0; j < columns.length; j++) {
			table = table.concat("<td class='table-content'>");
			table = table.concat(columns[j]);
			table = table.concat("</td>");
		}
		table = table.concat("</tr>");
	}
	table = table.concat("</table>");
	return table;
}


/** --------------- **/
/** Account Summary **/
/** --------------- **/
accountControllers.controller('summaryCtrl', function($scope, $routeParams, $http, $compile, $ionicPopover, accountData, $rootScope, $ionicLoading) {
		
   	loadFontSize();

	console.log("=== summaryCtrl ===");
	var isTimeout = calculateTimeOut();
	//alert("isTimeout :"+isTimeout);
	if (isTimeout){
		// hapus localStorage and goTo Main page
		clearSessionClient();
	} else {
		$scope.openPopover = function($event, accNumber, accType) {
			$scope.accNumber = accNumber;
			$scope.accType = accType;
			
            // Init popover on load
            $ionicPopover.fromTemplateUrl('templates/popover.html', {
                scope: $scope,
            }).then(function(popover) {
                $scope.popover = popover;
                $scope.popover.show($event);
//                $compile(accNumber)($scope);
//    	 	 	$scope.$apply();
            });
        };

		//openPopoverCC
//        $scope.openPopoverCC = function($event, accNumber, inquiryResponseCode) {
        $scope.openPopoverCC = function($event, accNumber) {
        	$scope.accNumber = accNumber;
			
            // Init popover on load
            $ionicPopover.fromTemplateUrl('templates/popoverCC.html', {
                scope: $scope,
            }).then(function(popover) {
                $scope.popover = popover;
                $scope.popover.show($event);
//                $compile(accNumber)($scope);
//    	 	 	$scope.$apply();
            });
        };

		$scope.showDetailSummary = function (accountNumber,accType) {
			$scope.popover.hide();
			accountData.setAccountNumber(accountNumber);
			accountData.setAccountType(accType);
			window.location.href = "#/app/accountSummaryDetail";
		};
		
		//go to transaction detail cc inapp
//        $scope.doTransactionDetailCC= function () {
//			console.debug("goto Transaction Detail inAppBrowser")
//        	window.localStorage.setItem('functionMenuUri','inAppBrowser("ccAccountStatementV2.do?action=mobile");');
//			window.location.href = "#/app/inAppBrowser";
//			//window.location.href = "#/app/accountSummaryDetail";
//		};
		
		//summary detail credit card
		$scope.showDetailSummaryCC = function (accNumber) {
			console.debug("=== showDetailSummaryCC ===");
			$scope.popover.hide();
//			$rootScope.accountNumber = accountNumber;
			accountData.setAccountNumberCC(accNumber);
			
			//construct via client
			//construct after account summary open
			window.location.href = "#/app/accountSummaryDetailCC";
			
			//construct via server
//			var accountNumber = accountData.getAccountNumberCC();
//			var newdata = {};
//			newdata['ipassport']=userStorageMap.ipassport;
//			newdata['lang']=window.localStorage.getItem("lang");
//			newdata['accountNumber']=accountNumber;
////			newdata['ccAccountDetail']=ccAccountDetail;
//			var datajson=JSON.stringify(newdata);
//			 $http.post(ipaddress+'/rest/infoProcessV2/accountSummaryDetailCC',datajson)
//		     .success(function(data) {
//		    	 if (data != null){
//		    		var responseCode = data.responseCode;
//		    		var responseMessage = data.responseMessage;
//		    		 
//		  			if (responseCode == "00") {
//		    			accountData.setAccountSummaryCCServerData(data.displayCreditCardSummaryDetail); 	//data buat construct dari server
//		    			window.location.href = "#/app/accountSummaryDetailCC";
//		  			} else {
//		  				console.log("RESPONSE CODE : "+responseCode);	
//		  				alert(responseMessage);
//		//				  		window.location.href = "#/app/portfolioLinkUnlinkConfirm";
//		        		return false;
//		  			}	 
//		    	 }else{
//		    		 alert("Response Null");
//		//        		 window.location.href = "#/app/portfolioInquiryInput";
//		    		 return false;
//		    	 }
//		     }).error(function(){
//		    	 	blockUI.stop();
//		    	 	alert("Server Error");
//		    	 	//window.location.href = "#/app/payPurchase";
//		    	 	return false;
//		     });
		};
		
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['lang']=window.localStorage.getItem("lang");
		var datajson=JSON.stringify(newdata);

		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		 $http.post(ipaddress+'/rest/infoProcessV2/accountSummaryAmb',datajson)
	     .success(function(data) {
	    	 $ionicLoading.hide();
	    	 console.log("data.displayString : "+data.displayString);
	    	 var displayString=data.displayString;
	 		/* var display=constructAccountSummaryDisplay(displayString);
	 		
	 		 var node = document.createElement('span');
	 		 node.innerHTML = display;
	 		
	 		 document.getElementById('accountSummaryDisplay').appendChild(node);
	// 		 $("#accountSummaryDisplay").append(node);
	 		
	 		 $compile(document.getElementById('accountSummaryDisplay'))($scope);*/

			//var display=constructAccountSummaryDisplay(displayString);
			var display=displayString;
	//		    		console.log("display:"+display);
			$("#accountSummaryDisplay").append(display);

			$compile(document.getElementById('accountSummaryDisplay'))($scope);
	 	 	$scope.$apply();
	 	 	
	 	 	$scope.accountCreditCard(); //go to credit credit card
	     }).error(function(){
	    	 	$ionicLoading.hide();
	    	 	alert("Server Error");
	    	 	//window.location.href = "#/app/payPurchase";
	    	 	return false;
	     });
		 
		 $scope.accountCreditCard = function () {
			console.log("== masuk accountCreditCard ==");
			
			var newdata = {};
			newdata['ipassport']=userStorageMap.ipassport;
			newdata['lang']=window.localStorage.getItem("lang");
			var datajson=JSON.stringify(newdata);
			 $ionicLoading.show({
				 	template: 'Loading...',
			        animation: 'fade-in',
			        showBackdrop: true,
			        maxWidth: 200,
			        showDelay: 0
			    });
			$http.post(ipaddress+'/rest/infoProcessV2/accountSummaryCC',datajson)
		     .success(function(data) {
		    	 $ionicLoading.hide();
		    	 var responseCode = data.responseCode;
		    	 console.debug("responseCode : "+responseCode);
		    	 var responseMessage = data.responseMessage;
		    	 console.debug("responseMessage : "+responseMessage);
		    	 
		    	 if (data != null){
	        		 console.log("data != null");
	        		 console.debug("data : "+JSON.stringify(data));
		  			 if (responseCode == "99") {
		  				console.log("FAIL RESPONSE CODE : "+responseCode);
		  				console.log("RESPONSE MESSAGE : "+responseMessage);
//		        	 	window.location.href = "#/app/portfolioLinkUnlinkConfirm";
		        	 	return false;
		        	 	
		  			 } else {
			  			console.debug("RESPONSE CODE : "+responseCode);		
			  			if (responseCode == "00") {
							//consruct via client
//			    			accountData.setAccountSummaryCCClientData(data.newCreditCardListResult);
//			  				var display=constructCreditCardSummaryDisplay(data.newCreditCardListResult);
//							document.getElementById("accountCreditCardDisplay").innerHTML = display;
//							$compile(document.getElementById('accountCreditCardDisplay'))($scope);
//							$scope.$apply();
			  				
//			    			accountData.setAccountSummaryCCClientData(data.newCreditCardListResult);	//data buat construct dari client
			  				accountData.setAccountSummaryCCClientData(data.displayCreditCardSummaryDetail);	//construct after account summary open
			  				
							//consruct via server
			  				var displayCreditCardSummary = data.displayCreditCardSummary;		
	        				console.log("displayCreditCardSummary  : "+displayCreditCardSummary);
							var nodeConstructDisplay = document.createElement('span');
							nodeConstructDisplay.innerHTML = "<div id='divConstructCreditCardSummaryDisplay'>"+displayCreditCardSummary+"</div>";
	        				document.getElementById('accountCreditCardDisplay').appendChild(nodeConstructDisplay);
	        				
	        				$compile(document.getElementById('accountCreditCardDisplay'))($scope);
	        		 	 	$scope.$apply();
	        		 	 	
			  			} else if (responseCode == "01" || responseCode == "02") {
			  				console.log("RESPONSE CODE : "+responseCode);	
			  				console.log("RESPONSE MESSAGE : "+responseMessage);
				  			
//				  			window.location.href = "#/app/portfolioLinkUnlinkConfirm";
			        		return false;
			  			}
		  			 }
	        	 }else{
	        		 alert("Response Null");
//	        		 window.location.href = "#/app/portfolioLinkUnlinkConfirm";
	        		 return false;
	        	 }

		     }).error(function(){
		    	 	$ionicLoading.hide();
		    	 	alert("Server Error");
		    	 	//window.location.href = "#/app/payPurchase";
		    	 	return false;
		     });
			
		};
		
	//	var node = document.createElement('span');
	//	node.innerHTML = "<table id='genericTable' border='0' cellpadding='1' cellspacing='1' ><tr class='table-header-account'><td class='table-content'><div id='summary_nav_result'><hr class='lineHR_Sign'><ul><li>Account Number</li><li class='double_colon'><span class='summaryli_right_accountNumber_value'>0008300647</span></li></ul><ul><li>Available Balance</li><li class='double_colon'><span class='summaryli_right_availableBalance_value'>IDR 199,332,515.00</span></li></ul><ul><li>Balance </li><li class='double_colon'><span class='summaryli_right_balance_value'>IDR 199,382,515.00</span></li></ul><ul><li></li><li class='double_colon'><input type='button' class='m_content-button-detail' ng-click=\"showDetailSummary('0008300647')\" value='detail'/></li></ul><br><hr class='lineHR_Sign'><ul><li>Account Number</li><li class='double_colon'><span class='summaryli_right_accountNumber_value'>0025677099</span></li></ul><ul><li>Available Balance</li><li class='double_colon'><span class='summaryli_right_availableBalance_value'>IDR 0.00</span></li></ul><ul><li>Balance </li><li class='double_colon'><span class='summaryli_right_balance_value'>IDR 0.00</span></li></ul><ul><li></li><li class='double_colon'><input type='button' class='m_content-button-detail' ng-click=\"showDetailSummary('0008300647')\" value='detail'/></li></ul><br></div></td></tr></table>";
	//	
	//	document.getElementById('accountSummaryDisplay').appendChild(node);
	//	
	//	$compile(document.getElementById('accountSummaryDisplay'))($scope);
	//	$scope.$apply();
		 
		 
		 $scope.doAccountStatementResult = function (accNumber,period) {
			
			$scope.popover.hide();
			var accountNumber = accNumber;
			// add accSelected to Json Data
			var newdata = {};		
			newdata['accStatementSelect'] = accountNumber;
			newdata['period'] = period;
			newdata['ipassport'] = userStorageMap.ipassport;
			newdata['lang']=window.localStorage.getItem("lang");
			var datajson=JSON.stringify(newdata);
			//alert("datajson: " + datajson);
			$ionicLoading.show({
			 	template: 'Loading...',
		        animation: 'fade-in',
		        showBackdrop: true,
		        maxWidth: 200,
		        showDelay: 0
		    });
			 $http.post(ipaddress+'/rest/historyV2/accountStatement',datajson)
		     .success(function(data) {
		    	 $ionicLoading.hide();
		    	 if(data!=null){
			    		if (data.responseCode == "01"){
							alert(data.responseMessage);
			    		}else{
			 				stickinessSetAccNumber("ALL",accountNumber);
			    			accountData.setAccountStatementData(data);
			    			window.location.href = "#/app/statementResult";
			    		}
			    	}else{
			    		passFromErrorHandling(GED_STATEMENT,data,goToTransferInputInternalHtml);
			    	}
			    	
			    	//stickinessSetAccNumber(accountNumber);
			   }).error(function(){
			    	$ionicLoading.hide();
		    	 	alert("Server Error");
		    	 	//window.location.href = "#/app/payPurchase";
		    	 	return false;
		     });
					
		};

		//transaction detail credit card
//		$scope.showTransactionDetailCC = function (accountNumber) {
		$scope.showTransactionDetailCC = function (accNumber) {
			console.debug("=== showTransactionDetailCC ===")
			
			$scope.popover.hide();
//			$rootScope.accountNumber = accountNumber;
			var accountNumber = accNumber;
			
	  		var isTimeout = calculateTimeOut();
	  		//console.log("isTimeout :"+isTimeout);
	  		if (isTimeout){
	  			// hapus localStorage and goTo Welcome html
	  			clearSession();
	  		} else {
		  			var newdata = {};	
		  			try {
//		  				newdata['accountNumber'] = $rootScope.accountNumber;
		  				newdata['accountNumber'] = accountNumber;
		  	  			newdata['ipassport'] = newdata['ipassport']=userStorageMap.ipassport;
		  	  			newdata['lang']=window.localStorage.getItem("lang");
		  			} catch(e) {}
					
		  		  	var datajson=JSON.stringify(newdata);
//		  		  	alert("datajson : "+datajson);
		  		  	$ionicLoading.show({
					 	template: 'Loading...',
				        animation: 'fade-in',
				        showBackdrop: true,
				        maxWidth: 200,
				        showDelay: 0
				    });
					$http.post(ipaddress+'/rest/historyV2/accountStatementCreditCard',datajson)
			         .success(function(data) {
			        	 $ionicLoading.hide();
			        	 if (data != null){
			        		 var responseCode = data.responseCode;
			        		 var responseMessage = data.responseMessage;

			        		 if (responseCode == "01") {
					  				console.log("FAIL RESPONSE CODE : "+responseCode);
					  				alert(responseMessage);
//					        	 	window.location.href = "#/app/portfolioLinkUnlinkConfirm";
					        	 	return false;				        	 	
				  			 } else {
					  			console.debug("RESPONSE CODE : "+responseCode);		
					  			if (responseCode == "00") {
					  				$rootScope.responseCodeStatement = responseCode;
//					  				$rootScope.dataStatement = data;
					    			accountData.setAccountStatementCCData(data);
									window.location.href = "#/app/accountCCTransactionDetail";
					  			} else if (responseCode == "0007") {
					  				console.log("RESPONSE CODE : "+responseCode);	
					  				alert(responseMessage);
//							  		window.location.href = "#/app/portfolioLinkUnlinkConfirm";
					        		return false;
					  			}
				  			 }
			        	 }else{
			        		 alert("Response Null");
//			        		 window.location.href = "#/app/portfolioInquiryInput";
			        		 return false;
			        	 }
					    	
			         }).error(function(){
			        	 	//blockUI.stop();
			        	 	$ionicLoading.hide();
			        	 	alert("Server Error");
//			        	 	window.location.href = "#/app/portfolioInquiryInput";
			        	 	return false;
				     });
	  		}
		};
	}	
});

function constructAccountSummaryDisplay(stream){
	console.log("=== constructAccountSummaryDisplay ===");
	var records =stream.split("|");
	var table="";
	table=table.concat("<table id='genericTable' border='0' cellpadding='1' cellspacing='1' >");
	//iterate row
//	console.debug('records:'+records.length);
	
	var odd=true;
	for (var i = 0; i < records.length; i++) {
		var columns=records[i].split(";");
//		console.debug('columns:'+columns.length);
		if(i==0){
			//header
			table=table.concat("<tr class='table-header-account'>");
		}else{
			//content
			table=table.concat("<tr>");
			odd=!odd;
			   if(odd){
				   table=table.concat("<tr class='oddLine'>");
			   }else{
				   table=table.concat("<tr class='evenLine'>");
			   }
		}
		for (var j = 0; j < columns.length; j++) {
			table=table.concat("<td class='table-content'>");
			table=table.concat(columns[j]);
			table=table.concat("</td>");
		}
		table=table.concat("</tr>");
	}
//	table=table.concat("<tr><td colspan='3' class='td-label-left'><input type='button' name='button' id='button' value='Submit' onclick='doTransferExternalNew();' /></td></tr>");
	table=table.concat("</table>");
	return table;
}

function constructCreditCardSummaryDisplay(data){
	console.log("=== constructCreditCardSummaryDisplay ===");
	console.log("data.length : "+data.length);
	var table="";
	table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
	table=table.concat("<tr>");
	table=table.concat("<td>");
//	table=table.concat("<span class='titleWelcomeAccSum'>WELCOME</span> <br>");
//	table=table.concat("<span class='txtNameAccSum'>dummy (123456)</span> <br>");
	table=table.concat("</td>");
	table=table.concat("</tr>");
	
	table=table.concat("<tr>");
	table=table.concat("<td class='bgrLineGrey'>");
		table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
			table=table.concat("<tr>");
				table=table.concat("<td>Accounts & Product Credit Card</td>");
				table=table.concat("<td>Available Limit</td>");
			table=table.concat("</tr>");
		table=table.concat("</table>");
	table=table.concat("</td>");
	table=table.concat("</tr>");

	for(var i=0; i<data.length; i++){
		//alert("data "+i+ ": "+JSON.stringify(data[i].dataList))
		table=table.concat("<tr>");
		table=table.concat("<td>");
			table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");

			table=table.concat("<tr>");
				table=table.concat("<td colspan='2'>");
				table=table.concat("<span class='txtNameAccSumDet'>"+data[i].productType+"</span><br>");
				table=table.concat("</td>");
				table=table.concat("<td rowspan='2' valign='center' width='5px'>");
				if (data[i].inquiryResponseCode == 00){
					for(var j=0; j<data[i].dataList.length; j++){
						//alert("data "+i+ ": "+JSON.stringify(data[i].dataList[j].amountType))
						if(data[i].dataList[j].amountType == "Available Balance"){
//							table=table.concat("<label class='arrowDet'><button ng-click=\"openPopoverCC($event,'"+data[i].accountNumber+"','"+data[i].inquiryResponseCode+"')\" class='button button-icon button-clear ion-android-more-vertical' style='font-size:25px;'></button></label>");
							table=table.concat("<label class='arrowDet'><button ng-click=\"openPopoverCC($event,'"+data[i].accountNumber+"')\" class='button button-icon button-clear ion-android-more-vertical' style='font-size:25px;'></button></label>");
//							table=table.concat(data[i].dataList[j].currencyCode+" "+data[i].dataList[j].amount+"&nbsp;");
						}
					}
				}else if (data[i].inquiryResponseCode == 11){
//					table=table.concat("<label class='arrowDet'><button ng-click=\"openPopoverCC($event,'"+data[i].accountNumber+"','"+data[i].inquiryResponseCode+"')\" class='button button-icon button-clear ion-android-more-vertical' style='font-size:25px;'></button></label>");
					table=table.concat("<label class='arrowDet'><button ng-click=\"openPopoverCC($event,'"+data[i].accountNumber+"')\" class='button button-icon button-clear ion-android-more-vertical' style='font-size:25px;'></button></label>");
//					table=table.concat("<label class='arrowDet'><button ng-click=\"openPopoverEmptyCC($event,'"+data[i].accountNumber+"','"+data[i].inquiryResponseCode+"')\" class='button button-icon button-clear ion-android-more-vertical' style='font-size:25px;'></button></label>");
	//				table=table.concat("FAIL &nbsp;");
				}
				table=table.concat("</td>");		
			table=table.concat("</tr>");		
			table=table.concat("<tr>");
				table=table.concat("<td>");
					table=table.concat("<span class='txtNameAccSumDet'>("+data[i].maskingAccNumber+")</span>");
				table=table.concat("</td>");
				table=table.concat("<td align='right'>");
					if (data[i].inquiryResponseCode == 00){
						for(var j=0; j<data[i].dataList.length; j++){
							//alert("data "+i+ ": "+JSON.stringify(data[i].dataList[j].amountType))
							if(data[i].dataList[j].amountType == "Available Balance"){
								if(data[i].dataList[j].amountSign=="D"){
	//								table=table.concat("<label class='arrowDet'><button ng-click=\"openPopoverCC($event,'"+data[i].accountNumber+"','"+data[i].inquiryResponseCode+"')\" class='button button-icon button-clear ion-android-more-vertical' style='font-size:25px;'></button></label>");
									table=table.concat("<span class='txtNameAccSumDetBoldRed'>"+data[i].dataList[j].currencyCode+" ("+data[i].dataList[j].amount+")</span>");
								}else{
									table=table.concat("<span class='txtNameAccSumDetBold'>"+data[i].dataList[j].currencyCode+" "+data[i].dataList[j].amount+"</span>");
								}
							}
						}
					}else{
//						table=table.concat("<label class='arrowDet'><button ng-click=\"openPopoverEmptyCC($event,'"+data[i].accountNumber+"','"+data[i].inquiryResponseCode+"')\" class='button button-icon button-clear ion-android-more-vertical' style='font-size:25px;'></button></label>");
						table=table.concat("<span class='txtNameAccSumDetBold'> FAIL </span>");
					}
				table=table.concat("</td>");
			table=table.concat("</tr>");
		table=table.concat("</table>");

		table=table.concat("</td>");
		table=table.concat("</tr>");
		
		table=table.concat("<tr>");
		table=table.concat("<td>");
			table=table.concat("<hr class='btmLine'>");
		table=table.concat("</td>");
		table=table.concat("</tr>");

	}
	table=table.concat("</table>");
//	table=table.concat("<button class='button button-small button-assertive' ng-click='doTransactionDetailCC()'>Transaction Detail Credit Card</button>");
	return table;
}

accountControllers.controller('summaryDetailCtrl', function($scope, $routeParams, $http, $compile, accountData, $ionicLoading) {
		
   	loadFontSize();

	console.log("=== summaryDetailCtrl ===");
	var isTimeout = calculateTimeOut();
	//alert("isTimeout :"+isTimeout);

	if (isTimeout){
		// hapus localStorage and goTo Main page
		clearSessionClient();
	} else {
		var accountNumber = accountData.getAccountNumber();
		var accountType = accountData.getAccountType();
		var newdata = {};
		newdata['ipassport']=userStorageMap.ipassport;
		newdata['lang']=window.localStorage.getItem("lang");
		newdata['accountNumber']=accountNumber;
		newdata['accountType']=accountType;
		var datajson=JSON.stringify(newdata);
		$ionicLoading.show({
		 	template: 'Loading...',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
		 $http.post(ipaddress+'/rest/infoProcessV2/showDetailSummary',datajson)
	     .success(function(data) {
	    	// alert("data.displayDetail")
	 		//document.getElementById('accountSummaryDetailDisplay').appendChild(data.displayDetail);
	    	$ionicLoading.hide();
	 		document.getElementById("accountSummaryDetailDisplay").innerHTML = data.displayDetail;
	 		document.getElementById("historyDisplay").innerHTML = data.miniAccStmnt;

	     }).error(function(){
	    	 $ionicLoading.hide();
	    	 alert("Server Error");
	    	 	//window.location.href = "#/app/payPurchase";
	    	 	return false;
	     });
	}
});

//credit card detail controller
accountControllers.controller('summaryDetailCreditCardCtrl', function($scope, $rootScope, $routeParams, $http, $compile, accountData) {
		
   	loadFontSize();

	console.log("=== summaryDetailCreditCardCtrl ===");
	var isTimeout = calculateTimeOut();
	//alert("isTimeout :"+isTimeout);
	if (isTimeout){
		// hapus localStorage and goTo Main page
		clearSessionClient();
	} else {
		//construct after account summary open
		var displayCreditCardSummaryDetail = accountData.getAccountSummaryCCClientData();
//		alert(JSON.stringify(displayCreditCardSummaryDetail));
		
		var accountNumber = accountData.getAccountNumberCC();
//		alert(accountNumber);

		for(var i = 0; i < displayCreditCardSummaryDetail.length; i++){
			var displayCCDetail = displayCreditCardSummaryDetail[i][0].displayCCDetail;
//			alert(JSON.stringify(displayCreditCardSummaryDetail[i][0].displayCCDetail));
//			alert(JSON.stringify(displayCreditCardSummaryDetail[i][0].accountNumber));
			if (displayCreditCardSummaryDetail[i][0].accountNumber == accountNumber){
				var displayCreditCardSummaryDetail = displayCCDetail;
				var nodeConstructDisplay = document.createElement('span');
				nodeConstructDisplay.innerHTML = "<div id='divConstructCreditCardSummaryDetailDisplay'>"+displayCreditCardSummaryDetail+"</div>";
				document.getElementById('accountCreditCardDisplayDetail').appendChild(nodeConstructDisplay);
				
				$compile(document.getElementById('accountCreditCardDisplayDetail'))($scope);
		 	 	$scope.$apply();
		 	 	
		 	 	break;
			}
		}
		
		//construct via client
//		var data = accountData.getAccountSummaryCCClientData();
//		var display = constructCCSummaryDetail(data, $scope, $rootScope, accountData);
//		document.getElementById("accountCreditCardDisplayDetail").innerHTML = display;
//		$compile(document.getElementById('accountCreditCardDisplayDetail'))($scope);
//		$scope.$apply();
		
		//construct via server
//		var displayCreditCardSummaryDetail = accountData.getAccountSummaryCCServerData();
//		var nodeConstructDisplay = document.createElement('span');
//		nodeConstructDisplay.innerHTML = "<div id='divConstructCreditCardSummaryDetailDisplay'>"+displayCreditCardSummaryDetail+"</div>";
//		document.getElementById('accountCreditCardDisplayDetail').appendChild(nodeConstructDisplay);
//		
//		$compile(document.getElementById('accountCreditCardDisplayDetail'))($scope);
// 	 	$scope.$apply();

	}
});

function constructCCSummaryDetail(data, $scope, $rootScope, accountData){
	console.log("=== constructCCSummaryDetail ===");
//	var accountNumber = $rootScope.accountNumber;
	var accountNumber = accountData.getAccountNumberCC();
	//var data = JSON.parse(data);
	//var name = "Krisandra";
	//alert(accountNumber)
	var table="";
	//alert(JSON.stringify(data))
	for(var i=0; i<data.length; i++){
	//alert(data[i].accountNumber);
		if(data[i].accountNumber == accountNumber){
			//alert(accountCreditCardDisplayDetail)
			table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
			table=table.concat("<tr>");
			table=table.concat("<td>");
			table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
			table=table.concat("<tr>");
			table=table.concat("<td class='arrowBack'></td>");
			table=table.concat("<td>");
			//hardcode
			table=table.concat("<span class='txtTitleAccDet'>"+data[i].accountName+"</span> <br>");
			//
			table=table.concat("<span class='txtTitleAccDetSmall'>"+data[i].productType+"</span><br>");
	
			table=table.concat("<span class='txtTitleAccDetSmall'>("+data[i].maskingAccNumber+")</span> <br>");
			
			if(data[i].dataList == undefined || data[i].dataList == "undefined"){
				console.debug("balance list is null");
			} else {
				/*for(var h=0; h<data[i].dataList.length; h++){
					if(data[i].dataList[h].amountType == "Available Balance"){
						table=table.concat("<span class='txtTitleAccDetSmall'> Currency</span> : <span class='txtTitleAccDetSmall'>"+data[i].dataList[h].currencyCode+"</span> <br>");
					}
				}*/
				for(var j=0; j<data[i].dataList.length; j++){
					//alert("data "+i+ ": "+JSON.stringify(data[i].dataList[j].amountType))
						if(data[i].dataList[j].amountSign=="D"){
							table=table.concat("<span class='txtTitleAccDetSmall'>"+data[i].dataList[j].amountType+"</span> : <span class='txtTitleAccDet' style='color:red;'>("+data[i].dataList[j].amount);
							table=table.concat(") </span> <br>");
						}else{
							table=table.concat("<span class='txtTitleAccDetSmall'>"+data[i].dataList[j].amountType+"</span> : <span class='txtTitleAccDet'>"+data[i].dataList[j].amount);
							table=table.concat("  </span> <br>");
							}
				}
			}
	
			table=table.concat("</td>");
			table=table.concat("</tr>");
			table=table.concat("</table>");
			table=table.concat("</td>");
			table=table.concat("</tr>");
			table=table.concat("</table>");
		}
	}
	return table;
}


/** ----------------- **/
/** Account Statement **/
/** ----------------- **/
accountControllers.controller('statementInputCtrl', function($scope, $routeParams, $http, accountData,$translate,$ionicPopup,$ionicModal, $ionicLoading) {
		
   	loadFontSize();

	var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
	console.debug(window.localStorage.getItem("userStorage"))
	var accList = userStorageMap.ipassportData.ipassDataClient.profileScope.accountListAll;

    var accNumberColl = "";
    var accNumberTemp = "";
    var accNumberValue = "";
    
   	var jsonArr = [];
   	
    for(var i = 0; i < accList.length; i++){
        //var option = $("<option>");
        for( var key in accList[i] ){
        	if (key == "accountNumber"){

    	    	//if (accList[i]["allowFlag"].indexOf("bp")>=0){
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
    	    	//}
    	    }
        }
    }

	/*alert(accList)*/
	$scope.accListObject = jsonArr;
//	alert($scope.accListObject);
	$scope.showAccountList = function(){
		//alert("showAccountList");
		//var title = $translate.instant('purchasePayment_accountList');
		showSelectList($scope,$translate,$ionicPopup,"Account","queryAccountList","accountSelect","accSelect","accListObject","chooseAccountList({{accSelect}});","{{accSelect.id}}","{{accSelect.label}}");   
	}

	/*$scope.chooseAccountList = function(account){
		//alert("chooseAccountList"+accSelect);
		$scope.myPopup.close();
		chooseAccount(account);
	}*/
	$scope.periodToday = function () {
		//alert("periodToday");
		window.localStorage.setItem('period', "today");	
		clearPeriodRange();
	};
	$scope.periodCurMonth = function () {
		//alert("periodCurMonth");
		window.localStorage.setItem('period', "curMonth");	
		clearPeriodRange();
	};
	$scope.period1MonthAgo = function () {
		//alert("period1MonthAgo");
		window.localStorage.setItem('period', "1MonthAgo");
		clearPeriodRange();
	};
	$scope.period2MonthAgo = function () {
		//alert("period2MonthAgo");
		window.localStorage.setItem('period', "2MonthAgo");	
		clearPeriodRange();
	};
	$scope.period3MonthAgo = function () {
		//alert("period3MonthAgo");
		window.localStorage.setItem('period', "3MonthAgo");	
		clearPeriodRange();
	};
	$scope.periodRange = function () {
		//alert("periodRange");
		clearPeriodRange();
		
		window.localStorage.setItem('period', "range");	
		var fromDate = $translate.instant('accountStatement_fromDate');
		var toDate = $translate.instant('accountStatement_toDate');

		constructGenericDisplay("loadFromDate", "<div id='divFromDateLabel'> <td> "+fromDate+" </td> </div> ");
		constructGenericDisplay("loadFromDate", "<div id='divFromDate'>  <td colspan='2'> <input type='text' id='fromDate' class='m_content-inputtext' maxlength='11' size='11'> </td> </div> ");
     	
		constructGenericDisplay("loadToDate", "<div id='divToDateLabel'> <td> "+toDate+" </div> ");
		constructGenericDisplay("loadToDate", "<div id='divToDate'> <td colspan='2'> <input type='text' id='toDate' class='m_content-inputtext' maxlength='11' size='11'> </td> </div> ");
     	
     	var myCalendar = new dhtmlXCalendarObject(["fromDate","toDate"]);
     	myCalendar.hideTime();
     	myCalendar.setDateFormat("%d-%m-%Y");
     	
    	var currentTime = new Date();
    	var month = currentTime.getMonth()+1;
    	var day = currentTime.getDate();
    	var year = currentTime.getFullYear();
    	var dateNow = day+"-"+ month +"-"+year;
   // 	alert("dateNow :"+dateNow);
        
        document.getElementById('fromDate').value = dateNow;
        document.getElementById('toDate').value = dateNow;
	};
	
	$scope.doAccountStatementResult = function () {
			
		var isTimeout = calculateTimeOut();
		//alert("isTimeout :"+isTimeout);
		if (isTimeout){
			// hapus localStorage and goTo Main page
			clearSessionClient();
		} else {
			var accountNumber = document.getElementById('accountNumberHidden').value;
			if (accountNumber == null || accountNumber == ""){
				alert("Please choose account number");
			} else {
				var periodOption = window.localStorage.getItem("period");	
				if (periodOption == null || periodOption == ""){
					alert("Please choose Period");
				}else{
					var period = window.localStorage.getItem("period");
					if (periodOption=="range"){
						var sFormDate = document.getElementById('fromDate').value;
						var sToDate = document.getElementById('toDate').value;
						
						var sFormDateConvert = new Array();
						sFormDateConvert = sFormDate.split("-");
						//alert('sFormDateConvert:'+sFormDateConvert);
						sFormDate = sFormDateConvert[2]+"-"+sFormDateConvert[1]+"-"+sFormDateConvert[0];
						//alert('sFormDate:'+sFormDate);
						
						var sToDateConvert = new Array();
						sToDateConvert = sToDate.split("-");
						//alert('sToDateConvert:'+sToDateConvert);
						sToDate = sToDateConvert[2]+"-"+sToDateConvert[1]+"-"+sToDateConvert[0];
					//	alert('sToDate:'+sToDate);
					}
					//alert("period"+period);
					
					// add accSelected to Json Data
					var newdata = {};			
					newdata['cardId'] = accountData.getAccountNumber;
					newdata['accStatementSelect'] = accountNumber;
					newdata['period'] = period;
					newdata['ipassport'] = userStorageMap.ipassport;
					newdata['lang']=window.localStorage.getItem("lang");
					if (periodOption=="range"){
						newdata['sFromDate']=sFormDate;
						newdata['sToDate']=sToDate;
					}
					var datajson=JSON.stringify(newdata);
	//				$.extend(true, userStorageMap, newdata);
	//				var userStorageString = JSON.stringify(userStorageMap);
					//alert("datajson: " + datajson);
					$ionicLoading.show({
					 	template: 'Loading...',
				        animation: 'fade-in',
				        showBackdrop: true,
				        maxWidth: 200,
				        showDelay: 0
				    });
					 $http.post(ipaddress+'/rest/historyV2/accountStatement',datajson)
				     .success(function(data) {
				    	 $ionicLoading.hide();
				    	 if(data!=null){
					    		if (data.responseCode == "01"){
									alert(data.responseMessage);
					    		}else{
					    			//alert("data.headerBuff: " + data.headerBuff);
					    			//alert("data.lineBuff: " + data.lineBuff);
	//					    		window.localStorage.setItem('headerBuff', JSON.stringify(data.headerBuff));
	//					    		window.localStorage.setItem('lineBuff', JSON.stringify(data.lineBuff));
						    		
	//					    		$('#content').load('html-content/accountStatementResult.html', function(){
	//					    			var tableheader=constructAccountStatementDisplay(data.headerBuff);
	//					    			var tableStream=constructAccountStatementDisplay(data.lineBuff);
	//					    			$("#statement").append(tableheader+"<br>");
	//									$("#statement").append(tableStream);
	//					    		});
					    			
					 				stickinessSetAccNumber("ALL",accountNumber);
					    			accountData.setAccountStatementData(data);
					    			window.location.href = "#/app/statementResult";
					    			
					    		}
					    	}else{
					    		passFromErrorHandling(GED_STATEMENT,data,goToTransferInputInternalHtml);
					    	}
					    	
					    	//stickinessSetAccNumber(accountNumber);
					   }).error(function(){
					    	$ionicLoading.hide();
				    	 	alert("Server Error");
				    	 	//window.location.href = "#/app/payPurchase";
				    	 	return false;
				     });
					
				}
			}
		}	
	};

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

	
	if (jsonArr.length = 1){
    	$scope.queryAccountList = jsonArr[0].label;
    	$scope.accountNumberSelect = jsonArr[0].id;
   	}else{
		stickinessGetAccNumber($scope, "ALL");
   	}
});

function clearPeriodRange(){
//	alert("clearPeriodRange");
	try {
		$('#divFromDateLabel').remove();
		$('#divToDateLabel').remove();
		$('#divFromDate').remove();
		$('#divToDate').remove();
	} catch(e) {}
}

accountControllers.controller('statementResultCtrl', function($scope, $routeParams, $http, accountData) {
	
   	loadFontSize();
	var accountStatementData = accountData.getAccountStatementData();
	var tableheader=accountStatementData.headerBuff;
	var tableStream=accountStatementData.lineBuff;
	var stmtId = accountStatementData.stmtId;
	/*$("#statement").append(tableheader+"<br>");
	$("#statement").append(tableStream);*/
	 //document.getElementById("statement").innerHTML = tableheader+"<br>"+tableStream;
	 document.getElementById("statement").innerHTML = tableheader+"<br>"+tableStream;

	 var newdata = {};
					newdata['stmtId'] = stmtId;
	var datajson=JSON.stringify(newdata);

	$scope.doPopUpPrintStatement=function(){
		var period=accountStatementData.period;
		var fromDate=accountStatementData.fromDate;
		var toDate=accountStatementData.toDate;
		
		var cardNumber=accountData.getCardNumber();
		var ipassport=userStorageMap.ipassport;
		var lang=window.localStorage.getItem("lang");
		// html2canvas(document.getElementById('statement'), {
  //           onrendered: function (canvas) {
  //               var data = canvas.toDataURL();
  //               var docDefinition = {
  //                   content: [{
  //                       image: data,
  //                       width: 500,
  //                   }]
  //               };
  //              // pdfMake.createPdf(docDefinition).download("StatementResult.pdf");
  //            	pdfMake.createPdf(docDefinition).open;
                   
  //           }
  //       });
	if (period=="range"){
			window.open(ipaddress+'/rest/historyV2/accountDownloadBillingStatementCard?ipassport='+ipassport+'&lang='+lang+'&period='+period+'&fromDate='+fromDate+'&toDate='+toDate+'&cardNumber='+cardNumber, '_system');
	}else{
		window.open(ipaddress+'/rest/historyV2/accountDownloadBillingStatementCard?ipassport='+ipassport+'&lang='+lang+'&period='+period+'&cardNumber='+cardNumber, '_system');
	}
	
	}


	$scope.goToDetail=function(){
					 $http.post(ipaddress+'/rest/historyV2/accountStatementDetail',datajson)
				     .success(function(data) {
				    	 if(data!=null){
					    		if (data.responseCode == "01"){
									alert(data.responseMessage);
					    		}else{
					    			//alert("data.headerBuff: " + data.headerBuff);
					    			//alert("data.lineBuff: " + data.lineBuff);
	//					    		window.localStorage.setItem('headerBuff', JSON.stringify(data.headerBuff));
	//					    		window.localStorage.setItem('lineBuff', JSON.stringify(data.lineBuff));
						    		
	//					    		$('#content').load('html-content/accountStatementResult.html', function(){
	//					    			var tableheader=constructAccountStatementDisplay(data.headerBuff);
	//					    			var tableStream=constructAccountStatementDisplay(data.lineBuff);
	//					    			$("#statement").append(tableheader+"<br>");
	//									$("#statement").append(tableStream);
	//					    		});
					    			
					 				//stickinessSetAccNumber("ALL",accountNumber);
					    			accountData.setAccountStatementData(data);
					    			window.location.href = "#/app/statementResultDetail";
					    			
					    		}
					    	}else{
					    		passFromErrorHandling(GED_STATEMENT,data,goToTransferInputInternalHtml);
					    	}
					    	
					    	//stickinessSetAccNumber(accountNumber);
					   }).error(function(){
				    	 	alert("Unable to process transaction");
				    	 	//window.location.href = "#/app/payPurchase";
				    	 	return false;
				     });
	}
});

accountControllers.controller('statementResultDetailCtrl', function($scope, $routeParams, $http, accountData, $compile) {
	
   	loadFontSize();
  
	var accountStatementData = accountData.getAccountStatementData();
	var tableheader=accountStatementData.headerBuff;
	var tableStream=accountStatementData.lineBuff;

	 	console.debug("masuk controller : "+tableStream);
	/*$("#statement").append(tableheader+"<br>");
	$("#statement").append(tableStream);*/
	 //document.getElementById("statement").innerHTML = tableheader+"<br>"+tableStream;
	 
	 document.getElementById('contructStatement').innerHTML = tableStream;
	  $compile(document.getElementById('contructStatement'))($scope);
      if(!$scope.$$phase) {
         //$digest or $apply
          $scope.$apply();
      }


	/*var nodeConstructDisplay = document.createElement('span');
	nodeConstructDisplay.innerHTML = "<div id='divConstructDisplay'> <br> <br><table border='0' width='100%' cellspacing='0'>aaa</table></div>";
	document.getElementById('contructStatement').appendChild(nodeConstructDisplay);

      document.getElementById('contructStatement').innerHTML = tableStream;
	  $compile(document.getElementById('contructStatement'))($scope);
      if(!$scope.$$phase) {
         //$digest or $apply
          $scope.$apply();
      }
*/
 //  	var nodeConstructDisplay = document.createElement('span');
	// nodeConstructDisplay.innerHTML = tableStream;
	// document.getElementById('statement').appendChild(nodeConstructDisplay);
	
	// $compile(document.getElementById('statement'))($scope);
	// $scope.$apply();
	 
	 //$scope.statement = tableStream;
});

accountControllers.controller('ccTransactionDetailCtrl', function($scope, $rootScope, $routeParams, $http, $compile, accountData) {
		
   	loadFontSize();

	var accountStatementCCData = accountData.getAccountStatementCCData();

	console.log("accountStatementCCData : "+JSON.stringify(accountStatementCCData));
	//consruct via client
//	var display=constructCCTransactionDetailDisplay(accountStatementCCData);
//	document.getElementById("accountCreditCardTransactionDetail").innerHTML = display;
//	$compile(document.getElementById('accountCreditCardTransactionDetail'))($scope);
//	$scope.$apply();
	
	//consruct via server
	var displayCreditCardTransactionDetail = accountStatementCCData.displayCreditCardTransactionDetail;
	var nodeConstructDisplay = document.createElement('span');
	nodeConstructDisplay.innerHTML = "<div id='divConstructCreditCardTransactionDetailDisplay'>"+displayCreditCardTransactionDetail+"</div>";
	document.getElementById('accountCreditCardTransactionDetail').appendChild(nodeConstructDisplay);
	
	$compile(document.getElementById('accountCreditCardTransactionDetail'))($scope);
	$scope.$apply();
});

function constructAccountStatementDisplay(stream){
	 var records =stream.split("|");
	 var table="";
	 table=table.concat("<table id='genericTable' border='0' cellpadding='1' cellspacing='1' >");
	 //iterate row
	 
	 var odd=true;
	 for (var i = 0; i < records.length; i++) {
		console.log(i + ':' + records[i]);
		var columns = records[i].split(";");
		if (i == 0) {
			// header
			table = table.concat("<tr class='table-header-account'>");
		} else {
			// content
			table = table.concat("<tr>");
			odd = !odd;
			if (odd) {
				table = table.concat("<tr class='oddLine'>");
			} else {
				table = table.concat("<tr class='evenLine'>");
			}
		}
		for (var j = 0; j < columns.length; j++) {
			table = table.concat("<td class='table-content'>");
			table = table.concat(columns[j]);
			table = table.concat("</td>");
		}
		table = table.concat("</tr>");
	 }
	 table=table.concat("</table>");
	 return table;
}

function constructCCTransactionDetailDisplay(data){
//	alert(JSON.stringify(data));
//	alert(JSON.stringify(data.ccAccountStatement_resultList[z].recordList))
//	alert(data.ccAccountStatement_resultList[z].recordList.length)
	 
	var table="";	 
	// header nya statement cc
	table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
	  table=table.concat("<tr>");
	  	table=table.concat("<td>");
		  table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
		    table=table.concat("<tr>");
		      table=table.concat("<td class='arrowBack'><label class='arrowBackContent'></label></td>");
		      table=table.concat("<td>");
/*		      	table=table.concat("<span class='txtTitleAccDetSmall'> Currency : "+data.currency+"</span> <br>");
*/		      	table=table.concat("<span class='txtTitleAccDetSmall'> Account Number : "+data.maskingAccNumber+"</span> <br>");
		      	table=table.concat("<span class='txtTitleAccDetSmall'> Account Name : "+data.accountName+"</span> <br>");
		      	table=table.concat("<span class='txtTitleAccDetSmall'> Bank Branch Name : "+data.bankBranchName+"</span> <br>");
		      table=table.concat("</td>");
		    table=table.concat("</tr>");
		  table=table.concat("</table>");
		table=table.concat("</td>");
	  table=table.concat("</tr>");
	table=table.concat("</table>");
	table=table.concat("<br>");

	// daftar transaksi nya
/*	table=table.concat("<hr class='btmLineGrouping'>");
*/	table=table.concat("<table id='genericTable' border='0' cellpadding='1' cellspacing='1' width='100%'>");	 
	
	for(var z=0; z<data.ccAccountStatement_resultList.length; z++){

	  if (data.ccAccountStatement_resultList[z] == undefined || data.ccAccountStatement_resultList[z] == 'undefined'){
			console.debug("no transaction");
	  } else {
		  table=table.concat("<tr>");
			table=table.concat("<td>");
			if (z != 0){
			  table=table.concat("<br>");
			  table=table.concat("<br>");
			}
			  //pan
			  table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
			    table=table.concat("<tr>");
				  table=table.concat("<td align='left'>");
				  table=table.concat("</td>");
				  table=table.concat("<td align='right'>");
				    table=table.concat("<label class='txtNameAccSumDetBold'>Card Number : "+data.ccAccountStatement_resultList[z].panMasking+"</label>");
				  table=table.concat("</td>");
			    table=table.concat("</tr>");
			  table=table.concat("</table>");			
			table=table.concat("</td>");
		  table=table.concat("</tr>");
	  }
	  //table header
	  table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");	  
	  table=table.concat("<tr>");
	   	table=table.concat("<td class='bgrLineGrey'>");
	   	  table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
	   	    table=table.concat("<tr>");
	   	      table=table.concat("<td width='80%' align='left'>Transaction Detail</td>");
	   	      table=table.concat("<td width='20%' align='left'>"+data.currency+"</td>");
	   	    table=table.concat("</tr>");
	   	  table=table.concat("</table>");
	   	table=table.concat("</td>");
	  table=table.concat("</tr>");
	  if(data.ccAccountStatement_resultList[z] == undefined || data.ccAccountStatement_resultList[z] == "undefined"){
		  console.debug("no transaction");
	  } else {	
		 var dateValue = "";
		 for(var i=0; i<data.ccAccountStatement_resultList[z].recordList.length; i++){	
			 /*table=table.concat("<tr class='txtTitleAccDetSmall'><td > Transaction Date</td><td>:</td><td class='txtTitleAccDetSmall'>"+data.ccAccountStatement_resultList[z].recordList[i][1]);
			 table=table.concat("</td></tr>");
			 table=table.concat("<tr class='txtTitleAccDetSmall'><td > Posting Date</td><td>:</td><td class='txtTitleAccDetSmall'>"+data.ccAccountStatement_resultList[z].recordList[i][2]);
			 table=table.concat("</td></tr>");
			 table=table.concat("<tr class='txtTitleAccDetSmall'><td > Description</td><td>:</td><td class='txtTitleAccDetSmall'>"+data.ccAccountStatement_resultList[z].recordList[i][3]);
			 table=table.concat("</td></tr>");
			 table=table.concat("<tr class='txtTitleAccDetSmall'><td> Amount</td><td>:</td><td class='txtTitleAccDet'>"+data.ccAccountStatement_resultList[z].recordList[i][4]+data.ccAccountStatement_resultList[z].recordList[i][5]);
			 table=table.concat("</td></tr>");
			 table=table.concat("<tr>");
			 table=table.concat("<td>");
			 table=table.concat("<hr class='btmLine'>");
			 table=table.concat("</td>");
			 table=table.concat("<td>");
			 table=table.concat("<hr class='btmLine'>");
			 table=table.concat("</td>");
			 table=table.concat("<td>");
			 table=table.concat("<hr class='btmLine'>");
			 table=table.concat("</td>");
			 table=table.concat("</tr>");*/
			 if(dateValue == data.ccAccountStatement_resultList[z].recordList[i][1]){
				 table=table.concat("<tr>");
//				 table=table.concat("<tr style='padding-top: 5px;'>");
				   table=table.concat("<td><hr class='btmLineGrouping'>");
//				   table=table.concat("<td><hr class='btmLineGrouping' style='padding-top: 5px;'>");
				   table=table.concat("</td>");
				 table=table.concat("</tr>");	
			     table=table.concat("<tr>");
				   table=table.concat("<td>");
					 table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
					   table=table.concat("<tr>");				 
					     //1.DATE
//						 table=table.concat("<td class='padDate'>");
////					 table=table.concat("<td width='10%' style='	padding-left: 5px;'>");
//						   table=table.concat("<div id='balance_nav_result'>");
//							 table=table.concat("<ul>");
//							   table=table.concat("<li class='ul_style_va_top'>");
//								 table=table.concat("<div id='balance_date_result'>");
//								   table=table.concat("<ul>");
//									 //var dataDate = data.ccAccountStatement_resultList[z].recordList[i][1].split(" ");
//									   table=table.concat("<li>&nbsp;</li>");
			 }else{
				 table=table.concat("<tr>");
//				 table=table.concat("<tr style='padding-top: 5px;'>");
				   table=table.concat("<td><hr class='btmLineBold'>");
//				   table=table.concat("<td><hr class='btmLineBold' style='padding-top: 5px;'>");
				   table=table.concat("</td>");
				 table=table.concat("</tr>");					
				 table=table.concat("<tr>");
				   table=table.concat("<td>");
					 table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");				 
					   table=table.concat("<tr>");
					     table=table.concat("<td class='bgrLineGreyDate'>");
						 var dataDate = data.ccAccountStatement_resultList[z].recordList[i][1].split(" ");
						 table=table.concat(dataDate[1]+" "+dataDate[0]);
					     table=table.concat("</td>");
				       table=table.concat("</tr>");				
				       table=table.concat("<tr>");							
						 //1.DATE
//						 table=table.concat("<td class='padDate'>");
//						   table=table.concat("<div id='balance_nav_result'>");
//							 table=table.concat("<ul>");
//							   table=table.concat("<li class='ul_style_va_top'>");
//								 table=table.concat("<div id='balance_date_result'>");
//								   table=table.concat("<ul>");
//								   	 var dataDate = data.ccAccountStatement_resultList[z].recordList[i][1].split(" ");
//								   	 table=table.concat("<li class='ul_style_month'>"+dataDate[1]+"</li><li class='ul_style_date'>"+dataDate[0]+"</li>");
			 }	
//								   table=table.concat("</ul>");
//								 table=table.concat("</div>");
//							   table=table.concat("</li>");
//						     table=table.concat("</ul>");
//					       table=table.concat("</div>");
//				         table=table.concat("</td>");						 	
						 table=table.concat("<td>");
			//			 table=table.concat("<td width='50%'>");
						   table=table.concat("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
							 table=table.concat("<tr>");
							   //2. DESCRIPTION
							   table=table.concat("<td align='left'>");
								 table=table.concat("<label class='txtNameAccSumDet'>"+data.ccAccountStatement_resultList[z].recordList[i][3]+"</label>");
							   table=table.concat("</td>");
							 table=table.concat("</tr>");
							 table=table.concat("<tr>");
							   //3.AMOUNT
							   table=table.concat("<td align='right'>");
	//						   table=table.concat("<td width='40%' align='right'>");
							   if(data.ccAccountStatement_resultList[z].recordList[i][4]=="C"){
								 var dataCreditMinus = data.ccAccountStatement_resultList[z].recordList[i][5].split("-");
								 table=table.concat("<label class='txtNameAccSumValueRed'>("+dataCreditMinus[1]+")</label>");
							   }else{
								 table=table.concat("<label class='txtNameAccSumValue'>"+data.ccAccountStatement_resultList[z].recordList[i][5]+"</label>");
							   }
							   table=table.concat("</td>");
							 table=table.concat("</tr>");
						   table=table.concat("</table>");
						 table=table.concat("</td>");						
					   table=table.concat("</tr>");
					 table=table.concat("</table>");
				   table=table.concat("</td>");
				 table=table.concat("</tr>");
				 
				 dateValue = data.ccAccountStatement_resultList[z].recordList[i][1];	//grouping date
			 
		 }
	 }
	 table=table.concat("<tr>");
	   table=table.concat("<td><hr class='btmLineBold'>");
	   table=table.concat("</td>");
	 table=table.concat("</tr>");
	}
	 table=table.concat("</table>");
	 return table;
}