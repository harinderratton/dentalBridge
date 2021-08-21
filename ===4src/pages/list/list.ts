import { Component , OnInit } from '@angular/core';
import { Service } from '../../providers/service';

import { NavController, NavParams } from 'ionic-angular';



import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';

import {CallNumber} from '@ionic-native/call-number';

import firebase from 'firebase';

import { JobListPage } from '../job-list/job-list';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  //public chats:any;
  public layouticon:any;
public layout:any;
public items: any;


public chats:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public values:Values, private nativeStorage: NativeStorage, public service: Service, public translateService: TranslateService,public callNumber: CallNumber) {
     // this.chats= dataProvider.getall();
	 
	 /**
	 this.chats = [{
            id: 0,
            name: 'IT job',
            lastText: 'You on your way?',
            face: 'assets/img/glasses.jpg',
            price:'420',
            discout:'30%'
          }, ];
		  */
		  
		  
		  this.chats =[];
		  
	 
	 
	  
	 
	  
	  /**
	  this.chats = [{
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
	  
	  
      console.log('this.chats',this.chats)
	  
	  */
	  
      this.layouticon='list';
      this.layout="list-view";

  }
  openDetail(imgpath,name,lasttext,price,discout){
 /**  this.navCtrl.push(HomeDetailPage,{
     img : imgpath,
     name : name,
     lasttext:lasttext,
     price :price,
     discout:discout,
   });
   */
  }
  changeicon(){
	console.log('change',this.layouticon)
    if(this.layouticon == 'grid'){
      this.layouticon='list';
 	this.layout="list-view";
    }else{
      this.layouticon='grid';
	 this.layout="grid-view";
    }
  }
  
   initializeItems() {
	   
	   this.service.getJobCategoryList().on('value', snapshot =>{
    
				console.log(snapshot.val());
				this.chats = [];
				
					snapshot.forEach( snap =>{
						this.chats.push({
						  id: snap.key,
						  face: snap.val().face,
						  name: snap.val().name,
						  
						});  
					  });
					  
					  
		});
	   
	   
	   this.items = this.chats;
	   
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
			
            this.chats = this.items.filter((data) => {
				
				console.log(data);
				
                return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
	
	goToJobList(category){
	  this.navCtrl.push(JobListPage, {category:category});
  }
  
  
  ngOnInit(){
	  
	  
	  
	  this.service.getJobCategoryList().on('value', snapshot =>{
    
				console.log('qwertyuio',snapshot.val());
				this.chats = [];
				
					snapshot.forEach( snap =>{
						this.chats.push({
						  id: snap.key,
						  face: snap.val().face,
						  name: snap.val().name,
						  
						});  
					  });
					  
					  console.log(this.chats);
					  
					  
		});
		
		
		console.log(this.chats);
	  
  }
  
}
