import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service1 } from '../../providers/service1';
import { TranslateService } from '@ngx-translate/core';

import { ChangeStatusPage } from '../change-status/change-status';

import * as firebase from 'firebase/app';

import {  NgZone, ViewChild } from '@angular/core';

import { Nav } from 'ionic-angular';

import { Auth1 } from '../../providers/auth1';
import { LoadingController, AlertController} from 'ionic-angular';
// import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';

import { Functions } from '../../providers/functions/functions';




/**
 * Generated class for the ViewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
	
	jobDetails: any;
	public tech : any = {};
	userProfiles: any = null;
	profession_types:any = ['',' Dental Assistant','Dental Hygienist','Dentist'];
  constructor(public nav: NavController, public navParam: NavParams, public functions: Functions, public auth: Auth1, public loadingCtrl: LoadingController,
	//  private fb: Facebook, 
	 public alertCtrl:AlertController, public values:Values,  public service: Service1,public translateService: TranslateService) {
	  
	  this.jobDetails = navParam.data.tech;
	  
	  console.log(this.jobDetails);
	  
	   this.service.getUserProfile(this.jobDetails.user_uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
	   
	   console.log(this.userProfiles);
	   

      });
	  
	  
	  	   console.log(this.userProfiles);
	  
	  //console.log(this.jobDetails.id);
	  
	 // console.log(this.jobDetails.user_uid);
	  
  }

  ionViewDidLoad() {
   
	  
  }

}
