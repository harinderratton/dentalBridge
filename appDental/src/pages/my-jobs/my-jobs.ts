import { Component , OnInit } from '@angular/core';
import { Service } from '../../providers/service';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';
import { JobDetailsPage } from '../job-details/job-details';
import { AppliedInfoPage } from '../applied-info/applied-info';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-my-jobs',
  templateUrl: 'my-jobs.html',
})
export class MyJobsPage {
responseCame:any=false;
jobList: any;
workedYear:any;
currentUser:any;
worked:any;
public layouticon:any;
public layout:any;
public items: any;

public chats:any = {};

public myJobs: any = {};
public reverseJobs: any = {};

//public locations:any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams,public values:Values, private nativeStorage: NativeStorage, public service: Service, public translateService: TranslateService,public callNumber: CallNumber) {
	  
	  this.myJobs = [];
	  this.reverseJobs = [];
 
	  this.currentUser = firebase.auth().currentUser;
	  this.service.getUserEducationList(this.currentUser.uid).on('value', snapshot =>{
			
		 
			snapshot.forEach( snap =>{
				this.worked = snap.val().worked
			});
					
		 
});
	  
	  this.responseCame = false;
	    this.service.getUserJobList().on('value', snapshot =>{
    
				console.log('snap', snapshot.val());
				this.myJobs = [];
				this.reverseJobs = [];
				
					snapshot.forEach( snap =>{
						 
						this.myJobs.push({
						  id: snap.key,
						  address: snap.val().address,
						  category:snap.val().category,
						  description: snap.val().description,
						  education: snap.val().education,
						  employer_id: snap.val().employer_id,
						  face: snap.val().face,
						  job_id: snap.val().job_id,
						  localdate: snap.val().localdate,
						  maxsalary: snap.val().maxsalary,
						  minsalary: snap.val().minsalary,
						  name: snap.val().name,
						  phone: snap.val().phone,
						  reverseOrder: snap.val().reverseOrder,
						  timeStamp: snap.val().timeStamp,
						  user_uid: snap.val().user_uid,
						  status: snap.val().status,
						  resume: snap.val().resume,
						  whenCanJoin: snap.val().whenCanJoin,
						  confirmEducation: snap.val().confirmEducation,
						  isViewed: snap.val().applicationViewed,
						});  
					  });
					  
					  
					  this.myJobs = this.myJobs.reverse();
					  
					  console.log('this.myJobs', this.myJobs);
					  this.responseCame = true;
					  
		});
		
		this.reverseJobs = this.myJobs;
		 
  }

  

  ionViewDidLoad() {
     
  }
  
    ngOnInit(){		
	  
  }
  
  goToJobDetails(locations){
	  this.navCtrl.push(AppliedInfoPage, {jobDetails:locations,categoryId:locations.job_id});
  }
  
   call(data){
	  
	  
	  this.callNumber.callNumber(data, true)
            .then(() =>{} )
            .catch(() =>{});
  }

  initiateChat(toid){
	
	this.navCtrl.push(MessagesPage, {
		toId: toid,
		mode: 1        
	  });
	
  }

}
