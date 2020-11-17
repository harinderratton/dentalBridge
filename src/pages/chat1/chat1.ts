import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service1 } from '../../providers/service1';

@IonicPage()
@Component({
  selector: 'page-chat1',
  templateUrl: 'chat1.html',
})
export class Chat1Page {
@ViewChild('content') private content: any;
from_id:any;
my_id:any;
chats:any;
user_name:any;
user_image:any;
message:any;
roomId:any;
errors:any = ['',null,undefined];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service1) {
  	this.my_id = navParams.get('my_id');
  	this.from_id = navParams.get('from_id');
  	this.user_name = navParams.get('user_name');
  	this.user_image = navParams.get('user_image');
  	this.roomId = navParams.get('roomId');
  }

  ionViewDidLoad() {
    this.getChat();
  }

  getChat(){
  	this.service.getChat(this.roomId).on('value', snapshot =>{
		this.chats = [];
  		snapshot.forEach( snap =>{
  			this.chats.push({       
	  			id: snap.key,
				fromId: snap.val().fromId,
				toId: snap.val().toId,
				isRead: snap.val().isRead,
				message: snap.val().message,
				date: snap.val().date
  			});
  		});
  		this.scrollToBottom();
  	});
  }

  send(){
  	if(this.errors.indexOf(this.message) == -1){
  		var chat_data = {
	  		fromId: this.my_id,
		    toId: this.from_id,
		    message: this.message,
		    roomId: this.roomId,
		    isRead: '0',
		    date: Date.now()
	  	}
		this.message = "";
	  	this.service.addChat(chat_data);
  	}
  }

  scrollToBottom() {
  	var self = this;
  	setTimeout(function(){
  		console.log(self.content)
  		if(self.content._scroll != null){
  			self.content.scrollToBottom(300);
  		}
  	},100);
  }

}

