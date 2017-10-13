/**
 * HSM initialization 
 */
var clientRandom = null;
var sid = null;
var publickey = null;
var rsa = null;
function hsmInit($http,$rootScope,$interval,$ionicLoading,$timeout){
	console.debug("hsm.init.js >> hsmInit");
	var url=ipaddress+"/rest/hsm/init";
	
	datajson = "{\"requestInitHsm\":\"send\",\"sessionCode\":\""+window.localStorage.getItem("sessionCode")+"\"}";
	
	$http({
		method: 'POST',
	    url: url,
	    data: datajson,
	    headers: {'Content-Type': 'application/json'}
	}).success(function(data) {
		if (data != null){
//    		publickey = data._e2EEPublicKey;
//    		sid=  data._e2EESessionId;
//    		clientRandom = data._e2EERandomNum;
//    		console.debug("publickey: " + publickey);
//    		console.debug("sid: " + sid);
//    		console.debug("clientRandom: " + clientRandom);
//    		console.debug("isUsingMockHSM: " + data.isUsingMockHSM);
    		
//    		if(data.isUsingMockHSM!=null && data.isUsingMockHSM!=undefined){
//    			var isUsingMockHSMServer=data.isUsingMockHSM;
//    			console.debug("isUsingMockHSMServer: " + isUsingMockHSMServer);
//    			if (isUsingMockHSMServer != 'no'){
//    				console.debug("isUsingMockHSM: " + isUsingMockHSM);
//    				isUsingMockHSM = true;
//    			}
//    		}
//    		console.debug("isUsingMockHSM: " + isUsingMockHSM);
//    		if(isUsingMockHSM==false){
//    			console.debug("rsa.init");
//	    		rsa = new RSAEngine();
//	    		rsa.init(publickey, sid, clientRandom);
//    		} 

			$rootScope.networkIndicator = true;
			$interval.cancel(checkServerOnload);

			//gak usah pake notif ini kalo connect
			/*$ionicLoading.show({
		      template: 'You Are Connected To The Bank Sinarmas Server'
		    });

		    $timeout(function() {
	    		$ionicLoading.hide();
			}, 1500);*/
    	}
	}).error(function(){
		$interval.cancel(checkServerOnload);
		$rootScope.networkIndicator = false;
		//alert("Connection Timeout, Please check your connection. If the problem persist, call our Customer Care in Contact Us menu");

		$ionicLoading.show({
	        template: 'Connection Timeout, Please check your connection. If the problem persist, call our Customer Care in Contact Us menu'
	    });

	    $timeout(function() {
    		$ionicLoading.hide();
		}, 1500);
	    
	    return false;
	});

}

function getRPIN(pin) {
	console.debug("isUsingMockHSM: " + isUsingMockHSM);
	if(isUsingMockHSM==false){
		return rsa.encryptPIN1(pin);
	}else{
		return pad(pin,91);//tambah '@' jadi 100 char
	}
}

function getRPIN2(old_pin, new_pin) {
	console.debug("getRPIN2");
	if(isUsingMockHSM==false){
		console.debug("rsa.encryptPIN2");
		return rsa.encryptPIN2(old_pin, new_pin);
	}else{
		return pad(old_pin+"|"+new_pin,91);//tambah '@' jadi 100 char
	}
}

function pad(n, width, z) {
  z = z || 'X';
  n = n + '';
  return n.length >= width ? n : n+"@"+ (new Array(width - n.length + 1).join(z)) ;
}

