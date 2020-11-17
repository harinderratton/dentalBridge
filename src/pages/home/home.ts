import { Component, NgZone, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { NavController } from 'ionic-angular';
import { EventsService } from '../../providers/events/events.service';
import { Nav , Platform } from 'ionic-angular';
import { NavParams, IonicPage } from 'ionic-angular';
import { UserTypePage } from '../../pages/user-type/user-type';
import { Auth } from '../../providers/auth';
import { LoadingController, AlertController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service } from '../../providers/service';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';

import firebase from 'firebase';

import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    presentLoader:any;
    errors:any=['',' ', null, undefined];
    isError :any;
    errorMsg: any;
    wc:any=false;
    error: any;
    zone: NgZone;
    form: any; 
    userProfile: any = null;
    public isLoggedIn: boolean = false;
    customerList:any;
    public currentUser: any;
    userProfiles: any = null;
    role: any;
    errorRegisterMessage: any;
    errorSigninMessage: any;
    disableRegister: boolean = false;
    disableLogin: boolean = false;
    signup: boolean = false;
    _showSignup: boolean = false;
    buttonText: any = "Register Account";
    HeaderText: any ="Login";
    secondLogin: any = false;
    isLoaded: any=false;
    is_loaded:any;
	  // errorPhoneMessage: any;
	  //public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

	
	params:any ={};
	
  constructor(public events:EventsService, public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth, public loadingCtrl: LoadingController/*, private twitter: TwitterConnect*/, private fb: Facebook, private googlePlus: GooglePlus, public alertCtrl:AlertController, public values:Values,  public service: Service, public platform: Platform,public translateService: TranslateService) {
	  


	console.log(this.values.isLoggedIn);
    this.form = {};
    this.auth = auth;
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});
	 
	 
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
  
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        var self = this;
        setTimeout(function(){
          var is_logged_in = localStorage.getItem('IS_LOGGED_IN');
          var userType = localStorage.getItem('userType');
          if(is_logged_in == '1' && userType == 'seeker'){
            self.currentUser = user;
            self.goToList();    
          }
          else{
            self.is_loaded = true;
          }
        },1000);
        
    }
      else{
        this.is_loaded = true;
      }
   });
	 
	  
	this.params.data = {
      "forgotPassword" : "Forgot password?",
      "labelPassword" : "PASSWORD",
      "labelUsername" : "USERNAME",
      "login" : "Login",
      "logo" : "assets/images/logo/modern.jpg",
      "password" : "Enter your password",
      "register" : "Register now!",
      "skip" : "Skip",
      "subtitle" : "Welcome",
      "title" : "Login to your account",
      "username" : "Enter your username"
    };
	
	
	this.params.events = {
        onLogin: function(params) {
         console.log('onLogin:');
		
        },
        onForgot: function() {
            console.log('onForgot:');
        },
        onRegister: function(params) {
            console.log('onRegister:');
        },
        onSkip: function(params) {
            console.log('onSkip:');
        },
        onFacebook: function(params) {
            console.log('onFacebook:');
        }
    };
	
  
  }
  
 
   goToCityList(){
	   //this.nav.setRoot(CityListPage);
   }

   goToList(){
	  // this.nav.setRoot(ListPage);
	   this.nav.setRoot(TabsPage);
   }
 
	 forgotPass()
 {
	 this.nav.setRoot(ForgotpasswordPage);
 }
	
	  

  showSignup(){
    this.HeaderText = "Register";
    this._showSignup = true;
  }

  hideSignup(){
    this.HeaderText = "Login";
    this._showSignup = false;
  }

  //EMAIL AND PASSWORD LOGIN
  	presentAlert() {
	  let alert = this.alertCtrl.create({
		title: 'Low battery',
		subTitle: '10% of battery remaining',
		buttons: ['Dismiss']
	  });
	  alert.present();
	}
  
  login(email,password){
	  this.form.email=email;
	  this.form.password=password;
 
    if(this.validateForm(password, email)){
		  this.isError = false ;
        this.disableLogin = true;
        this.auth.login(this.form.email, this.form.password).then((succ) =>{
         
          var success = succ;
          this.service.getUserProfile(success.uid).on('value', (snapshot) =>{

            if(snapshot.val().status==2){
              localStorage.setItem('IS_LOGGED_IN', '1');
              localStorage.setItem('userType','seeker');
              this.events.publishSomeData({});
              this.wc = false;
              this.userProfile = success;
              this.values.isLoggedIn = true;
              this.disableLogin = false;
              this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
               this.userProfiles = snapshot.val();
              });
    
              this.values.userRole = firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
                if(snapshot.val()){
                  this.values.userRole = snapshot.val().role;
                }
                
              });
          
          //this.nav.setRoot(ListPage);
            //  this.nav.setRoot(TabsPage);
          
         // this.nav.setRoot(CityListPage);
            }else{
              this.isError = true ;
              this.errorMsg = 'You have entered wrong credentials.';
            }          
 
           });

        }).catch(err => {
          console.log('err message', err)
          this.isError = true ;
          this.errorMsg = 'You have entered wrong credentials.';
          this.handleError(err)
        });
      }else{
       

      }
  }

  validateForm(password, email){
    if(this.errors.indexOf(password)==-1 && this.errors.indexOf(email)==-1){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        this.isError = false ;
        return (true)
      }else{
        this.isError = true ;
        this.errorMsg = 'You have entered an invalid email address.';
        return (false)
      }
 
    }else{
      if(this.errors.indexOf(email)>=0){
        this.isError = true ;
        this.errorMsg = 'Please enter email.';
        return (false)
      }

      if(this.errors.indexOf(password)>=0){
        this.isError = true ;
        this.errorMsg = 'Please enter password.';
        return (false)
      }

    }
  }
  
  handleError(err){
        console.log(err.code);
        this.errorSigninMessage = err.message;
        this.disableLogin = false;
  }
  
  validate(){
	  console.log("Validate form");
	  console.log(this.form.email);
	  console.log(this.form.password);
    if(this.form.email == undefined || this.form.email == ''){
		console.log("Validate form error");
      this.errorSigninMessage = 'Please enter email.';
      return false;
    }
    if(this.form.password == undefined || this.form.password == ''){
		console.log("Validate form error2");
      this.errorSigninMessage = 'Please enter password.';
      return false;
    }
    return true;
  }

  //FACEBOOK LOGIN

 facebookRestaurantLogin(){


	 this.fb.getLoginStatus().then( data=>{
        if (data.status =='connected'){
          this.fb.logout();
        }
      });
	 
	if (this.platform.is('cordova')) { 
    this.fb.login(['public_profile',  'email']).then( (response) => {
      this.presentLoadingDefault('Please wait....');
        let facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then((success) => {
   
            localStorage.setItem('IS_LOGGED_IN', '1');
            console.log("Firebase success: " + JSON.stringify(success));
            this.userProfile = success;
            this.values.isLoggedIn = true;
	          this.secondLogin = false;
       	firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){

            } 
	    else{

		firebase.database().ref('/users').child(this.userProfile.uid).set({
					email: this.userProfile.email,
					displayName: this.userProfile.displayName,
					lastName: "",
					address: "",
					phone: "",
					photoURL:this.userProfile.photoURL,
					facebook: true,
          secondLogin:false,
          status: 2
        });
        

	  }
	  
	  });

          this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
          this.userProfiles = snapshot.val();
        });

          this.values.userRole = firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
                this.values.userRole = snapshot.val().role;
                localStorage.setItem('IS_LOGGED_IN', '1');
                localStorage.setItem('userType','seeker');
                this.currentUser = firebase.auth().currentUser;
                console.log(this.currentUser);
                this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
                this.userProfiles = snapshot.val();
                });
                this.presentLoader.dismiss();
            } 
          });

           // this.nav.push('ShopPage');
        }).catch((error) => {
           console.log("Firebase failure: " + JSON.stringify(error));
          //  this.functions.showAlert('Error', error.message);
          });
    }).catch((error) => {
      
      console.log(error);
     this.presentLoader.dismiss();
  });
  }
 }

  //TWITTER LOGIN



  //GOOGLE LOGIN 

  gmailLogin(){
   
     
      this.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '815864038704-ns9kkv3877b7ublljknpajs5kbosl6ci.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      })
      .then( res => {
       firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
       .then( success =>{
        this.userProfile = success;
        this.values.isLoggedIn = true;
        console.log("Firebase Success" + JSON.stringify(success));
         firebase.database().ref('/users').child(this.userProfile.uid).set({
            displayName: this.userProfile.displayName,
            photoURL: this.userProfile.photoURL,
            email: this.userProfile.email,
			lastName: "",
			address: "",
			phone: "",
			facebook: false,
			secondLogin:false
        });
         this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
           this.userProfiles = snapshot.val();
          });

         this.values.userRole = firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
            } 
          });
        // this.nav.push('ShopPage');
        }).catch( error =>{
          this.userProfile = error;
          this.functions.showAlert('Error', error.message);
         console.log("Firebase Failure" + JSON.stringify(error))
         });
      }).catch(err =>{
        this.userProfile = err;
        this.functions.showAlert('Error', err);
         console.error("Error: ", err);
        });
    
  }




  forgotten(){
    this.nav.push('ResetpassowrdPage');
  }


  logOut(){
    this.auth.logoutUser().then(() => {
      this.values.isLoggedIn = false;
      this.values.userRole = 'Customer';
	  
	  
    });
  }

  address(item){
    console.log(item)
    this.nav.push('Address', item)
  }

  myOrder(){
    this.nav.push('MyorderPage');
  }

  goToRegister(){
	  this.nav.push(RegisterPage);
  }
  

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
  handleRegisterError(err){
    console.log(err.code);
    this.errorRegisterMessage = err.message;
    this.disableRegister = false;
    this.buttonText = "Register Account";
  }
  validateRegister(form){
    if(this.form.firstName == undefined || this.form.firstName == ''){
      this.errorRegisterMessage = 'Please enter first name';
      return false;
    }
    if(this.form.lastName == undefined || this.form.lastName == ''){
      this.errorRegisterMessage = 'Please enter last name';
      return false;
    }
    if(this.form.email == undefined || this.form.email == ''){
      this.errorRegisterMessage = 'Please enter email';
      return false;
    }
    if(this.form.password == undefined || this.form.password == ''){
      this.errorRegisterMessage = 'Please enter password';
      return false;
    }
    return true;
  }
  
  async showBannerAd(){
	 
  }
  
  async showInterstitialAd(){
	 
  }
  
  
  async showVideoRewardsAd(){
	 
  }


  
  ionViewDidLoad() {
 //   this.showBannerAd();
//	this.showVideoRewardsAd();
  }

  presentLoadingDefault(msg) {
    this.presentLoader = this.loadingCtrl.create({
       content:msg
     });
     this.presentLoader.present();
   }

   back(){
    this.nav.setRoot(UserTypePage);
   }


}
