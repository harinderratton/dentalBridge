import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobDetails1Page } from './job-details1';
import { AdsenseModule } from 'ng2-adsense';
@NgModule({
  declarations: [
    
  ],
  imports: [
    IonicPageModule.forChild(JobDetails1Page),
	 AdsenseModule.forRoot({
      adClient: 'ca-pub-8514227015105788',
      adSlot: 7259870550,
    })
  ],
})
export class JobDetails1PageModule {}
