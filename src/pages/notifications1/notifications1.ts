import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service1 } from '../../providers/service1';

@IonicPage()
@Component({
  selector: 'page-notifications1',
  templateUrl: 'notifications1.html',
})
export class Notifications1Page {
notifications:any;
errors:any = ['',null,undefined]; 
tab:any;
is_loaded:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service1) {
  	this.tab = this.navCtrl.parent;
  }

  ionViewDidLoad() {
  	this.getNotification();
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

}



