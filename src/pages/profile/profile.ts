import { Component, NgZone, ViewChild } from '@angular/core';

import { Nav } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';



import { Auth } from '../../providers/auth';
import { LoadingController, AlertController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';

import { EducationPage } from '../education/education';
import { EducationListPage } from '../education-list/education-list';

import firebase from 'firebase';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	
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
	  
	  params:any ={};

  constructor(public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth, public loadingCtrl: LoadingController, private fb: Facebook, public alertCtrl:AlertController, public values:Values,  public service: Service,public translateService: TranslateService) {
	  
	   this.currentUser = firebase.auth().currentUser;

    if(this.values.isLoggedIn){
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
      });
    } 

	console.log(this.userProfiles);

    this.form = {};
    this.auth = auth;
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});
	  
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


  address(item){
    console.log(item)
    this.nav.push(EducationPage, item)
  }

  myOrder(){
   // this.nav.push(MyorderPage);
   this.nav.push(EducationListPage);
  }
  
  changePassword(form){
	  
	  if(form.password!="" && form.password!=null  ){
        //Update Password in UserAuthentication Table
         firebase.auth().currentUser.updatePassword(form.password).then(function(ok) {}, function(error) {});
		 alert("Password changed");
      }
	  else{
		  alert("Please enter new password");
	  }
	 
	  
  }





  
  goToAddresses(){
	  //this.nav.push(EducationListPage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
