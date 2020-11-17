import { Component , OnInit } from '@angular/core';
import { Service } from '../../providers/service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';
import { NotificationsPage } from '../notifications/notifications';
import { JobDetailsPage } from '../job-details/job-details';

@IonicPage()
@Component({
  selector: 'page-savedjob',
  templateUrl: 'savedjob.html',
})
export class SavedjobPage {
	selectedItem:any = 'item1';
	//public locations:any;
	responseCame:any=false;
	public id : any;
	public items: any;
	savedIds:any=[];
	allIds:any=[];
	public locations:any = {};

  constructor(public values:Values, private nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams,public service: Service, public translateService: TranslateService,public callNumber: CallNumber) {
	  
	  
	  this.id = 'all';
	  
	  console.log(this.id);
	  
     this.locations = [];	  
     this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobListPage');
  }
  	goToNotifications()
	{
this.navCtrl.push(NotificationsPage);
	}	
  goToJobDetails(locations){
	  
	  console.log(this.id);
	  
	  this.navCtrl.push(JobDetailsPage, {locations:locations,categoryId:this.id});
  }
  
  
  initializeItems() {
    this.responseCame = false;
    this.service.getSavedJobs().on('value', snapshot1 =>{
     
     console.log('running');
      this.allIds = []
      this.locations= []
      
			snapshot1.forEach( snap1 =>{

        this.allIds.push({
          jobId: snap1.val().jobId,
          id: snap1.val().id,
          snapKey: snap1.key,
          });
      
         
          console.log(snap1.val().jobId)
          this.service.getSingleSavedJob(snap1.val().jobId, snap1.val().user_id).on('value', snap =>{
     
          this.locations.push({
            id: snap.key,
            address: snap.val().address,
            category: snap.val().category,
            description: snap.val().description,
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
            user_id: snap.val().user_id,
            experience: snap.val().experience
            });
          });
       });

     this.responseCame = true;
     })
    }
  
  
  searchItem(ev: any) {
		this.initializeItems();
	 
		console.log(ev);
		let val = ev.target.value;
	 
        if (val && val.trim() != '') {
                this.locations = this.locations.filter((data) => {
				console.log(data);	
                return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
	}
	
	unsaveJob(jobId){
    console.log(this.allIds)
    console.log(jobId)
		var id;
		var snapKey;
		 for(let key of this.allIds){

			if(key.jobId == jobId){
				id = key.id;
				snapKey = key.snapKey;
        this.service.removeSavedJobs(id, snapKey);
        if(this.allIds.length==0){
          this.locations= []
        }
				break;
			}
     } 
	}

}

