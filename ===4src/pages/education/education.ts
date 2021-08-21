import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../providers/service';
import  firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';
import { EducationListPage } from '../education-list/education-list';
import { Functions } from '../../providers/functions/functions';

import { ListPage } from '../list/list';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
	
  errors:any=['', null, undefined,' '];
  form: any;
  currentUser: any;
  errorMessage: any;
  customer: any;
  restaurantName: any;
  cityName: any;
  cityDistrictName: any;
  streetName: any;
  apartmentOfficeName: any;
  
  
  jobCategoryName: any;
  
  educationName: any;
  startedYear: any;
  finishedYear: any;
  workedYear: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service,public translateService: TranslateService, public functions: Functions) {
	  
	    this.form = {};
    this.currentUser = firebase.auth().currentUser;
    console.log(this.currentUser);
    //this.customer = params.data;
	this.customer = [];
	
	this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot => {
	  
	  this.customer.displayName = snapshot.val().displayName;
	  this.customer.email = snapshot.val().email;
	  this.customer.europeResult = snapshot.val().europeResult;
	  this.customer.birthday = snapshot.val().birthday;

    });
	
	
	
	
	this.service.getRestaurantsList().on('value', snapshot => {

      this.restaurantName = [];

      snapshot.forEach( snap => {
        this.restaurantName.push({
        id: snap.key,
        name: snap.val().title,
      
        });
      });
    });
	
	
	this.service.getWorkedYear().on('value', snapshot => {

      this.workedYear = [];

      snapshot.forEach( snap => {
        this.workedYear.push({
        id: snap.key,
        name: snap.val().name
        });
      });
    });
	
	this.service.getFinishedYear().on('value', snapshot => {

      this.finishedYear = [];

      snapshot.forEach( snap => {
        this.finishedYear.push({
        id: snap.key,
        name: snap.val().name
        });
      });
    });
	
	this.service.getStartedYear().on('value', snapshot => {

      this.startedYear = [];

      snapshot.forEach( snap => {
        this.startedYear.push({
        id: snap.key,
        name: snap.val().name
        });
      });
    });
	
	this.service.getJobCategoryName().on('value', snapshot => {

      this.jobCategoryName = [];

      snapshot.forEach( snap => {
        this.jobCategoryName.push({
        id: snap.key,
        name: snap.val().name
        });
      });
    });
	
	
	this.service.getEducationName().on('value', snapshot => {

      this.educationName = [];

      snapshot.forEach( snap => {
        this.educationName.push({
        id: snap.key,
        name: snap.val().name
        });
      });
    });
	
	
	this.service.getCityName().on('value', snapshot => {

      this.cityName = [];

      snapshot.forEach( snap => {
        this.cityName.push({
        id: snap.key,
        name: snap.val().name
        });
      });
    });
	
	this.service.getCityDistrictName().on('value', snapshot => {

      this.cityDistrictName = [];

      snapshot.forEach( snap => {
        this.cityDistrictName.push({
			id: snap.key,
			name: snap.val().name
        });
      });
    });
	
	
	this.service.getStreetName().on('value', snapshot => {

      this.streetName = [];

      snapshot.forEach( snap => {
        this.streetName.push({
			id: snap.key,
			name: snap.val().name
        });
      });
    });
	
	this.service.getApartmentOfficeName().on('value', snapshot => {

      this.apartmentOfficeName = [];

      snapshot.forEach( snap => {
        this.apartmentOfficeName.push({
			id: snap.key,
			name: snap.val().name
        });
      });
    });
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }
/**
  addNewAddress(){
      this.service.saveNewAddress(this.customer.city,
	  this.customer.district, this.customer.street , this.customer.apartmentOffice,
	  this.customer.displayName, this.customer.email, this.customer.phone, 
	  this.customer.address, this.currentUser.uid)
      .then(() =>{
        this.navCtrl.pop();
      });
  }
  */
   addEducation(){
     if(this.validate()){
      this.errorMessage = '';
      this.service.saveEducation(this.customer.jobcategory,
        this.customer.education, this.customer.started , this.customer.finished,
        this.customer.worked, this.customer.displayName, this.customer.email, 
        this.customer.minimum, this.customer.maximum,this.currentUser.uid,this.customer.europeResult, this.customer.birthday)
          .then(() =>{
          this.functions.showAlert('Success',  'You have successfully add your education into System');
          
            this.navCtrl.push(EducationListPage);
          });
     }
 
  }


  validate(){
    if(this.errors.indexOf(this.customer.jobcategory)>=0){
      this.errorMessage = 'Please select job category';
      return false;
    }

    if(this.errors.indexOf(this.customer.education)>=0){
      this.errorMessage = 'Please select education';
      return false;
    }

    if(this.errors.indexOf(this.customer.started)>=0){
      this.errorMessage = 'Please select started year';
      return false;
    }

    if(this.errors.indexOf(this.customer.finished)>=0){
      this.errorMessage = 'Please select finished year';
      return false;
    }

    if(this.errors.indexOf(this.customer.worked)>=0){
      this.errorMessage = 'Please select worked years';
      return false;
    }

    if(this.errors.indexOf(this.customer.minimum)>=0){
      this.errorMessage = 'Please select minimum salary';
      return false;
    }

    if(this.errors.indexOf(this.customer.maximum)>=0){
      this.errorMessage = 'Please select maximum salary';
      return false;
    }

    return true;
  }
  
}
