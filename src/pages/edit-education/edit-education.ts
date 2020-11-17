import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
import { EducationListPage } from '../education-list/education-list';
import firebase from 'firebase';

/**
 * Generated class for the EditEducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-education',
  templateUrl: 'edit-education.html',
})
export class EditEducationPage {
    errors:any=['', null, undefined,' '];
    id: any;
    productsList: any;
    params:any = {};
    items: any;
    address: any;

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

  constructor(public nav: NavController, public navParam: NavParams, public service: Service,public translateService: TranslateService) {
	  
	    this.address = navParam.data.address;
	  
	  console.log(navParam.data.address);
	  
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

 updateEducation(id,address,customer){
  if(this.validate()){
    this.service.updateEducation(id,address,customer)
	  .then(() =>{
        this.nav.push(EducationListPage);
      });
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAddressPage');
  }

  validate(){
    if(this.errors.indexOf(this.address.jobcategory)>=0){
      this.errorMessage = 'Please select job category';
      return false;
    }

    if(this.errors.indexOf(this.address.education)>=0){
      this.errorMessage = 'Please select education';
      return false;
    }

    if(this.errors.indexOf(this.address.started)>=0){
      this.errorMessage = 'Please select started year';
      return false;
    }

    if(this.errors.indexOf(this.address.finished)>=0){
      this.errorMessage = 'Please select finished year';
      return false;
    }

    if(this.errors.indexOf(this.address.worked)>=0){
      this.errorMessage = 'Please select worked years';
      return false;
    }

    if(this.errors.indexOf(this.address.minimum)>=0){
      this.errorMessage = 'Please select minimum salary';
      return false;
    }

    if(this.errors.indexOf(this.address.maximum)>=0){
      this.errorMessage = 'Please select maximum salary';
      return false;
    }

    return true;
  }
  

}
