import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chat1Page } from '../chat1/chat1';
import { Service1 } from '../../providers/service1';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-messages1',
  templateUrl: 'messages1.html',
})
export class Messages1Page {
chat_users:any;
currentUser:any;
all_from_users:any;
errors:any = ['',null,undefined]; 
is_loaded:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public service: Service1) {
  	this.currentUser = firebase.auth().currentUser;
  }

  ionViewDidEnter() {
    this.getChatUser();
  }

  goToChatPage(id,photoURL,name,roomId){
	this.navCtrl.push(Chat1Page,{
		user_name : name,
		user_image : photoURL,
		from_id : id,
		roomId : roomId,
		my_id : this.currentUser.uid
	});
  }

  getChatUser(){
  	var user_id = this.currentUser.uid;
  	this.service.getChatUsers().on('value', snapshot =>{
  		console.log(snapshot)
  		this.is_loaded = false;
  		this.all_from_users = [];
		this.chat_users = [];
		var all_spans = [];

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
		all_spans.reverse();
  		all_spans.forEach( snap =>{
  			var other_id = snap.fromId;
  			if(snap.fromId == user_id){
  				other_id = snap.toId;
  			}
  			if(this.all_from_users.indexOf(other_id) == -1){
  				this.all_from_users.push(other_id);
	  			this.service.getUserProfile(other_id).on('value', u_snapshot =>{
		  			this.service.getLastMessage(snap.roomId).once('child_added', m_snapshot =>{
		  				console.log(m_snapshot.val())
			  			this.chat_users.push({       
				  			id: snap.id,
							fromId: other_id,
							isRead: snap.isRead,
							roomId: snap.roomId,
							message: m_snapshot.val().message,
							date: m_snapshot.val().date,
							displayName : u_snapshot.val().displayName,
							lastName : u_snapshot.val().lastName,
							photoURL : u_snapshot.val().photoURL
			  			});
		  			});
	  			});
  			}
  		});
		// this.chat_users = this.chat_users.reverse();
		console.log(this.chat_users);
		var self = this;
		setTimeout(function(){
			self.is_loaded = true;
		},1000);
  	});
  }
}

