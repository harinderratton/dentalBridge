import { Component, NgZone, ViewChild } from '@angular/core';

import { Nav } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoadingController, AlertController , ToastController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
import { EducationPage } from '../education/education';
import { EducationListPage } from '../education-list/education-list';
import { PasswordPage } from '../password/password';
import { NotificationsPage } from '../notifications/notifications';
import { ListPage } from '../list/list';
import firebase from 'firebase';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
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
    buttonText: any = "Update";
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
          public translateService: TranslateService) {
	
	        this.currentUser = firebase.auth().currentUser;

    if(this.values.isLoggedIn){
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
       this.name = this.userProfiles.displayName+ this.userProfiles.lastName

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
  
  
  goToPassword(){
   // this.nav.push(MyorderPage);
   this.nav.push(PasswordPage);
  }

  redirectTo(){

    this.nav.push(NotificationsPage);
  }
  
  changePassword(form){
	  
	  if(this.errors.indexOf(this.newPassword)==-1 && this.errors.indexOf(this.confirmPassword)==-1 && this.errors.indexOf(this.oldPassword)==-1){
      this.passwordError =""
      if(this.newPassword ==this.confirmPassword){
        this.passwordError =""

        var password = String(this.newPassword)
        if(password.length>=6){

   
          const cpUser = firebase.auth().currentUser; 

          /*Then you set credentials to be the current logged in user's email
          and the password the user typed in the input named "old password"
          where he is basically confirming his password just like facebook for example.*/

          const credentials = firebase.auth.EmailAuthProvider.credential(
            cpUser.email, this.oldPassword);

            //Reauthenticating here with the data above
            cpUser.reauthenticateWithCredential(credentials).then(
              success => {
                this.newPassword = '';
                this.oldPassword = '';
                this.confirmPassword = '';
                let alert = this.alertCtrl.create({
                  title: 'Change Password Success',
                  message: 'Your password has been updated!',
                  buttons: ['OK']
                });
                alert.present();
              /* Update the password to the password the user typed into the
                new password input field */
              cpUser.updatePassword(password).then(function(){
                //Success
              }).catch(function(error){
                //Failed
              });
              },
              error => {
                console.log(error);
                if(error.code === "auth/wrong-password"){
                  let alert = this.alertCtrl.create({
                    title: 'Change Password Failed',
                    message: 'Your old password is invalid.',
                    buttons: ['Try Again']
                  });
                  alert.present();
                }
              }
            )
            console.log(credentials); 
        }else{
          this.passwordError ="password length should be minimum 6"
        } 

      }else{
        this.passwordError ="Passwords do not match"
      }
   
        //Update Password in UserAuthentication Table

      }
	  else{

      if(this.errors.indexOf(this.confirmPassword)>=0){
        this.passwordError ="Please enter new password again to confirm"
      }

      if(this.errors.indexOf(this.newPassword)>=0){
        this.passwordError ="Please enter a new password"
      }

      if(this.errors.indexOf(this.oldPassword)>=0){
        this.passwordError ="Please enter your current password"
      }

	  }
	 
	  
  }

   

  changePassword1(){
    console.log('Change Password Button Clicked');
    //Creating the promt alert with inputs
    let alert = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
         {
          text: 'Update Password',
          handler: data => {
            //First you get the current logged in user
            const cpUser = firebase.auth().currentUser; 

            /*Then you set credentials to be the current logged in user's email
            and the password the user typed in the input named "old password"
            where he is basically confirming his password just like facebook for example.*/

            const credentials = firebase.auth.EmailAuthProvider.credential(
              cpUser.email, data.oldPassword);

              //Reauthenticating here with the data above
              cpUser.reauthenticateWithCredential(credentials).then(
                success => {
                  if(data.newPassword != data.newPasswordConfirm){
                    let alert = this.alertCtrl.create({
                      title: 'Change Password Failed',
                      message: 'You did not confirm your password correctly.',
                      buttons: ['Try Again']
                    });
                    alert.present();
                  } else if(data.newPassword.length < 6){
                    let alert = this.alertCtrl.create({
                      title: 'Change Password Failed',
                      message: 'Your password should be at least 6 characters long',
                      buttons: ['Try Again']
                    });
                    alert.present();
                  } else {
                    let alert = this.alertCtrl.create({
                      title: 'Change Password Success',
                      message: 'Your password has been updated!',
                      buttons: ['OK']
                    });
                    alert.present();
                  /* Update the password to the password the user typed into the
                    new password input field */
                  cpUser.updatePassword(data.newPassword).then(function(){
                    //Success
                  }).catch(function(error){
                    //Failed
                  });
                  }
                },
                error => {
                  console.log(error);
                  if(error.code === "auth/wrong-password"){
                    let alert = this.alertCtrl.create({
                      title: 'Change Password Failed',
                      message: 'Your old password is invalid.',
                      buttons: ['Try Again']
                    });
                    alert.present();
                  }
                }
              )
              console.log(credentials); 
            }
          }
      ]
    });
    alert.present();
  }

  presentLoadingDefault(msg) {
   this.presentLoader = this.loadingCtrl.create({
      content:msg
    });
    this.presentLoader.present();
  }

  presentAlert(msg, title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Picture Uploaded',
      message: 'Do you want to save this picture?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: () => {
            this.service.updateProfileInfo({ photoURL: this.downloadURL})
            .then(() => {
       
              this.userProfiles.photoURL = this.downloadURL;
        
            }).catch(err => {
              console.log(err)
              
            });
          }
        }
      ]
    });
    alert.present();
  }
  



  
  goToAddresses(){
	  //this.nav.push(EducationListPage);
  }
  
  
 

  ionViewDidLoad() {
    this.isPicChanged = false;
    console.log('ionViewDidLoad ProfilePage');
  }
  
  upLoad(){
    var fileName = this.selectedFile.name;
    console.log(fileName);
 
    var storageRef = firebase.storage().ref('Products Image/' + fileName);

    var metadata = { contentType: 'image/jpeg'};

    var uploadTask = storageRef.put(this.selectedFile, metadata);

    uploadTask.on('state_changed', (snapshot) =>{

      console.log(snapshot);

      var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100 ;

        console.log('upload' + progress + '% done' );

        switch(uploadTask.snapshot.state){
          case firebase.storage.TaskState.PAUSED:   // or Paused
          console.log('upLoad is paused');
          break;

          case firebase.storage.TaskState.RUNNING:   // OR Running
          console.log('upload is running');
          break;

        }

      }, (error) =>  {
          console.log(error);
          this.disableSubmit = false;
          this.presentLoader.dismiss();

        },() =>{
         
          this.presentLoader.dismiss();
          this.downloadURL = uploadTask.snapshot.downloadURL;
           this.disableSubmit = false;
          console.log(this.downloadURL);
          console.log('success');
          this.isPicChanged = true;
          this.presentConfirm();
        });

  }
  
   onChange(event){
    this.selectedFile = event.target.files[0];
    this.disableSubmit = true;
    this.presentLoadingDefault('Uploading....');
    this.upLoad();
  }
  
  addProduct(){
     if(this.validate()){
            this.service.addProfileImage(this.downloadURL);
      //.then( () =>{
        //this.navCtrl.pop();
      //});
	  	this.nav.push(ListPage);
	  
     }

    
  }
  
  validate(){
     
    if(this.downloadURL == undefined || this.downloadURL == ''){
      this.errorMessage = 'Please Add Image';
      return false;
    }
   
    return true;
  }


  updateInfo(){
    var uid = firebase.auth().currentUser.uid;
    var existEmail;
    if(this.validateRegister()){

      if(this.ValidateEmail(this.userProfiles.email)){
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
          miles:this.userProfiles.miles,
        }

        this.service.updateProfileInfo(data).then(() => {
          this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
          this.userProfiles = snapshot.val();});
          this.name = this.userProfiles.displayName+ this.userProfiles.lastName;
          this.disableSubmit = false;
          this.buttonText = "Update";
          this.isPicChanged = false;
          this.presentToast('Profile updated successfully!');
 
     }).catch(err => {
       console.log(err)
       this.disableSubmit = false;

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

     
  
        
      
   
      }else{

        this.errorRegisterMessage = 'Please enter a valid email address';
      }

      }
 

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
 
	if(this.errors.indexOf(this.userProfiles.europeResult)>=0){
      this.errorRegisterMessage = 'Please enter gender';
      return false;
    }
	if(this.errors.indexOf(this.userProfiles.birthday)>=0){
      this.errorRegisterMessage = 'Please enter birthday';
      return false;
    }
  if(this.errors.indexOf(this.userProfiles.phone)>=0){
      this.errorRegisterMessage = 'Please enter phone number';
      return false;
    }
    if(this.errors.indexOf(this.userProfiles.profession)>=0){
      this.errorRegisterMessage = 'Please enter profession';
      return false;
    }
    if(this.errors.indexOf(this.userProfiles.miles)>=0){
      this.errorRegisterMessage = 'Please enter miles from their vicinity';
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


}
