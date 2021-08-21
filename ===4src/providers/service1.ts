import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators/map';
import {Observable} from "rxjs/Observable";
import firebase from 'firebase';
import { Config } from './config';
import { URLSearchParams } from '@angular/http';
// import { ListPage } from '../pages/list/list';
import { NavParams, IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service1 {
  //setting: any;
  product_id: Array<number> = [];
  url: any;
  cart: any;
  params:any;
  notisLists: any;
  orderLists: any;
  chatUserLists: any;
  chatList: any;
  public ref: any;  
  productsList:any;
  customerList: any;
  public orderList: any;
  public Notifications: any;
  public Chat: any;

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
  public minSalary: any;
  public maxSalary: any;
  public allJobList: any;
  public categorizedByJobPoster: any;
  public addressList: any;
  
  
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
	this.Notifications = firebase.database().ref('/notifications'); 
	this.Chat = firebase.database().ref('/chat'); 

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
	
	
	/**************New job application*********/
	
	this.jobCategory = firebase.database().ref('/jobCategory');
	
	this.jobCategoryName = firebase.database().ref('/jobCategoryName');
	
	this.educationName = firebase.database().ref('/educationName');
	
	this.startedYear = firebase.database().ref('/startedYear');
	
	this.finishedYear = firebase.database().ref('/finishedYear');
	
	this.workedYear = firebase.database().ref('/workedYear');
	
	this.applyJobs = firebase.database().ref('/applyJobs');
	
	this.employeeJob = firebase.database().ref('/employeeJob');
	
	this.workerJob = firebase.database().ref('/workerJob');
	
	this.appliedJob = firebase.database().ref('/appliedJob');
	
	this.minSalary = firebase.database().ref('/minSalary');
	
	this.maxSalary = firebase.database().ref('/maxSalary');
	
	this.allJobList = firebase.database().ref('/allJobList');
	
	this.categorizedByJobPoster = firebase.database().ref('/categorizedByJobPoster');

	this.addressList = firebase.database().ref('/locations');

  }
  
    updateAdminJob(tech,job_id){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
    
		console.log(tech);

		
	    return this.applyJobs.child(job_id).update({
			/**
			  address: tech.address,
			  category: tech.category,
			  description: tech.description,
		      employer_id: tech.employer_id,
			  face:tech.face,
			  job_id: tech.id,
			  localdate: tech.localdate,
			  maxsalary: tech.maxsalary,
			  minsalary: tech.minsalary,
			  phone: tech.phone,
			  name: tech.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  education:education,
			  */
			  status: tech.status,
		});
	  
  }
  
  
   updateToWorkers(jobSearcher_id,post_id,jobDetails){
	  
	  
    
		console.log(jobDetails);
		
		return this.workerJob.child(jobSearcher_id).child(post_id).update({
			/**
		      employer_id: jobDetails.employer_id,
			  face:jobDetails.face,
			  job_id: job_id,
			  
			  name: jobDetails.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  education: jobDetails.education,
			  */
			  /**
			  address: jobDetails.address,
			  category: jobDetails.category,
			  description: jobDetails.description,
		      employer_id: jobDetails.employer_id,
			  face:jobDetails.face,
			  job_id: job_id,
			  id: post_id,
			  localdate: jobDetails.localdate,
			  maxsalary: jobDetails.maxsalary,
			  minsalary: jobDetails.minsalary,
			  phone: jobDetails.phone,
			  name: jobDetails.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  education:jobDetails.education,
			  */
			  status: jobDetails.status,
			  
		});
	  
	  
  }
  
  
  updateToEmployee(employee_id,job_id,jobDetails){
	  var uid = firebase.auth().currentUser.uid;
	  
    
		console.log(jobDetails);
		
		return this.employeeJob.child(uid).child(job_id).update({
			/**
		      employer_id: jobDetails.employer_id,
			  face:jobDetails.face,
			  job_id: job_id,
			  
			  name: jobDetails.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  education: jobDetails.education,
			  */
			  /**
			  address: jobDetails.address,
			  category: jobDetails.category,
			  description: jobDetails.description,
		      employer_id: jobDetails.employer_id,
			  face:jobDetails.face,
			  job_id: job_id,
			  id: post_id,
			  localdate: jobDetails.localdate,
			  maxsalary: jobDetails.maxsalary,
			  minsalary: jobDetails.minsalary,
			  phone: jobDetails.phone,
			  name: jobDetails.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  education:jobDetails.education,
			  */
			  status: jobDetails.status,
			  
		});
	  
	  
  }
  
  
   getJobApplicantDetails(postId){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.employeeJob.child(uid).child(postId);
  }
  
  getJobApplicants(){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.employeeJob.child(uid);
  }
  
  
  deleteJob(locations){
	
      console.log(locations);
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  this.jobCategory.child(locations.category).child("jobs").child(locations.job_id).remove();
	  
	  this.categorizedByJobPoster.child(uid).child(locations.job_id).remove();
	  
	  return this.allJobList.child(locations.job_id).remove();
  }
  
  editCat2(name:String, address:String, downloadURL:any
  ,phone:String,poster:String,minsalary:String,maxsalary:String,description:String,category:String,localdate:any,job_id:any, company,email,is_recruiter,company_size,experience,qualification,lat="",lng=""){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  console.log(localdate);
	  
	  
	  
	  
    return this.jobCategory.child(category).child("jobs").child(job_id).update({

      name: name,
	  address: address,
	  face: downloadURL,
	  phone: phone,
	  employer_id: uid,
	  minsalary: minsalary,
	  maxsalary: maxsalary,
	  description: description,
	  category: category,
	  localdate: localdate,
	  user_id: uid,
	  timeStamp: firebase.database.ServerValue.TIMESTAMP,
	  reverseOrder: 0 - Date.now(),
	  company: company,
	  poster: poster,
	  email: email,
	  is_recruiter: is_recruiter,
	  company_size: company_size,
	  experience: experience,
	  qualification: qualification,
	  lat: lat,
	  lng: lng
	  

    }).then( newCategory => {
		
		
       // this.jobCategory.child(category).child("jobs").child(newCategory.key).child('job_id').set(newCategory.key);
		
		
		this.allJobList.child(job_id).update({

			  name: name,
			  address: address,
			  face: downloadURL,
			  phone: phone,
			  employer_id: uid,
			  minsalary: minsalary,
			  maxsalary: maxsalary,
			  description: description,
			  category: category,
			  localdate: localdate,
			  job_id: job_id,
			  user_id: uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  

			});
			
		this.categorizedByJobPoster.child(uid).child(job_id).update({
			  name: name,
			  address: address,
			  face: downloadURL,
			  phone: phone,
			  employer_id: uid,
			  minsalary: minsalary,
			  maxsalary: maxsalary,
			  description: description,
			  category: category,
			  localdate: localdate,
			  job_id: job_id,
			  user_id: uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  company: company,
			  poster: poster,
			  email: email,
			  is_recruiter: is_recruiter,
			  company_size: company_size,
			  experience: experience,
			  qualification: qualification,
			  lat: lat,
	  			lng: lng
		});
			
			
			
    });
  }
  
  getJobsByCategorized(){
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.categorizedByJobPoster.child(uid);
  }
  
  
  addCat2(name:String, address:String, downloadURL:any
  ,phone:String,poster:String,minsalary:String,maxsalary:String,description:String,category:String,localdate:any,company,email,is_recruiter,company_size,experience,qualification,lat='',lng='', shortTermJob: boolean, createdOn: any, requiredOn:any){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  console.log(localdate);
	  
	  
	  
	  
    return this.jobCategory.child(category).child("jobs").push({

      name: name,
	  address: address,
	  face: downloadURL,
	  phone: phone,
	  employer_id: uid,
	  minsalary: minsalary,
	  maxsalary: maxsalary,
	  description: description,
	  category: category,
	  localdate: localdate,
	  user_id: uid,
	  timeStamp: firebase.database.ServerValue.TIMESTAMP,
	  reverseOrder: 0 - Date.now(),
	  company: company,
	  poster: poster,
	  email: email,
	  is_recruiter: is_recruiter,
	  company_size: company_size,
	  experience: experience,
	  qualification: qualification,
	  lat: lat,
	  lng: lng,
	  shortTermJob: shortTermJob,
	  createdOn: createdOn,
	  requiredOn: requiredOn

	
    }).then( newCategory => {
		
		
        this.jobCategory.child(category).child("jobs").child(newCategory.key).child('job_id').set(newCategory.key);
		
		
		this.allJobList.child(newCategory.key).set({

			  name: name,
			  address: address,
			  face: downloadURL,
			  phone: phone,
			  employer_id: uid,
			  minsalary: minsalary,
			  maxsalary: maxsalary,
			  description: description,
			  category: category,
			  localdate: localdate,
			  job_id: newCategory.key,
			  user_id: uid,
			  lat: lat,
	  			lng: lng,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now(),
			  shortTermJob: shortTermJob,
			  createdOn: createdOn,
			  requiredOn: requiredOn

		
			});
			
		this.categorizedByJobPoster.child(uid).child(newCategory.key).set({
			  name: name,
			  address: address,
			  face: downloadURL,
			  phone: phone,
			  employer_id: uid,
			  minsalary: minsalary,
			  maxsalary: maxsalary,
			  description: description,
			  category: category,
			  localdate: localdate,
			  job_id: newCategory.key,
			  user_id: uid,
			  company: company,
			  email: email,
			  poster: poster,
			  is_recruiter: is_recruiter,
			  company_size: company_size,
			  experience: experience,
			  qualification: qualification,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  lat: lat,
	  			lng: lng,
			  reverseOrder: 0 - Date.now(),
			  shortTermJob: shortTermJob,
			  createdOn: createdOn,
			  requiredOn: requiredOn
		});
			
			
			
    });
  }
  
  getAddressList(){
	  return this.addressList;
  }
  
  getMaxSalary(){
	  return this.maxSalary;
  }
  
  getMinSalary(){
	  return this.minSalary;
  }
  
  
  getCategoryName(){
	  return this.jobCategory;
  }
  
  
  addCat(name:String, address:String, downloadURL:any
  ,phone:String,start:String,finish:String,poster:String,minsalary:String,maxsalary:String,description:String,category:String,localdate:any){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  console.log(localdate);
	  
    return this.jobCategory.child(category).child("jobs").push({

      name: name,
	  address: address,
	  face: downloadURL,
	  phone: phone,
	  start: start,
	  finish: finish,
	  employer_id: poster,
	  minsalary: minsalary,
	  maxsalary: maxsalary,
	  description: description,
	  category: category,
	  localdate: localdate,
	  user_id: uid,
	  timeStamp: firebase.database.ServerValue.TIMESTAMP,
	  reverseOrder: 0 - Date.now(),
	  

    }) .then( newCategory => {
        this.jobCategory.child(category).child("jobs").child(newCategory.key).child('job_id').set(newCategory.key);
    });
  }
  
  /**************************************************************************/
  
  getClickedInfo(id){
	    
	  var uid = firebase.auth().currentUser.uid;
	  
	 this.favoriteItem = this.appliedJob.child(uid).child(id);
	 return this.favoriteItem;
  }
  
  getUserJobList(){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
	  return this.workerJob.child(uid);
  }
  
  addToAppliedJob(employee_id,job_id,post_id,jobDetails){
	  var uid = firebase.auth().currentUser.uid;
	  
    
		console.log(jobDetails);
		
		return this.appliedJob.child(uid).child(job_id).set({
	          clicked: true,	  
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  addToWorker(employee_id,job_id,post_id,jobDetails){
	  var uid = firebase.auth().currentUser.uid;
	  
    
		console.log(jobDetails);
		
		return this.workerJob.child(uid).child(post_id).set({
		      employer_id: jobDetails.employer_id,
			  face:jobDetails.face,
			  job_id: job_id,
			  id: post_id,
			  name: jobDetails.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
	  
	  
  }
  
  addToEmployee(employee_id,job_id,user_id,post_id,jobDetails){
	    
		
	var uid = firebase.auth().currentUser.uid;
	  
    
		console.log(jobDetails);
	    
		return this.employeeJob.child(employee_id).child(job_id).child(post_id).set({
		      employer_id: jobDetails.employer_id,
			  face:jobDetails.face,
			  job_id: job_id,
			  id: post_id,
			  name: jobDetails.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
		});
  }
  
  getJobDetail(key){
    return this.applyJobs.child(key);
  }
  
  addIdToJob(id){
	   return this.applyJobs.child(id).child('id').set(id);
  }
  
  applyJob(tech){
	  
	  var uid = firebase.auth().currentUser.uid;
	  
    
	console.log(tech);
	    return this.applyJobs.push({
		      employer_id: tech.employer_id,
			  face:tech.face,
			  job_id: tech.id,
			  name: tech.name,
			  user_uid:uid,
			  timeStamp: firebase.database.ServerValue.TIMESTAMP,
			  reverseOrder: 0 - Date.now()
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
  
  saveEducation(jobcategory,education,started,finished,worked,displayName,email,minimum,maximum,uid){
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
    this.jobsByCategory = this.jobCategory.child(id).child("jobs");
    return this.jobsByCategory;
  }
  
   getJobCategoryList(): any{
	  console.log(this.jobCategory);
	  return this.jobCategory;
  }
  
  
  getCityRestaurantList(id){
    this.cityRestaurants = this.restaurants.orderByChild("city_id").equalTo(id);
    return this.cityRestaurants;
  }
  
  getRestaurantTableOrderList(){
	  var uid = firebase.auth().currentUser.uid;
	  return this.tableOrders.child(uid);
  }

  getNotifications(){ 
	  var uid = firebase.auth().currentUser.uid;
      this.notisLists =  this.Notifications.orderByChild("toId").equalTo(uid);
      return this.notisLists; 
  }

  getChatUsers(){ 
	  var uid = firebase.auth().currentUser.uid;
      this.chatUserLists =  this.Chat.orderByChild("toId").equalTo(uid);
      return this.chatUserLists; 
  }

  getChat(roomId){ 
      this.chatList =  this.Chat.orderByChild("roomId").equalTo(roomId);
      return this.chatList; 
  }

  getLastMessage(roomId){ 
      return this.Chat.orderByChild("roomId").equalTo(roomId).limitToLast(1);
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

  addNotification(data){
    return this.Notifications.push(data);
  }

  addChat(data){
    return this.Chat.push(data);
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





}
