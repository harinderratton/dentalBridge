import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Auth } from '../../providers/auth';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  email:any;
  error:any;
  errorMsg:any;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public auth: Auth
     ) {
  }
homepage(){
   this.navCtrl.setRoot(HomePage);
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  forgotNow(){ 
    this.error = false;
    if(this.ValidateEmail(this.email)){
      this.error = false;
    
   this.auth.forgotPass(this.email).then((result) =>{
    this.error = true;
    this.errorMsg = 'A link has been sent to your email address to reset password.'
    this.email ='';
    }).catch((error) =>{
      this.error = true;
      this.errorMsg = 'We did not find any account associated with this email.'
    });
    
     
 }else{
      this.error = true;
      this.errorMsg = 'Please enter a valid email address.'
    }
  }

   ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
     
    return (false)
}


}
