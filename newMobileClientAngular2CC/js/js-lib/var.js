window.localStorage.setItem('IPaddressProd','https://www.banksinarmas.com/PersonalBanking');
window.localStorage.setItem('IPaddressDev','http://simigi.banksinarmas.com/PersonalBanking');

var ipAddressDefault = window.localStorage.getItem("IPaddress");
if (ipAddressDefault == null || ipAddressDefault == "" || ipAddressDefault.length < 1){
 var IPaddressProd = window.localStorage.getItem("IPaddressProd");
 window.localStorage.setItem('IPaddress',IPaddressProd);
}
//alert("test");
//test svn mac
//var ipaddress = "http://ibank.asiamerchantbank.com/PersonalBankingAmbUat";
//var ipaddress = window.localStorage.getItem("IPaddress");
//var ipaddress = "http://localhost:8080/PersonalBanking";
//var ipaddress = "http://localhost:8080/IBAMB";
//var ipaddress = "http://182.23.52.11/PersonalBankingAmbUat";
//var ipaddress = "http://localhost:8080/IBAMB";
//var ipaddress = "http://simigi.banksinarmas.com/PersonalBanking";
//var ipaddress = "https://www.banksinarmas.com/PersonalBanking";
//var ipaddress = "http://192.168.169.2:8080/IBORCL";
var ipaddress = "https://ibank.asiamerchantbank.com/PersonalBanking";

//window.localStorage.setItem('IPaddressProd','true');
//window.localStorage.setItem('IPaddressDev','http://simigi.banksinarmas.com/PersonalBanking');

var iconMode = window.localStorage.getItem("iconMode");
if (window.localStorage.getItem("iconMode") == null){
 //var ipaddressDev = window.localStorage.getItem("IPaddressDev");
 window.localStorage.setItem('iconMode','itIcon');
}

var clearLocalStorageKey = "s1m45k3y407";

// var is Mobile Device or Web
var mobileDevice = "MOBILE_DEVICE";
var webBrowser = "WEB_BROWSER";
var setDoubleExecuteSendSMS = 0;
var setDoubleExecuteReadSMS = 0;
var setDoubleClickParam = 0;

// var default font size
var defFontSize = 'S';

var isDevice = true;

var inquiryType = "";

var deploy;
var appVersion = "0.0.0";
var devicePlatform;
var deviceVersion;

var isUsingMockHSM=false;

// change Prod or Dev Mode
var clickCounter=0;

// variable buat user Push Notification
// var user;
var pToken;

//checkServer
var iFrequencyCheckServer = 3000;
var intervalCheckServer = 0;
var checkServerOnload;
//var totalCheckServer = 2;
var MAX_STORED_PROFILE=1;//harusnya kalo ini bisa > 1, maka userStorage juga dibikin >1, maka dibikin 1 aja jadi cuman bisa 1 user profile di client (sekarang userStorage belom bisa multiple)

