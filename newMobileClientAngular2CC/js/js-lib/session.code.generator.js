/**
 *  generate session code untuk ngecek active session
 *  one time generate
 */

function generateSessionCode(){
	if (window.localStorage.getItem("sessionCode") == null){
		var date = new Date();
		var sessionCode = date.getTime();
		window.localStorage.setItem("sessionCode", sessionCode);
	}
}