import { Component, NgZone, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Auth1 } from '../../providers/auth1';
import { LoadingController, AlertController, ToastController} from 'ionic-angular';
// import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service1 } from '../../providers/service1';
import { TranslateService } from '@ngx-translate/core';

// import { EducationPage } from '../education/education';
// import { EducationListPage } from '../education-list/education-list';
// import { PasswordPage } from '../password/password';

import * as firebase from 'firebase/app';
  
/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile1',
  templateUrl: 'myprofile1.html',
})
export class Myprofile1Page {
  presentLoader:any;
	profiletab: string = "Basic";
  isAndroid: boolean = false;
		error: any;
	  zone: NgZone;
	  form: any; 
    selectedFile: any;
	  userProfile: any = null;
	  public isLoggedIn: boolean = false;
	  customerList:any;
	  public currentUser: any;
	  userProfiles: any = null;
	  role: any;
	  errorRegisterMessage: any;
    errorSigninMessage: any;
	  errorPassMessage: any;
    disableRegister: boolean = false;
	  disablePassBtn: boolean = false;
	  disableLogin: boolean = false;
	  signup: boolean = false;
	  _showSignup: boolean = false;
    buttonText: any = "Edit Profile";
	  buttonTextPass: any = "Change Password";
	  HeaderText: any ="Login";
    new_password:any;
	  confirm_password:any;
	  params:any ={};
    errors:any=['',null,undefined];
    newPassword: any;
    confirmPassword: any;
    passwordError: any;
    oldPassword: any;
    isEdit:boolean = false;
    isFacebook: boolean = false;
  constructor(public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth1, public loadingCtrl: LoadingController,
    //  private fb: Facebook, 
     public alertCtrl:AlertController, public values:Values,  public service: Service1,public translateService: TranslateService, private toastCtrl: ToastController) {
	  
	    
	   this.currentUser = firebase.auth().currentUser;

    if(this.values.isLoggedIn){
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
       this.isFacebook = this.userProfiles.facebook;
      });
    } 

	console.log(this.userProfiles);

    this.form = {};
    this.auth = auth;
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});
  }


  editProfile(){
    this.isEdit = !this.isEdit
    if(this.isEdit) this.buttonText = "Update Profile";
    else this.buttonText = "Edit Profile";
 }

 cancel(){
   this.isEdit = !this.isEdit
   if(this.isEdit) this.buttonText = "Update Profile";
   else this.buttonText = "Edit Profile";
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
    // this.nav.push(EducationPage, item)
  }

  myOrder(){ 
   // this.nav.push(MyorderPage);
   // this.nav.push(EducationListPage);
  }
  
  
  goToPassword(){
   // this.nav.push(MyorderPage);
   // this.nav.push(PasswordPage);
  }
  
  changePassword(){
	  if(this.errors.indexOf(this.new_password) >= 0){
      this.errorPassMessage = "Please enter new password";
      return false;
    }
    if(this.errors.indexOf(this.confirm_password) >= 0){
      this.errorPassMessage = "Please enter confirm password";
      return false;
    }
    if(this.new_password != this.confirm_password){
      this.errorPassMessage = "New and confirm passwords should be same.";
      return false;
    }
    this.errorPassMessage = '';
    this.disablePassBtn = true;
    this.buttonTextPass = 'Updating...';
    var self = this;

    firebase.auth().currentUser.updatePassword(this.new_password).then(function(ok) {
      self.disablePassBtn = false;
      self.buttonTextPass = 'Change Password';
      self.new_password = "";
      self.confirm_password = "";
      self.presentToast("Password updated successfully!");
    }, function(error) {
      self.disablePassBtn = false;
      self.buttonTextPass = 'Change Password';
      // self.presentToast("Error while updating password. Please try later!");
      self.handleRegisterError(error);
    });
	  
  }

  updateProfile(){
    if(this.validateRegister()){
      this.disableRegister = true;
      this.buttonText = "Updating...";
      this.auth.updateProfile(this.currentUser.uid,this.userProfiles)
      .then((response) => {
        this.currentUser = firebase.auth().currentUser;
        this.disableRegister = false;
        this.isEdit = !this.isEdit
        if(this.isEdit) this.buttonText = "Update Profile";
        else this.buttonText = "Edit Profile";
        this.presentToast('Profile updated successfully!');
      }).catch(err => {this.handleRegisterError(err)});
    }
  }

  handleRegisterError(err){
    this.errorRegisterMessage = err.message;
    this.disableRegister = false;
    this.buttonText = "Update";
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  
  goToAddresses(){
	  //this.nav.push(EducationListPage);
  }
  
  validateRegister(){
    if(this.userProfiles.displayName == undefined || this.userProfiles.displayName == ''){
      this.errorRegisterMessage = 'Please enter first name';
      return false;
    }
    if(this.userProfiles.lastName == undefined || this.userProfiles.lastName == ''){
      this.errorRegisterMessage = 'Please enter last name';
      return false;
    }
    if(this.userProfiles.email == undefined || this.userProfiles.email == ''){
      this.errorRegisterMessage = 'Please enter email';
      return false;
    }
    if(this.userProfiles.phone == undefined || this.userProfiles.phone == ''){
      this.errorRegisterMessage = 'Please enter phone number';
      return false;
    }
    if(this.userProfiles.company == undefined || this.userProfiles.company == ''){
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  presentLoadingDefault(msg) {
    this.presentLoader = this.loadingCtrl.create({
       content:msg
     });
     this.presentLoader.present();
   }

  onChange(event){
    this.selectedFile = event.target.files[0];
    this.presentLoadingDefault('Uploading....');
    this.disableRegister = true;
    this.upLoadImg();
  }

  upLoadImg(){

    // Create a root reference
    var fileName = this.selectedFile.name;
    var metadata = { contentType: 'image/jpeg'};
    var storageRef = firebase.storage().ref('/images/' + fileName);
  
    var uploadTask = storageRef.put(this.selectedFile, metadata);

      uploadTask.on('state_changed', (snapshot) => {
        console.log(snapshot);
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (uploadTask.snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      // Handle unsuccessful uploads
      this.presentLoader.dismiss();
    },() => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     this.userProfiles.photoURL = uploadTask.snapshot.downloadURL;
        this.disableRegister = false;
        console.log(this.userProfiles.photoURL);
      console.log("successful");
      this.presentLoader.dismiss();
    });
  }
  




  changePassword1(form){

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
  


}

