import { Component, OnInit, ViewChild} from '@angular/core';
import { Service } from '../../providers/service';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Functions } from '../../providers/functions/functions';
import { Stripe } from '@ionic-native/stripe';

import { EducationPage } from '../education/education';

import { AddDescriptionPage } from '../add-description/add-description';


import firebase from 'firebase';

/**
 * Generated class for the ChooseEduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-edu',
  templateUrl: 'choose-edu.html',
})
export class ChooseEduPage {

   buttonText:any;
  disableSubmit: boolean = false;
  currentUser: any;
  paypalPayments: any;
  form: any;
  getToken: any;
  getError: any;
  getPayments: any;
  setting: any;
  payments: any;
  currentUserAddress: any;
  userProfiles: any;
  smallUserProfiles: any;
	
	
  categoryList: any;
  bannerList: any;
  firebasedata: any;
  restaurants: any;
  public categoryId: any;
  orderDetails: any = {};
  
  paramse:any = {};
  
  
  selectedItem: any;
  extraCartItem: any;
  extraOptions: any;
  icons: string[];
  zeroPrice: any;
  paypalConfigurations: any;
  
  newOrderDetails : any;
  newOrderAddresses : any;
  newOrderItems: any;
  dataLocation: any;
  
  addressList: any = [];


  constructor(public nav: NavController, public params: NavParams, public functions: Functions, public service: Service, public values:Values, private payPal: PayPal, private stripe: Stripe, public translateService: TranslateService) {
	  
	   
	   
	this.categoryList = [];
	this.firebasedata = [];
	this.restaurants = [];
	console.log('data');
		  
	this.payments = [];
    this.form = {}; 
    this.buttonText= "Place Order";
    this.currentUser = firebase.auth().currentUser;
	
	console.log('job----details',params.data.jobDetails);
	 
	this.dataLocation = params.data.jobDetails;
	
	console.log(this.dataLocation);
	  
	
	
	
	this.addressList = [];
	
	 this.service.getUserEducationList(this.currentUser.uid).on('value', snapshot =>{
			
				this.addressList = [];
				
					snapshot.forEach( snap =>{
						this.addressList.push({
					  
						id: snap.key,
						displayName: snap.val().displayName,
						education: snap.val().education,
						europeResult: snap.val().europeResult,
						birthday: snap.val().birthday,
						email: snap.val().email,
						finished: snap.val().finished,
						jobcategory: snap.val().jobcategory,
						maximum: snap.val().maximum,
						minimum: snap.val().minimum,
						reverseOrder: snap.val().reverseOrder,
						started: snap.val().started,
						timeStamp: snap.val().timeStamp,
						uid: snap.val().uid,
						worked: snap.val().worked
						
						});
					});
							
					console.log(this.addressList);
		});
	  
  }
  
  
   
   selectAddress(key, address) {
        
		
		console.log(key);
		console.log(address);
		
        this.currentUserAddress = address;
 
    }
	
	
	addNewEducation(){
		this.nav.push(EducationPage);
	}
	
	addDescription(){
		 if(this.currentUserAddress != undefined){
			 
			 this.nav.push(AddDescriptionPage,{
				 dataLocation: this.dataLocation,
				 currentUserAddress: this.currentUserAddress,
			 });
			 
		 }else{
		 
		 }
	}
	

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseEduPage');
  }

}
