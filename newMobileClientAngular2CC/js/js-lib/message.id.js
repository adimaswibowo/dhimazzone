/**
 * created by Fedri
 * isi nya default message aja, klo udah login message disini di merge dengan server side
 */

var langId = '{'+
'"TITLE":"Halo",'+
'"FOO":"Ini Adalah Paragrap",'+
'"changeLanguage":"Ubah Bahasa",'+
'"error_amountBelowMinimum":"Jumlah Nominal Tidak Bisa Dibawah Nilai Minimum",'+
'"error_payment_checkAmount":"Jumlah harus berupa angka dan tidak boleh kosong",'+
'"button_fromPaymentList":"Dari Daftar",'+
'"button_fromNewPayment":"Baru",'+
'"accountStatement_errorSelectAccount":"Silahkan pilih rekening terlebih dulu!",'+
'"purchasePayment_errorSelectAccount":"Silahkan pilih rekening terlebih dulu!",'+
'"purchasePayment_process":"Pembayaran Tagihan Sedang Diproses",'+
'"purchasePayment_title":"Pembayaran/Pembelian",'+
'"purchasePayment_fromPaymentList":"Dari Daftar Pembayaran",'+
'"purchasePayment_billPaymentList":"Daftar Pembayaran",'+
'"purchasePayment_allBillerList":"Daftar Semua Biller",'+
'"purchasePayment_accountList":"Daftar Rekening",'+
'"purchasePayment_targetPaymentCatCaption":"Pilih Kategori",'+
'"purchasePayment_targetPayment":"Nama Biller",'+
'"purchasePayment_targetFavoritePayment":"Biller Favorit",'+
'"purchasePayment_descriptionPatternError":"Deskripsi hanya bisa terdiri dari huruf, angka atau spasi",'+
'"purchasePayment_accountNumber":"Nomor Rekening*",'+
'"purchasePayment_amount":"Jumlah",'+
'"purchasePayment_description":"Keterangan",'+
'"transferList_emptyDescriptionTooltip":"(Deskripsi Kosong)",'+
'"general_selectAccount":"--Silahkan pilih Rekening--",'+
'"button_submit":"Kirim",'+
'"button_cancel":"Batal",'+
'"button_close":"Tutup",'+
'"button_logout":"Logout",'+
'"button_confirm":"Lanjutkan",'+
'"button_activate":"Activate",'+
'"button_back":"Kembali",'+
'"button_goToHome":"Kembali Ke Beranda",'+
'"purchasePayment_note1":"1. * Harus diisi",'+
'"purchasePayment_note2":"2. No Pelanggan dapat berupa no telpon,no HP ,id pelanggan, no polis, dll",'+
'"purchasePayment_note3":"3. Pastikan data yang anda masukkan benar, bank tidak bertanggung jawab apabila anda memasukkan data yang salah",'+
'"purchasePayment_noteConfirm":"1. Pastikan data yang anda masukkan benar, bank tidak bertanggung jawab apabila anda memasukkan data yang salah",'+
'"purchasePayment_plnCustomerIdentityKey":"IDPEL*",'+
'"purchasePayment_namePhone":"Nomor Telepon*",'+
'"purchasePayment_nameCustomerNo2":"Nomor Nasabah*",'+
'"purchasePayment_nameCustomerNo3":"Nomor Nasabah",'+
'"purchasePayment_nameSubscriber":"No Pelanggan*",'+
'"purchasePayment_plnMeterNoKey":"No Meter*",'+
'"purchasePayment_paymentAgentNoKey":"ID Agen*",'+
'"purchasePayment_paymentPaymentNoKey":"Nomor Bayar*",'+
'"purchasePayment_nameDenom":"Denominasi*",'+
'"purchasePayment_paymentTopupAmountKey":"Jumlah Topup",'+
'"purchasePayment_plnRegistrationNoKey":"No Registrasi*",'+
'"purchasePayment_nameAmount":"Jumlah*",'+
'"purchasePayment_nameDescription":"Keterangan",'+
'"purchasePayment_noteType2":"Nomor pelanggan harus angka dan panjang maksimum 9 digit",'+
'"purchasePayment_noteType3a":"Nomor kontrak harus angka dan panjang 12 digit",'+
'"purchasePayment_noteType3b":"Nomor Polis harus angka dan panjang 14 digit",'+
'"purchasePayment_noteType3c":"Nomor Subscriber harus angka dan panjang 6 - 8 digit",'+
'"purchasePayment_noteType6a":"ID Pelanggan harus angka dan panjang 8 digit",'+
'"purchasePayment_noteType6b":"Nomor Pelanggan boleh kombinasi angka-huruf dan panjang 0 sampai 11 digit",'+
'"purchasePayment_noteType6c":"Nomor telepon harus angka dan panjang 10 - 14 digit",'+
'"purchasePayment_nameSaveToBP":"Masukkan ke dalam daftar pembayaran",'+
'"purchasePayment_descNote":"(Anda diperbolehkan memasukkan 16 karakter)",'+
'"purchasePayment_nameBillAmount":"Jumlah Tagihan",'+
'"purchasePayment_nameBillPeriod":"Periode Tagihan",'+
'"purchasePayment_nameRetrieve":"Lihat Tagihan",'+
'"purchasePayment_nameInformation":"Lihat Informasi",'+
'"purchasePayment_nameCC":"Nomor Kartu Kredit*",'+
'"purchasePayment_errorCheckAmount":"Jumlah harus berupa angka dan tidak boleh kosong",'+
'"autoDebet_registerAutoDebet_key":"Daftar Autodebet",'+
'"purchasePayment_announceEnUnavailable":"Maaf fasilitas ini tidak dapat berfungsi untuk sementara !",'+ 
'"purchasePayment_paymentSuccesskey":"Pembayaran Tagihan Berhasil",'+
'"purchasePayment_purchaseSuccesskey":"Pembelian Berhasil",'+
'"purchasePayment_nameRefNum":"Nomor Referensi Transaksi",'+
'"purchasePayment_nameDate":"Tanggal Transaksi",'+
'"purchasePayment_nameTime":"Jam Transaksi",'+
'"purchasePayment_nameCategory":"Kategori Biller",'+
'"purchasePayment_nameMerchant":"Nama Biller",'+
'"purchasePayment_nameAccountNumber":"Nomor Rekening",'+
'"purchasePayment_nameCustomerNo":"IDPEL",'+
'"purchasePayment_namePaymentAmount":"Jumlah pembayaran",'+
'"purchasePayment_nameAmountConfirm":"Jumlah",'+
'"purchasePayment_nameBankCharges":"Admin Bank",'+
'"purchasePayment_nameTotalAmountDebited":"Total Jumlah Tagihan",'+
'"purchasePayment_nameDesc":"Keterangan",'+
'"purchasePayment_nameDenomConfirm":"Denominasi",'+
'"purchasePayment_nameSubscriberNo":"No Pelanggan",'+
'"purchasePayment_nameTotalPurchase":"Jumlah Pembelian",'+
'"purchasePayment_nameAcc":"Nomor Rekening*",'+
'"purchasePayment_defaultAccountOption":"--Silahkan Pilih Rekening--",'+
'"purchasePayment_defaultSaveBPOption":"--Silahkan Pilih Daftar Pembayaran--",'+
'"purchasePayment_defaultDenomOption":"--Silahkan Pilih Denominasi--",'+
'"purchasePayment_defaultBillerOption":"--Silahkan Pilih Daftar Biller--",'+
'"purchasePayment_invalid":"tidak valid",'+
'"pln_customerName":"NAMA PELANGGAN",'+
'"msg_note":"Note/Catatan :",'+
'"show_more_biller":"Tampilkan Lebih Banyak Biller...",'+
'"select_saved_merchant_label":"Pilih atau Cari Dari Daftar Pembayaran",'+
'"select_all_merchant_label":"Pilih atau Cari Dari Daftar Semua Biller",'+
'"error_amountBelowMinimum_key":"Jumlah Nominal Tidak Bisa Dibawah Nilai Minimum",'+
'"login":"Login",'+
'"newActivation":"Aktifasi",'+
'"fund_transfer":"Transfer Dana",'+
'"ftInbankInput":"Transfer Bank AMB",'+
'"ftExternalBankInput":"Transfer Bank Lain",'+
'"ftUangkuInput":"Transfer Uangku",'+
'"account":"Informasi Rekening",'+
'"acc_balance":"Informasi Saldo",'+
'"acc_balance_result":"Hasil Informasi Saldo",'+
'"ccSelectCardStatement":"Informasi Statement",'+
'"ccSelectCardStatement_result":"Hasil Informasi Statement",'+
'"account_summary":"Semua Kartu",'+
'"acc_history":"History",'+
'"acc_statement":"Mutasi Rekening",'+
'"payPurchase":"Pembayaran",'+
'"atmLocator":"Lokasi ATM",'+
'"openAccountRegistration":"Buka Rekening",'+
'"downSimobiPlus":"Download Simobi+",'+
'"chaLangThemes":"Tema",'+
'"newContactUs":"Hubungi Kami",'+
'"contactUs":"Hubungi Kami",'+
'"mailUs":"Email Kami",'+
'"changePin":"Ubah PIN",'+
'"changePassword":"Ubah Password",'+
'"changePasswordExpired":"Ubah Password Kadaluarsa",'+
'"logout":"Logout",'+
'"registration":"Daftar/Reset",'+
'"newActivation":"Aktifasi",'+
'"creditCardInformation":"Kartu Kredit",'+
'"linkUnlinkCreditCard":"Menghubungkan / Memutuskan Kartu Kredit",'+
'"balanceInquiry":"Informasi Kartu Kredit",'+
'"transactionDetail":"Rincian Transaksi Kartu Kredit",'+
'"billingStatement":"Rincian Tagihan",'+
'"customerService":"Pengaturan",'+
'"linkUnlink":"Menghubungkan / Memutuskan",'+
'"transferList":"Daftar Transfer",'+
'"billPaymentTransferList":"Daftar Pembayaran Tagihan",'+
'"autodebetList":"Daftar Autodebit",'+
'"autodebetThresholdList":"Daftar Autodebit Threshold",'+
'"internetTransactionHistory":"Riwayat Transaksi",'+
'"transactionList":"Daftar Transaksi",'+
'"internalTransfer":"Transfer Internal",'+
'"sknRtgsTransfer":"Transfer SKN/RTGS",'+
'"networkTransfer":"Transfer Jaringan",'+
'"recurringTransfer":"Transfer Berkala",'+
'"plnInquiryTokenInfo":"Informasi Cetak Token PLN",'+
'"onlineOpenAccount":"Buka Rekening",'+
'"investmentProductInformation":"Investasi",'+
'"mutualFund":"Reksadana",'+
'"bancassurance":"Bancassurance",'+
'"linkUnlinkNonCreditCard":"Menghubungkan / Memutuskan Non Kartu Kredit",'+
'"mutualFundInformation":"Informasi Reksadana",'+
'"bancassuranceInformation":"Informasi Bancassurance",'+
'"onlineCloseAccount":"Penutupan Rekening Online",'+
'"tokenRequest":"Permintaan Token",'+
'"activationToken":"Aktifasi Token",'+
'"bankBranchLocation":"Lokasi Cabang",'+
'"events":"Events",'+
'"home":"Home",'+
'"menuSmsEmailNotif":"Layanan Notifikasi SMS dan Email",'+
'"account_accountNumber":"Nomor Rekening",'+
'"account_title_balanceInquiry":"Informasi Saldo",'+
'"account_title_accountStatement":"Mutasi Rekening (Statement Rekening)",'+
'"account_oldPassword":"Password Lama",'+
'"account_newPassword":"Password Baru",'+
'"account_confirmNewPassword":"Ulangi Password Baru",'+
'"account_successChangePassword":"Ubah Password Sukses",'+
'"account_defaultAccountOption":"--Silahkan Pilih Rekening--",'+
'"accountStatement_period":"Jangka Waktu",'+
'"accountStatement_today":"Hari ini",'+
'"accountStatement_curMonth":"Bulan ini",'+
'"accountStatement_oneMonthAgo":"1 bulan yang lalu",'+
'"accountStatement_twoMonthAgo":"2 bulan yang lalu",'+
'"accountStatement_threeMonthAgo":"3 bulan yang lalu",'+
'"accountStatement_range":"Rentang Tanggal",'+
'"accountStatement_fromDate":"Dari Tanggal",'+
'"accountStatement_toDate":"Sampai Tanggal",'+
'"search_account":"Pilih atau cari Nomor Rekening",'+
'"search_target_account":"Pilih atau cari Nomor Rekening Tujuan",'+
'"search_target_mobileNumber":"Pilih atau cari Nomor Handphone Tujuan",'+
'"input_target_mobileNumber":"Input Nomor Handphone Tujuan",'+
'"input_target_account":"Input Nomor Rekening Tujuan",'+
'"amount":"Jumlah",'+
'"search_bank_name":"Pilih nama Bank",'+
'"transaction_description":"Deskripsi",'+
'"add_new_target_account":"Tambah Baru",'+
'"select_currency":"-- Pilih Mata Uang --",'+
'"target_account":"Nomor Rekening",'+
'"target_account_name":"Nama Pemilik Rekening Tujuan",'+
'"required_target_account":"Rekening Tujuan harus di isi",'+
'"required_bank_name":"Nama Bank harus di isi",'+
'"required_account_name":"Nama Pemilik Rekening harus di isi",'+
'"confirmation_transfer_list":"Konfirmasi list Transfer",'+
'"external_transfer":"Transfer Dana ke Bank Lain",'+
'"internal_transfer":"Transfer Dana ke Bank AMB",'+
'"external_transfer_list":"Tambah Target Account",'+
'"internal_transfer_list":"Tambah Target Account",'+
'"uangku_transfer_list":"Tambah Daftar Transfer",'+
'"card_number":"Nomor Kartu",'+
'"account_number":"Nomor Rekening",'+
'"account_type":"Jenis Rekening",'+
'"account_name":"Nama Rekening",'+
'"account_bank":"Nama Bank",'+
'"account_bank_branch":"Kantor Cabang Bank",'+
'"title_warning":"Peringatan",'+
'"template_warning":"Anda belum memilih jenis transaksi, Jenis transaksi akan di pilihkan secara otomatis",'+
'"fill_token_id":"Silahkan isi kolom token anda",'+
'"agreement":"Anda harus menyetujui persetujuan transaksi terlebih dahulu",'+
'"smsToken":"SMS Token* :",'+
'"simasToken":"Simas Token* :",'+
'"simasAndSmsToken":"Simas dan Sms Token :",'+
'"requestSmsToken":"Meminta SMS Token" ,'+
'"usingSmsToken":"Menggunakan SMS Token :" ,'+
'"checkToUsingSmsToken":"Centang untuk Menggunakan SMS Token" ,'+
'"checkToUsingSimasToken":"Centang untuk Menggunakan Simas Token",'+
'"userTokenError":"Anda tidak dapat melakukan transaksi" ,'+
'"transactionLimitSmsTokenError":"Jumlah Transaksi anda tidak memungkinkan untuk limit transaksi sms token dan harus menggunakan simas token", '+
'"transactionLimitSimasTokenError":"Number of Transactions you should also use a token sms.\\n The transaction does not allow more than Rp." ,'+
'"selectToken":"Select one or both types of token for your transaction." ,'+
'"needTransaction":"Transaksi anda membutuhkan :" ,'+
'"selectOneOrTwoToken":"Pilih salah satu atau kedua jenis token untuk transaksi anda." ,'+
'"selectYourToken":"Pilih  jenis token untuk transaksi anda.",'+
'"alertResendSMSMax":"Maaf, maksimal Resend sms adalah",'+
'"alertResendSMSMax2":"kali. Mohon tunggu SMS OTP Anda. Atau dapat melakukan proses transaksi kembali.",'+
'"failureReqSMS":"Gagal Meminta SMS Token",'+
'"use_sms":"Menggunakan SMS Token",'+
'"use_simas":"Menggunakan Simas Token",'+
'"enter_sms":"Masukkan SMS Token*",'+
'"enter_simas":"Masukkan Simas Token*",'+
'"check_using_sms":"Centang untuk menggunakan SMS Token",'+
'"check_using_simas":"Centang untuk menggunakan Simas Token",'+
'"req_sms_token":"Meminta kembali SMS Token",'+
'"please_insert_token":"Silahkan Masukan Token yg telah anda terima",'+
'"send_sms":"Kirim SMS",'+
'"please_wait":"Harap Tunggu...",'+
'"city_list":"Daftar Kota",'+
'"province_list":"Daftar Provinsi",'+
'"location_atm":"Lokasi ATM",'+
'"location_branch":"Lokasi Cabang AMB",'+
'"activation_confirm":"Konfirmasi Aktifasi",'+
'"activation":"Aktifasi",'+
'"activation_result":"Hasil Aktifasi",'+
'"mobile_number":"Nomor Handphone",'+ 
'"email":"Email",'+
'"agreed":"Saya menyetujui Syarat dan telah membaca \'Syarat dan Kondisi\'",'+
'"activate_simobiplus":"Aktifasi SimobiPlus",'+
'"activate_atm":"Aktifasi Melalui ATM",'+
'"enter_activation_code":"Masukkan Kode Aktifasi",'+
'"enter_username":"Masukkan Username",'+
'"enter_pin":"Masukkan Kode PIN",'+
'"enter_password":"Masukkan Password",'+
'"registration":"Daftar/Reset",'+
'"ktp_id":"No KTP",'+
'"birthdate":"Tanggal Lahir (ddMMyy)",'+
'"input_captcha":"Masukkan Captcha",'+
'"refresh_captcha":"Refresh Captcha",'+
'"online_account_registration": "Pembukaan Rekening Online",'+
'"language":"Tema",'+
'"indonesia":"Indonesia",'+
'"bahasa":"Bahasa",'+
'"english":"English",'+
'"change_icon": "Ubah Icon",'+
'"change_theme": "Ubah Tema",'+
'"change_password":"Ubah Password",'+
'"enter_old_password":"Masukkan Password Lama",'+
'"enter_new_password":"Masukkan Password Baru",'+
'"enter_confirm_new_password":"Masukkan Kembali Password Baru",'+
'"enter_old_pin":"Masukkan PIN Lama",'+
'"enter_new_pin":"Masukkan PIN Baru",'+
'"enter_confirm_new_pin":"Masukkan Kembali PIN Baru",'+
'"change_password_result":"Hasil Ubah Password",'+
'"change_password_success":"Anda Telah Berhasil Mengubah Password",'+
'"contact_us":"Hubungi Kami",'+
'"check_update": "Memeriksa Pembaruan Applikasi",'+
'"download_update": "Unduh Pembaruan",'+
'"version":"Versi",'+
'"amb_care":"Asia Merchant Bank Care",'+
'"phone_amb_care":"-",'+
'"bank_simas_care":"Asia Merchant Bank Care",'+
'"phone_simas_care":"(021)501 88888, 1500 153",'+
'"phone_simas_care1":"(021)501 88888",'+
'"phone_simas_care2":"(021)1500 153",'+
'"company_website":"Website Perusahaan",'+
'"company_website_address":"www.asiamerchantbank.com",'+
'"mail_us_at": "Kirim Email di",'+
'"mail_us_address": "customer@asiamerchantbank.com",'+
'"mail_us":"Email Kami",'+
'"message_currentVersion":"Versi Anda Saat ini :",'+
'"message_latestVersion":"Silahkan perbaharui aplikasi anda dengan versi terbaru : ",'+
'"message_dayCountOne":"Anda memiliki waktu ",'+
'"message_dayCountTwo":"hari sebelum masa tunggu update berakhir ",'+
'"message_change_list":"Daftar Perubahan Versi :",'+
'"update_info":"Update Info",'+
'"currencyRate":"Nilai Tukar",'+
'"currencyConverter":"Kalkulator",'+
'"account_creditCard":"Kartu Kredit",'+
'"errorCreditCardNotLinked":"User ID belum terhubung ke Kartu Kredit AMB",'+
'"errorTransactionNotAllowed":"ANDA TIDAK DAPAT MELAKUKAN TRANSAKSI INI",'+
'"promoNews":"Promo/Berita",'+
'"enter_your_username":"Masukkan Username",'+
'"enter_your_mobile_number":"Masukkan Nomor Handphone",'+
'"enter_your_password":"Masukkan Password",'+
'"notifications":"Pesan Masuk",'+
'"notif":"Pesan Masuk",'+
'"note_discription":"(Anda diperbolehkan memasukkan 16 karakter)",'+
'"number_1":"1.",'+
'"number_2":"2.",'+
//'"number_3":"3.",'+
'"number_3":"",'+
'"number_4":"",'+
'"number_5":"",'+
'"note_ft_1":"Transaksi transfer antar valuta asing sesuai dengan Daftar nilai tukar rupiah.",'+
'"note_ft_2":"Batas maksimum transfer antar valuta asing adalah USD 3,000",'+
//'"note_ft_3":"Transfer akan dilakukan pada tanggal transfer yang dipilih",'+
'"note_ft_3":"",'+
'"note_ft_4":"",'+
'"note_ft_5":"",'+
'"font_size":"Ukuran Font",'+
'"default_font_size":"Ukuran default Font",'+
'"ftImmediate_transfer":"Transfer dengan segera",'+
'"ftFutureDated_transfer":"Transfer Pada Tanggal",'+
'"ftRecuring":"Transfer Berkala",'+
'"ftTransfer_date":"Tanggal Transfer",'+
'"ftRecuringMonthly":"Perbulan, setiap",'+
'"ftRecuringPeriod":"Perhari, setiap",'+
'"ftRecurringText":"Tiap bulannya",'+
'"ftRecurringDay":"Hari",'+
'"ftRecuringEndCond":"Kondisi Berakhir :",'+
'"ftRecuringExpired":"Tanggal Berakhir",'+
'"ftRecuringExpired_date":"Tanggal",'+
'"ftMaxRecurrenceChecked":"Total Berjalan",'+
'"ftMaxRecurrenceTimes":"Kali",'+
'"ftDateEmpty":"Tanggal Transaksi tidak boleh kosong",'+
'"dateMustMore":"Tanggal Transfer yang akan datang harus lebih besar dari hari ini",'+
'"dateNotValid":"Tanggal Pada field Transfer Berkala Tidak Valid",'+
'"valueNotValid":"Nilai Pada field Transfer Berkala Tidak Valid",'+
'"recurringNotValid":"Transfer Berkala Tidak Valid",'+
'"expiredRecurDate":"Nilai pada field tanggal berakhir tidak valid",'+
'"expiredRecurDateMore":"Tanggal berakhir harus lebih besar dari hari ini",'+
'"valueTotalFieldRec":"Nilai pada field total berjalan tidak valid",'+
'"endConditionRec":"Kondisi Terakhir Transfer Berkala harus dipilih",'+
'"instructions":"Petunjuk",'+
'"termsAndConditions":"Syarat dan Ketentuan",'+
'"clear_data":"Clear Cache",'+
'"clear_data_warning":"Untuk melakukan action ini anda diharuskan logout terlebih dahulu",'+
'"clear_data_success":"Clear data sukses",'+
'"warning":"Peringatan",'+
'"fundTransfer_targetAccountList":"Daftar Target Account",'+
'"fundTransfer_targetAccountUangkuList":"Daftar Uangku",'+
'"fundTransfer_accountList":"Daftar Account",'+
'"fundTransfer_bankList":"Daftar Bank",'+
'"ccBlockingInput":"Block/Unblock Kartu",'+
'"ccBlockingDetail":"Detail Block/Unblock Kartu ",'+
'"ccBlockingConfirm":"Konfirmasi Block/Unblock Kartu ",'+
'"ccBlockingResult":"Hasil Block/Unblock Kartu ",'+
'"ccActivationInput":"Aktivasi Kartu",'+
'"ccActivation":"Aktivasi Kartu",'+
'"ccActivationAlert":"Status Kartu Sudah Aktif",'+
'"ccActivationDetail":"Detail Aktivasi Kartu",'+
'"ccActivationSubmitMessage":"Tekan Tombol Submit untuk Aktivasi Kartu",'+
'"ccActivationConfirm":"Konfirmasi Aktivasi Kartu",'+
'"ccActivationConfirmMessage1":"Kartu dengan Nomor ",'+
'"ccActivationConfirmMessage2":" Akan Di Aktifkan",'+
'"ccActivationResult":"Hasil Aktivasi Kartu",'+
'"ccLimitInput":"Limit Kartu",'+
'"ccLimitConfirm":"Confirm Limit Kartu ",'+
'"ccLimitLimit":"Limit change Kartu ",'+
'"ccLimitDetail":"Detail Limit Kartu ",'+
'"ccLimitResult":"Result Limit Kartu ",'+
'"description":"Description",'+
'"existingLimit":"Existing Limit",'+
'"newLimit":"New Limit",'+
'"currency":"Currency",'+
'"change":"Change",'+
'"status":"Status",'+
'"ccCallCs":"Call CS Credit Card",'+
'"ccCallCs":"Hubungi CS Kartu Kredit",'+
'"ccIntlTrxInput":"Transaksi Internasional",'+
'"note_cc_block_1":"Request anda akan di proses dalam 24 jam, hubungi Customer Services dibawah ini jika ingin block segera.",'+
'"note_cc_directCallCS":"Telepon CS Credit Card",'+
'"note_cc_24HourCS":"Asia Merchant Bank 24 Jam",'+
'"WelcomeAmb":"Selamat datang di Asia Merchant Bank Personal Internet Banking!",'+
'"cardManagement":"Kelola Kartu",'+
'"ccPinReissueInput":"Pin Reissue",'+
'"ccPinReissueConfirm":"Konfirmasi Pin Reissue",'+
'"ccPinReissueConfirmMessage":"Tekan Tombol Confirm untuk Melanjutkan Pin Reissue",'+
'"ccPinReissueResult":"Hasil Pin Reissue",'+
'"ccResetPinCountInput":"Reset Pin Count",'+
'"ccResetPinCountConfirm":"Reset Pin Count Confirm",'+
'"ccResetPinCountConfirmMessage":"Click Confirm to Request Reset Pin Count",'+
'"ccResetPinCountResult":"Reset Pin Count Result",'+
'"ccLoginCorporateCaption1":"Login Sebagai User Perusahaan",'+
'"ccLoginCorporateCaption2":"Menggunakan Nama Login"'+

'}';