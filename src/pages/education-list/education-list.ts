import { Component, OnInit, ViewChild} from '@angular/core';
import { Service } from '../../providers/service';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Functions } from '../../providers/functions/functions';
import { Stripe } from '@ionic-native/stripe';

import { EditEducationPage } from '../edit-education/edit-education';


import firebase from 'firebase';

/**
 * Generated class for the EducationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education-list',
  templateUrl: 'education-list.html',
})
export class EducationListPage {


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
  responseCame:any=false;
  categoryList: any;
  bannerList: any;
  firebasedata: any;
  restaurants: any;
  public categoryId: any;
  orderDetails: any = {};
  
  paramse:any = {};
  
  
  selectedItem: any;
  icons: string[];
  
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
	
	console.log(firebase.auth().currentUser.uid);
	
	 if(this.currentUser){
       this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot =>{
         this.userProfiles = snapshot.val();
      });
    }
	
	this.addressList = [];
		  /***
		  this.service.getCurrentUserAddresses(this.currentUser.uid).on('value', snapshot =>{
			
				this.addressList = [];
				
					snapshot.forEach( snap =>{
						this.addressList.push({
					  
						id: snap.key,
						city: snap.val().city,
						district: snap.val().district,
						street: snap.val().street,
						phone: snap.val().phone,
						address: snap.val().address,
						apartmentOffice: snap.val().apartmentOffice
						
						});
					});
							
					console.log(this.addressList);
		});
		*/
		
	      this.responseCame = false;
		  this.service.getUserEducationList(this.currentUser.uid).on('value', snapshot =>{
			
				this.addressList = [];
				
					snapshot.forEach( snap =>{
						this.addressList.push({
					  
						id: snap.key,
						displayName: snap.val().displayName,
						education: snap.val().education,
						email: snap.val().email,
						europeResult: snap.val().europeResult,
						birthday: snap.val().birthday,
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

					this.responseCame = true;
							
					console.log(this.addressList);
		});
	
  }
  
  
  selectAddress(key, address) {
        
		
		console.log(key);
		console.log(address);
		
        this.currentUserAddress = address;
 
    }
	
	editEducation(address){
		this.nav.push(EditEducationPage, {address:address});
	}
	
	addAddress() {
		
		//this.nav.push(CurrentUserAddressPage,this.userProfiles);
        
    }
	
	deleteEducation(id){
		this.service.deleteEducation(id);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddressPage');
  }

}