var defaultMenuJson = '{"menuJson":['+
									'{"id":"70",'+
									'"code":"home",'+
									'"name":"Home",'+
									'"icon":"home.png",'+
									'"functionMenu":"main()",'+
									'"extraMenu": "both",'+
									'"nodeList":null'+
									'},'+		
									'{"id":"3",'+
									'"code":"registration",'+
									'"name":"Registration",'+
									'"icon":"registerOnline.png",'+
									'"functionMenu":"goToRegistration()",'+
									'"lvlMenu": "publicMenu",'+
									'"extraMenu": "publicMenu",'+
									'"nodeList":null'+
									'},'+
									// '{"id":"4",'+
									// '"code":"newActivation",'+
									// '"name":"Activation",'+
									// '"icon":"activation.png",'+
									// '"functionMenu":"goToNewActivation()",'+
									// '"lvlMenu": "publicMenu",'+
									// '"extraMenu": "publicMenu",'+
									// '"nodeList":null'+
									// '},'+
									// '{"id":"72",'+
									// '"code":"chaLangThemes",'+
									// '"name":"Themes & Language",'+
									// '"icon":"chaLangThemes.png",'+
									// '"functionMenu":"goToLanguageHtml()",'+
									// '"extraMenu": "publicMenu",'+
									// '"nodeList":null'+
									// '},'+		
									'{"id":"13",'+
									'"code":"customerService",'+
									'"name":"Setting",'+
									'"icon":"setting.png",'+
									'"functionMenu":"setting()",'+
									'"lvlMenu": "customerMenu",'+
									'"extraMenu": "customerMenu",'+
									'"nodeList":[{"id":"13.1",'+
											   '"code":"changePassword",'+
											   '"name":"Change Password",'+
											   '"icon":"chaPass.png",'+
											   '"functionMenu":"goToChangePasswordHtml()",'+
											   '"lvlMenu": "customerMenu",'+
											   '"nodeList":null'+
											   '},'+
											   '{"id":"13.11",'+
											   '"code":"chaLangThemes",'+
											   '"name":"Themes & Language",'+
											   '"icon":"chaLangThemes.png",'+
											   '"functionMenu":"goToLanguageHtml()",'+
											   '"lvlMenu": "customerMenu",'+
											   '"nodeList":null'+
											   '}'+
									  ']'+
									'},'+
									'{"id":"8",'+
									'"code":"cardManagement",'+
									'"name":"Card Management",'+
									'"icon":"creditCard.png",'+
									'"functionMenu":"cardManagement()",'+
									'"lvlMenu": "customerMenu",'+
									'"extraMenu": "customerMenu",'+
									'"nodeList":['+
												'{"id":"8.1",'+
											   '"code":"acc_balance",'+
											   '"name":"Card Summary",'+
											   '"icon":"accInformation.png",'+
											   '"functionMenu":"goToAccountListHtml()",'+
											   '"lvlMenu": "customerMenu",'+
											   '"nodeList":null'+
											   '},'+
											   '{"id":"8.7",'+
											   '"code":"ccSelectCardStatement",'+
											   '"name":"Card Summary",'+
											   '"icon":"accInformation.png",'+
											   '"functionMenu":"goToAccountListHtml()",'+
											   '"lvlMenu": "customerMenu",'+
											   '"nodeList":null'+
											   '},'+
												// '{"id":"8.1",'+
												//    '"code":"account_summary",'+
												//    '"name":"Card Summary",'+
												//    '"icon":"accInformation.png",'+
												//    '"functionMenu":"goToAccountSummaryHtml()",'+
												//    '"lvlMenu": "customerMenu",'+
												//    '"nodeList":null'+
												//    '},'+
												   '{"id":"8.2",'+
												   '"code":"ccLimitInput",'+
												   '"name":"Card Limit",'+
												   '"icon":"ccLimit.png",'+
												   '"functionMenu":"goToCcLimitInput()",'+
												   '"lvlMenu": "customerMenu",'+
												   '"nodeList":null'+
												   '},'+
												   '{"id":"8.3",'+
												   '"code":"ccBlockingInput",'+
												   '"name":"Card Blocking",'+
												   '"icon":"ccBlocking.png",'+
												   '"functionMenu":"goToCcBlockingInput()",'+
												   '"lvlMenu": "customerMenu",'+
												   '"nodeList":null'+
												   '},'+
												   '{"id":"8.4",'+
												   '"code":"ccActivationInput",'+
												   '"name":"Card Activation",'+
												   '"icon":"ccActivation.png",'+
												   '"functionMenu":"goToCcActivationInput()",'+
												   '"lvlMenu": "customerMenu",'+
												   '"nodeList":null'+
												   '},'+
												    '{"id":"8.5",'+
												   '"code":"ccPinReissueInput",'+
												   '"name":"Pin Reissue",'+
												   '"icon":"ccPinReissue.png",'+
												   '"functionMenu":"goToCcPinReissueInput()",'+
												   '"lvlMenu": "customerMenu",'+
												   '"nodeList":null'+
												   '},'+
												   '{"id":"8.6",'+
												   '"code":"ccResetPinCountInput",'+
												   '"name":"Reset Pin Count",'+
												   '"icon":"ccPinReissue.png",'+
												   '"functionMenu":"goToCcResetPintCount()",'+
												   '"lvlMenu": "customerMenu",'+
												   '"nodeList":null'+
												   '}'+
//												   '{"id":"8.5",'+
//												   '"code":"ccIntlTrxInput",'+
//												   '"name":"International Transaction",'+
//												   '"icon":"ccIntlTrx.png",'+
//												   '"functionMenu":"goToCcIntlTrx()",'+
//												   '"lvlMenu": "customerMenu",'+
//												   '"nodeList":null'+
//												   '},'+
												   // '{"id":"8.6",'+
												   // '"code":"changePin",'+
												   // '"name":"Change Password",'+
												   // '"icon":"chaPass.png",'+
												   // '"functionMenu":"goToChangePasswordHtml()",'+
												   // '"lvlMenu": "customerMenu",'+
												   // '"nodeList":null'+
												   // '}'+
											    ']'+
									'},'+ 
								    '{"id":"77",'+
									'"code":"contactUs",'+
									'"name":"Contact Us",'+
									'"icon":"newContactUs.png",'+
									'"functionMenu":"contactUs()",'+
									'"lvlMenu": "both",'+
									'"extraMenu": "both",'+
									'"nodeList":null'+
									'},'+
									'{"id":"17",'+
									'"code":"logout",'+
									'"name":"Logout",'+
									'"icon":"logout.png",'+
									'"functionMenu":"logout()",'+
									'"extraMenu": "customerMenu",'+
									'"lvlMenu": "customerMenu",'+
									'"nodeList":null'+
									'}'+
								']'+
						'}';