/**
 * created by fedri
 * IT Bank Sinarmas
 */

function fundTransferValidation($scope){
	//alert("masuk validation");
	var regex=new RegExp("^[0-9A-Za-z ]*$");
	
	var accountNumber = document.getElementById('accountNumberHidden').value; //document.getElementById('accountNumber').value;
	var targetAccount = null;

	try {
		var directTransfer = $scope.ftInbank.directTransfer;
		//alert("directTransfer :"+directTransfer);
	} catch(e) {}

	if (directTransfer == true){
		targetAccount = document.getElementById('targetAccountDirectTrf').value;
	}else{
		var targetAccountWithMode = document.getElementById('targetAccountHidden').value;
		var targetAccountSplit = targetAccountWithMode.split("|");
		targetAccount = targetAccountSplit[0];
	}
	
	var amount = document.getElementById('amount').value;
	var description = document.getElementById('description').value;
	
	var invalidDataMap = {};
//	invalidDataMap["key1"] = accountNumber;
//	alert(invalidDataMap["key1"]);
	var result = false;
	
	if (accountNumber == "" || accountNumber == null){
		invalidDataMap["invalidData"] = "Account Number is required";
		result = true;
		alert(invalidDataMap["invalidData"]);
		return result;
	}
	if (targetAccount == "" || targetAccount == null){
		invalidDataMap["invalidData"] = "Target Account is required";
		result = true;
		alert(invalidDataMap["invalidData"]);
		return result;
	}
	if (amount == "" || amount == null){
		invalidDataMap["invalidData"] = "Amount is required";
		result = true;
		alert(invalidDataMap["invalidData"]);
		return result;
	}
	if(!description.match(regex)){
		invalidDataMap["invalidData"] = "Description must be Alpha Numeric!";
		result = true;
		alert(invalidDataMap["invalidData"]);
		return result;
	}
	
	return result;
}