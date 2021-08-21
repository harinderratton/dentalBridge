import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
import { ListPage } from '../list/list';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import firebase from 'firebase';

/**
 * Generated class for the AppliedInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applied-info',
  templateUrl: 'applied-info.html',
})
export class AppliedInfoPage {

  jobDetails: any;

  constructor(
      public nav: NavController,
      public navParam: NavParams,
      public service: Service,
      public translateService: TranslateService,
      private iab: InAppBrowser
      ) {
	  
	  this.jobDetails = navParam.data.jobDetails;
	  
	  console.log('appliedddddd',this.jobDetails);
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppliedInfoPage');
  }
  
  backToHome(){
	  this.nav.setRoot(ListPage);
  }

  viewCV(cv){
    const browser = this.iab.create(cv);
  }
}
