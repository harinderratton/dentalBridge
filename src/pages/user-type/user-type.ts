import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { Home1Page } from '../../pages/home1/home1';
import * as firebase from 'firebase/app';
@IonicPage()
@Component({
  selector: 'page-user-type',
  templateUrl: 'user-type.html',
})
export class UserTypePage {
  is_loaded:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var self = this;
        setTimeout(function(){
          var is_logged_in = localStorage.getItem('IS_LOGGED_IN');
          if(is_logged_in == '1'){

            var userType = localStorage.getItem('userType');

            if(userType == 'manager'){
              self.navCtrl.setRoot(Home1Page);
            }else{
              self.navCtrl.setRoot(HomePage);
            }
          } else{
            this.is_loaded = true;
          }
 
        },1000);
          
      }
      else{
        this.is_loaded = true;
      }
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserTypePage');
  }

  redirect(page){
    if(page==1){
      this.navCtrl.setRoot(HomePage);
    }

    if(page==2){
      this.navCtrl.setRoot(Home1Page);
    }

  }

}
