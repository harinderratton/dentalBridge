import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service1 } from '../../providers/service1';
import { Chat1Page } from '../chat1/chat1';
import * as firebase from 'firebase/app';
@IonicPage()
@Component({
  selector: 'page-notifications1',
  templateUrl: 'notifications1.html',
})
export class Notifications1Page {
currentUser:any;
notifications:any;
errors:any = ['',null,undefined]; 
tab:any;
is_loaded:boolean=false;

chats:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service1) {
  	this.tab = this.navCtrl.parent;
	this.currentUser = firebase.auth().currentUser;
  }

  ionViewDidLoad() {
  	this.getNotification();
	  this.getChatUser();
    // console.log('ionViewDidLoad NotificationsPage');
  }

  getNotification(){
  	this.service.getNotifications().on('value', snapshot =>{
  		console.log(snapshot)
		this.notifications = [];
  		snapshot.forEach( snap =>{
  			this.service.getUserProfile(snap.val().fromId).on('value', u_snapshot =>{
	  			this.notifications.push({       
		  			id: snap.key,
					type: snap.val().type,
					isRead: snap.val().isRead,
					data_params: snap.val().data_params,
					fromId: snap.val().fromId,
					date: snap.val().date,
					displayName : u_snapshot.val().displayName,
					lastName : u_snapshot.val().lastName,
					photoURL : u_snapshot.val().photoURL
	  			});
  			});
  		});
		this.notifications = this.notifications.reverse();
		var self = this;
		setTimeout(function(){
			self.is_loaded = true;
		},1000);
		console.log(this.notifications);
  	});
  }

  goToJobs(){
  	this.tab.select(2);
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
  


  goToChatPage(id,photoURL,name){

	for(let key of this.chats){
		if(key.fromId == id || key.toId == id){
         
			this.navCtrl.push(Chat1Page,{
				user_name : name,
				user_image : photoURL,
				from_id : id,
				roomId : key.roomId,
				my_id : this.currentUser.uid
			});
			break;
			
		}else{

 
		}

	}

  }



  getChatUser(){
 
	this.service.getChatUsers().on('value', snapshot =>{
 
	  snapshot.forEach( snp =>{
		this.chats.push({       
			  id: snp.key,
			  fromId: snp.val().fromId,
			  toId: snp.val().toId,
			  isRead: snp.val().isRead,
			  roomId: snp.val().roomId,
			  message: snp.val().message,
			  date: snp.val().date
			});
	  });
	  
	  console.log(this.chats)
	});
}

}



