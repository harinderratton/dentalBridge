import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoadingController, AlertController , ToastController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
import firebase from 'firebase';
import { EmailComposer } from '@ionic-native/email-composer';

 @IonicPage()
 @Component({
   selector: 'page-support',
   templateUrl: 'support.html',
 })
export class SupportPage {
    oldPassword:any;
    confirmPassword:any;
    passwordError:any;
    errors:any=['', null, undefined,' ']
    name:any;
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
    buttonText: any = "Proceed";
    HeaderText: any ="Login";
    Basic:any='basic'
    params:any ={};
    profiletab:any='Basic'
    isPicChanged:any;
    fileName: any;
    metadata: any;
    uploadTask: any;
    storageRef: any;
    downloadURL: any;
    selectedFile: any;
    categoryName: any;
    restaurantName: any;
    restaurantCategoryName: any;
    brand: any;
    vendor: any;
    brandName: any;
    vendorName: any;
    errorMessage: any;
    disableSubmit: boolean = false;
    presentLoader: any;
    newPassword:any;
    reauthenticate:any;
    isEdit:boolean = false;
    addressList:any = [];
    isFacebook: boolean = false;
  constructor(
          private toastCtrl: ToastController, 
          public loadingController: LoadingController, 
          public nav: NavController,
          public navParams: NavParams,
          public functions: Functions,
          public auth: Auth,
          public loadingCtrl: LoadingController, 
          private fb: Facebook, 
          public alertCtrl:AlertController, 
          public values:Values,
          public service: Service,
          public translateService: TranslateService,
          public navCtrl: NavController,
          private emailComposer: EmailComposer) {
	
	        this.currentUser = firebase.auth().currentUser;

    if(this.values.isLoggedIn){
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
       this.name = this.userProfiles.displayName+ this.userProfiles.lastName
       this.isFacebook = this.userProfiles.facebook;

      });
    } 

	console.log(this.userProfiles);

    this.form = {};
    this.auth = auth;
  	this.form.in_stock = true;
    this.form.vendor = "";
    this.form.brand = "";
    this.form.sale_price = "";
	
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});

    /////
    this.service.getUserEducationList(this.currentUser.uid).on('value', snapshot =>{
			
      this.addressList = [];
      
        snapshot.forEach( snap =>{
          this.addressList.push({
          
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
 
 



  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }


  validateRegister(){
 
    if(this.errors.indexOf(this.userProfiles.displayName)>=0){
      this.errorRegisterMessage = 'Please enter first name';
      return false;
    }

    if(this.errors.indexOf(this.userProfiles.lastName)>=0){
      this.errorRegisterMessage = 'Please enter last name';
      return false;
    }


    if(this.errors.indexOf(this.userProfiles.email)>=0){
      this.errorRegisterMessage = 'Please enter email';
      return false;
    }

    if(this.errors.indexOf(this.userProfiles.problem)>=0){
      this.errorRegisterMessage = 'Please enter your query';
      return false;
    }
 
 
 
 

    return true;
  }

  ValidateEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
       return (true)
     }
        
       return (false)
   }


   sendEmail(){
     if(!this.validateRegister()) return false; 

    let email = {
      to: 'info@thedentalbridge.com',
      subject: 'Dental Bridge feedback',
      body: 'Name: '+ this.userProfiles.displayName + ' '+ this.userProfiles.lastName+ "\n" + 
            'Email: '+ this.userProfiles.email +"\n" + 
            'Query: '+ this.userProfiles.problem,
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);
   }

 


}
