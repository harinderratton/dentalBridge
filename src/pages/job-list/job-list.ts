import { Component , OnInit, ViewChild, ElementRef } from '@angular/core';
import { Service } from '../../providers/service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";
import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	LatLng,
	MarkerOptions,
	Marker
  } from "@ionic-native/google-maps";
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';
import { NotificationsPage } from '../notifications/notifications';
import { JobDetailsPage } from '../job-details/job-details';
import { Platform } from "ionic-angular";
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
declare var google;
@IonicPage()
@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {

	//@ViewChild('map') element:any;
	@ViewChild('map') mapElement: ElementRef;
	markerOptions:any;
	coordinates:any
	selectedItem:any = 'item1';
	height: any= 0;
	lat: number = 51.678418;
	lng: number = 7.809007;
	public id : any;
	public items: any;
	savedIds:any=[];
	allIds:any=[];
	is_loaded:any=false;
	public locations:any = {};
	responseCame:any= false;

  constructor( private admob: AdMobPro, public plt: Platform, public googleMaps: GoogleMaps, public values:Values, private nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams,public service: Service, public translateService: TranslateService,public callNumber: CallNumber) {
	  
	let adId;
	if(this.plt.is('android')) {
	  adId = 'ca-app-pub-8514227015105788/1366272582';
	} else if (this.plt.is('ios')) {
	  adId = 'YOUR_ADID_IOS';
	}
	this.admob.prepareInterstitial({adId: adId})
	  .then(() => { this.admob.showInterstitial(); });


	  this.id = 'all';
	   this.locations = [];
	  
	  //console.log(this.params.data.items);
	  this.responseCame = false;
	  this.service.getJobsByCategory(this.id).on('value', snapshot =>{
  		//this.productsList = [];
		this.locations = [];

  		snapshot.forEach( snap =>{
  			this.locations.push({
          
  			id: snap.key,
			address: snap.val().address,
			category: snap.val().category,
			description: snap.val().description,
			employer_id: snap.val().employer_id,
			face: snap.val().face,
			job_id: snap.val().job_id,
			localdate: snap.val().localdate,
			maxsalary: snap.val().maxsalary,
			minsalary: snap.val().minsalary,
			name: snap.val().name,
			phone: snap.val().phone,
			reverseOrder: snap.val().reverseOrder,
			timeStamp: snap.val().timeStamp,
			user_id: snap.val().user_id,
			experience: snap.val().experience,
			lat: snap.val().lat,
			lng: snap.val().lng,

  			});
  		});
		
		this.locations = this.locations.reverse();
		console.log(this.locations);
		this.is_loaded = true;
		setTimeout(() => {
			this.initMap();
		}, 1000);

		this.responseCame = true;
		
  	});
	  
		this.getSavedJobs();
	  
  }

  ionViewDidLoad() {
    
  }
  	goToNotifications()
	{
this.navCtrl.push(NotificationsPage);
	}	
  goToJobDetails(locations){
	  
	  console.log(this.id);
	  
	  this.navCtrl.push(JobDetailsPage, {locations:locations,categoryId:this.id});
  }
  map:any;
all_markers:any=[];
  
  initializeItems() {
	   
		  this.service.getJobsByCategory(this.id).on('value', snapshot =>{
  		//this.productsList = [];
		this.locations = [];

  		snapshot.forEach( snap =>{
  			this.locations.push({
			id: snap.key,
			address: snap.val().address,
			category: snap.val().category,
			description: snap.val().description,
			employer_id: snap.val().employer_id,
			face: snap.val().face,
			job_id: snap.val().job_id,
			localdate: snap.val().localdate,
			maxsalary: snap.val().maxsalary,
			minsalary: snap.val().minsalary,
			name: snap.val().name,
			phone: snap.val().phone,
			reverseOrder: snap.val().reverseOrder,
			timeStamp: snap.val().timeStamp,
			user_id: snap.val().user_id,
			experience: snap.val().experience,
			lat: snap.val().lat,
			lng: snap.val().lng,
		 
  			});
  		});
		
		this.locations = this.locations.reverse();
		console.log(this.locations);
		console.log('on search......')
	
  	});
	   
	   
	   this.items = this.locations;
	   
	 
    }
  
  
  searchItem(ev: any) {
		this.initializeItems();
		console.log(this.items);
		console.log(ev);
		let val = ev.target.value;
		console.log('vvvvvvvvvvvvvvv',val);
        if (val && val.trim() != '') {
                this.locations = this.items.filter((data) => {
				console.log(data);	
				return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
				
			})
			setTimeout(() => {
				for (var i = 0; i < this.all_markers.length; i++) {
					this.all_markers[i].setMap(null);
				}
				this.all_markers = [];
		
				this.locations.forEach((loc) => {
		
					console.log('its loc', loc)
					let coordinates: LatLng = new LatLng(Number(loc.lat),Number(loc.lng));
			
					 let marker = new google.maps.Marker({
						map: this.map,
						animation: google.maps.Animation.DROP,
						position: coordinates,
						title: loc.name,
					});
			
					this.all_markers.push(marker);
			
					   
			
			   let infoWindow = new google.maps.InfoWindow({
				content: loc.name
			  });
				  });

			}, 1000);
        }
	}
	
	saveJob(id, user_id){
		this.service.addSavedJobs(id, user_id)
	}

	unsaveJob(jobId){
		var id;
		var snapKey;
		 for(let key of this.savedIds){

			if(key.jobId == jobId){
				id = key.id;
				snapKey = key.snapKey;
				
				this.service.removeSavedJobs(id, snapKey);
				break;
			}
		 }
	}

	getSavedJobs(){
		this.service.getSavedJobs().on('value', snapshot =>{
			this.savedIds = [];
			this.allIds =[];
			snapshot.forEach( snap =>{

			this.savedIds.push({
				jobId: snap.val().jobId,
				id: snap.val().id,
				snapKey: snap.key  
			});

			this.allIds.push(
				snap.val().jobId,
			 );
			})
		})
	}

 

 


  initMap() {

	//let map: GoogleMap = GoogleMaps.create(this.mapElement.nativeElement);
	var f_lat= -34.9290;
	var f_lng= 138.6010;
	if(this.locations.length > 0){
		f_lat = this.locations[0]['lat'];
		f_lng = this.locations[0]['lng'];
	}
	let latLng = new google.maps.LatLng(Number(f_lat), Number(f_lng));
	let mapOptions = {
		center: latLng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  }

	  console.log('Hello ji');
  
	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	console.log(this.locations);
	var self = this
 
	 
	this.locations.forEach((loc) => {


		var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<p id="firstHeading" class="firstHeading">'+loc.name+'</p>'+
		'</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
		 
		  });
		let coordinates: LatLng = new LatLng(Number(loc.lat),Number(loc.lng));

		 let marker = new google.maps.Marker({
			map: this.map,
			position: coordinates,
			// label: loc.name,
			title: loc.name
		});

		infowindow.open(this.map, marker);
		//   marker.addListener('click', function() {
		
		
		//   });

		// marker.on(GoogleMapsEvent.INFO_CLICK).subscribe((res) => {
        //     this.navCtrl.push(JobDetailsPage, {locations:loc,categoryId:this.id});
		// 	});
			
	 

 

	 	// this.all_markers.push(marker);
		// 	let infoWindow = new google.maps.InfoWindow({
		// 		content: loc.name
		// 	});

		marker.addListener('click', function() {
			self.navCtrl.push(JobDetailsPage, {locations:loc,categoryId:self.id});
		   });
		 
	  });
	   

 

}


  

}


 
