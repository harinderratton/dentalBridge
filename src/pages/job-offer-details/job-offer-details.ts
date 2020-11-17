import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service1 } from '../../providers/service1';
import { TranslateService } from '@ngx-translate/core';

import { ChangeStatusPage } from '../change-status/change-status';

import * as firebase from 'firebase/app';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-job-offer-details',
  templateUrl: 'job-offer-details.html',
})
export class JobOfferDetailsPage {
	images:any = ['.jpeg','.png','.jpg','.gif'];
	docs:any = ['.doc','.docx'];
	jobDetails: any;
	public tech : any = {};
	profession_types:any = ['',' Dental Assistant','Dental Hygienist','Dentist'];
  constructor(public nav: NavController, public navParam: NavParams, public service: Service1,public translateService: TranslateService, private iab: InAppBrowser) {
	  
	  this.jobDetails = navParam.data.locations;
	  
	  console.log(this.jobDetails);
	  
	  console.log(this.jobDetails.id);
	  
	  console.log(this.jobDetails.user_uid);
	  
	  
	   this.service.getJobApplicantDetails(this.jobDetails.id).on('value', snapshot =>{
		
		console.log(snapshot.val());
		this.tech = [];
		
		
		this.tech = snapshot.val();
		
		  
		  console.log(this.tech);
		});
	
	  
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad JobOfferDetailsPage');
  }
  
  changeStatus(tech){ 
	  this.nav.push(ChangeStatusPage, {tech:tech});
  }

  openResume(resume){
  	console.log(resume)
  	// var mime_type = 'image/jpeg';
  	// if(this.images.indexOf(resume) >= 0){
  	// 	mime_type = 'image/jpeg';
  	// }
  	// else if(resume.indexOf('.pdf') >= 0){
  	// 	mime_type = 'application/pdf';
  	// }
  	// else if(this.docs.indexOf(resume) >= 0){
  	// 	mime_type = 'application/msword';
  	// }
  	const browser = this.iab.create(resume);
  }
  
  

}