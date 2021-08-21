import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav , Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Auth } from '../../providers/auth';
import { LoadingController, AlertController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
import { NavParams, IonicPage } from 'ionic-angular';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service } from '../../providers/service';
import { ListPage } from '../list/list';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { DatePicker } from '@ionic-native/date-picker';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit{
	  presentLoader:any;
  	secondLogin: any = false;
	  error: any;
	  zone: NgZone;
	  form: any; 
	  userProfile: any = null;
	  isLoggedIn: boolean = false;
	  customerList:any;
	  currentUser: any;
	  userProfiles: any = null;
	  role: any;
	  errorRegisterMessage: any;
	  errorSigninMessage: any;
	  disableRegister: boolean = false;
	  disableLogin: boolean = false;
	  signup: boolean = false;
	  _showSignup: boolean = false;
	  buttonText: any = "Sign Up";
	  HeaderText: any ="Login";
	  
	  
	  public date:any;
	  
	  europe : any;
	  europeResult : any;
	  
	  params:any ={};

  constructor(private iab: InAppBrowser, public platform: Platform, public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth, public loadingCtrl: LoadingController/*, private twitter: TwitterConnect*/, private fb: Facebook,/** private googlePlus: GooglePlus,*/ public alertCtrl:AlertController, public values:Values,  public service: Service,public datePicker: DatePicker) {
	  
	  
    this.form = {};
    this.auth = auth;
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});
	
	
	this.europe = [];
	  this.europe = {
        "items" : [ {
          
          "id" : "Male",
          "name" : "Male"
		}
		, {
          
          "id" : "Female",
          "name" : "Female"
        }
		]
	  }
	 
	  
  }

  openInAppBrowser(page){
    var url = page == 2 ? 'https://thedentalbridge.com/#/terms-conditions' : 'https://thedentalbridge.com/#/privacy-policy'
    const browser = this.iab.create(url);
    browser.close();
}

    goToLogin(){
	  this.nav.push(HomePage);
  }
   register() {
    if(this.validateRegister()){

      if( this.ValidateEmail(this.form.email)){
        this.disableRegister = true;
        this.buttonText = "Registering...";
        this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName,this.form.europe,this.date, '9815393101', this.form.profession, this.form.miles)
        .then(() => {


          this.currentUser = firebase.auth().currentUser;
          this.currentUser.sendEmailVerification();
          setTimeout(() => {

            this.auth.logoutUser().then(() => {
              this.values.isLoggedIn = false;
              this.values.userRole = 'Customer';
              localStorage.clear()
            });

            this.nav.setRoot(HomePage);

            this.presentAlert('Verify your email', 'We have sent you an email verification link to your email address, Please go to that account and click on that link to verify your email address.');
            
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
      
      
      
        }).catch(err => {
          // if(err.code=='auth/email-already-in-use'){
          //   this.errorRegisterMessage = 'This email is already in use, Please try another';
          // }
          this.handleRegisterError(err)
        });
      }else{

        this.errorRegisterMessage = 'Please enter a valid email address';
      }

      }
  
	 
	
  }

     ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
     
    return (false)
}

  handleRegisterError(err){
    console.log(err.code);
    this.errorRegisterMessage = err.message;
    this.disableRegister = false;
    this.buttonText = "Sign Up";
  
  }
  validateRegister(){
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
    // if(this.form.phone == undefined || this.form.phone == ''){
    //   this.errorRegisterMessage = 'Please enter phone number';
    //   return false;
    // }
    if(this.form.profession == undefined || this.form.profession == ''){
      this.errorRegisterMessage = 'Please select profession';
      return false;
    }
    if(this.form.miles == undefined || this.form.miles == ''){
      this.errorRegisterMessage = 'Please enter miles from their vicinity';
      return false;
    }
	

	if(this.form.europe == undefined || this.form.europe == ''){
      this.errorRegisterMessage = 'Please select gender';
      return false;
    }
	if(this.date == undefined || this.date == ''){
      this.errorRegisterMessage = 'Please enter birthday';
      return false;
    }

    if(this.form.password == undefined || this.form.password == ''){
      this.errorRegisterMessage = 'Please enter password';
      return false;
    }
    if(this.form.terms == undefined || this.form.terms == ''){
      this.errorRegisterMessage = 'Please agree to the privacy policy & terms of conditions';
      return false;
    }


    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  selectEurope(key, address) {
        
		
		console.log(key);
		console.log(address);
		
        this.europeResult = address.key;
 
    }
	
	
	ngOnInit() {
		/**
       this.datePicker.show({
         date: new Date(),
            mode: 'date',
             androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
         });
		 */
   }


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
          localStorage.setItem('userType','seeker');

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
                 console.log('comingcoming')
                 this.presentLoader.dismiss();
             } 
           });
 
            // this.nav.push('ShopPage');
         }).catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
           //  this.functions.showAlert('Error', error.message);
           });
     }).catch((error) => { console.log(error);
      this.presentLoader.dismiss();
     // this.functions.showAlert('Error', error.errorMessage);
   
   });
   }
  }

  presentLoadingDefault(msg) {
    this.presentLoader = this.loadingCtrl.create({
       content:msg
     });
     this.presentLoader.present();
   }

   presentAlert(title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }  

}
