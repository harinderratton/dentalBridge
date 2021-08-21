import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service1 } from '../../providers/service1';
import { TranslateService } from '@ngx-translate/core';

import { OfferListPage } from '../offer-list/offer-list';

import { Functions } from '../../providers/functions/functions';
import * as firebase from 'firebase/app';

/**
 * Generated class for the ChangeStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-status',
  templateUrl: 'change-status.html',
})
export class ChangeStatusPage {
	
	jobDetails: any;
	public tech : any = {};
	restaurantName : any;
	currentUser:any;
  constructor(public nav: NavController, public navParam: NavParams, public service: Service1,public translateService: TranslateService, public functions: Functions) {
	  
	  this.tech = navParam.data.tech;
	  this.currentUser = firebase.auth().currentUser;

	  console.log(this.tech);
	  
	  
	    this.restaurantName = {
        "items" : [ {
          
          "id" : "HIRED",
          "name" : "Hired"
		}
		, {
          
          "id" : "PENDING",
          "name" : "Pending"
        }
		
		, {
          
          "id" : "CANCELED",
          "name" : "Canceled"
        }
		]
	  }
	  
	  
  }
  
  
  updateToWorker(category){
	  
	  console.log(category);
	  var type = category.status == 'HIRED' ? '2' : (category.status == 'CANCELED' ? '3' : '4'); // 2- hired, 3- cancelled, 4 - pending
	  
	  this.service.updateToEmployee(category.employer_id,category.id,category);
	  //this.service.saveStatusByOwner(category);
	  
	  this.service.updateToWorkers(category.user_uid,category.id,category);
	  
	  this.service.updateAdminJob(category,category.id);
	  this.functions.showAlert('Success',  'Job has been updated Successfully');

	  var notis_data = {
  		fromId: this.currentUser.uid,
	    toId: category.user_uid,
	    type: type,
	    isRead: '0',
	    data_params: {job : category.name},
	    date: Date.now()
  	  }
  	  this.service.addNotification(notis_data);


	  this.nav.setRoot(OfferListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeStatusPage');
  }

}
