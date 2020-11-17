import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Service1} from '../../providers/service1';
import { Functions } from '../../providers/functions/functions';
import { Values } from '../../providers/values';
// import { ListPage } from '../list/list';


import { OnInit } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { DatePickerDirective } from 'ionic3-datepicker';

import { Tabs1Page } from '../tabs1/tabs1';

import { TranslateService } from '@ngx-translate/core';
import { ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the EditJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-job',
  templateUrl: 'edit-job.html',
})
export class EditJobPage implements OnInit {
	
	form: any;
  files: any;
  snapshot: any;
  downloadURL: any;
  categoryPic: any;
  selectedFile: any;
  public fileName: any;
  public storageRef: any;
  public uploadTask: any;
  errorMessage: any;
  disableSubmit: boolean = false;
  is_date_choosed:any = '0';
  public getCategoryName: any;
  final_date:any;
  public getMinSalary: any;
  public getMaxSalary: any;
  public addressList: any;
  submitText:any = 'Submit';
  public date:any;
  public time: any;
  public person: any;
  private uid: string;
  public restaurantInformation : any;
  public restaurantInformationData : any;
  
    public localDate: Date = new Date();
  public initDate: Date = new Date();
  public initDate2: Date = new Date(2015, 1, 1);
  public disabledDates: Date[] = [new Date(2017, 7, 14)];

  public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  public min: Date = new Date();
  
  lat:any;
  lng:any;
  public initDate3: Date = new Date();
  public date3:any;
  public finishDate: Date = new Date();
  
  public locations: any;
  userSettings = {};
    public bookingInformation:{
    userID: string,
    time:string,
    person: number,
    status: string,
  };

  constructor(public nav: NavController, public navParams: NavParams
  ,public datePicker: DatePicker,private alertCtrl: AlertController,
  private toastCtrl: ToastController,public service: Service1,
  public translateService: TranslateService,public functions: Functions) {
	  
	  
	 this.locations = navParams.data.locations;

   this.userSettings['inputString'] = this.locations.address;
   this.lat = this.locations.lat;
   this.lng = this.locations.lng;
   this.userSettings = Object.assign({},this.userSettings);
		
		if(this.locations.face){
			this.downloadURL = this.locations.face;
		}
		
		if(this.locations.localdate){
			this.date = this.locations.localdate;
		}
	  
	  console.log(navParams.data.locations);
	  console.log(this.locations);
	  
	  
	  	    	this.form = {};
    this.service = service;
	
	
	  this.service.getCategoryName().on('value', snapshot => {

      this.getCategoryName = [];

      snapshot.forEach( snap => {
        this.getCategoryName.push({
        id: snap.key,
        name: snap.val().name,
		face: snap.val().face,
      
        });
      });
    });
	
	
	
	this.service.getMinSalary().on('value', snapshot => {

      this.getMinSalary = [];

      snapshot.forEach( snap => {
        this.getMinSalary.push({
        id: snap.key,
        name: snap.val().name,
      
        });
      });
    });
	
	
	this.service.getMaxSalary().on('value', snapshot => {

      this.getMaxSalary = [];

      snapshot.forEach( snap => {
        this.getMaxSalary.push({
        id: snap.key,
        name: snap.val().name,
      
        });
      });
    });

    this.service.getAddressList().on('value', snapshot => {

      this.addressList = [];

      snapshot.forEach( snap => {
        this.addressList.push({
        id: snap.key,
        name: snap.val().name,
      
        });
      });
    });

    this.userSettings['inputPlaceholderText'] = 'Location';
    this.userSettings['showSearchButton'] = false;
    this.userSettings = Object.assign({},this.userSettings);
	  
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJobPage');
  }

  autoCompleteCallback(data) {
    console.log(data.data.formatted_address)
    this.lat = data.data.geometry.location.lat;
    this.lng = data.data.geometry.location.lng;
    this.locations.address = data.data.formatted_address;
  }
  
  addCategry(){
	  
	  console.log(this.initDate);
	  
	  
	  
    if(this.validateForm()){


      this.disableSubmit = true;
      this.submitText = 'Processing...';
      if(this.is_date_choosed == '1'){
        this.final_date = this.date.getFullYear() + "-" + (this.date.getMonth()+1) + "-" + this.date.getDate();
      }
      else{
        this.final_date = this.date;
      }
      


    /**
    	this.service.addCat(this.form.name, this.form.address, this.downloadURL,this.form.phone, this.form.start,
		this.form.finish,this.form.poster,this.form.minsalary,this.form.maxsalary,this.form.description,this.form.category,datestring)
      .then(() => {
       // this.nav.pop();     
	     this.nav.push(ListPage);
      });
	  */
	  
	  
	  this.service.editCat2(this.locations.name, this.locations.address, this.downloadURL,this.locations.phone,this.locations.poster,this.locations.minsalary,this.locations.maxsalary,this.locations.description,'all',this.final_date,this.locations.job_id,  this.locations.company,this.locations.email,this.locations.is_recruiter,this.locations.company_size,this.locations.experience,this.locations.qualification,this.lat,this.lng)
      .then(() => {
       // this.nav.pop();     
	   this.disableSubmit = false;
     this.submitText = 'Submit';
	   this.functions.showAlert('Success',  'Your Job has been updated Successfully');
	     this.nav.push(Tabs1Page);
      });
	  
    }
  }
  



