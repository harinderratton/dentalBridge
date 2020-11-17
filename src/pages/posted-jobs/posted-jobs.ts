import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Service1 } from '../../providers/service1';
import { LoadingController, AlertController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';
import { Functions } from '../../providers/functions/functions';
import { JobDetails1Page } from '../job-details1/job-details1';
import { EditJobPage } from '../edit-job/edit-job';
import { AddJobPage } from '../add-job/add-job';
 

@IonicPage()
@Component({
  selector: 'page-posted-jobs',
  templateUrl: 'posted-jobs.html',
})
export class PostedJobsPage {
	
	public id : any;
	public items: any;
	
	public locations:any = {};
  is_loaded:boolean=false;
  constructor(public values:Values, private nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams,public service: Service1, public translateService: TranslateService,public callNumber: CallNumber,public functions: Functions) {
 

 // this.id = navParams.data.category.id;
	  
	//  console.log(this.id);
	  
	  
	   this.locations = [];
	  
	  //console.log(this.params.data.items);
	  
	  this.service.getJobsByCategorized().on('value', snapshot =>{
      console.log(snapshot)
  		//this.productsList = [];
		this.locations = [];

  		snapshot.forEach( snap =>{
  			this.locations.push({
          
  			id: snap.key,
			face: snap.val().face,
			name: snap.val().name,
			category: snap.val().category,
			address: snap.val().address,
			description: snap.val().description,
			employer_id: snap.val().employer_id,
			job_id: snap.val().job_id,
			localdate: snap.val().localdate,
			maxsalary: snap.val().maxsalary,
			minsalary: snap.val().minsalary,
			phone: snap.val().phone,
			reverseOrder: snap.val().reverseOrder,
			timeStamp: snap.val().timeStamp,
      user_id: snap.val().user_id,
			experience: snap.val().experience,
      company: snap.val().company,
      email: snap.val().email,
      is_recruiter: snap.val().is_recruiter,
      company_size: snap.val().company_size,
      qualification: snap.val().qualification,
      poster: snap.val().poster,
      lat: snap.val().lat,
      lng: snap.val().lng

  			});
  		});
		
		this.locations = this.locations.reverse();
		console.log(this.locations);
    var self = this;
    setTimeout(function(){
      self.is_loaded = true;
    },1000);
  	});
	  
	 
	  /**
	  this.locations = [{
            id: 0,
            name: 'IT job',
            lastText: 'You on your way?',
            face: 'assets/img/glasses.jpg',
            price:'420',
            discout:'30%'
          }, {
            id: 1,
            name: 'Manager',
            lastText: 'Hey, it\'s me',
            face: 'assets/img/cam.jpg',
            price:'400',
            discout:'10%'
          }, {
            id: 2,
            name: 'Waiter',
            lastText: 'I should buy a boat',
            face: 'assets/img/guitar.jpg',
            price:'320',
            discout:'20%'
          }, {
            id: 3,
            name: 'Software Engineer',
            lastText: 'Look at my mukluks!',
            face: 'assets/img/glasses.jpg',
            price:'350',
            discout:'15%'
          }, {
            id: 4,
            name: 'Chef',
            lastText: 'This is wicked good ice cream.',
            face: 'assets/img/cam.jpg',
            price:'260',
            discout:'25%'
          }];
		  */
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobListPage');
  }
     goToAddJob(){
	  this.navCtrl.push(AddJobPage);
  }
  goToJobDetails(locations){
	  
	  
	  
	  this.navCtrl.push(JobDetails1Page, {locations:locations,categoryId:locations.category});
  }
  
  edit(locations){
	  console.log("Edit job");
	  this.navCtrl.push(EditJobPage, {locations:locations});
  }
  
  deleteJob(locations){
	  console.log("Delete job");
	  
	  this.service.deleteJob(locations)
      .then(() => {
       // this.nav.pop();     
	   
	   this.functions.showAlert('Success',  'Your job has been deleted Successfully');
	     // this.navCtrl.push(ListPage);
      });
  }
  
  
  initializeItems() {
	   
	   
	   /**
	   this.locations = [{
            id: 0,
            name: 'IT job',
            lastText: 'You on your way?',
            face: 'assets/img/glasses.jpg',
            price:'420',
            discout:'30%'
          }, {
            id: 1,
            name: 'Manager',
            lastText: 'Hey, it\'s me',
            face: 'assets/img/cam.jpg',
            price:'400',
            discout:'10%'
          }, {
            id: 2,
            name: 'Waiter',
            lastText: 'I should buy a boat',
            face: 'assets/img/guitar.jpg',
            price:'320',
            discout:'20%'
          }, {
            id: 3,
            name: 'Software Engineer',
            lastText: 'Look at my mukluks!',
            face: 'assets/img/glasses.jpg',
            price:'350',
            discout:'15%'
          }, {
            id: 4,
            name: 'Chef',
            lastText: 'This is wicked good ice cream.',
            face: 'assets/img/cam.jpg',
            price:'260',
            discout:'25%'
          }];
		  */
		  
		  this.service.getJobsByCategory(this.id).on('value', snapshot =>{
  		//this.productsList = [];
		this.locations = [];

  		snapshot.forEach( snap =>{
  			this.locations.push({
          
  			id: snap.key,
			face: snap.val().face,
			name: snap.val().name,

  			});
  		});
		
		this.locations = this.locations.reverse();
		console.log(this.locations);
  	});
	   
	   
	   this.items = this.locations;
	   
	  /**
	   this.service.getRestaurantsList().on('value', snapshot =>{
    
	console.log(snapshot.val());
    this.params.data.items = [];
    
		snapshot.forEach( snap =>{
			this.params.data.items.push({
			  id: snap.key,
			  title: snap.val().title,
			  subtitle:  snap.val().info,
			  backgroundImage: snap.val().firebase_url,
			  icon: "ios-arrow-dropright",
			  iconText: "ReadMore",
			  phonenumber: snap.val().phonenumber,
			  lat: snap.val().lat,
			  long: snap.val().long,
			  description: snap.val().info,
			  firebase_url:snap.val().firebase_url,
			  address:snap.val().address,
			  category:snap.val().category,
			  images:snap.val().image,
			  img: snap.val().img,
			  info: snap.val().info,
			  mark: snap.val().mark,
			  option: snap.val().option,
			  outlet: snap.val().outlet,
			  market:true,
			});  
		  });
		  
		  console.log(this.params.data.items);
		});
	  
        this.items = this.params.data.items;
		*/
    }
  
  
  searchItem(ev: any) {
		this.initializeItems();
	   
	   console.log(this.items);
	   console.log(ev);
	   
        let val = ev.target.value;
		
		console.log(val);
		
        if (val && val.trim() != '') {
			
            this.locations = this.items.filter((data) => {
				
				console.log(data);
				
                return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }


}
