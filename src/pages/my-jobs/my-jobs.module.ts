import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyJobsPage } from './my-jobs';
import { AdsenseModule } from 'ng2-adsense';
@NgModule({
  declarations: [
     
  ],
  imports: [
    IonicPageModule.forChild(MyJobsPage),
	 AdsenseModule.forRoot({
      adClient: 'ca-pub-8514227015105788',
      adSlot: 7259870550,
    })
  ],
})
export class MyJobsPageModule {}
