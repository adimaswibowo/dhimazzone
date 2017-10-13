/*var milisec=0;
var seconds=0;
var displaySeconds=0;
var minutes=0;

//var logoutClickCounter=0;
var timeoutAutoLogout;

var timer=1*600;
//var timer=1*10;

function initAutoLogout(){
	milisec=0;
	seconds=0;
	displaySeconds=0;
	minutes=0;
}

function runAutoLogoutTimer(){
	if (milisec>=9){ // milisec = 0
		milisec=0;
		seconds+=1;
	}else{
		milisec+=1; // milisec = 0+1 = 1
	}
	alert(seconds)
	if(seconds >= timer ){ // seconds = 0, timer = 10
		window.status="Idle for "+minutes+" minutes "+displaySeconds+" seconds";//+"."+milisec
		onLogoutClick();
	} else {
		
		if(seconds>59){ // seconds = 0
			minutes=Math.floor(seconds/60);
		}
		displaySeconds=seconds%60; // displaySeconds = 0%60 = 
		
		if(seconds%10==0){ // seconds = 0 => true
			window.status="Idle for "+minutes+" minutes "+displaySeconds+" seconds";//+"."+milisec
		}
		timeoutAutoLogout = setTimeout("runAutoLogoutTimer()",100);
	}
}

function stopAutoLogoutTimer() {
    clearTimeout(timeoutAutoLogout);
}

function resetAutoLogoutTimer(){
	stopAutoLogoutTimer();
	initAutoLogout();
	runAutoLogoutTimer();
}

//function display3(){
//	init();
//	display2();
//}

function onLogoutClick(){
//	alert("doLogout");
//	alert("logoutClickCounter: "+ logoutClickCounter);
//	if(logoutClickCounter==0){
//		logoutClickCounter++;
		logout();
		//top.location="index.html";
		//alert('logout');
//	}
}

//if (user!=null){
//	display2();
//}
	
	
//-------------------------------------------------------------------------------------------------
//	function logout()
//	{
//// 		alert("do Logout");
//		var userStorageMap = JSON.parse(window.localStorage.getItem("userStorage"));
//// 		alert(userStorageMap);
//		if (null != userStorageMap || userStorageMap != ""){
//// 			alert("userStorageMap User: " + userStorageMap.userLogin);
//// 			alert("userStorageMap User: " + userStorageMap.userLogin.status);
//// 			alert("userStorageMap SessionId: " + userStorageMap.sessionId);
//			var userStorageString = JSON.stringify(userStorageMap);
//// 			alert("userStorageString: " + userStorageString);
//			
//			$.ajax({
//			    url: ipaddress+"/rest/logout",
//			    type: 'POST',
//			    dataType: 'json',
//			    data: userStorageString,
//			    contentType: 'application/json',
//			    mimeType: 'application/json',
//			    
//			    beforeSend: function(xhr){
//			    	blockPage();
//// 			    	$('#dvLoading').html('<img src="theme-'+themeName+'/images/loader.gif"/>');
//			    },
//			    
//			    success: function(data) {
//// 			        alert("SUkses Logout");
//			        window.localStorage.clear();
//					location.href='welcome.html';
//			    },
//			    error:function(data,status,er) {
//			    	alert("Request to Sever Failed");
//// 			        alert("error: "+data+" status: "+status+" er:"+er);
//			    }
//			});
//		}
//	}
//	
////-------------------------------------------------------------------------------------------------
//	
//	$j = jQuery.noConflict();
//	   
//	//function to block the whole page
//	function blockPage(){ 
//		$j.blockUI({ message: '<img src="theme-default/images/loading32.gif"/><h1> Loading...</h1>', 
//			css: { 
//			 border: 'none', 
//			 padding: '15px',  
//			 '-webkit-border-radius': '10px', 
//			 '-moz-border-radius': '10px', 
//			 opacity: .9
//			} 
//		}); 
//		return false;
//	}
//	
//	//function to unblock the page
//	function unblockPage(){
//		$j.unblockUI();
//	}*/

//// Set timeout variables.
//var timoutWarning = 84000; // Display warning in 14 Mins.
//var timoutNow = 90000; // Timeout in 15 mins.
////var logoutUrl = 'http://domain.com/logout.aspx'; // URL to logout page.
//
//var warningTimer;
//var timeoutTimer;
//
//// Start timers.
//function StartTimers() {
//    warningTimer = setTimeout("IdleWarning()", timoutWarning);
//    timeoutTimer = setTimeout("IdleTimeout()", timoutNow);
//}
//
//// Reset timers.
//function ResetTimers() {
//    clearTimeout(warningTimer);
//    clearTimeout(timeoutTimer);
//    StartTimers();
//    $("#timeout").dialog('close');
//}
//
//// Show idle timeout warning dialog.
//function IdleWarning() {
//   /* $("#timeout").dialog({
//        modal: true
//    });*/
//	alert("Session anda telah habis");
//}
//
//// Logout the user.
//function IdleTimeout() {
//   // window.location = logoutUrl;
//	logout();
//}


function calculateTimeOut(){
	var nowDate = localStorage.getItem('lastActiveDate');
	if(nowDate != null && nowDate != "" && nowDate != undefined && nowDate != "null" && nowDate != "undefined"){
		var newDate = new Date(); 
		var d = (newDate-Date.parse(nowDate)); // difference in milliseconds
		var minutes = Math.round(d/60000);
		if(minutes >= 10){
			alert("Session Timeout");
			return true;
		} else {
			localStorage.setItem('lastActiveDate',new Date());
			return false;
		}
	}
}
