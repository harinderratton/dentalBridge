import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';

import { AppliedInfoPage } from '../applied-info/applied-info';
import { ChooseEduPage } from '../choose-edu/choose-edu';
import { SavedjobPage } from '../savedjob/savedjob';
import firebase from 'firebase';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';
/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {
	
	
	public id : any;
	public tech : any = {};
	public categoryId: any;
	public jobDetails: any;
	is_loaded:any=false;
    clicked:boolean = true;
   
   newClicked : any;

  constructor(private admobFree: AdMobFree, public values:Values, private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, public service: Service, public translateService: TranslateService,public callNumber: CallNumber) {
	// this.showInterstitialAds();
	// this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
		 
	// 	this.runAgain();
	//  });


	  console.log(navParams.data.locations);
	  
	  this.id = navParams.data.locations.id;
	  
	  this.categoryId = navParams.data.categoryId;
	  
	  //console.log(this.getFavoriteItem());
	  
	  this.getFavoriteItem();
	  //console.log(this.newClicked);
	  
	  
	  console.log(this.id);
	  console.log(this.categoryId);
	  
	  
	  
	  
  }
  
  goToSavedJob()
  {
	  this.navCtrl.push(SavedjobPage);
  }
  
   ngOnInit(){


  
  
  
	  this.service.getJobDetails(this.id,this.categoryId).on('value', snapshot =>{
		
		console.log(snapshot.val());
		this.tech = [];
		
		//snapshot.forEach( snap =>{
			this.tech.push({
				id: snapshot.key,
				address: snapshot.val().address,
				category: snapshot.val().category,
				description: snapshot.val().description,
				employer_id: snapshot.val().employer_id,
				face: snapshot.val().face,
				job_id: snapshot.val().job_id,
				localdate: snapshot.val().localdate,
				maxsalary: snapshot.val().maxsalary,
				minsalary: snapshot.val().minsalary,
				name: snapshot.val().name,
				phone: snapshot.val().phone,
				reverseOrder: snapshot.val().reverseOrder,
				timeStamp: snapshot.val().timeStamp,
				user_id: snapshot.val().user_id,
				experience: snapshot.val().experience,
			});  
		  //});
		  
		  console.log(this.tech);
		  this.is_loaded = true;
		});
	
	

     
  }
  
	applyJob(tech){
	 
		this.navCtrl.push(ChooseEduPage ,{jobDetails: this.tech});
		
		/*
		this.service.applyJob(tech).then( newJob =>{
				   
						   console.log(newJob);
						   
						   this.service.addIdToJob(newJob.key);
						   
						   this.addToJob(newJob.key);
						   
						   					   
                      }); 	
					  */
		
	}
	
	
	 addToJob(newJobKey){
	  
	 
	  	this.service.getJobDetail(newJobKey).on('value', (snapshot) => {
			console.log('harinder singh',snapshot.val());
			
		  //this.orderDetails = snapshot.val();
		  //this.addresses = snapshot.val().addresses;
		  //this.newOrderItems = [];
		  
		 // this.newOrderDetails = snapshot.val();
		  //this.newOrderAddresses = snapshot.val().addresses;
		  //this.newOrderItems = snapshot.val().items;
		
		  
		  
		 
		  
		  this.jobDetails = snapshot.val();
		
		
		  this.service.addToEmployee(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.uid,this.jobDetails.id,this.jobDetails,"","", '', '', '');
 
		  this.service.addToWorker(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails,'','','','','');
		  
		  this.service.addToAppliedJob(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails, '','', '', '', '');
		  
		  this.navCtrl.push(AppliedInfoPage ,{jobDetails: this.jobDetails});

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
  
  
   call(data){
	  
	  console.log(data);
	  this.callNumber.callNumber(data, true)
            .then(() =>{} )
            .catch(() =>{});
  }


  showInterstitialAds(){
	let interstitialConfig: AdMobFreeInterstitialConfig = {
		isTesting: true,  
		autoShow: true,
		id: "ca-app-pub-3940256099942544/8691691433"
	};
	this.admobFree.interstitial.config(interstitialConfig);
	this.admobFree.interstitial.prepare().then(() => {

	}).catch(e => {

	});


}

runAgain(){
	
	setTimeout(() => { 

	  this.showInterstitialAds();

	}, 180000);
}

}
