import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth1 } from '../../providers/auth1';
import { LoadingController, AlertController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
import { NavParams, IonicPage, Platform } from 'ionic-angular';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service1 } from '../../providers/service1';
// import { ListPage } from '../list/list';
import { Tabs1Page } from '../tabs1/tabs1';
import * as firebase from 'firebase/app';
import { Home1Page } from '../home1/home1';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register1',
  templateUrl: 'register1.html',
})
export class Register1Page {
	
  	presentLoader: any;
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
	  buttonText: any = "sign up";
	  HeaderText: any ="Login";
	  secondLogin: any = false;
	  params:any ={};

  constructor(public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth1, public loadingCtrl: LoadingController/*, private twitter: TwitterConnect*/,
     private fb: Facebook,
     /** private googlePlus: GooglePlus,*/ public alertCtrl:AlertController, public values:Values,  public service: Service1, public platform: Platform) {
	  
	  
    this.form = {};
    this.auth = auth;
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});
	 
	  
  }
 

  goToLogin(){
	  this.nav.push(Home1Page);
  }
  
   register() {
    if(this.validateRegister(this.form)){
      this.disableRegister = true;
      this.buttonText = "Registering...";
      this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName, this.form.phone, this.form.company, this.form.is_recruiter, this.form.company_size)
      .then(() => {

        this.currentUser = firebase.auth().currentUser;
		
		console.log(this.currentUser);

   
          this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
			  
			     localStorage.setItem('IS_LOGGED_IN','1');
           this.userProfiles = snapshot.val();
           this.nav.setRoot(Tabs1Page);
        
      });
        
        this.disableRegister = false;
        this.buttonText = "sign up";
		
		
		
      }).catch(err => {this.handleRegisterError(err)});
    }
	
	
  }
  handleRegisterError(err){
    console.log(err.code);
    this.errorRegisterMessage = err.message;
    this.disableRegister = false;
    this.buttonText = "sign up";
		//this.nav.setRoot(ListPage);
		
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
    if(this.form.phone == undefined || this.form.phone == ''){
      this.errorRegisterMessage = 'Please enter phone number';
      return false;
    }
    if(this.form.company == undefined || this.form.company == ''){
      this.errorRegisterMessage = 'Please enter company name';
      return false;
    }
    if(this.form.is_recruiter == undefined || this.form.is_recruiter == ''){
      this.errorRegisterMessage = 'Please select are you a recrutier';
      return false;
    }
    if(this.form.company_size == undefined || this.form.company_size == ''){
      this.errorRegisterMessage = 'Please select company size';
      return false;
    }
    if(this.form.password == undefined || this.form.password == ''){
      this.errorRegisterMessage = 'Please enter password';
      return false;
    }
    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

   //FACEBOOK LOGIN

 facebookRestaurantLogin(){ 
   

   this.fb.getLoginStatus().then( data=>{
        if (data.status =='connected'){
          this.fb.logout();
        }
      });
   
  if (this.platform.is('cordova')) { 
    this.fb.login(['public_profile', 'user_friends', 'email']).then( (response) => {
      this.presentLoadingDefault('Please wait....');
        let facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then((success) => {
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
                status: 1
              });

          }
          
          });

        
  
            this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
             this.userProfiles = snapshot.val();
       console.log(snapshot.val());
            });

          this.values.userRole = firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
        
              localStorage.setItem('IS_LOGGED_IN', '1');
              localStorage.setItem('userType','manager');
              this.currentUser = firebase.auth().currentUser;
              this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
              this.userProfiles = snapshot.val();
              });
            } 
          });

          this.nav.setRoot(Tabs1Page);
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
 presentLoadingDefault(msg) {
  this.presentLoader = this.loadingCtrl.create({
     content:msg
   });
   this.presentLoader.present();
 }

}
