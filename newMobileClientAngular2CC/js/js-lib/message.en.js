/**
 * created by Fedri
 * isi nya default message aja, klo udah login message disini di merge dengan server side
 */

var langEn = '{'+
'"TITLE":"Hello",'+
'"FOO":"This is a paragraph",'+
'"changeLanguage":"Change Language",'+
'"error_amountBelowMinimum":"Amount Cannot go Below Minimum",'+
'"error_payment_checkAmount":"Amount must be numeric and can not empty",'+
'"button_fromPaymentList":"From List",'+
'"button_fromNewPayment":"New",'+
'"accountStatement_errorSelectAccount":"Please select your account first!",'+
'"purchasePayment_errorSelectAccount":"Please select your account first!",'+
'"purchasePayment_process":"Bill Payment is being process, please wait...!",'+
'"purchasePayment_title":"Payment/Purchase",'+
'"purchasePayment_fromPaymentList":"From Bill Payment List",'+
'"purchasePayment_billPaymentList":"Bill Payment List",'+
'"purchasePayment_allBillerList":"All Merchant List",'+
'"purchasePayment_accountList":"Account List",'+
'"purchasePayment_targetPaymentCatCaption":"Choose Category",'+
'"purchasePayment_targetPayment":"Merchant",'+
'"purchasePayment_targetFavoritePayment":"Favorite Merchant",'+
'"purchasePayment_descriptionPatternError":"Description can only be AlphaNumeric characters or space",'+
'"purchasePayment_accountNumber":"Account Number*",'+
'"purchasePayment_amount":"Amount",'+
'"purchasePayment_description":"Description",'+
'"transferList_emptyDescriptionTooltip":"(Empty Description)",'+
'"general_selectAccount":"--Please Select Account--",'+
'"button_submit":"Submit",'+
'"button_cancel":"Cancel",'+
'"button_close":"Close",'+
'"button_logout":"Logout",'+
'"button_confirm":"Confirm",'+
'"button_activate":"Activate",'+
'"button_back":"Back",'+
'"button_goToHome":"Go To Home",'+
'"purchasePayment_note1":"1. * Mandatory field",'+
'"purchasePayment_note2":"2. Please type your phone number, subscriber id, polis number,etc in field subscriber number",'+
'"purchasePayment_note3":"3. Please ensure your Data entry is correct, Bank is not responsible for any Data misentry",'+
'"purchasePayment_noteConfirm":"1. Please ensure your Data entry is correct, Bank is not responsible for any Data misentry",'+
'"purchasePayment_plnCustomerIdentityKey":"Customer Identity*",'+
'"purchasePayment_namePhone":"Phone No*",'+
'"purchasePayment_nameCustomerNo2":"Customer No*",'+
'"purchasePayment_nameCustomerNo3":"Customer No",'+
'"purchasePayment_nameSubscriber":"Subscriber No*",'+
'"purchasePayment_plnMeterNoKey":"Meter No*",'+
'"purchasePayment_paymentAgentNoKey":"Agent ID*",'+
'"purchasePayment_paymentPaymentNoKey":"Payment No*",'+
'"purchasePayment_nameDenom":"Denomination*",'+
'"purchasePayment_paymentTopupAmountKey":"Topup Amount",'+
'"purchasePayment_plnRegistrationNoKey":"Registration No*",'+
'"purchasePayment_nameAmount":"Amount*",'+
'"purchasePayment_nameDescription":"Description",'+
'"purchasePayment_noteType2":"Subscriber number must be numeric and maximum 9 digit length",'+
'"purchasePayment_noteType3a":"Contract number must be numeric and 12 digit length",'+
'"purchasePayment_noteType3b":"Polis number must be numeric and 14 digit length",'+
'"purchasePayment_noteType3c":"Subscriber number must be numeric and 6 - 8 digit length",'+
'"purchasePayment_noteType6a":"Subscriber ID must be numeric and 8 digit length",'+
'"purchasePayment_noteType6b":"Subscriber number must be alphanumeric and 0 until 11 digit length",'+
'"purchasePayment_noteType6c":"Phone number must be numeric and 10 - 14 digit length",'+
'"purchasePayment_nameSaveToBP":"Insert into Bill Payment List",'+
'"purchasePayment_descNote":"(You may enter up to 16 characters)",'+
'"purchasePayment_nameBillAmount":"Bill amount",'+
'"purchasePayment_nameBillPeriod":"Bill Period",'+
'"purchasePayment_nameRetrieve":"Retrieve",'+
'"purchasePayment_nameInformation":"Information",'+
'"purchasePayment_nameCC":"Credit Card No*",'+
'"purchasePayment_errorCheckAmount":"Amount must be numeric and can not empty",'+
'"autoDebet_registerAutoDebet_key":"Register Autodebet",'+
'"purchasePayment_announceEnUnavailable":"We Apologize this facility is temporary unavailable !",'+ 
'"purchasePayment_paymentSuccesskey":"Successful Bill Payment",'+
'"purchasePayment_purchaseSuccesskey":"Successful Purchase",'+
'"purchasePayment_nameRefNum":"Transaction Reference Number",'+
'"purchasePayment_nameDate":"Payment Amount",'+
'"purchasePayment_nameTime":"Transaction Time",'+
'"purchasePayment_nameCategory":"Merchant Category",'+
'"purchasePayment_nameMerchant":"Merchant",'+
'"purchasePayment_nameAccountNumber":"Account Number",'+
'"purchasePayment_nameCustomerNo":"Customer No",'+
'"purchasePayment_namePaymentAmount":"Payment Amount",'+
'"purchasePayment_nameAmountConfirm":"Amount",'+
'"purchasePayment_nameBankCharges":"Bank Charges",'+
'"purchasePayment_nameTotalAmountDebited":"Total Amount Debited",'+
'"purchasePayment_nameDesc":"Description",'+
'"purchasePayment_nameDenomConfirm":"Denomination",'+
'"purchasePayment_nameSubscriberNo":"Subscriber No",'+
'"purchasePayment_nameTotalPurchase":"Total Purchase",'+
'"purchasePayment_nameAcc":"Account Number*",'+
'"purchasePayment_defaultAccountOption":"--Please Select Account--",'+
'"purchasePayment_defaultSaveBPOption":"--Please Select Bill Payment List--",'+
'"purchasePayment_defaultDenomOption":"--Please select denomination--",'+
'"purchasePayment_defaultBillerOption":"--Please Select Biller List--",'+
'"purchasePayment_invalid":"invalid",'+
'"pln_customerName":"Customer Name",'+
'"msg_note":"Note :",'+
'"show_more_biller":"Show More Merchant...",'+
'"select_saved_merchant_label":"Select or search a Saved Merchant in the list",'+
'"select_all_merchant_label":"Select or search a Merchant in the list",'+
'"error_amountBelowMinimum_key":"Amount Cannot go Below Minimum",'+
'"login":"Login",'+
'"newActivation":"Activation",'+
'"fund_transfer":"Fund Transfer",'+
'"ftInbankInput":"Transfer Bank AMB",'+
'"ftExternalBankInput":"Transfer Other Bank",'+
'"ftUangkuInput":"Transfer Uangku",'+
'"account":"Account Information",'+
'"acc_balance":"Inquiry Balance",'+
'"acc_balance_result":"Inquiry Balance Result",'+
'"ccSelectCardStatement":"Inquiry Statement",'+
'"ccSelectCardStatement_result":"Inquiry Statement Result",'+
'"account_summary":"Cards",'+
'"acc_history":"History",'+
'"acc_statement":"Account Statement",'+
'"payPurchase":"Payment",'+
'"atmLocator":"ATM Locator",'+
'"openAccountRegistration":"Open Account",'+
'"downSimobiPlus":"Download Simobi+",'+
'"chaLangThemes":"Themes",'+
'"newContactUs":"Contact Us",'+
'"contactUs":"Contact Us",'+
'"mailUs":"Mail Us",'+
'"changePin":"Change PIN",'+
'"changePassword":"Change Password",'+
'"changePasswordExpired":"Change Password Expired",'+
'"logout":"Logout",'+
'"registration":"SignUp/Reset",'+
'"newActivation":"Activation",'+
'"creditCardInformation":"Credit Card",'+
'"linkUnlinkCreditCard":"Link / Unlink Credit Card",'+
'"balanceInquiry":"Balance Inquiry",'+
'"transactionDetail":"Transaction Detail Credit Card",'+
'"billingStatement":"Billing Statement",'+
'"customerService":"Setting",'+
'"linkUnlink":"Link / Unlink",'+
'"transferList":"Transfer List",'+
'"billPaymentTransferList":"Bill Payment Transfer List",'+
'"autodebetList":"Autodebet List",'+
'"autodebetThresholdList":"Autodebet Threshold List",'+
'"internetTransactionHistory":"History",'+
'"transactionList":"Transaction List",'+
'"internalTransfer":"Internal Transfer",'+
'"sknRtgsTransfer":"SKN/RTGS Transfer",'+
'"networkTransfer":"Network Transfer",'+
'"recurringTransfer":"Recurring Transfer",'+
'"plnInquiryTokenInfo":"PLN Inquiry Token Info",'+
'"onlineOpenAccount":"Open Account",'+
'"investmentProductInformation":"Investment",'+
'"mutualFund":"Mutual Fund",'+
'"bancassurance":"Bancassurance",'+
'"linkUnlinkNonCreditCard":"Link / Unlink Non Credit Card",'+
'"mutualFundInformation":"Mutual Fund Information",'+
'"bancassuranceInformation":"Bancassurance Information",'+
'"onlineCloseAccount":"Online Close Account",'+
'"tokenRequest":"Token Request",'+
'"activationToken":"Activation Token",'+
'"bankBranchLocation":"Branch Locator",'+
'"events":"Events",'+
'"home":"Home",'+
'"menuSmsEmailNotif":"SMS and Email Notification Service",'+
'"account_accountNumber":"Account Number",'+
'"account_title_balanceInquiry":"Balance Inquiry",'+
'"account_title_accountStatement":"Account Statement",'+
'"account_oldPassword":"Old Password",'+
'"account_newPassword":"New Password",'+
'"account_confirmNewPassword":"Confirm New Password",'+
'"account_successChangePassword":"You have successfully Change Password",'+
'"account_defaultAccountOption":"--Please Select Account--",'+
'"accountStatement_period":"Period",'+
'"accountStatement_today":"Today",'+
'"accountStatement_curMonth":"Current Month",'+
'"accountStatement_oneMonthAgo":"1 month ago",'+
'"accountStatement_twoMonthAgo":"2 month ago",'+
'"accountStatement_threeMonthAgo":"3 month ago",'+
'"accountStatement_range":"Date Range",'+
'"accountStatement_fromDate":"From Date",'+
'"accountStatement_toDate":"To Date",'+
'"search_account":"Select or search an Account in the list",'+
'"search_target_account":"Select or search a Target Account in the list",'+
'"search_target_mobileNumber":"Select or search a Mobile Number in the list",'+
'"input_target_mobileNumber":"Enter a Mobile Number",'+
'"input_target_account":"Enter a Target Account",'+
'"amount":"Amount",'+
'"search_bank_name":"Choose a Bank",'+
'"transaction_description":"Description",'+
'"add_new_target_account":"Add New",'+
'"select_currency":"-- Select Currency --",'+
'"target_account":"Target Account Number",'+
'"target_account_name":"Target Account Name",'+
'"required_target_account":"Target Account is required",'+
'"required_bank_name":"Bank Name is required",'+
'"required_account_name":"Account Name is required",'+
'"confirmation_transfer_list":"Confirmation Transfer List",'+
'"external_transfer":"External Fund Transfer",'+
'"internal_transfer":"Internal Fund Transfer",'+
'"external_transfer_list":"Add New Target Account",'+
'"internal_transfer_list":"Add New Target Account",'+
'"uangku_transfer_list":"Add New Transfer List",'+
'"card_number":"Card Number",'+
'"account_number":"Account Number",'+
'"account_type":"Account Type",'+
'"account_name":"Account Name",'+
'"account_bank":"Bank Name",'+
'"account_bank_branch":"Bank Branch",'+
'"title_warning":"Warning",'+
'"template_warning":"You do not choose the Type of transaction, Type of transaction will be automatically picked out",'+
'"fill_token_id":"Please fill in the Token id",'+
'"agreement":"You have to agree the Agreement to do transaction",'+
'"smsToken":"SMS Token* :",'+
'"simasToken":"Simas Token* :",'+
'"simasAndSmsToken":"Simas and Sms Token :",'+
'"requestSmsToken":"Request SMS Token" ,'+
'"usingSmsToken":"Using SMS Token :" ,'+
'"checkToUsingSmsToken":"Check To Using SMS Token" ,'+
'"checkToUsingSimasToken":"Check To Using Simas Token",'+
'"userTokenError":"You can not do transaction" ,'+
'"transactionLimitSmsTokenError":"Your transaction amount is not possible to limit transaction SMS token and should use token simas", '+
'"transactionLimitSimasTokenError":"Number of Transactions you should also use a token sms.\\n The transaction does not allow more than Rp." ,'+
'"selectToken":"Select one or both types of token for your transaction." ,'+
'"needTransaction":"Transaksi anda membutuhkan :" ,'+
'"selectOneOrTwoToken":"Pilih salah satu atau kedua jenis token untuk transaksi anda." ,'+
'"selectYourToken":"Pilih  jenis token untuk transaksi anda.",'+
'"alertResendSMSMax":"Sorry, maximum for Resend sms is",'+
'"alertResendSMSMax2":"times. Please wait your OTP SMS. Or proceed again the transaction.",'+
'"failureReqSMS":"Failure request SMS Token",'+
'"use_sms":"Using SMS Token",'+
'"use_simas":"Using Simas Token",'+
'"enter_sms":"Enter SMS Token*",'+
'"enter_simas":"Enter Simas Token*",'+
'"check_using_sms":"Check to using SMS Token",'+
'"check_using_simas":"Check to using Simas Token",'+
'"req_sms_token":"Request SMS Token",'+
'"please_insert_token":"Please insert your Token",'+
'"send_sms":"Send SMS",'+
'"please_wait":"Please Wait...",'+
'"city_list":"City list",'+
'"province_list":"Province list",'+
'"location_atm":"Location ATM",'+
'"location_branch":"Location Branch AMB",'+
'"activation_confirm":"Activation Confirm",'+
'"activation":"Activation",'+
'"activation_result":"Activation Result",'+
'"mobile_number":"Mobile Number",'+ 
'"email":"Email",'+
'"agreed":"I agreed and have read \'Term and Condition\'",'+
'"activate_simobiplus":"Activate SimobiPlus",'+
'"activate_atm":"Activate Via ATM",'+
'"enter_activation_code":"Enter Your Activation Code",'+
'"enter_username":"Enter Your Username",'+
'"enter_pin":"Enter Your PIN Code",'+
'"enter_password":"Enter Your Password",'+
'"registration":"SignUp/Reset",'+
'"ktp_id":"Personal ID",'+
'"birthdate":"Birthdate (ddMMyy)",'+
'"input_captcha":"Input Captcha",'+
'"refresh_captcha":"Refresh Captcha",'+
'"online_account_registration": "Online Account Registration",'+
'"language":"Themes",'+
'"indonesia":"Indonesian",'+
'"bahasa":"Bahasa",'+
'"english":"English",'+
'"change_icon": "Change Icon",'+
'"change_theme": "Change Theme",'+
'"change_password":"Change Password",'+
'"enter_old_password":"Enter Your Old Password",'+
'"enter_new_password":"Enter Your New Password",'+
'"enter_confirm_new_password":"Enter Your Confirm New Password",'+
'"enter_old_pin":"Enter Your Old PIN",'+
'"enter_new_pin":"Enter Your New PIN",'+
'"enter_confirm_new_pin":"Enter Your Confirm New PIN",'+
'"change_password_result":"Change Password Result",'+
'"change_password_success":"You have successfully Change Password",'+
'"contact_us":"Contact Us",'+
'"check_update": "Check for updates",'+
'"download_update": "download update",'+
'"version":"Version",'+
'"amb_care":"Asia Merchant Bank Care",'+
'"phone_amb_care":"-",'+
'"bank_simas_care":"Asia Merchant Bank Care",'+
'"phone_simas_care":"(021)501 88888, 1500 153",'+
'"phone_simas_care1":"(021)501 88888",'+
'"phone_simas_care2":"(021)1500 153",'+
'"company_website":"Company Website",'+
'"company_website_address":"www.asiamerchantbank.com",'+
'"mail_us_at": "Mail us at",'+
'"mail_us_address": "customer@asiamerchantbank.com",'+
'"mail_us":"Mail Us",'+
'"message_currentVersion":"Your Current Version :",'+
'"message_latestVersion":"Please update your app to the latest version : ",'+
'"message_dayCountOne":"You have ",'+
'"message_dayCountTwo":"day(s) for mandatory update waiting period ",'+
'"message_change_list":"Change List :",'+
'"update_info":"Update Info",'+
'"currencyRate":"Rate",'+
'"currencyConverter":"Calculator",'+
'"account_creditCard":"Credit Card",'+
'"errorCreditCardNotLinked":"The user id is not linked to Bank AMB Credit Card",'+
'"errorTransactionNotAllowed":"YOU CAN NOT DO THIS TRANSACTION",'+
'"promoNews":"Promo/News",'+
'"enter_your_username":"Enter Your Username",'+
'"enter_your_mobile_number":"Enter Your Mobile Number",'+
'"enter_your_password":"Enter Your Password",'+
'"notifications":"Inbox",'+
'"notif":"Inbox",'+
'"note_discription":"(You may enter up to 16 characters)",'+
'"number_1":"1.",'+
'"number_2":"2.",'+
//'"number_3":"3.",'+
'"number_3":"",'+
'"number_4":"",'+
'"number_5":"",'+
'"note_ft_1":"Cross Currency Transfer is according to internet banking exchange rate table.",'+
'"note_ft_2":"Limit of Cross currency transfer is USD 3,000",'+
//'"note_ft_3":"Future dated Transfer will be processed at your transfer date",'+
'"note_ft_3":"",'+
'"note_ft_4":"",'+
'"note_ft_5":"",'+
'"font_size":"Font Size",'+
'"default_font_size":"Default Font Size",'+
'"ftImmediate_transfer":"Immediate Transfer",'+
'"ftFutureDated_transfer":"Future Dated Transfer",'+
'"ftRecuring":"Recurring",'+
'"ftTransfer_date":"Transfer Date",'+
'"ftRecuringMonthly":"Monthly, every",'+
'"ftRecuringPeriod":"Periodically, every",'+
'"ftRecurringText":"Of the month",'+
'"ftRecurringDay":"Day",'+
'"ftRecuringEndCond":"End Condition :",'+
'"ftRecuringExpired":"Expired Date",'+
'"ftRecuringExpired_date":"Date",'+
'"ftMaxRecurrenceChecked":"Running time",'+
'"ftMaxRecurrenceTimes":"Times",'+
'"ftDateEmpty":"Future Date field cannot be empty",'+
'"dateMustMore":"Future Date Transfer must be greater than to day",'+
'"dateNotValid":"Invalid day of month in Monthly Recurring field",'+
'"valueNotValid":"Invalid value in Periodic Recurring field",'+
'"recurringNotValid":"Invalid Future Date",'+
'"expiredRecurDate":"Invalid value in Recurring Expired Date field",'+
'"expiredRecurDateMore":"Expired Date must be greater than to day",'+
'"valueTotalFieldRec":"Invalid value in Recurring Running time field",'+
'"endConditionRec":"Recurring End Condition must be chosen at least one",'+
'"instructions":"Instructions",'+
'"termsAndConditions":"Terms and Conditions",'+
'"clear_data":"Clear Cache",'+
'"clear_data_warning":"You have to Logout to do this action",'+
'"clear_data_success":"Clear data succeed",'+
'"warning":"Warning",'+
'"fundTransfer_targetAccountList":"Target Account List",'+
'"fundTransfer_targetAccountUangkuList":"Uangku List",'+
'"fundTransfer_accountList":"Account List",'+
'"fundTransfer_bankList":"Bank List",'+
'"ccBlockingInput":"Card Block/Unblock",'+
'"ccBlockingDetail":"Card Block/Unblock Detail",'+
'"ccBlockingConfirm":"Card Block/Unblock Confirm",'+
'"ccBlockingResult":"Card Block/Unblock Result",'+
'"ccActivationInput":"Card Activation",'+
'"ccActivation":"Card Activation",'+
'"ccActivationAlert":"The Card is Already Active",'+
'"ccActivationDetail":"Card Activation Detail",'+
'"ccActivationSubmitMessage":"Click Submit to Request Activate Card",'+
'"ccActivationConfirm":"Card Activation Confirm",'+
'"ccActivationConfirmMessage1":"Cards with numbers ",'+
'"ccActivationConfirmMessage2":" Will be Activated",'+
'"ccActivationResult":"Card Activation Result",'+
'"ccLimitInput":"Card Limit",'+
'"ccLimitConfirm":"Card Limit Confirm",'+
'"ccLimitLimit":"Card change Limit",'+
'"ccLimitDetail":"Card Limit Detail",'+
'"ccLimitResult":"Card Limit Result",'+
'"description":"Description",'+
'"existingLimit":"Existing Limit",'+
'"newLimit":"New Limit",'+
'"currency":"Currency",'+
'"change":"Change",'+
'"status":"Status",'+
'"ccCallCs":"Call CS Credit Card",'+
'"ccIntlTrxInput":"International Transaction",'+
'"note_cc_block_1":"Your Request will be processed within 24 hours, Please call Customer Services below if you want immediate block",'+
'"note_cc_directCallCS":"Direct Call CS Credit Card",'+
'"note_cc_24HourCS":"Asia Merchant Bank 24 Hour",'+
'"WelcomeAmb":"Welcome to the Asia Merchant Bank Personal Internet Banking!",'+
'"cardManagement":"Card Management",'+
'"ccPinReissueInput":"Pin Reissue",'+
'"ccPinReissueConfirm":"Reissue PIN Confirm",'+
'"ccPinReissueConfirmMessage":"Click Confirm to Request Pin Reissue",'+
'"ccPinReissueResult":"Pin Reissue Result",'+
'"ccResetPinCountInput":"Reset Pin Count",'+
'"ccResetPinCountConfirm":"Reset Pin Count Confirm",'+
'"ccResetPinCountConfirmMessage":"Click Confirm to Request Reset Pin Count",'+
'"ccResetPinCountResult":"Reset Pin Count Result",'+
'"ccLoginCorporateCaption1":"Login As Corporate User",'+
'"ccLoginCorporateCaption2":"With Login Name"'+

'}';