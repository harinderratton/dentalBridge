import { Component, OnInit, ViewChild} from '@angular/core';
import { Service } from '../../providers/service';
import { Service1 } from '../../providers/service1';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Functions } from '../../providers/functions/functions';
import { Stripe } from '@ionic-native/stripe';
import { AppliedInfoPage } from '../applied-info/applied-info';
import { EducationPage } from '../education/education';

import { AddDescriptionPage } from '../add-description/add-description';
import { LoadingController, AlertController , ToastController} from 'ionic-angular';
import { ChatPage } from '../chat/chat';
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
  jobDetails: any;
  addressList: any = [];

  downloadURL:any;
  isOkay:boolean = false;

  confirmEducation:any;
  experience:any;
  whenCanJoin:any;
  errorRegisterMessage:any;
  errors:any = [ null, undefined, '' ]

  chats:any = [];

  constructor( public alertCtrl: AlertController, private toastCtrl: ToastController, public nav: NavController, public params: NavParams, public functions: Functions, public service: Service, public values:Values, private payPal: PayPal, private stripe: Stripe, public translateService: TranslateService, public Service1 : Service1,) {
	  
	   
	   

	  
  }
  
  
   selectAddress(key, address) {
        
        this.currentUserAddress = address;
 
    }
	
	

    ionViewDidEnter(){


      this.categoryList = [];
      this.firebasedata = [];
      this.restaurants = [];
      console.log('data');
          
      this.payments = [];
        this.form = {}; 
        this.buttonText= "Place Order";
        this.currentUser = firebase.auth().currentUser;
      
      console.log('job----details', this.params.data.jobDetails);
       
      this.dataLocation = this.params.data.jobDetails;
      
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
    
        });

      setTimeout(() => {
        if(this.addressList.length == 0){
          this.presentConfirm();
        }
      });




      this.service.getInbox(this.currentUser.uid).on('value', snapshot =>{
      
 
        var all_spans = [];
        var i = 0
         
        snapshot.forEach( snp =>{
        all_spans.push({      
            id: snp.key,
            fromId: snp.val().fromId,
            toId: snp.val().toId,
            isRead: snp.val().isRead,
            roomId: snp.val().roomId,
            message: snp.val().message,
            date: snp.val().date
          });
        });

      });

 
  }

    
	addNewEducation(){
		this.nav.push(EducationPage);
	}


  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Update Education',
      message: 'To start applying on jobs, Please update your education.',
      enableBackdropDismiss : false,
      buttons: [
 
        {
          text: 'Update Now',
          handler: () => {

            this.nav.push(EducationPage);
            
          }
        }
      ]
    });
    alert.present();
  }
	
	addDescription(){
		 if(this.currentUserAddress != undefined){
			 
			 this.nav.push(AddDescriptionPage,{
				 dataLocation: this.dataLocation,
				 currentUserAddress: this.currentUserAddress,
			 });
			 
		 }else{
		 	this.presentToast('Please select an education from list');
		 
		 }
	}
	

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseEduPage');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }



  sendToEmployer(){
   // this.service.addToChat(this.currentUser.uid, this.params.data.jobDetails.user_id, this.roomId, this.message); 
  }

  validate(){
    console.log('coming here');
    if(this.errors.indexOf(this.confirmEducation) >= 0) {
     this.errorRegisterMessage = 'Please confirm your education.';
     return false; 
    }
    if(this.errors.indexOf(this.experience) >= 0) {
      this.errorRegisterMessage = 'Please enter years of experience.';
      return false; 
     }
     if(this.errors.indexOf(this.whenCanJoin) >= 0) {
      this.errorRegisterMessage = 'Please tell us when can you join.';
      return false; 
     }
    this.errorRegisterMessage = ''
    return true;
  }
  
  finish(){


    this.downloadURL = 'data:image/jpeg;base64,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';

    if(this.validate()){
 

    this.addressList[0].userComment = 'Some comment';

     this.service.applyJob(this.dataLocation[0], this.addressList[0], this.downloadURL).then( newJob =>{
        
            this.service.addIdToJob(newJob.key);
            this.addToJob(newJob.key); 		
            
  }); 
    

}

  }



addToJob(newJobKey){
    
   this.service.getJobDetail(newJobKey).on('value', (snapshot) => {

   console.log(snapshot.val());
   
   this.jobDetails = snapshot.val();

   this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
    this.userProfiles = snapshot.val();

   });

   this.service.addToEmployee(this.jobDetails.employer_id,this.jobDetails.job_id, this.jobDetails.uid, this.jobDetails.id, this.jobDetails, this.userProfiles, this.downloadURL, String(this.confirmEducation), String(this.experience), String(this.whenCanJoin));

   this.service.addToWorker(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails, this.userProfiles, this.downloadURL, this.confirmEducation, this.experience, this.whenCanJoin);

   this.service.addToAppliedJob(this.jobDetails.employer_id,this.jobDetails.job_id,this.jobDetails.id,this.jobDetails,  this.userProfiles, this.downloadURL, this.confirmEducation, this.experience, this.whenCanJoin);


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

    var roomID ;
    if(this.chats.length != 0){
    for(let key of this.chats){
        if(key.fromId == this.dataLocation[0].user_id || key.toId == this.dataLocation[0].user_id){
           
          roomID = key.roomId
          this.addToChat(roomID)
          break;
          
        }else {
          
          roomID = this.genRandromid()
          this.addChat(roomID)
        }

  
    }

  }else {
    
    roomID = this.genRandromid()

    this.addChat(roomID)
  
  
  }

 

});
 
 
}


addChat(roomID){

  var chat_data = {
    fromId: this.currentUser.uid,
    toId: this.dataLocation[0].user_id,
    message: 'A candidate has applied for job - '+ this.jobDetails.name,
    roomId: roomID,
    isRead: '0',
    date: Date.now()
  }
 
  this.Service1.addChat(chat_data);

  this.nav.push(ChatPage, {
    fromId: this.dataLocation[0].user_id,
    roomId: roomID          
  });


}

addToChat(roomID){


  this.service.addToChat(this.currentUser.uid, this.dataLocation[0].user_id, roomID , 'A candidate has applied for job - '+ this.jobDetails.name).then(()=>{
     
    // this.nav.setRoot(AppliedInfoPage ,{jobDetails: this.jobDetails});

    this.nav.push(ChatPage, {
      fromId: this.dataLocation[0].user_id,
      roomId: roomID          
    });


  });

  
}


genRandromid(){
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


}
