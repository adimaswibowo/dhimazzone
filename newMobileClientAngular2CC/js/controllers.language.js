angular.module('language.controllers', ['pascalprecht.translate','ngSanitize','ngTouch'])


.controller('LanguageCtrl', function($translate, $scope, $log) {
   	 	loadFontSize();
})

.controller('TranslateController', function($translate, $scope, $log, $rootScope) {
	
	var lang = window.localStorage.getItem("lang");
    if (lang == null || lang == "" || lang == "null") {
    	$scope.langActive = "id";
    }else{
    	$scope.langActive = lang;
    }


	$scope.changeLanguage = function (langKey) {
	    $translate.use(langKey);
	    //alert("langKey "+langKey);
		window.localStorage.setItem('lang',langKey);
		//$route.reload();

		window.location.href = "#/app/main";
		//window.location.reload();
	};	

	$scope.data = {
	    availableOptions: [
	      {id: '1', name: 'Default Icon'},
	      {id: '2', name: 'Circle Icon'},
	      {id: '3', name: 'Dark Icon'}
	    ]
    };  
    //$scope.selectedItem;
    if (window.localStorage.getItem('iconMode') == null){
    	//alert("1");
    	$scope.selectedItem = $scope.data.availableOptions[0];
    } else if (window.localStorage.getItem('iconMode') == 'itIcon'){
    	//alert("2");
    	$scope.selectedItem = $scope.data.availableOptions[1];
    } else if (window.localStorage.getItem('iconMode') == 'markomIcon'){
    	//alert("3");
    	$scope.selectedItem = $scope.data.availableOptions[2];
    } else if (window.localStorage.getItem('iconMode') == 'darkIcon'){
    	//alert("2");
    	$scope.selectedItem = $scope.data.availableOptions[3];
    }
    
    $scope.changeIcon = function(){
    	var selectedItem = $scope.selectedItem;
    	//alert("test: " + selectedItem);

    	if (selectedItem == "1"){
    		window.localStorage.setItem('iconMode','itIcon');
    		window.location.href = "#/app/main";
    		//window.location.reload();
    	} else if (selectedItem == "2"){
    		window.localStorage.setItem('iconMode','markomIcon');
    		window.location.href = "#/app/main";
    		//window.location.reload();
    	} else if (selectedItem == "3"){
    		window.localStorage.setItem('iconMode','darkIcon');
    		window.location.href = "#/app/main";
    		//window.location.reload();
    	}
    };



	//new style
	$scope.dataTheme = {
	    themeOptions: [
	      {id: '1', name: 'Grid'},
	      {id: '5', name: 'List'},
	      {id: '6', name: 'Grid Color'}
	      /*{id: '2', name: 'Dark'}*/
	      /*{id: '2', name: 'Style-1'}*/
	    ]
    }; 

    //$scope.selectedItem;
    if (window.localStorage.getItem('themeMode') == null){
    	$scope.selectedTheme = $scope.dataTheme.themeOptions[2].id;
    } else if (window.localStorage.getItem('themeMode') == 'standar'){
    	$scope.selectedTheme = $scope.dataTheme.themeOptions[0].id;
    } else if (window.localStorage.getItem('themeMode') == 'list'){
    	$scope.selectedTheme = $scope.dataTheme.themeOptions[1].id;
    } else if (window.localStorage.getItem('themeMode') == 'colorGrid'){
    	$scope.selectedTheme = $scope.dataTheme.themeOptions[2].id;
    }
    /*} else if (window.localStorage.getItem('themeMode') == 'style-1'){
    	//alert("3");
    	$scope.selectedTheme = $scope.dataTheme.themeOptions[2];
    }*/


    
    $scope.changeTheme = function(){
    	var selectedTheme = $scope.selectedTheme;
    	//alert("test: " + selectedItem);

    	if (selectedTheme == "1"){
    		window.localStorage.setItem('themeMode','standar');
    		window.localStorage.setItem('themeIonicMode','standar');


    		$scope.selectedItem = $scope.data.availableOptions[1];
    		window.localStorage.setItem('iconMode','itIcon');

    		document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';

    		window.location.href = "#/app/main";
    		window.location.reload();
    	} else if (selectedTheme == "2"){
    		window.localStorage.setItem('themeMode','standar');
    		window.localStorage.setItem('themeIonicMode','dark');

    		$scope.selectedItem = $scope.data.availableOptions[3];
    		window.localStorage.setItem('iconMode','darkIcon');

    		document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';

    		window.location.href = "#/app/main";
    		window.location.reload();
    	} else if (selectedTheme == "5"){
    		window.localStorage.setItem('themeMode','list');
    		window.localStorage.setItem('themeIonicMode','standar');

    		$scope.selectedItem = $scope.data.availableOptions[1];
    		window.localStorage.setItem('iconMode','itIcon');

    		document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic.css';

    		window.location.href = "#/app/main";
    		window.location.reload();
    	} else if (selectedTheme == "6"){
    		window.localStorage.setItem('themeMode','colorGrid');
    		window.localStorage.setItem('themeIonicMode','colorGrid');

    		$scope.selectedItem = $scope.data.availableOptions[1];
    		window.localStorage.setItem('iconMode','itIcon');

    		document.getElementById('themeIonic_css').href = 'lib/ionic/css/ionic-color.css';
    		
    		window.location.href = "#/app/main";
    		window.location.reload();
    	}
    	/*} else if (selectedTheme == "2"){
    		window.localStorage.setItem('themeMode','style1');
    		window.location.href = "#/app/main";
    		window.location.reload();
    	}*/
    };

    var fontSizeObject = window.localStorage.getItem('fontSize');
    var fontSizeName = "";
    var fontSizeId = "";
    if (fontSizeObject == null || fontSizeObject == "undefined" || fontSizeObject == "" || fontSizeObject == "null"){
		//fontSize = 17;
	  	fontSizeId = "2";
		fontSizeName = "Medium";
    }else{
    	fontSizeObject = JSON.parse(fontSizeObject);
  		fontSizeId = fontSizeObject.id;
  		fontSizeName = fontSizeObject.label;
    }

    //$scope.fontSize = fontSize;

    $scope.fontSizeName = fontSizeName;
    $scope.fontSizeId = fontSizeId;

  	$scope.changeFontSize = function (newFontSize) {

        try{
      		var fontSize = "";
      		var fontSizeHeader = "";
      		var fontSizeFooter = "";
      		var fontSizeName = "";

      		if (newFontSize == "1"){
    	  		fontSize = "12";
    	  		fontSizeHeader = "13";
    	  		fontSizeFooter = "9";
    	  		fontSizeName = "Small";
      		}else if (newFontSize == "2"){
    	  		fontSize = "17";
    	  		fontSizeHeader = "18";
    	  		fontSizeFooter = "10";
    	  		fontSizeName = "Medium";
      		}else if (newFontSize == "3"){
    	  		fontSize = "18";
    	  		fontSizeHeader = "19";
    	  		fontSizeFooter = "11";
    	  		fontSizeName = "Large";
      		}else{
    	  		fontSizeHeader = "18";
    	  		fontSize = "17";
    	  		fontSizeFooter = "11";
    	  		fontSizeName = "Medium";
      		}


        	angular.element(document.querySelectorAll('input')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('checkbox')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('radio')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('select')).css('font-size', fontSize + 'px');
        	//angular.element(document.querySelectorAll('p')).css('font-size', fontSizeFooter + 'px');
        	//angular.element(document.querySelectorAll('label')).css('font-size', fontSizeFooter + 'px');
        	angular.element(document.querySelectorAll('.font-simobi-lang-active')).css('font-size', fontSizeHeader + 'px');
        	angular.element(document.querySelectorAll('.item-select')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('.input-label')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('.tabs-icon-top')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('.tab-item')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('.item')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('.item-no-border')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('.button')).css('font-size', fontSize + 'px');
        	angular.element(document.querySelectorAll('.font-markom-footer-small')).css('font-size', fontSizeFooter + 'px');

        	//angular.element(document.querySelectorAll('*')).css('font-size', newFontSize + 'px');

    		var fontSizeObject = [];
        	fontSizeObject.push({
        		id: newFontSize,
    			label: fontSizeName,
    			fontSize: fontSize,
    			fontSizeHeader: fontSizeHeader,
    			fontSizeFooter: fontSizeFooter
    		});

    		//alert("fontSizeObject[0] :"+JSON.stringify(fontSizeObject[0]));
        	window.localStorage.setItem('fontSize',JSON.stringify(fontSizeObject[0]));

            if (newFontSize == "2"){
                window.localStorage.setItem('fontSize',"");
            }

        	//$scope.fontSize = newFontSize;
        	$scope.fontSizeName = fontSizeName;
        	$scope.fontSizeId = newFontSize;

        } catch(e) {
            console.log("error "+e);
        }
  	}

  	$scope.setDefaultFontSize = function () {
    	window.localStorage.setItem('fontSize',null);
		window.location.href = "#/app/main";
		//window.location.reload();
  	}
})

.config(['$translateProvider', function ($translateProvider) {
	if(window.localStorage.getItem('InternationalizationSimobiPlus') == null){
	    $translateProvider.translations('en', JSON.parse(langEn));
	   
	    $translateProvider.translations('id', JSON.parse(langId));
	} else {
		var i18nSimobiPlus = JSON.parse(window.localStorage.getItem('InternationalizationSimobiPlus'));
		//alert("en: " + i18nSimobiPlus.en);
		//alert("id: " + i18nSimobiPlus.id);

		$translateProvider.translations('en', i18nSimobiPlus.en);
	    $translateProvider.translations('id', i18nSimobiPlus.id);
	}
    
    var lang = window.localStorage.getItem("lang");
    if (lang == null || lang == "" || lang == "null") {
    	lang = "id";
    }
    $translateProvider.preferredLanguage(lang);
      // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('sanitize');
  }])
  
;
