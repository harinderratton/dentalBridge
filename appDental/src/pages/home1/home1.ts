import { Component, NgZone, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from 'ionic-angular';
import { UserTypePage } from '../../pages/user-type/user-type';
import { Nav , Platform } from 'ionic-angular';
import { NavParams, IonicPage } from 'ionic-angular';
import { Auth1 } from '../../providers/auth1';
import { LoadingController, AlertController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service1 } from '../../providers/service1';
import * as firebase from 'firebase/app';
import { Tabs1Page } from '../tabs1/tabs1';
// import { ListPage } from '../list/list';
import { Register1Page } from '../register1/register1';
import { EventsService } from '../../providers/events/events.service';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {
      public fireAuth : any;
      presentLoader:any;
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
      is_loaded:boolean=false;
      secondLogin: any = false;
	  // errorPhoneMessage: any;
	 //public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

	
	params:any ={};
	
  constructor(
    
            public nav: NavController,
            public navParams: NavParams,
            public functions: Functions, 
            public auth: Auth1,
            public loadingCtrl: LoadingController,
            private googlePlus: GooglePlus, 
            public alertCtrl:AlertController, 
            public values:Values,  
            public service: Service1, 
            public platform: Platform,
            public translateService: TranslateService,
            public events:EventsService,
            private fb: Facebook) {
          

            this.form = {};
            this.auth = auth;
            this.customerList = firebase.database().ref('/Customer-List'); 
            this.zone = new NgZone({});
	 
	 
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            var self = this;
            setTimeout(function(){
              var is_logged_in = localStorage.getItem('IS_LOGGED_IN');
              var userType = localStorage.getItem('userType');
              if(is_logged_in == '1' && userType == 'manager'){
          
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
	
    this.fireAuth = firebase.auth();
  }
  
 
   goToCityList(){ 
	   //this.nav.setRoot(CityListPage);
   }

   goToList(){
	   //this.nav.setRoot(ListPage);
	   this.nav.setRoot(Tabs1Page);
     this.is_loaded = true;
   }
 forgotPass(){
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
    
    if(this.validate()){

      this.disableLogin = true;
        this.auth.login(this.form.email, this.form.password).then((success) =>{	

           
  this.service.getUserProfile(success.uid).on('value', (snapshot) =>{
    this.userProfiles = snapshot.val();
    this.userProfile = success;
    if(this.userProfiles.status == 1){



        ////////////////

        var user = firebase.auth().currentUser;

        var isVerified =  user.emailVerified
        
        if(!isVerified){
        
          user.sendEmailVerification();
        
          setTimeout(() => {
        
            this.auth.logoutUser().then(() => {
              this.values.isLoggedIn = false;
              this.values.userRole = 'Customer';
              localStorage.clear()
            });
        
            this.presentAlert1('Email verification pending', 'We have sent you an email verification link to your email address, Please go to that account and click on that link to verify your email address.');
            this.disableLogin = false;
            return;
          }, 1000);
        
        
        }else{


            localStorage.setItem('IS_LOGGED_IN','1');
            localStorage.setItem('userType','manager');
            this.events.publishSomeData({});
              this.userProfile = success;
              this.values.isLoggedIn = true;
              this.disableLogin = false;
              this.values.userRole = firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
                if(snapshot.val()){
                  this.values.userRole = snapshot.val().role;
                }
              });



        }



        //////////////////

    }
    else{ 
       localStorage.clear();
       this.fb.logout();
       this.fireAuth.signOut();
       this.disableLogin = false;
       this.errorSigninMessage = "You have entered wrong credentials.";
    }
   });

        }).catch(err => {this.handleError(err)});
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
      this.errorSigninMessage = 'Please enter email';
      return false;
    }
    if(this.form.password == undefined || this.form.password == ''){
		console.log("Validate form error2");
      this.errorSigninMessage = 'Please enter password';
      return false;
    }
    return true;
  }

  //FACEBOOK LOGIN

 fbLogin(){ 
	 

	 this.fb.getLoginStatus().then( data=>{
        localStorage.setItem('userType','manager');
        if (data.status =='connected'){
          this.fb.logout();
        }
      });
	 
	if (this.platform.is('cordova')) { 
    this.fb.login(['public_profile', 'user_friends', 'email']).then( (response) => {

       this.presentLoadingDefault('Please wait....');


        let facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then((success) => {
          localStorage.setItem('userType','manager');
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
          this.values.isLoggedIn = true;
          this.secondLogin = false;
     	firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
              localStorage.setItem('IS_LOGGED_IN', '1');
              localStorage.setItem('userType','manager');
              this.currentUser = firebase.auth().currentUser;
              this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
              this.userProfiles = snapshot.val();
              });

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
                  status: 1
                });
              }

              localStorage.setItem('IS_LOGGED_IN', '1');
              localStorage.setItem('userType','manager');
              
            });

             this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
             this.userProfiles = snapshot.val();
		 
            });

          this.values.userRole = firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
            } 
          });

          // this.nav.setRoot(Tabs1Page);
          this.presentLoader.dismiss();
          localStorage.setItem('userType','seeker');
        }).catch((error) => {
           console.log("Firebase failure: " + JSON.stringify(error));
           this.functions.showAlert('Error', error.message);
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
        'webClientId': '692778962096-25t9fginuhonbh53vqol24nu16b2t11q.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
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
			secondLogin:false,
      status: 1
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
	    localStorage.removeItem('IS_LOGGED_IN');
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
	  this.nav.push(Register1Page);
  }
  
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


  
  ionViewDidLoad() {
 //   this.showBannerAd();
//	this.showVideoRewardsAd();
  }

  back(){
    this.nav.setRoot(UserTypePage);
   }

   presentLoadingDefault(msg) {
    this.presentLoader = this.loadingCtrl.create({
       content:msg
     });
     this.presentLoader.present();
   }

   presentAlert1(title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  } 

}

