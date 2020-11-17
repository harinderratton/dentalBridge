import { Component , OnInit } from '@angular/core';
import { Service } from '../../providers/service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';
import { AppliedInfoPage } from '../applied-info/applied-info';
import { Functions } from '../../providers/functions/functions';
import firebase from 'firebase';
import { LoadingController, AlertController} from 'ionic-angular';


/**
 * Generated class for the AddDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-description',
  templateUrl: 'add-description.html',
})
export class AddDescriptionPage {
	selected:any;
	public id : any;
	public items: any;
	errors:any= ['', null, undefined]
	public locations:any = {};
	selectedFile: any;
	public dataLocation: any;
	public currentUserAddress: any;
	public description: any;
	presentLoader:any;
	public jobDetails: any;
	downloadURL: any;
	disableSubmit: any;
	public currentUser: any;
	userProfiles: any = null;
	isError:any;
	isResume:any;
	public form: any= {};

  constructor(
			public values:Values,
			private nativeStorage: NativeStorage,
			public navCtrl: NavController,
			public navParams: NavParams,
			public service: Service, 
			public translateService: TranslateService,
			public callNumber: CallNumber, 
			public functions: Functions,
			public loadingController: LoadingController,
			public loadingCtrl: LoadingController
		) {
	   //this.id = navParams.data.category.id;
	  
	  this.dataLocation = navParams.data.dataLocation;
	  console.log('this.dataLocationthis.dataLocation',this.dataLocation);
	  this.currentUserAddress = navParams.data.currentUserAddress;
	  
	  console.log(this.dataLocation);
	  
	  console.log(this.currentUserAddress);
	  
	  this.currentUser = firebase.auth().currentUser;
      
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();

      });
	  
	  console.log(' this.userProfiles this.userProfiles this.userProfiles', this.userProfiles);  
  }
  
  
  finish(){

       if(this.isResume){
        this.isError = false;
       this.form.description = 'I am applying to this job';
	   if(this.form.description != undefined && this.errors.indexOf(this.downloadURL)==-1){
		   
		   this.currentUserAddress.userComment = this.form.description;

		   console.log('this.dataLocation[0].experiencethis.dataLocation[0].experience',this.dataLocation[0].experience);
			 
				this.service.applyJob(this.dataLocation[0], this.currentUserAddress, this.downloadURL).then( newJob =>{
				   
						   console.log('line no 97',newJob);
						   
						   this.service.addIdToJob(newJob.key);
						   
						   this.addToJob(newJob.key); 					   
                      }); 
			 
		 }

	   }else{
		this.isError = true;
	   }

	  
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

		  console.log('130000000', this.jobDetails.experience)

		//   console.log(this.jobDetails);
		//   return;
		
		
		 
		// this.service.addToEmployee(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails, this.userProfiles, this.downloadURL);
		  
		// this.service.addToEmployee(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails, this.userProfiles, this.downloadURL);


		this.service.addToEmployee(this.jobDetails.employer_id,this.jobDetails.job_id, this.jobDetails.uid, this.jobDetails.id, this.jobDetails, this.userProfiles, this.downloadURL);

		//   this.service.addToWorker(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails, '9815393101', this.userProfiles.miles, this.userProfiles.profession, '5 yers', this.downloadURL);
 
		  this.service.addToWorker(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails, this.userProfiles, this.downloadURL);


		//   this.service.addToAppliedJob(this.jobDetails.employer_id, this.jobDetails.job_id, this.jobDetails.id, this.jobDetails, this.userProfiles.phone, this.userProfiles.miles, this.userProfiles.profession, this.downloadURL);
		  

		  this.service.addToAppliedJob(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails,  this.userProfiles, this.downloadURL);


		  this.functions.showAlert('Success',  'You have successfully send your resume to Employeer');

		  var notis_data = {
		 	fromId: this.currentUser.uid,
			 toId: this.dataLocation[0].user_id,
			 type: 1,
			 isRead: '0',
			 data_params: {job : this.dataLocation[0].name, city : this.dataLocation[0].address},
			 date: Date.now()
			 }

			 this.service.addNotification(notis_data);


		  
		  this.navCtrl.setRoot(AppliedInfoPage ,{jobDetails: this.jobDetails});
	});
	  
	  
	 // this.nav.setRoot(MyorderPage);	
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDescriptionPage');
  }

  onChange(event){
    this.selectedFile = event.target.files[0];
    this.disableSubmit = true;
    this.upLoad();
  }
  

  upLoad(){
	this.isError = false;
	this.presentLoadingDefault('Uploading...');
    var fileName = this.selectedFile.name;

    var storageRef = firebase.storage().ref('Products Image/' + fileName);

    var metadata = { contentType: 'image/jpeg'};

    var uploadTask = storageRef.put(this.selectedFile, metadata);

    uploadTask.on('state_changed', (snapshot) =>{

      console.log(snapshot);

      var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100 ;

        console.log('upload' + progress + '% done' );

        switch(uploadTask.snapshot.state){
          case firebase.storage.TaskState.PAUSED:   // or Paused
          console.log('upLoad is paused');
          break;

          case firebase.storage.TaskState.RUNNING:   // OR Running
          console.log('upload is running');
          break;

        }

      }, (error) =>  {
		  console.log(error);
		  this.presentLoader.dismiss()

        },() =>{
			this.isResume = true;
			this.downloadURL = uploadTask.snapshot.downloadURL;
			this.disableSubmit = false;
			console.log(this.downloadURL);
			console.log('success');
			this.selected= true;
			this.presentLoader.dismiss()
        });

  }


  presentLoadingDefault(msg) {
	this.presentLoader = this.loadingCtrl.create({
	   content:msg
	 });
	 this.presentLoader.present();
   }

}
