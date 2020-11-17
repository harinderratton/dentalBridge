import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedjobPage } from '../savedjob/savedjob';
import { MyprofilePage } from '../myprofile/myprofile';
 import {MessagesPage } from '../messages/messages';
 import { MyJobsPage } from '../my-jobs/my-jobs';
import { ListPage } from '../list/list' ;
import { JobListPage } from '../job-list/job-list' ;
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */ 

@IonicPage()
@Component({
  selector: 'page-tabs', 
  templateUrl: 'tabs.html',  
})
export class TabsPage {
  tab2Root =  SavedjobPage ; 
  tab1Root = JobListPage;
  tab3Root = MyprofilePage;
  tab4Root = MyJobsPage ;
  tab5Root =  MessagesPage ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
	 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}