  onChange(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.disableSubmit = true;
    this.upLoadImg();
  }  

    validateForm(){
    if(this.locations.company == undefined || this.locations.company == ""){
     this.errorMessage = "Please enter company name"; 
        return false;
    }
    if(this.locations.poster == undefined || this.locations.poster == ""){
     this.errorMessage = "Please enter name"; 
        return false;
    }
    if(this.locations.email == undefined || this.locations.email == ""){
     this.errorMessage = "Please enter email"; 
        return false;
    }

    if(this.locations.phone == undefined || this.locations.phone == ""){
     this.errorMessage = "Please enter phone number"; 
        return false;
    }

    if(this.locations.is_recruiter == undefined || this.locations.is_recruiter == ""){
     this.errorMessage = "Please select are you a recruiter"; 
        return false;
    }

    if(this.locations.company_size == undefined || this.locations.company_size == ""){
     this.errorMessage = "Please select company size"; 
        return false;
    }

    if(this.locations.name == undefined || this.locations.name == ""){
     this.errorMessage = "Please enter job title"; 
        return false;
    }
    if(this.locations.address == undefined || this.locations.address == ""){ 
      this.errorMessage = "Please select location"; 
      return false;
    }

    if(this.locations.experience == undefined || this.locations.experience == ""){ 
      this.errorMessage = "Please enter experience"; 
      return false;
    }
  
  if(this.locations.minsalary == undefined || this.locations.minsalary == ""){
     this.errorMessage = "Please select min salary"; 
        return false;
    }
  if(this.locations.maxsalary == undefined || this.locations.maxsalary == ""){
     this.errorMessage = "Please select max salary"; 
        return false;
    }

    if(this.date == undefined || this.date == ""){
     this.errorMessage = "Please select finish date"; 
        return false;
    }

    if(this.locations.qualification == undefined || this.locations.qualification == ""){
     this.errorMessage = "Please select qualification"; 
        return false;
    }

    
  if(this.locations.description == undefined || this.locations.description == ""){
     this.errorMessage = "Please enter description"; 
        return false;
    }

    if( this.downloadURL == undefined ||  this.downloadURL == ""){
      this.errorMessage = "Please select image"; 
      return false;
    }
  
  
    return true;
  }



  upLoadImg(){

    // Create a root reference
    var fileName = this.selectedFile.name;
    var metadata = { contentType: 'image/jpeg'};
    var storageRef = firebase.storage().ref('/images/' + fileName);
  
    var uploadTask = storageRef.put(this.selectedFile, metadata);

      uploadTask.on('state_changed', (snapshot) => {
        console.log(snapshot);
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (uploadTask.snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      // Handle unsuccessful uploads
    },() => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     this.downloadURL = uploadTask.snapshot.downloadURL;
        this.disableSubmit = false;
        console.log(this.downloadURL);
      console.log("successful");
    });
  }
  
  
  
   ngOnInit() {
       // this.datePicker.show({
       //   date: new Date(),
       //      mode: 'date',
       //       androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
       //   });
   }
   
   
   makeTableOrder(){
    if(this.time && this.date && (this.person != undefined)){
      this.bookingInformation = {
        userID: this.uid,
        status : 'Pending',
        time: this.time,
        person: this.person,
      };
      this.validateInformation();
	  
	  //this.validateInformationAdmin();
	  
    }else{
      this.presentToast('Please fill all data.');
    }
  }
  
  
  //    public closeDatepicker(){
    //    this.datepickerDirective.dismiss();
   // }
	
	
	 public Log(stuff): void {
    console.log(stuff);
  }

  public event(data: Date): void {
    this.localDate = data;
  }
  
  
  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
	
	this.date = date;
	this.is_date_choosed = '1';
	console.log(this.date);
	
  }
  
  
 
  
  
  
  
  
  validateInformation() {

			  
			console.log(this.date);
			var datestring = this.date.getFullYear() + "-" + (this.date.getMonth()+1) + "-" + this.date.getDate();
			console.log(datestring);
			
			 this.service.addNewTableOrders( this.bookingInformation, this.restaurantInformation , datestring).then(tableOrder=>{
                        // this.nav.setRoot('OrderList');     
                                       //  this.presentToast('Your table booked successfully!');
										//this.navCtrl.pop();		
										
										console.log(tableOrder);
									this.validateInformationAdmin(tableOrder.key);
                      });  
	
  }
  
  
  validateInformationAdmin(sameKey) {

			  
			console.log(this.date);
			var datestring = this.date.getFullYear() + "-" + (this.date.getMonth()+1) + "-" + this.date.getDate();
			console.log(datestring);
			
			 this.service.addNewTableAdminOrders( this.bookingInformation, this.restaurantInformation , datestring , sameKey).then(()=>{
                        // this.nav.setRoot('OrderList');     
                                         this.presentToast('Your job posted successfully!');
										this.nav.pop();						   
                      });  
	
  }
  
  
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
