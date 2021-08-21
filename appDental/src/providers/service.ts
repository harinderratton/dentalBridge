import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs/Observable";
import firebase from 'firebase';
import { Config } from './config';
import { URLSearchParams } from '@angular/http';
import { ListPage } from '../pages/list/list';
import { NavParams, IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {
  //setting: any;
  errors:any = ['', null, undefined];
  product_id: Array<number> = [];
  url: any;
  cart: any;
  params:any;
  orderLists: any;
  public ref: any;  
  productsList:any;
  customerList: any;
  public orderList: any;

  public profilePictureRef: any; 
  public currentUser: any;
  public user: any;
  public restaurants: any;
  public restaurantCategory: any;
  public category: any;
  public items: any;
  public restaurantItems: any;
  public itemDetails: any;
  public restaurantUserInfo: any;
  public favoriteItem: any;
  public favoriteItemList: any;
  public userAddressList: any;
  public cord: any;
  public cityName: any;
  public cityDistrictName: any;
  public streetName: any;
  public apartmentOfficeName: any;
  public myCart: any;
  public extraOptions: any;
  public extra: any;
  public tableOrders: any;
  public tableAdminOrders: any;
  public paypalConfiguration: any;
  public categorizedOrders: any;
  public ads: any;
  
  public cityRestaurants: any;
  
  
  public jobCategory: any;
  public jobsByCategory: any;
  public jobDetails: any;
  
  
  public jobCategoryName: any;
  public educationName: any;
  public startedYear: any;
  public finishedYear: any;
  public workedYear: any;
  public userEducationList: any
  
  public applyJobs: any;
  public employeeJob: any;
  public workerJob: any;
  public appliedJob: any;
  public savedJobs: any;
  public Notifications: any;
  public chat: any;
  public inbox: any;
  notisLists:any;
  allJobList:any;
  total: number = 0;
  proqty: Array<number> = [];
  getSecKey: any;
  users: any;

  constructor(public http: Http, private config: Config) {

    this.url = this.config.url;
    this.cart = { "line_items": [],
	"extraOptions": [] };
    this.currentUser = firebase.auth().currentUser;

	this.orderList = firebase.database().ref('/orders'); 
	this.allJobList = firebase.database().ref('/allJobList');
	this.restaurants = firebase.database().ref('/restaurants');
	this.restaurantCategory = firebase.database().ref('/category');
	this.items = firebase.database().ref('/items');
	this.restaurantUserInfo = firebase.database().ref('/users');
	this.cord = firebase.database().ref('/cord');
	this.cityName = firebase.database().ref('/city');
	this.cityDistrictName = firebase.database().ref('/districts');
	this.streetName = firebase.database().ref('/streets');
	this.apartmentOfficeName = firebase.database().ref('/apartments');
	this.myCart = firebase.database().ref('/mycart');
	this.extraOptions = firebase.database().ref('/extraOptions');
	this.extra = firebase.database().ref('/extra');
	this.tableOrders = firebase.database().ref('/tableOrders');
	this.tableAdminOrders = firebase.database().ref('/AllTableOrders');
	this.paypalConfiguration = firebase.database().ref('/paypal');
	this.categorizedOrders = firebase.database().ref('/categorizedOrders');
	this.Notifications = firebase.database().ref('/notifications'); 
	this.ads = firebase.database().ref('/ads'); 

	/**************New job application*********/
	
	this.jobCategory = firebase.database().ref('/jobCategory');

	this.chat = firebase.database().ref('/chat');

	this.jobCategoryName = firebase.database().ref('/jobCategoryName');
	
	this.educationName = firebase.database().ref('/educationName');
	
	this.startedYear = firebase.database().ref('/startedYear');
	
	this.finishedYear = firebase.database().ref('/finishedYear');
	
	this.workedYear = firebase.database().ref('/workedYear');
	
	this.applyJobs = firebase.database().ref('/applyJobs');
	
	this.employeeJob = firebase.database().ref('/employeeJob');
	
	this.workerJob = firebase.database().ref('/workerJob');
	
	this.appliedJob = firebase.database().ref('/appliedJob');

	this.savedJobs = firebase.database().ref('/savedJobs');

  }


  getNotifications(){
	var uid = firebase.auth().currentUser.uid;
		 this.notisLists =  this.Notifications.orderByChild("toId").equalTo(uid);
		 return this.notisLists;
	 }
   

   addNotification(data){
	   return this.Notifications.push(data);
	 }


   addProfileImage(downloadURL:any){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
    return this.restaurantUserInfo.child(uid).update({

     photoURL: downloadURL,

    });
  }
  
  getClickedInfo(id){
	    
	  var uid = firebase.auth().currentUser.uid;
	  
	 this.favoriteItem = this.appliedJob.child(uid).child(id);
	 return this.favoriteItem;
  }
  
  getUserJobList(){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.workerJob.child(uid);
  }


  markAsChecked(employee_id:any, post_id:any){

	var uid = firebase.auth().currentUser.uid;
	this.workerJob.child(employee_id.user_uid).child(post_id).update({"applicationViewed": true});
	return this.employeeJob.child(uid).child(post_id).update(employee_id);

  }
  
//   addToAppliedJob(employee_id,job_id,post_id,jobDetails, phone, miles, profession, resume){
// 	  var uid = firebase.auth().currentUser.uid;
	  
    
// 		console.log(jobDetails);
		
// 		return this.appliedJob.child(uid).child(job_id).set({
// 	          clicked: true,	  
// 			  user_uid:uid,
// 			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
// 			  reverseOrder: 0 - Date.now(),
// 			  miles: miles,
// 			  profession: profession,
// 			  user_phone: phone,
// 			  experience: jobDetails.experience,
// 			  resume: resume
// 		});
//   }

  addToAppliedJob(employee_id, job_id, post_id,jobDetails, profile:any, resume:any, confirmEducation, experience, whenCanJoin){
	var uid = firebase.auth().currentUser.uid;
	
  
	  console.log(jobDetails);
	  
	  return this.appliedJob.child(uid).child(job_id).set({
			clicked: true,	  
			user_uid:uid,
			timeStamp: firebase.database.ServerValue.TIMESTAMP,
			reverseOrder: 0 - Date.now(),
			miles: this.errors.indexOf(profile.miles) == -1 ? profile.miles : null,
			profession:  this.errors.indexOf(profile.profession) == -1 ? profile.profession: null,
			user_phone:  this.errors.indexOf(profile.phone) == -1 ? profile.phone : null,
			experience:  this.errors.indexOf(jobDetails.experience) == -1 ? jobDetails.experience : null,
			resume: resume,
			// experience: experience,
			confirmEducation: confirmEducation,
			whenCanJoin: whenCanJoin,
			applicationViewed: false

	  });
}


  addToChat(toId, fromId, roomId, message){

	  return this.chat.push({
		toId:toId,
		fromId:fromId,
		roomId:roomId,
		message:message,
		date: Date.now(),
		isRead: 1
	  });
}
  
//   addToWorker(employee_id,job_id,post_id,jobDetails , phone, miles, profession, experience){
// 	addToWorker(job_id, post_id, jobDetails, phone, miles='', profession='', experience='', resume){
// 	  var uid = firebase.auth().currentUser.uid;
	  
    
// 		console.log(jobDetails);
		
// 		return this.workerJob.child(uid).child(post_id).set({
 
// 			  address: jobDetails.address,
// 			  category: jobDetails.category,
// 			  description: jobDetails.description,
// 		      employer_id: jobDetails.employer_id,
// 			//   face:jobDetails.face,
// 			  job_id: job_id,
// 			  id: post_id,
// 			  localdate: jobDetails.localdate,
// 			  maxsalary: jobDetails.maxsalary,
// 			  minsalary: jobDetails.minsalary,
// 			  phone: jobDetails.phone,
// 			  name: jobDetails.name,
// 			  user_uid: uid,
// 			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
// 			  reverseOrder: 0 - Date.now(),
// 			  education:jobDetails.education,
// 			  status: "PENDING",
// 			  miles: miles,
// 			  profession: profession,
// 			  user_phone: phone,
// 			  experience: jobDetails.experience,
// 			  resume: resume,
// 			  user_id: jobDetails.user_id
			  
// 		});
	  
	  
//   }

  addToWorker(employee_id:any,job_id:any,post_id:any,jobDetails:any, profile:any, resume:any, confirmEducation, experience, whenCanJoin){
	var uid = firebase.auth().currentUser.uid;
	
	  console.log(jobDetails);
	  
	  return this.workerJob.child(uid).child(post_id).set({

			address:  this.errors.indexOf(jobDetails.address) == -1 ? jobDetails.address : null,
			category:  this.errors.indexOf(jobDetails.category) == -1 ? jobDetails.category : null,
			description:  this.errors.indexOf(jobDetails.description) == -1 ? jobDetails.description : null,
			employer_id:  this.errors.indexOf(jobDetails.employer_id) == -1 ? jobDetails.employer_id : null,
			face:  this.errors.indexOf( jobDetails.face) == -1 ?  jobDetails.face : null,
			job_id: this.errors.indexOf(job_id) == -1 ? job_id: null,
			id:  this.errors.indexOf(post_id) == -1 ? post_id : null,
			localdate:  this.errors.indexOf(jobDetails.localdate) == -1 ? jobDetails.localdate : null,
			maxsalary:  this.errors.indexOf(jobDetails.maxsalary) == -1 ? jobDetails.maxsalary : null, 
			minsalary:  this.errors.indexOf(jobDetails.minsalary) == -1 ? jobDetails.minsalary : null,
			phone:  this.errors.indexOf(jobDetails.phone) == -1 ? jobDetails.phone : null,
			name:  this.errors.indexOf(jobDetails.name) == -1 ? jobDetails.name : null,
			user_uid: this.errors.indexOf(uid) == -1 ? uid : null,
			timeStamp: firebase.database.ServerValue.TIMESTAMP,
			reverseOrder: 0 - Date.now(),
			education:  this.errors.indexOf(jobDetails.education) == -1 ? jobDetails.education : null,
			status: "PENDING",
			experience:  experience,
			resume:  this.errors.indexOf(resume) == -1 ? resume : null, 
			user_phone:  this.errors.indexOf(profile.phone) == -1 ? profile.phone : null,
			miles:  this.errors.indexOf(profile.miles) == -1 ? profile.miles : null,
			profession:  this.errors.indexOf(profile.profession) == -1 ? profile.profession : null,
			confirmEducation: confirmEducation,
			whenCanJoin: whenCanJoin,
			applicationViewed: false
	  });
}


//   addToEmployee(employee_id,job_id,user_id,post_id,jobDetails , phone, miles, profession, experience){
// 	addToEmployee(employee_id, post_id, jobDetails, profile, resume){
	    
// 	var uid = firebase.auth().currentUser.uid;
// 		console.log(jobDetails);
// 		return this.employeeJob.child(employee_id).child(post_id).set({
// 			address: jobDetails.address,
// 			category: jobDetails.category,
// 			description: jobDetails.description,
// 			employer_id: jobDetails.employer_id,
// 			face:jobDetails.face,
// 			job_id: jobDetails.job_id,
// 			id: post_id,
// 			localdate: jobDetails.localdate,
// 			maxsalary: jobDetails.maxsalary,
// 			minsalary: jobDetails.minsalary,
// 			phone: jobDetails.phone,
// 			name: jobDetails.name,
// 			user_uid:uid,
// 			timeStamp: firebase.database.ServerValue.TIMESTAMP,
// 			reverseOrder: 0 - Date.now(),
// 			education:jobDetails.education,
// 			status: "PENDING",
// 			miles: profile.miles,
// 			profession: '',
// 			user_phone: profile.phone,
// 			experience: jobDetails.experience,
// 			resume: resume,
// 			user_id: jobDetails.user_id,
// 		});
//   }

  addToEmployee(employee_id,job_id,user_id,post_id, jobDetails, profile, resume, confirmEducation, experience, whenCanJoin){
 
	
	var uid = firebase.auth().currentUser.uid;
		 
		return this.employeeJob.child(employee_id).child(post_id).set({
			  address: this.errors.indexOf(jobDetails.address)==-1 ? jobDetails.address : null,
			  category: this.errors.indexOf(jobDetails.category)==-1 ? jobDetails.category: null,
			  description: this.errors.indexOf(jobDetails.description) == -1 ? jobDetails.description: null,
		      employer_id: this.errors.indexOf(jobDetails.employer_id) ==-1 ? jobDetails.employer_id : null,
			  face: this.errors.indexOf(jobDetails.face) == -1 ? jobDetails.face : null,
			  job_id:  this.errors.indexOf(jobDetails.job_id) == -1 ? jobDetails.job_id : null,
			  id:  this.errors.indexOf(post_id) == -1 ? post_id : null,
			  localdate: this.errors.indexOf(jobDetails.localdate) == -1 ? jobDetails.localdate : null,
			  maxsalary:  this.errors.indexOf(jobDetails.maxsalary) == -1 ? jobDetails.maxsalary : null,
			  minsalary:  this.errors.indexOf(jobDetails.minsalary) == -1 ? jobDetails.minsalary : null,
			  phone:  this.errors.indexOf(jobDetails.phone) == -1 ? jobDetails.phone : null,
			  name:  this.errors.indexOf(jobDetails.name) == -1 ? jobDetails.name : null,
			  user_uid: this.errors.indexOf(uid) == -1 ? uid : null,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  education:  this.errors.indexOf(jobDetails.education) == -1 ? jobDetails.education : null,
			  status: "PENDING",
			  miles:  this.errors.indexOf(profile.miles) == -1 ? profile.miles : null,
			  experience:  this.errors.indexOf(jobDetails.experience) == -1 ? jobDetails.experience : null,
			  resume:  this.errors.indexOf(resume) == -1 ? resume : null,
			  user_phone:  this.errors.indexOf(profile.phone) == -1 ? profile.phone : null,
			  confirmEducation: confirmEducation,
			  whenCanJoin: whenCanJoin,
			  applicationViewed: false

		});
  }

  
  getJobDetail(key){
    return this.applyJobs.child(key);
  }
  
  addIdToJob(id){
	   return this.applyJobs.child(id).child('id').set(id);
  }
  
  applyJob(tech, education, resume){

	  var uid = firebase.auth().currentUser.uid;
	  
   		
	    return this.applyJobs.push({
			  address: this.errors.indexOf(tech.address)==-1 ? tech.address : null ,
			  category: this.errors.indexOf(tech.category)==-1 ? tech.category : null ,
			  description: this.errors.indexOf(tech.description)==-1 ? tech.description : null ,
		      employer_id: this.errors.indexOf(tech.employer_id)==-1 ? tech.employer_id : null ,
			  face: this.errors.indexOf(tech.face)==-1 ? tech.face : null ,
			  job_id: this.errors.indexOf(tech.id)==-1 ? tech.id : null ,
			  localdate:  this.errors.indexOf(tech.localdate)==-1 ? tech.localdate : null ,
			  maxsalary:  this.errors.indexOf(tech.maxsalary)==-1 ? tech.maxsalary: null ,
			  minsalary:  this.errors.indexOf(tech.minsalary)==-1 ? tech.minsalary : null ,
			  phone:  this.errors.indexOf(tech.phone)==-1 ? tech.phone : null ,
			  name:  this.errors.indexOf(tech.name)==-1 ? tech.name : null ,
			  user_uid: this.errors.indexOf(uid)==-1 ? uid : null ,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  education: this.errors.indexOf(education)==-1 ? education : null ,
			  status:"PENDING",
			  experience: this.errors.indexOf(tech.experience)==-1 ? tech.experience : null ,
			  resume: this.errors.indexOf(resume)==-1 ? resume : null ,
			  userComment: 'something'
			//   user_id: tech.user_id,
		});  
  }
  
  updateEducation(id,address,customer){
	   var uid = firebase.auth().currentUser.uid;
	  
    
	
	    return this.restaurantUserInfo.child(uid).child("education").child(id).update({
			  jobcategory: address.jobcategory,
			  education: address.education,
			  started: address.started,
		   	  finished: address.finished,
			  worked: address.worked,
			  displayName: customer.displayName,
			  email: customer.email,
			  minimum: address.minimum,
			  maximum: address.maximum,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  
  deleteEducation(id){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
    return this.restaurantUserInfo.child(uid).child("education").child(id).remove();
  }
  
   getUserEducationList(uid){
	 
	 this.userEducationList = this.restaurantUserInfo.child(uid).child("education");
	 
	 return this.userEducationList;
  }
  
  saveEducation(jobcategory,education,started,finished,worked,displayName,email,minimum,maximum,uid,europeResult,birthday){
	    return this.restaurantUserInfo.child(uid).child("education").push({
			  jobcategory: jobcategory,
			  education: education,
			  started: started,
		   	  finished: finished,
			  worked: worked,
			  displayName: displayName,
			  email: email,
			  minimum: minimum,
			  maximum: maximum,
			  uid:uid,
			  europeResult: europeResult,
			  birthday: birthday,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
    });
  }
  
   getWorkedYear(){
	console.log(this.workedYear);
	return this.workedYear;
  }
  
  
   getFinishedYear(){
	console.log(this.finishedYear);
	return this.finishedYear;
  }
  
  getStartedYear(){
	console.log(this.startedYear);
	return this.startedYear;
  }
  
  getEducationName(){
	  console.log(this.educationName);
	  return this.educationName;
  }
  
  getJobCategoryName(){
	  console.log(this.jobCategoryName);
	  return this.jobCategoryName;
  }
  
  
  getJobDetails(id,categoryId){
	  console.log(id);
	  console.log(categoryId)
	  
	  this.jobDetails = this.jobCategory.child(categoryId).child("jobs").child(id);
	  return this.jobDetails;
  }
  
  getJobsByCategory(id){
	  	   console.log(id);
    this.jobsByCategory = this.jobCategory.child(id).child("jobs");
    return this.jobsByCategory;
  }

  getInbox(id){
	 
			this.inbox = this.chat.orderByChild("fromId").equalTo(id);
			return this.inbox;
	}
	
	getChat(roomId){
			this.inbox = this.chat.orderByChild("roomId").equalTo(roomId);
			return this.inbox;
	}

	getLastMessage(roomId){
        return this.chat.orderByChild("roomId").equalTo(roomId).limitToLast(1);
    }

  
   getJobCategoryList(): any{
	  console.log(this.jobCategory);
	  return this.jobCategory;
  }
  
  
  getCityRestaurantList(id){
	   console.log(id);
    this.cityRestaurants = this.restaurants.orderByChild("city_id").equalTo(id);
    return this.cityRestaurants;
  }
  
  getRestaurantTableOrderList(){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.tableOrders.child(uid);
	  
	  
  }

  // Customer and Admin App 
  //
  
  addNewTableOrders(data,restaurant,date){
	  console.log(data);
	  console.log(restaurant);
	  
	  var uid = firebase.auth().currentUser.uid;
	  return this.tableOrders.child(uid).push({
	  restaurant_id: restaurant.data.id,
	  restaurant_address: restaurant.data.address,
	  restaurant_description: restaurant.data.description,
	  restaurant_backgroundImage: restaurant.data.backgroundImage,
	  restaurant_firebase_url: restaurant.data.firebase_url,
	  restaurant_icon: restaurant.data.icon,
	  restaurant_iconText: restaurant.data.iconText,
	  restaurant_images: restaurant.data.images,
	  restaurant_info: restaurant.data.info,
	  restaurant_lat: restaurant.data.lat,
	  restaurant_long: restaurant.data.long,
	  restaurant_mark: restaurant.data.mark,
	  restaurant_market: restaurant.data.market,
	  restaurant_option: restaurant.data.option,
	  restaurant_outlet: restaurant.data.outlet,
	  restaurant_phonenumber: restaurant.data.phonenumber,
	  restaurant_show: restaurant.data.show,
	  restaurant_subtitle: restaurant.data.subtitle,
	  restaurant_title: restaurant.data.title,
      date: date,
	  person: data.person,
	  time: data.time,
	  userId: uid,
	  status: data.status,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
      reverseOrder: 0 - Date.now()
    });//.then( tableOrder => {
     /// this.tableOrders.child(uid).child(tableOrder.key).child('id').set(tableOrder.key);
   // });
	
  }
  
  addNewTableAdminOrders(data,restaurant,date,sameKey){
	  console.log(data);
	  console.log(restaurant);
	  console.log(sameKey);
	  
	  var uid = firebase.auth().currentUser.uid;
	  return this.tableAdminOrders.child(sameKey).set({
	  restaurant_id: restaurant.data.id,
	  restaurant_address: restaurant.data.address,
	  restaurant_description: restaurant.data.description,
	  restaurant_backgroundImage: restaurant.data.backgroundImage,
	  restaurant_firebase_url: restaurant.data.firebase_url,
	  restaurant_icon: restaurant.data.icon,
	  restaurant_iconText: restaurant.data.iconText,
	  restaurant_images: restaurant.data.images,
	  restaurant_info: restaurant.data.info,
	  restaurant_lat: restaurant.data.lat,
	  restaurant_long: restaurant.data.long,
	  restaurant_mark: restaurant.data.mark,
	  restaurant_market: restaurant.data.market,
	  restaurant_option: restaurant.data.option,
	  restaurant_outlet: restaurant.data.outlet,
	  restaurant_phonenumber: restaurant.data.phonenumber,
	  restaurant_show: restaurant.data.show,
	  restaurant_subtitle: restaurant.data.subtitle,
	  restaurant_title: restaurant.data.title,
      date: date,
	  person: data.person,
	  time: data.time,
	  userId: uid,
	  status: data.status,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
      reverseOrder: 0 - Date.now()
    });//.then( tableOrder => {
      //this.tableAdminOrders.child(uid).child(tableOrder.key).child('id').set(tableOrder.key);
    //});
	
  }
  
  createExtraList(key,snap,id){
	  
	  console.log(snap);
	  var uid = firebase.auth().currentUser.uid;
	  
	  this.extra.child(uid).child(id).child(key).update({
				id: key,
				name: snap.name,
				selected: snap.selected,
				value: snap.value,
				product_id: id,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
	  
  }
  
  getCreateExtraList(id){
	  
	   
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.extra.child(uid).child(id);
  }
  
  addProductToCart(cart){
	  console.log(cart);
	  
	  var uid = firebase.auth().currentUser.uid;
	   return this.myCart.child(uid).child(cart.product_id).set({
			  id : cart.product_id,
			  name: cart.name,
			  product_id: cart.product_id,
			  image: cart.image,
			  price: cart.price,
			  quantity: cart.quantity,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
	  
  }
  
  addExtraProductToCart(extra){
	   
	   console.log(extra);
	  var uid = firebase.auth().currentUser.uid;
	   return this.extra.child(uid).child(extra.product_id).child(extra.id).set({
	          completed: extra.selected,
			  id: extra.id,
			  name: extra.name,
			  product_id: extra.product_id,
			  quantity: 1,
			  selected: extra.selected,
			  value: extra.value,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  removeExtraProductToCart(extra){
	   var uid = firebase.auth().currentUser.uid;
	  
	  return this.extra.child(uid).child(extra.product_id).child(extra.id).remove();
  }
  
  getItemExtraProductFromFirebase(id){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.extraOptions.child(uid).child(id);
  }
  
  getPaypal(){
	   var uid = firebase.auth().currentUser.uid;
	  
	  return this.paypalConfiguration;
  }
  
  
  removeExtraProductCart(cart,extra){
	   console.log(cart);
	   console.log(extra);
	  var uid = firebase.auth().currentUser.uid;
	   return this.extraOptions.child(uid).child(cart).remove();
  }
  
  updateExtraProductToCart(cart,extra){
	   console.log(cart);
	   console.log(extra);
	  var uid = firebase.auth().currentUser.uid;
	   return this.extraOptions.child(uid).child(cart).child(extra.id).set({
	          completed: extra.completed,
			  id: extra.id,
			  name: extra.name,
			  product_id: extra.product_id,
			  quantity: 1,
			  selected: extra.selected,
			  value: extra.value,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }

    
  updateProfileInfo(info){
 
	var uid = firebase.auth().currentUser.uid;
	  
    return this.restaurantUserInfo.child(uid).update(info);
}
  
  addQuantityProduct(qty){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.myCart.child(uid).child(qty.product_id).update({

			  quantity: qty.quantity,
	
		});
  }
  
  pushToFirebaseProduct(cart,id){
	   var uid = firebase.auth().currentUser.uid;
	  
	  return this.myCart.child(uid).child(id).set({
			  id : cart.product_id,
			  name: cart.name,
			  product_id: cart.product_id,
			  image: cart.image,
			  price: cart.price,
			  quantity: cart.quantity,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
	  
  }
  
  
  getFirebaseCart(){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.myCart.child(uid);
  }
  
  
  
  addToFirebaseCart(id,quantity){
	    var uid = firebase.auth().currentUser.uid;
	  
	  return this.myCart.child(uid).child(id).update({
		
			  quantity: quantity,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  deleteFirebaseCart(){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  this.myCart.child(uid).remove();
  }
  
   deleteFirebaseProductCart(id){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  this.myCart.child(uid).child(id).remove();
  }
  
  deleteFromFirebaseCart(id,quantity){
	  var uid = firebase.auth().currentUser.uid;
	  
	  this.myCart.child(uid).child(id).update({

			  quantity: quantity,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  setToFirebaseCart(cart,id){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.myCart.child(uid).child(id).child("extraOptions").child(cart.id).update({
			  id : cart.id,
			  name: cart.name,
			  product_id: cart.product_id,
			  quantity: cart.quantity,
			  selected: cart.selected,
			  value: cart.value,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  pushToFirebaseCart(cart,id){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.myCart.child(uid).child(id).child("extraOptions").child(cart.id).update({
			  id : cart.id,
			  name: cart.name,
			  product_id: cart.product_id,
			  quantity: cart.quantity,
			  selected: cart.selected,
			  value: cart.value,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  updateAddress(id,address,customer){
	   var uid = firebase.auth().currentUser.uid;
	  
    
	
	    return this.restaurantUserInfo.child(uid).child("addresses").child(id).update({
			  city: address.city,
		   	  district: address.district,
			  street: address.street,
			  apartmentOffice: address.apartmentOffice,
			  displayName: customer.displayName,
			  email: customer.email,
			  phone: address.phone,
			  address: address.address,
			  uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  deleteUserAddress(id){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
    return this.restaurantUserInfo.child(uid).child("addresses").child(id).remove();
  }
  
  getCityName(){
	  console.log(this.cityName);
	  return this.cityName;
  }
  
  getCityDistrictName(){
	  console.log(this.cityDistrictName);
	  return this.cityDistrictName;
  }
  
  getStreetName(){
	  console.log(this.streetName);
	  return this.streetName;
  }
  
  getApartmentOfficeName(){
	  
	  return this.apartmentOfficeName;
  }

  saveCurrentAddress(displayName, phone, address,uid){
	   return this.restaurantUserInfo.child(uid).child("addresses").push({
      displayName: displayName,
      phone: phone,
      address: address,
	  uid:uid,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
      reverseOrder: 0 - Date.now()
    });
  }
  
  saveNewAddress(city,district,street,apartmentOffice,displayName,email,phone,address,uid){
	    return this.restaurantUserInfo.child(uid).child("addresses").push({
			city: city,
			district:district,
			street:street,
			apartmentOffice:apartmentOffice,
      displayName: displayName,
	  email:email,
      phone: phone,
      address: address,
	  uid:uid,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
      reverseOrder: 0 - Date.now()
    });
  }
  
  getCurrentUserAddresses(uid){
	 
	 this.userAddressList = this.restaurantUserInfo.child(uid).child("addresses");
	 
	 return this.userAddressList;
  }
  
  removeFavItem(item){
	  var uid = firebase.auth().currentUser.uid;
	  
	  console.log(item.id);
	  
	  this.restaurantUserInfo.child(uid).child("favorites").child(item.id).remove();
  }
  
  getUserFavouriteList(){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  this.favoriteItemList = this.restaurantUserInfo.child(uid).child("favorites");
	 return this.favoriteItemList;
  }
  
  getFavoriteItem(id) :any{
	  console.log(id);
	  var uid = firebase.auth().currentUser.uid;
	  
	 this.favoriteItem = this.restaurantUserInfo.child(uid).child("favorites").child(id);
	 return this.favoriteItem;
  }
  
  removeFavourite(id){
	  console.log(id);
	  var uid = firebase.auth().currentUser.uid;
	  
	 this.restaurantUserInfo.child(uid).child("favorites").child(id).remove();
	 
  }
   
  
  getItems(id): any{
	  console.log(this.items);
	  this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
	  return this.restaurantItems;
	  
  }
  
  getRestaurantsList(): any{
	  console.log(this.restaurants);
	  return this.restaurants;
  }
  
  getCord(): any{
	  console.log(this.restaurants);
	  return this.cord;
  }
  
   getRestaurantCategoryLists(id){
	   console.log(id);
    this.category = this.restaurantCategory.orderByChild("res_name").equalTo(id);
    return this.category;
  }
  
  getItemLists(id){
	 console.log(id);
    this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
    return this.restaurantItems;
	  
  }


  
  getItemDetail(id): any{
	 console.log(id);
	 console.log(firebase.database().ref('/items').child(id));
	 console.log(this.items);
	 
    return this.items.child(id);
    
  }
  
  
  getExtraItems(id){

	 
    return this.extra;
    
  }
  
  getItemExtraOptionsDetail(id){
	 console.log(id);
	 console.log(firebase.database().ref('/items').child(id));
	 console.log(this.items);
	 
    return this.items.child(id).child("extraOptions");
    
  }

  
  

  delOrder(id){
    return this.orderList.child(id).remove();
  }

  getOrderDetail(id){
    return this.orderList.child(id);
  }
  
  getOrderDetailItems(id){
    return this.orderList.child(id).child("items");
  }

  getRestaurantUserProfile(id): any {
    return this.restaurantUserInfo.child(id);
  }

  getcheckEmail(email): any {
	return this.restaurantUserInfo.orderByChild("email").equalTo(email);
  }


  getUserProfile(id): any {
    return this.restaurantUserInfo.child(id);
  }
  
  addRoom(uid,data){
	  
	  return this.restaurants.child(data.id).child("chat").child(uid).child("-0000").set({
      //email: "We will touch you soon. Thanks for your message.",
	  
	  type:'join',
      user:'user',
      message:'Welcome to restaurant.',
      sendDate:''
    
    });
  }
  
  addSavedJobs(jobId, user_id){
	var uid = firebase.auth().currentUser.uid;
	return this.savedJobs.push({
		jobId: jobId,
		userId: uid,
		id: jobId+uid,
		user_id: user_id
	  });
}

removeSavedJobs(id, snapKey){
	return this.savedJobs.child(snapKey).remove();
}

getSavedJobs(): any {
	var uid = firebase.auth().currentUser.uid;
    return this.savedJobs.orderByChild("userId").equalTo(uid);
  }

  getSingleSavedJob(jobId, user_id){
	console.log('jobId', jobId);
	console.log('user_id', user_id);
	
	return this.allJobList.child(jobId);
}

  

  addOrders(order:String, total:number, uid:String, payments:String, userProfiles:String, currentUserAddress: any){
	  
	  console.log(userProfiles);
    return this.orderList.push({
      email: uid,
      items: order,
      total: total,
      payments: payments,
      customerDetails: userProfiles,
	  addresses: currentUserAddress,
	  status: "Queued",
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
      reverseOrder: 0 - Date.now()
    });//.then( newOrder => {
      //this.orderList.child(newOrder.key).child('id').set(newOrder.key);
    //});
  }
  
  addIdToOrder(newOrderKey){
	  return this.orderList.child(newOrderKey).child('id').set(newOrderKey);
  }
  
  addIdToRestaurantOrder(orderKey,restaurantKey){
	  
	    return this.restaurants.child(restaurantKey).child("orders").child(orderKey).update({
		 
			id: orderKey
	  
    });
	  
  }
  
  
  
  addNewOrdersToEachRestaurant(orderKey,restaurantKey,restaurantName,order,imagess,name,price,productId,quantity,restaurantId,restaurantNames,newOrderDetails){
	  
	  console.log(orderKey);
	  console.log(restaurantKey);
	  console.log(restaurantName);
	  console.log(order);
	  
	  return this.restaurants.child(restaurantKey).child("orders").child(orderKey).set({
		  /***
      name: name,
	 price: price,
	 product_id: productId,
	 quantity: quantity,
	 restaurantId: restaurantId,
	 restaurantName: restaurantNames,
	 status: "Queued",
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
      reverseOrder: 0 - Date.now()
	  */
	  
	  addresses: newOrderDetails.addresses,
	 customerDetails: newOrderDetails.customerDetails,
	 email: newOrderDetails.email,
	 items:newOrderDetails.items,
	 payments: newOrderDetails.payments,
	 status: newOrderDetails.status,
	 timeStamp: newOrderDetails.timeStamp,
     total: newOrderDetails.total
	  
    });
  }
  
   addNewOrdersToEachRestaurantExtra(orderKey,restaurantKey,restaurantName,/**extras,*/order,imagess,name,price,productId,quantity,restaurantId,restaurantNames,newOrderDetails){
	  
	  console.log(orderKey);
	  console.log(restaurantKey);
	  console.log(restaurantName);
	  console.log(order);
	    
		
		    return this.categorizedOrders.child(order.owner_id).child(orderKey).set({
			   	 addresses: newOrderDetails.addresses,
				 customerDetails: newOrderDetails.customerDetails,
				 email: newOrderDetails.email,
				 items:newOrderDetails.items,
				 payments: newOrderDetails.payments,
				 status: newOrderDetails.status,
				 timeStamp: newOrderDetails.timeStamp,
				 total: newOrderDetails.total,
				 restaurant_owner_id: order.owner_id
			});
	  
	  /**
			  return this.restaurants.child(restaurantKey).child("orders").child(orderKey).set({
			// image: imagess,
			// name: name,
			// price: price,
			// product_id: productId,
			// quantity: quantity,
			// restaurantId: restaurantId,
			// restaurantName: restaurantNames,
			// extra: extras,
			 
			 addresses: newOrderDetails.addresses,
			 customerDetails: newOrderDetails.customerDetails,
			 email: newOrderDetails.email,
			 items:newOrderDetails.items,
			 payments: newOrderDetails.payments,
			 status: newOrderDetails.status,
			 timeStamp: newOrderDetails.timeStamp,
			 total: newOrderDetails.total,
			 restaurant_owner_id: order.owner_id
			});
			**/
	  
	  //return order;
	  
   //.then( newOrder => {
      //this.orderList.child(newOrder.key).child('id').set(newOrder.key);
    //});
	
	
	

  }
  
  
  categorizedRestaurantOrder(orderKey,restaurantKey,owner_id){
	  
	    return this.categorizedOrders.child(owner_id).child(orderKey).update({
		 
			id: orderKey
	  
    });
	  
  }
  
  
  addToFavorite(data,id){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  console.log("service");
	  console.log(uid);
	  console.log(data);
	  
	this.restaurantUserInfo.child(uid).child("favorites").child(id).set({
		product_id:id,
		image:data.image_firebase_url,
		name:data.name,
		price:data.price,
		categories:data.categories,
		available:data.available,
		category:data.category,
		description:data.description,
		stock:data.stock,
		restaurantId:data.restaurantId,
		restaurantName:data.restaurantName,
		market:true
    });
  }
  
  

  chargeStripe(token, currency, amount, secret_kay){
    this.getSecKey = secret_kay;
    var headers = new Headers();
    var params = new URLSearchParams();
	//var amounts = 1*Math.round(amount);
    //var totalAmounts = 1 * amounts;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + secret_kay); 
    params.append("currency", currency);
    params.append("amount",  amount);
    params.append("description", "description");
    params.append("source", token);
alert("params-"+JSON.stringify(params));
	
    return new Promise(resolve => {  
      this.http.post(  'https://api.stripe.com/v1/charges', params, { headers: headers }).map(res => res.json())
        .subscribe(data => {
			alert("DATA"+data);
          resolve(data);
        });
    });
  }



  getMyOrderList(id){
    console.log(id);
    this.orderLists =  this.orderList.orderByChild("email").equalTo(id);
    return this.orderLists;
  }




/***
  addSettting(form){
    return this.setting.set({
      cod: form.cod,
      stripe: form.stripe,
      paypal: form.paypal,
      currency: form.currency,
      client_id: form.client_id,
      environment_sandbox: form.environment_sandbox,
      publish_key: form.publish_key,
      secret_kay: form.secret_kay
    });
  }
  */

  
  saveRestaurantCustomers(displayName: String, phone:String, address: String, id: any){
    return this.restaurantUserInfo.child(id).update({
      displayName: displayName,
      phone: phone,
      address: address,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
      reverseOrder: 0 - Date.now()
    });
  }

  getOrderList(){
    return this.orderList.orderByChild("reverseOrder");
  }



  getAds(){
    return this.ads.orderByChild("reverseOrder");
  }


// adAds(){

// 	var i = 0;
// 	for(i=0 ; i <50 ; i++){
	
// 		this.ads.push({
// 			title: 'Ad title',
// 			description: 'Ad description',
// 			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_55ZCkzfenQqVVzoQxkUQ6E_37QJ2ZyXeGA&usqp=CAU'
// 		});
// 	}

// }


}
