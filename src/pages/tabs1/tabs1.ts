import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferListPage } from '../offer-list/offer-list';
import { PostedJobsPage } from '../posted-jobs/posted-jobs';
import { Myprofile1Page } from '../myprofile1/myprofile1';
 import {Messages1Page } from '../messages1/messages1';
 import { Notifications1Page } from '../notifications1/notifications1';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */ 

@IonicPage()
@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {
	
    tab1Root = PostedJobsPage;
	  tab2Root = OfferListPage;
	  tab3Root = Myprofile1Page;
	  tab4Root = Messages1Page;
	  tab5Root = Notifications1Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
	 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}


