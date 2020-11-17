import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service1 } from '../../providers/service1';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';
// import { AppliedInfoPage } from '../applied-info/applied-info';
import * as firebase from 'firebase/app';

/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-details1',
  templateUrl: 'job-details1.html',
})
export class JobDetails1Page {
	
	
	public id : any;
	public tech : any = {};
	public categoryId: any;  
	public jobDetails: any;
	
   clicked = false;
   
   newClicked : any;

  constructor(public values:Values, private nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams, public service: Service1, public translateService: TranslateService,public callNumber: CallNumber) {
	  
	  console.log(navParams.data.locations);
	  
	  this.id = navParams.data.locations.id;
	  
	  this.categoryId = navParams.data.categoryId;
	  
	  //console.log(this.getFavoriteItem());
	  
	  this.getFavoriteItem();
	  //console.log(this.newClicked);
	  
	  
	  console.log(this.id);
	  console.log(this.categoryId);
	  
	  
	  
	  
  }
  
  
  
   ngOnInit(){ 


  
  
  
	  this.service.getJobDetails(this.id,this.categoryId).on('value', snapshot =>{
		
		console.log(snapshot.val());
		this.tech = [];
		
		//snapshot.forEach( snap =>{
			this.tech.push({
			  id: snapshot.key,
			  face: snapshot.val().face, 
			  name: snapshot.val().name,
			  address: snapshot.val().address,
			  description: snapshot.val().description,
			  phone: snapshot.val().phone,
		  	  maxsalary: snapshot.val().maxsalary,
			  minsalary: snapshot.val().minsalary,  
			  employer_id: snapshot.val().employer_id,
			  experience: snapshot.val().experience,
		  
			});  
		  //});
		  
		  console.log(this.tech);
		});
	
	

     
  }
  
	applyJob(tech){
		console.log(tech);
		
		this.service.applyJob(tech).then( newJob =>{
				   
						   console.log(newJob);
						   
						   this.service.addIdToJob(newJob.key);
						   
						   this.addToJob(newJob.key);
						   
						   					   
                      }); 	
;
		
	}
	
	
	 addToJob(newJobKey){
	  
	  console.log(newJobKey);
	  
	  	this.service.getJobDetail(newJobKey).on('value', (snapshot) => {
		  //this.orderDetails = snapshot.val();
		  //this.addresses = snapshot.val().addresses;
		  //this.newOrderItems = [];
		  
		 // this.newOrderDetails = snapshot.val();
		  //this.newOrderAddresses = snapshot.val().addresses;
		  //this.newOrderItems = snapshot.val().items;
		
		  
		  
		  console.log(snapshot.val());
		  
		  this.jobDetails = snapshot.val();
		
		
		  this.service.addToEmployee(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.uid,this.jobDetails.id,this.jobDetails);
		  
		  this.service.addToWorker(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails);
		  
		  this.service.addToAppliedJob(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails);
		  
		  // this.navCtrl.push(AppliedInfoPage ,{jobDetails: this.jobDetails});
	});
	  
	  
	 // this.nav.setRoot(MyorderPage);	
	}
	
	
	getFavoriteItem(){
		
		this.service.getClickedInfo(this.id).on('value', (snapshot) => {
		  //this.params.data.items = snapshot.val();
		  
		  if(snapshot.val() ==null){
			  this.clicked = false;
			  console.log(this.clicked);
		  }
		  else{
			  console.log(snapshot.val());
			  
			  this.clicked = true;
			  
			  console.log(this.clicked);
			  
			 
		  }

		
		});

		
		console.log(this.clicked);
		
	}
		
  
  ionViewDidLoad() {
	
    console.log('ionViewDidLoad JobDetailsPage');
  }

}

