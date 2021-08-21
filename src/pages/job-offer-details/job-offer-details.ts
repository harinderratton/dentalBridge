import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service1 } from '../../providers/service1';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';

import { ChangeStatusPage } from '../change-status/change-status';
import * as firebase from 'firebase/app';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Printer, PrintOptions } from '@ionic-native/printer';
declare var window: any; 


@IonicPage()
@Component({
  selector: 'page-job-offer-details',
  templateUrl: 'job-offer-details.html',
})
export class JobOfferDetailsPage {
	public cord: any = window; 
	images:any = ['.jpeg','.png','.jpg','.gif'];
	docs:any = ['.doc','.docx'];
	jobDetails: any;
	public tech : any = {};
	profession_types:any = ['',' Dental Assistant','Dental Hygienist','Dentist'];
  constructor( public printer: Printer,
	  public Service1: Service, public nav: NavController, public navParam: NavParams, public service: Service1,public translateService: TranslateService, private iab: InAppBrowser) {
	  
	this.jobDetails = navParam.data.locations;

	console.log(this.jobDetails);

	console.log(this.jobDetails.id);

	var myID = firebase.auth().currentUser.uid;
	  
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


  markReviewd(){
	  
	this.tech.applicationViewed = true

	setTimeout(() => {
		this.Service1.markAsChecked(this.tech, this.jobDetails.id)
	}, 100);

	
	console.log(this.tech)
	 
  }

 
  print() {


		let options: PrintOptions = {
			name: this.tech.education.displayName,
			printerId: 'printer007',
			duplex: true,
			landscape: true,
			grayscale: true,
		};

		var content =  
		'Job: '+ this.tech.name+'\n'+
		'Name: '+ this.tech.education.displayName+'\n'+
		'DOB: '+ this.tech.education.birthday+'\n'+
		'Gender: '+ this.tech.education.europeResult+'\n'+
		'email: '+ this.tech.education.email+'\n'+
		'Experience: '+ this.tech.education.worked+'\n'+
		'Available On: '+ this.tech.whenCanJoin+'\n'+
		'University Started on: '+ this.tech.education.started+'\n'+
		'University Finished on: '+ this.tech.education.finished+'\n'

	 
		this.printer.print(content, options).then(onSuccess, onError);

			function onSuccess(succ){
				console.log(succ)
			}

			function onError(error){
				console.log(error)
			}

	}
}