webpackJsonp([37],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.ss
*/
var Auth1 = /** @class */ (function () {
    function Auth1() {
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth();
        //this.addCategory = firebase.database().ref('userProfile/');
        this.customerList = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/Customer-List');
        this.restaurantUserInfo = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users');
    }
    Auth1.prototype.login = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    Auth1.prototype.resetPassword = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    Auth1.prototype.register = function (email, password, firstname, lastname, phone, company, is_recruiter, company_size) {
        var _this = this;
        if (phone === void 0) { phone = ""; }
        if (company === void 0) { company = ""; }
        if (is_recruiter === void 0) { is_recruiter = ""; }
        if (company_size === void 0) { company_size = ""; }
        return this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.restaurantUserInfo.child(newUser.uid).set({
                email: email,
                displayName: firstname,
                lastName: lastname,
                address: "",
                phone: phone,
                company: company,
                is_recruiter: is_recruiter,
                company_size: company_size,
                facebook: false,
                status: 1
            });
        });
    };
    Auth1.prototype.updateProfile = function (uid, data) {
        return this.restaurantUserInfo.child(uid).set(data);
    };
    Auth1.prototype.logoutUser = function () {
        localStorage.removeItem('IS_LOGGED_IN');
        return this.fireAuth.signOut();
    };
    Auth1.prototype.forgotPass = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    Auth1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Auth1);
    return Auth1;
}());

//# sourceMappingURL=auth1.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events_events_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_user_type_user_type__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forgotpassword_forgotpassword__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











//import { TwitterConnect } from '@ionic-native/twitter-connect';







var HomePage = /** @class */ (function () {
    function HomePage(events, nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, googlePlus, alertCtrl, values, service, platform, translateService) {
        var _this = this;
        this.events = events;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl; /*, private twitter: TwitterConnect*/
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.platform = platform;
        this.translateService = translateService;
        this.errors = ['', ' ', null, undefined];
        this.wc = false;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.secondLogin = false;
        this.isLoaded = false;
        // errorPhoneMessage: any;
        //public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
        this.params = {};
        console.log(this.values.isLoggedIn);
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
        //    firebase.auth().onAuthStateChanged(user => {
        //   if (user) {
        // 	// User is signed in.
        // 	console.log(user && !this.wc);
        // 	this.currentUser = user;
        // 	console.log("New user" ,this.currentUser);
        // 	//this.homepage.goToCityList();
        // 	this.goToList();		
        //   } else {
        // 	console.log("loggedd out none");
        //   }
        // });
        __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                var self = _this;
                setTimeout(function () {
                    var is_logged_in = localStorage.getItem('IS_LOGGED_IN');
                    var userType = localStorage.getItem('userType');
                    if (is_logged_in == '1' && userType == 'seeker') {
                        self.currentUser = user;
                        self.goToList();
                    }
                    else {
                        self.is_loaded = true;
                    }
                }, 1000);
            }
            else {
                _this.is_loaded = true;
            }
        });
        this.params.data = {
            "forgotPassword": "Forgot password?",
            "labelPassword": "PASSWORD",
            "labelUsername": "USERNAME",
            "login": "Login",
            "logo": "assets/images/logo/modern.jpg",
            "password": "Enter your password",
            "register": "Register now!",
            "skip": "Skip",
            "subtitle": "Welcome",
            "title": "Login to your account",
            "username": "Enter your username"
        };
        this.params.events = {
            onLogin: function (params) {
                console.log('onLogin:');
            },
            onForgot: function () {
                console.log('onForgot:');
            },
            onRegister: function (params) {
                console.log('onRegister:');
            },
            onSkip: function (params) {
                console.log('onSkip:');
            },
            onFacebook: function (params) {
                console.log('onFacebook:');
            }
        };
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth();
    }
    HomePage.prototype.goToCityList = function () {
        //this.nav.setRoot(CityListPage);
    };
    HomePage.prototype.goToList = function () {
        // this.nav.setRoot(ListPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage.prototype.forgotPass = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    HomePage.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    HomePage.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.login = function (email, password) {
        var _this = this;
        this.form.email = email;
        this.form.password = password;
        if (this.validateForm(password, email)) {
            this.isError = false;
            this.disableLogin = true;
            this.auth.login(this.form.email, this.form.password).then(function (succ) {
                var success = succ;
                _this.service.getUserProfile(success.uid).on('value', function (snapshot) {
                    if (snapshot.val().status == 2) {
                        //////////////////
                        var user = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth().currentUser;
                        var isVerified = user.emailVerified;
                        if (!isVerified) {
                            user.sendEmailVerification();
                            setTimeout(function () {
                                _this.auth.logoutUser().then(function () {
                                    _this.values.isLoggedIn = false;
                                    _this.values.userRole = 'Customer';
                                    localStorage.clear();
                                });
                                _this.presentAlert1('Email verification pending', 'We have sent you an email verification link to your email address, Please go to that account and click on that link to verify your email address.');
                                _this.disableLogin = false;
                                return;
                            }, 1000);
                        }
                        else {
                            localStorage.setItem('IS_LOGGED_IN', '1');
                            localStorage.setItem('userType', 'seeker');
                            _this.events.publishSomeData({});
                            _this.wc = false;
                            _this.userProfile = success;
                            _this.values.isLoggedIn = true;
                            _this.disableLogin = false;
                            _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                                _this.userProfiles = snapshot.val();
                            });
                            _this.values.userRole = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                                if (snapshot.val()) {
                                    _this.values.userRole = snapshot.val().role;
                                }
                            });
                        }
                        /////////////////
                    }
                    else {
                        localStorage.clear();
                        _this.fb.logout();
                        _this.fireAuth.signOut();
                        _this.disableLogin = false;
                        _this.isError = true;
                        _this.errorMsg = 'You have entered wrong credentials.';
                    }
                });
            }).catch(function (err) {
                console.log('err message', err);
                _this.isError = true;
                _this.errorMsg = 'You have entered wrong credentials.';
                _this.handleError(err);
            });
        }
        else {
        }
    };
    HomePage.prototype.validateForm = function (password, email) {
        if (this.errors.indexOf(password) == -1 && this.errors.indexOf(email) == -1) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this.isError = false;
                return (true);
            }
            else {
                this.isError = true;
                this.errorMsg = 'You have entered an invalid email address.';
                return (false);
            }
        }
        else {
            if (this.errors.indexOf(email) >= 0) {
                this.isError = true;
                this.errorMsg = 'Please enter email.';
                return (false);
            }
            if (this.errors.indexOf(password) >= 0) {
                this.isError = true;
                this.errorMsg = 'Please enter password.';
                return (false);
            }
        }
    };
    HomePage.prototype.handleError = function (err) {
        console.log(err.code);
        this.errorSigninMessage = err.message;
        this.disableLogin = false;
    };
    HomePage.prototype.validate = function () {
        console.log("Validate form");
        console.log(this.form.email);
        console.log(this.form.password);
        if (this.form.email == undefined || this.form.email == '') {
            console.log("Validate form error");
            this.errorSigninMessage = 'Please enter email.';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            console.log("Validate form error2");
            this.errorSigninMessage = 'Please enter password.';
            return false;
        }
        return true;
    };
    //FACEBOOK LOGIN
    HomePage.prototype.fbLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (data) {
            if (data.status == 'connected') {
                _this.fb.logout();
            }
        });
        if (this.platform.is('cordova')) {
            this.fb.login(['public_profile', 'email']).then(function (response) {
                _this.presentLoadingDefault('Please wait....');
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth().signInWithCredential(facebookCredential).then(function (success) {
                    localStorage.setItem('userType', 'seeker');
                    localStorage.setItem('IS_LOGGED_IN', '1');
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    _this.values.isLoggedIn = true;
                    _this.secondLogin = false;
                    __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).set({
                                email: _this.userProfile.email,
                                displayName: _this.userProfile.displayName,
                                lastName: "",
                                address: "",
                                phone: "",
                                photoURL: _this.userProfile.photoURL,
                                facebook: true,
                                secondLogin: false,
                                status: 2
                            });
                        }
                    });
                    _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                        _this.userProfiles = snapshot.val();
                    });
                    _this.values.userRole = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                            _this.values.userRole = snapshot.val().role;
                            localStorage.setItem('IS_LOGGED_IN', '1');
                            localStorage.setItem('userType', 'seeker');
                            _this.currentUser = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth().currentUser;
                            console.log(_this.currentUser);
                            _this.service.getRestaurantUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                                _this.userProfiles = snapshot.val();
                            });
                            _this.presentLoader.dismiss();
                        }
                    });
                    // this.nav.push('ShopPage');
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                    //  this.functions.showAlert('Error', error.message);
                });
            }).catch(function (error) {
                console.log(error);
                _this.presentLoader.dismiss();
            });
        }
    };
    //TWITTER LOGIN
    //GOOGLE LOGIN 
    HomePage.prototype.gmailLogin = function () {
        var _this = this;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': '815864038704-ns9kkv3877b7ublljknpajs5kbosl6ci.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (res) {
            __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken))
                .then(function (success) {
                _this.userProfile = success;
                _this.values.isLoggedIn = true;
                console.log("Firebase Success" + JSON.stringify(success));
                __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).set({
                    displayName: _this.userProfile.displayName,
                    photoURL: _this.userProfile.photoURL,
                    email: _this.userProfile.email,
                    lastName: "",
                    address: "",
                    phone: "",
                    facebook: false,
                    secondLogin: false
                });
                _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.values.userRole = snapshot.val().role;
                    }
                });
                // this.nav.push('ShopPage');
            }).catch(function (error) {
                _this.userProfile = error;
                _this.functions.showAlert('Error', error.message);
                console.log("Firebase Failure" + JSON.stringify(error));
            });
        }).catch(function (err) {
            _this.userProfile = err;
            _this.functions.showAlert('Error', err);
            console.error("Error: ", err);
        });
    };
    HomePage.prototype.forgotten = function () {
        this.nav.push('ResetpassowrdPage');
    };
    HomePage.prototype.logOut = function () {
        var _this = this;
        this.auth.logoutUser().then(function () {
            _this.values.isLoggedIn = false;
            _this.values.userRole = 'Customer';
        });
    };
    HomePage.prototype.address = function (item) {
        console.log(item);
        this.nav.push('Address', item);
    };
    HomePage.prototype.myOrder = function () {
        this.nav.push('MyorderPage');
    };
    HomePage.prototype.goToRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__register_register__["a" /* RegisterPage */]);
    };
    /**
    
      register() {
        if(this.validateRegister(this.form)){
          this.disableRegister = true;
          this.buttonText = "Registering...";
          this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
          .then(() => {
    
            this.currentUser = firebase.auth().currentUser;
    
       
              this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
               this.userProfiles = snapshot.val();
    
            
          });
            
            this.disableRegister = false;
            this.buttonText = "Register Account";
          }).catch(err => {this.handleRegisterError(err)});
        }
      }
      */
    HomePage.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Register Account";
    };
    HomePage.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    HomePage.prototype.showBannerAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showInterstitialAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showVideoRewardsAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //   this.showBannerAd();
        //	this.showVideoRewardsAd();
    };
    HomePage.prototype.presentLoadingDefault = function (msg) {
        this.presentLoader = this.loadingCtrl.create({
            content: msg
        });
        this.presentLoader.present();
    };
    HomePage.prototype.back = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_user_type_user_type__["a" /* UserTypePage */]);
    };
    HomePage.prototype.presentAlert1 = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/home/home.html"*/'\n<ion-content padding class="animated fadeIn login auth-page" >\n  <div class="login-content" *ngIf="is_loaded">\n<div logo>\n  <img src="assets/img/logo.png"/>\n  <!-- <h2>Sign in to continue</h2> -->\n  <h2>Job Seeker</h2>\n</div>\n    <!-- Logo -->\n    <!--div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Job Searcher</strong>\n      </h2>\n    </div-->\n\n    <!-- Login form -->\n    <form class="list-form" >\n	\n	  <div form-group>\n      <label>Email Address</label>\n      <ion-item lines="none">\n		<ion-label>\n		<ion-icon name="ios-mail-outline"></ion-icon>\n		</ion-label>\n		 <ion-input required type="email"  placeholder="Enter Email Address"  [(ngModel)]="form.email" name = "email"></ion-input>\n      </ion-item>\n     </div>\n    <div form-group>\n      <label>Password</label>\n      <ion-item lines="none">\n		<ion-label>\n		<ion-icon name="ios-lock-outline"></ion-icon>\n		</ion-label>\n		 <ion-input required type="password" placeholder="Enter Password" [(ngModel)]="form.password" name="password"></ion-input>\n      </ion-item>\n     </div>\n     \n    <p *ngIf="isError" class="errorMsg">{{errorMsg}}</p>\n    </form>\n	<div form-group forgot >\n<a  tappable (click)="forgotPass()" href="javascript:void(0)">Forgot Password ?</a>\n\n</div>\n	\n   <div login-btn>\n \n      <button round medium icon-start block ion-button color="secondary" tappable (click)="login(form.email,form.password)">\n        <!-- <ion-icon name="log-in"></ion-icon> -->\n       LOGIN\n      </button>\n\n      <button round medium icon-start block ion-button color="secondary" tappable (click)="back()">\n        <!-- <ion-icon name="log-in"></ion-icon> -->\n       BACK\n      </button>\n\n      <!--p text-center ion-text color="secondary">Or Sign in with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button icon-only block class="btn-facebook" (click)="facebookRestaurantLogin()">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n      \n          <ion-col col-6>\n            <button ion-button icon-only block class="btn-gplus" (click)="gmailLogin()">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid-->\n\n    </div>\n<div btn-signup class="ion-text-center">\n<p>Don\'t have an account ? <a tappable (click)="goToRegister()" href="javascript:void(0)">Sign Up Here</a></p>\n\n</div>\n<div btn-facebook > \n  <button round medium icon-start block ion-button class="btn-facebook" (click)="fbLogin()">\n              <span fb-icon><img src="assets/img/fb.png"/></span>  Login With Facebook\n            </button>\n</div>\n    \n  </div>\n\n  <p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="!is_loaded">Loading...</p>\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_events_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_10__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppliedInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AppliedInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppliedInfoPage = /** @class */ (function () {
    function AppliedInfoPage(nav, navParam, service, translateService, iab) {
        this.nav = nav;
        this.navParam = navParam;
        this.service = service;
        this.translateService = translateService;
        this.iab = iab;
        this.jobDetails = navParam.data.jobDetails;
        console.log('appliedddddd', this.jobDetails);
    }
    AppliedInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppliedInfoPage');
    };
    AppliedInfoPage.prototype.backToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    AppliedInfoPage.prototype.viewCV = function (cv) {
        var browser = this.iab.create(cv);
    };
    AppliedInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-applied-info',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/applied-info/applied-info.html"*/'<ion-header>\n	<ion-navbar color="primary" text-center>\n	<button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	  </button>  \n	  <ion-title>Your Applied Job</ion-title>\n	</ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n<div jobinfo> \n	<div jobimg>\n	  <img src="assets/img/bg-profile.jpg">\n	</div>\n	<div userimg>\n	  <img src="{{jobDetails.face}}"> \n	</div>\n	<h2>{{jobDetails.education.displayName}}</h2>\n	<!-- <p address><b>Expires&nbsp;</b> {{jobDetails.localdate}}</p> -->\n	<p address>{{jobDetails.timeStamp | date}}</p>\n</div>\n<div jobdetail>\n	<div joblist>\n	   <h2 heading>Job Information</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Job Name</h2> \n			  <p>{{jobDetails.name}}</p>			\n			</ion-item>\n			<ion-item>\n		\n			<ion-icon item-start name="ios-pin-outline"></ion-icon> 			\n			  <h2>Location</h2> \n			  <p>{{jobDetails.address}}</p>			\n			</ion-item>\n			\n			<ion-item>\n			<ion-icon item-start name="ios-call-outline"></ion-icon> 			\n			  <h2>Phone No</h2> \n			  <p>{{jobDetails.phone}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Salary</h2> \n			  <p>${{jobDetails.minsalary}} - ${{jobDetails.maxsalary}}</p>			\n			</ion-item>\n				<ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Experience</h2> \n			  <p>{{jobDetails.education.worked}}</p>			\n			</ion-item>\n		 	<ion-item>\n			  <h2>Job Description</h2> \n			  <p>{{jobDetails.description}}</p>			\n			</ion-item>\n	</div>\n	<div joblist>\n	   <h2 heading>Employee Information</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Name</h2> \n			  <p>{{jobDetails.education.displayName}}</p>			\n			</ion-item>\n			<ion-item>\n		\n			<ion-icon item-start name="ios-mail-outline"></ion-icon> 			\n			  <h2>Email</h2> \n			  <p>{{jobDetails.education.email}}</p>			\n			</ion-item>\n			 <ion-item>\n			<ion-icon item-start name="ios-call-outline"></ion-icon> 			\n			  <h2>Phone Number</h2> \n			  <p>9874563210</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Key Skills</h2> \n			  <p><span>Dentist</span></p>			\n			</ion-item>\n			<ion-item>\n				<ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Gender</h2> \n			  <p>{{jobDetails.education.europeResult}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Birthday</h2> \n			  <p>{{jobDetails.education.birthday}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-school-outline"></ion-icon> 			\n			  <h2>Education</h2> \n			  <p>{{jobDetails.education.education}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Started</h2> \n			  <p>{{jobDetails.education.started}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Finished</h2> \n			  <p> {{jobDetails.education.finished}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Work Experience</h2> \n			  <p>{{jobDetails.education.worked}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Wanted Salary</h2> \n			  <p>${{jobDetails.education.minimum}} - ${{jobDetails.education.maximum}}</p>			\n			</ion-item>\n			<ion-item>\n				<ion-icon item-start name="ios-pricetags-outline"></ion-icon> 			\n			  <h2>Status</h2> \n			  <p><span>{{jobDetails.status}}</span></p>			\n			</ion-item>\n			<ion-item>\n				<ion-icon item-start name="ios-document-outline"></ion-icon> 			\n			  <h2>Resume</h2> \n			  <div  resume (click)="viewCV(jobDetails.resume)"><img  src="assets/cv.png"></div>			\n			</ion-item>\n	</div>\n\n</div>\n\n<!--ion-card style = "background-color : #B0E37C;">\n\n <ion-title style = "background-color : #B0E37C;">\n    <h2 style = "padding:10px;color:white; text-transform: uppercase;width:100%;"><b>{{jobDetails.education.displayName}}</b></h2>\n	</ion-title>\n  <ion-item>\n	<p style = "float:right;">{{jobDetails.timeStamp | date}}</p> \n  </ion-item> \n\n  <img src="{{jobDetails.face}}">\n  <ion-card-content>  \n  <div style = "height:20px;width:100%;"></div>			\n  <ion-badge>\n    <h2>JOB INFORMATION</h2>\n	</ion-badge>	\n	<div style ="padding-left:10px;">	\n	<p><b>Job Name: {{jobDetails.name}}</b></p>\n	<p><b>Description: {{jobDetails.description}}</b></p>	\n	<p><b>Address: {{jobDetails.address}}</b></p>\n	<p><b>Phone: {{jobDetails.phone}}</b></p>    	\n	<p><b>Min Salary: {{jobDetails.minsalary}}</b></p>\n	<p><b>Max Salary: {{jobDetails.maxsalary}}</b></p>\n	<p><b>Expires: {{jobDetails.localdate}}</b></p>	\n	</div>	\n	<div style = "height:20px;width:100%;">	</div>	\n	<ion-badge>\n	<h2>EMPLOYEE EDUCATION INFO</h2>\n	</ion-badge>\n	<div style ="padding-left:10px;">\n	\n	<p><b>Name: {{jobDetails.education.displayName}}</b></p>\n	<p><b>Email: {{jobDetails.education.email}}</b></p>\n	<p><b>Gender: {{jobDetails.education.europeResult}}</b></p>\n	<p><b>Birthday: {{jobDetails.education.birthday}}</b></p>\n	<p><b>Education: {{jobDetails.education.education}}</b></p>\n	<p><b>Started: {{jobDetails.education.started}}</b></p>\n	<p><b>Finished: {{jobDetails.education.finished}}</b></p>\n	<p><b>Wanted Salary Min: {{jobDetails.education.minimum}}</b></p>\n	<p><b>Wanted Salary Max: {{jobDetails.education.maximum}}</b></p>\n	<p><b>Worked years: {{jobDetails.education.worked}}</b></p>\n	<p><b>User Comment: {{jobDetails.education.userComment}}</b></p>\n	</div>\n	\n	\n	<ion-badge style="float:right;background-color:green;margin-top:20px;"><h2>STATUS: {{jobDetails.status}}</h2></ion-badge>\n  </ion-card-content>\n\n  \n\n</ion-card-->\n\n\n</ion-content>\n\n<!--ion-footer no-shadow>\n	<ion-toolbar position="bottom">\n	 <button ion-button block color="secondary" text-uppercase (click)="backToHome()">BACK TO HOME</button>\n	</ion-toolbar>\n</ion-footer-->\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/applied-info/applied-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AppliedInfoPage);
    return AppliedInfoPage;
}());

//# sourceMappingURL=applied-info.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__job_details_job_details__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_admob_free__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_modal_filter_modal__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";










var JobListPage = /** @class */ (function () {
    function JobListPage(modalCtrl, funtions, admobFree, plt, googleMaps, values, nativeStorage, navCtrl, navParams, service, translateService, callNumber) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.funtions = funtions;
        this.admobFree = admobFree;
        this.plt = plt;
        this.googleMaps = googleMaps;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.selectedItem = 'item1';
        this.height = 0;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.savedIds = [];
        this.allIds = [];
        this.is_loaded = false;
        this.locations = {};
        this.responseCame = false;
        this.ads = [];
        this.errors = [null, undefined, ''];
        this.filter = {};
        this.backupListing = {};
        this.all_markers = [];
        var iso = new Date().toISOString();
        this.pageExit = false;
        this.addDisplayed = false;
        // this.showInterstitialAds();
        this.id = 'all';
        this.locations = [];
        // this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
        // 	this.runAgain();
        //  });
        //console.log(this.params.data.items);
        this.responseCame = false;
        this.service.getJobsByCategory(this.id).on('value', function (snapshot) {
            //this.productsList = [];
            _this.locations = [];
            var x = 0;
            snapshot.forEach(function (snap) {
                var dist = {
                    id: snap.key,
                    address: snap.val().address,
                    category: snap.val().category,
                    description: snap.val().description,
                    employer_id: snap.val().employer_id,
                    face: snap.val().face,
                    job_id: snap.val().job_id,
                    localdate: snap.val().localdate,
                    maxsalary: snap.val().maxsalary,
                    minsalary: snap.val().minsalary,
                    name: snap.val().name,
                    phone: snap.val().phone,
                    reverseOrder: snap.val().reverseOrder,
                    timeStamp: snap.val().timeStamp,
                    user_id: snap.val().user_id,
                    experience: snap.val().experience,
                    lat: snap.val().lat,
                    lng: snap.val().lng,
                    whenCanJoin: snap.val().whenCanJoin,
                    confirmEducation: snap.val().confirmEducation,
                    shortTermJob: snap.val().shortTermJob,
                    createdOn: snap.val().createdOn,
                    requiredOn: snap.val().requiredOn,
                };
                if (x % 3 == 0 && x != 1) {
                    dist['ad'] = '1';
                    console.log('coming there', x);
                }
                if (snap.val().shortTermJob == true) {
                    if (snap.val().requiredOn <= iso) { }
                    else {
                        var iso = snap.val().requiredOn;
                        console.log('requiredOn', snap.val().requiredOn);
                        var newDate = new Date(iso);
                        var updatedDate = new Date(newDate.getTime() - 24 * 60 * 60 * 1000);
                        console.log('updatedDate', updatedDate);
                        dist['validTill'] = updatedDate;
                        _this.locations.push(dist);
                    }
                }
                else {
                    _this.locations.push(dist);
                }
                x++;
            });
            _this.locations = _this.locations.reverse();
            _this.backupListing = _this.locations.reverse();
            _this.is_loaded = true;
            setTimeout(function () {
                _this.initMap();
            }, 1000);
            _this.responseCame = true;
        });
        this.getSavedJobs();
        this.getJobs();
    }
    JobListPage.prototype.getJobs = function () {
        var _this = this;
        this.service.getAds().on('value', function (snapshot) {
            var i = -1;
            snapshot.forEach(function (snap) {
                var dist = {
                    id: snap.key,
                    image: snap.val().image,
                    title: snap.val().title,
                    description: snap.val().description,
                    index: i + 3
                };
                i = i + 3;
                _this.ads.push(dist);
            });
        });
    };
    JobListPage.prototype.goToNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__notifications_notifications__["a" /* NotificationsPage */]);
    };
    JobListPage.prototype.goToJobDetails = function (locations) {
        console.log(this.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__job_details_job_details__["a" /* JobDetailsPage */], { locations: locations, categoryId: this.id });
    };
    JobListPage.prototype.initializeItems = function () {
        var _this = this;
        this.service.getJobsByCategory(this.id).on('value', function (snapshot) {
            //this.productsList = [];
            _this.locations = [];
            snapshot.forEach(function (snap) {
                _this.locations.push({
                    id: snap.key,
                    address: snap.val().address,
                    category: snap.val().category,
                    description: snap.val().description,
                    employer_id: snap.val().employer_id,
                    face: snap.val().face,
                    job_id: snap.val().job_id,
                    localdate: snap.val().localdate,
                    maxsalary: snap.val().maxsalary,
                    minsalary: snap.val().minsalary,
                    name: snap.val().name,
                    phone: snap.val().phone,
                    reverseOrder: snap.val().reverseOrder,
                    timeStamp: snap.val().timeStamp,
                    user_id: snap.val().user_id,
                    experience: snap.val().experience,
                    lat: snap.val().lat,
                    lng: snap.val().lng,
                    whenCanJoin: snap.val().whenCanJoin,
                    confirmEducation: snap.val().confirmEducation,
                    shortTermJob: snap.val().shortTermJob,
                    createdOn: snap.val().createdOn,
                    requiredOn: snap.val().requiredOn,
                });
            });
            _this.locations = _this.locations.reverse();
        });
        this.items = this.locations;
    };
    JobListPage.prototype.searchItem = function (ev) {
        var _this = this;
        this.initializeItems();
        console.log(this.items);
        console.log(ev);
        var val = ev.target.value;
        console.log('vvvvvvvvvvvvvvv', val);
        if (val && val.trim() != '') {
            this.locations = this.items.filter(function (data) {
                console.log(data);
                return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            setTimeout(function () {
                for (var i = 0; i < _this.all_markers.length; i++) {
                    _this.all_markers[i].setMap(null);
                }
                _this.all_markers = [];
                _this.locations.forEach(function (loc) {
                    console.log('its loc', loc);
                    var coordinates = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* LatLng */](Number(loc.lat), Number(loc.lng));
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        animation: google.maps.Animation.DROP,
                        position: coordinates,
                        title: loc.name,
                    });
                    _this.all_markers.push(marker);
                    var infoWindow = new google.maps.InfoWindow({
                        content: loc.name
                    });
                });
            }, 1000);
        }
    };
    JobListPage.prototype.saveJob = function (id, user_id) {
        this.service.addSavedJobs(id, user_id);
    };
    JobListPage.prototype.unsaveJob = function (jobId) {
        var id;
        var snapKey;
        for (var _i = 0, _a = this.savedIds; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.jobId == jobId) {
                id = key.id;
                snapKey = key.snapKey;
                this.service.removeSavedJobs(id, snapKey);
                break;
            }
        }
    };
    JobListPage.prototype.getSavedJobs = function () {
        var _this = this;
        this.service.getSavedJobs().on('value', function (snapshot) {
            _this.savedIds = [];
            _this.allIds = [];
            snapshot.forEach(function (snap) {
                _this.savedIds.push({
                    jobId: snap.val().jobId,
                    id: snap.val().id,
                    snapKey: snap.key
                });
                _this.allIds.push(snap.val().jobId);
            });
        });
    };
    JobListPage.prototype.initMap = function () {
        var _this = this;
        //let map: GoogleMap = GoogleMaps.create(this.mapElement.nativeElement);
        var f_lat = -34.9290;
        var f_lng = 138.6010;
        if (this.locations.length > 0) {
            f_lat = this.locations[0]['lat'];
            f_lng = this.locations[0]['lng'];
        }
        var latLng = new google.maps.LatLng(Number(f_lat), Number(f_lng));
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        console.log(this.locations);
        var self = this;
        this.locations.forEach(function (loc) {
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<p id="firstHeading" class="firstHeading">' + loc.name + '</p>' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
            });
            var coordinates = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* LatLng */](Number(loc.lat), Number(loc.lng));
            var marker = new google.maps.Marker({
                map: _this.map,
                position: coordinates,
                // label: loc.name,
                title: loc.name
            });
            infowindow.open(_this.map, marker);
            //   marker.addListener('click', function() {
            //   });
            // marker.on(GoogleMapsEvent.INFO_CLICK).subscribe((res) => {
            //     this.navCtrl.push(JobDetailsPage, {locations:loc,categoryId:this.id});
            // 	});
            // this.all_markers.push(marker);
            // 	let infoWindow = new google.maps.InfoWindow({
            // 		content: loc.name
            // 	});
            marker.addListener('click', function () {
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__job_details_job_details__["a" /* JobDetailsPage */], { locations: loc, categoryId: self.id });
            });
        });
    };
    JobListPage.prototype.showInterstitialAds = function () {
        var _this = this;
        this.funtions.presentLoading();
        var interstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-3940256099942544/8691691433"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(function () {
            setTimeout(function () {
                _this.funtions.stopLoading();
            }, 10000);
        }).catch(function (e) {
            _this.funtions.stopLoading();
        });
    };
    JobListPage.prototype.runAgain = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.pageExit) {
                _this.showInterstitialAds();
            }
        }, 180000);
    };
    JobListPage.prototype.ionViewDidLeave = function () {
        this.pageExit = true;
    };
    JobListPage.prototype.runAd = function () {
        this.showInterstitialAds();
    };
    JobListPage.prototype.openFilterModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__filter_modal_filter_modal__["a" /* FilterModalPage */], { filters: this.filter });
        profileModal.onDidDismiss(function (data) {
            if (data.status == 1) {
                _this.filter = data.filter;
                console.log(_this.filter);
                _this.applyFilters();
            }
            else {
                _this.filter = {};
                _this.locations = _this.backupListing;
            }
        });
        profileModal.present();
    };
    JobListPage.prototype.applyFilters = function () {
        var _this = this;
        var filters = this.filter;
        this.initializeItems();
        console.log(this.items);
        this.locations = this.items.filter(function (data) {
            var myExperience = data.experience;
            var newExperienceToLC = myExperience.toLowerCase();
            var newExperience = newExperienceToLC.split('y');
            if (filters.isExperience) {
                console.log('yes exp', newExperience[0], filters.experience);
                if (filters.experience == newExperience[0]) {
                    if (filters.shortJob) {
                        if (data.shortTermJob)
                            return true;
                        else
                            return false;
                    }
                    return true;
                }
                return false;
            }
            else {
                if (filters.shortJob) {
                    if (data.shortTermJob != undefined) {
                        console.log(data.shortTermJob);
                        return true;
                    }
                    else
                        return false;
                }
                else
                    return true;
            }
        });
        if (this.errors.indexOf(this.filter.byAlpabets) == -1) {
            if (this.filter.byAlpabets == 1) {
                this.locations.sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        if (this.errors.indexOf(this.filter.byDate) == -1) {
            this.locations.sort(function (a, b) {
                var dateA = new Date(a.createdOn).getTime();
                var dateB = new Date(b.createdOn).getTime();
                console.log('coming over there	', dateA);
                if (_this.filter.byDate == 1)
                    return dateA > dateB ? 1 : -1;
                else
                    return dateA < dateB ? 1 : -1;
            });
        }
        setTimeout(function () {
            for (var i = 0; i < _this.all_markers.length; i++) {
                _this.all_markers[i].setMap(null);
            }
            _this.all_markers = [];
            _this.locations.forEach(function (loc) {
                var coordinates = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* LatLng */](Number(loc.lat), Number(loc.lng));
                var marker = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: coordinates,
                    title: loc.name,
                });
                _this.all_markers.push(marker);
                var infoWindow = new google.maps.InfoWindow({
                    content: loc.name
                });
            });
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], JobListPage.prototype, "mapElement", void 0);
    JobListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-list',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/job-list/job-list.html"*/'<ion-header>\n	<ion-navbar color="primary" text-center>\n	<button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	  </button>  \n	  <ion-title>Home</ion-title>\n	</ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n<div class="search" *ngIf="is_loaded">\n <ion-searchbar (ionInput)="searchItem($event)" placeholder="Search jobs here...">\n    </ion-searchbar>\n</div>\n<!-- <ng-adsense\n			[adClient]="\'ca-pub-8514227015105788\'"\n			[display]="\'inline-block\'"\n			[width]="100"\n			[height]="100"\n			></ng-adsense> -->\n  <ion-row  hometop *ngIf="is_loaded">\n	  <ion-col class="p-0" col-8>\n	  <h2 heading>\n	  Recently Added\n	  </h2>\n	\n	  </ion-col>\n	  <ion-col class="p-0"   text-right col-4>\n	 <div listgrid class="ion-text-center">\n		<a href="javascript:void(0)" (click)="openFilterModal()" [ngClass]="{\'active\': filter.length!=0}" class="listicon"><ion-icon name="ios-funnel-outline"></ion-icon></a>\n	  <a href="javascript:void(0)" (click)="selectedItem = \'item1\'" [ngClass]="{\'active\': selectedItem === \'item1\'}" class="listicon"><ion-icon icons name="ios-list-outline"></ion-icon></a>\n	  <a href="javascript:void(0)"  (click)="selectedItem = \'item2\'" [ngClass]="{\'active\': selectedItem === \'item2\'}" class="gridicon "><img  icons src="assets/img/map.png"/></a>\n	 \n	 </div>\n   </ion-col>\n   </ion-row>\n\n\n<ion-list listview [ngClass]="{\'active\': selectedItem === \'item1\'}" style="display:none" *ngIf="is_loaded">\n	<span  *ngFor="let location of locations; let i = index" class="parent">\n\n		<ion-item (click)="goToJobDetails(location)">\n			\n			<ion-thumbnail item-start>\n				<img src="{{location.face}}">\n			</ion-thumbnail>\n			<h2 >{{location.name}}</h2>\n			<ion-badge class="badgeINfo" color="primary" *ngIf="location.shortTermJob">Valid till: {{location.validTill | date: \'mediumDate\'}}</ion-badge>\n			<p address><img src="assets/img/building.png"/><span>{{location.address}}</span></p>\n			  <p briefcase><img src="assets/img/briefcase.png"/><span>Experience: {{location.experience}}</span></p>\n			 <!-- <div style="opacity:0">emply</div> -->\n			  <ion-row salary-apply>\n			   <ion-col  col-12>\n				 <!-- <ion-badge>${{location.minsalary}} - ${{location.maxsalary}}\n				 </ion-badge> -->\n			   </ion-col>\n				\n			  </ion-row>\n	  \n		  </ion-item>\n\n		  <span class="heart" (click)="unsaveJob(location.job_id)" *ngIf="allIds.indexOf(location.job_id)>=0"><ion-icon name="ios-heart" style="color: red;"></ion-icon></span>\n	  \n		  <span class="heart" (click)="saveJob(location.job_id, location.user_id)" *ngIf="allIds.indexOf(location.job_id)==-1"><ion-icon name="ios-heart"></ion-icon></span>\n\n\n		  <span *ngFor="let ad of ads ; let ii = index">\n			<ion-item addlist *ngIf="(i+1) % 3 == 0 && (i== ad.index)" (click)="runAd()">\n				<ion-thumbnail item-start >\n					<img [src]="ad.image" *ngIf="errors.indexOf(ad.image) == -1">\n					<img src="assets/img/New_Logo_AD.jpeg" *ngIf="errors.indexOf(ad.image) >= 0">\n				</ion-thumbnail>\n				<h2 style="\n				height: 23px;">{{ad.title}}</h2>\n				<p briefcase>{{ad.description}}</p>\n			  </ion-item>\n\n		</span>\n\n\n	</span>\n\n\n\n  <!--ion-item *ngFor="let location of locations">\n    <ion-thumbnail item-start>\n      <img src="{{location.face}}">\n    </ion-thumbnail>\n	<ion-badge (click)="goToJobDetails(location)">\n    <h2>{{location.name}}</h2>\n	</ion-badge>\n	<p>Location • {{location.address}}</p>\n    <p>Posted • {{location.timeStamp | date}}</p>\n	<p>Expires • {{location.localdate}}</p>\n  </ion-item-->\n	<!--\n    <button ion-button clear item-end (click)="goToJobDetails(location)">\n	\n	<ion-badge style = "height:100%;">\n	View\n	\n	</ion-badge>\n	</button>\n	-->\n</ion-list>\n<ion-list gridview [ngClass]="{\'active\': selectedItem === \'item2\'}" style="display:none">\n	<div #map style="  height:100%; width: 100%" id="map"></div>\n  </ion-list>\n\n  <p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="!is_loaded">Loading...</p>\n  <p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="responseCame && locations.length==0">No data found</p>\n\n</ion-content>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/job-list/job-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_7__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */]])
    ], JobListPage);
    return JobListPage;
}());

//# sourceMappingURL=job-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home1_home1__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserTypePage = /** @class */ (function () {
    function UserTypePage(navCtrl, navParams, Service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Service = Service;
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                var self = _this;
                setTimeout(function () {
                    var is_logged_in = localStorage.getItem('IS_LOGGED_IN');
                    if (is_logged_in == '1') {
                        var userType = localStorage.getItem('userType');
                        if (userType == 'manager') {
                            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home1_home1__["a" /* Home1Page */]);
                        }
                        else {
                            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                        }
                    }
                    else {
                        this.is_loaded = true;
                    }
                }, 1000);
            }
            else {
                _this.is_loaded = true;
            }
        });
    }
    UserTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserTypePage');
    };
    UserTypePage.prototype.redirect = function (page) {
        // this.Service.getads()
        if (page == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
        }
        if (page == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home1_home1__["a" /* Home1Page */]);
        }
    };
    UserTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-type',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/user-type/user-type.html"*/'\n<ion-content padding class="animated fadeIn login auth-page" >\n  <div class="login-content" *ngIf="is_loaded">\n<div logo>\n  <img src="assets/img/logo.png"/>\n  <h2>Welcome Back!!</h2>\n  <h2>Choose your role</h2>\n</div>\n   <div login-btn>\n \n      <button round medium icon-start block ion-button color="secondary" tappable (click)="redirect(1)">\n    \n        Job Seeker\n      </button>\n \n    </div>\n\n    <br>\n   <div login-btn>\n \n    <button round medium icon-start block ion-button color="secondary" tappable (click)="redirect(2)">\n   \n    \n     Job Manager\n    </button>\n\n  </div>\n \n \n\n  </div>\n\n\n  <p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="!is_loaded">Loading...</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/user-type/user-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_service__["a" /* Service */]])
    ], UserTypePage);
    return UserTypePage;
}());

//# sourceMappingURL=user-type.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog_ngx__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the AddDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = /** @class */ (function () {
    function MessagesPage(params, values, nativeStorage, navCtrl, navParams, service, translateService, callNumber, functions, spinnerDialog) {
        this.params = params;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.functions = functions;
        this.spinnerDialog = spinnerDialog;
        this.errors = ['', null, undefined, ' '];
        this.loader = false;
        this.hisRoomid = 0;
        this.responseCame = false;
        var user_id = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser.uid;
        this.toid = params.data.toId;
        this.mode = params.data.mode;
        this.getInbox(user_id);
    }
    MessagesPage.prototype.goToChatPage = function (fromId, roomId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], {
            fromId: fromId,
            roomId: roomId
        });
    };
    MessagesPage.prototype.getInbox = function (user_id) {
        var _this = this;
        this.responseCame = false;
        this.loader = true;
        var user_id = user_id;
        this.service.getInbox(user_id).on('value', function (snapshot) {
            _this.all_from_users = [];
            _this.chat_users = [];
            var all_spans = [];
            var i = 0;
            snapshot.forEach(function (snp) {
                all_spans.push({
                    id: snp.key,
                    fromId: snp.val().fromId,
                    toId: snp.val().toId,
                    isRead: snp.val().isRead,
                    roomId: snp.val().roomId,
                    message: snp.val().message,
                    date: snp.val().date
                });
            });
            all_spans.reverse();
            if (all_spans.length != 0) {
                all_spans.forEach(function (snap) {
                    var other_id = snap.fromId;
                    if (snap.fromId == user_id) {
                        other_id = snap.toId;
                    }
                    if (_this.all_from_users.indexOf(other_id) == -1) {
                        if (other_id == _this.toid) {
                            _this.hisRoomid = snap.roomId;
                        }
                        _this.all_from_users.push(other_id);
                        _this.service.getUserProfile(other_id).on('value', function (u_snapshot) {
                            _this.service.getLastMessage(snap.roomId).once('child_added', function (m_snapshot) {
                                _this.chat_users.push({
                                    id: snap.id,
                                    fromId: other_id,
                                    isRead: snap.isRead,
                                    roomId: snap.roomId,
                                    message: m_snapshot.val().message,
                                    date: m_snapshot.val().date,
                                    displayName: u_snapshot.val().displayName,
                                    lastName: u_snapshot.val().lastName,
                                    photoURL: u_snapshot.val().photoURL
                                });
                                i++;
                                console.log('all_spans.length', all_spans.length);
                                if (i == _this.all_from_users.length) {
                                    console.log(_this.mode);
                                    if (_this.mode == 1) {
                                        setTimeout(function () {
                                            _this.mode = 12;
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], {
                                                fromId: _this.toid,
                                                roomId: _this.hisRoomid
                                            });
                                        }, 500);
                                    }
                                }
                            });
                        });
                    }
                });
            }
            else {
                if (_this.mode == 1) {
                    _this.mode = 12;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], {
                        fromId: _this.toid,
                        roomId: 0
                    });
                }
            }
            setTimeout(function () {
                _this.loader = false;
                _this.responseCame = true;
            }, 1000);
        });
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/messages/messages.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>  \n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ng-container *ngIf="!loader">\n  <ion-item (click)="goToChatPage(item.fromId, item.roomId)" *ngFor="let item of chat_users"> \n    <ion-avatar item-start>\n      <img src="{{item.photoURL}}" *ngIf="errors.indexOf(item.photoURL)==-1"/>\n      <img src="assets/images/person.png" *ngIf="errors.indexOf(item.photoURL)>=0"/>\n         \n    </ion-avatar>\n    \n     <h2>{{item.displayName}} {{item.lastName}}<ion-note><ion-icon name="ios-time-outline"></ion-icon> {{item.date  | timeAgo}}</ion-note></h2>\n     <p>{{item.message}}</p>\n    \n    </ion-item>\n\n</ng-container>\n\n \n \n<p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="loader">Loading...</p>\n<p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="responseCame && chat_users.length==0">No data found</p>\n \n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog_ngx__["a" /* SpinnerDialog */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Config provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Config = /** @class */ (function () {
    function Config() {
        this.url = 'http://localhost:8080/wp-content'; // Add your wordpress blog url here. you have to install json-api plugin
        //this.url = '/api';
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsService = /** @class */ (function () {
    function EventsService() {
        this.fooSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    EventsService.prototype.publishSomeData = function (data) {
        this.fooSubject.next(data);
    };
    EventsService.prototype.getObservable = function () {
        return this.fooSubject;
    };
    EventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());

//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_user_type_user_type__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth1__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs1_tabs1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register1_register1__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_events_events_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forgotpassword_forgotpassword__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { TwitterConnect } from '@ionic-native/twitter-connect';





// import { ListPage } from '../list/list';



var Home1Page = /** @class */ (function () {
    function Home1Page(nav, navParams, functions, auth, loadingCtrl, googlePlus, alertCtrl, values, service, platform, translateService, events, fb) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.googlePlus = googlePlus;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.platform = platform;
        this.translateService = translateService;
        this.events = events;
        this.fb = fb;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.is_loaded = false;
        this.secondLogin = false;
        // errorPhoneMessage: any;
        //public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
        this.params = {};
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["database"]().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
        __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                var self = _this;
                setTimeout(function () {
                    var is_logged_in = localStorage.getItem('IS_LOGGED_IN');
                    var userType = localStorage.getItem('userType');
                    if (is_logged_in == '1' && userType == 'manager') {
                        self.currentUser = user;
                        self.goToList();
                    }
                    else {
                        self.is_loaded = true;
                    }
                }, 1000);
            }
            else {
                _this.is_loaded = true;
            }
        });
        this.params.data = {
            "forgotPassword": "Forgot password?",
            "labelPassword": "PASSWORD",
            "labelUsername": "USERNAME",
            "login": "Login",
            "logo": "assets/images/logo/modern.jpg",
            "password": "Enter your password",
            "register": "Register now!",
            "skip": "Skip",
            "subtitle": "Welcome",
            "title": "Login to your account",
            "username": "Enter your username"
        };
        this.params.events = {
            onLogin: function (params) {
                console.log('onLogin:');
            },
            onForgot: function () {
                console.log('onForgot:');
            },
            onRegister: function (params) {
                console.log('onRegister:');
            },
            onSkip: function (params) {
                console.log('onSkip:');
            },
            onFacebook: function (params) {
                console.log('onFacebook:');
            }
        };
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"]();
    }
    Home1Page.prototype.goToCityList = function () {
        //this.nav.setRoot(CityListPage);
    };
    Home1Page.prototype.goToList = function () {
        //this.nav.setRoot(ListPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__tabs1_tabs1__["a" /* Tabs1Page */]);
        this.is_loaded = true;
    };
    Home1Page.prototype.forgotPass = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    Home1Page.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    Home1Page.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN
    Home1Page.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    Home1Page.prototype.login = function (email, password) {
        var _this = this;
        this.form.email = email;
        this.form.password = password;
        if (this.validate()) {
            this.disableLogin = true;
            this.auth.login(this.form.email, this.form.password).then(function (success) {
                _this.service.getUserProfile(success.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                    _this.userProfile = success;
                    if (_this.userProfiles.status == 1) {
                        ////////////////
                        var user = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"]().currentUser;
                        var isVerified = user.emailVerified;
                        if (!isVerified) {
                            user.sendEmailVerification();
                            setTimeout(function () {
                                _this.auth.logoutUser().then(function () {
                                    _this.values.isLoggedIn = false;
                                    _this.values.userRole = 'Customer';
                                    localStorage.clear();
                                });
                                _this.presentAlert1('Email verification pending', 'We have sent you an email verification link to your email address, Please go to that account and click on that link to verify your email address.');
                                _this.disableLogin = false;
                                return;
                            }, 1000);
                        }
                        else {
                            localStorage.setItem('IS_LOGGED_IN', '1');
                            localStorage.setItem('userType', 'manager');
                            _this.events.publishSomeData({});
                            _this.userProfile = success;
                            _this.values.isLoggedIn = true;
                            _this.disableLogin = false;
                            _this.values.userRole = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                                if (snapshot.val()) {
                                    _this.values.userRole = snapshot.val().role;
                                }
                            });
                        }
                        //////////////////
                    }
                    else {
                        localStorage.clear();
                        _this.fb.logout();
                        _this.fireAuth.signOut();
                        _this.disableLogin = false;
                        _this.errorSigninMessage = "You have entered wrong credentials.";
                    }
                });
            }).catch(function (err) { _this.handleError(err); });
        }
    };
    Home1Page.prototype.handleError = function (err) {
        console.log(err.code);
        this.errorSigninMessage = err.message;
        this.disableLogin = false;
    };
    Home1Page.prototype.validate = function () {
        console.log("Validate form");
        console.log(this.form.email);
        console.log(this.form.password);
        if (this.form.email == undefined || this.form.email == '') {
            console.log("Validate form error");
            this.errorSigninMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            console.log("Validate form error2");
            this.errorSigninMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    //FACEBOOK LOGIN
    Home1Page.prototype.fbLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (data) {
            localStorage.setItem('userType', 'manager');
            if (data.status == 'connected') {
                _this.fb.logout();
            }
        });
        if (this.platform.is('cordova')) {
            this.fb.login(['public_profile', 'user_friends', 'email']).then(function (response) {
                _this.presentLoadingDefault('Please wait....');
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"]().signInWithCredential(facebookCredential).then(function (success) {
                    localStorage.setItem('userType', 'manager');
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    _this.values.isLoggedIn = true;
                    _this.secondLogin = false;
                    __WEBPACK_IMPORTED_MODULE_10_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                            _this.values.userRole = snapshot.val().role;
                            localStorage.setItem('IS_LOGGED_IN', '1');
                            localStorage.setItem('userType', 'manager');
                            _this.currentUser = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"]().currentUser;
                            _this.service.getRestaurantUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                                _this.userProfiles = snapshot.val();
                            });
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_10_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).set({
                                email: _this.userProfile.email,
                                displayName: _this.userProfile.displayName,
                                lastName: "",
                                address: "",
                                phone: "",
                                photoURL: _this.userProfile.photoURL,
                                facebook: true,
                                secondLogin: false,
                                status: 1
                            });
                        }
                        localStorage.setItem('IS_LOGGED_IN', '1');
                        localStorage.setItem('userType', 'manager');
                    });
                    _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                        _this.userProfiles = snapshot.val();
                    });
                    _this.values.userRole = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                            _this.values.userRole = snapshot.val().role;
                        }
                    });
                    // this.nav.setRoot(Tabs1Page);
                    _this.presentLoader.dismiss();
                    localStorage.setItem('userType', 'seeker');
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                    _this.functions.showAlert('Error', error.message);
                });
            }).catch(function (error) {
                console.log(error);
                _this.presentLoader.dismiss();
            });
        }
    };
    //TWITTER LOGIN
    //GOOGLE LOGIN 
    Home1Page.prototype.gmailLogin = function () {
        var _this = this;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': '692778962096-25t9fginuhonbh53vqol24nu16b2t11q.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (res) {
            __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"]().signInWithCredential(__WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken))
                .then(function (success) {
                _this.userProfile = success;
                _this.values.isLoggedIn = true;
                console.log("Firebase Success" + JSON.stringify(success));
                __WEBPACK_IMPORTED_MODULE_10_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).set({
                    displayName: _this.userProfile.displayName,
                    photoURL: _this.userProfile.photoURL,
                    email: _this.userProfile.email,
                    lastName: "",
                    address: "",
                    phone: "",
                    facebook: false,
                    secondLogin: false,
                    status: 1
                });
                _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.values.userRole = snapshot.val().role;
                    }
                });
                // this.nav.push('ShopPage');
            }).catch(function (error) {
                _this.userProfile = error;
                _this.functions.showAlert('Error', error.message);
                console.log("Firebase Failure" + JSON.stringify(error));
            });
        }).catch(function (err) {
            _this.userProfile = err;
            _this.functions.showAlert('Error', err);
            console.error("Error: ", err);
        });
    };
    Home1Page.prototype.forgotten = function () {
        this.nav.push('ResetpassowrdPage');
    };
    Home1Page.prototype.logOut = function () {
        var _this = this;
        this.auth.logoutUser().then(function () {
            _this.values.isLoggedIn = false;
            _this.values.userRole = 'Customer';
            localStorage.removeItem('IS_LOGGED_IN');
        });
    };
    Home1Page.prototype.address = function (item) {
        console.log(item);
        this.nav.push('Address', item);
    };
    Home1Page.prototype.myOrder = function () {
        this.nav.push('MyorderPage');
    };
    Home1Page.prototype.goToRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__register1_register1__["a" /* Register1Page */]);
    };
    Home1Page.prototype.register = function () {
        var _this = this;
        if (this.validateRegister(this.form)) {
            this.disableRegister = true;
            this.buttonText = "Registering...";
            this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
                .then(function () {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_10_firebase_app__["auth"]().currentUser;
                _this.service.getUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.disableRegister = false;
                _this.buttonText = "Register Account";
            }).catch(function (err) { _this.handleRegisterError(err); });
        }
    };
    Home1Page.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Register Account";
    };
    Home1Page.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    // async showBannerAd(){
    //   const bannerConfig: AdMobFreeBannerConfig = {
    // 	  id : 'ca-app-pub-6026141143855033/6021415851',
    // 	  isTesting: false,
    // 	  autoShow: true
    //   }
    //   this.adMobFree.banner.config(bannerConfig);
    //   try{
    // 	const result = this.adMobFree.banner.prepare();
    // 		console.log(result);
    //   }
    //   catch(e){
    // 	  console.error(e);
    //   }
    // }
    // async showInterstitialAd(){
    //   try{
    // 	  const interstitialConfig: AdMobFreeInterstitialConfig = {
    // 		  id : 'ca-app-pub-6026141143855033/5823595991',
    // 		  isTesting: false,
    // 		  autoShow: true
    // 	  }
    // 	  this.adMobFree.interstitial.config(interstitialConfig);
    // 	  const result = await this.adMobFree.interstitial.prepare();
    // 	  console.log(result);
    //   }
    //   catch(e){
    // 	  console.log(e);
    //   }
    // }
    // async showVideoRewardsAd(){
    //   try{
    // 	  const videoRewardsConfig : AdMobFreeRewardVideoConfig = {
    // 		  id: 'ca-app-pub-6026141143855033/7631501688',
    // 		  isTesting : false,
    // 		  autoShow: true
    // 	  }
    // 	  this.adMobFree.rewardVideo.config(videoRewardsConfig);
    // 	  const result = await this.adMobFree.rewardVideo.prepare();
    // 	  console.log(result);
    //   }
    //   catch(e){
    // 	  console.error(e);
    //   }
    // }
    Home1Page.prototype.ionViewDidLoad = function () {
        //   this.showBannerAd();
        //	this.showVideoRewardsAd();
    };
    Home1Page.prototype.back = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_user_type_user_type__["a" /* UserTypePage */]);
    };
    Home1Page.prototype.presentLoadingDefault = function (msg) {
        this.presentLoader = this.loadingCtrl.create({
            content: msg
        });
        this.presentLoader.present();
    };
    Home1Page.prototype.presentAlert1 = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    Home1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/home1/home1.html"*/'\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content" *ngIf="is_loaded">\n<div logo  >\n  <img src="assets/img/logo.png"/>\n  <h2>Job Manager</h2>\n  <!-- <h2>Sign in to continue</h2> -->\n</div>\n    <!-- Logo -->\n    <!--div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Job Poster</strong>\n      </h2>\n    </div-->\n\n    <!-- Login form -->\n    <form class="list-form">\n     \n	  <div form-group>\n      <label>Email Address</label>\n      <ion-item lines="none">\n		<ion-label>\n		<ion-icon name="ios-mail-outline"></ion-icon>\n		</ion-label>\n       <ion-input required placeholder="Enter Email Address" type="text" [(ngModel)]="form.email" name = "email"></ion-input>\n      </ion-item>\n     </div>\n    <div form-group>\n      <label>Password</label>\n      <ion-item lines="none">\n		<ion-label>\n		<ion-icon name="ios-lock-outline"></ion-icon>\n		</ion-label>\n       <ion-input required type="password"  placeholder="Enter Password" [(ngModel)]="form.password" name="password"></ion-input>\n      </ion-item>\n     </div>\n\n\n      <!--ion-item style = "background:none;">\n        <ion-label floating>\n          \n          Password\n        </ion-label>\n        <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n      </ion-item-->\n\n      <div class="error-message">\n               <ion-label color="danger" text-wrap>{{errorSigninMessage}}</ion-label>\n            </div>\n    </form>\n<div form-group forgot >\n<a  tappable (click)="forgotPass()" href="javascript:void(0)">Forgot Password ?</a>\n\n</div>\n    <!--p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p-->\n\n    <div login-btn>\n      <button [disabled]="disableLogin" round medium icon-start block ion-button color="secondary" tappable (click)="login(form.email,form.password)">\n        <!--ion-icon name="log-in"></ion-icon-->\n       LOGIN\n      </button>\n\n      <button round medium icon-start block ion-button color="secondary" tappable (click)="back()">\n        <!-- <ion-icon name="log-in"></ion-icon> -->\n       BACK\n      </button>\n\n	  <!--\n      <p text-center ion-text color="secondary">Or Sign in with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n      \n          <ion-col col-6>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n	  \n	  -->\n\n    </div>\n\n<div btn-signup class="ion-text-center">\n<p>Don\'t have an account ? <a tappable (click)="goToRegister()" href="javascript:void(0)">Sign Up Here</a></p>\n\n</div>\n\n<div btn-facebook > \n  <button (click)="fbLogin()" round medium icon-start block ion-button class="btn-facebook" >\n              <span fb-icon><img src="assets/img/fb.png"/></span>  Login With Facebook\n            </button>\n\n\n</div>\n    <!-- Other links -->\n    <!--div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="goToRegister()">New here? <strong>Sign up</strong></span>\n    </div-->\n\n  </div>\n  <p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="!is_loaded">Loading...</p>\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/home1/home1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_functions_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth1__["a" /* Auth1 */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service1__["a" /* Service1 */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_events_events_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]])
    ], Home1Page);
    return Home1Page;
}());

//# sourceMappingURL=home1.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__applied_info_applied_info__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__choose_edu_choose_edu__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__savedjob_savedjob__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobDetailsPage = /** @class */ (function () {
    function JobDetailsPage(admobFree, values, nativeStorage, navCtrl, navParams, service, translateService, callNumber) {
        // this.showInterstitialAds();
        // this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
        this.admobFree = admobFree;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.tech = {};
        this.is_loaded = false;
        this.clicked = true;
        // 	this.runAgain();
        //  });
        console.log(navParams.data.locations);
        this.id = navParams.data.locations.id;
        this.categoryId = navParams.data.categoryId;
        //console.log(this.getFavoriteItem());
        this.getFavoriteItem();
        //console.log(this.newClicked);
        console.log(this.id);
        console.log(this.categoryId);
    }
    JobDetailsPage.prototype.goToSavedJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__savedjob_savedjob__["a" /* SavedjobPage */]);
    };
    JobDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getJobDetails(this.id, this.categoryId).on('value', function (snapshot) {
            console.log(snapshot.val());
            _this.tech = [];
            //snapshot.forEach( snap =>{
            _this.tech.push({
                id: snapshot.key,
                address: snapshot.val().address,
                category: snapshot.val().category,
                description: snapshot.val().description,
                employer_id: snapshot.val().employer_id,
                face: snapshot.val().face,
                job_id: snapshot.val().job_id,
                localdate: snapshot.val().localdate,
                maxsalary: snapshot.val().maxsalary,
                minsalary: snapshot.val().minsalary,
                name: snapshot.val().name,
                phone: snapshot.val().phone,
                reverseOrder: snapshot.val().reverseOrder,
                timeStamp: snapshot.val().timeStamp,
                user_id: snapshot.val().user_id,
                experience: snapshot.val().experience,
            });
            //});
            console.log(_this.tech);
            _this.is_loaded = true;
        });
    };
    JobDetailsPage.prototype.applyJob = function (tech) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__choose_edu_choose_edu__["a" /* ChooseEduPage */], { jobDetails: this.tech });
        /*
        this.service.applyJob(tech).then( newJob =>{
                   
                           console.log(newJob);
                           
                           this.service.addIdToJob(newJob.key);
                           
                           this.addToJob(newJob.key);
                           
                                               
                      });
                      */
    };
    JobDetailsPage.prototype.addToJob = function (newJobKey) {
        var _this = this;
        this.service.getJobDetail(newJobKey).on('value', function (snapshot) {
            console.log('harinder singh', snapshot.val());
            //this.orderDetails = snapshot.val();
            //this.addresses = snapshot.val().addresses;
            //this.newOrderItems = [];
            // this.newOrderDetails = snapshot.val();
            //this.newOrderAddresses = snapshot.val().addresses;
            //this.newOrderItems = snapshot.val().items;
            _this.jobDetails = snapshot.val();
            _this.service.addToEmployee(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.uid, _this.jobDetails.id, _this.jobDetails, "", "", '', '', '');
            _this.service.addToWorker(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails, '', '', '', '', '');
            _this.service.addToAppliedJob(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails, '', '', '', '', '');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__applied_info_applied_info__["a" /* AppliedInfoPage */], { jobDetails: _this.jobDetails });
        });
        // this.nav.setRoot(MyorderPage);	
    };
    JobDetailsPage.prototype.getFavoriteItem = function () {
        var _this = this;
        this.service.getClickedInfo(this.id).on('value', function (snapshot) {
            //this.params.data.items = snapshot.val();
            if (snapshot.val() == null) {
                _this.clicked = false;
                console.log(_this.clicked);
            }
            else {
                console.log(snapshot.val());
                _this.clicked = true;
                console.log(_this.clicked);
            }
        });
        console.log(this.clicked);
    };
    JobDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobDetailsPage');
    };
    JobDetailsPage.prototype.call = function (data) {
        console.log(data);
        this.callNumber.callNumber(data, true)
            .then(function () { })
            .catch(function () { });
    };
    JobDetailsPage.prototype.showInterstitialAds = function () {
        var interstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-3940256099942544/8691691433"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(function () {
        }).catch(function (e) {
        });
    };
    JobDetailsPage.prototype.runAgain = function () {
        var _this = this;
        setTimeout(function () {
            _this.showInterstitialAds();
        }, 180000);
    };
    JobDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-details',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/job-details/job-details.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <ion-title>Job Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<div jobinfo *ngIf="is_loaded">\n<div jobimg>\n <!-- <ion-badge>${{tech[0]?.minsalary}} - ${{tech[0]?.maxsalary}}</ion-badge>  -->\n</div>\n<div userimg>\n<img src="{{tech[0]?.face}}"/>\n</div>\n<h2>{{tech[0]?.name}}</h2>\n<p address><img src="assets/img/building.png"/><span>{{tech[0]?.address}}</span></p>\n<p briefcase><img src="assets/img/briefcase.png"/><span>Experience: {{tech[0]?.experience}}</span></p>\n</div>\n\n<div class="btn-bottom">\n  \n	<button ion-button block round  color="secondary" (click)="applyJob(tech[0])" item-end *ngIf = "!clicked">Apply Job</button>\n\n\n  </div> \n\n\n\n<div jobdetail  *ngIf="is_loaded">\n	<div joblist>\n	   <h2 heading>Job Info</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Job Name</h2> \n			  <p>{{tech[0]?.name}} </p>			\n			</ion-item>\n			<ion-item>\n		\n			<ion-icon item-start name="ios-pin-outline"></ion-icon> 			\n			  <h2>Location</h2> \n			  <p>{{tech[0]?.address}}</p>			\n			</ion-item>\n			\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-call-outline"></ion-icon> 			\n			  <h2>Phone No</h2> \n			  <p>{{tech[0]?.phone}}</p>			\n			</ion-item> -->\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Salary</h2> \n			  <p>${{tech[0]?.minsalary}} - ${{tech[0]?.maxsalary}}</p>			\n			</ion-item> -->\n			<ion-item>\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Posted Date</h2> \n			  <p>{{tech[0]?.timeStamp | date}}</p>			\n			</ion-item>\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Expiry  Date</h2> \n			  <p>{{tech[0]?.localdate}}</p>			\n			</ion-item> -->\n	</div>\n<div joblist>\n<h2 heading>\n Job Description\n</h2>\n<p>{{tech[0]?.description}}</p>\n</div>\n<div class="btn-bottom">\n  \n  <button ion-button block round  color="secondary" *ngIf = "clicked == true" item-end >You have already sent resume.</button>\n  <button ion-button block round color="secondary" (click)="goToSavedJob()" outline>Saved Job</button>  \n</div>  \n</div>\n\n<!--ion-card>\n  <img src="{{tech[0].face}}"/>\n  <ion-card-content style = "background-color : #DCF7C2;">\n    <ion-card-title>\n	<ion-badge>\n      <h2>{{tech[0].name}}</h2>\n	  </ion-badge>\n	\n	  <ion-icon icon-big item-right *ngIf = "clicked == true" name="chatbubbles" color = "primary" (click)="chat(group)" style="position:relative; font-size:2em;float:right;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:10px !important"></span>\n						</ion-icon>	\n						\n						<ion-icon icon-big item-right name="chatbubbles" color = "primary" (click)="chat(group)" style="position:relative; font-size:1.5em;float:right;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:10px !important"></span>\n						</ion-icon>	\n						\n						 <ion-icon icon-big item-right name="call" color = "primary" (click)="call(tech[0].phone)" style="position:relative; font-size:1.5em;float:right;padding-right:5px;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:10px !important"></span>\n						</ion-icon>\n      </ion-card-title>\n	 <div style = "width:100%;height:50px;">\n      {{tech[0].description}}\n    </div>\n	\n	<p><b>Address: {{tech[0].address}}</b></p>\n	<p><b>Phone: {{tech[0].phone}}</b></p>\n	\n	<p><b>Min Salary: {{tech[0].minsalary}}</b></p>\n	<p><b>Max Salary: {{tech[0].maxsalary}}</b></p>\n	\n	  \n	\n	\n	<p><b>Posted: {{tech[0].timeStamp | date}}</b></p>\n	<p><b>Expires: {{tech[0].localdate}}</b></p>\n	\n  </ion-card-content>\n</ion-card-->\n<p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="!is_loaded">Loading...</p>\n</ion-content>\n \n '/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/job-details/job-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], JobDetailsPage);
    return JobDetailsPage;
}());

//# sourceMappingURL=job-details.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEducationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__education_list_education_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EditEducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditEducationPage = /** @class */ (function () {
    function EditEducationPage(nav, navParam, service, translateService) {
        var _this = this;
        this.nav = nav;
        this.navParam = navParam;
        this.service = service;
        this.translateService = translateService;
        this.errors = ['', null, undefined, ' '];
        this.params = {};
        this.address = navParam.data.address;
        console.log(navParam.data.address);
        this.form = {};
        this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser;
        console.log(this.currentUser);
        //this.customer = params.data;
        this.customer = [];
        this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', function (snapshot) {
            _this.customer.displayName = snapshot.val().displayName;
            _this.customer.email = snapshot.val().email;
            _this.customer.europeResult = snapshot.val().europeResult;
            _this.customer.birthday = snapshot.val().birthday;
        });
        this.service.getRestaurantsList().on('value', function (snapshot) {
            _this.restaurantName = [];
            snapshot.forEach(function (snap) {
                _this.restaurantName.push({
                    id: snap.key,
                    name: snap.val().title,
                });
            });
        });
        this.service.getWorkedYear().on('value', function (snapshot) {
            _this.workedYear = [];
            snapshot.forEach(function (snap) {
                _this.workedYear.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getFinishedYear().on('value', function (snapshot) {
            _this.finishedYear = [];
            snapshot.forEach(function (snap) {
                _this.finishedYear.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getStartedYear().on('value', function (snapshot) {
            _this.startedYear = [];
            snapshot.forEach(function (snap) {
                _this.startedYear.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getJobCategoryName().on('value', function (snapshot) {
            _this.jobCategoryName = [];
            snapshot.forEach(function (snap) {
                _this.jobCategoryName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getEducationName().on('value', function (snapshot) {
            _this.educationName = [];
            snapshot.forEach(function (snap) {
                _this.educationName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getCityName().on('value', function (snapshot) {
            _this.cityName = [];
            snapshot.forEach(function (snap) {
                _this.cityName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getCityDistrictName().on('value', function (snapshot) {
            _this.cityDistrictName = [];
            snapshot.forEach(function (snap) {
                _this.cityDistrictName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getStreetName().on('value', function (snapshot) {
            _this.streetName = [];
            snapshot.forEach(function (snap) {
                _this.streetName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getApartmentOfficeName().on('value', function (snapshot) {
            _this.apartmentOfficeName = [];
            snapshot.forEach(function (snap) {
                _this.apartmentOfficeName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
    }
    EditEducationPage.prototype.updateEducation = function (id, address, customer) {
        var _this = this;
        if (this.validate()) {
            this.service.updateEducation(id, address, customer)
                .then(function () {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__education_list_education_list__["a" /* EducationListPage */]);
            });
        }
    };
    EditEducationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditAddressPage');
    };
    EditEducationPage.prototype.validate = function () {
        if (this.errors.indexOf(this.address.jobcategory) >= 0) {
            this.errorMessage = 'Please select job category';
            return false;
        }
        if (this.errors.indexOf(this.address.education) >= 0) {
            this.errorMessage = 'Please select education';
            return false;
        }
        if (this.errors.indexOf(this.address.started) >= 0) {
            this.errorMessage = 'Please select started year';
            return false;
        }
        if (this.errors.indexOf(this.address.finished) >= 0) {
            this.errorMessage = 'Please select finished year';
            return false;
        }
        if (this.errors.indexOf(this.address.worked) >= 0) {
            this.errorMessage = 'Please select worked years';
            return false;
        }
        if (this.errors.indexOf(this.address.minimum) >= 0) {
            this.errorMessage = 'Please select minimum salary';
            return false;
        }
        if (this.errors.indexOf(this.address.maximum) >= 0) {
            this.errorMessage = 'Please select maximum salary';
            return false;
        }
        return true;
    };
    EditEducationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-education',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/edit-education/edit-education.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <ion-title>Edit Education</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ng-container *ngIf="address">\n\n	        <div form-group>\n               <label>Education ID</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-pricetags-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{address.id}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n			  <div form-group>\n               <label>Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.displayName}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n            <div form-group>\n               <label>Email</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.email}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n			 <div form-group>\n               <label>Gender</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.europeResult}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n			 <div form-group>\n               <label>Birthday</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-calendar-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.birthday}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n			\n			<div form-group>\n			<label>Job Category </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-pricetags-outline"></ion-icon>\n			</ion-label>\n		       <ion-select [(ngModel)]="address.jobcategory"  name="jobcategory" placeholder="Select">\n               <!-- <ion-option *ngFor="let item of jobCategoryName" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="System Analysists">System Analysists</ion-option> \n               <ion-option value="Accounting">Accounting</ion-option> \n               <ion-option value="It Engineer">It Engineer</ion-option> \n\n               </ion-select>\n			</ion-item>\n			</div>\n      <div form-group>\n			<label>Education </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-document-outline"></ion-icon>\n			</ion-label>\n		    <ion-select [(ngModel)]="address.education"  name="education" placeholder="Select Your Education">\n               <!-- <ion-option *ngFor="let item of educationName" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="Bachelor">Bachelor</ion-option> \n               <ion-option value="Masters">Masters</ion-option> \n               <ion-option value="Doctors">Doctors</ion-option> \n               </ion-select>\n			</ion-item>\n			</div>\n			 <div form-group>\n			<label>University Started </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-calendar-outline"></ion-icon>\n			</ion-label>\n		   <ion-select [(ngModel)]="address.started"  name="started" placeholder="Select">\n               <!-- <ion-option *ngFor="let item of startedYear" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="2014">2014</ion-option> \n               <ion-option value="2015">2015</ion-option> \n               <ion-option value="2016">2016</ion-option> \n               <ion-option value="2017">2017</ion-option> \n               <ion-option value="2018">2018</ion-option> \n               <ion-option value="2019">2019</ion-option> \n               </ion-select>\n			</ion-item>\n			</div>\n        <div form-group>\n			<label>University Finished </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-calendar-outline"></ion-icon>\n			</ion-label>\n		   <ion-select [(ngModel)]="address.finished"  name="finished"  placeholder="Select">\n               <!-- <ion-option *ngFor="let item of finishedYear" value="{{item.name}}">{{item.name}}</ion-option> -->\n             \n               <ion-option value="2017">2017</ion-option> \n               <ion-option value="2018">2018</ion-option> \n               <ion-option value="2019">2019</ion-option> \n               </ion-select>\n			</ion-item>\n			</div>\n			 <div form-group>\n			<label>Worked Year</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-briefcase-outline"></ion-icon>\n			</ion-label>\n		    <ion-select [(ngModel)]="address.worked"  name="worked" placeholder="Select">\n               <!-- <ion-option *ngFor="let item of workedYear" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="4">4 years</ion-option> \n               <ion-option value="5">5 years</ion-option> \n               <ion-option value="7">7 years</ion-option> \n             \n               </ion-select>\n			</ion-item>\n			</div>\n			\n			 <div form-group>\n			<label>Minimum Salary In $</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-cash-outline"></ion-icon>\n			</ion-label>\n		    <ion-input type="text" [(ngModel)]="address.minimum" name="minimum" ></ion-input>\n			</ion-item>\n			</div>\n			<div form-group>\n			<label>Maximum Salary In $</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-cash-outline"></ion-icon>\n			</ion-label>\n		    <ion-input type="text" [(ngModel)]="address.maximum" name="maximum" ></ion-input>\n			</ion-item>\n			</div>\n			 <div class="error-message">\n           <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n       </div>\n<button round ion-button btnsubmit text-uppercase block color="secondary" [disabled]="disableSubmit" (click)="updateEducation(address.id,address,customer)">{{"Save" | translate}}</button>\n</ng-container>\n<!--div *ngIf="address" >\n\n\n        <ion-item style = "background-color : #98EA69;">\n			  <p ><b>Education ID: {{address.id}}</b></p>\n			 \n         </ion-item>\n\n	  <ion-item style = "background-color : #98EA69;">\n			  <p ><b>Customer name: {{customer.displayName}}</b></p>\n			 \n         </ion-item>\n         <ion-item style = "background-color : #98EA69;">\n		 <p ><b>Customer email: {{customer.email}}</b></p>\n		\n         </ion-item>\n		 \n		  <ion-item style = "background-color : #98EA69;">\n		 <p ><b>Gender: {{customer.europeResult}}</b></p>\n	\n         </ion-item>\n		 \n		   <ion-item style = "background-color : #98EA69;">\n		 <p ><b>Birthday: {{customer.birthday}}</b></p>\n	\n         </ion-item>\n   \n          <ion-list style = "margin:15px 5px 5px 5px;">\n            <p style = "color:red;">Job Category: {{address.jobcategory}}</p>\n		   <ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>{{address.jobcategory}}</ion-label>\n               <ion-select [(ngModel)]="address.jobcategory"  name="jobcategory">\n               <ion-option *ngFor="let item of jobCategoryName" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<p  style = "color:red;">Education: {{address.education}}</p>\n			<ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>{{address.education}}</ion-label>\n               <ion-select [(ngModel)]="address.education"  name="education">\n               <ion-option *ngFor="let item of educationName" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<p  style = "color:red;">University Started: {{address.started}}</p>\n			<ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>{{address.started}}</ion-label>\n               <ion-select [(ngModel)]="address.started"  name="started">\n               <ion-option *ngFor="let item of startedYear" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<p  style = "color:red;">University Finished: {{address.finished}}</p>\n			<ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>{{address.finished}}</ion-label>\n               <ion-select [(ngModel)]="address.finished"  name="finished">\n               <ion-option *ngFor="let item of finishedYear" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n				<p  style = "color:red;">Worked Year {{address.worked}}</p>\n			<ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>{{address.worked}}</ion-label>\n               <ion-select [(ngModel)]="address.worked"  name="worked">\n               <ion-option *ngFor="let item of workedYear" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			\n			<ion-item >\n            <ion-label  style = "color:red;">Minimum salary: </ion-label>\n            <ion-input type="text" [(ngModel)]="address.minimum" name="minimum" ></ion-input>\n         </ion-item>\n		 \n		 \n		 \n         <ion-item  >\n            <ion-label  style = "color:red;" >Maximum salary: </ion-label>\n            <ion-input type="text" [(ngModel)]="address.maximum" name="maximum" ></ion-input>\n         </ion-item>\n			\n			\n	\n      </ion-list>\n       <div class="error-message">\n           <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n       </div>\n      <button ion-button no-margin item-right full color="shadow" [disabled]="disableSubmit" (click)="updateEducation(address.id,address,customer)">{{"Save" | translate}}</button>\n   </div-->\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/edit-education/edit-education.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], EditEducationPage);
    return EditEducationPage;
}());

//# sourceMappingURL=edit-education.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, funtions, params, service, admobFree) {
        this.navCtrl = navCtrl;
        this.funtions = funtions;
        this.params = params;
        this.service = service;
        this.admobFree = admobFree;
        this.errors = ['', null, undefined, ' '];
        this.chat = [];
        this.fromId = params.data.fromId;
        this.roomId = params.data.roomId;
        this.user_id = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        console.log('chat page fromId id', this.user_id);
        if (this.roomId != 0) {
            this.getChat(this.user_id);
        }
        this.getOtherUserProfile();
        console.log(this.genRandromid());
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        this.runAd();
    };
    ChatPage.prototype.genRandromid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var self = this;
        setTimeout(function () {
            console.log(self.content);
            if (self.content._scroll != null) {
                self.content.scrollToBottom(300);
            }
        }, 100);
    };
    ChatPage.prototype.getChat = function (user_id) {
        var _this = this;
        this.loader = true;
        this.service.getChat(this.roomId).on('value', function (snapshot) {
            _this.chat = [];
            // console.log('messages',snapshot.val());
            snapshot.forEach(function (snap) {
                _this.chat.push(snap.val());
                _this.loader = false;
            });
        });
    };
    ChatPage.prototype.getOtherUserProfile = function () {
        var _this = this;
        this.service.getUserProfile(this.fromId).on('value', function (u_snapshot) {
            console.log(u_snapshot.val());
            _this.speakerFname = u_snapshot.val().displayName;
            _this.speakerLname = u_snapshot.val().lastName,
                _this.speakerImage = u_snapshot.val().photoURL;
        });
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        if (this.errors.indexOf(this.message) == -1) {
            if (this.roomId != 0) {
                this.service.addToChat(this.fromId, this.user_id, this.roomId, this.message);
                this.scrollToBottom();
                this.message = '';
            }
            else {
                this.roomId = this.genRandromid();
                setTimeout(function () {
                    _this.service.addToChat(_this.fromId, _this.user_id, _this.roomId, _this.message).then(function () {
                        _this.getChat(_this.user_id);
                        _this.scrollToBottom();
                        _this.message = '';
                    });
                }, 500);
            }
        }
    };
    ChatPage.prototype.showInterstitialAds = function () {
        var _this = this;
        this.funtions.presentLoading();
        var interstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-3940256099942544/8691691433"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(function () {
            setTimeout(function () {
                _this.funtions.stopLoading();
            }, 10000);
        }).catch(function (e) {
            _this.funtions.stopLoading();
        });
    };
    ChatPage.prototype.runAd = function () {
        this.showInterstitialAds();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-item>\n	    <ion-avatar item-start>\n       <!-- <img src="{{speakerImage}}" *ngIf="errors.indexOf(speakerImage)==-1"/>\n       <img src="assets/img/100_1.jpg"  *ngIf="errors.indexOf(speakerImage)>=0"/> -->\n\n       <img src="{{speakerImage}}" *ngIf="errors.indexOf(speakerImage)==-1"/>\n       <img src="assets/images/person.png"  *ngIf="errors.indexOf(speakerImage)>=0"/>\n\n\n		   <span></span>\n	    </ion-avatar>\n		<h2>{{speakerFname}}</h2>\n	</ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding #content>\n\n  <ng-container *ngIf="!loader">\n\n     <span *ngFor="let item of chat">\n\n      <div receiver *ngIf="item.toId==user_id">\n        <div textcontent>\n          <p>\n          {{item.message}}\n        </p>\n        </div>\n          <ion-note>{{item.date  | timeAgo}}\n          </ion-note>\n        </div>\n      \n      \n         <div sender  *ngIf="item.fromId==user_id">\n         <div textcontent>\n          <p>\n            {{item.message}}\n        </p>\n        </div>\n          <ion-note>{{item.date  | timeAgo}}\n          </ion-note>\n        </div>\n  \n    </span>\n    </ng-container>\n\n\n  <!-- <ng-container *ngIf="loader">\n    <h5 class="loader">Loading...</h5>\n  </ng-container> -->\n\n  <p style="width: 100%; text-align: center; margin-top: 48%;color:lightgrey" *ngIf="loader">Loading...</p>\n\n</ion-content>\n<ion-footer>\n<ion-item>\n<ion-input placeholder="Type a message" [(ngModel)]="message"></ion-input>\n<button item-end color="primary"  ion-button (click)="sendMessage()"> \n<ion-icon name="ios-send"></ion-icon> \n</button>\n</ion-item>\n</ion-footer>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_details_job_details__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SavedjobPage = /** @class */ (function () {
    function SavedjobPage(values, nativeStorage, navCtrl, navParams, service, translateService, callNumber) {
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.selectedItem = 'item1';
        //public locations:any;
        this.responseCame = false;
        this.savedIds = [];
        this.allIds = [];
        this.locations = {};
        this.id = 'all';
        console.log(this.id);
        this.locations = [];
        this.initializeItems();
    }
    SavedjobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobListPage');
    };
    SavedjobPage.prototype.goToNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SavedjobPage.prototype.goToJobDetails = function (locations) {
        console.log(this.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__job_details_job_details__["a" /* JobDetailsPage */], { locations: locations, categoryId: this.id });
    };
    SavedjobPage.prototype.initializeItems = function () {
        var _this = this;
        this.responseCame = false;
        this.service.getSavedJobs().on('value', function (snapshot1) {
            console.log('running');
            _this.allIds = [];
            _this.locations = [];
            snapshot1.forEach(function (snap1) {
                _this.allIds.push({
                    jobId: snap1.val().jobId,
                    id: snap1.val().id,
                    snapKey: snap1.key,
                });
                console.log(snap1.val().jobId);
                _this.service.getSingleSavedJob(snap1.val().jobId, snap1.val().user_id).on('value', function (snap) {
                    _this.locations.push({
                        id: snap.key,
                        address: snap.val().address,
                        category: snap.val().category,
                        description: snap.val().description,
                        employer_id: snap.val().employer_id,
                        face: snap.val().face,
                        job_id: snap.val().job_id,
                        localdate: snap.val().localdate,
                        maxsalary: snap.val().maxsalary,
                        minsalary: snap.val().minsalary,
                        name: snap.val().name,
                        phone: snap.val().phone,
                        reverseOrder: snap.val().reverseOrder,
                        timeStamp: snap.val().timeStamp,
                        user_id: snap.val().user_id,
                        experience: snap.val().experience
                    });
                });
            });
            _this.responseCame = true;
        });
    };
    SavedjobPage.prototype.searchItem = function (ev) {
        this.initializeItems();
        console.log(ev);
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.locations = this.locations.filter(function (data) {
                console.log(data);
                return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SavedjobPage.prototype.unsaveJob = function (jobId) {
        console.log(this.allIds);
        console.log(jobId);
        var id;
        var snapKey;
        for (var _i = 0, _a = this.allIds; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.jobId == jobId) {
                id = key.id;
                snapKey = key.snapKey;
                this.service.removeSavedJobs(id, snapKey);
                if (this.allIds.length == 0) {
                    this.locations = [];
                }
                break;
            }
        }
    };
    SavedjobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-savedjob',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/savedjob/savedjob.html"*/'<ion-header>\n	<ion-navbar color="primary" text-center>\n	<button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	  </button>  \n	  <ion-title>Saved Jobs</ion-title>\n	</ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n<div class="search">\n <ion-searchbar (ionInput)="searchItem($event)" placeholder="Search jobs here...">\n    </ion-searchbar>\n</div>\n  <ion-row  hometop>\n	  <ion-col class="p-0" col-8>\n	  <h2 heading>\n	 Saved Jobs\n	  </h2>\n	  </ion-col>\n \n   </ion-row>\n<ion-list listview [ngClass]="{\'active\': selectedItem === \'item1\'}" style="display:none">\n   <ion-item  *ngFor="let location of locations">\n      <ion-thumbnail item-start>\n		  <img src="{{location.face}}">\n		  \n		  <span heart (click)="unsaveJob(location.job_id)"><ion-icon name="ios-heart" style="color: red;"></ion-icon></span>\n\n      </ion-thumbnail>\n      <h2 (click)="goToJobDetails(location)">{{location.name}}</h2>\n	  <p address><img src="assets/img/building.png"/><span>{{location.address}}</span></p>\n		<p briefcase><img src="assets/img/briefcase.png"/><span>Experience: {{location.experience}}</span></p>\n		<ion-row salary-apply>\n		 <ion-col  col-12>\n		   <ion-badge>${{location.minsalary}} - ${{location.maxsalary}}\n		   </ion-badge>\n		 </ion-col>\n		  \n		</ion-row>\n    </ion-item>\n\n \n</ion-list>\n<ion-list gridview [ngClass]="{\'active\': selectedItem === \'item2\'}" style="display:none">\n   <div googlmap>\n   <img src="assets/img/map.jpg"/>\n   \n   </div>\n  </ion-list>\n\n  <p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="responseCame && locations.length==0">No data found</p>\n</ion-content>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/savedjob/savedjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], SavedjobPage);
    return SavedjobPage;
}());

//# sourceMappingURL=savedjob.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs1_tabs1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AddJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddJobPage = /** @class */ (function () {
    function AddJobPage(nav, navParams, datePicker, alertCtrl, toastCtrl, service, translateService, functions, ChangeDetectorRef) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.translateService = translateService;
        this.functions = functions;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.imageLink = 'https://i.ibb.co/fQ1qN5x/download-1.jpg';
        this.disableSubmit = false;
        this.errors = ['', null, undefined];
        this.submitText = 'Submit';
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 30));
        this.min = new Date();
        this.userSettings = {};
        this.initDate3 = new Date();
        this.finishDate = new Date();
        this.form = {};
        this.service = service;
        this.userSettings['inputPlaceholderText'] = 'Location';
        this.userSettings['showSearchButton'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
        this.service.getCategoryName().on('value', function (snapshot) {
            _this.getCategoryName = [];
            snapshot.forEach(function (snap) {
                _this.getCategoryName.push({
                    id: snap.key,
                    name: snap.val().name,
                    face: snap.val().face,
                });
            });
            console.log(_this.getCategoryName);
        });
        this.service.getMinSalary().on('value', function (snapshot) {
            _this.getMinSalary = [];
            snapshot.forEach(function (snap) {
                _this.getMinSalary.push({
                    id: snap.key,
                    name: snap.val().name,
                });
            });
        });
        this.service.getMaxSalary().on('value', function (snapshot) {
            _this.getMaxSalary = [];
            snapshot.forEach(function (snap) {
                _this.getMaxSalary.push({
                    id: snap.key,
                    name: snap.val().name,
                });
            });
        });
        this.service.getAddressList().on('value', function (snapshot) {
            _this.addressList = [];
            snapshot.forEach(function (snap) {
                _this.addressList.push({
                    id: snap.key,
                    name: snap.val().name,
                });
            });
        });
        setTimeout(function () {
            var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
            var iso = currentDate.toISOString();
            _this.minDate = iso;
            _this.form.jobRequiredOn = iso;
            _this.ChangeDetectorRef.detectChanges();
        }, 1000);
    }
    AddJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddJobPage');
    };
    AddJobPage.prototype.autoCompleteCallback = function (data) {
        console.log(data.data.formatted_address);
        this.lat = data.data.geometry.location.lat;
        this.lng = data.data.geometry.location.lng;
        this.form.address = data.data.formatted_address;
    };
    AddJobPage.prototype.addCategry = function () {
        // var newDate =  new Date(this.form.jobRequiredOn);
        // var updatedDate = new Date(newDate.getTime() - 24 * 60 * 60 * 1000)
        // console.log(updatedDate);
        var _this = this;
        // return;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.submitText = 'Processing...';
            // var datestring = this.date.getFullYear() + "-" + (this.date.getMonth()+1) + "-" + this.date.getDate();
            // console.log(datestring);
            /**
                this.service.addCat(this.form.name, this.form.address, this.downloadURL,this.form.phone, this.form.start,
                this.form.finish,this.form.poster,this.form.minsalary,this.form.maxsalary,this.form.description,this.form.category,datestring)
              .then(() => {
               // this.nav.pop();
                 this.nav.push(ListPage);
              });
              */
            this.service.addCat2(this.form.name, this.form.address, this.imageLink, '9876543210', this.form.poster, '1000', '2000', this.form.description, 'all', 'datestring', this.form.company, this.form.email, 'yes', '100', this.form.experience == 1 ? this.form.experience + ' Year' : this.form.experience + ' Years', 'engineering', this.lat, this.lng, this.errors.indexOf(this.form.shortTermJob) >= 0 ? false : true, new Date().toISOString(), this.form.jobRequiredOn)
                .then(function () {
                // this.nav.pop();     
                _this.disableSubmit = false;
                _this.submitText = 'Submit';
                _this.functions.showAlert('Success', 'Your Job has been added Successfully');
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__tabs1_tabs1__["a" /* Tabs1Page */]);
            });
        }
    };
    AddJobPage.prototype.onChange = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        this.disableSubmit = true;
        this.upLoadImg();
    };
    AddJobPage.prototype.validateForm = function () {
        if (this.form.company == undefined || this.form.company == "") {
            this.errorMessage = "Please enter company name";
            return false;
        }
        if (this.form.poster == undefined || this.form.poster == "") {
            this.errorMessage = "Please enter name";
            return false;
        }
        if (this.form.email == undefined || this.form.email == "") {
            this.errorMessage = "Please enter email";
            return false;
        }
        // if(this.form.phone == undefined || this.form.phone == ""){
        //  this.errorMessage = "Please enter phone number"; 
        //     return false;
        // }
        // if(this.form.is_recruiter == undefined || this.form.is_recruiter == ""){
        //  this.errorMessage = "Please select are you a recruiter"; 
        //     return false;
        // }
        // if(this.form.company_size == undefined || this.form.company_size == ""){
        //  this.errorMessage = "Please select company size"; 
        //     return false;
        // }
        if (this.form.name == undefined || this.form.name == "") {
            this.errorMessage = "Please enter job title";
            return false;
        }
        if (this.form.address == undefined || this.form.address == "") {
            this.errorMessage = "Please select location";
            return false;
        }
        if (this.form.experience == undefined || this.form.experience == "") {
            this.errorMessage = "Please enter experience";
            return false;
        }
        // if(this.form.minsalary == undefined || this.form.minsalary == ""){
        //    this.errorMessage = "Please select min salary"; 
        //       return false;
        //   }
        // if(this.form.maxsalary == undefined || this.form.maxsalary == ""){
        //    this.errorMessage = "Please select max salary"; 
        //       return false;
        //   }
        // if(this.date == undefined || this.date == ""){
        //  this.errorMessage = "Please select finish date"; 
        //     return false;
        // }
        // if(this.form.qualification == undefined || this.form.qualification == ""){
        //  this.errorMessage = "Please select qualification"; 
        //     return false;
        // }
        if (this.form.description == undefined || this.form.description == "") {
            this.errorMessage = "Please enter description";
            return false;
        }
        // if(this.form.category == undefined || this.form.category == ""){
        //     this.errorMessage = "Please Add  Category"; 
        //        return false;
        //    }
        // if( this.downloadURL == undefined ||  this.downloadURL == ""){
        //   this.errorMessage = "Please select image"; 
        //   return false;
        // }
        return true;
    };
    AddJobPage.prototype.upLoadImg = function () {
        var _this = this;
        // Create a root reference
        var fileName = this.selectedFile.name;
        var metadata = { contentType: 'image/jpeg' };
        var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('/images/' + fileName);
        var uploadTask = storageRef.put(this.selectedFile, metadata);
        uploadTask.on('state_changed', function (snapshot) {
            console.log(snapshot);
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (uploadTask.snapshot.state) {
                case __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"].TaskState.PAUSED:// or 'paused'
                    console.log('Upload is paused');
                    break;
                case __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"].TaskState.RUNNING:// or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            _this.downloadURL = uploadTask.snapshot.downloadURL;
            _this.imageLink = _this.downloadURL;
            _this.disableSubmit = false;
            console.log(_this.downloadURL);
            console.log("successful");
        });
    };
    AddJobPage.prototype.ngOnInit = function () {
        // this.datePicker.show({
        //   date: new Date(),
        //      mode: 'date',
        //       androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        //   });
    };
    AddJobPage.prototype.makeTableOrder = function () {
        if (this.time && this.date && (this.person != undefined)) {
            this.bookingInformation = {
                userID: this.uid,
                status: 'Pending',
                time: this.time,
                person: this.person,
            };
            this.validateInformation();
            //this.validateInformationAdmin();
        }
        else {
            this.presentToast('Please fill all data.');
        }
    };
    //    public closeDatepicker(){
    //    this.datepickerDirective.dismiss();
    // }
    AddJobPage.prototype.Log = function (stuff) {
        console.log(stuff);
    };
    AddJobPage.prototype.event = function (data) {
        this.localDate = data;
    };
    AddJobPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
        this.date = date;
        console.log(this.date);
    };
    AddJobPage.prototype.validateInformation = function () {
        var _this = this;
        console.log(this.date);
        var datestring = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
        console.log(datestring);
        this.service.addNewTableOrders(this.bookingInformation, this.restaurantInformation, datestring).then(function (tableOrder) {
            // this.nav.setRoot('OrderList');     
            //  this.presentToast('Your table booked successfully!');
            //this.navCtrl.pop();		
            console.log(tableOrder);
            _this.validateInformationAdmin(tableOrder.key);
        });
    };
    AddJobPage.prototype.validateInformationAdmin = function (sameKey) {
        var _this = this;
        console.log(this.date);
        var datestring = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
        console.log(datestring);
        this.service.addNewTableAdminOrders(this.bookingInformation, this.restaurantInformation, datestring, sameKey).then(function () {
            // this.nav.setRoot('OrderList');     
            _this.presentToast('Your job posted successfully!');
            _this.nav.pop();
        });
    };
    AddJobPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AddJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-job',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/add-job/add-job.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  <button ion-button menuToggle> \n     <ion-icon name="menu"></ion-icon>\n   </button>\n   <ion-title>Post Job</ion-title>\n </ion-navbar>\n</ion-header>\n<ion-content padding>\n<!-- <ng-adsense\n			[adClient]="\'ca-pub-8514227015105788\'"\n			[display]="\'inline-block\'"\n			[width]="100"\n			[height]="100"\n			></ng-adsense> -->\n     <form #f="ngForm">\n        <ion-list>\n\n   <div form-group>\n      <label>Short Term Job</label>\n      <ion-item>\n      <ion-label>\n      <ion-icon name="ios-time-outline" ></ion-icon>\n      </ion-label>\n      <ion-toggle [(ngModel)]="form.shortTermJob" name="shortTermJob" ></ion-toggle>\n      </ion-item>\n   </div>\n\n   <div form-group *ngIf="form.shortTermJob">\n      <label>Date of requirement</label>\n      <ion-item>\n      <ion-label>\n      <ion-icon name="ios-calendar-outline" ></ion-icon>\n      </ion-label>\n      <ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="form.jobRequiredOn" name="something" [min] = "minDate"></ion-datetime>\n      </ion-item>\n   </div>\n\n\n   <div form-group>\n   <label>Company Name</label>\n   <ion-item>\n   <ion-label>\n   <ion-icon name="ios-briefcase-outline"></ion-icon>\n   </ion-label>\n   <ion-input type="text" [(ngModel)]="form.company" name="company" placeholder="Enter Company Name" value=""></ion-input>\n   </ion-item>\n   </div>\n\n\n   <div form-group>\n   <label>Name</label>\n   <ion-item>\n   <ion-label>\n   <ion-icon name="ios-person-outline"></ion-icon>\n   </ion-label>\n     <ion-input  placeholder="Enter Name"  required type="text" [(ngModel)]="form.poster" name="options"></ion-input>\n   </ion-item>\n   </div>\n\n\n   <div form-group>\n   <label>Email</label>\n   <ion-item>\n   <ion-label>\n   <ion-icon name="ios-mail-outline"></ion-icon>\n   </ion-label>\n     <ion-input [(ngModel)]="form.email" name="email" placeholder="Enter Email"  value="" type="email"  name="options"></ion-input>\n   </ion-item>\n   </div>\n\n\n   <!-- <div form-group>\n   <label>Phone Number</label>\n   <ion-item>\n   <ion-label>\n   <ion-icon name="ios-call-outline"></ion-icon>\n   </ion-label>\n      <ion-input required placeholder="Enter Phone Number" type="text" [(ngModel)]="form.phone" name="phone"></ion-input>\n   </ion-item>\n   </div> -->\n   <!-- <div form-group>\n<label>Are You a Recruiter </label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="form.is_recruiter" name="is_recruiter" placeholder="Select">\n        <ion-option value="yes"> Yes </ion-option>\n        <ion-option value="no">  No </ion-option>\n       </ion-select>\n</ion-item>\n</div> -->\n<!-- <div form-group>\n<label>Company Size</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="form.company_size" name="company_size" placeholder="Select Company Size">\n        <ion-option value="1-15"> 1 - 15 </ion-option>\n        <ion-option value="16-50"> 16 - 50 </ion-option>\n        <ion-option value="51-100"> 51 - 100 </ion-option>\n       </ion-select>\n</ion-item>\n</div> -->\n\n<div form-group>\n<label>Job Title</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n <ion-input placeholder="Enter Job Title" required type="text" [(ngModel)]="form.name" name="name"></ion-input>\n</ion-item>\n</div>\n<div form-group>\n<label>Location</label>\n<!-- <ion-item>\n\n<ion-select [(ngModel)]="form.address"  name="address" placeholder="Select">\n              <ion-option *ngFor="let item of addressList" value="{{item.name}}">{{item.name}}</ion-option>\n              </ion-select> \n              \n</ion-item> -->\n<div class="locat-box">\n<ion-label>\n<ion-icon name="ios-pin-outline"></ion-icon>\n</ion-label>\n<ngxgeo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback($event)"></ngxgeo-autocomplete>\n</div>\n</div>\n<div form-group>\n<label>Experience Required</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-input type="number" [(ngModel)]="form.experience" name="experience"  placeholder="Enter Experience in years"></ion-input>\n</ion-item>\n</div>\n<!-- <div form-group>\n<label>Min Salary</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-cash-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="form.minsalary"  name="minsalary" placeholder="Select">\n              <ion-option *ngFor="let item of getMinSalary" value="{{item.name}}">{{item.name}}</ion-option>\n</ion-select>	\n</ion-item>\n</div>\n<div form-group>\n<label>Max Salary</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-cash-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="form.maxsalary"  name="maxsalary" placeholder="Select">\n              <ion-option *ngFor="let item of getMaxSalary" value="{{item.name}}">{{item.name}}</ion-option>\n</ion-select>			\n</ion-item>\n</div> -->\n<!-- <div form-group>\n<label>Choose Finish Date</label>\n<ion-item heightauto>\n       \n        <span ion-datepicker (ionChanged)="setDate($event);" [value]="localDate" [min]="localDate" clear class="ScheduleDate">\n         <button ion-button full type="button" color="secondary" round class="book-button" style = "margin-bottom:10px"><span>Choose Finish Date</span></button>\n     </span>\n \n \n <div *ngIf = "localdate">\n \n <span>LocalDate: {{form.localDate | date}}</span>\n \n </div>\n \n <div *ngIf = "date">\n   \n \n   <h3>Selected Date: {{date | date}}</h3>\n   \n </div>\n</ion-item>\n</div> -->\n<!-- <div form-group>\n<label>Qualificaton Required</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-school-outline"></ion-icon>\n</ion-label>\n<ion-select  placeholder="Select Option" [(ngModel)]="form.qualification" name="qualification">\n        <ion-option value="Higher Secondary"> Higher Secondary</ion-option>\n        <ion-option value="Graduation"> Graduation </ion-option>\n        <ion-option value="Post Graduation">Post Graduation   </ion-option>\n       </ion-select>\n</ion-item>\n</div> -->\n<div form-group>\n<label>Job Description</label>\n<ion-item heightauto>\n<textarea class="example"  type="text" [(ngModel)]="form.description" name="description" placeholder=\'Enter Job Description\' style="width: 100%;height:100px;"></textarea>\n</ion-item>\n</div>\n<!-- <div form-group>\n<label>Category</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-pricetags-outline"></ion-icon>\n</ion-label>\n <ion-select [(ngModel)]="form.category"  name="category" placeholder="Select">\n              <ion-option *ngFor="let item of getCategoryName" value="{{item.id}}">{{item.name}}</ion-option>\n              </ion-select>\n</ion-item>\n</div> -->\n<div form-group>\n<label>Upload Image</label>\n  <ion-item heightauto>\n          \n              <input type="file" name="select Image" style="margin-bottom:10px;" (change)="onChange($event)" >\n            <ion-thumbnail *ngIf="downloadURL != null">\n                 <img src="{{downloadURL}}">\n              </ion-thumbnail>\n   </ion-item>\n</div>\n\n\n        <!---   <ion-item>\n              <ion-label floating>Job Title</ion-label>\n              <ion-input required type="text" [(ngModel)]="form.name" name="name"></ion-input>\n           </ion-item>\n     \n      ---\n     <!--\n      <ion-item>\n              <ion-label floating>Address</ion-label>\n              <ion-input required type="text" [(ngModel)]="form.address" name="info"></ion-input>\n           </ion-item>\n     --->\n     \n     <!--\n     <ion-item style="padding-top:10px" class="option">\n              <ion-label>Address</ion-label>\n              <ion-select [(ngModel)]="form.address"  name="address">\n              <ion-option *ngFor="let item of addressList" value="{{item.name}}">{{item.name}}</ion-option>\n              </ion-select>\n           </ion-item>\n     \n      <ion-item>\n              <ion-label floating>Phone</ion-label>\n              <ion-input required type="text" [(ngModel)]="form.phone" name="lat"></ion-input>\n           </ion-item>\n     \n     \n     <ion-item>\n              <ion-label floating>Job Poster Name</ion-label>\n              <ion-input required type="text" [(ngModel)]="form.poster" name="options"></ion-input>\n           </ion-item>\n     \n     \n     <ion-item style="padding-top:10px" class="option">\n              <ion-label>Min Salary</ion-label>\n              <ion-select [(ngModel)]="form.minsalary"  name="minsalary">\n              <ion-option *ngFor="let item of getMinSalary" value="{{item.name}}">{{item.name}}</ion-option>\n              </ion-select>\n           </ion-item>\n     \n     \n     <ion-item style="padding-top:10px" class="option">\n              <ion-label>Max Salary</ion-label>\n              <ion-select [(ngModel)]="form.maxsalary"  name="maxsalary">\n              <ion-option *ngFor="let item of getMaxSalary" value="{{item.name}}">{{item.name}}</ion-option>\n              </ion-select>\n           </ion-item>\n   \n     \n             \n        <span ion-datepicker (ionChanged)="setDate($event);" [value]="localDate" [min]="localDate" clear class="ScheduleDate">\n         <button ion-button full type="button" class="book-button" style = "margin-left:10%;width:75%;margin-right:10%;margin-top:30px;margin-bottom:20px;"><span>Choose Finish Date</span></button>\n     </span>\n \n \n <div *ngIf = "localdate">\n \n <span>LocalDate: {{form.localDate | date}}</span>\n \n </div>\n \n <div *ngIf = "date">\n   \n \n   <h3>Selected Date: {{date | date}}</h3>\n   \n </div>\n     \n     <ion-item>\n              <textarea class="example"  type="text" [(ngModel)]="form.description" name="description" placeholder=\'Address Description\' style = "width: 100%;height:200px;"></textarea>\n           </ion-item>\n     \n     <ion-item style="padding-top:10px" class="option">\n              <ion-label>category</ion-label>\n              <ion-select [(ngModel)]="form.category"  name="category">\n              <ion-option *ngFor="let item of getCategoryName" value="{{item.id}}">{{item.name}}</ion-option>\n              </ion-select>\n           </ion-item>\n     \n   \n     \n     \n     \n           <ion-item>\n              <ion-thumbnail *ngIf="downloadURL != null">\n                 <img src="{{downloadURL}}">\n              </ion-thumbnail>\n              <input type="file" name="select Image" (change)="onChange($event)" >\n           </ion-item>\n     \n     \n     -->\n   \n \n \n \n        </ion-list>\n     </form>\n     <div class="error-message">\n          <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n     </div>\n   <button btnpost round ion-button block color="secondary" [disabled]="disableSubmit" text-uppercase (click)="addCategry()">{{submitText}}</button>\n</ion-content>\n<!--ion-footer no-shadow>\n <ion-toolbar position="bottom">\n  <button round ion-button block color="secondary" [disabled]="disableSubmit" text-uppercase (click)="addCategry()">Post Job</button>\n </ion-toolbar>\n</ion-footer-->\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/add-job/add-job.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AddJobPage);
    return AddJobPage;
}());

//# sourceMappingURL=add-job.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_offer_details_job_offer_details__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_profile_view_profile__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the OfferListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferListPage = /** @class */ (function () {
    function OfferListPage(values, nativeStorage, navCtrl, navParams, service, translateService, callNumber) {
        //  this.id = navParams.data.category.id;
        var _this = this;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.userProfiles = null;
        this.locations = {};
        this.jobList = {};
        this.is_loaded = false;
        //  console.log(this.id);
        this.locations = [];
        this.jobList = [];
        //console.log(this.params.data.items);
        this.service.getJobApplicants().on('value', function (snapshot) {
            //this.productsList = [];
            _this.locations = [];
            snapshot.forEach(function (snap) {
                if (snap.val().education != null || snap.val().education != undefined) {
                    _this.locations.push({
                        id: snap.key,
                        address: snap.val().address,
                        category: snap.val().category,
                        description: snap.val().description,
                        education: snap.val().education,
                        employer_id: snap.val().employer_id,
                        face: snap.val().face,
                        job_id: snap.val().job_id,
                        localdate: snap.val().localdate,
                        maxsalary: snap.val().maxsalary,
                        minsalary: snap.val().minsalary,
                        name: snap.val().name,
                        phone: snap.val().phone,
                        reverseOrder: snap.val().reserseOrder,
                        status: snap.val().status,
                        timeStamp: snap.val().timeStamp,
                        user_uid: snap.val().user_uid,
                        whenCanJoin: snap.val().whenCanJoin,
                        confirmEducation: snap.val().confirmEducation,
                        applicationViewed: snap.val().applicationViewed
                        //photoURL: this.userProfiles.photoURL,
                    });
                }
            });
            _this.locations = _this.locations.reverse();
            console.log(_this.locations);
            console.log(_this.userProfiles);
            var self = _this;
            setTimeout(function () {
                self.is_loaded = true;
            }, 1000);
        });
    }
    OfferListPage.prototype.jobOfferDetails = function (locations) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__job_offer_details_job_offer_details__["a" /* JobOfferDetailsPage */], { locations: locations });
    };
    OfferListPage.prototype.goToProfile = function (tech) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__view_profile_view_profile__["a" /* ViewProfilePage */], { tech: tech });
    };
    OfferListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-offer-list',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/offer-list/offer-list.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary"> \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> {{"Candidates Applied" | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n		<p *ngIf="!is_loaded">Loading...</p>\n  <ng-container *ngIf="is_loaded">\n      <ion-item  lines="none" *ngFor="let location of locations">\n	  \n	   <ion-thumbnail item-start (click)="jobOfferDetails(location)">\n      <img src="{{location.face}}">\n	  <span class="date-icn"> {{location.timeStamp | date}}</span>\n    </ion-thumbnail> \n\n	  <ion-label>\n	    <h2  (click)="goToProfile(location)">{{location.education.displayName}} </h2>\n		<p address (click)="jobOfferDetails(location)"><ion-icon name="ios-briefcase-outline"></ion-icon> <span> {{location.name}}</span></p>\n		<p address><ion-icon name="ios-mail-outline"></ion-icon> <span>{{location.education.email}} </span></p>\n		<!-- <div accept-reject>\n		 <ion-badge  color="secondary" shape="round" >{{location.status}}</ion-badge>\n		</div> -->\n	  </ion-label>\n    </ion-item>\n\n    <ion-item *ngIf="locations == \'\'">\n    	No records found.\n    </ion-item>\n    </ng-container>\n\n\n	 <!--ion-item *ngFor="let location of locations" style = "background-color : #DCF7C2;">\n	 \n    <ion-thumbnail item-start (click)="jobOfferDetails(location)">\n      <img src="{{location.face}}">\n	  \n    </ion-thumbnail>\n	\n	\n\n	 <div *ngIf="location.photoURL" style = "margin-top:-200px;">\n            <img src="{{location.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;background:none;">\n         </div>\n		\n      \n	<div (click)="jobOfferDetails(location)">\n	<ion-badge >\n    <h2>{{location.name}}</h2>\n	</ion-badge>\n	<p>Name • <b>{{location.education.displayName}}</b></p>\n	<p>Occupation • <b>{{location.education.jobcategory}}</b></p>\n	<p>Worked • <b>{{location.education.worked}}</b></p>\n    <p>Posted • <b>{{location.timeStamp | date}}</b></p>\n	<p>Expires • <b>{{location.localdate}}</b></p>\n	<p>Status • <ion-badge><b>{{location.status}}</b></ion-badge></p>\n	</div>\n	\n	\n	<button ion-button style = "float:right;" color="secondary" (click)="goToProfile(location)">View Applicant\'s Profile</button>\n	\n  </ion-item-->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/offer-list/offer-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], OfferListPage);
    return OfferListPage;
}());

//# sourceMappingURL=offer-list.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth1__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';

/**
 * Generated class for the ViewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewProfilePage = /** @class */ (function () {
    function ViewProfilePage(nav, navParam, functions, auth, loadingCtrl, 
    //  private fb: Facebook, 
    alertCtrl, values, service, translateService) {
        var _this = this;
        this.nav = nav;
        this.navParam = navParam;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.translateService = translateService;
        this.errors = ['', null, undefined];
        this.tech = {};
        this.userProfiles = null;
        this.profession_types = ['', ' Dental Assistant', 'Dental Hygienist', 'Dentist'];
        this.userType = localStorage.getItem('userType');
        this.jobDetails = navParam.data.tech;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        console.log(this.jobDetails);
        this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
            _this.userProfiles = snapshot.val();
            console.log(_this.userProfiles);
        });
        console.log(this.userProfiles);
        //console.log(this.jobDetails.id);
        // console.log(this.jobDetails.user_uid);
    }
    ViewProfilePage.prototype.ionViewDidLoad = function () {
    };
    ViewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-view-profile',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/view-profile/view-profile.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>View Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf="userProfiles">\n<div jobinfo>\n	<div jobimg>\n	  <img src="assets/img/bg-profile.jpg">\n	</div>\n	<div userimg>\n	        <ng-container *ngIf="userProfiles.photoURL" >\n            <img src="{{userProfiles.photoURL}}">\n			</ng-container>\n	       <ng-container *ngIf="!userProfiles.photoURL">\n            <img src="{{values.avatar}}">\n			</ng-container>\n	</div>\n	<h2>{{userProfiles.displayName}} {{userProfiles.lastName}}</h2>\n</div>\n<div jobdetail>\n	<div joblist>\n	 \n           <ion-item>\n			<ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Full Name</h2> \n			  <p> {{userProfiles.displayName}} {{userProfiles.lastName}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-mail-outline"></ion-icon> 			\n			  <h2>Email</h2> \n			  <p>{{userProfiles.email}}</p>			\n			</ion-item>\n\n			<ion-item *ngIf="userType!=\'manager\' && errors.indexOf(userProfiles.europeResult)==-1">\n			  <ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Gender</h2> \n			  <p>{{userProfiles.europeResult}}</p>			\n			</ion-item>\n\n\n		    <ion-item *ngIf="userType!=\'manager\'  && errors.indexOf(userProfiles.birthday)==-1">\n			  <ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Birthday</h2> \n			  <p>{{userProfiles.birthday | date}}</p>			\n			</ion-item>\n\n\n			<!-- <ion-item *ngIf="errors.indexOf(userProfiles.phone)==-1">\n			<ion-icon item-start name="ios-call-outline"></ion-icon> 			\n			  <h2>Phone Number</h2> \n			  <p>{{userProfiles.phone}}</p>			\n			</ion-item> -->\n\n\n			<ion-item *ngIf="userType!=\'manager\' && errors.indexOf(userProfiles.profession)==-1">\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Profession</h2> \n			  <p>{{userProfiles.profession != \'\' && userProfiles.profession != undefined ? profession_types[userProfiles.profession] : \'\'}}</p>			\n			</ion-item>\n\n			<ion-item *ngIf="userType!=\'manager\' && errors.indexOf(userProfiles.miles)==-1">\n			<ion-icon item-start name="ios-speedometer-outline"></ion-icon> 			\n			  <h2>Miles  From Their Vicinity</h2> \n			  <p>{{userProfiles.miles}} Miles</p>			\n			</ion-item>\n\n			<ion-item *ngIf="userType==\'manager\' && errors.indexOf(userProfiles.company)==-1">\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Company</h2> \n			  <p>{{userProfiles.company}}</p>			\n			</ion-item>\n\n\n			<ion-item *ngIf="userType==\'manager\' && errors.indexOf(userProfiles.company_size)==-1">\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Company Size</h2> \n			  <p>{{userProfiles.company_size}}</p>			\n			</ion-item>\n\n			<ion-item *ngIf="userType==\'manager\' && errors.indexOf(userProfiles.is_recruiter)==-1">\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Are you a recruiter</h2> \n			  <p *ngIf="userProfiles.is_recruiter == \'yes\'"> Yes</p>\n			   <p *ngIf="userProfiles.is_recruiter == \'no\'"> No</p>			\n			</ion-item>	\n\n	</div>\n	</div>\n</div>\n\n  <!--div class="main-cnt" *ngIf="userProfiles">\n    <img src="../assets/img/dp.jpg" class="dp">\n    <ion-list no-lines>\n	       <div *ngIf="userProfiles.photoURL" >\n          \n            <img src="{{userProfiles.photoURL}}">\n			</div>\n       \n		 \n	\n	   \n	      <div *ngIf="!userProfiles.photoURL">\n            \n            <img src="{{values.avatar}}">\n			</div>\n       \n		 \n	\n		 \n		\n		 \n\n		 <ion-item>\n      {{userProfiles.displayName}} {{userProfiles.lastName}}\n</ion-item>	  \n	\n	\n      <ion-item>\n	  \n        <ion-icon name="contacts" item-start></ion-icon>\n        Email: {{userProfiles.email}}\n        \n      </ion-item>\n      <ion-item>\n        <ion-icon name="logo-facebook" item-start></ion-icon>\n        Gender: {{userProfiles.europeResult}}\n        \n      </ion-item>\n      <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n        Birthday: {{userProfiles.birthday}}\n        \n      </ion-item>\n	  \n\n	  \n	  \n	 \n	  \n	  \n	 \n	  \n	 \n	  \n	  \n	  \n	\n	  \n    </ion-list>\n	\n	\n	 \n  </div-->\n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/view-profile/view-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_6__providers_auth1__["a" /* Auth1 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_3__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ViewProfilePage);
    return ViewProfilePage;
}());

//# sourceMappingURL=view-profile.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Chat1Page = /** @class */ (function () {
    function Chat1Page(funtions, admobFree, navCtrl, navParams, service) {
        this.funtions = funtions;
        this.admobFree = admobFree;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.errors = ['', null, undefined];
        this.my_id = navParams.get('my_id');
        this.from_id = navParams.get('from_id');
        this.user_name = navParams.get('user_name');
        this.user_image = navParams.get('user_image');
        this.roomId = navParams.get('roomId');
    }
    Chat1Page.prototype.ionViewDidLoad = function () {
        this.getChat();
        this.runAd();
    };
    Chat1Page.prototype.getChat = function () {
        var _this = this;
        this.service.getChat(this.roomId).on('value', function (snapshot) {
            _this.chats = [];
            snapshot.forEach(function (snap) {
                _this.chats.push({
                    id: snap.key,
                    fromId: snap.val().fromId,
                    toId: snap.val().toId,
                    isRead: snap.val().isRead,
                    message: snap.val().message,
                    date: snap.val().date
                });
            });
            _this.scrollToBottom();
        });
    };
    Chat1Page.prototype.send = function () {
        if (this.errors.indexOf(this.message) == -1) {
            var chat_data = {
                fromId: this.my_id,
                toId: this.from_id,
                message: this.message,
                roomId: this.roomId,
                isRead: '0',
                date: Date.now()
            };
            this.message = "";
            this.service.addChat(chat_data);
        }
    };
    Chat1Page.prototype.scrollToBottom = function () {
        var self = this;
        setTimeout(function () {
            console.log(self.content);
            if (self.content._scroll != null) {
                self.content.scrollToBottom(300);
            }
        }, 100);
    };
    Chat1Page.prototype.showInterstitialAds = function () {
        var _this = this;
        this.funtions.presentLoading();
        var interstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-3940256099942544/8691691433"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(function () {
            setTimeout(function () {
                _this.funtions.stopLoading();
            }, 10000);
        }).catch(function (e) {
            _this.funtions.stopLoading();
        });
    };
    Chat1Page.prototype.runAd = function () {
        this.showInterstitialAds();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], Chat1Page.prototype, "content", void 0);
    Chat1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/chat1/chat1.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-item>\n	    <ion-avatar item-start>\n		   <img *ngIf="errors.indexOf(user_image) == -1" src="{{user_image}}"/>\n        <img *ngIf="errors.indexOf(user_image) >= 0" src="assets/images/person.png"/>\n		   <!-- <span></span> -->\n	    </ion-avatar>\n		<h2>{{user_name}}</h2>\n	</ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding #content>\n  <ng-container *ngFor="let chat of chats ">\n    <div [ngClass]="chat.fromId == my_id ? \'sender\' : \'receiver\'">\n      <div textcontent>\n        <p>\n      	 {{chat.message}}\n      	</p>\n      </div>\n      <ion-note>{{chat.date | timeAgo}}</ion-note>\n    </div>\n  </ng-container>\n</ion-content>\n<ion-footer>\n<ion-item>\n<ion-input [(ngModel)]="message" placeholder="Type a message"></ion-input>\n<button item-end color="primary"  ion-button (click)="send()"> \n  <ion-icon name="ios-send"></ion-icon> \n</button>\n</ion-item>\n</ion-footer>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/chat1/chat1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */]])
    ], Chat1Page);
    return Chat1Page;
}());

//# sourceMappingURL=chat1.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat1_chat1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Notifications1Page = /** @class */ (function () {
    function Notifications1Page(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.errors = ['', null, undefined];
        this.is_loaded = false;
        this.chats = [];
        this.tab = this.navCtrl.parent;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
    }
    Notifications1Page.prototype.ionViewDidLoad = function () {
        this.getNotification();
        this.getChatUser();
        // console.log('ionViewDidLoad NotificationsPage');
    };
    Notifications1Page.prototype.getNotification = function () {
        var _this = this;
        this.service.getNotifications().on('value', function (snapshot) {
            console.log(snapshot);
            _this.notifications = [];
            snapshot.forEach(function (snap) {
                _this.service.getUserProfile(snap.val().fromId).on('value', function (u_snapshot) {
                    _this.notifications.push({
                        id: snap.key,
                        type: snap.val().type,
                        isRead: snap.val().isRead,
                        data_params: snap.val().data_params,
                        fromId: snap.val().fromId,
                        date: snap.val().date,
                        displayName: u_snapshot.val().displayName,
                        lastName: u_snapshot.val().lastName,
                        photoURL: u_snapshot.val().photoURL
                    });
                });
            });
            _this.notifications = _this.notifications.reverse();
            var self = _this;
            setTimeout(function () {
                self.is_loaded = true;
            }, 1000);
            console.log(_this.notifications);
        });
    };
    Notifications1Page.prototype.goToJobs = function () {
        this.tab.select(2);
    };
    Notifications1Page.prototype.genRandromid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    Notifications1Page.prototype.goToChatPage = function (id, photoURL, name) {
        for (var _i = 0, _a = this.chats; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.fromId == id || key.toId == id) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat1_chat1__["a" /* Chat1Page */], {
                    user_name: name,
                    user_image: photoURL,
                    from_id: id,
                    roomId: key.roomId,
                    my_id: this.currentUser.uid
                });
                break;
            }
            else {
            }
        }
    };
    Notifications1Page.prototype.getChatUser = function () {
        var _this = this;
        this.service.getChatUsers().on('value', function (snapshot) {
            snapshot.forEach(function (snp) {
                _this.chats.push({
                    id: snp.key,
                    fromId: snp.val().fromId,
                    toId: snp.val().toId,
                    isRead: snp.val().isRead,
                    roomId: snp.val().roomId,
                    message: snp.val().message,
                    date: snp.val().date
                });
            });
            console.log(_this.chats);
        });
    };
    Notifications1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/notifications1/notifications1.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<div notifications *ngIf="!is_loaded">Loading...</div>\n<div notifications *ngIf="is_loaded">\n	  <ng-container *ngFor="let notis of notifications">\n		  <ion-item (click)="goToChatPage(notis.fromId, notis.photoURL, notis.displayName)">\n			 <ion-avatar item-start>\n			   <img *ngIf="errors.indexOf(notis.photoURL) == -1" src="{{notis.photoURL}}"/>\n			   <img *ngIf="errors.indexOf(notis.photoURL) >= 0" src="assets/images/person.png"/>\n			 </ion-avatar>\n			 <p> <a href="javascript:void(0)">{{notis.displayName}} {{notis.lastName}}</a>  applied for {{notis.data_params.job}} job in {{notis.data_params.city}} city.</p>\n			 <ion-note><ion-icon name="time-outline"></ion-icon> {{notis.date | timeAgo}}</ion-note>\n		  </ion-item>\n	  </ng-container>\n	  <ion-item *ngIf="notifications == \'\'">\n	    No notifications yet.\n	  </ion-item>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/notifications1/notifications1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */]])
    ], Notifications1Page);
    return Notifications1Page;
}());

//# sourceMappingURL=notifications1.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
    }
    ForgotpasswordPage.prototype.homepage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.forgotNow = function () {
        var _this = this;
        this.error = false;
        if (this.ValidateEmail(this.email)) {
            this.error = false;
            this.auth.forgotPass(this.email).then(function (result) {
                _this.error = true;
                _this.errorMsg = 'A link has been sent to your email address to reset password.';
                _this.email = '';
            }).catch(function (error) {
                _this.error = true;
                _this.errorMsg = 'We did not find any account associated with this email.';
            });
        }
        else {
            this.error = true;
            this.errorMsg = 'Please enter a valid email address.';
        }
    };
    ForgotpasswordPage.prototype.ValidateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/forgotpassword/forgotpassword.html"*/'<!--ion-header>\n  <ion-navbar>\n    <ion-title>forgotpassword</ion-title>\n  </ion-navbar>\n</ion-header-->\n\n<ion-content padding>\n<div class="register-form">\n<div logo  class="ion-text-center">\n  <img src="assets/img/logo.png"/>\n <h1>Forgot Password ?</h1>\n  <h2>Don\'t worry resetting password is easy , just fill the email address below</h2>\n</div>\n<div form-group>\n<label>Email Address</label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-mail-outline"></ion-icon>\n</ion-label>\n<ion-input type="email"  placeholder="Enter Email Address" [(ngModel)]="email"></ion-input>\n</ion-item>\n\n\n <p *ngIf="error" class="errorMsg">{{errorMsg}}</p>\n\n\n</div>\n\n<div login-btn>\n<button  class="login-button" round ion-button block color="secondary" (click)="forgotNow()" class="button button-block button-default" text-uppercase>Reset Password</button>\n</div>\n<div btn-signup>\n<p>Back To <a (click)="homepage()" href="javascript:void(0)">Login</a></p>\n\n</div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/forgotpassword/forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* Auth */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__savedjob_savedjob__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myprofile_myprofile__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_messages__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_jobs_my_jobs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_list_job_list__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__savedjob_savedjob__["a" /* SavedjobPage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__job_list_job_list__["a" /* JobListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__myprofile_myprofile__["a" /* MyprofilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__my_jobs_my_jobs__["a" /* MyJobsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__messages_messages__["a" /* MessagesPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/tabs/tabs.html"*/' <ion-tabs #Tabsuser [selectedIndex]="tabsIndex">\n    <ion-tab tabIcon="ios-home-outline"  tabsHideOnSubPages="true"  tabTitle="All Jobs" [root]="tab1Root"></ion-tab>\n    <ion-tab tabIcon="ios-list-outline"tabsHideOnSubPages="true"  tabTitle="Applied Jobs" [root]="tab4Root"></ion-tab>\n    <ion-tab tabIcon="ios-heart-outline"  tabsHideOnSubPages="true" [root]="tab2Root"></ion-tab>\n    <ion-tab tabIcon="ios-chatboxes-outline"  tabsHideOnSubPages="true" tabTitle="Messages" [root]="tab5Root"></ion-tab>\n    <ion-tab tabIcon="ios-person-outline" tabsHideOnSubPages="true" tabTitle="Profile" [root]="tab3Root"></ion-tab>\n  </ion-tabs>`'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__applied_info_applied_info__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyJobsPage = /** @class */ (function () {
    //public locations:any = {};
    function MyJobsPage(navCtrl, navParams, values, nativeStorage, service, translateService, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.responseCame = false;
        this.chats = {};
        this.myJobs = {};
        this.reverseJobs = {};
        this.myJobs = [];
        this.reverseJobs = [];
        this.currentUser = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().currentUser;
        this.service.getUserEducationList(this.currentUser.uid).on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                _this.worked = snap.val().worked;
            });
        });
        this.responseCame = false;
        this.service.getUserJobList().on('value', function (snapshot) {
            console.log('snap', snapshot.val());
            _this.myJobs = [];
            _this.reverseJobs = [];
            snapshot.forEach(function (snap) {
                _this.myJobs.push({
                    id: snap.key,
                    address: snap.val().address,
                    category: snap.val().category,
                    description: snap.val().description,
                    education: snap.val().education,
                    employer_id: snap.val().employer_id,
                    face: snap.val().face,
                    job_id: snap.val().job_id,
                    localdate: snap.val().localdate,
                    maxsalary: snap.val().maxsalary,
                    minsalary: snap.val().minsalary,
                    name: snap.val().name,
                    phone: snap.val().phone,
                    reverseOrder: snap.val().reverseOrder,
                    timeStamp: snap.val().timeStamp,
                    user_uid: snap.val().user_uid,
                    status: snap.val().status,
                    resume: snap.val().resume,
                    whenCanJoin: snap.val().whenCanJoin,
                    confirmEducation: snap.val().confirmEducation,
                    isViewed: snap.val().applicationViewed,
                });
            });
            _this.myJobs = _this.myJobs.reverse();
            console.log('this.myJobs', _this.myJobs);
            _this.responseCame = true;
        });
        this.reverseJobs = this.myJobs;
    }
    MyJobsPage.prototype.ionViewDidLoad = function () {
    };
    MyJobsPage.prototype.ngOnInit = function () {
    };
    MyJobsPage.prototype.goToJobDetails = function (locations) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__applied_info_applied_info__["a" /* AppliedInfoPage */], { jobDetails: locations, categoryId: locations.job_id });
    };
    MyJobsPage.prototype.call = function (data) {
        this.callNumber.callNumber(data, true)
            .then(function () { })
            .catch(function () { });
    };
    MyJobsPage.prototype.initiateChat = function (toid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */], {
            toId: toid,
            mode: 1
        });
    };
    MyJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-jobs',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/my-jobs/my-jobs.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>  \n    <ion-title>Applied Jobs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!-- <ng-adsense\n			[adClient]="\'ca-pub-8514227015105788\'"\n			[display]="\'inline-block\'"\n			[width]="100"\n			[height]="100"\n			></ng-adsense> -->\n<ion-list *ngIf = "myJobs">\n   <ion-item  *ngFor="let location of myJobs">\n      <ion-thumbnail item-start>\n\n        <img src="{{location.face}}">\n        \n      </ion-thumbnail>\n\n \n\n	<!-- <ion-badge class="badgeINfo" color="primary" ></ion-badge> -->\n\n      <h2 (click)="goToJobDetails(location)">{{location.name}}</h2><ion-icon name="ios-chatbubbles-outline" (click)="initiateChat(location.employer_id)" class="messages"></ion-icon>\n	  <p address><img src="assets/img/building.png"/><span>{{location.address}}</span></p>\n		<p briefcase><img src="assets/img/briefcase.png"/><span>Experience:  {{worked}}</span></p>\n		<ion-row salary-apply>\n		 <ion-col  col-6>\n		   <ion-badge>${{location.minsalary}} - ${{location.maxsalary}}\n		   </ion-badge>\n		 </ion-col>\n		  <ion-col  col-6 class="btn-right" *ngIf="location.isViewed">\n		 <ion-badge  color="secondary" shape="round" >Application Viewed</ion-badge>\n		 </ion-col>\n		</ion-row>\n    </ion-item>\n\n \n</ion-list>\n<div *ngIf = "!myJobs">\n	You didn\'t send any resume to job.	\n</div>\n\n<p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="responseCame && myJobs.length==0">No data found</p>\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/my-jobs/my-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */]])
    ], MyJobsPage);
    return MyJobsPage;
}());

//# sourceMappingURL=my-jobs.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Service = /** @class */ (function () {
    function Service(http, config) {
        this.http = http;
        this.config = config;
        //setting: any;
        this.errors = ['', null, undefined];
        this.product_id = [];
        this.total = 0;
        this.proqty = [];
        this.url = this.config.url;
        this.cart = { "line_items": [],
            "extraOptions": [] };
        this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        this.orderList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/orders');
        this.allJobList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/allJobList');
        this.restaurants = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/restaurants');
        this.restaurantCategory = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/category');
        this.items = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items');
        this.restaurantUserInfo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users');
        this.cord = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/cord');
        this.cityName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/city');
        this.cityDistrictName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/districts');
        this.streetName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/streets');
        this.apartmentOfficeName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/apartments');
        this.myCart = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/mycart');
        this.extraOptions = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/extraOptions');
        this.extra = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/extra');
        this.tableOrders = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/tableOrders');
        this.tableAdminOrders = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/AllTableOrders');
        this.paypalConfiguration = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/paypal');
        this.categorizedOrders = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/categorizedOrders');
        this.Notifications = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/notifications');
        this.ads = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/ads');
        /**************New job application*********/
        this.jobCategory = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/jobCategory');
        this.chat = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/chat');
        this.jobCategoryName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/jobCategoryName');
        this.educationName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/educationName');
        this.startedYear = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/startedYear');
        this.finishedYear = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/finishedYear');
        this.workedYear = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/workedYear');
        this.applyJobs = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/applyJobs');
        this.employeeJob = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/employeeJob');
        this.workerJob = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/workerJob');
        this.appliedJob = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/appliedJob');
        this.savedJobs = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/savedJobs');
    }
    Service.prototype.getNotifications = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.notisLists = this.Notifications.orderByChild("toId").equalTo(uid);
        return this.notisLists;
    };
    Service.prototype.addNotification = function (data) {
        return this.Notifications.push(data);
    };
    Service.prototype.addProfileImage = function (downloadURL) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).update({
            photoURL: downloadURL,
        });
    };
    Service.prototype.getClickedInfo = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItem = this.appliedJob.child(uid).child(id);
        return this.favoriteItem;
    };
    Service.prototype.getUserJobList = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.workerJob.child(uid);
    };
    Service.prototype.markAsChecked = function (employee_id, post_id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.workerJob.child(employee_id.user_uid).child(post_id).update({ "applicationViewed": true });
        return this.employeeJob.child(uid).child(post_id).update(employee_id);
    };
    //   addToAppliedJob(employee_id,job_id,post_id,jobDetails, phone, miles, profession, resume){
    // 	  var uid = firebase.auth().currentUser.uid;
    // 		console.log(jobDetails);
    // 		return this.appliedJob.child(uid).child(job_id).set({
    // 	          clicked: true,	  
    // 			  user_uid:uid,
    // 			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
    // 			  reverseOrder: 0 - Date.now(),
    // 			  miles: miles,
    // 			  profession: profession,
    // 			  user_phone: phone,
    // 			  experience: jobDetails.experience,
    // 			  resume: resume
    // 		});
    //   }
    Service.prototype.addToAppliedJob = function (employee_id, job_id, post_id, jobDetails, profile, resume, confirmEducation, experience, whenCanJoin) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(jobDetails);
        return this.appliedJob.child(uid).child(job_id).set({
            clicked: true,
            user_uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            miles: this.errors.indexOf(profile.miles) == -1 ? profile.miles : null,
            profession: this.errors.indexOf(profile.profession) == -1 ? profile.profession : null,
            user_phone: this.errors.indexOf(profile.phone) == -1 ? profile.phone : null,
            experience: this.errors.indexOf(jobDetails.experience) == -1 ? jobDetails.experience : null,
            resume: resume,
            // experience: experience,
            confirmEducation: confirmEducation,
            whenCanJoin: whenCanJoin,
            applicationViewed: false
        });
    };
    Service.prototype.addToChat = function (toId, fromId, roomId, message) {
        return this.chat.push({
            toId: toId,
            fromId: fromId,
            roomId: roomId,
            message: message,
            date: Date.now(),
            isRead: 1
        });
    };
    //   addToWorker(employee_id,job_id,post_id,jobDetails , phone, miles, profession, experience){
    // 	addToWorker(job_id, post_id, jobDetails, phone, miles='', profession='', experience='', resume){
    // 	  var uid = firebase.auth().currentUser.uid;
    // 		console.log(jobDetails);
    // 		return this.workerJob.child(uid).child(post_id).set({
    // 			  address: jobDetails.address,
    // 			  category: jobDetails.category,
    // 			  description: jobDetails.description,
    // 		      employer_id: jobDetails.employer_id,
    // 			//   face:jobDetails.face,
    // 			  job_id: job_id,
    // 			  id: post_id,
    // 			  localdate: jobDetails.localdate,
    // 			  maxsalary: jobDetails.maxsalary,
    // 			  minsalary: jobDetails.minsalary,
    // 			  phone: jobDetails.phone,
    // 			  name: jobDetails.name,
    // 			  user_uid: uid,
    // 			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
    // 			  reverseOrder: 0 - Date.now(),
    // 			  education:jobDetails.education,
    // 			  status: "PENDING",
    // 			  miles: miles,
    // 			  profession: profession,
    // 			  user_phone: phone,
    // 			  experience: jobDetails.experience,
    // 			  resume: resume,
    // 			  user_id: jobDetails.user_id
    // 		});
    //   }
    Service.prototype.addToWorker = function (employee_id, job_id, post_id, jobDetails, profile, resume, confirmEducation, experience, whenCanJoin) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(jobDetails);
        return this.workerJob.child(uid).child(post_id).set({
            address: this.errors.indexOf(jobDetails.address) == -1 ? jobDetails.address : null,
            category: this.errors.indexOf(jobDetails.category) == -1 ? jobDetails.category : null,
            description: this.errors.indexOf(jobDetails.description) == -1 ? jobDetails.description : null,
            employer_id: this.errors.indexOf(jobDetails.employer_id) == -1 ? jobDetails.employer_id : null,
            face: this.errors.indexOf(jobDetails.face) == -1 ? jobDetails.face : null,
            job_id: this.errors.indexOf(job_id) == -1 ? job_id : null,
            id: this.errors.indexOf(post_id) == -1 ? post_id : null,
            localdate: this.errors.indexOf(jobDetails.localdate) == -1 ? jobDetails.localdate : null,
            maxsalary: this.errors.indexOf(jobDetails.maxsalary) == -1 ? jobDetails.maxsalary : null,
            minsalary: this.errors.indexOf(jobDetails.minsalary) == -1 ? jobDetails.minsalary : null,
            phone: this.errors.indexOf(jobDetails.phone) == -1 ? jobDetails.phone : null,
            name: this.errors.indexOf(jobDetails.name) == -1 ? jobDetails.name : null,
            user_uid: this.errors.indexOf(uid) == -1 ? uid : null,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            education: this.errors.indexOf(jobDetails.education) == -1 ? jobDetails.education : null,
            status: "PENDING",
            experience: experience,
            resume: this.errors.indexOf(resume) == -1 ? resume : null,
            user_phone: this.errors.indexOf(profile.phone) == -1 ? profile.phone : null,
            miles: this.errors.indexOf(profile.miles) == -1 ? profile.miles : null,
            profession: this.errors.indexOf(profile.profession) == -1 ? profile.profession : null,
            confirmEducation: confirmEducation,
            whenCanJoin: whenCanJoin,
            applicationViewed: false
        });
    };
    //   addToEmployee(employee_id,job_id,user_id,post_id,jobDetails , phone, miles, profession, experience){
    // 	addToEmployee(employee_id, post_id, jobDetails, profile, resume){
    // 	var uid = firebase.auth().currentUser.uid;
    // 		console.log(jobDetails);
    // 		return this.employeeJob.child(employee_id).child(post_id).set({
    // 			address: jobDetails.address,
    // 			category: jobDetails.category,
    // 			description: jobDetails.description,
    // 			employer_id: jobDetails.employer_id,
    // 			face:jobDetails.face,
    // 			job_id: jobDetails.job_id,
    // 			id: post_id,
    // 			localdate: jobDetails.localdate,
    // 			maxsalary: jobDetails.maxsalary,
    // 			minsalary: jobDetails.minsalary,
    // 			phone: jobDetails.phone,
    // 			name: jobDetails.name,
    // 			user_uid:uid,
    // 			timeStamp: firebase.database.ServerValue.TIMESTAMP,
    // 			reverseOrder: 0 - Date.now(),
    // 			education:jobDetails.education,
    // 			status: "PENDING",
    // 			miles: profile.miles,
    // 			profession: '',
    // 			user_phone: profile.phone,
    // 			experience: jobDetails.experience,
    // 			resume: resume,
    // 			user_id: jobDetails.user_id,
    // 		});
    //   }
    Service.prototype.addToEmployee = function (employee_id, job_id, user_id, post_id, jobDetails, profile, resume, confirmEducation, experience, whenCanJoin) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.employeeJob.child(employee_id).child(post_id).set({
            address: this.errors.indexOf(jobDetails.address) == -1 ? jobDetails.address : null,
            category: this.errors.indexOf(jobDetails.category) == -1 ? jobDetails.category : null,
            description: this.errors.indexOf(jobDetails.description) == -1 ? jobDetails.description : null,
            employer_id: this.errors.indexOf(jobDetails.employer_id) == -1 ? jobDetails.employer_id : null,
            face: this.errors.indexOf(jobDetails.face) == -1 ? jobDetails.face : null,
            job_id: this.errors.indexOf(jobDetails.job_id) == -1 ? jobDetails.job_id : null,
            id: this.errors.indexOf(post_id) == -1 ? post_id : null,
            localdate: this.errors.indexOf(jobDetails.localdate) == -1 ? jobDetails.localdate : null,
            maxsalary: this.errors.indexOf(jobDetails.maxsalary) == -1 ? jobDetails.maxsalary : null,
            minsalary: this.errors.indexOf(jobDetails.minsalary) == -1 ? jobDetails.minsalary : null,
            phone: this.errors.indexOf(jobDetails.phone) == -1 ? jobDetails.phone : null,
            name: this.errors.indexOf(jobDetails.name) == -1 ? jobDetails.name : null,
            user_uid: this.errors.indexOf(uid) == -1 ? uid : null,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            education: this.errors.indexOf(jobDetails.education) == -1 ? jobDetails.education : null,
            status: "PENDING",
            miles: this.errors.indexOf(profile.miles) == -1 ? profile.miles : null,
            experience: this.errors.indexOf(jobDetails.experience) == -1 ? jobDetails.experience : null,
            resume: this.errors.indexOf(resume) == -1 ? resume : null,
            user_phone: this.errors.indexOf(profile.phone) == -1 ? profile.phone : null,
            confirmEducation: confirmEducation,
            whenCanJoin: whenCanJoin,
            applicationViewed: false
        });
    };
    Service.prototype.getJobDetail = function (key) {
        return this.applyJobs.child(key);
    };
    Service.prototype.addIdToJob = function (id) {
        return this.applyJobs.child(id).child('id').set(id);
    };
    Service.prototype.applyJob = function (tech, education, resume) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.applyJobs.push({
            address: this.errors.indexOf(tech.address) == -1 ? tech.address : null,
            category: this.errors.indexOf(tech.category) == -1 ? tech.category : null,
            description: this.errors.indexOf(tech.description) == -1 ? tech.description : null,
            employer_id: this.errors.indexOf(tech.employer_id) == -1 ? tech.employer_id : null,
            face: this.errors.indexOf(tech.face) == -1 ? tech.face : null,
            job_id: this.errors.indexOf(tech.id) == -1 ? tech.id : null,
            localdate: this.errors.indexOf(tech.localdate) == -1 ? tech.localdate : null,
            maxsalary: this.errors.indexOf(tech.maxsalary) == -1 ? tech.maxsalary : null,
            minsalary: this.errors.indexOf(tech.minsalary) == -1 ? tech.minsalary : null,
            phone: this.errors.indexOf(tech.phone) == -1 ? tech.phone : null,
            name: this.errors.indexOf(tech.name) == -1 ? tech.name : null,
            user_uid: this.errors.indexOf(uid) == -1 ? uid : null,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            education: this.errors.indexOf(education) == -1 ? education : null,
            status: "PENDING",
            experience: this.errors.indexOf(tech.experience) == -1 ? tech.experience : null,
            resume: this.errors.indexOf(resume) == -1 ? resume : null,
            userComment: 'something'
            //   user_id: tech.user_id,
        });
    };
    Service.prototype.updateEducation = function (id, address, customer) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("education").child(id).update({
            jobcategory: address.jobcategory,
            education: address.education,
            started: address.started,
            finished: address.finished,
            worked: address.worked,
            displayName: customer.displayName,
            email: customer.email,
            minimum: address.minimum,
            maximum: address.maximum,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.deleteEducation = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("education").child(id).remove();
    };
    Service.prototype.getUserEducationList = function (uid) {
        this.userEducationList = this.restaurantUserInfo.child(uid).child("education");
        return this.userEducationList;
    };
    Service.prototype.saveEducation = function (jobcategory, education, started, finished, worked, displayName, email, minimum, maximum, uid, europeResult, birthday) {
        return this.restaurantUserInfo.child(uid).child("education").push({
            jobcategory: jobcategory,
            education: education,
            started: started,
            finished: finished,
            worked: worked,
            displayName: displayName,
            email: email,
            minimum: minimum,
            maximum: maximum,
            uid: uid,
            europeResult: europeResult,
            birthday: birthday,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.getWorkedYear = function () {
        console.log(this.workedYear);
        return this.workedYear;
    };
    Service.prototype.getFinishedYear = function () {
        console.log(this.finishedYear);
        return this.finishedYear;
    };
    Service.prototype.getStartedYear = function () {
        console.log(this.startedYear);
        return this.startedYear;
    };
    Service.prototype.getEducationName = function () {
        console.log(this.educationName);
        return this.educationName;
    };
    Service.prototype.getJobCategoryName = function () {
        console.log(this.jobCategoryName);
        return this.jobCategoryName;
    };
    Service.prototype.getJobDetails = function (id, categoryId) {
        console.log(id);
        console.log(categoryId);
        this.jobDetails = this.jobCategory.child(categoryId).child("jobs").child(id);
        return this.jobDetails;
    };
    Service.prototype.getJobsByCategory = function (id) {
        console.log(id);
        this.jobsByCategory = this.jobCategory.child(id).child("jobs");
        return this.jobsByCategory;
    };
    Service.prototype.getInbox = function (id) {
        this.inbox = this.chat.orderByChild("fromId").equalTo(id);
        return this.inbox;
    };
    Service.prototype.getChat = function (roomId) {
        this.inbox = this.chat.orderByChild("roomId").equalTo(roomId);
        return this.inbox;
    };
    Service.prototype.getLastMessage = function (roomId) {
        return this.chat.orderByChild("roomId").equalTo(roomId).limitToLast(1);
    };
    Service.prototype.getJobCategoryList = function () {
        console.log(this.jobCategory);
        return this.jobCategory;
    };
    Service.prototype.getCityRestaurantList = function (id) {
        console.log(id);
        this.cityRestaurants = this.restaurants.orderByChild("city_id").equalTo(id);
        return this.cityRestaurants;
    };
    Service.prototype.getRestaurantTableOrderList = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.tableOrders.child(uid);
    };
    // Customer and Admin App 
    //
    Service.prototype.addNewTableOrders = function (data, restaurant, date) {
        console.log(data);
        console.log(restaurant);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.tableOrders.child(uid).push({
            restaurant_id: restaurant.data.id,
            restaurant_address: restaurant.data.address,
            restaurant_description: restaurant.data.description,
            restaurant_backgroundImage: restaurant.data.backgroundImage,
            restaurant_firebase_url: restaurant.data.firebase_url,
            restaurant_icon: restaurant.data.icon,
            restaurant_iconText: restaurant.data.iconText,
            restaurant_images: restaurant.data.images,
            restaurant_info: restaurant.data.info,
            restaurant_lat: restaurant.data.lat,
            restaurant_long: restaurant.data.long,
            restaurant_mark: restaurant.data.mark,
            restaurant_market: restaurant.data.market,
            restaurant_option: restaurant.data.option,
            restaurant_outlet: restaurant.data.outlet,
            restaurant_phonenumber: restaurant.data.phonenumber,
            restaurant_show: restaurant.data.show,
            restaurant_subtitle: restaurant.data.subtitle,
            restaurant_title: restaurant.data.title,
            date: date,
            person: data.person,
            time: data.time,
            userId: uid,
            status: data.status,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }); //.then( tableOrder => {
        /// this.tableOrders.child(uid).child(tableOrder.key).child('id').set(tableOrder.key);
        // });
    };
    Service.prototype.addNewTableAdminOrders = function (data, restaurant, date, sameKey) {
        console.log(data);
        console.log(restaurant);
        console.log(sameKey);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.tableAdminOrders.child(sameKey).set({
            restaurant_id: restaurant.data.id,
            restaurant_address: restaurant.data.address,
            restaurant_description: restaurant.data.description,
            restaurant_backgroundImage: restaurant.data.backgroundImage,
            restaurant_firebase_url: restaurant.data.firebase_url,
            restaurant_icon: restaurant.data.icon,
            restaurant_iconText: restaurant.data.iconText,
            restaurant_images: restaurant.data.images,
            restaurant_info: restaurant.data.info,
            restaurant_lat: restaurant.data.lat,
            restaurant_long: restaurant.data.long,
            restaurant_mark: restaurant.data.mark,
            restaurant_market: restaurant.data.market,
            restaurant_option: restaurant.data.option,
            restaurant_outlet: restaurant.data.outlet,
            restaurant_phonenumber: restaurant.data.phonenumber,
            restaurant_show: restaurant.data.show,
            restaurant_subtitle: restaurant.data.subtitle,
            restaurant_title: restaurant.data.title,
            date: date,
            person: data.person,
            time: data.time,
            userId: uid,
            status: data.status,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }); //.then( tableOrder => {
        //this.tableAdminOrders.child(uid).child(tableOrder.key).child('id').set(tableOrder.key);
        //});
    };
    Service.prototype.createExtraList = function (key, snap, id) {
        console.log(snap);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.extra.child(uid).child(id).child(key).update({
            id: key,
            name: snap.name,
            selected: snap.selected,
            value: snap.value,
            product_id: id,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.getCreateExtraList = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extra.child(uid).child(id);
    };
    Service.prototype.addProductToCart = function (cart) {
        console.log(cart);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(cart.product_id).set({
            id: cart.product_id,
            name: cart.name,
            product_id: cart.product_id,
            image: cart.image,
            price: cart.price,
            quantity: cart.quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.addExtraProductToCart = function (extra) {
        console.log(extra);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extra.child(uid).child(extra.product_id).child(extra.id).set({
            completed: extra.selected,
            id: extra.id,
            name: extra.name,
            product_id: extra.product_id,
            quantity: 1,
            selected: extra.selected,
            value: extra.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.removeExtraProductToCart = function (extra) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extra.child(uid).child(extra.product_id).child(extra.id).remove();
    };
    Service.prototype.getItemExtraProductFromFirebase = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extraOptions.child(uid).child(id);
    };
    Service.prototype.getPaypal = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.paypalConfiguration;
    };
    Service.prototype.removeExtraProductCart = function (cart, extra) {
        console.log(cart);
        console.log(extra);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extraOptions.child(uid).child(cart).remove();
    };
    Service.prototype.updateExtraProductToCart = function (cart, extra) {
        console.log(cart);
        console.log(extra);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extraOptions.child(uid).child(cart).child(extra.id).set({
            completed: extra.completed,
            id: extra.id,
            name: extra.name,
            product_id: extra.product_id,
            quantity: 1,
            selected: extra.selected,
            value: extra.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.updateProfileInfo = function (info) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).update(info);
    };
    Service.prototype.addQuantityProduct = function (qty) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(qty.product_id).update({
            quantity: qty.quantity,
        });
    };
    Service.prototype.pushToFirebaseProduct = function (cart, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).set({
            id: cart.product_id,
            name: cart.name,
            product_id: cart.product_id,
            image: cart.image,
            price: cart.price,
            quantity: cart.quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.getFirebaseCart = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid);
    };
    Service.prototype.addToFirebaseCart = function (id, quantity) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).update({
            quantity: quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.deleteFirebaseCart = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.myCart.child(uid).remove();
    };
    Service.prototype.deleteFirebaseProductCart = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.myCart.child(uid).child(id).remove();
    };
    Service.prototype.deleteFromFirebaseCart = function (id, quantity) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.myCart.child(uid).child(id).update({
            quantity: quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.setToFirebaseCart = function (cart, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).child("extraOptions").child(cart.id).update({
            id: cart.id,
            name: cart.name,
            product_id: cart.product_id,
            quantity: cart.quantity,
            selected: cart.selected,
            value: cart.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.pushToFirebaseCart = function (cart, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).child("extraOptions").child(cart.id).update({
            id: cart.id,
            name: cart.name,
            product_id: cart.product_id,
            quantity: cart.quantity,
            selected: cart.selected,
            value: cart.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.updateAddress = function (id, address, customer) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("addresses").child(id).update({
            city: address.city,
            district: address.district,
            street: address.street,
            apartmentOffice: address.apartmentOffice,
            displayName: customer.displayName,
            email: customer.email,
            phone: address.phone,
            address: address.address,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.deleteUserAddress = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("addresses").child(id).remove();
    };
    Service.prototype.getCityName = function () {
        console.log(this.cityName);
        return this.cityName;
    };
    Service.prototype.getCityDistrictName = function () {
        console.log(this.cityDistrictName);
        return this.cityDistrictName;
    };
    Service.prototype.getStreetName = function () {
        console.log(this.streetName);
        return this.streetName;
    };
    Service.prototype.getApartmentOfficeName = function () {
        return this.apartmentOfficeName;
    };
    Service.prototype.saveCurrentAddress = function (displayName, phone, address, uid) {
        return this.restaurantUserInfo.child(uid).child("addresses").push({
            displayName: displayName,
            phone: phone,
            address: address,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.saveNewAddress = function (city, district, street, apartmentOffice, displayName, email, phone, address, uid) {
        return this.restaurantUserInfo.child(uid).child("addresses").push({
            city: city,
            district: district,
            street: street,
            apartmentOffice: apartmentOffice,
            displayName: displayName,
            email: email,
            phone: phone,
            address: address,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.getCurrentUserAddresses = function (uid) {
        this.userAddressList = this.restaurantUserInfo.child(uid).child("addresses");
        return this.userAddressList;
    };
    Service.prototype.removeFavItem = function (item) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(item.id);
        this.restaurantUserInfo.child(uid).child("favorites").child(item.id).remove();
    };
    Service.prototype.getUserFavouriteList = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItemList = this.restaurantUserInfo.child(uid).child("favorites");
        return this.favoriteItemList;
    };
    Service.prototype.getFavoriteItem = function (id) {
        console.log(id);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItem = this.restaurantUserInfo.child(uid).child("favorites").child(id);
        return this.favoriteItem;
    };
    Service.prototype.removeFavourite = function (id) {
        console.log(id);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.restaurantUserInfo.child(uid).child("favorites").child(id).remove();
    };
    Service.prototype.getItems = function (id) {
        console.log(this.items);
        this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
        return this.restaurantItems;
    };
    Service.prototype.getRestaurantsList = function () {
        console.log(this.restaurants);
        return this.restaurants;
    };
    Service.prototype.getCord = function () {
        console.log(this.restaurants);
        return this.cord;
    };
    Service.prototype.getRestaurantCategoryLists = function (id) {
        console.log(id);
        this.category = this.restaurantCategory.orderByChild("res_name").equalTo(id);
        return this.category;
    };
    Service.prototype.getItemLists = function (id) {
        console.log(id);
        this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
        return this.restaurantItems;
    };
    Service.prototype.getItemDetail = function (id) {
        console.log(id);
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items').child(id));
        console.log(this.items);
        return this.items.child(id);
    };
    Service.prototype.getExtraItems = function (id) {
        return this.extra;
    };
    Service.prototype.getItemExtraOptionsDetail = function (id) {
        console.log(id);
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items').child(id));
        console.log(this.items);
        return this.items.child(id).child("extraOptions");
    };
    Service.prototype.delOrder = function (id) {
        return this.orderList.child(id).remove();
    };
    Service.prototype.getOrderDetail = function (id) {
        return this.orderList.child(id);
    };
    Service.prototype.getOrderDetailItems = function (id) {
        return this.orderList.child(id).child("items");
    };
    Service.prototype.getRestaurantUserProfile = function (id) {
        return this.restaurantUserInfo.child(id);
    };
    Service.prototype.getcheckEmail = function (email) {
        return this.restaurantUserInfo.orderByChild("email").equalTo(email);
    };
    Service.prototype.getUserProfile = function (id) {
        return this.restaurantUserInfo.child(id);
    };
    Service.prototype.addRoom = function (uid, data) {
        return this.restaurants.child(data.id).child("chat").child(uid).child("-0000").set({
            //email: "We will touch you soon. Thanks for your message.",
            type: 'join',
            user: 'user',
            message: 'Welcome to restaurant.',
            sendDate: ''
        });
    };
    Service.prototype.addSavedJobs = function (jobId, user_id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.savedJobs.push({
            jobId: jobId,
            userId: uid,
            id: jobId + uid,
            user_id: user_id
        });
    };
    Service.prototype.removeSavedJobs = function (id, snapKey) {
        return this.savedJobs.child(snapKey).remove();
    };
    Service.prototype.getSavedJobs = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.savedJobs.orderByChild("userId").equalTo(uid);
    };
    Service.prototype.getSingleSavedJob = function (jobId, user_id) {
        console.log('jobId', jobId);
        console.log('user_id', user_id);
        return this.allJobList.child(jobId);
    };
    Service.prototype.addOrders = function (order, total, uid, payments, userProfiles, currentUserAddress) {
        console.log(userProfiles);
        return this.orderList.push({
            email: uid,
            items: order,
            total: total,
            payments: payments,
            customerDetails: userProfiles,
            addresses: currentUserAddress,
            status: "Queued",
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }); //.then( newOrder => {
        //this.orderList.child(newOrder.key).child('id').set(newOrder.key);
        //});
    };
    Service.prototype.addIdToOrder = function (newOrderKey) {
        return this.orderList.child(newOrderKey).child('id').set(newOrderKey);
    };
    Service.prototype.addIdToRestaurantOrder = function (orderKey, restaurantKey) {
        return this.restaurants.child(restaurantKey).child("orders").child(orderKey).update({
            id: orderKey
        });
    };
    Service.prototype.addNewOrdersToEachRestaurant = function (orderKey, restaurantKey, restaurantName, order, imagess, name, price, productId, quantity, restaurantId, restaurantNames, newOrderDetails) {
        console.log(orderKey);
        console.log(restaurantKey);
        console.log(restaurantName);
        console.log(order);
        return this.restaurants.child(restaurantKey).child("orders").child(orderKey).set({
            /***
        name: name,
       price: price,
       product_id: productId,
       quantity: quantity,
       restaurantId: restaurantId,
       restaurantName: restaurantNames,
       status: "Queued",
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
        reverseOrder: 0 - Date.now()
        */
            addresses: newOrderDetails.addresses,
            customerDetails: newOrderDetails.customerDetails,
            email: newOrderDetails.email,
            items: newOrderDetails.items,
            payments: newOrderDetails.payments,
            status: newOrderDetails.status,
            timeStamp: newOrderDetails.timeStamp,
            total: newOrderDetails.total
        });
    };
    Service.prototype.addNewOrdersToEachRestaurantExtra = function (orderKey, restaurantKey, restaurantName, /**extras,*/ order, imagess, name, price, productId, quantity, restaurantId, restaurantNames, newOrderDetails) {
        console.log(orderKey);
        console.log(restaurantKey);
        console.log(restaurantName);
        console.log(order);
        return this.categorizedOrders.child(order.owner_id).child(orderKey).set({
            addresses: newOrderDetails.addresses,
            customerDetails: newOrderDetails.customerDetails,
            email: newOrderDetails.email,
            items: newOrderDetails.items,
            payments: newOrderDetails.payments,
            status: newOrderDetails.status,
            timeStamp: newOrderDetails.timeStamp,
            total: newOrderDetails.total,
            restaurant_owner_id: order.owner_id
        });
        /**
                return this.restaurants.child(restaurantKey).child("orders").child(orderKey).set({
              // image: imagess,
              // name: name,
              // price: price,
              // product_id: productId,
              // quantity: quantity,
              // restaurantId: restaurantId,
              // restaurantName: restaurantNames,
              // extra: extras,
               
               addresses: newOrderDetails.addresses,
               customerDetails: newOrderDetails.customerDetails,
               email: newOrderDetails.email,
               items:newOrderDetails.items,
               payments: newOrderDetails.payments,
               status: newOrderDetails.status,
               timeStamp: newOrderDetails.timeStamp,
               total: newOrderDetails.total,
               restaurant_owner_id: order.owner_id
              });
              **/
        //return order;
        //.then( newOrder => {
        //this.orderList.child(newOrder.key).child('id').set(newOrder.key);
        //});
    };
    Service.prototype.categorizedRestaurantOrder = function (orderKey, restaurantKey, owner_id) {
        return this.categorizedOrders.child(owner_id).child(orderKey).update({
            id: orderKey
        });
    };
    Service.prototype.addToFavorite = function (data, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log("service");
        console.log(uid);
        console.log(data);
        this.restaurantUserInfo.child(uid).child("favorites").child(id).set({
            product_id: id,
            image: data.image_firebase_url,
            name: data.name,
            price: data.price,
            categories: data.categories,
            available: data.available,
            category: data.category,
            description: data.description,
            stock: data.stock,
            restaurantId: data.restaurantId,
            restaurantName: data.restaurantName,
            market: true
        });
    };
    Service.prototype.chargeStripe = function (token, currency, amount, secret_kay) {
        var _this = this;
        this.getSecKey = secret_kay;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        //var amounts = 1*Math.round(amount);
        //var totalAmounts = 1 * amounts;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + secret_kay);
        params.append("currency", currency);
        params.append("amount", amount);
        params.append("description", "description");
        params.append("source", token);
        alert("params-" + JSON.stringify(params));
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/charges', params, { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                alert("DATA" + data);
                resolve(data);
            });
        });
    };
    Service.prototype.getMyOrderList = function (id) {
        console.log(id);
        this.orderLists = this.orderList.orderByChild("email").equalTo(id);
        return this.orderLists;
    };
    /***
      addSettting(form){
        return this.setting.set({
          cod: form.cod,
          stripe: form.stripe,
          paypal: form.paypal,
          currency: form.currency,
          client_id: form.client_id,
          environment_sandbox: form.environment_sandbox,
          publish_key: form.publish_key,
          secret_kay: form.secret_kay
        });
      }
      */
    Service.prototype.saveRestaurantCustomers = function (displayName, phone, address, id) {
        return this.restaurantUserInfo.child(id).update({
            displayName: displayName,
            phone: phone,
            address: address,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.getOrderList = function () {
        return this.orderList.orderByChild("reverseOrder");
    };
    Service.prototype.getAds = function () {
        return this.ads.orderByChild("reverseOrder");
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Values = /** @class */ (function () {
    function Values(translateService) {
        this.translateService = translateService;
        this.avatar = "assets/images/person.png";
        this.listview = true;
        this.count = 0;
        this.currency = "USD";
        this.role = "CUSTOMER";
        this.cart = [];
        this.qty = null;
        this.isLoggedIn = false;
        this.userRole = "";
    }
    Values.prototype.changeRoll = function (role) {
        if (role == "Vendor") {
            this.role = "Vendor";
        }
        else if (role == "Customer") {
            this.role = "Customer";
        }
        else if (role == "Admin") {
            this.role = "Admin";
        }
        console.log();
    };
    Values.prototype.changecurrency = function (curr) {
        if (curr == "USD") {
            this.currency = "USD";
        }
        else if (curr == "INR") {
            this.currency = "INR";
        }
        else if (curr == "EUR") {
            this.currency = "EUR";
        }
        else if (curr == "KWD") {
            this.currency = "KWD";
        }
    };
    Values.prototype.changeLanguage = function (event) {
        if (event == 'arabic') {
            this.translateService.use('arabic');
            console.log(event);
        }
        else if (event == 'english') {
            this.translateService.use('english');
            console.log(event);
        }
        else if (event == 'russian') {
            this.translateService.use('russian');
            console.log(event);
        }
        else if (event == 'french') {
            this.translateService.use('french');
            console.log(event);
        }
        else if (event == 'hindi') {
            this.translateService.use('hindi');
            console.log(event);
        }
        else if (event == 'chinese') {
            this.translateService.use('chinese');
            console.log(event);
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the Function provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Functions = /** @class */ (function () {
    function Functions(alert, loadingController) {
        this.alert = alert;
        this.loadingController = loadingController;
    }
    Functions.prototype.showAlert = function (title, subTitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present(alert);
    };
    Functions.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                cssClass: 'custom-class',
                                spinner: 'crescent'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Functions.prototype.stopLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loading != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        self = this;
                        setTimeout(function () {
                            self.stopLoading();
                        }, 1000);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_list_job_list__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, values, nativeStorage, service, translateService, callNumber) {
        // this.chats= dataProvider.getall();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.chats = {};
        /**
        this.chats = [{
               id: 0,
               name: 'IT job',
               lastText: 'You on your way?',
               face: 'assets/img/glasses.jpg',
               price:'420',
               discout:'30%'
             }, ];
             */
        this.chats = [];
        /**
        this.chats = [{
              id: 0,
              name: 'IT job',
              lastText: 'You on your way?',
              face: 'assets/img/glasses.jpg',
              price:'420',
              discout:'30%'
            }, {
              id: 1,
              name: 'Manager',
              lastText: 'Hey, it\'s me',
              face: 'assets/img/cam.jpg',
              price:'400',
              discout:'10%'
            }, {
              id: 2,
              name: 'Waiter',
              lastText: 'I should buy a boat',
              face: 'assets/img/guitar.jpg',
              price:'320',
              discout:'20%'
            }, {
              id: 3,
              name: 'Software Engineer',
              lastText: 'Look at my mukluks!',
              face: 'assets/img/glasses.jpg',
              price:'350',
              discout:'15%'
            }, {
              id: 4,
              name: 'Chef',
              lastText: 'This is wicked good ice cream.',
              face: 'assets/img/cam.jpg',
              price:'260',
              discout:'25%'
            }];
        
        
        console.log('this.chats',this.chats)
        
        */
        this.layouticon = 'list';
        this.layout = "list-view";
    }
    ListPage.prototype.openDetail = function (imgpath, name, lasttext, price, discout) {
        /**  this.navCtrl.push(HomeDetailPage,{
            img : imgpath,
            name : name,
            lasttext:lasttext,
            price :price,
            discout:discout,
          });
          */
    };
    ListPage.prototype.changeicon = function () {
        console.log('change', this.layouticon);
        if (this.layouticon == 'grid') {
            this.layouticon = 'list';
            this.layout = "list-view";
        }
        else {
            this.layouticon = 'grid';
            this.layout = "grid-view";
        }
    };
    ListPage.prototype.initializeItems = function () {
        var _this = this;
        this.service.getJobCategoryList().on('value', function (snapshot) {
            console.log(snapshot.val());
            _this.chats = [];
            snapshot.forEach(function (snap) {
                _this.chats.push({
                    id: snap.key,
                    face: snap.val().face,
                    name: snap.val().name,
                });
            });
        });
        this.items = this.chats;
        /**
         this.service.getRestaurantsList().on('value', snapshot =>{
      
      console.log(snapshot.val());
      this.params.data.items = [];
      
          snapshot.forEach( snap =>{
              this.params.data.items.push({
                id: snap.key,
                title: snap.val().title,
                subtitle:  snap.val().info,
                backgroundImage: snap.val().firebase_url,
                icon: "ios-arrow-dropright",
                iconText: "ReadMore",
                phonenumber: snap.val().phonenumber,
                lat: snap.val().lat,
                long: snap.val().long,
                description: snap.val().info,
                firebase_url:snap.val().firebase_url,
                address:snap.val().address,
                category:snap.val().category,
                images:snap.val().image,
                img: snap.val().img,
                info: snap.val().info,
                mark: snap.val().mark,
                option: snap.val().option,
                outlet: snap.val().outlet,
                market:true,
              });
            });
            
            console.log(this.params.data.items);
          });
        
          this.items = this.params.data.items;
          */
    };
    ListPage.prototype.searchItem = function (ev) {
        this.initializeItems();
        console.log(this.items);
        console.log(ev);
        var val = ev.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.chats = this.items.filter(function (data) {
                console.log(data);
                return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListPage.prototype.goToJobList = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__job_list_job_list__["a" /* JobListPage */], { category: category });
    };
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getJobCategoryList().on('value', function (snapshot) {
            console.log('qwertyuio', snapshot.val());
            _this.chats = [];
            snapshot.forEach(function (snap) {
                _this.chats.push({
                    id: snap.key,
                    face: snap.val().face,
                    name: snap.val().name,
                });
            });
            console.log(_this.chats);
        });
        console.log(this.chats);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Category List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding>\n  <div class="search ">\n  <ion-searchbar (ionInput)="searchItem($event)" placeholder="Search category here...">\n    </ion-searchbar>\n	\n	</div>\n	 <div *ngIf="chats">\n	 \n  <ion-card *ngFor = "let chat of chats"  (click)="goToJobList(chat)">\n    <div>\n    <img src="{{chat.face}}"/>\n	\n    <div class="card-title">{{chat.name}}</div>\n    \n	\n	\n	</div>\n  </ion-card>\n	 <!---\n      <ion-card  *ngFor="let chat of chats">\n        <img src="{{chat.face}}" width = "100%" height = "150px;"/>\n		\n        <ion-card-content (click)="goToJobList(chat)">\n          <ion-card-title>\n            <b >{{chat.name}}</b>\n			\n			\n			\n          </ion-card-title>\n		  <!--\n		   <button (click)="showVacancyInfo(chat)" color="dark" ion-button style ="width:100%;">{{chat.name}}</button>\n		   -->\n		  \n		  <!--\n          <p>Empresa: Google</p>\n          <p>Salário: {{chat.lastText}}</p>\n		  -->\n		  \n           <!--\n        </ion-card-content>\n      </ion-card> \n	  -->\n    </div>\n	<!--\n    <div class="chat-list-wrap {{layout}}">\n      <ion-list>\n        <ion-item  *ngFor="let chat of chats" (click)="openDetail(chat.face,chat.name,chat.lastText,chat.price,chat.discout)">\n          <img  src="{{chat.face}}">\n		  \n          <div class="chat-list-title"><b>{{chat.name}}</b></div>\n		  <!--\n          <div class="chat-list-sub-title">{{chat.lastText}}</div>\n		  -->\n		  <!--\n          <div class="chat-list-price"><strong>Rs. {{chat.price}}</strong></div>\n		  -->\n		  <!--\n          <div class="chat-list-discount">More</div>\n		  -->\n		  <!--\n        </ion-item>\n      </ion-list>\n    </div>\n	\n	-->\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__applied_info_applied_info__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddDescriptionPage = /** @class */ (function () {
    function AddDescriptionPage(values, nativeStorage, navCtrl, navParams, service, translateService, callNumber, functions, loadingController, loadingCtrl) {
        //this.id = navParams.data.category.id;
        var _this = this;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.functions = functions;
        this.loadingController = loadingController;
        this.loadingCtrl = loadingCtrl;
        this.errors = ['', null, undefined];
        this.locations = {};
        this.userProfiles = null;
        this.form = {};
        this.dataLocation = navParams.data.dataLocation;
        this.currentUserAddress = navParams.data.currentUserAddress;
        console.log(this.dataLocation);
        console.log(this.currentUserAddress);
        this.currentUser = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().currentUser;
        this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
            _this.userProfiles = snapshot.val();
        });
        console.log(' this.userProfiles this.userProfiles this.userProfiles', this.userProfiles);
    }
    AddDescriptionPage.prototype.finish = function () {
        var _this = this;
        if (this.isResume) {
            this.isError = false;
            this.form.description = 'I am applying to this job';
            if (this.form.description != undefined && this.errors.indexOf(this.downloadURL) == -1) {
                this.currentUserAddress.userComment = this.form.description;
                this.service.applyJob(this.dataLocation[0], this.currentUserAddress, this.downloadURL).then(function (newJob) {
                    _this.service.addIdToJob(newJob.key);
                    _this.addToJob(newJob.key);
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddDescriptionPage.prototype.addToJob = function (newJobKey) {
        var _this = this;
        this.service.getJobDetail(newJobKey).on('value', function (snapshot) {
            //this.orderDetails = snapshot.val();
            //this.addresses = snapshot.val().addresses;
            //this.newOrderItems = [];
            // this.newOrderDetails = snapshot.val();
            //this.newOrderAddresses = snapshot.val().addresses;
            //this.newOrderItems = snapshot.val().items;
            console.log(snapshot.val());
            _this.jobDetails = snapshot.val();
            console.log('130000000', _this.jobDetails.experience);
            //   console.log(this.jobDetails);
            //   return;
            // this.service.addToEmployee(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails, this.userProfiles, this.downloadURL);
            // this.service.addToEmployee(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails, this.userProfiles, this.downloadURL);
            _this.service.addToEmployee(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.uid, _this.jobDetails.id, _this.jobDetails, _this.userProfiles, _this.downloadURL, '', '', '');
            //   this.service.addToWorker(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails, '9815393101', this.userProfiles.miles, this.userProfiles.profession, '5 yers', this.downloadURL);
            _this.service.addToWorker(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails, _this.userProfiles, _this.downloadURL, '', '', '');
            //   this.service.addToAppliedJob(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails.id, this.jobDetails, this.userProfiles.phone, this.userProfiles.miles, this.userProfiles.profession, this.downloadURL);
            _this.service.addToAppliedJob(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails, _this.userProfiles, _this.downloadURL, '', '', '');
            _this.functions.showAlert('Success', 'You have successfully send your resume to Employeer');
            var notis_data = {
                fromId: _this.currentUser.uid,
                toId: _this.dataLocation[0].user_id,
                type: 1,
                isRead: '0',
                data_params: { job: _this.dataLocation[0].name, city: _this.dataLocation[0].address },
                date: Date.now()
            };
            _this.service.addNotification(notis_data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__applied_info_applied_info__["a" /* AppliedInfoPage */], { jobDetails: _this.jobDetails });
        });
        // this.nav.setRoot(MyorderPage);	
    };
    AddDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDescriptionPage');
    };
    AddDescriptionPage.prototype.onChange = function (event) {
        this.selectedFile = event.target.files[0];
        this.disableSubmit = true;
        this.upLoad();
    };
    AddDescriptionPage.prototype.upLoad = function () {
        var _this = this;
        this.isError = false;
        this.presentLoadingDefault('Uploading...');
        var fileName = this.selectedFile.name;
        var storageRef = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage().ref('Products Image/' + fileName);
        var metadata = { contentType: 'image/jpeg' };
        var uploadTask = storageRef.put(this.selectedFile, metadata);
        uploadTask.on('state_changed', function (snapshot) {
            console.log(snapshot);
            var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log('upload' + progress + '% done');
            switch (uploadTask.snapshot.state) {
                case __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage.TaskState.PAUSED:// or Paused
                    console.log('upLoad is paused');
                    break;
                case __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.storage.TaskState.RUNNING:// OR Running
                    console.log('upload is running');
                    break;
            }
        }, function (error) {
            console.log(error);
            _this.presentLoader.dismiss();
        }, function () {
            _this.isResume = true;
            _this.downloadURL = uploadTask.snapshot.downloadURL;
            _this.disableSubmit = false;
            console.log(_this.downloadURL);
            console.log('success');
            _this.selected = true;
            _this.presentLoader.dismiss();
        });
    };
    AddDescriptionPage.prototype.presentLoadingDefault = function (msg) {
        this.presentLoader = this.loadingCtrl.create({
            content: msg
        });
        this.presentLoader.present();
    };
    AddDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-description',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/add-description/add-description.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <ion-title>Add Resume</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n<div form-group  uploadresume>\n<label>Upload Resume</label>\n<div resumelist>\n<label for="resume"><ion-icon name="ios-cloud-upload-outline"></ion-icon>\n	<p *ngIf="selected" style="color:green">Selected</p>\n	<span>Upload Resume File Here</span></label>\n\n<input type="file" name="resume" id="resume" style="display:none"  (change)="onChange($event)"/>\n</div>\n</div>\n	<!--ion-item style = "background-color : #DCF7C2;">\n	<ion-badge >\n	<h4><b>PlEASE WRITE ABOUT YOURSELF</b></h4>\n	<h4><b>WHY EMPLOYER MUST CHOOSE YOU</b></h4>\n	<h4><b>WHAT IS YOUR ADVANTAGE</b></h4>\n	</ion-badge>\n	</ion-item>\n	<ion-item style = "background-color : #DCF7C2;">\n    <textarea class="example"  type="text" [(ngModel)]="form.description" name="description" placeholder=\'Employee Description\' style = "width: 100%;height:220px;background-color : #DCF7C2;"></textarea>\n    </ion-item-->\n\n</ion-content>\n\n<ion-footer no-shadow>\n	<ion-toolbar position="bottom">\n	\n	<button round ion-button   text-uppercase block color="primary"  (click)="finish()" style = "width:100%;">Finish</button>\n   \n	<p *ngIf="isError" style="color: red;\n    width: 100%;\n    text-align: center;">Please upload resume</p>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/add-description/add-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_8__providers_functions_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], AddDescriptionPage);
    return AddDescriptionPage;
}());

//# sourceMappingURL=add-description.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseEduPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_stripe__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__education_education__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_description_add_description__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_chat__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the ChooseEduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseEduPage = /** @class */ (function () {
    function ChooseEduPage(alertCtrl, toastCtrl, nav, params, functions, service, values, payPal, stripe, translateService, Service1) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.params = params;
        this.functions = functions;
        this.service = service;
        this.values = values;
        this.payPal = payPal;
        this.stripe = stripe;
        this.translateService = translateService;
        this.Service1 = Service1;
        this.disableSubmit = false;
        this.orderDetails = {};
        this.paramse = {};
        this.addressList = [];
        this.isOkay = false;
        this.errors = [null, undefined, ''];
        this.chats = [];
    }
    ChooseEduPage.prototype.selectAddress = function (key, address) {
        this.currentUserAddress = address;
    };
    ChooseEduPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.categoryList = [];
        this.firebasedata = [];
        this.restaurants = [];
        console.log('data');
        this.payments = [];
        this.form = {};
        this.buttonText = "Place Order";
        this.currentUser = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth().currentUser;
        console.log('job----details', this.params.data.jobDetails);
        this.dataLocation = this.params.data.jobDetails;
        console.log(this.dataLocation);
        this.addressList = [];
        this.service.getUserEducationList(this.currentUser.uid).on('value', function (snapshot) {
            _this.addressList = [];
            snapshot.forEach(function (snap) {
                _this.addressList.push({
                    id: snap.key,
                    displayName: snap.val().displayName,
                    education: snap.val().education,
                    europeResult: snap.val().europeResult,
                    birthday: snap.val().birthday,
                    email: snap.val().email,
                    finished: snap.val().finished,
                    jobcategory: snap.val().jobcategory,
                    maximum: snap.val().maximum,
                    minimum: snap.val().minimum,
                    reverseOrder: snap.val().reverseOrder,
                    started: snap.val().started,
                    timeStamp: snap.val().timeStamp,
                    uid: snap.val().uid,
                    worked: snap.val().worked
                });
            });
        });
        setTimeout(function () {
            if (_this.addressList.length == 0) {
                _this.presentConfirm();
            }
        });
        this.service.getInbox(this.currentUser.uid).on('value', function (snapshot) {
            var all_spans = [];
            var i = 0;
            snapshot.forEach(function (snp) {
                all_spans.push({
                    id: snp.key,
                    fromId: snp.val().fromId,
                    toId: snp.val().toId,
                    isRead: snp.val().isRead,
                    roomId: snp.val().roomId,
                    message: snp.val().message,
                    date: snp.val().date
                });
            });
        });
    };
    ChooseEduPage.prototype.addNewEducation = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__education_education__["a" /* EducationPage */]);
    };
    ChooseEduPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Update Education',
            message: 'To start applying on jobs, Please update your education.',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Update Now',
                    handler: function () {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__education_education__["a" /* EducationPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ChooseEduPage.prototype.addDescription = function () {
        if (this.currentUserAddress != undefined) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_10__add_description_add_description__["a" /* AddDescriptionPage */], {
                dataLocation: this.dataLocation,
                currentUserAddress: this.currentUserAddress,
            });
        }
        else {
            this.presentToast('Please select an education from list');
        }
    };
    ChooseEduPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseEduPage');
    };
    ChooseEduPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ChooseEduPage.prototype.sendToEmployer = function () {
        // this.service.addToChat(this.currentUser.uid, this.params.data.jobDetails.user_id, this.roomId, this.message); 
    };
    ChooseEduPage.prototype.validate = function () {
        console.log('coming here');
        if (this.errors.indexOf(this.confirmEducation) >= 0) {
            this.errorRegisterMessage = 'Please confirm your education.';
            return false;
        }
        if (this.errors.indexOf(this.experience) >= 0) {
            this.errorRegisterMessage = 'Please enter years of experience.';
            return false;
        }
        if (this.errors.indexOf(this.whenCanJoin) >= 0) {
            this.errorRegisterMessage = 'Please tell us when can you join.';
            return false;
        }
        this.errorRegisterMessage = '';
        return true;
    };
    ChooseEduPage.prototype.finish = function () {
        var _this = this;
        this.downloadURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcVFRgVFRYZGRgaHCEaGhwcFiMeHh0fHBwcHB4dGCMeJy4lHx8rIRwdJzgrKy8xNTU1HiQ7QDszPy40NTEBDAwMEA8PHxARGjQhISExMTQxNDE0NDU0MTE0MTYxQDQ9NDQxNDQxPzQ/NEA0ND80ND80NTE/PzQ0MT81MTE0NP/AABEIAP8AxQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEBQEHBv/EAEAQAAEDAgMFBQUFBwMFAQAAAAEAAhEDIRIxQQRRYXGREyIygaEUUrHR8AUjQpLBFTNTYoLh8WOi0kNyg5OyNP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAQADAAMAAwAAAAAAAAAAAAABAhEDIUESMYH/2gAMAwEAAhEDEQA/AOgiLJt+1FglsTDyZv4WFw9Y6r0pnI1ytaLnurvaGOdZpJxnAJaO6BIDj3TeSCSJFs0G1PDi10YsbRGG2BznAFpm8gcCCDbJR8oTjoIuc3a3dj2hc2XtBYIgNL7AOM3AJEm2RWzZawexrxqOhyI8jIUxaJMWoiKUPCvolHwt5D4L52V9Eo+FvIfBYc/jSiaIi5moiIgIiICIiAiIgIiICIiAiIg+crFGJ7yGshowvJZLnywOiZENggXmbraqX0mF2Itl2/CfLnmV3zGueGCq9jKLH9nTBOFzW4QBiLQ5xbuOFpjkFHadqawksYwAvBxYC6fu3PxENgk2z0kldCjszGxhYBGVojS0qTNmYIhoEZWyhpaI/pJHJU+M+J1i2a7z3GNs1zoZJxFs+MGJBJvB13roNaBkALzYam5PNVs2RjSCGAEAARoAIA6K5WrGR2iZERFZDwr6JR8LeQ+C+dlfRKPhbyHwWHP40omipftTAcJe0OkCC4Ay64Ebyot2xhiHsM5Q4akgeoI8iuZq0IqBtbInGyLXxCLiR1F177UzPGyP+4aBx+DXH+k7kFyKt9drTBc0ECYJAtczy7ruh3LwbQyYxtm4jENACegIPmEFqKlu1MJgPbNrYhPe8PWbb1cgIiICIiAiIgIiIPnK6o+y2+zdtjOKJiBh8WHDOeLX6lcpdYfZTfZ+3xHFnEDD4sOHfi1+pXbeczvO2FY++nEbW/kd0/uvTV/ld0QVD7p+oXgqH3Dn+kyrag7U+45emr/K7p/dSY+cwRzUlKHjTImCOBXqIg8K+iUfC3kPgvnZX0Sj4W8h8Fhz+NKKauyU3GXMaTiDp1kDC09LdVEbFTEWEyL4jMtJcLkyYLj1UdppEuJFJrpiXF+GRbh9QqRsxJkUGRlPaZ+Uc/VczVf7FS3cjjdm0ucCDNiCXHruUR9m0SLMbBEWcRYzuO4kTuMZKoUYAcyg2SIPfuJ7u6/dMr1uyX/cNAMknHJ1+MoND9lY+CRithBxnLnN5kg75uqv2TQ9xuupnvAAmZzIAB3wFW2i4Q7sGSCDPabgbgxoYXtLZgCJotaNXNfkMMdNM9EGijsdNpxNaAZF5Ju1hYNdGuI5FacYykTzXPOykNltNmOCL2EGBGZkQSNEds9iBRYQbeOLEQfOwB/sg6MqJeN4356DMrAaRJP3IJMkxU1sQDa026LwbNuotzAHf0vJnpaEHRxjeOqSucaBcTioNvMkvmcWdovKsNCZcaTZIH473IJB5Ek+SDaDOS9WGkXsENogDOBUHAbvqFqovcR3m4TOWKfPIILEREHzldYfZTPZu3x97OLRnGHfi1+pXJXWH2Uz2ft8ZxZxbD4sOHfi1+pXbeczvO2FY++nF7Q+4fqPryXgqmJwHlPCUNQx4Dy6b+Z6L3tD7jlb9QlTeSJLS3geQUlWKl4wuHFO0N+6deSahYir7Q+676EqTHzoRzU6PSvolHwt5D4L52V9Eo+FvIfBYc/jSip+yMc7EWy615OmS8OwsmcAkcTvnetKLmaszdhYDIYMozORsot+zaYEYB1OnmtaIMw2FgvgGup1BB13Er0bIwZN3nM/iGE+lloRBlb9nsBxBtwIFzrM+d163YmB2IME5zJ0M7960ogzHYWRGARM65mPkOi8/Z9O/czzud0b91lqRBTS2ZjDLWwTnc+quREBERAREQfOV5C9Reg5lXYDe7rwhSZTgzJ8/L5KaKMgERFIIiIPCvolHwt5D4L52V9Eo+FvIfBYc/jSiaIi5moiIgIiICIiAiIgIiICIiAiIg5PslP3GfkHyT2Sn7jPyD5K5Y61aqHENYC28Gf5QWjO5LpG4DzWuyri72Sn7jPyD5J7JT9xn5B8lV277dz3ZtvcQ8C+ggjmtabKMU+yU/cZ+QfJPZKfuM/IPkrkTZMU+yU/cZ+QfJPZKfuM/IPkrkTZMU+yU/cZ+QfJfoWMECwy3LiLusyHJZ3mVqmAbh0TANw6LDtFasHENpgtgEOmdQCMMgkiS7iGxmVDZtorlzQ+k1rSXYiHThAAw63kys1nRwDcOiYBuHRc9teuYmmG94DPFYtucxk7PgDEmJrG0bRLB2bbluI5QCAXEd65BJEfy64hDR1MA3DomAbh0VezucWgvADtQDIF/kr0EMA3DomAbh0U0QQwDcOiYBuHRTRBDANw6JgG4dFNEEMA3DomAbh0U0QQwDcOiKaIPz6g9zoMATIi+YtJ049FNVV6YLXDDim5GKJyHlkMluoh2r7/AHY4d8btbL3tH37gkRbHn6W06rLgwg/cv3HvzoRziLIKA/guv/P6G/8Aa3KYGrtHwe4J074vfla11AVnz+7A/wDIN/Ll1VL6QmezeTAyfwAgfCT52heGiLfdHf47gkj/AIhBroveTDmYbTOKb7lcs7HuaC0MMNsO9MgGBHGL366r2nWcSAWEDUkjj/brwUi9d1mQ5LhLusyHJZ3TDLVqVQSGtYRFiXEEZZiL67slEVqpBhjcjBL8yMgYBgTY7lKvRp4i9wlzO9mbQJmJiYCzE7OcxoBk4WFh/wDPoqLLe0rx4GE8HkD8JgW4uE8J1hWNq1C1xwtDhOGHYgd27WdRkqKVSgO8JEGx72cN/Rw6nivcdBtvL8RyaW/AkIDdqqwSW0+BD7HUx/Tfy4qTq9WbNYWhveOOIdrv7searaaBEDKcRgOEkd2TvN1Jtag0FotOcB06C5z1HVBOltFYug0mhtr9pNicwAN31u6C5RNCJNxOZxZmxz+rcFbT2yk1oAkCS0WNzmY1Ofqg6CLEftKn7/ofkvW/aDCYBuSB4TmTA0QbEWP9oU/e/wBp+S9ZtzHEAG5ysflxHUINaKmjWa8S0yOSuQEREH59VVxLXAtOg55GRE2HKbG2U2qquzuu8Rm8NN9LN3ZfFbqMrGWIwPvn3vhykqLGFpPceSCSO/IN/h5TGa8w5W2jXX0Meg4pY5trFp0OW/fZQNZrugHA682taN/NRG0u/hu+t/1rzjxuyyAcdQWyL7jKx6KbtlB/E8Wiz468UF4KIikF3WZDkuEu6zIclndMPKxgEzFjeJi2a5wrGCTXEZ/uwDE4Qc73B6rbWmHHEBaxIiLZkmQR5LJ7QTlUpZEzmIF/mc9/NUWQbtBwud27SIF8FhcSeP6Sp0KjnOhtYGJtg3HfOf1Cia7tKtKc9ImBY8Nd91N203MVaesTE8NboLhRqCPvJjPui4tPI5oKL5vUtewYBnMa6SOcKltZ5I+8ZFnEAGcJIPwOf+RD2lxDSKlOCJuCLZ6nX++lw0N2eoP+oOP3Yud5unY1IA7UaycAvfQTaBG9RoPe64exzcrAm8b54j+2syyr7zdfw9EHnYVP4o/9YjhrovewfpV3fhGgg9TJTBUv3m8O7xGflI+WnpFSBdoMXsYmLx5z6eYQbQq96aovYQwWyvnnn6KQo1Lfej8g89V5gq37zdY7usWnhPw1Xrm1STDmgSYtJjRB42hVtNUce4PRaaYIAkyYuYiTvjRV0mvB7xBEWgQZ4rQgIiIPz6qrjuunEdbZ6Wb013lWqD6cgjE4SdLEZWaRy1nM8At1GFsf6xkRcZD5z8boHA3muZiOn0fNaewd/Ed0CPoOOVRwy0GgieeqgQp7OS0EvflkTBuSYdxEx5K+jSw/iceZnf8AXkoGg733crf5UqNJzTJeXcwB8FItREQF3WZDkuEu6zIclndMK6uLC6MOXdnLL8XBYmOde9DjEmxkXPIEeRWyuThdIEQYk52viBgAefRZBSIkdnSAkQLCzREniLxw1Cosj2rry7Z7Z3O7VHuda9DWZOVzlbQRnxXopkZ0qQmd1yBLR1DenTzsyMqVImLgQDcxA+PpyCdSo8Rh7ESLyTvMZaQPQqOJw1oRaL6ZH/dYLx1LQ06RFwCY8JJj4nrxgTFAkd6jTmLCxE4piY4kzGd0FlHHEtFODMxIkiQP09VL77/T/wB31uUQaomGN6xPy/z5+l9X3Wn+rhmgHtptgi2+9hPlMqQ7W/g4Z7xn5YvRKjqs91rYnUm49I9Uc+pJhrYk3nTTzQeN7W84JgxmLyInhE+iiO3/ANPX3vIcuKkH1dWt/MemXr9H1zqmjR4omfwyZMb4Qe0+0kYsMXmJnN0R5YfValRRLjOMAboMzvV6AiIg/PrHX+0mMLg4O7pgmBGTTa8nxNHnuBK2LMdqph+AkB8xEXJgf8gFuoj+0Wb/AMYpza7ichfznKFA/arAJIeM5EAmzcWQJm26VIbfStJDbCxaQYiRplB9VIbbTJjEJE2gzkeG4KBoo1A9rXtuHAOHIiQpLJ+0afvjofS18lJu3sLg0OucrHWOHEdVI0oiIC7rMhyXCXdZkOSzumFdYEtcAAbECTYyNdy53YWINBpiPxi5gRG69hyC6FaS1wwk2NpjFbIRcblgOzN/gu3+MxaTvzy681RZN1CwmgDcmMYgGQBzkAKL9m07BpH/AHgDK9uZI/yj9laCQKLiAI8Rvcu1O/5ZKbqDRA7JxiA3vHUFx1tBtJ3oIihNuwaASJOIZWBNs7T0G9aKdWpYGmNJOMW/U26rKaTTA7F1hA72UCQM756SP0kNlaSCaRE28ZteO8JjIAzfhpIaBWqGfuhlbvgyZ5eaOr1dKQ/OFmZs7RIFF0Hu+KRAPO2QUXbK2D904d4ZPJOpJzyH6lBqbtFSSOyixI7w3gQdxgk+S97ep/CH5x9f4WVmztgzQIsY7xMwDnxsBrnaVeNoLG/unQ0WAOLLQaoLBWqQfuxNoGMX3za3qtiqpOJaCRB1EzCtQEREBERB+fVPZuxEh5iZwwDoLbxl6q5c6tswLy7sA4kg4sQBsABN92S3UaWUXiPvCQAMwDPEnPJKTXfxMQGdhaRIy4XWU7KILRs4gm8PAmMjPmV6/ZgXT2El2ZxgXyynIfqoGxtJ0EYzfhl3Y3zxzmZuq6VAghxqF2oByuIHx+hZZKezNDjh2eCLzjAzETbgg2JoBPs4sPeBOggeXlZB1JQFcw7III9nF97xuj4KwbK0PBFEWIAdiGW+J3IN67rMhyXCXdZkOSpdMIPcDLSRle9xP+VR7A33n5R4j9Z38lRtWxte/vUQ6Yl0gWiL3kxJt87Z2/ZrWho9ma7C0AHENJte5IxOuqLN/sTbCTkbYt562m3NROxtmC50nQv0DsVh6cjxKpGytdha6jYTHemJA8N5Ay9fOVXZ+0Hfo5QfEACYLrwbwe7J946EoLxsgE3df+Y6mbbr+lsoXj9gabS4CAIDoFhA9Fhb9njD/wDnYCBhAxwMME6cfjnZWs2BuF00WzIIaDqJg58TuQavYmwRLgDGTt0/Gb+SexDe/wDOdxtyv9QuZU+y2lrR7O2RIID7RItJIkGwy04AHq7GwtbBaGwTAabRn8ZQPY2xEuznxHdCj7C3e7KLOI1J04krYiDGdhbe7hM5POoieevO+a9qbE1xkl1+K1ogy09ja0ggm3Hnn1PpuEakRAREQfn1iq05cZpkibEOtkJJGgtx5ZLasFeiC8nA/wDpdAOVz66n07u6iDqUXNJ9ho8m5zgDkL/4WhmxscAS0ibwXGb6GPgqHUxP7t+ZPi4i2fpwO+51MEzgeYtIcbx0t9blA1v2VpMmSeZ0371W7YGW8Q5OP6ql1AB3he4GD4jAnfr8dFBzQBenUvbOToZ5y1Bt9lbixQZmcznyyVywdgMWHA+JiS61tfqPQLT7K3FivMznbopFy7rMhyXCXdZkOSzumFdaQHHFAixjK1yd6wtrk5VwTFvu+EyfIHz6LdVnC7vAWsSMrZm9/Rc/2p1oq0Sf7ZyDANwqLJv2gho++bvns9CYFp3g8+Cg7aiI+/bMjNkA3uOcSpnaHAD7ylJiN0ax1+skbWJiKlHfbUxJi/MoPXV9e2AGV26kSPOIKgNodgLu2aBJOIsjugNmRoRfnIyU6W0mf3lKDkBa8iZvuso+1WvVpZSLjSDrwQeio6Q3txi8Mdn+LPytp5rw7Rb9+JznBbLUblN9dwIGOkMsU5g5i02lsG6rFZxgdpRnKI/ED3cN76ecRCCbtpDgXCsABecOQwgX394zuud1onaJOIVobJEYMiTYeh9UNUiCalHDJBJixAlsXixLTCl2riBFSlBBjuwYGZEnIRu0QeP2iAPvmixJODMWE8ADnz0Xrdph0GsN0YIMggHzkxCDaMzjpbp0kEGCZ3E+i8NYgfvaIJAw5WkSCL3tfjGiCyhicJbVB/o1jW/1xWug1waA52I6mIny0WP2iDPaUw0kEX/DMWORyIWqltDXeF7XciDlE5cx1QXoiIPz6zv2duInEQSZMOztFx0Whc7aTRxOD5m8+I5NE2GUAj6lbqLzsQ0c8aeM6LQxkACSY1OZ5rN+0WC0nh3Te8W84F0H2jTuC4iDF2neQDlkSLKBrRZD9osESSJE5byWiYyuCpM25hMA9WkaE7twKnRpRY2fadMicR82OB+Ct2ba2P8AA6dciM90i6C9d1mQ5LhLusyHJZ3TCutOF0YcrYssvxcFhaXC57AXi3OInoPJdGsJaREyCI32yXNbsrv4VIeU75/X46wKLDWuiCKEQAM4tb4z8F7cAXoWyEwA6XZHkR6qY2d0QaVPunu7oIvG7dl/bzsHTPZ0p1Ouci8cr7xroHgkYZFAEETfICD3bZiTHVMbrfuLgwJ35euasOzkx3KeUExlEgADWBH1l57KTnTpZRMTqLZCbT0CDxuLEMXY3uCCZIyBE+Si5zokdhPPXukHK/8AhXUaBNqjGREWv8dFZ7GyScDb52z5jegyguAiKOQIvAMkTP8AT+iFzgf+hbjcAnlrPqtY2RgjutsAMrwBAE55WUhsrPcb+UcPkOgQUU3Na0Y+zBytEHlPI9FMtp4cJw4RA03WHRSZsrAIDWwMrTmSfiSpezM9xuc+EZxE9LIHZtcJgERGQyuCB6qTaTREACMrKTGBogAAbgpoCIiD8+s76by4kPhpFhgEiwi/OStCz1dtY2cRNpB7p0bjPOBdbqItpVL99uVoZrqVfSDh4nTyELP+0WRMmDhg4TfHGGLX8Q6qY21m/wDEGCxu4iQ0bzCgaZXiyD7SpxOIjLNpEYm4hNrSAT5FX7PtDXiWGRbSMwHDPgQpFi8A9Ml6iAu6zIclwl3WZDks7phNERUWEREBERAREQEREBERAREQEREH59ZqhpycQZi1lokwOV4H6rSsz6T8RIwQd7b5an05Qt1Btamci2Z3Xmc8t+qi2tRPeGDQzhE6kaTNivRSfr2c6d08fmpupmLNZiteLcdPLzUCOOliiG4gY8NxFrW4DoF6ytTaJBaATFhEmLc7QoOovIEFgde+HlfI6yenlbRpQIdhJ4NA8uN5QDtbPfb+YK4FQNFueFvQKYCkF3WZDkuEu6zIclndMJoiKiwiIgIiICIiAiIgIiICIiAiIg/PoiLdQREQEREBERAXdZkOS4S7rMhyWd0wmiIqLCIiAiIgIiICIiAiIgIiICIiD//Z';
        if (this.validate()) {
            this.addressList[0].userComment = 'Some comment';
            this.service.applyJob(this.dataLocation[0], this.addressList[0], this.downloadURL).then(function (newJob) {
                _this.service.addIdToJob(newJob.key);
                _this.addToJob(newJob.key);
            });
        }
    };
    ChooseEduPage.prototype.addToJob = function (newJobKey) {
        var _this = this;
        this.service.getJobDetail(newJobKey).on('value', function (snapshot) {
            console.log(snapshot.val());
            _this.jobDetails = snapshot.val();
            _this.service.getUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
            });
            _this.service.addToEmployee(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.uid, _this.jobDetails.id, _this.jobDetails, _this.userProfiles, _this.downloadURL, String(_this.confirmEducation), String(_this.experience), String(_this.whenCanJoin));
            _this.service.addToWorker(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails, _this.userProfiles, _this.downloadURL, _this.confirmEducation, _this.experience, _this.whenCanJoin);
            _this.service.addToAppliedJob(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails, _this.userProfiles, _this.downloadURL, _this.confirmEducation, _this.experience, _this.whenCanJoin);
            _this.functions.showAlert('Success', 'You have successfully send your resume to Employeer');
            var notis_data = {
                fromId: _this.currentUser.uid,
                toId: _this.dataLocation[0].user_id,
                type: 1,
                isRead: '0',
                data_params: { job: _this.dataLocation[0].name, city: _this.dataLocation[0].address },
                date: Date.now()
            };
            _this.service.addNotification(notis_data);
            var roomID;
            if (_this.chats.length != 0) {
                for (var _i = 0, _a = _this.chats; _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (key.fromId == _this.dataLocation[0].user_id || key.toId == _this.dataLocation[0].user_id) {
                        roomID = key.roomId;
                        _this.addToChat(roomID);
                        break;
                    }
                    else {
                        roomID = _this.genRandromid();
                        _this.addChat(roomID);
                    }
                }
            }
            else {
                roomID = _this.genRandromid();
                _this.addChat(roomID);
            }
        });
    };
    ChooseEduPage.prototype.addChat = function (roomID) {
        var chat_data = {
            fromId: this.currentUser.uid,
            toId: this.dataLocation[0].user_id,
            message: 'A candidate has applied for job - ' + this.jobDetails.name,
            roomId: roomID,
            isRead: '0',
            date: Date.now()
        };
        this.Service1.addChat(chat_data);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__chat_chat__["a" /* ChatPage */], {
            fromId: this.dataLocation[0].user_id,
            roomId: roomID
        });
    };
    ChooseEduPage.prototype.addToChat = function (roomID) {
        var _this = this;
        this.service.addToChat(this.currentUser.uid, this.dataLocation[0].user_id, roomID, 'A candidate has applied for job - ' + this.jobDetails.name).then(function () {
            // this.nav.setRoot(AppliedInfoPage ,{jobDetails: this.jobDetails});
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_11__chat_chat__["a" /* ChatPage */], {
                fromId: _this.dataLocation[0].user_id,
                roomId: roomID
            });
        });
    };
    ChooseEduPage.prototype.genRandromid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    ChooseEduPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-edu',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/choose-edu/choose-edu.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <ion-title>Apply Now</ion-title>\n	\n	\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="register-form" >\n	<div logo>\n	 <!-- <h1>Create Account</h1> -->\n	  <h2>Fill the following to proceed.</h2>\n	</div>\n		  <!--ion-card-->\n		 \n				<ion-list>\n							<div form-group>\n								<label>Please confirm education</label>\n									<ion-item>\n									<ion-label><ion-icon name="ios-school-outline"></ion-icon></ion-label>\n									<ion-textarea rows="4" required type="text"  placeholder="Confirm education"  name="education" [(ngModel)] = "confirmEducation"></ion-textarea>\n								</ion-item>\n							</div> \n\n							<div form-group>\n								<label>Years of experience</label>\n								<ion-item>\n								<ion-label><ion-icon name="ios-clipboard-outline"></ion-icon></ion-label>\n								<ion-input required type="number"  placeholder="Years of experience"  name="education" [(ngModel)] = "experience"></ion-input>\n								</ion-item>\n							</div> \n\n							<div form-group>\n								<label>When are you available to start?</label>\n								<ion-item>\n								<ion-label><ion-icon name="ios-briefcase-outline"></ion-icon></ion-label>\n								<ion-textarea rows="4" required type="text"  placeholder="When are you available to start?"  name="education" [(ngModel)] = "whenCanJoin"></ion-textarea>\n								</ion-item>\n							</div> \n\n\n							<div form-group *ngIf="errors.indexOf(errorRegisterMessage) == -1">\n						 \n								<ion-item>\n									<p class="errorMsg"  style="color: red">{{errorRegisterMessage}}</p>\n								</ion-item>\n							</div> \n \n\n				</ion-list>\n				   \n				<div login-btn>\n					<button round ion-button block color="secondary" type="submit" class="button button-block button-default" text-uppercase    (click)="finish()">Send to Employer</button>\n				 </div>\n		  <!--/ion-card-->\n	   </div>\n	\n	\n	</ion-content>\n	'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/choose-edu/choose-edu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */]])
    ], ChooseEduPage);
    return ChooseEduPage;
}());

//# sourceMappingURL=choose-edu.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterModalPage = /** @class */ (function () {
    function FilterModalPage(ViewController, modalCtrl, navCtrl, navParams) {
        this.ViewController = ViewController;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filter = {};
        this.isActive = true;
        this.filter = this.navParams.get('filters');
    }
    FilterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterModalPage');
    };
    FilterModalPage.prototype.dismissModal = function (s) {
        if (s == 0)
            var data = { status: 0, filter: this.filter };
        else
            var data = { status: 1, filter: this.filter };
        this.ViewController.dismiss(data);
    };
    FilterModalPage.prototype.clearAll = function () {
        var _this = this;
        this.filter = {};
        this.isActive = false;
        setTimeout(function () {
            _this.isActive = true;
        }, 0.1);
    };
    FilterModalPage.prototype.checkExperience = function () {
        console.log(this.filter.isExpeience);
    };
    FilterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter-modal',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/filter-modal/filter-modal.html"*/'<ion-header>\n	<ion-navbar color="primary" text-center>\n	<button slot="start" rigthLoc ion-button menuToggle1 (click)="dismissModal(0)">\n		<ion-icon name="close-circle"></ion-icon>\n	  </button>  \n	  <ion-title>Filter Jobs</ion-title>\n	  <!-- <button slot="end" rigthRoc ion-button menuToggle1 (click)="dismissModal(0)">\n		<ion-icon name="checkmark-done-outline"></ion-icon>\n	  </button>   -->\n	  <ion-icon rigthRoc name="checkmark" (click)="dismissModal(1)"></ion-icon>\n	</ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n    	<h1>Filter jobs</h1>\n\n		<ion-item  class="item-borderless list" *ngIf="isActive">\n			<ion-label style="padding-top: 10px;">Experience</ion-label>\n			\n				<ion-checkbox  [(ngModel)]="filter.isExperience" (ionChange)="checkExperience()"></ion-checkbox>\n				<ion-range color="danger" pin="true" max="20" [(ngModel)]="filter.experience" [disabled]="!filter.isExperience"></ion-range>\n			\n		</ion-item>\n\n\n	  <ion-item class="item-borderless list"  *ngIf="isActive" style="padding-bottom: 10px;">\n		<ion-label >Short Job</ion-label>\n		<ion-checkbox  [(ngModel)]="filter.shortJob"></ion-checkbox>\n	  </ion-item>\n	  \n	  <h1>Sort jobs</h1>\n\n	<ion-list radio-group [(ngModel)]="filter.byDate">\n\n		<ion-list-header>\n			By Date\n		</ion-list-header>\n	\n		<ion-item>\n		  <ion-label>Ascending</ion-label>\n		  <ion-radio value="1"></ion-radio>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Descending</ion-label>\n			<ion-radio value="0"></ion-radio>\n		  </ion-item>\n\n	</ion-list>\n \n\n\n	<ion-list mt15 radio-group [(ngModel)]="filter.byAlpabets">\n\n		<ion-list-header>\n			By Alphabets\n		</ion-list-header>\n	\n		<ion-item>\n		  <ion-label>Ascending</ion-label>\n		  <ion-radio value="1"></ion-radio>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Descending</ion-label>\n			<ion-radio value="0"></ion-radio>\n		  </ion-item>\n\n	</ion-list>\n \n\n \n<!-- <ion-button (click)="clearAll()">\n	Clear Filter & Sort\n</ion-button> -->\n\n<button  class="login-button" round ion-button block color="secondary" (click)="clearAll()" class="button button-block button-default" text-uppercase>Clear Filter & Sort</button>\n</ion-content>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/filter-modal/filter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FilterModalPage);
    return FilterModalPage;
}());

//# sourceMappingURL=filter-modal.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOfferDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_status_change_status__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_printer__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var JobOfferDetailsPage = /** @class */ (function () {
    function JobOfferDetailsPage(printer, Service1, nav, navParam, service, translateService, iab) {
        var _this = this;
        this.printer = printer;
        this.Service1 = Service1;
        this.nav = nav;
        this.navParam = navParam;
        this.service = service;
        this.translateService = translateService;
        this.iab = iab;
        this.cord = window;
        this.images = ['.jpeg', '.png', '.jpg', '.gif'];
        this.docs = ['.doc', '.docx'];
        this.tech = {};
        this.profession_types = ['', ' Dental Assistant', 'Dental Hygienist', 'Dentist'];
        this.jobDetails = navParam.data.locations;
        console.log(this.jobDetails);
        console.log(this.jobDetails.id);
        var myID = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser.uid;
        this.service.getJobApplicantDetails(this.jobDetails.id).on('value', function (snapshot) {
            console.log(snapshot.val());
            _this.tech = [];
            _this.tech = snapshot.val();
            console.log(_this.tech);
        });
    }
    JobOfferDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad JobOfferDetailsPage');
    };
    JobOfferDetailsPage.prototype.changeStatus = function (tech) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__change_status_change_status__["a" /* ChangeStatusPage */], { tech: tech });
    };
    JobOfferDetailsPage.prototype.openResume = function (resume) {
        console.log(resume);
        // var mime_type = 'image/jpeg';
        // if(this.images.indexOf(resume) >= 0){
        // 	mime_type = 'image/jpeg';
        // }
        // else if(resume.indexOf('.pdf') >= 0){
        // 	mime_type = 'application/pdf';
        // }
        // else if(this.docs.indexOf(resume) >= 0){
        // 	mime_type = 'application/msword';
        // }
        var browser = this.iab.create(resume);
    };
    JobOfferDetailsPage.prototype.markReviewd = function () {
        var _this = this;
        this.tech.applicationViewed = true;
        setTimeout(function () {
            _this.Service1.markAsChecked(_this.tech, _this.jobDetails.id);
        }, 100);
        console.log(this.tech);
    };
    JobOfferDetailsPage.prototype.print = function () {
        var options = {
            name: this.tech.education.displayName,
            printerId: 'printer007',
            duplex: true,
            landscape: true,
            grayscale: true,
        };
        var content = 'Job: ' + this.tech.name + '\n' +
            'Name: ' + this.tech.education.displayName + '\n' +
            'DOB: ' + this.tech.education.birthday + '\n' +
            'Gender: ' + this.tech.education.europeResult + '\n' +
            'email: ' + this.tech.education.email + '\n' +
            'Experience: ' + this.tech.education.worked + '\n' +
            'Available On: ' + this.tech.whenCanJoin + '\n' +
            'University Started on: ' + this.tech.education.started + '\n' +
            'University Finished on: ' + this.tech.education.finished + '\n';
        this.printer.print(content, options).then(onSuccess, onError);
        function onSuccess(succ) {
            console.log(succ);
        }
        function onError(error) {
            console.log(error);
        }
    };
    JobOfferDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-offer-details',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/job-offer-details/job-offer-details.html"*/'<ion-header>\n  <ion-navbar color="primary"> \n    <ion-title>Job Offer Details</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n<div jobinfo> \n	<div jobimg>\n	  <img src="assets/img/bg-profile.jpg">\n	</div>\n	<div userimg>\n	  <img src="{{tech.face}}"> \n	</div>\n	<h2>{{tech.name}}</h2>\n	<!-- <p address><b>Expires&nbsp;</b> {{tech.localdate}}</p> -->\n	<p address>{{tech.timeStamp | date}}</p>\n</div>\n\n<div class="btn-bottom">\n  \n		<button ion-button block round  color="secondary" (click)="!tech.applicationViewed ? markReviewd() : \'\'" item-end >{{!tech.applicationViewed ? \'Mark as viewed\' : \'Marked as viewed\'}}</button>\n\n</div> \n<br>\n\n<div class="btn-bottom">\n  \n	<button ion-button block round  color="secondary" (click)="print()" item-end >Print Resume</button>\n\n</div> \n\n\n<div jobdetail>\n	<div joblist>\n	   <h2 heading>Job Information</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2 #printer id="printer">Job Name</h2> \n			  <p>{{tech.name}}</p>			\n			</ion-item>\n			<ion-item>\n		\n			<ion-icon item-start name="ios-pin-outline"></ion-icon> 			\n			  <h2>Location</h2> \n			  <p>{{tech.address}}</p>			\n			</ion-item>\n			\n			<ion-item>\n			<ion-icon item-start name="ios-call-outline"></ion-icon> 			\n			  <h2>Phone No</h2> \n			  <p>{{tech.phone}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Salary</h2> \n			  <p>${{tech.minsalary}} - ${{tech.maxsalary}}</p>			\n			</ion-item>\n		 	<ion-item>\n			  <h2>Job Description</h2> \n			  <p>{{tech.description}}</p>			\n			</ion-item>\n	</div>\n	<div joblist>\n	   <h2 heading>Employee Information</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Name</h2> \n			  <p>{{tech.education.displayName}}</p>			\n			</ion-item>\n			<ion-item>\n		\n			<ion-icon item-start name="ios-mail-outline"></ion-icon> 			\n			  <h2>Email</h2> \n			  <p>{{tech.education.email}}</p>			\n			</ion-item>\n			<ion-item>\n				<ion-icon item-start name="ios-call-outline"></ion-icon> 			\n			  <h2>Phone Number</h2> \n			  <p>{{tech.user_phone}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Key Skills</h2> \n			  <p><span>{{tech.profession != \'\' && tech.profession != undefined ? profession_types[tech.profession] : \'\'}}</span></p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-document-outline"></ion-icon> 			\n			  <h2>Education</h2> \n			  <p>{{tech.education.education}}</p>			\n			</ion-item>\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Started</h2> \n			  <p>{{tech.education.started}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Finished</h2> \n			  <p>{{tech.education.finished}}</p>			\n			</ion-item> -->\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Work Experience</h2> \n			  <p>{{tech.education.worked}}</p>			\n			</ion-item> -->\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Expected Salary</h2> \n			  <p>${{tech.education.minimum}} - ${{tech.education.maximum}}</p>			\n			</ion-item> -->\n			<!-- <ion-item>\n				<ion-icon item-start name="ios-pricetags-outline"></ion-icon> 			\n			  <h2>Status</h2> \n			  <p><span>{{tech.status}}</span></p>			\n			</ion-item> -->\n			<!-- <ion-item>\n				<ion-icon item-start name="ios-document-outline"></ion-icon> 			\n			  <h2>Resume</h2> \n			  <div resume><img (click)="openResume(tech.resume)" src="assets/img/cv.png"></div>			\n			</ion-item> -->\n	</div>\n	\n	<!-- <div accept-reject>\n		 <button ion-button round block color="secondary" text-uppercase (click)="changeStatus(tech)">CHANGE STATUS</button>\n		</div> -->\n\n</div>\n\n<!--ion-card style = "background-color : #B0E37C;"  style="">\n\n <ion-title style = "background-color : #B0E37C;">\n    <h2 style = "padding:10px;color:white; text-transform: uppercase;width:100%;"><b>{{tech.education.displayName}}</b></h2>\n	\n	</ion-title>\n\n  <ion-item>\n \n	<p style = "float:right;">{{tech.timeStamp | date}}</p>\n    \n	\n	\n  </ion-item>\n  \n  	   \n       \n\n  <img src="{{tech.face}}">\n\n  <ion-card-content>\n  <ion-badge>\n    <h2>JOB INFORMATION</h2>\n	</ion-badge>\n	\n	<div style ="padding-left:10px;">\n	\n	<p><b>Job Name: {{tech.name}}\n	\n	\n	</b></p>\n	<p><b>Description: {{tech.description}}</b></p>\n	\n	<p><b>Address: {{tech.address}}</b></p>\n	<p><b>Phone: {{tech.phone}}</b></p>\n    	\n	<p><b>Min Salary: {{tech.minsalary}}</b></p>\n	<p><b>Max Salary: {{tech.maxsalary}}</b></p>\n	<p><b>Expires: {{tech.localdate}}</b></p>\n	\n	</div>\n	<ion-badge>\n	<h2>EMPLOYEE EDUCATION INFO</h2>\n	</ion-badge>\n	<div style ="padding-left:10px;">\n	<p><b>Name: {{tech.education.displayName}}</b></p>\n	<p><b>Email: {{tech.education.email}}</b></p>\n	<p><b>Gender: {{tech.education.europeResult}}</b></p>\n	<p><b>Birthday: {{tech.education.birthday}}</b></p>\n	<p><b>Education: {{tech.education.education}}</b></p>\n	<p><b>Started: {{tech.education.started}}</b></p>\n	<p><b>Finished: {{tech.education.finished}}</b></p>\n	<p><b>Wanted Salary Min: {{tech.education.minimum}}</b></p>\n	<p><b>Wanted Salary Max: {{tech.education.maximum}}</b></p>\n	<p><b>Worked years: {{tech.education.worked}}</b></p>\n	<p><b>User Comment: {{tech.education.userComment}}</b></p>\n	</div>\n	<ion-badge style="float:right;background-color:green;margin-top:20px;"><h2>STATUS: {{tech.status}}</h2></ion-badge>\n  </ion-card-content>\n</ion-card-->\n\n\n\n\n<!----\n<div class="bg">\n  </div>\n\n  <div class="main-cnt">\n\n	\n	\n\n        \n	  \n      \n\n	\n    <ion-list no-lines>\n\n	\n	\n      <ion-item>\n	  \n        <ion-icon name="contacts" item-start></ion-icon>\n        <p style = "color:red;">Job Name:</p> \n		<p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n      <ion-item>\n        <ion-icon name="logo-facebook" item-start></ion-icon>\n        <p style = "color:red;">Address:</p> \n		\n		<p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n      <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n        <p style = "color:red;">Phone:</p> \n		<p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n	  \n	    <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n        <p style = "color:red;">Start date:</p> \n		<p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n	  \n	    <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n       <p style = "color:red;"> Finish date:</p> \n	   <p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n	  \n	    <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n        <p style = "color:red;">Job Poster Name:</p> \n		<p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n	  \n	    <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n        <p style = "color:red;">Applier Name:</p> \n		<p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n	  \n	    <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n        <p style = "color:red;">Min salary:</p> \n		<p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n	  \n	   <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n       <p style = "color:red;"> Max salary:</p> \n	   <p style = "color:red;">{{jobDetails.name}}</p>\n        \n      </ion-item>\n\n	  \n	  \n	 \n	  	  <ion-item>\n	  <button ion-button icon-left  (click)="goToHome()" clear big>\n        <ion-icon name="arrow-back"></ion-icon>\n        {{"Back To Home " | translate}}\n      </button>\n	  </ion-item>\n\n	  \n	  \n	  \n	\n	  \n    </ion-list>\n\n  </div>\n  \n  --->\n\n</ion-content>\n\n<!--ion-footer no-shadow>\n	<ion-toolbar position="bottom">\n	 <button ion-button block color="secondary" text-uppercase (click)="changeStatus(tech)">CHANGE STATUS</button>\n	</ion-toolbar>\n</ion-footer-->\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/job-offer-details/job-offer-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_printer__["a" /* Printer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], JobOfferDetailsPage);
    return JobOfferDetailsPage;
}());

//# sourceMappingURL=job-offer-details.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offer_list_offer_list__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChangeStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeStatusPage = /** @class */ (function () {
    function ChangeStatusPage(nav, navParam, service, translateService, functions) {
        this.nav = nav;
        this.navParam = navParam;
        this.service = service;
        this.translateService = translateService;
        this.functions = functions;
        this.tech = {};
        this.tech = navParam.data.tech;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser;
        console.log(this.tech);
        this.restaurantName = {
            "items": [{
                    "id": "HIRED",
                    "name": "Hired"
                },
                {
                    "id": "PENDING",
                    "name": "Pending"
                },
                {
                    "id": "CANCELED",
                    "name": "Canceled"
                }
            ]
        };
    }
    ChangeStatusPage.prototype.updateToWorker = function (category) {
        console.log(category);
        var type = category.status == 'HIRED' ? '2' : (category.status == 'CANCELED' ? '3' : '4'); // 2- hired, 3- cancelled, 4 - pending
        this.service.updateToEmployee(category.employer_id, category.id, category);
        //this.service.saveStatusByOwner(category);
        this.service.updateToWorkers(category.user_uid, category.id, category);
        this.service.updateAdminJob(category, category.id);
        this.functions.showAlert('Success', 'Job has been updated Successfully');
        var notis_data = {
            fromId: this.currentUser.uid,
            toId: category.user_uid,
            type: type,
            isRead: '0',
            data_params: { job: category.name },
            date: Date.now()
        };
        this.service.addNotification(notis_data);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__offer_list_offer_list__["a" /* OfferListPage */]);
    };
    ChangeStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeStatusPage');
    };
    ChangeStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-status',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/change-status/change-status.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Change Status</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n <div form-group>\n               <label>Status</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-pricetags-outline"></ion-icon></ion-label>\n                 <ion-select [(ngModel)]="tech.status" name="status">\n            <ion-option *ngFor="let item of restaurantName.items" value="{{item.id}}">{{item.name}}</ion-option>\n            </ion-select>\n               </ion-item>\n             </div> \n	<!--ion-item style="padding-top:10px" class="option">\n            <ion-label>Status</ion-label>\n\n            <ion-select [(ngModel)]="tech.status" name="status">\n            <ion-option *ngFor="let item of restaurantName.items" value="{{item.id}}">{{item.name}}</ion-option>\n            </ion-select>\n         </ion-item-->\n		   <div login-btn>\n               <button  round ion-button block color="secondary" (click)="updateToWorker(tech)">Save status</button>\n            </div>\n		\n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/change-status/change-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */]])
    ], ChangeStatusPage);
    return ChangeStatusPage;
}());

//# sourceMappingURL=change-status.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostedJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_details1_job_details1__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_job_edit_job__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_job_add_job__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_admob_free__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PostedJobsPage = /** @class */ (function () {
    function PostedJobsPage(admobFree, values, nativeStorage, navCtrl, navParams, service, service1, translateService, callNumber, functions) {
        var _this = this;
        this.admobFree = admobFree;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.service1 = service1;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.functions = functions;
        this.ads = [];
        this.locations = {};
        this.is_loaded = false;
        this.currentUser = [];
        this.currentUser = __WEBPACK_IMPORTED_MODULE_13_firebase___default.a.auth().currentUser;
        // this.id = navParams.data.category.id;
        //  console.log(this.id);
        this.locations = [];
        //console.log(this.params.data.items);
        this.service1.getJobsByCategory('all').on('value', function (snapshot) {
            console.log(snapshot);
            //this.productsList = [];
            _this.locations = [];
            var x = 1;
            snapshot.forEach(function (snap) {
                var dist = {
                    id: snap.key,
                    face: snap.val().face,
                    name: snap.val().name,
                    category: snap.val().category,
                    address: snap.val().address,
                    description: snap.val().description,
                    employer_id: snap.val().employer_id,
                    job_id: snap.val().job_id,
                    localdate: snap.val().localdate,
                    maxsalary: snap.val().maxsalary,
                    minsalary: snap.val().minsalary,
                    phone: snap.val().phone,
                    reverseOrder: snap.val().reverseOrder,
                    timeStamp: snap.val().timeStamp,
                    user_id: snap.val().user_id,
                    experience: snap.val().experience,
                    company: snap.val().company,
                    email: snap.val().email,
                    is_recruiter: snap.val().is_recruiter,
                    company_size: snap.val().company_size,
                    qualification: snap.val().qualification,
                    poster: snap.val().poster,
                    lat: snap.val().lat,
                    lng: snap.val().lng,
                    shortTermJob: snap.val().shortTermJob,
                    createdOn: snap.val().createdOn,
                    requiredOn: snap.val().requiredOn
                };
                if (x % 3 == 0 && x != 0) {
                    dist['ad'] = '1';
                    console.log(snap.val().shortTermJob);
                }
                x++;
                _this.locations.push(dist);
            });
            _this.locations = _this.locations.reverse();
            console.log(_this.locations);
            var self = _this;
            setTimeout(function () {
                self.is_loaded = true;
            }, 1000);
        });
        /**
        this.locations = [{
              id: 0,
              name: 'IT job',
              lastText: 'You on your way?',
              face: 'assets/img/glasses.jpg',
              price:'420',
              discout:'30%'
            }, {
              id: 1,
              name: 'Manager',
              lastText: 'Hey, it\'s me',
              face: 'assets/img/cam.jpg',
              price:'400',
              discout:'10%'
            }, {
              id: 2,
              name: 'Waiter',
              lastText: 'I should buy a boat',
              face: 'assets/img/guitar.jpg',
              price:'320',
              discout:'20%'
            }, {
              id: 3,
              name: 'Software Engineer',
              lastText: 'Look at my mukluks!',
              face: 'assets/img/glasses.jpg',
              price:'350',
              discout:'15%'
            }, {
              id: 4,
              name: 'Chef',
              lastText: 'This is wicked good ice cream.',
              face: 'assets/img/cam.jpg',
              price:'260',
              discout:'25%'
            }];
            */
        this.getJobs();
    }
    PostedJobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobListPage');
    };
    PostedJobsPage.prototype.goToAddJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__add_job_add_job__["a" /* AddJobPage */]);
    };
    PostedJobsPage.prototype.goToJobDetails = function (locations) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__job_details1_job_details1__["a" /* JobDetails1Page */], { locations: locations, categoryId: locations.category });
    };
    PostedJobsPage.prototype.edit = function (locations) {
        console.log("Edit job");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__edit_job_edit_job__["a" /* EditJobPage */], { locations: locations });
    };
    PostedJobsPage.prototype.deleteJob = function (locations) {
        var _this = this;
        console.log("Delete job");
        this.service.deleteJob(locations)
            .then(function () {
            // this.nav.pop();     
            _this.functions.showAlert('Success', 'Your job has been deleted Successfully');
            // this.navCtrl.push(ListPage);
        });
    };
    PostedJobsPage.prototype.initializeItems = function () {
        /**
        this.locations = [{
             id: 0,
             name: 'IT job',
             lastText: 'You on your way?',
             face: 'assets/img/glasses.jpg',
             price:'420',
             discout:'30%'
           }, {
             id: 1,
             name: 'Manager',
             lastText: 'Hey, it\'s me',
             face: 'assets/img/cam.jpg',
             price:'400',
             discout:'10%'
           }, {
             id: 2,
             name: 'Waiter',
             lastText: 'I should buy a boat',
             face: 'assets/img/guitar.jpg',
             price:'320',
             discout:'20%'
           }, {
             id: 3,
             name: 'Software Engineer',
             lastText: 'Look at my mukluks!',
             face: 'assets/img/glasses.jpg',
             price:'350',
             discout:'15%'
           }, {
             id: 4,
             name: 'Chef',
             lastText: 'This is wicked good ice cream.',
             face: 'assets/img/cam.jpg',
             price:'260',
             discout:'25%'
           }];
           */
        var _this = this;
        this.service.getJobsByCategory(this.id).on('value', function (snapshot) {
            //this.productsList = [];
            _this.locations = [];
            snapshot.forEach(function (snap) {
                _this.locations.push({
                    id: snap.key,
                    face: snap.val().face,
                    name: snap.val().name,
                });
            });
            _this.locations = _this.locations.reverse();
            console.log(_this.locations);
        });
        this.items = this.locations;
        /**
         this.service.getRestaurantsList().on('value', snapshot =>{
      
      console.log(snapshot.val());
      this.params.data.items = [];
      
          snapshot.forEach( snap =>{
              this.params.data.items.push({
                id: snap.key,
                title: snap.val().title,
                subtitle:  snap.val().info,
                backgroundImage: snap.val().firebase_url,
                icon: "ios-arrow-dropright",
                iconText: "ReadMore",
                phonenumber: snap.val().phonenumber,
                lat: snap.val().lat,
                long: snap.val().long,
                description: snap.val().info,
                firebase_url:snap.val().firebase_url,
                address:snap.val().address,
                category:snap.val().category,
                images:snap.val().image,
                img: snap.val().img,
                info: snap.val().info,
                mark: snap.val().mark,
                option: snap.val().option,
                outlet: snap.val().outlet,
                market:true,
              });
            });
            
            console.log(this.params.data.items);
          });
        
          this.items = this.params.data.items;
          */
    };
    PostedJobsPage.prototype.searchItem = function (ev) {
        this.initializeItems();
        console.log(this.items);
        console.log(ev);
        var val = ev.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.locations = this.items.filter(function (data) {
                console.log(data);
                return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PostedJobsPage.prototype.showInterstitialAds = function () {
        var _this = this;
        this.functions.presentLoading();
        var interstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-3940256099942544/8691691433"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(function () {
            setTimeout(function () {
                _this.functions.stopLoading();
            }, 10000);
        }).catch(function (e) {
            _this.functions.stopLoading();
        });
    };
    PostedJobsPage.prototype.runAd = function () {
        this.showInterstitialAds();
    };
    PostedJobsPage.prototype.getJobs = function () {
        var _this = this;
        this.service1.getAds().on('value', function (snapshot) {
            var i = -1;
            snapshot.forEach(function (snap) {
                var dist = {
                    id: snap.key,
                    image: snap.val().image,
                    title: snap.val().title,
                    description: snap.val().description,
                    index: i + 3
                };
                i = i + 3;
                _this.ads.push(dist);
            });
            console.log(_this.ads);
        });
    };
    PostedJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-posted-jobs',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/posted-jobs/posted-jobs.html"*/'<ion-header>\n  <ion-navbar color="primary">\n   <button ion-button menuToggle>\n		  <ion-icon name="menu"></ion-icon>\n		</button>\n    <ion-title>Jobs</ion-title>\n	   <ion-buttons end (click)="goToAddJob()">\n	   <button ion-button postjob round>\n		Post Job\n		</button>\n		</ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n \n<p *ngIf="!is_loaded">Loading...</p>\n<ion-list *ngIf="is_loaded">\n\n	<span  *ngFor="let location of locations ; let i = index">\n\n\n		<ion-item-sliding >\n			<ion-item (click)="goToJobDetails(location)">\n			  <ion-thumbnail item-start>\n				 <img src="{{location.face}}">\n			  </ion-thumbnail>\n			  <h2 >{{location.name}}</h2>\n			  <p address>\n				  \n				<img src="assets/img/building.png"/><span>{{location.address}}</span>\n			\n			</p>\n			<p briefcase><img src="assets/img/briefcase.png"/><span>Experience:  {{location.experience}}</span></p>\n				<ion-row salary-apply>\n				 <ion-col  col-6>\n \n				 </ion-col>\n				  <ion-col  col-6 class="btn-right">\n				   <button round ion-button >View Detail</button>\n				 </ion-col>\n				</ion-row>\n			</ion-item>\n			<ion-item-options side="right" *ngIf="currentUser?.uid == location.user_id">\n \n				<button ion-button (click)="deleteJob(location)" color="danger">\n					<ion-icon name="trash"></ion-icon>\n			  </button>\n			</ion-item-options>\n		  </ion-item-sliding>\n		\n		<span *ngFor="let ad of ads ; let ii = index">\n			<ion-item addlist *ngIf="(i+1) % 3 == 0 && (i== ad.index)" (click)="runAd()">\n				<ion-thumbnail item-start >\n					<img [src]="ad.image">\n				</ion-thumbnail>\n				<h2 style=" \n				height: 23px;">{{ad.title}}</h2>\n				<p briefcase>{{ad.description}}</p>\n			  </ion-item>\n\n		</span>\n\n\n		  <br>\n\n	</span>\n\n  <ion-item *ngIf="locations == \'\'">\n  No jobs posted yet.\n  </ion-item>\n</ion-list>\n\n\n \n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/posted-jobs/posted-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_6__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_8__providers_functions_functions__["a" /* Functions */]])
    ], PostedJobsPage);
    return PostedJobsPage;
}());

//# sourceMappingURL=posted-jobs.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetails1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobDetails1Page = /** @class */ (function () {
    function JobDetails1Page(admobFree, values, nativeStorage, navCtrl, navParams, service, translateService, callNumber) {
        // this.showInterstitialAds();
        // this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
        this.admobFree = admobFree;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.tech = {};
        this.clicked = false;
        // 	this.runAgain();
        //  });
        console.log(navParams.data.locations);
        this.id = navParams.data.locations.id;
        this.categoryId = navParams.data.categoryId;
        //console.log(this.getFavoriteItem());
        this.getFavoriteItem();
        //console.log(this.newClicked);
        console.log(this.id);
        console.log(this.categoryId);
    }
    JobDetails1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getJobDetails(this.id, this.categoryId).on('value', function (snapshot) {
            console.log(snapshot.val());
            _this.tech = [];
            //snapshot.forEach( snap =>{
            _this.tech.push({
                id: snapshot.key,
                face: snapshot.val().face,
                name: snapshot.val().name,
                address: snapshot.val().address,
                description: snapshot.val().description,
                phone: snapshot.val().phone,
                maxsalary: snapshot.val().maxsalary,
                minsalary: snapshot.val().minsalary,
                employer_id: snapshot.val().employer_id,
                experience: snapshot.val().experience,
            });
            //});
            console.log(_this.tech);
        });
    };
    JobDetails1Page.prototype.applyJob = function (tech) {
        var _this = this;
        console.log(tech);
        this.service.applyJob(tech).then(function (newJob) {
            console.log(newJob);
            _this.service.addIdToJob(newJob.key);
            _this.addToJob(newJob.key);
        });
        ;
    };
    JobDetails1Page.prototype.addToJob = function (newJobKey) {
        var _this = this;
        console.log(newJobKey);
        this.service.getJobDetail(newJobKey).on('value', function (snapshot) {
            //this.orderDetails = snapshot.val();
            //this.addresses = snapshot.val().addresses;
            //this.newOrderItems = [];
            // this.newOrderDetails = snapshot.val();
            //this.newOrderAddresses = snapshot.val().addresses;
            //this.newOrderItems = snapshot.val().items;
            console.log(snapshot.val());
            _this.jobDetails = snapshot.val();
            _this.service.addToEmployee(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.uid, _this.jobDetails.id, _this.jobDetails);
            _this.service.addToWorker(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails);
            _this.service.addToAppliedJob(_this.jobDetails.employer_id, _this.jobDetails.job_id, _this.jobDetails.id, _this.jobDetails);
            // this.navCtrl.push(AppliedInfoPage ,{jobDetails: this.jobDetails});
        });
        // this.nav.setRoot(MyorderPage);	
    };
    JobDetails1Page.prototype.getFavoriteItem = function () {
        var _this = this;
        this.service.getClickedInfo(this.id).on('value', function (snapshot) {
            //this.params.data.items = snapshot.val();
            if (snapshot.val() == null) {
                _this.clicked = false;
                console.log(_this.clicked);
            }
            else {
                console.log(snapshot.val());
                _this.clicked = true;
                console.log(_this.clicked);
            }
        });
        console.log(this.clicked);
    };
    JobDetails1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobDetailsPage');
    };
    JobDetails1Page.prototype.showInterstitialAds = function () {
        var interstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-3940256099942544/8691691433"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(function () {
        }).catch(function (e) {
        });
    };
    JobDetails1Page.prototype.runAgain = function () {
        var _this = this;
        setTimeout(function () {
            _this.showInterstitialAds();
        }, 180000);
    };
    JobDetails1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-details1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/job-details1/job-details1.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <ion-title>Job Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n<div jobinfo>\n<div jobimg>\n\n <!-- <ion-badge>${{tech[0]?.minsalary}} - ${{tech[0]?.maxsalary}}</ion-badge>  -->\n</div>\n<!-- <ng-adsense\n			[adClient]="\'ca-pub-8514227015105788\'"\n			[display]="\'inline-block\'"\n			[width]="100"\n			[height]="100"\n			></ng-adsense> -->\n<div userimg>\n<img src="{{tech[0]?.face}}"/>\n</div>\n<h2>{{tech[0]?.name}}</h2>\n<p address><img src="assets/img/building.png"/><span>{{tech[0]?.address}}</span></p>\n<p briefcase><img src="assets/img/briefcase.png"/><span>Experience:  {{tech[0]?.experience}}</span></p>\n</div>\n<div jobdetail >\n	<div joblist>\n	   <h2 heading>Job Info</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Job Name</h2> \n			  <p>{{tech[0]?.name}} </p>			\n			</ion-item>\n			<ion-item>\n		\n			<ion-icon item-start name="ios-pin-outline"></ion-icon> 			\n			  <h2>Location</h2> \n			  <p>{{tech[0]?.address}}</p>			\n			</ion-item>\n			\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-call-outline"></ion-icon> 			\n			  <h2>Phone No</h2> \n			  <p>{{tech[0]?.phone}}</p>			\n			</ion-item> -->\n			<!-- <ion-item>\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Salary</h2> \n			  <p>${{tech[0]?.minsalary}} - ${{tech[0]?.maxsalary}}</p>			\n			</ion-item> -->\n	</div>\n<div joblist>\n<h2 heading>\n Job Description\n</h2>\n<p>{{tech[0]?.description}}</p>\n</div>\n</div>\n<!--ion-card>\n  <img src="{{tech[0].face}}"/>\n  <ion-card-content>\n    <ion-card-title>	  \n {{tech[0].name}}	\n	  <ion-icon icon-big item-right *ngIf = "clicked == true" name="chatbubbles" color = "primary" (click)="chat(group)" style="position:relative; font-size:2em;float:right;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n						</ion-icon>	\n	  \n	  <ion-icon icon-big item-right *ngIf = "clicked == true" name="call" color = "primary" (click)="call(group)" style="position:relative; font-size:2em;float:right;padding-right:5px;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n						</ion-icon>\n	\n      </ion-card-title>\n    <p>\n      The most popular industrial group ever, and largely\n      responsible for bringing the music to a mass audience.\n    </p>\n	\n	<p><b>Job Posted</b></p>\n	<p><b>Job Type</b></p>\n	<p><b>Designation</b></p>\n	<p><b>Specializaiont</b></p>\n	<p><b>Last Date of Application</b></p>\n	<p><b>Job Description</b></p>\n	\n  </ion-card-content>\n  \n\n  \n</ion-card-->\n\n</ion-content>\n\n<!--\n<ion-footer no-shadow>\n	<ion-toolbar position="bottom">\n	\n\n	  <button ion-button block  color = "secondary" text-uppercase *ngIf = "clicked == false"  item-end (click)="applyJob(tech[0])">Send Resume</button>\n  \n  <button ion-button block color = "secondary" text-uppercase *ngIf = "clicked == true"  item-end >You have already send resume.</button>\n	</ion-toolbar>\n	\n</ion-footer>\n--->\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/job-details1/job-details1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], JobDetails1Page);
    return JobDetails1Page;
}());

//# sourceMappingURL=job-details1.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs1_tabs1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditJobPage = /** @class */ (function () {
    function EditJobPage(nav, navParams, datePicker, alertCtrl, toastCtrl, service, translateService, functions) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.translateService = translateService;
        this.functions = functions;
        this.disableSubmit = false;
        this.is_date_choosed = '0';
        this.submitText = 'Submit';
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 30));
        this.min = new Date();
        this.initDate3 = new Date();
        this.finishDate = new Date();
        this.userSettings = {};
        this.locations = navParams.data.locations;
        this.userSettings['inputString'] = this.locations.address;
        this.lat = this.locations.lat;
        this.lng = this.locations.lng;
        this.userSettings = Object.assign({}, this.userSettings);
        if (this.locations.face) {
            this.downloadURL = this.locations.face;
        }
        if (this.locations.localdate) {
            this.date = this.locations.localdate;
        }
        console.log(navParams.data.locations);
        console.log(this.locations);
        this.form = {};
        this.service = service;
        this.service.getCategoryName().on('value', function (snapshot) {
            _this.getCategoryName = [];
            snapshot.forEach(function (snap) {
                _this.getCategoryName.push({
                    id: snap.key,
                    name: snap.val().name,
                    face: snap.val().face,
                });
            });
        });
        this.service.getMinSalary().on('value', function (snapshot) {
            _this.getMinSalary = [];
            snapshot.forEach(function (snap) {
                _this.getMinSalary.push({
                    id: snap.key,
                    name: snap.val().name,
                });
            });
        });
        this.service.getMaxSalary().on('value', function (snapshot) {
            _this.getMaxSalary = [];
            snapshot.forEach(function (snap) {
                _this.getMaxSalary.push({
                    id: snap.key,
                    name: snap.val().name,
                });
            });
        });
        this.service.getAddressList().on('value', function (snapshot) {
            _this.addressList = [];
            snapshot.forEach(function (snap) {
                _this.addressList.push({
                    id: snap.key,
                    name: snap.val().name,
                });
            });
        });
        this.userSettings['inputPlaceholderText'] = 'Location';
        this.userSettings['showSearchButton'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
    }
    EditJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddJobPage');
    };
    EditJobPage.prototype.autoCompleteCallback = function (data) {
        console.log(data.data.formatted_address);
        this.lat = data.data.geometry.location.lat;
        this.lng = data.data.geometry.location.lng;
        this.locations.address = data.data.formatted_address;
    };
    EditJobPage.prototype.addCategry = function () {
        var _this = this;
        console.log(this.initDate);
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.submitText = 'Processing...';
            if (this.is_date_choosed == '1') {
                this.final_date = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
            }
            else {
                this.final_date = this.date;
            }
            /**
                this.service.addCat(this.form.name, this.form.address, this.downloadURL,this.form.phone, this.form.start,
                this.form.finish,this.form.poster,this.form.minsalary,this.form.maxsalary,this.form.description,this.form.category,datestring)
              .then(() => {
               // this.nav.pop();
                 this.nav.push(ListPage);
              });
              */
            this.service.editCat2(this.locations.name, this.locations.address, this.downloadURL, this.locations.phone, this.locations.poster, this.locations.minsalary, this.locations.maxsalary, this.locations.description, 'all', this.final_date, this.locations.job_id, this.locations.company, this.locations.email, this.locations.is_recruiter, this.locations.company_size, this.locations.experience, this.locations.qualification, this.lat, this.lng)
                .then(function () {
                // this.nav.pop();     
                _this.disableSubmit = false;
                _this.submitText = 'Submit';
                _this.functions.showAlert('Success', 'Your Job has been updated Successfully');
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__tabs1_tabs1__["a" /* Tabs1Page */]);
            });
        }
    };
    EditJobPage.prototype.onChange = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        this.disableSubmit = true;
        this.upLoadImg();
    };
    EditJobPage.prototype.validateForm = function () {
        if (this.locations.company == undefined || this.locations.company == "") {
            this.errorMessage = "Please enter company name";
            return false;
        }
        if (this.locations.poster == undefined || this.locations.poster == "") {
            this.errorMessage = "Please enter name";
            return false;
        }
        if (this.locations.email == undefined || this.locations.email == "") {
            this.errorMessage = "Please enter email";
            return false;
        }
        if (this.locations.phone == undefined || this.locations.phone == "") {
            this.errorMessage = "Please enter phone number";
            return false;
        }
        if (this.locations.is_recruiter == undefined || this.locations.is_recruiter == "") {
            this.errorMessage = "Please select are you a recruiter";
            return false;
        }
        if (this.locations.company_size == undefined || this.locations.company_size == "") {
            this.errorMessage = "Please select company size";
            return false;
        }
        if (this.locations.name == undefined || this.locations.name == "") {
            this.errorMessage = "Please enter job title";
            return false;
        }
        if (this.locations.address == undefined || this.locations.address == "") {
            this.errorMessage = "Please select location";
            return false;
        }
        if (this.locations.experience == undefined || this.locations.experience == "") {
            this.errorMessage = "Please enter experience";
            return false;
        }
        if (this.locations.minsalary == undefined || this.locations.minsalary == "") {
            this.errorMessage = "Please select min salary";
            return false;
        }
        if (this.locations.maxsalary == undefined || this.locations.maxsalary == "") {
            this.errorMessage = "Please select max salary";
            return false;
        }
        if (this.date == undefined || this.date == "") {
            this.errorMessage = "Please select finish date";
            return false;
        }
        if (this.locations.qualification == undefined || this.locations.qualification == "") {
            this.errorMessage = "Please select qualification";
            return false;
        }
        if (this.locations.description == undefined || this.locations.description == "") {
            this.errorMessage = "Please enter description";
            return false;
        }
        if (this.downloadURL == undefined || this.downloadURL == "") {
            this.errorMessage = "Please select image";
            return false;
        }
        return true;
    };
    EditJobPage.prototype.upLoadImg = function () {
        var _this = this;
        // Create a root reference
        var fileName = this.selectedFile.name;
        var metadata = { contentType: 'image/jpeg' };
        var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('/images/' + fileName);
        var uploadTask = storageRef.put(this.selectedFile, metadata);
        uploadTask.on('state_changed', function (snapshot) {
            console.log(snapshot);
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (uploadTask.snapshot.state) {
                case __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"].TaskState.PAUSED:// or 'paused'
                    console.log('Upload is paused');
                    break;
                case __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"].TaskState.RUNNING:// or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            _this.downloadURL = uploadTask.snapshot.downloadURL;
            _this.disableSubmit = false;
            console.log(_this.downloadURL);
            console.log("successful");
        });
    };
    EditJobPage.prototype.ngOnInit = function () {
        // this.datePicker.show({
        //   date: new Date(),
        //      mode: 'date',
        //       androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        //   });
    };
    EditJobPage.prototype.makeTableOrder = function () {
        if (this.time && this.date && (this.person != undefined)) {
            this.bookingInformation = {
                userID: this.uid,
                status: 'Pending',
                time: this.time,
                person: this.person,
            };
            this.validateInformation();
            //this.validateInformationAdmin();
        }
        else {
            this.presentToast('Please fill all data.');
        }
    };
    //    public closeDatepicker(){
    //    this.datepickerDirective.dismiss();
    // }
    EditJobPage.prototype.Log = function (stuff) {
        console.log(stuff);
    };
    EditJobPage.prototype.event = function (data) {
        this.localDate = data;
    };
    EditJobPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
        this.date = date;
        this.is_date_choosed = '1';
        console.log(this.date);
    };
    EditJobPage.prototype.validateInformation = function () {
        var _this = this;
        console.log(this.date);
        var datestring = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
        console.log(datestring);
        this.service.addNewTableOrders(this.bookingInformation, this.restaurantInformation, datestring).then(function (tableOrder) {
            // this.nav.setRoot('OrderList');     
            //  this.presentToast('Your table booked successfully!');
            //this.navCtrl.pop();		
            console.log(tableOrder);
            _this.validateInformationAdmin(tableOrder.key);
        });
    };
    EditJobPage.prototype.validateInformationAdmin = function (sameKey) {
        var _this = this;
        console.log(this.date);
        var datestring = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
        console.log(datestring);
        this.service.addNewTableAdminOrders(this.bookingInformation, this.restaurantInformation, datestring, sameKey).then(function () {
            // this.nav.setRoot('OrderList');     
            _this.presentToast('Your job posted successfully!');
            _this.nav.pop();
        });
    };
    EditJobPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    EditJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-job',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/edit-job/edit-job.html"*/'<ion-header>\n  <ion-navbar color="primary">  \n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Job</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n      <form #f="ngForm">\n         <ion-list>\n		 <div form-group>\n			<label>Company Name</label>\n			<ion-item>\n			<ion-label>\n			<ion-icon name="ios-briefcase-outline"></ion-icon>\n			</ion-label>\n			<ion-input type="text" [(ngModel)]="locations.company" placeholder="Enter Company Name" name="company"></ion-input>\n			</ion-item>\n		 </div>\n		 <div form-group>\n		<label>Name</label>\n		<ion-item>\n		<ion-label>\n		<ion-icon name="ios-person-outline"></ion-icon>\n		</ion-label>\n		  <ion-input  placeholder="Enter Name" [(ngModel)]="locations.poster" name="poster" required type="text"  name="name"></ion-input>\n		</ion-item>\n		</div>\n			<div form-group> \n		<label>Email</label>\n		<ion-item>\n		<ion-label>\n		<ion-icon name="ios-mail-outline"></ion-icon>\n		</ion-label>\n		  <ion-input   placeholder="Enter Email" [(ngModel)]="locations.email" name="email" type="email"></ion-input>\n		</ion-item>\n		</div>\n		<div form-group>\n		<label>Phone Number</label>\n		<ion-item>\n		<ion-label>\n		<ion-icon name="ios-call-outline"></ion-icon>\n		</ion-label>\n		 <ion-input required  placeholder="Enter  Phone Number" type="text" [(ngModel)]="locations.phone" name="phone"></ion-input>\n		</ion-item>\n		</div>\n		<div form-group>\n<label>Are You a Recruiter </label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="locations.is_recruiter" name="is_recruiter" placeholder="Select">\n				 <ion-option value="yes"> Yes  </ion-option>\n				 <ion-option value="no">  No    </ion-option>\n				</ion-select>\n</ion-item>\n</div>\n<div form-group>\n<label>Company Size</label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select  [(ngModel)]="locations.company_size" name="company_size" placeholder="Select Company Size">\n				 <ion-option value="1-15"> 1 - 15 </ion-option>\n				 <ion-option value="16-50"> 16 - 50 </ion-option>\n				 <ion-option value="51-100"> 51 - 100 </ion-option>\n				</ion-select>\n</ion-item>\n</div>\n\n<div form-group>\n<label>Job Title</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n   <ion-input required type="text" placeholder="Enter Job Title" [(ngModel)]="locations.name" name="title"></ion-input>\n</ion-item>\n</div>\n<div form-group>\n<label>Location</label>\n<!-- <ion-item>\n<ion-label>\n<ion-icon name="ios-pin-outline"></ion-icon>\n</ion-label>\n <ion-select [(ngModel)]="locations.address"  name="address" placeholder="Select">\n               <ion-option *ngFor="let item of addressList" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n\n</ion-item> -->\n<div class="locat-box">\n<ion-label>\n<ion-icon name="ios-pin-outline"></ion-icon>\n</ion-label>\n<ngxgeo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback($event)"></ngxgeo-autocomplete>\n</div>\n</div>\n<div form-group>\n<label>Experience Required</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-input type="text" [(ngModel)]="locations.experience" name="experience" placeholder="Enter Experience"></ion-input>\n</ion-item>\n</div>\n<div form-group>\n<label>Min Salary</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-cash-outline"></ion-icon>\n</ion-label>\n  <ion-select [(ngModel)]="locations.minsalary"  name="minsalary" placeholder="select">\n               <ion-option *ngFor="let item of getMinSalary" value="{{item.name}}">{{item.name}}</ion-option>\n  </ion-select>	\n</ion-item>\n</div>\n<div form-group>\n<label>Max Salary</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-cash-outline"></ion-icon>\n</ion-label>\n <ion-select [(ngModel)]="locations.maxsalary"  name="maxsalary" placeholder="select">\n               <ion-option *ngFor="let item of getMaxSalary" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>	\n</ion-item>\n</div>\n<div form-group>\n<label>Choose Finish Date</label>\n<ion-item heightauto>\n				 <span ion-datepicker (ionChanged)="setDate($event);" [value]="localDate" [min]="localDate" clear class="ScheduleDate">\n	\n	\n		             \n					<button ion-button full type="button" class="book-button"  color="secondary" round styl ="margin-bottom:20px;"><span>Choose Finish Date</span></button>\n	\n		\n		\n			</span>\n	\n	<div *ngIf = "localdate">\n	<span>LocalDate: {{form.localDate | date}}</span>\n	</div>\n	\n	<div *ngIf = "date">\n		<h3>Selected Date: {{date | date}}</h3>\n	</div>\n</ion-item>\n</div>\n<div form-group>\n<label>Finish Date</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-clock-outline"></ion-icon>\n</ion-label>\n  <ion-input required disabled type="text" [(ngModel)]="locations.localdate" name="options"></ion-input>\n</ion-item>\n</div>\n<div form-group>\n<label>Qualificaton Required</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-school-outline"></ion-icon>\n</ion-label>\n<ion-select  [(ngModel)]="locations.qualification" name="qualification"  placeholder="Select Option">\n				 <ion-option value="Higher Secondary"> Higher Secondary</ion-option>\n				 <ion-option value="Graduation"> Graduation </ion-option>\n				 <ion-option value="Post Graduation">Post Graduation   </ion-option>\n				</ion-select>\n</ion-item>\n</div>\n<div form-group>\n<label>Job Description</label>\n<ion-item heightauto>\n<textarea class="example"  type="text" [(ngModel)]="locations.description" name="description" placeholder=\'Address Description\' style="width: 100%;height:100px;"></textarea>\n</ion-item>\n</div>\n<!-- <div form-group> -->\n<!-- <label>Category</label>\n<ion-item>\n<ion-label>\n<ion-icon name="ios-pricetags-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="locations.category"  name="category">\n               <ion-option *ngFor="let item of getCategoryName" value="{{item.id}}">{{item.name}}</ion-option>\n               </ion-select>\n</ion-item>\n</div> -->\n<div form-group>\n<label>Upload Image</label>\n      <ion-item heightauto>               \n               <input type="file" style="margin-bottom:10px;" name="select Image" (change)="onChange($event)" >\n			   <ion-thumbnail *ngIf="locations.face != null">\n                  <img *ngIf="downloadURL == \'\' || downloadURL == undefined" src="{{locations.face}}">\n                  <img *ngIf="downloadURL != \'\' && downloadURL != undefined" src="{{downloadURL}}">\n               </ion-thumbnail>\n            </ion-item>\n</div>\n <!--\n            <ion-item>\n               <ion-label floating>Job Title</ion-label>\n			   \n               <ion-input required type="text" [(ngModel)]="locations.name" name="name"></ion-input>\n            </ion-item>\n			\n			 \n			\n			 <ion-item>\n               <ion-label floating>Address</ion-label>\n               <ion-input required type="text" [(ngModel)]="locations.address" name="info"></ion-input>\n            </ion-item>\n			\n			 <ion-item>\n               <ion-label floating>Phone</ion-label>\n               <ion-input required type="text" [(ngModel)]="locations.phone" name="lat"></ion-input>\n            </ion-item>\n			\n			\n			\n			<ion-item style="padding-top:10px" class="option">\n               <ion-label>Min Salary</ion-label>\n               <ion-select [(ngModel)]="locations.minsalary"  name="minsalary">\n               <ion-option *ngFor="let item of getMinSalary" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			\n			<ion-item style="padding-top:10px" class="option">\n               <ion-label>Max Salary</ion-label>\n               <ion-select [(ngModel)]="locations.maxsalary"  name="maxsalary">\n               <ion-option *ngFor="let item of getMaxSalary" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n		\n		\n	\n		\n							\n				 <span ion-datepicker (ionChanged)="setDate($event);" [value]="localDate" [min]="localDate" clear class="ScheduleDate">\n	\n	\n		             \n					<button ion-button full type="button" class="book-button" style = "margin-left:10%;width:75%;margin-right:10%;margin-top:30px;margin-bottom:20px;"><span>Choose Finish Date</span></button>\n	\n		\n		\n			</span>\n	\n	\n	<div *ngIf = "localdate">\n	\n	<span>LocalDate: {{form.localDate | date}}</span>\n	\n	</div>\n	\n	<div *ngIf = "date">\n		\n	\n		<h3>Selected Date: {{date | date}}</h3>\n		\n	</div>\n	\n		<ion-item>\n               <ion-label floating>Finish Date</ion-label>\n               <ion-input required disabled type="text" [(ngModel)]="locations.localdate" name="options"></ion-input>\n            </ion-item>\n	\n	\n\n			\n			<ion-item>\n               <textarea class="example"  type="text" [(ngModel)]="locations.description" name="description" placeholder=\'Address Description\' style = "width: 100%;height:200px;"></textarea>\n            </ion-item>\n			\n			<ion-item style="padding-top:10px" class="option">\n               <ion-label>category</ion-label>\n               <ion-select [(ngModel)]="locations.category"  name="category">\n               <ion-option *ngFor="let item of getCategoryName" value="{{item.id}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n		\n			\n			\n			\n            <ion-item>\n               <ion-thumbnail *ngIf="locations.face != null">\n                  <img src="{{locations.face}}">\n               </ion-thumbnail>\n               <input type="file" name="select Image" (change)="onChange($event)" >\n            </ion-item>\n			\n			\n			-->\n		\n	\n	\n	\n         </ion-list>\n      </form>\n      <div class="error-message">\n           <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n      </div>\n	   <button btnpost round  ion-button block color="secondary" [disabled]="disableSubmit" text-uppercase (click)="addCategry()">{{submitText}}</button>\n</ion-content>\n<!--ion-footer no-shadow>\n	<ion-toolbar position="bottom">\n	 <button ion-button block color="secondary" [disabled]="disableSubmit" text-uppercase (click)="addCategry()">Post Job</button>\n	</ion-toolbar>\n</ion-footer-->\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/edit-job/edit-job.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_service1__["a" /* Service1 */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* Functions */]])
    ], EditJobPage);
    return EditJobPage;
}());

//# sourceMappingURL=edit-job.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myprofile1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth1__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';




// import { EducationPage } from '../education/education';
// import { EducationListPage } from '../education-list/education-list';
// import { PasswordPage } from '../password/password';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Myprofile1Page = /** @class */ (function () {
    function Myprofile1Page(nav, navParams, functions, auth, loadingCtrl, 
    //  private fb: Facebook, 
    alertCtrl, values, service, translateService, toastCtrl) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.translateService = translateService;
        this.toastCtrl = toastCtrl;
        this.profiletab = "Basic";
        this.isAndroid = false;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disablePassBtn = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Edit Profile";
        this.buttonTextPass = "Change Password";
        this.HeaderText = "Login";
        this.params = {};
        this.errors = ['', null, undefined];
        this.isEdit = false;
        this.isFacebook = false;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser;
        if (this.values.isLoggedIn) {
            this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
                _this.isFacebook = _this.userProfiles.facebook;
            });
        }
        console.log(this.userProfiles);
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["database"]().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    Myprofile1Page.prototype.editProfile = function () {
        this.isEdit = !this.isEdit;
        if (this.isEdit)
            this.buttonText = "Update Profile";
        else
            this.buttonText = "Edit Profile";
    };
    Myprofile1Page.prototype.cancel = function () {
        this.isEdit = !this.isEdit;
        if (this.isEdit)
            this.buttonText = "Update Profile";
        else
            this.buttonText = "Edit Profile";
    };
    Myprofile1Page.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    Myprofile1Page.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN 
    Myprofile1Page.prototype.address = function (item) {
        console.log(item);
        // this.nav.push(EducationPage, item)
    };
    Myprofile1Page.prototype.myOrder = function () {
        // this.nav.push(MyorderPage);
        // this.nav.push(EducationListPage);
    };
    Myprofile1Page.prototype.goToPassword = function () {
        // this.nav.push(MyorderPage);
        // this.nav.push(PasswordPage);
    };
    Myprofile1Page.prototype.changePassword = function () {
        if (this.errors.indexOf(this.new_password) >= 0) {
            this.errorPassMessage = "Please enter new password";
            return false;
        }
        if (this.errors.indexOf(this.confirm_password) >= 0) {
            this.errorPassMessage = "Please enter confirm password";
            return false;
        }
        if (this.new_password != this.confirm_password) {
            this.errorPassMessage = "New and confirm passwords should be same.";
            return false;
        }
        this.errorPassMessage = '';
        this.disablePassBtn = true;
        this.buttonTextPass = 'Updating...';
        var self = this;
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.updatePassword(this.new_password).then(function (ok) {
            self.disablePassBtn = false;
            self.buttonTextPass = 'Change Password';
            self.new_password = "";
            self.confirm_password = "";
            self.presentToast("Password updated successfully!");
        }, function (error) {
            self.disablePassBtn = false;
            self.buttonTextPass = 'Change Password';
            // self.presentToast("Error while updating password. Please try later!");
            self.handleRegisterError(error);
        });
    };
    Myprofile1Page.prototype.updateProfile = function () {
        var _this = this;
        if (this.validateRegister()) {
            this.disableRegister = true;
            this.buttonText = "Updating...";
            this.auth.updateProfile(this.currentUser.uid, this.userProfiles)
                .then(function (response) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser;
                _this.disableRegister = false;
                _this.isEdit = !_this.isEdit;
                if (_this.isEdit)
                    _this.buttonText = "Update Profile";
                else
                    _this.buttonText = "Edit Profile";
                _this.presentToast('Profile updated successfully!');
            }).catch(function (err) { _this.handleRegisterError(err); });
        }
    };
    Myprofile1Page.prototype.handleRegisterError = function (err) {
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Update";
    };
    Myprofile1Page.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    Myprofile1Page.prototype.goToAddresses = function () {
        //this.nav.push(EducationListPage);
    };
    Myprofile1Page.prototype.validateRegister = function () {
        if (this.userProfiles.displayName == undefined || this.userProfiles.displayName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.userProfiles.lastName == undefined || this.userProfiles.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.userProfiles.email == undefined || this.userProfiles.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.userProfiles.phone == undefined || this.userProfiles.phone == '') {
            this.errorRegisterMessage = 'Please enter phone number';
            return false;
        }
        if (this.userProfiles.company == undefined || this.userProfiles.company == '') {
            this.errorRegisterMessage = 'Please enter company name';
            return false;
        }
        // if(this.userProfiles.is_recruiter == undefined || this.userProfiles.is_recruiter == ''){
        //   this.errorRegisterMessage = 'Please select are you a recruiter';
        //   return false;
        // }
        // if(this.userProfiles.company_size == undefined || this.userProfiles.company_size == ''){
        //   this.errorRegisterMessage = 'Please select company size';
        //   return false;
        // }
        return true;
    };
    Myprofile1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    Myprofile1Page.prototype.presentLoadingDefault = function (msg) {
        this.presentLoader = this.loadingCtrl.create({
            content: msg
        });
        this.presentLoader.present();
    };
    Myprofile1Page.prototype.onChange = function (event) {
        this.selectedFile = event.target.files[0];
        this.presentLoadingDefault('Uploading....');
        this.disableRegister = true;
        this.upLoadImg();
    };
    Myprofile1Page.prototype.upLoadImg = function () {
        var _this = this;
        // Create a root reference
        var fileName = this.selectedFile.name;
        var metadata = { contentType: 'image/jpeg' };
        var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('/images/' + fileName);
        var uploadTask = storageRef.put(this.selectedFile, metadata);
        uploadTask.on('state_changed', function (snapshot) {
            console.log(snapshot);
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (uploadTask.snapshot.state) {
                case __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"].TaskState.PAUSED:// or 'paused'
                    console.log('Upload is paused');
                    break;
                case __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"].TaskState.RUNNING:// or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            // Handle unsuccessful uploads
            _this.presentLoader.dismiss();
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            _this.userProfiles.photoURL = uploadTask.snapshot.downloadURL;
            _this.disableRegister = false;
            console.log(_this.userProfiles.photoURL);
            console.log("successful");
            _this.presentLoader.dismiss();
        });
    };
    Myprofile1Page.prototype.changePassword1 = function (form) {
        var _this = this;
        if (this.errors.indexOf(this.newPassword) == -1 && this.errors.indexOf(this.confirmPassword) == -1 && this.errors.indexOf(this.oldPassword) == -1) {
            this.passwordError = "";
            if (this.newPassword == this.confirmPassword) {
                this.passwordError = "";
                var password = String(this.newPassword);
                if (password.length >= 6) {
                    var cpUser_1 = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser;
                    /*Then you set credentials to be the current logged in user's email
                    and the password the user typed in the input named "old password"
                    where he is basically confirming his password just like facebook for example.*/
                    var credentials = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"].EmailAuthProvider.credential(cpUser_1.email, this.oldPassword);
                    //Reauthenticating here with the data above
                    cpUser_1.reauthenticateWithCredential(credentials).then(function (success) {
                        _this.newPassword = '';
                        _this.oldPassword = '';
                        _this.confirmPassword = '';
                        var alert = _this.alertCtrl.create({
                            title: 'Change Password Success',
                            message: 'Your password has been updated!',
                            buttons: ['OK']
                        });
                        alert.present();
                        /* Update the password to the password the user typed into the
                          new password input field */
                        cpUser_1.updatePassword(password).then(function () {
                            //Success
                        }).catch(function (error) {
                            //Failed
                        });
                    }, function (error) {
                        console.log(error);
                        if (error.code === "auth/wrong-password") {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Change Password Failed',
                                message: 'Your old password is invalid.',
                                buttons: ['Try Again']
                            });
                            alert_1.present();
                        }
                    });
                    console.log(credentials);
                }
                else {
                    this.passwordError = "password length should be minimum 6";
                }
            }
            else {
                this.passwordError = "Passwords do not match";
            }
            //Update Password in UserAuthentication Table
        }
        else {
            if (this.errors.indexOf(this.confirmPassword) >= 0) {
                this.passwordError = "Please enter new password again to confirm";
            }
            if (this.errors.indexOf(this.newPassword) >= 0) {
                this.passwordError = "Please enter a new password";
            }
            if (this.errors.indexOf(this.oldPassword) >= 0) {
                this.passwordError = "Please enter your current password";
            }
        }
    };
    Myprofile1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myprofile1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/myprofile1/myprofile1.html"*/'<ion-header>\n  <ion-navbar color="primary">\n	<button ion-button menuToggle> \n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{"Profile" | translate}}</ion-title>\n  </ion-navbar>\n</ion-header> \n\n<ion-content>\n<div profileinfo>\n<div profileimg>\n  <img src="assets/img/bg-profile.jpg"/>\n</div>\n<div userimg>\n  <label for="editphoto">\n     <ion-icon name="ios-create-outline"></ion-icon>\n  </label>\n  <input (change)="onChange($event)" type="file" id="editphoto"  name="editphoto" style="display:none;"/> \n<ng-container *ngIf="userProfiles.photoURL">\n            <img src="{{userProfiles.photoURL}}" width="80" height="80" >\n         </ng-container>\n         <ng-container *ngIf="!userProfiles.photoURL" >\n            <img src="{{values.avatar}}" width="80" height="80">\n         </ng-container>\n<h2>{{userProfiles.displayName}} {{userProfiles.lastName}}</h2>\n</div>\n</div>\n<div profilesetting>\n     <ion-segment [(ngModel)]="profiletab" mode="md">\n		<ion-segment-button value="Basic">\n		   Basic Info\n		</ion-segment-button>\n			<ion-segment-button value="pwd" *ngIf="!userProfiles.facebook">\n		   Change Password\n		</ion-segment-button>\n  </ion-segment>\n\n    <div [ngSwitch]="profiletab">\n	<ion-list *ngSwitchCase="\'Basic\'">\n	<form #f="ngForm">\n            \n             <div form-group>\n               <label>First Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input placeholder="Enter First Name" type="text" [(ngModel)]="userProfiles.displayName" name="first_name" [disabled]="!isEdit"></ion-input>\n               </ion-item>\n             </div> \n			    <div form-group>\n               <label>Last Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                 <ion-input placeholder="Enter Last Name"  type="text" [(ngModel)]="userProfiles.lastName" name="last_name" [disabled]="!isEdit"></ion-input>\n               </ion-item>\n             </div> \n			   <div form-group>\n               <label>Email Address</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n                 <ion-input  placeholder="Enter Email Address" type="email" [(ngModel)]="userProfiles.email" name="email" [disabled]="isFacebook == true ? true : (!isEdit)"></ion-input>\n               </ion-item>\n             </div> \n			 <div form-group>\n			<label>Phone Number</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-call-outline"></ion-icon>\n			</ion-label>\n			<ion-input required type="text" placeholder="Enter Phone Number" [(ngModel)]="userProfiles.phone" name="phone" [disabled]="!isEdit"></ion-input>\n			</ion-item>\n			</div>\n		    	<div form-group>\n				<label>Company Name</label>\n				<ion-item lines="none">\n				<ion-label>\n				<ion-icon name="ios-briefcase-outline"></ion-icon>\n				</ion-label>\n				<ion-input type="text" placeholder="Enter Company Name" [(ngModel)]="userProfiles.company" name="company" [disabled]="!isEdit"></ion-input>\n				</ion-item>\n				</div>\n				<!-- <div form-group>\n<label>Are You a Recruiter </label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="userProfiles.is_recruiter" name="is_recruiter" placeholder="Select" [disabled]="!isEdit">\n				 <ion-option value="yes"> Yes  </ion-option>\n				 <ion-option value="no">  No    </ion-option>\n				</ion-select>\n</ion-item>\n</div> -->\n<!-- <div form-group>\n<label>Company Size</label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="userProfiles.company_size" name="company_size" placeholder="Select Company Size" [disabled]="!isEdit">\n				  <ion-option value="1-15"> 1 - 15 </ion-option>\n         <ion-option value="16-50"> 16 - 50 </ion-option>\n         <ion-option value="51-100"> 51 - 100 </ion-option>\n				</ion-select>\n</ion-item>\n</div> -->\n\n<div class="error-message">\n   <ion-label color="danger" text-wrap>{{errorRegisterMessage}}</ion-label>\n</div>\n  <button round ion-button btnsubmit text-uppercase block color="secondary" [disabled]="disableRegister"  (click)="isEdit == true ? updateProfile() : editProfile()">{{buttonText}}\n  </button>\n\n  <button round ion-button btnsubmit text-uppercase block color="secondary"   (click)="cancel()" *ngIf= "isEdit">\n    Cancel\n  </button>\n  \n\n</form>\n	\n	\n	\n	</ion-list>\n		<ion-list *ngSwitchCase="\'pwd\'" >\n	<ng-container *ngIf="!userProfiles.facebook">\n    <form #f="ngForm">\n\n      <div form-group>\n        <label>{{"Current Password" | translate}}</label>\n         <ion-item>\n           <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n            <ion-input required type="password" placeholder="Enter Current Password"  [(ngModel)]="oldPassword" name="oldPassword"></ion-input>\n        </ion-item>\n     </div> \n\n\n \n   <div form-group>\n           <label>{{"New Password" | translate}}</label>\n            <ion-item>\n               <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n               <ion-input required type="password" placeholder="Enter New Password"  [(ngModel)]="newPassword" name="password"></ion-input>\n           </ion-item>\n  </div> \n\n\n  <div form-group>\n    <label>{{"Confirm Password" | translate}}</label>\n     <ion-item>\n       <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n       <ion-input required type="password" placeholder="Confirm Password"  [(ngModel)]="confirmPassword" name="password"></ion-input>\n    </ion-item>\n  </div> \n\n\n \n   \n          <p class="errorMsg" style="color: red">{{passwordError}}</p>\n\n\n  <button round ion-button btnsubmit text-uppercase block color="secondary" (click)="changePassword1(form)">\n    \n    <div>{{"ChangePassword" | translate}}</div>\n  </button>\n\n        \n     </form>\n\n\n</ng-container>\n	\n	</ion-list>\n	</div>\n	 </div> \n \n</ion-content>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/myprofile1/myprofile1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth1__["a" /* Auth1 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], Myprofile1Page);
    return Myprofile1Page;
}());

//# sourceMappingURL=myprofile1.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messages1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat1_chat1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Messages1Page = /** @class */ (function () {
    function Messages1Page(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.errors = ['', null, undefined];
        this.is_loaded = false;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
    }
    Messages1Page.prototype.ionViewDidEnter = function () {
        this.getChatUser();
    };
    Messages1Page.prototype.goToChatPage = function (id, photoURL, name, roomId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat1_chat1__["a" /* Chat1Page */], {
            user_name: name,
            user_image: photoURL,
            from_id: id,
            roomId: roomId,
            my_id: this.currentUser.uid
        });
    };
    Messages1Page.prototype.getChatUser = function () {
        var _this = this;
        var user_id = this.currentUser.uid;
        this.service.getChatUsers().on('value', function (snapshot) {
            console.log(snapshot);
            _this.is_loaded = false;
            _this.all_from_users = [];
            _this.chat_users = [];
            var all_spans = [];
            snapshot.forEach(function (snp) {
                all_spans.push({
                    id: snp.key,
                    fromId: snp.val().fromId,
                    toId: snp.val().toId,
                    isRead: snp.val().isRead,
                    roomId: snp.val().roomId,
                    message: snp.val().message,
                    date: snp.val().date
                });
            });
            all_spans.reverse();
            all_spans.forEach(function (snap) {
                var other_id = snap.fromId;
                if (snap.fromId == user_id) {
                    other_id = snap.toId;
                }
                if (_this.all_from_users.indexOf(other_id) == -1) {
                    _this.all_from_users.push(other_id);
                    _this.service.getUserProfile(other_id).on('value', function (u_snapshot) {
                        _this.service.getLastMessage(snap.roomId).once('child_added', function (m_snapshot) {
                            console.log(m_snapshot.val());
                            _this.chat_users.push({
                                id: snap.id,
                                fromId: other_id,
                                isRead: snap.isRead,
                                roomId: snap.roomId,
                                message: m_snapshot.val().message,
                                date: m_snapshot.val().date,
                                displayName: u_snapshot.val().displayName,
                                lastName: u_snapshot.val().lastName,
                                photoURL: u_snapshot.val().photoURL
                            });
                        });
                    });
                }
            });
            // this.chat_users = this.chat_users.reverse();
            console.log(_this.chat_users);
            var self = _this;
            setTimeout(function () {
                self.is_loaded = true;
            }, 1000);
        });
    };
    Messages1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-messages1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/messages1/messages1.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p *ngIf="!is_loaded">Loading...</p>\n  <ng-container *ngIf="is_loaded">\n    <ng-container *ngFor="let user of chat_users">\n      <ion-item (click)="goToChatPage(user.fromId,user.photoURL,user.displayName+\' \'+user.lastName,user.roomId)"> \n        <ion-avatar item-start>\n          <img *ngIf="errors.indexOf(user.photoURL) == -1" src="{{user.photoURL}}"/>\n          <img *ngIf="errors.indexOf(user.photoURL) >= 0" src="assets/images/person.png"/>\n        </ion-avatar>\n        <h2>{{user.displayName}} {{user.lastName}}  <ion-note><ion-icon name="ios-time-outline"></ion-icon> {{user.date | timeAgo}}</ion-note></h2>\n        <p>{{user.message}}</p>\n      </ion-item>\n    </ng-container>\n\n    <ion-item *ngIf="chat_users == \'\' && is_loaded">\n      No messages yet.\n    </ion-item>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/messages1/messages1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service1__["a" /* Service1 */]])
    ], Messages1Page);
    return Messages1Page;
}());

//# sourceMappingURL=messages1.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth1__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs1_tabs1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home1_home1__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GooglePlus } from '@ionic-native/google-plus';

//import { TwitterConnect } from '@ionic-native/twitter-connect';



// import { ListPage } from '../list/list';




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register1Page = /** @class */ (function () {
    function Register1Page(iab, nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, 
    /** private googlePlus: GooglePlus,*/ alertCtrl, values, service, platform) {
        this.iab = iab;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl; /*, private twitter: TwitterConnect*/
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.platform = platform;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "sign up";
        this.HeaderText = "Login";
        this.secondLogin = false;
        this.params = {};
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    Register1Page.prototype.openInAppBrowser = function (page) {
        var url = page == 2 ? 'https://thedentalbridge.com/#/terms-conditions' : 'https://thedentalbridge.com/#/privacy-policy';
        var browser = this.iab.create(url);
        browser.close();
    };
    Register1Page.prototype.goToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__home1_home1__["a" /* Home1Page */]);
    };
    Register1Page.prototype.register = function () {
        var _this = this;
        if (this.validateRegister(this.form)) {
            this.disableRegister = true;
            this.buttonText = "Registering...";
            this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName, this.form.phone, this.form.company, 'yes', '51-100')
                .then(function () {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser;
                _this.currentUser.sendEmailVerification();
                setTimeout(function () {
                    _this.auth.logoutUser().then(function () {
                        _this.values.isLoggedIn = false;
                        _this.values.userRole = 'Customer';
                        localStorage.clear();
                    });
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__home1_home1__["a" /* Home1Page */]);
                    _this.presentAlert('Verify your email', 'We have sent you an email verification link to your email address, Please go to that account and click on that link to verify your email address.');
                }, 1000);
                //     this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
                //     localStorage.setItem('IS_LOGGED_IN', '1');
                //     localStorage.setItem('userType','manager');
                //     this.userProfiles = snapshot.val();
                //     this.nav.setRoot(Tabs1Page);
                // });
                //   this.disableRegister = false;
                //   this.buttonText = "sign up";
            }).catch(function (err) { _this.handleRegisterError(err); });
        }
    };
    Register1Page.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "sign up";
        //this.nav.setRoot(ListPage);
    };
    Register1Page.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.phone == undefined || this.form.phone == '') {
            this.errorRegisterMessage = 'Please enter phone number';
            return false;
        }
        if (this.form.company == undefined || this.form.company == '') {
            this.errorRegisterMessage = 'Please enter company name';
            return false;
        }
        // if(this.form.is_recruiter == undefined || this.form.is_recruiter == ''){
        //   this.errorRegisterMessage = 'Please select are you a recrutier';
        //   return false;
        // }
        // if(this.form.company_size == undefined || this.form.company_size == ''){
        //   this.errorRegisterMessage = 'Please select company size';
        //   return false;
        // }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        if (this.form.terms == undefined || this.form.terms == '') {
            this.errorRegisterMessage = 'Please agree to the privacy policy & terms of conditions';
            return false;
        }
        return true;
    };
    Register1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    //FACEBOOK LOGIN
    Register1Page.prototype.facebookRestaurantLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (data) {
            if (data.status == 'connected') {
                _this.fb.logout();
            }
        });
        if (this.platform.is('cordova')) {
            this.fb.login(['public_profile', 'user_friends', 'email']).then(function (response) {
                _this.presentLoadingDefault('Please wait....');
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().signInWithCredential(facebookCredential).then(function (success) {
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    _this.values.isLoggedIn = true;
                    _this.secondLogin = false;
                    localStorage.setItem('IS_LOGGED_IN', '1');
                    localStorage.setItem('userType', 'manager');
                    __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).set({
                                email: _this.userProfile.email,
                                displayName: _this.userProfile.displayName,
                                lastName: "",
                                address: "",
                                phone: "",
                                photoURL: _this.userProfile.photoURL,
                                facebook: true,
                                secondLogin: false,
                                status: 1
                            });
                        }
                    });
                    _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                        _this.userProfiles = snapshot.val();
                        console.log(snapshot.val());
                    });
                    _this.values.userRole = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                            _this.values.userRole = snapshot.val().role;
                            localStorage.setItem('IS_LOGGED_IN', '1');
                            localStorage.setItem('userType', 'manager');
                            _this.currentUser = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser;
                            _this.service.getRestaurantUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                                _this.userProfiles = snapshot.val();
                            });
                        }
                    });
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs1_tabs1__["a" /* Tabs1Page */]);
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                    _this.functions.showAlert('Error', error.message);
                });
            }).catch(function (error) {
                console.log(error);
                _this.presentLoader.dismiss();
            });
        }
    };
    Register1Page.prototype.presentLoadingDefault = function (msg) {
        this.presentLoader = this.loadingCtrl.create({
            content: msg
        });
        this.presentLoader.present();
    };
    Register1Page.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    Register1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/register1/register1.html"*/'<ion-header headertrans>\n  <ion-navbar color="white">\n    <!--ion-title>Register</ion-title-->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<div class="register-form" >\n<div logo>\n <h1>Create Account</h1>\n  <h2>Create a new account</h2>\n</div>\n      <!--ion-card-->\n         <form #f="ngForm">\n            <ion-list>\n             <div form-group>\n               <label>First Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input placeholder="Enter First Name" required type="text" [(ngModel)]="form.firstName" name="firstname"></ion-input>\n               </ion-item>\n             </div> \n			    <div form-group>\n               <label>Last Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                 <ion-input placeholder="Enter Last Name" required type="text" [(ngModel)]="form.lastName" name="lastname"></ion-input>\n               </ion-item>\n             </div> \n			   <div form-group>\n               <label>Email Address</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n                 <ion-input  placeholder="Enter Email Address" required type="email" [(ngModel)]="form.email" name="email"></ion-input>\n               </ion-item>\n             </div> \n			 <div form-group>\n			<label>Phone Number</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-call-outline"></ion-icon>\n			</ion-label>\n			<ion-input required type="text" [(ngModel)]="form.phone" name="phone" placeholder="Enter Phone Number"></ion-input>\n			</ion-item>\n			</div>\n		    	<div form-group>\n				<label>Company Name</label>\n				<ion-item lines="none">\n				<ion-label>\n				<ion-icon name="ios-briefcase-outline"></ion-icon>\n				</ion-label>\n				<ion-input type="text" [(ngModel)]="form.company" name="company" placeholder="Enter Company Name"></ion-input>\n				</ion-item>\n				</div>\n\n				<!-- <div form-group>\n<label>Are You a Recruiter </label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="form.is_recruiter" name="is_recruiter" placeholder="Select">\n				 <ion-option value="yes"> Yes </ion-option>\n				 <ion-option value="no"> No </ion-option>\n				</ion-select>\n</ion-item>\n</div> -->\n\n\n<!-- <div form-group>\n<label>Company Size</label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-briefcase-outline"></ion-icon>\n</ion-label>\n<ion-select [(ngModel)]="form.company_size" name="company_size" placeholder="Select Company Size">\n				 <ion-option value="1-15"> 1 - 15 </ion-option>\n				 <ion-option value="16-50"> 16 - 50 </ion-option>\n				 <ion-option value="51-100"> 51 - 100 </ion-option>\n				</ion-select>\n</ion-item>\n</div> -->\n			    <div form-group>\n               <label>Password</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n                 <ion-input placeholder="Enter Password"  required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item>\n             </div> \n\n             <div btn-signup class="ion-text-center">\n             \n              <p> <ion-checkbox [(ngModel)]="form.terms" name="terms"></ion-checkbox> I agree to the <a (click)="openInAppBrowser(1)">privacy policy</a> and  <a (click)="openInAppBrowser(2)"> terms of conditions</a></p>\n              </div>\n               <!--ion-item>\n                  <ion-label floating>First Name</ion-label>\n                  <ion-input required type="test" [(ngModel)]="form.firstName" name="firstname"></ion-input>\n               </ion-item-->\n               <!--ion-item>\n                  <ion-label floating>Last Name</ion-label>\n                  <ion-input required type="text" [(ngModel)]="form.lastName" name="lastname"></ion-input>\n               </ion-item-->\n               <!--ion-item>\n                  <ion-label floating>Email</ion-label>\n                  <ion-input required type="email" [(ngModel)]="form.email" name="email"></ion-input>\n               </ion-item-->\n               <!--ion-item>\n                  <ion-label floating>Password</ion-label>\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item-->\n            </ion-list>\n            <div class="error-message">\n               <ion-label color="danger" text-wrap>{{errorRegisterMessage}}</ion-label>\n            </div>\n            <div login-btn>\n               <button  class="login-button" round ion-button block color="secondary" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableRegister" (click)="register()">{{buttonText}}</button>\n               <!--br-->\n               <!--button class="forgot-button" ion-button clear color="danger" type="submit" class="button button-block button-clear" (click)="goToLogin()">Login</button-->\n            </div>\n          <div btn-signup class="ion-text-center">\n          <p>Alreay have an account ? <a (click)="goToLogin()" href="javascript:void(0)">Login Here</a></p>\n          </div>\n\n            <div btn-facebook > \n                        <button (click)="facebookRestaurantLogin()" round medium icon-start block ion-button class="btn-facebook" >\n                          <span fb-icon><img src="assets/img/fb.png"/></span>  Login With Facebook\n                        </button>\n            </div>\n         </form>\n      <!--/ion-card-->\n   </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/register1/register1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth1__["a" /* Auth1 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] /*, private twitter: TwitterConnect*/,
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__providers_service1__["a" /* Service1 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], Register1Page);
    return Register1Page;
}());

//# sourceMappingURL=register1.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__education_education__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__education_list_education_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__password_password__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notifications_notifications__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__list_list__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_education_edit_education__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';











/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(toastCtrl, loadingController, nav, navParams, functions, auth, loadingCtrl, fb, alertCtrl, values, service, translateService, navCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.errors = ['', null, undefined, ' '];
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Edit Profile";
        this.HeaderText = "Login";
        this.Basic = 'basic';
        this.params = {};
        this.profiletab = 'Basic';
        this.disableSubmit = false;
        this.isEdit = false;
        this.addressList = [];
        this.isFacebook = false;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.auth().currentUser;
        if (this.values.isLoggedIn) {
            this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
                _this.name = _this.userProfiles.displayName + _this.userProfiles.lastName;
                _this.isFacebook = _this.userProfiles.facebook;
            });
        }
        console.log(this.userProfiles);
        this.form = {};
        this.auth = auth;
        this.form.in_stock = true;
        this.form.vendor = "";
        this.form.brand = "";
        this.form.sale_price = "";
        this.customerList = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
        /////
        this.service.getUserEducationList(this.currentUser.uid).on('value', function (snapshot) {
            _this.addressList = [];
            snapshot.forEach(function (snap) {
                _this.addressList.push({
                    id: snap.key,
                    displayName: snap.val().displayName,
                    education: snap.val().education,
                    email: snap.val().email,
                    europeResult: snap.val().europeResult,
                    birthday: snap.val().birthday,
                    finished: snap.val().finished,
                    jobcategory: snap.val().jobcategory,
                    maximum: snap.val().maximum,
                    minimum: snap.val().minimum,
                    reverseOrder: snap.val().reverseOrder,
                    started: snap.val().started,
                    timeStamp: snap.val().timeStamp,
                    uid: snap.val().uid,
                    worked: snap.val().worked
                });
            });
        });
        /////
    }
    MyprofilePage.prototype.addEducation = function () {
    };
    MyprofilePage.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    MyprofilePage.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN
    MyprofilePage.prototype.address = function (item) {
        console.log(item);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__education_education__["a" /* EducationPage */], item);
    };
    MyprofilePage.prototype.myOrder = function () {
        // this.nav.push(MyorderPage);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__education_list_education_list__["a" /* EducationListPage */]);
    };
    MyprofilePage.prototype.goToPassword = function () {
        // this.nav.push(MyorderPage);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__password_password__["a" /* PasswordPage */]);
    };
    MyprofilePage.prototype.redirectTo = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__notifications_notifications__["a" /* NotificationsPage */]);
    };
    MyprofilePage.prototype.editProfile = function () {
        this.isEdit = !this.isEdit;
        if (this.isEdit)
            this.buttonText = "Update Profile";
        else
            this.buttonText = "Edit Profile";
    };
    MyprofilePage.prototype.cancel = function () {
        this.isEdit = !this.isEdit;
        if (this.isEdit)
            this.buttonText = "Update Profile";
        else
            this.buttonText = "Edit Profile";
    };
    MyprofilePage.prototype.changePassword = function (form) {
        var _this = this;
        if (this.errors.indexOf(this.newPassword) == -1 && this.errors.indexOf(this.confirmPassword) == -1 && this.errors.indexOf(this.oldPassword) == -1) {
            this.passwordError = "";
            if (this.newPassword == this.confirmPassword) {
                this.passwordError = "";
                var password = String(this.newPassword);
                if (password.length >= 6) {
                    var cpUser_1 = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.auth().currentUser;
                    /*Then you set credentials to be the current logged in user's email
                    and the password the user typed in the input named "old password"
                    where he is basically confirming his password just like facebook for example.*/
                    var credentials = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.auth.EmailAuthProvider.credential(cpUser_1.email, this.oldPassword);
                    //Reauthenticating here with the data above
                    cpUser_1.reauthenticateWithCredential(credentials).then(function (success) {
                        _this.newPassword = '';
                        _this.oldPassword = '';
                        _this.confirmPassword = '';
                        var alert = _this.alertCtrl.create({
                            title: 'Change Password Success',
                            message: 'Your password has been updated!',
                            buttons: ['OK']
                        });
                        alert.present();
                        /* Update the password to the password the user typed into the
                          new password input field */
                        cpUser_1.updatePassword(password).then(function () {
                            //Success
                        }).catch(function (error) {
                            //Failed
                        });
                    }, function (error) {
                        console.log(error);
                        if (error.code === "auth/wrong-password") {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Change Password Failed',
                                message: 'Your old password is invalid.',
                                buttons: ['Try Again']
                            });
                            alert_1.present();
                        }
                    });
                    console.log(credentials);
                }
                else {
                    this.passwordError = "password length should be minimum 6";
                }
            }
            else {
                this.passwordError = "Passwords do not match";
            }
            //Update Password in UserAuthentication Table
        }
        else {
            if (this.errors.indexOf(this.confirmPassword) >= 0) {
                this.passwordError = "Please enter new password again to confirm";
            }
            if (this.errors.indexOf(this.newPassword) >= 0) {
                this.passwordError = "Please enter a new password";
            }
            if (this.errors.indexOf(this.oldPassword) >= 0) {
                this.passwordError = "Please enter your current password";
            }
        }
    };
    MyprofilePage.prototype.changePassword1 = function () {
        var _this = this;
        console.log('Change Password Button Clicked');
        //Creating the promt alert with inputs
        var alert = this.alertCtrl.create({
            title: 'Change Password',
            inputs: [
                {
                    name: 'oldPassword',
                    placeholder: 'Your old password..',
                    type: 'password'
                },
                {
                    name: 'newPassword',
                    placeholder: 'Your new password..',
                    type: 'password'
                },
                {
                    name: 'newPasswordConfirm',
                    placeholder: 'Confirm your new password..',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Update Password',
                    handler: function (data) {
                        //First you get the current logged in user
                        var cpUser = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.auth().currentUser;
                        /*Then you set credentials to be the current logged in user's email
                        and the password the user typed in the input named "old password"
                        where he is basically confirming his password just like facebook for example.*/
                        var credentials = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.auth.EmailAuthProvider.credential(cpUser.email, data.oldPassword);
                        //Reauthenticating here with the data above
                        cpUser.reauthenticateWithCredential(credentials).then(function (success) {
                            if (data.newPassword != data.newPasswordConfirm) {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'Change Password Failed',
                                    message: 'You did not confirm your password correctly.',
                                    buttons: ['Try Again']
                                });
                                alert_2.present();
                            }
                            else if (data.newPassword.length < 6) {
                                var alert_3 = _this.alertCtrl.create({
                                    title: 'Change Password Failed',
                                    message: 'Your password should be at least 6 characters long',
                                    buttons: ['Try Again']
                                });
                                alert_3.present();
                            }
                            else {
                                var alert_4 = _this.alertCtrl.create({
                                    title: 'Change Password Success',
                                    message: 'Your password has been updated!',
                                    buttons: ['OK']
                                });
                                alert_4.present();
                                /* Update the password to the password the user typed into the
                                  new password input field */
                                cpUser.updatePassword(data.newPassword).then(function () {
                                    //Success
                                }).catch(function (error) {
                                    //Failed
                                });
                            }
                        }, function (error) {
                            console.log(error);
                            if (error.code === "auth/wrong-password") {
                                var alert_5 = _this.alertCtrl.create({
                                    title: 'Change Password Failed',
                                    message: 'Your old password is invalid.',
                                    buttons: ['Try Again']
                                });
                                alert_5.present();
                            }
                        });
                        console.log(credentials);
                    }
                }
            ]
        });
        alert.present();
    };
    MyprofilePage.prototype.presentLoadingDefault = function (msg) {
        this.presentLoader = this.loadingCtrl.create({
            content: msg
        });
        this.presentLoader.present();
    };
    MyprofilePage.prototype.presentAlert = function (msg, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    MyprofilePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Picture Uploaded',
            message: 'Do you want to save this picture?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function () {
                        _this.service.updateProfileInfo({ photoURL: _this.downloadURL })
                            .then(function () {
                            _this.userProfiles.photoURL = _this.downloadURL;
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyprofilePage.prototype.goToAddresses = function () {
        //this.nav.push(EducationListPage);
    };
    MyprofilePage.prototype.ionViewDidLoad = function () {
        this.isPicChanged = false;
        console.log('ionViewDidLoad ProfilePage');
    };
    MyprofilePage.prototype.upLoad = function () {
        var _this = this;
        var fileName = this.selectedFile.name;
        console.log(fileName);
        var storageRef = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.storage().ref('Products Image/' + fileName);
        var metadata = { contentType: 'image/jpeg' };
        var uploadTask = storageRef.put(this.selectedFile, metadata);
        uploadTask.on('state_changed', function (snapshot) {
            console.log(snapshot);
            var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log('upload' + progress + '% done');
            switch (uploadTask.snapshot.state) {
                case __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.storage.TaskState.PAUSED:// or Paused
                    console.log('upLoad is paused');
                    break;
                case __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.storage.TaskState.RUNNING:// OR Running
                    console.log('upload is running');
                    break;
            }
        }, function (error) {
            console.log(error);
            _this.disableSubmit = false;
            _this.presentLoader.dismiss();
        }, function () {
            _this.presentLoader.dismiss();
            _this.downloadURL = uploadTask.snapshot.downloadURL;
            _this.disableSubmit = false;
            console.log(_this.downloadURL);
            console.log('success');
            _this.isPicChanged = true;
            _this.presentConfirm();
        });
    };
    MyprofilePage.prototype.onChange = function (event) {
        this.selectedFile = event.target.files[0];
        this.disableSubmit = true;
        this.presentLoadingDefault('Uploading....');
        this.upLoad();
    };
    MyprofilePage.prototype.addProduct = function () {
        if (this.validate()) {
            this.service.addProfileImage(this.downloadURL);
            //.then( () =>{
            //this.navCtrl.pop();
            //});
            this.nav.push(__WEBPACK_IMPORTED_MODULE_12__list_list__["a" /* ListPage */]);
        }
    };
    MyprofilePage.prototype.validate = function () {
        if (this.downloadURL == undefined || this.downloadURL == '') {
            this.errorMessage = 'Please Add Image';
            return false;
        }
        return true;
    };
    MyprofilePage.prototype.updateInfo = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_14_firebase___default.a.auth().currentUser.uid;
        var existEmail;
        if (this.validateRegister()) {
            if (this.ValidateEmail(this.userProfiles.email)) {
                this.errorRegisterMessage = '';
                this.disableSubmit = true;
                this.buttonText = "Updating...";
                var data = {
                    email: this.userProfiles.email,
                    displayName: this.userProfiles.displayName,
                    lastName: this.userProfiles.lastName,
                    europeResult: this.userProfiles.europeResult,
                    birthday: this.userProfiles.birthday,
                    address: "",
                    phone: this.userProfiles.phone,
                    facebook: false,
                    profession: this.userProfiles.profession,
                    miles: this.userProfiles.miles,
                };
                this.service.updateProfileInfo(data).then(function () {
                    _this.service.getRestaurantUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                        _this.userProfiles = snapshot.val();
                    });
                    _this.name = _this.userProfiles.displayName + _this.userProfiles.lastName;
                    _this.disableSubmit = false;
                    _this.isEdit = !_this.isEdit;
                    if (_this.isEdit)
                        _this.buttonText = "Update Profile";
                    else
                        _this.buttonText = "Edit Profile";
                    _this.isPicChanged = false;
                    _this.presentToast('Profile updated successfully!');
                }).catch(function (err) {
                    console.log(err);
                    _this.disableSubmit = false;
                });
                // this.service.getcheckEmail(this.userProfiles.email).on('value', (snapshot) =>{
                //    if(this.errors.indexOf(snapshot.val())==-1){
                //     snapshot.forEach( snap =>{
                //      if(snap.key != uid){
                //       this.disableSubmit = false;
                //       this.buttonText = "Update";
                //       this.errorRegisterMessage = 'This email is already in use, Try another.';
                //       return false;
                //      }else{
                //         this.service.updateProfileInfo(data).then(() => {
                //         this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
                //         this.userProfiles = snapshot.val();});
                //         this.name = this.userProfiles.displayName+ this.userProfiles.lastName;
                //         this.disableSubmit = false;
                //         this.buttonText = "Update";
                //         this.isPicChanged = false;
                //    }).catch(err => {
                //      console.log(err)
                //      this.disableSubmit = false;
                //       });
                //      }
                //     })
                //    }else{
                //     this.service.updateProfileInfo(data).then(() => {
                //       this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
                //       this.userProfiles = snapshot.val();});
                //       this.name = this.userProfiles.displayName+ this.userProfiles.lastName;
                //       this.disableSubmit = false;
                //       this.buttonText = "Update";
                //       this.isPicChanged = false;
                //     }).catch(err => {
                //       console.log(err)
                //       this.disableSubmit = false;
                //     });
                //    }    
                // });
            }
            else {
                this.errorRegisterMessage = 'Please enter a valid email address';
            }
        }
    };
    MyprofilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    MyprofilePage.prototype.validateRegister = function () {
        if (this.errors.indexOf(this.userProfiles.displayName) >= 0) {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.lastName) >= 0) {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.email) >= 0) {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.europeResult) >= 0) {
            this.errorRegisterMessage = 'Please enter gender';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.birthday) >= 0) {
            this.errorRegisterMessage = 'Please enter birthday';
            return false;
        }
        // if(this.errors.indexOf(this.userProfiles.phone)>=0){
        //     this.errorRegisterMessage = 'Please enter phone number';
        //     return false;
        //   }
        if (this.errors.indexOf(this.userProfiles.profession) >= 0) {
            this.errorRegisterMessage = 'Please enter profession';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.miles) >= 0) {
            this.errorRegisterMessage = 'Please enter miles from their vicinity';
            return false;
        }
        return true;
    };
    MyprofilePage.prototype.ValidateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    };
    MyprofilePage.prototype.editEducation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__edit_education_edit_education__["a" /* EditEducationPage */], { address: this.addressList[0] });
    };
    MyprofilePage.prototype.addNewEducation = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__education_education__["a" /* EducationPage */]);
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/myprofile/myprofile.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n	<button ion-button menuToggle> \n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{"Profile" | translate}}</ion-title>\n	\n	<ion-buttons end>\n	<!-- <button ion-button > \n      <ion-icon name="notifications" (click)="redirectTo()"></ion-icon>\n    </button> -->\n	\n	</ion-buttons>\n  </ion-navbar>\n</ion-header> \n<ion-content>\n\n<div profileinfo>\n<div profileimg>\n  <img src="assets/img/bg-profile.jpg"/>\n</div>\n<div userimg>\n  <label for="editphoto">\n     <ion-icon name="ios-create-outline"></ion-icon>\n  </label>\n   <ng-container>\n             \n               <input type="file" id="editphoto" name="Choose File" (change)="onChange($event)" style="display:none">\n           </ng-container>\n   \n<ng-container *ngIf="userProfiles?.photoURL">\n            <img src="{{userProfiles.photoURL}}" width="80" height="80" >\n         </ng-container>\n         <ng-container *ngIf="!userProfiles?.photoURL" >\n            <img src="{{values.avatar}}" width="80" height="80">\n         </ng-container>\n<h2>{{name}}</h2>\n\n<h2 (click)="editEducation()" *ngIf="addressList.length!=0" editEdu><ion-icon name="create"></ion-icon>Edit Education </h2>\n<h2  addedu (click)="addNewEducation()" *ngIf="addressList.length==0">Add Education <a href="javascript:void(0)" edited><ion-icon name="ios-create-outline"></ion-icon></a></h2>\n\n</div>\n</div>\n<div profilesetting>\n     <ion-segment [(ngModel)]="profiletab">\n		<ion-segment-button value="Basic">\n		   Basic Info\n		</ion-segment-button>\n			<ion-segment-button value="pwd">\n		   Change Password\n		</ion-segment-button>\n  </ion-segment>\n   <div [ngSwitch]="profiletab">\n	<ion-list *ngSwitchCase="\'Basic\'">\n	<form>\n            \n             <div form-group>\n               <label>First Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input placeholder="Enter First Name" type="text" value="{{userProfiles.displayName}}" [(ngModel)]="userProfiles.displayName" name="fname" [disabled]="!isEdit"></ion-input>\n               </ion-item>\n             </div> \n\n             <div form-group>\n              <label>Last Name</label>\n               <ion-item>\n                 <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                 <ion-input placeholder="Enter Last Name" type="text" value="{{userProfiles.lastName}}" [(ngModel)]="userProfiles.lastName" name="lname" [disabled]="!isEdit"></ion-input>\n              </ion-item>\n            </div> \n\n			   \n			   <div form-group>\n               <label>Email Address</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n                 <ion-input  placeholder="Enter Email Address"  type="email" value="{{userProfiles.email}}" [(ngModel)]="userProfiles.email" name="email" disabled="true" [disabled]="isFacebook == true ? true : (!isEdit)"></ion-input>\n               </ion-item>\n         </div> \n\n\n\n			 <!-- <div form-group>\n              <label>Phone Number</label>\n              <ion-item lines="none">\n                  <ion-label>\n                      <ion-icon name="ios-call-outline"></ion-icon>\n                  </ion-label>\n                  <ion-input required type="text"  placeholder="Enter Phone Number" value="{{userProfiles.phone}}" [(ngModel)]="userProfiles.phone" name="phone" [disabled]="!isEdit"></ion-input>\n              </ion-item>\n			</div> -->\n\n\n\n		    	<div form-group>\n<label>Profession </label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-person-outline"></ion-icon>\n</ion-label>\n\n<ion-select  placeholder="Select Your Profession" [(ngModel)]="userProfiles.profession" name="profession" [disabled]="!isEdit">\n  <ion-option value="1"> Dental Assistant  </ion-option>\n  <ion-option value="2">  Dental Hygienist    </ion-option>\n  <ion-option value="3">  Dentist     </ion-option>\n  <ion-option value="4">Front Desk</ion-option>\n  </ion-select>\n</ion-item>\n \n</div>\n			<div form-group>\n			<label>Miles From Their Vicinity</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-speedometer-outline"></ion-icon>\n			</ion-label>\n			<ion-input required type="text"  placeholder="Enter Miles" [(ngModel)]="userProfiles.miles" name="miles" [disabled]="!isEdit"></ion-input>\n			</ion-item>\n			</div>\n	<div form-group>\n<label>Gender </label>\n<ion-item lines="none">\n<ion-label>\n<ion-icon name="ios-person-outline"></ion-icon>\n</ion-label>\n\n				 <ion-select [(ngModel)]="userProfiles.europeResult" name="europe" placeholder="Select" [disabled]="!isEdit">\n              <ion-option value="Male"> Male </ion-option>\n              <ion-option value="Female"> Female   </ion-option>\n		 \n               </ion-select>\n</ion-item>\n</div>\n			 \n			<div form-group>\n			<label>Birthday</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-calendar-outline"></ion-icon>\n			</ion-label>\n			 <ion-datetime displayFormat="MM-DD-YYYY" [(ngModel)]="userProfiles.birthday" name="birthday" [disabled]="!isEdit"></ion-datetime>\n			</ion-item>\n      </div>\n      \n \n        <p class="errorMsg" style="color: red">{{errorRegisterMessage}}</p>\n     \n\n  <button round ion-button btnsubmit text-uppercase block color="secondary"  [disabled]="disableSubmit" (click)="isEdit == true ? updateInfo() : editProfile()" >\n        {{buttonText}}\n      </button>\n\n      <button round ion-button btnsubmit text-uppercase block color="secondary"  [disabled]="disableSubmit" (click)="cancel()" *ngIf= "isEdit">\n        Cancel\n      </button>\n      \n	</form>\n	\n	\n	\n	</ion-list>\n		<ion-list *ngSwitchCase="\'pwd\'" >\n		<ng-container  *ngIf="!userProfiles.facebook">\n         <form #f="ngForm">\n\n          <div form-group>\n            <label>{{"Current Password" | translate}}</label>\n             <ion-item>\n               <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n                <ion-input required type="password" placeholder="Enter Current Password"  [(ngModel)]="oldPassword" name="oldPassword"></ion-input>\n            </ion-item>\n         </div> \n\n\n		 \n		   <div form-group>\n               <label>{{"New Password" | translate}}</label>\n                <ion-item>\n                   <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n				           <ion-input required type="password" placeholder="Enter New Password"  [(ngModel)]="newPassword" name="password"></ion-input>\n               </ion-item>\n      </div> \n\n\n      <div form-group>\n        <label>{{"Confirm Password" | translate}}</label>\n         <ion-item>\n           <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n           <ion-input required type="password" placeholder="Confirm Password"  [(ngModel)]="confirmPassword" name="password"></ion-input>\n        </ion-item>\n      </div> \n\n\n		 \n\n              <p class="errorMsg" style="color: red">{{passwordError}}</p>\n\n\n      <button round ion-button btnsubmit text-uppercase block color="secondary" (click)="changePassword(form)">\n        \n        <div>{{"ChangePassword" | translate}}</div>\n      </button>\n\n            \n         </form>\n      </ng-container>\n		\n		\n\n	\n	</ion-list>\n	</div>\n  \n  \n   \n</div>\n \n</ion-content>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/myprofile/myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__education_education__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__education_list_education_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';







/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordPage = /** @class */ (function () {
    function PasswordPage(nav, navParams, functions, auth, loadingCtrl, fb, alertCtrl, values, service, translateService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.translateService = translateService;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.params = {};
        this.currentUser = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser;
        if (this.values.isLoggedIn) {
            this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
            });
        }
        console.log(this.userProfiles);
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    PasswordPage.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    PasswordPage.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN
    PasswordPage.prototype.address = function (item) {
        console.log(item);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__education_education__["a" /* EducationPage */], item);
    };
    PasswordPage.prototype.myOrder = function () {
        // this.nav.push(MyorderPage);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__education_list_education_list__["a" /* EducationListPage */]);
    };
    PasswordPage.prototype.changePassword = function (form) {
        if (form.password != "" && form.password != null) {
            //Update Password in UserAuthentication Table
            __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser.updatePassword(form.password).then(function (ok) { }, function (error) { });
            alert("Password changed");
        }
        else {
            alert("Please enter new password");
        }
    };
    PasswordPage.prototype.goToAddresses = function () {
        //this.nav.push(EducationListPage);
    };
    PasswordPage.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/password/password.html"*/'<ion-header>\n	<ion-navbar color="primary" text-center>\n	<button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	  </button>  \n	  <ion-title>Change Password</ion-title>\n	</ion-navbar>\n  </ion-header>\n\n\n<ion-content parallax style = "background-color : #DCF7C2;">\n  <div class="bg">\n  </div>\n\n  <div class="main-cnt">\n  <!--\n    <img src="../assets/img/dp.jpg" class="dp">\n	-->\n	\n	\n\n         <div *ngIf="userProfiles.photoURL" style = "margin-top:-200px;">\n            <img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;background:none;" class="circle-pic">\n         </div>\n         <div *ngIf="!userProfiles.photoURL" style = "margin-top:-200px;">\n            <img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;background:none;" class="circle-pic">\n         </div>\n\n      <h3 text-center style = "color: white;">{{userProfiles.displayName}} {{userProfiles.lastName}}</h3>  \n	\n	 <ion-card style = "background-color:#98EA69;" *ngIf="!userProfiles.facebook">\n         <form #f="ngForm" style = "background-color:#98EA69;">\n            <ion-list style = "background-color:#98EA69;">\n				<ion-item style = "background-color:#98EA69;">\n                  <ion-label floating style ="background-color:white;">{{"Password" | translate}}</ion-label>\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item>\n            </ion-list>\n      <button ion-button icon-left (click)="changePassword(form)" clear big>\n        \n        <div>{{"ChangePassword" | translate}}</div>\n      </button>\n\n            \n         </form>\n      </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { GooglePlus } from '@ionic-native/google-plus';

//import { TwitterConnect } from '@ionic-native/twitter-connect';






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(iab, platform, nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, /** private googlePlus: GooglePlus,*/ alertCtrl, values, service, datePicker) {
        this.iab = iab;
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl; /*, private twitter: TwitterConnect*/
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.datePicker = datePicker;
        this.secondLogin = false;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Sign Up";
        this.HeaderText = "Login";
        this.params = {};
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
        this.europe = [];
        this.europe = {
            "items": [{
                    "id": "Male",
                    "name": "Male"
                },
                {
                    "id": "Female",
                    "name": "Female"
                }
            ]
        };
    }
    RegisterPage.prototype.openInAppBrowser = function (page) {
        var url = page == 2 ? 'https://thedentalbridge.com/#/terms-conditions' : 'https://thedentalbridge.com/#/privacy-policy';
        var browser = this.iab.create(url);
        browser.close();
    };
    RegisterPage.prototype.goToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.validateRegister()) {
            if (this.ValidateEmail(this.form.email)) {
                this.disableRegister = true;
                this.buttonText = "Registering...";
                this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName, this.form.europe, this.date, '9815393101', this.form.profession, this.form.miles)
                    .then(function () {
                    _this.currentUser = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser;
                    _this.currentUser.sendEmailVerification();
                    setTimeout(function () {
                        _this.auth.logoutUser().then(function () {
                            _this.values.isLoggedIn = false;
                            _this.values.userRole = 'Customer';
                            localStorage.clear();
                        });
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
                        _this.presentAlert('Verify your email', 'We have sent you an email verification link to your email address, Please go to that account and click on that link to verify your email address.');
                    }, 1000);
                    //   localStorage.setItem('IS_LOGGED_IN', '1');
                    //   localStorage.setItem('userType','seeker');
                    //       this.currentUser = firebase.auth().currentUser;
                    //       console.log(this.currentUser);
                    //       this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
                    //       this.userProfiles = snapshot.val();
                    // });
                    //   this.disableRegister = false;
                    //   this.buttonText = "Sign Up";
                }).catch(function (err) {
                    // if(err.code=='auth/email-already-in-use'){
                    //   this.errorRegisterMessage = 'This email is already in use, Please try another';
                    // }
                    _this.handleRegisterError(err);
                });
            }
            else {
                this.errorRegisterMessage = 'Please enter a valid email address';
            }
        }
    };
    RegisterPage.prototype.ValidateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    };
    RegisterPage.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Sign Up";
    };
    RegisterPage.prototype.validateRegister = function () {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        // if(this.form.phone == undefined || this.form.phone == ''){
        //   this.errorRegisterMessage = 'Please enter phone number';
        //   return false;
        // }
        if (this.form.profession == undefined || this.form.profession == '') {
            this.errorRegisterMessage = 'Please select profession';
            return false;
        }
        if (this.form.miles == undefined || this.form.miles == '') {
            this.errorRegisterMessage = 'Please enter miles from their vicinity';
            return false;
        }
        if (this.form.europe == undefined || this.form.europe == '') {
            this.errorRegisterMessage = 'Please select gender';
            return false;
        }
        if (this.date == undefined || this.date == '') {
            this.errorRegisterMessage = 'Please enter birthday';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        if (this.form.terms == undefined || this.form.terms == '') {
            this.errorRegisterMessage = 'Please agree to the privacy policy & terms of conditions';
            return false;
        }
        return true;
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.selectEurope = function (key, address) {
        console.log(key);
        console.log(address);
        this.europeResult = address.key;
    };
    RegisterPage.prototype.ngOnInit = function () {
        /**
       this.datePicker.show({
         date: new Date(),
            mode: 'date',
             androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
         });
         */
    };
    RegisterPage.prototype.facebookRestaurantLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (data) {
            if (data.status == 'connected') {
                _this.fb.logout();
            }
        });
        if (this.platform.is('cordova')) {
            this.fb.login(['public_profile', 'email']).then(function (response) {
                _this.presentLoadingDefault('Please wait....');
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().signInWithCredential(facebookCredential).then(function (success) {
                    localStorage.setItem('IS_LOGGED_IN', '1');
                    localStorage.setItem('userType', 'seeker');
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    _this.values.isLoggedIn = true;
                    _this.secondLogin = false;
                    __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).set({
                                email: _this.userProfile.email,
                                displayName: _this.userProfile.displayName,
                                lastName: "",
                                address: "",
                                phone: "",
                                photoURL: _this.userProfile.photoURL,
                                facebook: true,
                                secondLogin: false,
                                status: 2
                            });
                        }
                    });
                    _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                        _this.userProfiles = snapshot.val();
                    });
                    _this.values.userRole = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                            _this.values.userRole = snapshot.val().role;
                            localStorage.setItem('IS_LOGGED_IN', '1');
                            localStorage.setItem('userType', 'seeker');
                            _this.currentUser = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser;
                            console.log(_this.currentUser);
                            _this.service.getRestaurantUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                                _this.userProfiles = snapshot.val();
                            });
                            console.log('comingcoming');
                            _this.presentLoader.dismiss();
                        }
                    });
                    // this.nav.push('ShopPage');
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                    //  this.functions.showAlert('Error', error.message);
                });
            }).catch(function (error) {
                console.log(error);
                _this.presentLoader.dismiss();
                // this.functions.showAlert('Error', error.errorMessage);
            });
        }
    };
    RegisterPage.prototype.presentLoadingDefault = function (msg) {
        this.presentLoader = this.loadingCtrl.create({
            content: msg
        });
        this.presentLoader.present();
    };
    RegisterPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/register/register.html"*/'<ion-header headertrans>\n  <ion-navbar color="white">\n    <!--ion-title>Register</ion-title-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="register-form" >\n<div logo>\n <h1>Create Account</h1>\n  <h2>Create a new account</h2>\n</div>\n      <!--ion-card-->\n         <form #f="ngForm">\n            <ion-list>\n               <div form-group>\n				   <label>First Name</label>\n					<ion-item>\n					  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n					  <ion-input required type="text"  placeholder="Enter First Name" [(ngModel)]="form.firstName" name="firstname"></ion-input>\n				   </ion-item>\n               </div> \n			   <div form-group>\n				   <label>Last Name</label>\n					<ion-item>\n					  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n					  <ion-input required type="text" placeholder="Enter Last Name"  [(ngModel)]="form.lastName" name="lastname"></ion-input>\n				   </ion-item>\n               </div>\n			  <div form-group>\n               <label>Email Address</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n                <ion-input required  placeholder="Enter Email Address" type="email" [(ngModel)]="form.email" name="email"></ion-input>\n               </ion-item>\n             </div> \n			<!-- <div form-group>\n		      	<label>Phone Number</label>\n                  <ion-item lines="none">\n               <ion-label>\n               <ion-icon name="ios-call-outline"></ion-icon>\n               </ion-label>\n                  <ion-input required type="number"  placeholder="Enter Phone Number" [(ngModel)]="form.phone" name="phone"></ion-input>\n               </ion-item>\n			</div> -->\n				<div form-group>\n            <label>Profession </label>\n            <ion-item lines="none">\n            <ion-label>\n            <ion-icon name="ios-person-outline"></ion-icon>\n            </ion-label>\n            <ion-select  placeholder="Select Your Profession" [(ngModel)]="form.profession" name="profession">\n                      \n                        <ion-option value="1"> Dental Assistant  </ion-option>\n                        <ion-option value="2">  Dental Hygienist    </ion-option>\n                        <ion-option value="3">  Dentist     </ion-option>\n                        <ion-option value="4">Front Desk</ion-option>\n                        </ion-select>\n            </ion-item>\n         </div>\n			<div form-group>\n               <label>Miles From Their Vicinity</label>\n                  <ion-item lines="none">\n               <ion-label>\n                  <ion-icon name="ios-speedometer-outline"></ion-icon>\n               </ion-label>\n                   <ion-input required type="number"  placeholder="Enter Miles"  [(ngModel)]="form.miles" name="miles"></ion-input>\n               </ion-item>\n			</div>\n			<div form-group>\n               <label>Gender </label>\n               <ion-item lines="none">\n                  <ion-label>\n                      <ion-icon name="ios-person-outline"></ion-icon>\n                  </ion-label>\n\n                  <ion-select [(ngModel)]="form.europe"  name="europe" placeholder="Select">\n                     <ion-option *ngFor="let result of europe.items" value="{{result.id}}">{{result.name}}</ion-option>\n                  </ion-select>\n               </ion-item>\n         </div>\n			 \n			<div form-group>\n		      	<label>Birthday</label>\n               <ion-item lines="none">\n               <ion-label>\n                    <ion-icon name="ios-calendar-outline"></ion-icon>\n               </ion-label>\n                     <ion-datetime displayFormat="MM-DD-YYYY" [(ngModel)]="date" name="something"></ion-datetime>\n               </ion-item>\n			</div>\n			<div form-group>\n               <label>Password</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n				  <ion-input required placeholder="Enter Password"  type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item>\n         </div> \n\n         <div btn-signup class="ion-text-center">\n             \n            <p> <ion-checkbox [(ngModel)]="form.terms" name="terms"></ion-checkbox> I agree to the <a (click)="openInAppBrowser(1)">privacy policy</a> and  <a (click)="openInAppBrowser(2)"> terms of conditions</a></p>\n            </div>\n               <!--ion-item>\n                  <ion-label floating>First Name</ion-label>\n                  <ion-input required type="text" [(ngModel)]="form.firstName" name="firstname"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>Last Name</ion-label>\n                  <ion-input required type="text" [(ngModel)]="form.lastName" name="lastname"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>Email</ion-label>\n                  <ion-input required type="email" [(ngModel)]="form.email" name="email"></ion-input>\n               </ion-item>\n			   \n               <ion-item>\n                  <ion-label floating>Password</ion-label>\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item-->\n			   \n			   \n			   \n			 \n			   \n			 <!--ion-item style="padding-top:10px" class="option">\n               <ion-label>GENDER</ion-label>\n               <ion-select [(ngModel)]="form.europe"  name="europe">\n               <ion-option *ngFor="let result of europe.items" value="{{result.id}}">{{result.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			\n\n  <div class="order" style = "margin-top:10px;">\n      \n      <div class="select-box">\n        <ion-item class="data-holder">\n          <ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="date" name="something"></ion-datetime>\n          <ion-label><ion-icon name="person" class="icons">Birthday</ion-icon></ion-label>\n		  \n        </ion-item>\n      </div>\n    </div-->\n			   \n            </ion-list>\n\n            <ion-item lines="none">\n               <p class="errorMsg"  style="color: red">{{errorRegisterMessage}}</p>\n            </ion-item>\n\n            <!-- <div class="error-message">\n               <ion-label color="danger" text-wrap>{{errorRegisterMessage}}</ion-label>\n            </div> -->\n\n            <div login-btn>\n               <button round ion-button block color="secondary" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableRegister" (click)="register()">{{buttonText}}</button>\n            </div>\n			<div btn-signup class="ion-text-center">\n<p>Alreay have an account ? <a (click)="goToLogin()" href="javascript:void(0)">Login Here</a></p>\n\n</div>\n			<div btn-facebook > \n  <button round medium icon-start block ion-button class="btn-facebook" (click)="facebookRestaurantLogin()">\n              <span fb-icon><img src="assets/img/fb.png"/></span>  Login With Facebook\n            </button>\n</div>\n         </form>\n      <!--/ion-card-->\n   </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SupportPage = /** @class */ (function () {
    function SupportPage(toastCtrl, loadingController, nav, navParams, functions, auth, loadingCtrl, fb, alertCtrl, values, service, translateService, navCtrl, emailComposer) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
        this.errors = ['', null, undefined, ' '];
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Proceed";
        this.HeaderText = "Login";
        this.Basic = 'basic';
        this.params = {};
        this.profiletab = 'Basic';
        this.disableSubmit = false;
        this.isEdit = false;
        this.addressList = [];
        this.isFacebook = false;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser;
        if (this.values.isLoggedIn) {
            this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
                _this.name = _this.userProfiles.displayName + _this.userProfiles.lastName;
                _this.isFacebook = _this.userProfiles.facebook;
            });
        }
        console.log(this.userProfiles);
        this.form = {};
        this.auth = auth;
        this.form.in_stock = true;
        this.form.vendor = "";
        this.form.brand = "";
        this.form.sale_price = "";
        this.customerList = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
        /////
        this.service.getUserEducationList(this.currentUser.uid).on('value', function (snapshot) {
            _this.addressList = [];
            snapshot.forEach(function (snap) {
                _this.addressList.push({
                    id: snap.key,
                    displayName: snap.val().displayName,
                    education: snap.val().education,
                    email: snap.val().email,
                    europeResult: snap.val().europeResult,
                    birthday: snap.val().birthday,
                    finished: snap.val().finished,
                    jobcategory: snap.val().jobcategory,
                    maximum: snap.val().maximum,
                    minimum: snap.val().minimum,
                    reverseOrder: snap.val().reverseOrder,
                    started: snap.val().started,
                    timeStamp: snap.val().timeStamp,
                    uid: snap.val().uid,
                    worked: snap.val().worked
                });
            });
        });
        /////
    }
    SupportPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SupportPage.prototype.validateRegister = function () {
        if (this.errors.indexOf(this.userProfiles.displayName) >= 0) {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.lastName) >= 0) {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.email) >= 0) {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.errors.indexOf(this.userProfiles.problem) >= 0) {
            this.errorRegisterMessage = 'Please enter your query';
            return false;
        }
        return true;
    };
    SupportPage.prototype.ValidateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    };
    SupportPage.prototype.sendEmail = function () {
        if (!this.validateRegister())
            return false;
        var email = {
            to: 'info@thedentalbridge.com',
            subject: 'Dental Bridge feedback',
            body: 'Name: ' + this.userProfiles.displayName + ' ' + this.userProfiles.lastName + "\n" +
                'Email: ' + this.userProfiles.email + "\n" +
                'Query: ' + this.userProfiles.problem,
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/support/support.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n	<button ion-button menuToggle> \n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Support</ion-title>\n	\n	<ion-buttons end>\n	<!-- <button ion-button > \n      <ion-icon name="notifications" (click)="redirectTo()"></ion-icon>\n    </button> -->\n	\n	</ion-buttons>\n  </ion-navbar>\n</ion-header> \n<ion-content>\n\n \n \n<div profilesetting supportbox>\n \n   <div [ngSwitch]="profiletab">\n	<ion-list *ngSwitchCase="\'Basic\'">\n	<form>\n            \n             <div form-group>\n               <label>First Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input placeholder="Enter First Name" type="text"   [(ngModel)]="userProfiles.displayName" name="fname"  ></ion-input>\n               </ion-item>\n             </div> \n\n             <div form-group>\n              <label>Last Name</label>\n               <ion-item>\n                 <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                 <ion-input placeholder="Enter Last Name" type="text" [(ngModel)]="userProfiles.lastName" name="lname"  ></ion-input>\n              </ion-item>\n            </div> \n\n			   \n			   <div form-group>\n               <label>Email Address</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n                 <ion-input  placeholder="Enter Email Address"  type="email"  [(ngModel)]="userProfiles.email" name="email"   ></ion-input>\n               </ion-item>\n         </div> \n\n\n         <div form-group>\n          <label>Tell us your query</label>\n           <ion-item auToHeight>\n             <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n             <ion-textarea rows="4" [(ngModel)]="userProfiles.problem" name="problem"></ion-textarea> \n\n             \n          </ion-item>\n    </div> \n\n \n    <p class="errorMsg" style="color: red">{{errorRegisterMessage}}</p>\n     \n\n  <button round ion-button btnsubmit text-uppercase block color="secondary"  [disabled]="disableSubmit" (click)="sendEmail()" >\n        {{buttonText}}\n      </button>\n\n      <button round ion-button btnsubmit text-uppercase block color="secondary"  [disabled]="disableSubmit" (click)="cancel()" *ngIf= "isEdit">\n        Cancel\n      </button>\n      \n	</form>\n	\n	\n	\n	</ion-list>\n \n	</div>\n  \n  \n   \n</div>\n \n</ion-content>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/support/support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Service1 = /** @class */ (function () {
    function Service1(http, config) {
        this.http = http;
        this.config = config;
        //setting: any;
        this.product_id = [];
        this.total = 0;
        this.proqty = [];
        this.url = this.config.url;
        this.cart = { "line_items": [],
            "extraOptions": [] };
        this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        this.orderList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/orders');
        this.Notifications = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/notifications');
        this.Chat = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/chat');
        this.restaurants = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/restaurants');
        this.restaurantCategory = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/category');
        this.items = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items');
        this.restaurantUserInfo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users');
        this.cord = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/cord');
        this.cityName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/city');
        this.cityDistrictName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/districts');
        this.streetName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/streets');
        this.apartmentOfficeName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/apartments');
        this.myCart = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/mycart');
        this.extraOptions = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/extraOptions');
        this.extra = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/extra');
        this.tableOrders = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/tableOrders');
        this.tableAdminOrders = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/AllTableOrders');
        this.paypalConfiguration = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/paypal');
        this.categorizedOrders = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/categorizedOrders');
        /**************New job application*********/
        this.jobCategory = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/jobCategory');
        this.jobCategoryName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/jobCategoryName');
        this.educationName = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/educationName');
        this.startedYear = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/startedYear');
        this.finishedYear = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/finishedYear');
        this.workedYear = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/workedYear');
        this.applyJobs = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/applyJobs');
        this.employeeJob = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/employeeJob');
        this.workerJob = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/workerJob');
        this.appliedJob = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/appliedJob');
        this.minSalary = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/minSalary');
        this.maxSalary = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/maxSalary');
        this.allJobList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/allJobList');
        this.categorizedByJobPoster = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/categorizedByJobPoster');
        this.addressList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/locations');
    }
    Service1.prototype.updateAdminJob = function (tech, job_id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(tech);
        return this.applyJobs.child(job_id).update({
            /**
              address: tech.address,
              category: tech.category,
              description: tech.description,
              employer_id: tech.employer_id,
              face:tech.face,
              job_id: tech.id,
              localdate: tech.localdate,
              maxsalary: tech.maxsalary,
              minsalary: tech.minsalary,
              phone: tech.phone,
              name: tech.name,
              user_uid:uid,
              timeStamp: firebase.database.ServerValue.TIMESTAMP,
              reverseOrder: 0 - Date.now(),
              education:education,
              */
            status: tech.status,
        });
    };
    Service1.prototype.updateToWorkers = function (jobSearcher_id, post_id, jobDetails) {
        console.log(jobDetails);
        return this.workerJob.child(jobSearcher_id).child(post_id).update({
            /**
              employer_id: jobDetails.employer_id,
              face:jobDetails.face,
              job_id: job_id,
              
              name: jobDetails.name,
              user_uid:uid,
              timeStamp: firebase.database.ServerValue.TIMESTAMP,
              reverseOrder: 0 - Date.now(),
              education: jobDetails.education,
              */
            /**
            address: jobDetails.address,
            category: jobDetails.category,
            description: jobDetails.description,
            employer_id: jobDetails.employer_id,
            face:jobDetails.face,
            job_id: job_id,
            id: post_id,
            localdate: jobDetails.localdate,
            maxsalary: jobDetails.maxsalary,
            minsalary: jobDetails.minsalary,
            phone: jobDetails.phone,
            name: jobDetails.name,
            user_uid:uid,
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            education:jobDetails.education,
            */
            status: jobDetails.status,
        });
    };
    Service1.prototype.updateToEmployee = function (employee_id, job_id, jobDetails) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(jobDetails);
        return this.employeeJob.child(uid).child(job_id).update({
            /**
              employer_id: jobDetails.employer_id,
              face:jobDetails.face,
              job_id: job_id,
              
              name: jobDetails.name,
              user_uid:uid,
              timeStamp: firebase.database.ServerValue.TIMESTAMP,
              reverseOrder: 0 - Date.now(),
              education: jobDetails.education,
              */
            /**
            address: jobDetails.address,
            category: jobDetails.category,
            description: jobDetails.description,
            employer_id: jobDetails.employer_id,
            face:jobDetails.face,
            job_id: job_id,
            id: post_id,
            localdate: jobDetails.localdate,
            maxsalary: jobDetails.maxsalary,
            minsalary: jobDetails.minsalary,
            phone: jobDetails.phone,
            name: jobDetails.name,
            user_uid:uid,
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            education:jobDetails.education,
            */
            status: jobDetails.status,
        });
    };
    Service1.prototype.getJobApplicantDetails = function (postId) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.employeeJob.child(uid).child(postId);
    };
    Service1.prototype.getJobApplicants = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.employeeJob.child(uid);
    };
    Service1.prototype.deleteJob = function (locations) {
        console.log(locations);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.jobCategory.child(locations.category).child("jobs").child(locations.job_id).remove();
        this.categorizedByJobPoster.child(uid).child(locations.job_id).remove();
        return this.allJobList.child(locations.job_id).remove();
    };
    Service1.prototype.editCat2 = function (name, address, downloadURL, phone, poster, minsalary, maxsalary, description, category, localdate, job_id, company, email, is_recruiter, company_size, experience, qualification, lat, lng) {
        var _this = this;
        if (lat === void 0) { lat = ""; }
        if (lng === void 0) { lng = ""; }
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(localdate);
        return this.jobCategory.child(category).child("jobs").child(job_id).update({
            name: name,
            address: address,
            face: downloadURL,
            phone: phone,
            employer_id: uid,
            minsalary: minsalary,
            maxsalary: maxsalary,
            description: description,
            category: category,
            localdate: localdate,
            user_id: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            company: company,
            poster: poster,
            email: email,
            is_recruiter: is_recruiter,
            company_size: company_size,
            experience: experience,
            qualification: qualification,
            lat: lat,
            lng: lng
        }).then(function (newCategory) {
            // this.jobCategory.child(category).child("jobs").child(newCategory.key).child('job_id').set(newCategory.key);
            _this.allJobList.child(job_id).update({
                name: name,
                address: address,
                face: downloadURL,
                phone: phone,
                employer_id: uid,
                minsalary: minsalary,
                maxsalary: maxsalary,
                description: description,
                category: category,
                localdate: localdate,
                job_id: job_id,
                user_id: uid,
                timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
                reverseOrder: 0 - Date.now(),
            });
            _this.categorizedByJobPoster.child(uid).child(job_id).update({
                name: name,
                address: address,
                face: downloadURL,
                phone: phone,
                employer_id: uid,
                minsalary: minsalary,
                maxsalary: maxsalary,
                description: description,
                category: category,
                localdate: localdate,
                job_id: job_id,
                user_id: uid,
                timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
                reverseOrder: 0 - Date.now(),
                company: company,
                poster: poster,
                email: email,
                is_recruiter: is_recruiter,
                company_size: company_size,
                experience: experience,
                qualification: qualification,
                lat: lat,
                lng: lng
            });
        });
    };
    Service1.prototype.getJobsByCategorized = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.categorizedByJobPoster.child(uid);
    };
    Service1.prototype.addCat2 = function (name, address, downloadURL, phone, poster, minsalary, maxsalary, description, category, localdate, company, email, is_recruiter, company_size, experience, qualification, lat, lng, shortTermJob, createdOn, requiredOn) {
        var _this = this;
        if (lat === void 0) { lat = ''; }
        if (lng === void 0) { lng = ''; }
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(localdate);
        return this.jobCategory.child(category).child("jobs").push({
            name: name,
            address: address,
            face: downloadURL,
            phone: phone,
            employer_id: uid,
            minsalary: minsalary,
            maxsalary: maxsalary,
            description: description,
            category: category,
            localdate: localdate,
            user_id: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
            company: company,
            poster: poster,
            email: email,
            is_recruiter: is_recruiter,
            company_size: company_size,
            experience: experience,
            qualification: qualification,
            lat: lat,
            lng: lng,
            shortTermJob: shortTermJob,
            createdOn: createdOn,
            requiredOn: requiredOn
        }).then(function (newCategory) {
            _this.jobCategory.child(category).child("jobs").child(newCategory.key).child('job_id').set(newCategory.key);
            _this.allJobList.child(newCategory.key).set({
                name: name,
                address: address,
                face: downloadURL,
                phone: phone,
                employer_id: uid,
                minsalary: minsalary,
                maxsalary: maxsalary,
                description: description,
                category: category,
                localdate: localdate,
                job_id: newCategory.key,
                user_id: uid,
                lat: lat,
                lng: lng,
                timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
                reverseOrder: 0 - Date.now(),
                shortTermJob: shortTermJob,
                createdOn: createdOn,
                requiredOn: requiredOn
            });
            _this.categorizedByJobPoster.child(uid).child(newCategory.key).set({
                name: name,
                address: address,
                face: downloadURL,
                phone: phone,
                employer_id: uid,
                minsalary: minsalary,
                maxsalary: maxsalary,
                description: description,
                category: category,
                localdate: localdate,
                job_id: newCategory.key,
                user_id: uid,
                company: company,
                email: email,
                poster: poster,
                is_recruiter: is_recruiter,
                company_size: company_size,
                experience: experience,
                qualification: qualification,
                timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
                lat: lat,
                lng: lng,
                reverseOrder: 0 - Date.now(),
                shortTermJob: shortTermJob,
                createdOn: createdOn,
                requiredOn: requiredOn
            });
        });
    };
    Service1.prototype.getAddressList = function () {
        return this.addressList;
    };
    Service1.prototype.getMaxSalary = function () {
        return this.maxSalary;
    };
    Service1.prototype.getMinSalary = function () {
        return this.minSalary;
    };
    Service1.prototype.getCategoryName = function () {
        return this.jobCategory;
    };
    Service1.prototype.addCat = function (name, address, downloadURL, phone, start, finish, poster, minsalary, maxsalary, description, category, localdate) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(localdate);
        return this.jobCategory.child(category).child("jobs").push({
            name: name,
            address: address,
            face: downloadURL,
            phone: phone,
            start: start,
            finish: finish,
            employer_id: poster,
            minsalary: minsalary,
            maxsalary: maxsalary,
            description: description,
            category: category,
            localdate: localdate,
            user_id: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now(),
        }).then(function (newCategory) {
            _this.jobCategory.child(category).child("jobs").child(newCategory.key).child('job_id').set(newCategory.key);
        });
    };
    /**************************************************************************/
    Service1.prototype.getClickedInfo = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItem = this.appliedJob.child(uid).child(id);
        return this.favoriteItem;
    };
    Service1.prototype.getUserJobList = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.workerJob.child(uid);
    };
    Service1.prototype.addToAppliedJob = function (employee_id, job_id, post_id, jobDetails) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(jobDetails);
        return this.appliedJob.child(uid).child(job_id).set({
            clicked: true,
            user_uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.addToWorker = function (employee_id, job_id, post_id, jobDetails) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(jobDetails);
        return this.workerJob.child(uid).child(post_id).set({
            employer_id: jobDetails.employer_id,
            face: jobDetails.face,
            job_id: job_id,
            id: post_id,
            name: jobDetails.name,
            user_uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.addToEmployee = function (employee_id, job_id, user_id, post_id, jobDetails) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(jobDetails);
        return this.employeeJob.child(employee_id).child(job_id).child(post_id).set({
            employer_id: jobDetails.employer_id,
            face: jobDetails.face,
            job_id: job_id,
            id: post_id,
            name: jobDetails.name,
            user_uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.getJobDetail = function (key) {
        return this.applyJobs.child(key);
    };
    Service1.prototype.addIdToJob = function (id) {
        return this.applyJobs.child(id).child('id').set(id);
    };
    Service1.prototype.applyJob = function (tech) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(tech);
        return this.applyJobs.push({
            employer_id: tech.employer_id,
            face: tech.face,
            job_id: tech.id,
            name: tech.name,
            user_uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.updateEducation = function (id, address, customer) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("education").child(id).update({
            jobcategory: address.jobcategory,
            education: address.education,
            started: address.started,
            finished: address.finished,
            worked: address.worked,
            displayName: customer.displayName,
            email: customer.email,
            minimum: address.minimum,
            maximum: address.maximum,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.deleteEducation = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("education").child(id).remove();
    };
    Service1.prototype.getUserEducationList = function (uid) {
        this.userEducationList = this.restaurantUserInfo.child(uid).child("education");
        return this.userEducationList;
    };
    Service1.prototype.saveEducation = function (jobcategory, education, started, finished, worked, displayName, email, minimum, maximum, uid) {
        return this.restaurantUserInfo.child(uid).child("education").push({
            jobcategory: jobcategory,
            education: education,
            started: started,
            finished: finished,
            worked: worked,
            displayName: displayName,
            email: email,
            minimum: minimum,
            maximum: maximum,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.getWorkedYear = function () {
        console.log(this.workedYear);
        return this.workedYear;
    };
    Service1.prototype.getFinishedYear = function () {
        console.log(this.finishedYear);
        return this.finishedYear;
    };
    Service1.prototype.getStartedYear = function () {
        console.log(this.startedYear);
        return this.startedYear;
    };
    Service1.prototype.getEducationName = function () {
        console.log(this.educationName);
        return this.educationName;
    };
    Service1.prototype.getJobCategoryName = function () {
        console.log(this.jobCategoryName);
        return this.jobCategoryName;
    };
    Service1.prototype.getJobDetails = function (id, categoryId) {
        console.log(id);
        console.log(categoryId);
        this.jobDetails = this.jobCategory.child(categoryId).child("jobs").child(id);
        return this.jobDetails;
    };
    Service1.prototype.getJobsByCategory = function (id) {
        this.jobsByCategory = this.jobCategory.child(id).child("jobs");
        return this.jobsByCategory;
    };
    Service1.prototype.getJobCategoryList = function () {
        console.log(this.jobCategory);
        return this.jobCategory;
    };
    Service1.prototype.getCityRestaurantList = function (id) {
        this.cityRestaurants = this.restaurants.orderByChild("city_id").equalTo(id);
        return this.cityRestaurants;
    };
    Service1.prototype.getRestaurantTableOrderList = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.tableOrders.child(uid);
    };
    Service1.prototype.getNotifications = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.notisLists = this.Notifications.orderByChild("toId").equalTo(uid);
        return this.notisLists;
    };
    Service1.prototype.getChatUsers = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.chatUserLists = this.Chat.orderByChild("toId").equalTo(uid);
        return this.chatUserLists;
    };
    Service1.prototype.getChat = function (roomId) {
        this.chatList = this.Chat.orderByChild("roomId").equalTo(roomId);
        return this.chatList;
    };
    Service1.prototype.getLastMessage = function (roomId) {
        return this.Chat.orderByChild("roomId").equalTo(roomId).limitToLast(1);
    };
    // Customer and Admin App 
    //
    Service1.prototype.addNewTableOrders = function (data, restaurant, date) {
        console.log(data);
        console.log(restaurant);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.tableOrders.child(uid).push({
            restaurant_id: restaurant.data.id,
            restaurant_address: restaurant.data.address,
            restaurant_description: restaurant.data.description,
            restaurant_backgroundImage: restaurant.data.backgroundImage,
            restaurant_firebase_url: restaurant.data.firebase_url,
            restaurant_icon: restaurant.data.icon,
            restaurant_iconText: restaurant.data.iconText,
            restaurant_images: restaurant.data.images,
            restaurant_info: restaurant.data.info,
            restaurant_lat: restaurant.data.lat,
            restaurant_long: restaurant.data.long,
            restaurant_mark: restaurant.data.mark,
            restaurant_market: restaurant.data.market,
            restaurant_option: restaurant.data.option,
            restaurant_outlet: restaurant.data.outlet,
            restaurant_phonenumber: restaurant.data.phonenumber,
            restaurant_show: restaurant.data.show,
            restaurant_subtitle: restaurant.data.subtitle,
            restaurant_title: restaurant.data.title,
            date: date,
            person: data.person,
            time: data.time,
            userId: uid,
            status: data.status,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }); //.then( tableOrder => {
        /// this.tableOrders.child(uid).child(tableOrder.key).child('id').set(tableOrder.key);
        // });
    };
    Service1.prototype.addNewTableAdminOrders = function (data, restaurant, date, sameKey) {
        console.log(data);
        console.log(restaurant);
        console.log(sameKey);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.tableAdminOrders.child(sameKey).set({
            restaurant_id: restaurant.data.id,
            restaurant_address: restaurant.data.address,
            restaurant_description: restaurant.data.description,
            restaurant_backgroundImage: restaurant.data.backgroundImage,
            restaurant_firebase_url: restaurant.data.firebase_url,
            restaurant_icon: restaurant.data.icon,
            restaurant_iconText: restaurant.data.iconText,
            restaurant_images: restaurant.data.images,
            restaurant_info: restaurant.data.info,
            restaurant_lat: restaurant.data.lat,
            restaurant_long: restaurant.data.long,
            restaurant_mark: restaurant.data.mark,
            restaurant_market: restaurant.data.market,
            restaurant_option: restaurant.data.option,
            restaurant_outlet: restaurant.data.outlet,
            restaurant_phonenumber: restaurant.data.phonenumber,
            restaurant_show: restaurant.data.show,
            restaurant_subtitle: restaurant.data.subtitle,
            restaurant_title: restaurant.data.title,
            date: date,
            person: data.person,
            time: data.time,
            userId: uid,
            status: data.status,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }); //.then( tableOrder => {
        //this.tableAdminOrders.child(uid).child(tableOrder.key).child('id').set(tableOrder.key);
        //});
    };
    Service1.prototype.createExtraList = function (key, snap, id) {
        console.log(snap);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.extra.child(uid).child(id).child(key).update({
            id: key,
            name: snap.name,
            selected: snap.selected,
            value: snap.value,
            product_id: id,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.getCreateExtraList = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extra.child(uid).child(id);
    };
    Service1.prototype.addProductToCart = function (cart) {
        console.log(cart);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(cart.product_id).set({
            id: cart.product_id,
            name: cart.name,
            product_id: cart.product_id,
            image: cart.image,
            price: cart.price,
            quantity: cart.quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.addExtraProductToCart = function (extra) {
        console.log(extra);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extra.child(uid).child(extra.product_id).child(extra.id).set({
            completed: extra.selected,
            id: extra.id,
            name: extra.name,
            product_id: extra.product_id,
            quantity: 1,
            selected: extra.selected,
            value: extra.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.removeExtraProductToCart = function (extra) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extra.child(uid).child(extra.product_id).child(extra.id).remove();
    };
    Service1.prototype.getItemExtraProductFromFirebase = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extraOptions.child(uid).child(id);
    };
    Service1.prototype.getPaypal = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.paypalConfiguration;
    };
    Service1.prototype.removeExtraProductCart = function (cart, extra) {
        console.log(cart);
        console.log(extra);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extraOptions.child(uid).child(cart).remove();
    };
    Service1.prototype.updateExtraProductToCart = function (cart, extra) {
        console.log(cart);
        console.log(extra);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.extraOptions.child(uid).child(cart).child(extra.id).set({
            completed: extra.completed,
            id: extra.id,
            name: extra.name,
            product_id: extra.product_id,
            quantity: 1,
            selected: extra.selected,
            value: extra.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.addQuantityProduct = function (qty) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(qty.product_id).update({
            quantity: qty.quantity,
        });
    };
    Service1.prototype.pushToFirebaseProduct = function (cart, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).set({
            id: cart.product_id,
            name: cart.name,
            product_id: cart.product_id,
            image: cart.image,
            price: cart.price,
            quantity: cart.quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.getFirebaseCart = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid);
    };
    Service1.prototype.addToFirebaseCart = function (id, quantity) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).update({
            quantity: quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.deleteFirebaseCart = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.myCart.child(uid).remove();
    };
    Service1.prototype.deleteFirebaseProductCart = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.myCart.child(uid).child(id).remove();
    };
    Service1.prototype.deleteFromFirebaseCart = function (id, quantity) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.myCart.child(uid).child(id).update({
            quantity: quantity,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.setToFirebaseCart = function (cart, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).child("extraOptions").child(cart.id).update({
            id: cart.id,
            name: cart.name,
            product_id: cart.product_id,
            quantity: cart.quantity,
            selected: cart.selected,
            value: cart.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.pushToFirebaseCart = function (cart, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.myCart.child(uid).child(id).child("extraOptions").child(cart.id).update({
            id: cart.id,
            name: cart.name,
            product_id: cart.product_id,
            quantity: cart.quantity,
            selected: cart.selected,
            value: cart.value,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.updateAddress = function (id, address, customer) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("addresses").child(id).update({
            city: address.city,
            district: address.district,
            street: address.street,
            apartmentOffice: address.apartmentOffice,
            displayName: customer.displayName,
            email: customer.email,
            phone: address.phone,
            address: address.address,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.deleteUserAddress = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.restaurantUserInfo.child(uid).child("addresses").child(id).remove();
    };
    Service1.prototype.getCityName = function () {
        console.log(this.cityName);
        return this.cityName;
    };
    Service1.prototype.getCityDistrictName = function () {
        console.log(this.cityDistrictName);
        return this.cityDistrictName;
    };
    Service1.prototype.getStreetName = function () {
        console.log(this.streetName);
        return this.streetName;
    };
    Service1.prototype.getApartmentOfficeName = function () {
        return this.apartmentOfficeName;
    };
    Service1.prototype.saveCurrentAddress = function (displayName, phone, address, uid) {
        return this.restaurantUserInfo.child(uid).child("addresses").push({
            displayName: displayName,
            phone: phone,
            address: address,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.saveNewAddress = function (city, district, street, apartmentOffice, displayName, email, phone, address, uid) {
        return this.restaurantUserInfo.child(uid).child("addresses").push({
            city: city,
            district: district,
            street: street,
            apartmentOffice: apartmentOffice,
            displayName: displayName,
            email: email,
            phone: phone,
            address: address,
            uid: uid,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.getCurrentUserAddresses = function (uid) {
        this.userAddressList = this.restaurantUserInfo.child(uid).child("addresses");
        return this.userAddressList;
    };
    Service1.prototype.removeFavItem = function (item) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(item.id);
        this.restaurantUserInfo.child(uid).child("favorites").child(item.id).remove();
    };
    Service1.prototype.getUserFavouriteList = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItemList = this.restaurantUserInfo.child(uid).child("favorites");
        return this.favoriteItemList;
    };
    Service1.prototype.getFavoriteItem = function (id) {
        console.log(id);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItem = this.restaurantUserInfo.child(uid).child("favorites").child(id);
        return this.favoriteItem;
    };
    Service1.prototype.removeFavourite = function (id) {
        console.log(id);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.restaurantUserInfo.child(uid).child("favorites").child(id).remove();
    };
    Service1.prototype.getItems = function (id) {
        console.log(this.items);
        this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
        return this.restaurantItems;
    };
    Service1.prototype.getRestaurantsList = function () {
        console.log(this.restaurants);
        return this.restaurants;
    };
    Service1.prototype.getCord = function () {
        console.log(this.restaurants);
        return this.cord;
    };
    Service1.prototype.getRestaurantCategoryLists = function (id) {
        console.log(id);
        this.category = this.restaurantCategory.orderByChild("res_name").equalTo(id);
        return this.category;
    };
    Service1.prototype.getItemLists = function (id) {
        console.log(id);
        this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
        return this.restaurantItems;
    };
    Service1.prototype.getItemDetail = function (id) {
        console.log(id);
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items').child(id));
        console.log(this.items);
        return this.items.child(id);
    };
    Service1.prototype.getExtraItems = function (id) {
        return this.extra;
    };
    Service1.prototype.getItemExtraOptionsDetail = function (id) {
        console.log(id);
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items').child(id));
        console.log(this.items);
        return this.items.child(id).child("extraOptions");
    };
    Service1.prototype.delOrder = function (id) {
        return this.orderList.child(id).remove();
    };
    Service1.prototype.getOrderDetail = function (id) {
        return this.orderList.child(id);
    };
    Service1.prototype.getOrderDetailItems = function (id) {
        return this.orderList.child(id).child("items");
    };
    Service1.prototype.getRestaurantUserProfile = function (id) {
        return this.restaurantUserInfo.child(id);
    };
    Service1.prototype.getUserProfile = function (id) {
        return this.restaurantUserInfo.child(id);
    };
    Service1.prototype.addRoom = function (uid, data) {
        return this.restaurants.child(data.id).child("chat").child(uid).child("-0000").set({
            //email: "We will touch you soon. Thanks for your message.",
            type: 'join',
            user: 'user',
            message: 'Welcome to restaurant.',
            sendDate: ''
        });
    };
    Service1.prototype.addNotification = function (data) {
        return this.Notifications.push(data);
    };
    Service1.prototype.addChat = function (data) {
        return this.Chat.push(data);
    };
    Service1.prototype.addOrders = function (order, total, uid, payments, userProfiles, currentUserAddress) {
        console.log(userProfiles);
        return this.orderList.push({
            email: uid,
            items: order,
            total: total,
            payments: payments,
            customerDetails: userProfiles,
            addresses: currentUserAddress,
            status: "Queued",
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }); //.then( newOrder => {
        //this.orderList.child(newOrder.key).child('id').set(newOrder.key);
        //});
    };
    Service1.prototype.addIdToOrder = function (newOrderKey) {
        return this.orderList.child(newOrderKey).child('id').set(newOrderKey);
    };
    Service1.prototype.addIdToRestaurantOrder = function (orderKey, restaurantKey) {
        return this.restaurants.child(restaurantKey).child("orders").child(orderKey).update({
            id: orderKey
        });
    };
    Service1.prototype.addNewOrdersToEachRestaurant = function (orderKey, restaurantKey, restaurantName, order, imagess, name, price, productId, quantity, restaurantId, restaurantNames, newOrderDetails) {
        console.log(orderKey);
        console.log(restaurantKey);
        console.log(restaurantName);
        console.log(order);
        return this.restaurants.child(restaurantKey).child("orders").child(orderKey).set({
            /***
        name: name,
       price: price,
       product_id: productId,
       quantity: quantity,
       restaurantId: restaurantId,
       restaurantName: restaurantNames,
       status: "Queued",
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
        reverseOrder: 0 - Date.now()
        */
            addresses: newOrderDetails.addresses,
            customerDetails: newOrderDetails.customerDetails,
            email: newOrderDetails.email,
            items: newOrderDetails.items,
            payments: newOrderDetails.payments,
            status: newOrderDetails.status,
            timeStamp: newOrderDetails.timeStamp,
            total: newOrderDetails.total
        });
    };
    Service1.prototype.addNewOrdersToEachRestaurantExtra = function (orderKey, restaurantKey, restaurantName, /**extras,*/ order, imagess, name, price, productId, quantity, restaurantId, restaurantNames, newOrderDetails) {
        console.log(orderKey);
        console.log(restaurantKey);
        console.log(restaurantName);
        console.log(order);
        return this.categorizedOrders.child(order.owner_id).child(orderKey).set({
            addresses: newOrderDetails.addresses,
            customerDetails: newOrderDetails.customerDetails,
            email: newOrderDetails.email,
            items: newOrderDetails.items,
            payments: newOrderDetails.payments,
            status: newOrderDetails.status,
            timeStamp: newOrderDetails.timeStamp,
            total: newOrderDetails.total,
            restaurant_owner_id: order.owner_id
        });
        /**
                return this.restaurants.child(restaurantKey).child("orders").child(orderKey).set({
              // image: imagess,
              // name: name,
              // price: price,
              // product_id: productId,
              // quantity: quantity,
              // restaurantId: restaurantId,
              // restaurantName: restaurantNames,
              // extra: extras,
               
               addresses: newOrderDetails.addresses,
               customerDetails: newOrderDetails.customerDetails,
               email: newOrderDetails.email,
               items:newOrderDetails.items,
               payments: newOrderDetails.payments,
               status: newOrderDetails.status,
               timeStamp: newOrderDetails.timeStamp,
               total: newOrderDetails.total,
               restaurant_owner_id: order.owner_id
              });
              **/
        //return order;
        //.then( newOrder => {
        //this.orderList.child(newOrder.key).child('id').set(newOrder.key);
        //});
    };
    Service1.prototype.categorizedRestaurantOrder = function (orderKey, restaurantKey, owner_id) {
        return this.categorizedOrders.child(owner_id).child(orderKey).update({
            id: orderKey
        });
    };
    Service1.prototype.addToFavorite = function (data, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log("service");
        console.log(uid);
        console.log(data);
        this.restaurantUserInfo.child(uid).child("favorites").child(id).set({
            product_id: id,
            image: data.image_firebase_url,
            name: data.name,
            price: data.price,
            categories: data.categories,
            available: data.available,
            category: data.category,
            description: data.description,
            stock: data.stock,
            restaurantId: data.restaurantId,
            restaurantName: data.restaurantName,
            market: true
        });
    };
    Service1.prototype.chargeStripe = function (token, currency, amount, secret_kay) {
        var _this = this;
        this.getSecKey = secret_kay;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        //var amounts = 1*Math.round(amount);
        //var totalAmounts = 1 * amounts;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + secret_kay);
        params.append("currency", currency);
        params.append("amount", amount);
        params.append("description", "description");
        params.append("source", token);
        alert("params-" + JSON.stringify(params));
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/charges', params, { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                alert("DATA" + data);
                resolve(data);
            });
        });
    };
    Service1.prototype.getMyOrderList = function (id) {
        console.log(id);
        this.orderLists = this.orderList.orderByChild("email").equalTo(id);
        return this.orderLists;
    };
    /***
      addSettting(form){
        return this.setting.set({
          cod: form.cod,
          stripe: form.stripe,
          paypal: form.paypal,
          currency: form.currency,
          client_id: form.client_id,
          environment_sandbox: form.environment_sandbox,
          publish_key: form.publish_key,
          secret_kay: form.secret_kay
        });
      }
      */
    Service1.prototype.saveRestaurantCustomers = function (displayName, phone, address, id) {
        return this.restaurantUserInfo.child(id).update({
            displayName: displayName,
            phone: phone,
            address: address,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service1.prototype.getOrderList = function () {
        return this.orderList.orderByChild("reverseOrder");
    };
    Service1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */]])
    ], Service1);
    return Service1;
}());

//# sourceMappingURL=service1.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 300;

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-description/add-description.module": [
		945,
		36
	],
	"../pages/add-job/add-job.module": [
		946,
		35
	],
	"../pages/applied-info/applied-info.module": [
		947,
		34
	],
	"../pages/change-status/change-status.module": [
		948,
		33
	],
	"../pages/chat/chat.module": [
		949,
		32
	],
	"../pages/chat1/chat1.module": [
		950,
		31
	],
	"../pages/choose-edu/choose-edu.module": [
		951,
		30
	],
	"../pages/edit-education/edit-education.module": [
		955,
		29
	],
	"../pages/edit-job/edit-job.module": [
		952,
		28
	],
	"../pages/education-list/education-list.module": [
		953,
		27
	],
	"../pages/education/education.module": [
		954,
		26
	],
	"../pages/filter-modal/filter-modal.module": [
		956,
		25
	],
	"../pages/forgotpassword/forgotpassword.module": [
		957,
		24
	],
	"../pages/job-details/job-details.module": [
		958,
		23
	],
	"../pages/job-details1/job-details1.module": [
		959,
		22
	],
	"../pages/job-list/job-list.module": [
		961,
		21
	],
	"../pages/job-offer-details/job-offer-details.module": [
		960,
		20
	],
	"../pages/messages/messages.module": [
		962,
		19
	],
	"../pages/messages1/messages1.module": [
		963,
		18
	],
	"../pages/my-jobs/my-jobs.module": [
		964,
		17
	],
	"../pages/myprofile/myprofile.module": [
		967,
		16
	],
	"../pages/myprofile1/myprofile1.module": [
		965,
		15
	],
	"../pages/notifications/notifications.module": [
		966,
		14
	],
	"../pages/notifications1/notifications1.module": [
		968,
		13
	],
	"../pages/offer-list/offer-list.module": [
		969,
		12
	],
	"../pages/password/password.module": [
		970,
		11
	],
	"../pages/posted-jobs/posted-jobs.module": [
		972,
		10
	],
	"../pages/privacy/privacy.module": [
		971,
		0
	],
	"../pages/profile/profile.module": [
		973,
		9
	],
	"../pages/register/register.module": [
		974,
		8
	],
	"../pages/register1/register1.module": [
		975,
		7
	],
	"../pages/savedjob/savedjob.module": [
		976,
		6
	],
	"../pages/support/support.module": [
		977,
		5
	],
	"../pages/tabs/tabs.module": [
		978,
		4
	],
	"../pages/tabs1/tabs1.module": [
		979,
		3
	],
	"../pages/user-type/user-type.module": [
		980,
		2
	],
	"../pages/view-profile/view-profile.module": [
		981,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 344;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__education_education__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__education_list_education_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';







/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(nav, navParams, functions, auth, loadingCtrl, fb, alertCtrl, values, service, translateService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.translateService = translateService;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.params = {};
        this.currentUser = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser;
        if (this.values.isLoggedIn) {
            this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
            });
        }
        console.log(this.userProfiles);
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    ProfilePage.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    ProfilePage.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN
    ProfilePage.prototype.address = function (item) {
        console.log(item);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__education_education__["a" /* EducationPage */], item);
    };
    ProfilePage.prototype.myOrder = function () {
        // this.nav.push(MyorderPage);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__education_list_education_list__["a" /* EducationListPage */]);
    };
    ProfilePage.prototype.changePassword = function (form) {
        if (form.password != "" && form.password != null) {
            //Update Password in UserAuthentication Table
            __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser.updatePassword(form.password).then(function (ok) { }, function (error) { });
            alert("Password changed");
        }
        else {
            alert("Please enter new password");
        }
    };
    ProfilePage.prototype.goToAddresses = function () {
        //this.nav.push(EducationListPage);
    };
    ProfilePage.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/profile/profile.html"*/'<!--\n  Generated template for the MyProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n<ion-navbar color="topGreen">\n\n<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{"MyProfile" | translate}}</ion-title>\n\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="values.isLoggedIn && userProfiles" >\n\n<div style ="padding-top:30px;">\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n         <div *ngIf="userProfiles.photoURL" class="profile-image">\n            <img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n         </div>\n         <div *ngIf="!userProfiles.photoURL" class="profile-image">\n            <img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n         </div>\n      </ion-list>\n      </ion-avatar>\n      <h2>{{userProfiles.displayName}}  {{userProfiles.lastName}}</h2>\n      \n    </ion-item>\n\n    \n\n    <ion-card-content>\n	\n	  <h2 style = "padding-top:20px;"><ion-icon item-start ios="ios-mail" md="md-mail"></ion-icon>Email: {{userProfiles.email}}</h2>\n      <h2 style = "padding-top:20px;"><ion-icon name = "compass"></ion-icon>{{"Address" | translate}}: {{userProfiles.address}}</h2>\n	  <h2 style = "padding-top:20px;"><ion-icon name = "phone-portrait"></ion-icon>{{"PhoneNumber" | translate}}: {{userProfiles.phone}}</h2>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left  (click)="address(userProfiles)" clear big>\n        <ion-icon name="build"></ion-icon>\n        <div>{{"Edit" | translate}}</div>\n      </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left (click)="myOrder()" clear big>\n        <ion-icon name="folder"></ion-icon>\n        <div>{{"My Edu" | translate}}</div>\n      </button>\n      </ion-col>\n\n      <ion-col center text-center>\n        <ion-note>\n         {{userProfiles.timestamp}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  \n        <ion-card style = "background-color:#D2F5E5" *ngIf="!userProfiles.facebook">\n         <form #f="ngForm" style = "background-color:#D2F5E5">\n            <ion-list style = "background-color:#D2F5E5">\n				<ion-item style = "background-color:#D2F5E5">\n                  <ion-label floating style ="background-color:white;">{{"Password" | translate}}</ion-label>\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item>\n            </ion-list>\n      <button ion-button icon-left (click)="changePassword(form)" clear big>\n        \n        <div>{{"ChangePassword" | translate}}</div>\n      </button>\n\n            \n         </form>\n      </ion-card>\n  \n	  </div>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(559);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_time_ago_pipe__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home1_home1__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs1_tabs1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_job_list_job_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_job_details_job_details__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_job_details1_job_details1__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register1_register1__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forgotpassword_forgotpassword__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat1_chat1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_notifications1_notifications1__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_savedjob_savedjob__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_education_education__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_education_list_education_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_job_offer_details_job_offer_details__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_myprofile1_myprofile1__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_google_maps__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_password_password__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_education_edit_education__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_applied_info_applied_info__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_my_jobs_my_jobs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_choose_edu_choose_edu__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_add_description_add_description__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_common_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_posted_jobs_posted_jobs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ngx_translate_http_loader__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ionic3_datepicker__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_messages1_messages1__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pipes_youtube_youtube__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_spinner_dialog_ngx__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_user_type_user_type__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_offer_list_offer_list__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_change_status_change_status__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_edit_job_edit_job__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_add_job_add_job__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_view_profile_view_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ngx_geoautocomplete__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_events_events_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_auth1__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_config__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_service1__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_wp_service__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_location_tracker_location_tracker__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_in_app_browser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_google_plus__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_social_sharing__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_paypal__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_stripe__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__ionic_native_date_picker__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ionic_native_geolocation__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_background_geolocation__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74_ng2_adsense__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_admob_free__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_admob_pro_ngx__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ionic_native_printer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_filter_modal_filter_modal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_support_support__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ionic_native_email_composer__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";


























/*----------------PROVIDERS & NATIVES---------------------*/















//import { TwitterConnect } from '@ionic-native/twitter-connect';








function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_41__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_79__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_filter_modal_filter_modal__["a" /* FilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_job_offer_details_job_offer_details__["a" /* JobOfferDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_view_profile_view_profile__["a" /* ViewProfilePage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_add_job_add_job__["a" /* AddJobPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_edit_job_edit_job__["a" /* EditJobPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_change_status_change_status__["a" /* ChangeStatusPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_offer_list_offer_list__["a" /* OfferListPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_messages1_messages1__["a" /* Messages1Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_posted_jobs_posted_jobs__["a" /* PostedJobsPage */],
                __WEBPACK_IMPORTED_MODULE_3_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs1_tabs1__["a" /* Tabs1Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_savedjob_savedjob__["a" /* SavedjobPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_notifications1_notifications1__["a" /* Notifications1Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat1_chat1__["a" /* Chat1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home1_home1__["a" /* Home1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_job_list_job_list__["a" /* JobListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_job_details_job_details__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_job_details1_job_details1__["a" /* JobDetails1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register1_register1__["a" /* Register1Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_education_education__["a" /* EducationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_education_list_education_list__["a" /* EducationListPage */],
                __WEBPACK_IMPORTED_MODULE_44__pipes_youtube_youtube__["a" /* YoutubePipe */],
                // ParallaxDirective,
                __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_myprofile1_myprofile1__["a" /* Myprofile1Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_education_edit_education__["a" /* EditEducationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_applied_info_applied_info__["a" /* AppliedInfoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_my_jobs_my_jobs__["a" /* MyJobsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_choose_edu_choose_edu__["a" /* ChooseEduPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_add_description_add_description__["a" /* AddDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_user_type_user_type__["a" /* UserTypePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_52_ngx_geoautocomplete__["a" /* NgxGeoautocompleteModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-description/add-description.module#AddDescriptionPageModule', name: 'AddDescriptionPage', segment: 'add-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-job/add-job.module#AddJobPageModule', name: 'AddJobPage', segment: 'add-job', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/applied-info/applied-info.module#AppliedInfoPageModule', name: 'AppliedInfoPage', segment: 'applied-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-status/change-status.module#ChangeStatusPageModule', name: 'ChangeStatusPage', segment: 'change-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat1/chat1.module#Chat1PageModule', name: 'Chat1Page', segment: 'chat1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-edu/choose-edu.module#ChooseEduPageModule', name: 'ChooseEduPage', segment: 'choose-edu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-job/edit-job.module#EditJobPageModule', name: 'EditJobPage', segment: 'edit-job', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/education-list/education-list.module#EducationListPageModule', name: 'EducationListPage', segment: 'education-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/education/education.module#EducationPageModule', name: 'EducationPage', segment: 'education', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-education/edit-education.module#EditEducationPageModule', name: 'EditEducationPage', segment: 'edit-education', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-modal/filter-modal.module#FilterModalPageModule', name: 'FilterModalPage', segment: 'filter-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-details/job-details.module#JobDetailsPageModule', name: 'JobDetailsPage', segment: 'job-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-details1/job-details1.module#JobDetails1PageModule', name: 'JobDetails1Page', segment: 'job-details1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-details/job-offer-details.module#JobOfferDetailsPageModule', name: 'JobOfferDetailsPage', segment: 'job-offer-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-list/job-list.module#JobListPageModule', name: 'JobListPage', segment: 'job-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages1/messages1.module#Messages1PageModule', name: 'Messages1Page', segment: 'messages1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-jobs/my-jobs.module#MyJobsPageModule', name: 'MyJobsPage', segment: 'my-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile1/myprofile1.module#Myprofile1PageModule', name: 'Myprofile1Page', segment: 'myprofile1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications1/notifications1.module#Notifications1PageModule', name: 'Notifications1Page', segment: 'notifications1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-list/offer-list.module#OfferListPageModule', name: 'OfferListPage', segment: 'offer-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/posted-jobs/posted-jobs.module#PostedJobsPageModule', name: 'PostedJobsPage', segment: 'posted-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register1/register1.module#Register1PageModule', name: 'Register1Page', segment: 'register1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/savedjob/savedjob.module#SavedjobPageModule', name: 'SavedjobPage', segment: 'savedjob', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs1/tabs1.module#Tabs1PageModule', name: 'Tabs1Page', segment: 'tabs1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-type/user-type.module#UserTypePageModule', name: 'UserTypePage', segment: 'user-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-profile/view-profile.module#ViewProfilePageModule', name: 'ViewProfilePage', segment: 'view-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_42_ionic3_datepicker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_74_ng2_adsense__["a" /* AdsenseModule */].forRoot({
                    adClient: 'pub-8514227015105788',
                    adSlot: 7259870550,
                }),
                __WEBPACK_IMPORTED_MODULE_37__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_37__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_39__angular_http__["b" /* Http */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_79__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_filter_modal_filter_modal__["a" /* FilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_job_offer_details_job_offer_details__["a" /* JobOfferDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_view_profile_view_profile__["a" /* ViewProfilePage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_add_job_add_job__["a" /* AddJobPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_edit_job_edit_job__["a" /* EditJobPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_change_status_change_status__["a" /* ChangeStatusPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_offer_list_offer_list__["a" /* OfferListPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_messages1_messages1__["a" /* Messages1Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_posted_jobs_posted_jobs__["a" /* PostedJobsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_user_type_user_type__["a" /* UserTypePage */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs1_tabs1__["a" /* Tabs1Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_savedjob_savedjob__["a" /* SavedjobPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_notifications1_notifications1__["a" /* Notifications1Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat1_chat1__["a" /* Chat1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home1_home1__["a" /* Home1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_job_list_job_list__["a" /* JobListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_job_details_job_details__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_job_details1_job_details1__["a" /* JobDetails1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register1_register1__["a" /* Register1Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_education_education__["a" /* EducationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_education_list_education_list__["a" /* EducationListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_myprofile1_myprofile1__["a" /* Myprofile1Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_education_edit_education__["a" /* EditEducationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_applied_info_applied_info__["a" /* AppliedInfoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_my_jobs_my_jobs__["a" /* MyJobsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_choose_edu_choose_edu__["a" /* ChooseEduPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_add_description_add_description__["a" /* AddDescriptionPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_80__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_77__ionic_native_printer__["a" /* Printer */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_admob_pro_ngx__["a" /* AdMobPro */],
                __WEBPACK_IMPORTED_MODULE_75__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_spinner_dialog_ngx__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_54__providers_events_events_service__["a" /* EventsService */],
                __WEBPACK_IMPORTED_MODULE_53__providers_auth__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_55__providers_auth1__["a" /* Auth1 */],
                __WEBPACK_IMPORTED_MODULE_56__providers_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_57__providers_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_58__providers_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_59__providers_service1__["a" /* Service1 */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_61__providers_wp_service__["a" /* WpService */],
                __WEBPACK_IMPORTED_MODULE_62__providers_functions_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_73__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_67__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_71__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_63__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_70__ionic_native_date_picker__["a" /* DatePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.ss
*/
var Auth = /** @class */ (function () {
    function Auth() {
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth();
        //this.addCategory = firebase.database().ref('userProfile/');
        this.customerList = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/Customer-List');
        this.restaurantUserInfo = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users');
    }
    Auth.prototype.login = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    Auth.prototype.register = function (email, password, firstname, lastname, europeResult, birthday, phone, profession, miles) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.restaurantUserInfo.child(newUser.uid).set({
                email: email,
                displayName: firstname,
                lastName: lastname,
                europeResult: europeResult,
                birthday: birthday,
                address: "",
                phone: phone,
                facebook: false,
                profession: profession,
                miles: miles,
                status: 2
            });
        });
    };
    Auth.prototype.logoutUser = function () {
        return this.fireAuth.signOut();
    };
    Auth.prototype.forgotPass = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    Auth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Auth);
    return Auth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_messages_messages__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_support_support__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_add_job_add_job__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home1_home1__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_type_user_type__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_job_list_job_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_view_profile_view_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_jobs_my_jobs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_notifications1_notifications1__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs1_tabs1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_admob_free__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//poster code




















var MyApp = /** @class */ (function () {
    function MyApp(funtions, admobFree, fb, events, platform, statusBar, splashScreen, alertCtrl, values, translateService) {
        // this.showInterstitialAds();
        // this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
        var _this = this;
        this.funtions = funtions;
        this.admobFree = admobFree;
        this.fb = fb;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.translateService = translateService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_15__pages_user_type_user_type__["a" /* UserTypePage */];
        // 	this.runAgain();
        //  });
        // const bannerConfig: AdMobFreeBannerConfig = {
        //   autoShow: true,
        //   id: 'ca-app-pub-8514227015105788/1366272582'
        //  };
        //  this.admobFree.banner.config(bannerConfig);
        //  this.admobFree.banner.prepare()
        //    .then(() => {
        //    })
        //    .catch(e => console.log(e));
        var userType = localStorage.getItem('userType');
        this.userType = userType;
        this.events.getObservable().subscribe(function (data) {
            var userType = localStorage.getItem('userType');
            _this.userType = userType;
            _this.menuOptions();
        });
        this.translateService.setDefaultLang('english');
        __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.initializeApp({
            apiKey: "AIzaSyDnml9NiZ5mCu9scxfCE_wy6zehylkn6qs",
            authDomain: "dental-bridge-7249f.firebaseapp.com",
            projectId: "dental-bridge-7249f",
            storageBucket: "dental-bridge-7249f.appspot.com",
            messagingSenderId: "560807104459",
            appId: "1:560807104459:web:17ff2f43da81546b44304e",
            measurementId: "G-8MP13M6FBT",
            databaseURL: "https://dental-bridge-7249f-default-rtdb.firebaseio.com/",
        });
        this.initializeApp();
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth();
        __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref('/users').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.userProfiles = snapshot.val();
                    }
                });
            }
        });
        this.menuOptions();
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.isLoggedIn = true;
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref('/Customer-Role').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.values.userRole = snapshot.val().role;
                    }
                });
            }
        });
    }
    MyApp.prototype.showInterstitialAds = function () {
        var interstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-3940256099942544/8691691433"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(function () {
        }).catch(function (e) {
        });
    };
    MyApp.prototype.runAgain = function () {
        var _this = this;
        setTimeout(function () {
            _this.showInterstitialAds();
        }, 180000);
    };
    // initializeApp() {
    //   this.platform.ready().then(() => {
    //     this.statusBar.styleDefault();
    //     this.splashScreen.hide();
    //   this.pushsetup();
    //   });
    // }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('ready');
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#205cb0');
            _this.splashScreen.hide();
            var userType = localStorage.getItem('userType');
            _this.userType = userType;
        });
    };
    // openPage(page) {
    //   if(page == JobListPage){
    //     this.nav.setRoot(TabsPage, {tabIndex: 0});
    //   }else{
    //     this.nav.setRoot(page);
    //   }
    // }
    MyApp.prototype.logOut = function () {
        if (this.userType == 'manager') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_home1_home1__["a" /* Home1Page */]);
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */]);
        }
        localStorage.clear();
        this.fb.logout();
        this.fireAuth.signOut();
        console.log('logged out');
    };
    MyApp.prototype.pushsetup = function () {
    };
    /// manager
    MyApp.prototype.messages = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_messages_messages__["a" /* MessagesPage */]);
    };
    MyApp.prototype.logOutManager = function () {
        this.fireAuth.signOut();
        localStorage.removeItem('IS_LOGGED_IN');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */]);
    };
    ///
    MyApp.prototype.openPage = function (page) {
        if (this.userType == 'manager') {
            if (page == __WEBPACK_IMPORTED_MODULE_22__pages_tabs1_tabs1__["a" /* Tabs1Page */]) {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_22__pages_tabs1_tabs1__["a" /* Tabs1Page */], { tabIndex: 0 });
            }
            else {
                this.nav.setRoot(page);
            }
        }
        else {
            if (page == __WEBPACK_IMPORTED_MODULE_16__pages_job_list_job_list__["a" /* JobListPage */]) {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */], { tabIndex: 0 });
            }
            else {
                this.nav.setRoot(page);
            }
        }
    };
    MyApp.prototype.menuOptions = function () {
        if (this.userType == 'manager') {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_22__pages_tabs1_tabs1__["a" /* Tabs1Page */], icon: 'home' },
                { title: 'Add Job', component: __WEBPACK_IMPORTED_MODULE_4__pages_add_job_add_job__["a" /* AddJobPage */], icon: 'create' },
                { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_20__pages_notifications1_notifications1__["a" /* Notifications1Page */], icon: 'notifications' },
                { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_17__pages_view_profile_view_profile__["a" /* ViewProfilePage */], icon: 'person' },
                { title: 'Support', component: __WEBPACK_IMPORTED_MODULE_1__pages_support_support__["a" /* SupportPage */], icon: 'information' },
            ];
        }
        else {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_16__pages_job_list_job_list__["a" /* JobListPage */], icon: 'home' },
                { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_17__pages_view_profile_view_profile__["a" /* ViewProfilePage */], icon: 'person' },
                // { title: 'Education List', component: EducationListPage ,icon: 'school'},
                // { title: 'Add Education', component: EducationPage,icon: 'create'},
                { title: 'My Jobs', component: __WEBPACK_IMPORTED_MODULE_18__pages_my_jobs_my_jobs__["a" /* MyJobsPage */], icon: 'folder-open' },
                { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */], icon: 'notifications' },
                { title: 'Support', component: __WEBPACK_IMPORTED_MODULE_1__pages_support_support__["a" /* SupportPage */], icon: 'information' },
            ];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_9" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-content *ngIf="userProfiles">\n     <ion-list menutop>\n   <ion-item color="primary" lines="none">\n		<ion-avatar item-start>\n		\n		 <ng-container *ngIf="userProfiles.photoURL" class="profile-image">\n            <img src="{{userProfiles.photoURL}}" width="80" height="80">\n         </ng-container>\n         <ng-container *ngIf="!userProfiles.photoURL" class="profile-image">\n            <img src="assets/images/person.png" width="80" height="80" >\n         </ng-container>\n		\n		</ion-avatar>\n          \n		 <h2>{{userProfiles.displayName}} {{userProfiles.lastName}}</h2>\n		 <p>{{userProfiles.email}}</p>\n		 </ion-item>\n      </ion-list>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.component)">\n	  <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n	  <button menuClose ion-item  (click)="logOut()" >\n	  <ion-icon name="log-in" item-left></ion-icon>\n        Log out\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content ></ion-nav>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2__providers_events_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var YoutubePipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    YoutubePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'youtube',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubePipe);
    return YoutubePipe;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_education_edit_education__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the EducationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EducationListPage = /** @class */ (function () {
    function EducationListPage(nav, params, functions, service, values, payPal, stripe, translateService) {
        var _this = this;
        this.nav = nav;
        this.params = params;
        this.functions = functions;
        this.service = service;
        this.values = values;
        this.payPal = payPal;
        this.stripe = stripe;
        this.translateService = translateService;
        this.disableSubmit = false;
        this.responseCame = false;
        this.orderDetails = {};
        this.paramse = {};
        this.addressList = [];
        this.categoryList = [];
        this.firebasedata = [];
        this.restaurants = [];
        console.log('data');
        this.payments = [];
        this.form = {};
        this.buttonText = "Place Order";
        this.currentUser = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().currentUser;
        console.log(__WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().currentUser.uid);
        if (this.currentUser) {
            this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
            });
        }
        this.addressList = [];
        /***
        this.service.getCurrentUserAddresses(this.currentUser.uid).on('value', snapshot =>{
          
              this.addressList = [];
              
                  snapshot.forEach( snap =>{
                      this.addressList.push({
                    
                      id: snap.key,
                      city: snap.val().city,
                      district: snap.val().district,
                      street: snap.val().street,
                      phone: snap.val().phone,
                      address: snap.val().address,
                      apartmentOffice: snap.val().apartmentOffice
                      
                      });
                  });
                          
                  console.log(this.addressList);
      });
      */
        this.responseCame = false;
        this.service.getUserEducationList(this.currentUser.uid).on('value', function (snapshot) {
            _this.addressList = [];
            snapshot.forEach(function (snap) {
                _this.addressList.push({
                    id: snap.key,
                    displayName: snap.val().displayName,
                    education: snap.val().education,
                    email: snap.val().email,
                    europeResult: snap.val().europeResult,
                    birthday: snap.val().birthday,
                    finished: snap.val().finished,
                    jobcategory: snap.val().jobcategory,
                    maximum: snap.val().maximum,
                    minimum: snap.val().minimum,
                    reverseOrder: snap.val().reverseOrder,
                    started: snap.val().started,
                    timeStamp: snap.val().timeStamp,
                    uid: snap.val().uid,
                    worked: snap.val().worked
                });
            });
            _this.responseCame = true;
            console.log(_this.addressList);
        });
    }
    EducationListPage.prototype.selectAddress = function (key, address) {
        console.log(key);
        console.log(address);
        this.currentUserAddress = address;
    };
    EducationListPage.prototype.editEducation = function (address) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__edit_education_edit_education__["a" /* EditEducationPage */], { address: address });
    };
    EducationListPage.prototype.addAddress = function () {
        //this.nav.push(CurrentUserAddressPage,this.userProfiles);
    };
    EducationListPage.prototype.deleteEducation = function (id) {
        this.service.deleteEducation(id);
    };
    EducationListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserAddressPage');
    };
    EducationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-education-list',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/education-list/education-list.html"*/'<ion-header>\n  <ion-navbar color="primary"  text-center>\n   <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>My Educations</ion-title>\n	\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n	<div jobdetail *ngFor="let address of addressList">\n\n		<ion-buttons end >\n			<!-- <button ion-button (click)="editEducation(address)">\n			  <ion-icon name="create"></ion-icon>\n			</button>  -->\n			\n			<button ion-button (click)="deleteEducation(address.id)">\n			  <ion-icon name="trash"></ion-icon>\n			</button> \n			</ion-buttons>\n\n\n	<!-- <div joblist>\n	   <h2 heading>Employee Info</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-pricetags-outline"></ion-icon> 			\n			  <h2>ID</h2> \n			  <p>{{address.id}} </p>			\n			</ion-item>\n			<ion-item>		\n			<ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Display Name</h2> \n			  <p>{{address.displayName}}</p>			\n			</ion-item>\n			<ion-item>		\n			<ion-icon item-start name="ios-mail-outline"></ion-icon> 			\n			  <h2>Email</h2> \n			  <p>{{address.email}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-person-outline"></ion-icon> 			\n			  <h2>Gender</h2> \n			  <p>{{address.europeResult}}</p>			\n			</ion-item>\n			<ion-item>\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Birthday</h2> \n			  <p>{{address.birthday}}</p>			\n			</ion-item>\n	</div> -->\n<div joblist>\n	   <h2 heading>Education Info</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-document-outline"></ion-icon> 			\n			  <h2>Education</h2> \n			  <p>{{address.education}} </p>			\n			</ion-item>\n			<ion-item>		\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Started</h2> \n			  <p>{{address.started}}</p>			\n			</ion-item>\n			<ion-item>		\n			<ion-icon item-start name="ios-calendar-outline"></ion-icon> 			\n			  <h2>Finished</h2> \n			  <p>{{address.finished}}</p>			\n			</ion-item>\n			\n	</div>\n	<div joblist>\n	   <h2 heading>Career Info</h2>\n           <ion-item>\n			<ion-icon item-start name="ios-briefcase-outline"></ion-icon> 			\n			  <h2>Worked Experience</h2> \n			  <p>{{address.worked}} </p>			\n			</ion-item>\n			<ion-item>		\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Max salary per year</h2> \n			  <p>${{address.maximum}}</p>			\n			</ion-item>\n			<ion-item>		\n			<ion-icon item-start name="ios-cash-outline"></ion-icon> 			\n			  <h2>Min Salary Per Year</h2> \n			  <p>${{address.minimum}}</p>			\n			</ion-item>\n			\n	</div>\n</div>\n			<!--saved address list-->\n			<!--ion-list>\n				<ion-item *ngFor="let address of addressList" \n				style = "background-color : #C2EB99;margin-top:20px;">\n					<ion-label>\n							<h4 style = "float: center;color:red;padding-top:10px;">EMPLOYEE INFO</h4>\n							<p class="show-address">ID: <b style="float:right;">{{address.id}}</b> </p>\n						    <p class="show-address">Display Name: <b style="float:right;">{{address.displayName}} </b></p>\n							<p class="show-address">Email: <b style="float:right;">{{address.email}}</b></p>\n							<p class="show-address">Gender: <b style="float:right;">{{address.europeResult}}</b></p>\n							<p class="show-address">Birthday: <b style="float:right;">{{address.birthday}}</b></p>\n							\n							<h4 style = "float: center;color:red;">EDUCATION INFO</h4>\n							<p class="show-address">Education: <b style="float:right;">{{address.education}}</b></p>\n							<p class="show-address">Started: <b style="float:right;">{{address.started}}</b></p>\n							<p class="show-address">Finished: <b style="float:right;">{{address.finished}}</b></p>\n							\n							<h4 style = "flost: center;color:red;">CAREER INFO</h4>\n							\n							<p class="show-address">Job Category: <b style="float:right;">{{address.jobcategory}}</b></p>\n							\n							<p class="show-address">Worked year: <b style="float:right;">{{address.worked}}</b></p>\n							\n							<p class="show-address">Max salary per year: <b style="float:right;">{{address.maximum}}$</b></p>\n							<p class="show-address">Min salary per year: <b style="float:right;">{{address.minimum}}$</b></p>\n							\n							\n							<button ion-button icon-left  (click)="editEducation(address)" clear big>\n									<ion-icon name="build"></ion-icon>\n									<div>Edit</div>\n							</button>\n							\n							<button ion-button icon-left  (click)="deleteEducation(address.id)" clear big>\n									<ion-icon name="trash"></ion-icon>\n									<div>Delete</div>\n							</button>\n					</ion-label>\n							\n				\n										\n					</ion-item>\n					\n					\n					\n					\n					\n			</ion-list-->\n\n<p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="responseCame && addressList.length==0">No data found</p>\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/education-list/education-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], EducationListPage);
    return EducationListPage;
}());

//# sourceMappingURL=education-list.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_list_offer_list__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posted_jobs_posted_jobs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myprofile1_myprofile1__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages1_messages1__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications1_notifications1__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tabs1Page = /** @class */ (function () {
    function Tabs1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__posted_jobs_posted_jobs__["a" /* PostedJobsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__offer_list_offer_list__["a" /* OfferListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__myprofile1_myprofile1__["a" /* Myprofile1Page */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__messages1_messages1__["a" /* Messages1Page */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__notifications1_notifications1__["a" /* Notifications1Page */];
    }
    Tabs1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    Tabs1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs1',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/tabs1/tabs1.html"*/'<ion-tabs>\n  <ion-tab tabIcon="ios-briefcase-outline"  tabsHideOnSubPages="true"  tabTitle="Jobs" [root]="tab1Root"></ion-tab>\n  <ion-tab tabIcon="ios-chatboxes-outline"tabsHideOnSubPages="true"  tabTitle="Messages" [root]="tab4Root"></ion-tab>\n  <ion-tab tabIcon="ios-home-outline"  tabsHideOnSubPages="true" [root]="tab2Root"></ion-tab>\n  <ion-tab tabIcon="ios-notifications-outline"  tabsHideOnSubPages="true" tabTitle="Notifications" [root]="tab5Root"></ion-tab>\n  <ion-tab tabIcon="ios-person-outline" tabsHideOnSubPages="true" tabTitle="Profile" [root]="tab3Root"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/tabs1/tabs1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Tabs1Page);
    return Tabs1Page;
}());

//# sourceMappingURL=tabs1.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.notifications = [];
        this.errors = ['', null, undefined];
        this.is_loaded = false;
        this.tab = this.navCtrl.parent;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        this.getNotification();
        // console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.getNotification = function () {
        var _this = this;
        this.service.getNotifications().on('value', function (snapshot) {
            console.log(snapshot);
            _this.notifications = [];
            snapshot.forEach(function (snap) {
                _this.service.getUserProfile(snap.val().fromId).on('value', function (u_snapshot) {
                    _this.notifications.push({
                        id: snap.key,
                        type: snap.val().type,
                        isRead: snap.val().isRead,
                        data_params: snap.val().data_params,
                        fromId: snap.val().fromId,
                        date: snap.val().date,
                        displayName: u_snapshot.val().displayName,
                        lastName: u_snapshot.val().lastName,
                        photoURL: u_snapshot.val().photoURL
                    });
                });
            });
            _this.notifications = _this.notifications.reverse();
            var self = _this;
            setTimeout(function () {
                self.is_loaded = true;
            }, 1000);
            console.log(_this.notifications);
        });
    };
    NotificationsPage.prototype.goToJobs = function () {
        this.tab.select(2);
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n<div notifications *ngIf="is_loaded">\n	  <ng-container *ngFor="let notis of notifications">\n		  <ion-item (click)="goToJobs()">\n			 <ion-avatar item-start>\n			   <img *ngIf="errors.indexOf(notis.photoURL) == -1" src="{{notis.photoURL}}"/>\n			   <img *ngIf="errors.indexOf(notis.photoURL) >= 0" src="assets/images/person.png"/>\n			 </ion-avatar>\n\n			 <p *ngIf="notis.type==2"> {{notis.displayName}} {{notis.lastName}}  has hired you for {{notis.data_params.job}} job.</p>\n\n			 <p *ngIf="notis.type==3"> {{notis.displayName}} {{notis.lastName}}  has rejected you for {{notis.data_params.job}} job.</p>\n\n			 <ion-note><ion-icon name="time-outline"></ion-icon> {{notis.date | timeAgo}}</ion-note>\n		  </ion-item>\n	  </ng-container>\n \n	</div>\n\n	<p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="!is_loaded">Loading...</p>\n	<p style="width: 100%; text-align: center; margin-top:  48%;color:lightgrey" *ngIf="notifications.length == 0 && is_loaded">No data found</p>\n</ion-content>\n<!-- // 2- hired, 3- cancelled, 4 - pending -->'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__education_list_education_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EducationPage = /** @class */ (function () {
    function EducationPage(navCtrl, navParams, service, translateService, functions) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.functions = functions;
        this.errors = ['', null, undefined, ' '];
        this.form = {};
        this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        console.log(this.currentUser);
        //this.customer = params.data;
        this.customer = [];
        this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', function (snapshot) {
            _this.customer.displayName = snapshot.val().displayName;
            _this.customer.email = snapshot.val().email;
            _this.customer.europeResult = snapshot.val().europeResult;
            _this.customer.birthday = snapshot.val().birthday;
        });
        this.service.getRestaurantsList().on('value', function (snapshot) {
            _this.restaurantName = [];
            snapshot.forEach(function (snap) {
                _this.restaurantName.push({
                    id: snap.key,
                    name: snap.val().title,
                });
            });
        });
        this.service.getWorkedYear().on('value', function (snapshot) {
            _this.workedYear = [];
            snapshot.forEach(function (snap) {
                _this.workedYear.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getFinishedYear().on('value', function (snapshot) {
            _this.finishedYear = [];
            snapshot.forEach(function (snap) {
                _this.finishedYear.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getStartedYear().on('value', function (snapshot) {
            _this.startedYear = [];
            snapshot.forEach(function (snap) {
                _this.startedYear.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getJobCategoryName().on('value', function (snapshot) {
            _this.jobCategoryName = [];
            snapshot.forEach(function (snap) {
                _this.jobCategoryName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getEducationName().on('value', function (snapshot) {
            _this.educationName = [];
            snapshot.forEach(function (snap) {
                _this.educationName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getCityName().on('value', function (snapshot) {
            _this.cityName = [];
            snapshot.forEach(function (snap) {
                _this.cityName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getCityDistrictName().on('value', function (snapshot) {
            _this.cityDistrictName = [];
            snapshot.forEach(function (snap) {
                _this.cityDistrictName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getStreetName().on('value', function (snapshot) {
            _this.streetName = [];
            snapshot.forEach(function (snap) {
                _this.streetName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
        this.service.getApartmentOfficeName().on('value', function (snapshot) {
            _this.apartmentOfficeName = [];
            snapshot.forEach(function (snap) {
                _this.apartmentOfficeName.push({
                    id: snap.key,
                    name: snap.val().name
                });
            });
        });
    }
    EducationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EducationPage');
    };
    /**
      addNewAddress(){
          this.service.saveNewAddress(this.customer.city,
          this.customer.district, this.customer.street , this.customer.apartmentOffice,
          this.customer.displayName, this.customer.email, this.customer.phone,
          this.customer.address, this.currentUser.uid)
          .then(() =>{
            this.navCtrl.pop();
          });
      }
      */
    EducationPage.prototype.addEducation = function () {
        var _this = this;
        if (this.validate()) {
            this.errorMessage = '';
            this.service.saveEducation(this.customer.jobcategory, this.customer.education, this.customer.started, this.customer.finished, this.customer.worked, this.customer.displayName, this.customer.email, this.customer.minimum, this.customer.maximum, this.currentUser.uid, this.customer.europeResult, this.customer.birthday)
                .then(function () {
                _this.functions.showAlert('Success', 'You have successfully add your education into System');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__education_list_education_list__["a" /* EducationListPage */]);
            });
        }
    };
    EducationPage.prototype.validate = function () {
        if (this.errors.indexOf(this.customer.jobcategory) >= 0) {
            this.errorMessage = 'Please select job category';
            return false;
        }
        if (this.errors.indexOf(this.customer.education) >= 0) {
            this.errorMessage = 'Please select education';
            return false;
        }
        if (this.errors.indexOf(this.customer.started) >= 0) {
            this.errorMessage = 'Please select started year';
            return false;
        }
        if (this.errors.indexOf(this.customer.finished) >= 0) {
            this.errorMessage = 'Please select finished year';
            return false;
        }
        if (this.errors.indexOf(this.customer.worked) >= 0) {
            this.errorMessage = 'Please select worked years';
            return false;
        }
        if (this.errors.indexOf(this.customer.minimum) >= 0) {
            this.errorMessage = 'Please select minimum salary';
            return false;
        }
        if (this.errors.indexOf(this.customer.maximum) >= 0) {
            this.errorMessage = 'Please select maximum salary';
            return false;
        }
        return true;
    };
    EducationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-education',template:/*ion-inline-start:"/home/harinder/Documents/indiit/dental/src/pages/education/education.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>	\n   <button ion-button menuToggle> \n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{"Update Education" | translate}}</ion-title>	\n  </ion-navbar>\n</ion-header> \n<ion-content padding >\n			  <div form-group>\n               <label>Name</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.displayName}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n            <div form-group>\n               <label>Email</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.email}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n\n			 <div form-group *ngIf="errors.indexOf(customer.europeResult)==-1">\n               <label>Gender</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.europeResult}}" readonly disabled=""></ion-input>\n               </ion-item>\n             </div> \n\n\n			<div form-group *ngIf="errors.indexOf(customer.europeResult)>=0">\n			<label>Gender </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-person-outline"></ion-icon>\n			</ion-label>\n		      <ion-select [(ngModel)]="customer.europeResult"  name="gender" placeholder="Select Gender">\n               <!-- <ion-option *ngFor="let item of jobCategoryName" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="Male">Male</ion-option> \n               <ion-option value="Female">Female</ion-option> \n      \n               </ion-select>\n			</ion-item>\n			</div>\n\n\n			 <div form-group *ngIf="errors.indexOf(customer.birthday)==-1">\n               <label>Birthday</label>\n                <ion-item>\n                  <ion-label><ion-icon name="ios-calendar-outline"></ion-icon></ion-label>\n                  <ion-input  type="text" value="{{customer.birthday}}" readonly disabled></ion-input>\n               </ion-item>\n             </div> \n\n            <div form-group *ngIf="errors.indexOf(customer.birthday)>=0">\n		      	<label>Birthday</label>\n               <ion-item lines="none">\n               <ion-label>\n                    <ion-icon name="ios-calendar-outline"></ion-icon>\n               </ion-label>\n                     <ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="customer.birthday" name="DOB"></ion-datetime>\n               </ion-item>\n			</div>\n\n			\n			<div form-group>\n			<label>Job Category </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-pricetags-outline"></ion-icon>\n			</ion-label>\n		      <ion-select [(ngModel)]="customer.jobcategory"  name="jobcategory" placeholder="Select Category">\n               <!-- <ion-option *ngFor="let item of jobCategoryName" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="System Analysists">System Analysists</ion-option> \n               <ion-option value="Accounting">Accounting</ion-option> \n               <ion-option value="It Engineer">It Engineer</ion-option> \n\n               </ion-select>\n			</ion-item>\n			</div>\n      <div form-group>\n			<label>Education </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-document-outline"></ion-icon>\n			</ion-label>\n			    <ion-select [(ngModel)]="customer.education"  name="education" placeholder="Select Your Education">\n               <!-- <ion-option *ngFor="let item of educationName" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="Bachelor">Bachelor</ion-option> \n               <ion-option value="Masters">Masters</ion-option> \n               <ion-option value="Doctors">Doctors</ion-option> \n               </ion-select>\n			</ion-item>\n			</div>\n			 <div form-group>\n			<label>University Started </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-calendar-outline"></ion-icon>\n			</ion-label>\n		      <ion-select [(ngModel)]="customer.started"  name="started" placeholder="Select">\n               <!-- <ion-option *ngFor="let item of startedYear" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="2014">2014</ion-option> \n               <ion-option value="2015">2015</ion-option> \n               <ion-option value="2016">2016</ion-option> \n               <ion-option value="2017">2017</ion-option> \n               <ion-option value="2018">2018</ion-option> \n               <ion-option value="2019">2019</ion-option> \n               </ion-select>\n			</ion-item>\n			</div>\n        <div form-group>\n			<label>University Finished </label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-calendar-outline"></ion-icon>\n			</ion-label>\n		   <ion-select [(ngModel)]="customer.finished"  name="finished" placeholder="Select">\n               <!-- <ion-option *ngFor="let item of finishedYear" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="2017">2017</ion-option> \n               <ion-option value="2018">2018</ion-option> \n               <ion-option value="2019">2019</ion-option> \n\n               </ion-select>\n			</ion-item>\n			</div>\n			 <div form-group>\n			<label>Worked Year</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-briefcase-outline"></ion-icon>\n			</ion-label>\n			 <ion-select [(ngModel)]="customer.worked"  name="worked" placeholder="Select">\n               <!-- <ion-option *ngFor="let item of workedYear" value="{{item.name}}">{{item.name}}</ion-option> -->\n               <ion-option value="4">4 years</ion-option> \n               <ion-option value="5">5 years</ion-option> \n               <ion-option value="7">7 years</ion-option> \n\n               </ion-select>\n			</ion-item>\n			</div>\n			\n			 <div form-group>\n			<label>Minimum Salary In $</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-cash-outline"></ion-icon>\n			</ion-label>\n		     <ion-input type="number" [(ngModel)]="customer.minimum" name="minimum" ></ion-input>\n			</ion-item>\n			</div>\n			<div form-group>\n			<label>Maximum Salary In $</label>\n			<ion-item lines="none">\n			<ion-label>\n			<ion-icon name="ios-cash-outline"></ion-icon>\n			</ion-label>\n		   <ion-input type="number" [(ngModel)]="customer.maximum" name="maximum" ></ion-input>\n			</ion-item>\n			</div>\n			  <div class="error-message">\n           <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n       </div>\n\n<button round ion-button btnsubmit text-uppercase block color="secondary" [disabled]="disableSubmit" (click)="addEducation()">{{"Save" | translate}}</button>\n\n\n\n\n\n\n\n\n\n\n<!--div class="margin">\n\n\n\n\n\n      <ion-list>\n        \n			\n			  <ion-item style = "background-color: #E5F9CB;">\n			  <h3 ><b>Display Name: {{customer.displayName}}</b></h3>\n		\n            <ion-label floating>{{"FirstName" | translate}}*</ion-label>\n            <ion-input required type="text" [(ngModel)]="customer.displayName" name="firstname"></ion-input>\n			\n         </ion-item>\n		 \n\n		 \n         <ion-item style = "background-color : #E5F9CB;">\n		 <h3><b>Email: {{customer.email}}</b></h3>\n			\n         </ion-item>\n		 \n		 <ion-item style = "background-color : #E5F9CB;">\n		 <h3><b>Gender: {{customer.europeResult}}</b></h3>		\n         </ion-item>\n		 \n		 <ion-item style = "background-color : #E5F9CB;">\n		 <h3><b>Birthday: {{customer.birthday}}</b></h3>		\n         </ion-item>\n		 \n		 \n		 <div style = "height:20px;width:100%;">\n				\n			</div>\n		\n		   	<ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>Job Category</ion-label>\n               <ion-select [(ngModel)]="customer.jobcategory"  name="jobcategory">\n               <ion-option *ngFor="let item of jobCategoryName" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<div style = "height:20px;width:100%;">\n				\n			</div>\n		\n		   <ion-item  class="option" style = "background-color: #98EA69;">\n               <ion-label>Education</ion-label>\n               <ion-select [(ngModel)]="customer.education"  name="education">\n               <ion-option *ngFor="let item of educationName" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<div style = "height:20px;width:100%;">\n				\n			</div>\n			\n			\n			<ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>University Started year</ion-label>\n               <ion-select [(ngModel)]="customer.started"  name="started">\n               <ion-option *ngFor="let item of startedYear" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<div style = "height:20px;width:100%;">\n				\n			</div>\n			\n			<ion-item  class="option"  style = "background-color: #98EA69;">\n               <ion-label>University Finished year</ion-label>\n               <ion-select [(ngModel)]="customer.finished"  name="finished">\n               <ion-option *ngFor="let item of finishedYear" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<div style = "height:20px;width:100%;">\n				\n			</div>\n		\n			\n			<ion-item  class="option" style = "background-color : #98EA69;">\n               <ion-label>Worked Year</ion-label>\n               <ion-select [(ngModel)]="customer.worked"  name="worked">\n               <ion-option *ngFor="let item of workedYear" value="{{item.name}}">{{item.name}}</ion-option>\n               </ion-select>\n            </ion-item>\n			\n			<div style = "height:20px;width:100%;">\n				\n			</div>\n\n			\n		\n			\n		 \n         <ion-item style = "background-color: #E5F9CB;">\n            <ion-label floating>{{"Wanted Salary Minimum" | translate}}</ion-label>\n            <ion-input type="number" [(ngModel)]="customer.minimum" name="minimum" ></ion-input>\n         </ion-item>\n		 \n		 <div style = "height:20px;width:100%;">\n				\n			</div>\n         <ion-item style = "background-color : #E5F9CB;">\n            <ion-label floating>{{"Wanted Salary Maximum" | translate}}</ion-label>\n            <ion-input type="number" [(ngModel)]="customer.maximum" name="maximum" ></ion-input>\n         </ion-item>\n      </ion-list>\n       <div class="error-message">\n           <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n       </div>\n      <button ion-button no-margin item-right full color="shadow" [disabled]="disableSubmit" (click)="addEducation()">{{"Save" | translate}}</button>\n   </div-->\n\n</ion-content>\n'/*ion-inline-end:"/home/harinder/Documents/indiit/dental/src/pages/education/education.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__["a" /* Functions */]])
    ], EducationPage);
    return EducationPage;
}());

//# sourceMappingURL=education.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the WpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var WpService = /** @class */ (function () {
    function WpService(http, config) {
        this.http = http;
        this.config = config;
        this.url = this.config.url;
    }
    WpService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/api/core/get_category_index/').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.categories = data;
                console.log(_this.categories);
                resolve(_this.categories);
            });
        });
    };
    WpService.prototype.getPosts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/api/core/get_category_posts/?id=' + id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.posts = data;
                resolve(_this.posts);
            });
        });
    };
    WpService.prototype.getPost = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/?json=get_post&post_id=' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.post = data;
                resolve(_this.post);
            });
        });
    };
    WpService.prototype.submitComment = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("content", form.comment);
        params.append("name", form.name);
        params.append("email", form.email);
        params.append("post_id", form.post_id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/?json=respond.submit_comment', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(JSON.parse(err._body)); });
        });
    };
    WpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */]])
    ], WpService);
    return WpService;
}());

//# sourceMappingURL=wp-service.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationTrackerProvider = /** @class */ (function () {
    function LocationTrackerProvider(zone, http, backgroundGeolocation, geolocation, service) {
        this.zone = zone;
        this.http = http;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.service = service;
        this.lat = 0;
        this.lng = 0;
    }
    LocationTrackerProvider.prototype.startTracking = function () {
        // Background Tracking
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__service__["a" /* Service */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ })

},[452]);
//# sourceMappingURL=main.js.map