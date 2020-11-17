import { Component , OnInit } from '@angular/core';
import { Service1 } from '../../providers/service1';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';

import { JobDetailsPage } from '../job-details/job-details';

import { JobOfferDetailsPage } from '../job-offer-details/job-offer-details';

import { ViewProfilePage } from '../view-profile/view-profile';

/**
 * Generated class for the OfferListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-list',
  templateUrl: 'offer-list.html',
})
export class OfferListPage {
	
	public id : any;
	public items: any;
	userProfiles: any = null;
	
	public locations:any = {};
	
	public jobList:any = {};
	is_loaded:boolean=false;
  constructor(public values:Values, private nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams,public service: Service1, public translateService: TranslateService,public callNumber: CallNumber) {
	  
	//  this.id = navParams.data.category.id;
	  
	//  console.log(this.id);
	  
	  
	   this.locations = [];
	   
	   this.jobList = [];
	  
	  //console.log(this.params.data.items);
	  
	  
	    this.service.getJobApplicants().on('value', snapshot =>{
  		//this.productsList = [];
		this.locations = [];

  		snapshot.forEach( snap =>{
							this.locations.push({
					  
								id: snap.key,
								address: snap.val().address,
								category: snap.val().category,
								description: snap.val().description,
								education: snap.val().education,
								employer_id: snap.val().employer_id,
								face: snap.val().face,
								job_id: snap.val().job_id,
								localdate: snap.val().localdate,
								maxsalary : snap.val().maxsalary,
								minsalary : snap.val().minsalary,
								name: snap.val().name,
								phone: snap.val().phone,
								reverseOrder: snap.val().reserseOrder,
								status: snap.val().status,
								timeStamp: snap.val().timeStamp,
								user_uid: snap.val().user_uid,
								//photoURL: this.userProfiles.photoURL,

								});
								
	
  		});
		
		this.locations = this.locations.reverse();
		console.log(this.locations);
		
		console.log(this.userProfiles);
		var self = this;
		setTimeout(function(){
			self.is_loaded = true;
		},1000);
  	});
}

jobOfferDetails(locations){
	 this.navCtrl.push(JobOfferDetailsPage, {locations:locations});
}

goToProfile(tech){
	  this.navCtrl.push(ViewProfilePage, {tech:tech});
  }


}
