import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {TimeAgoPipe} from 'time-ago-pipe';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home1Page } from '../pages/home1/home1';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs1Page } from '../pages/tabs1/tabs1';
import { ListPage } from '../pages/list/list';
import { JobListPage } from '../pages/job-list/job-list';
import { JobDetailsPage } from '../pages/job-details/job-details';
import { JobDetails1Page } from '../pages/job-details1/job-details1';
import { RegisterPage } from '../pages/register/register';
import { Register1Page } from '../pages/register1/register1';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ChatPage } from '../pages/chat/chat';
import { Chat1Page } from '../pages/chat1/chat1';
import { MessagesPage } from '../pages/messages/messages';
import { NotificationsPage } from '../pages/notifications/notifications';
import { Notifications1Page } from '../pages/notifications1/notifications1';
import { SavedjobPage } from '../pages/savedjob/savedjob';
import { EducationPage } from '../pages/education/education';
import { ProfilePage } from '../pages/profile/profile';
import { EducationListPage } from '../pages/education-list/education-list';
import { JobOfferDetailsPage } from '../pages/job-offer-details/job-offer-details';
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { Myprofile1Page } from '../pages/myprofile1/myprofile1';
import { GoogleMaps } from '@ionic-native/google-maps';
import { PasswordPage } from '../pages/password/password';
import { EditEducationPage } from '../pages/edit-education/edit-education';

import { AppliedInfoPage } from '../pages/applied-info/applied-info';
import { MyJobsPage } from '../pages/my-jobs/my-jobs';
import { ChooseEduPage } from '../pages/choose-edu/choose-edu';
import { AddDescriptionPage } from '../pages/add-description/add-description';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { PostedJobsPage } from '../pages/posted-jobs/posted-jobs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DatePickerModule } from 'ionic3-datepicker';
import { Messages1Page } from '../pages/messages1/messages1';
import { YoutubePipe } from '../pipes/youtube/youtube';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { UserTypePage } from '../pages/user-type/user-type';
import { OfferListPage } from '../pages/offer-list/offer-list';
import { ChangeStatusPage } from '../pages/change-status/change-status';
import { EditJobPage } from '../pages/edit-job/edit-job';
import { AddJobPage } from '../pages/add-job/add-job';
import { ViewProfilePage } from '../pages/view-profile/view-profile';
/*----------------PROVIDERS & NATIVES---------------------*/
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';
import { Auth } from '../providers/auth';
import { EventsService } from '../providers/events/events.service';
import { Auth1 } from '../providers/auth1';
import { Config } from '../providers/config';
import { Values } from '../providers/values';
import { Service } from '../providers/service';
import { Service1 } from '../providers/service1';
import { Facebook } from '@ionic-native/facebook';
import { WpService } from '../providers/wp-service';
import { Functions } from '../providers/functions/functions';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { PayPal } from '@ionic-native/paypal';
import { Stripe } from '@ionic-native/stripe';
import { NativeStorage } from '@ionic-native/native-storage';
import { DatePicker } from '@ionic-native/date-picker';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import {CallNumber} from '@ionic-native/call-number';
import { ParallaxDirective } from '../directives/parallax/parallax';
import { AdsenseModule } from 'ng2-adsense';
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { FilterModalPage} from '../pages/filter-modal/filter-modal'
import { SupportPage } from '../pages/support/support';
import { EmailComposer } from '@ionic-native/email-composer';
@NgModule({
  declarations: [
	SupportPage,
	FilterModalPage,
	JobOfferDetailsPage,
	ViewProfilePage,
	AddJobPage,
	EditJobPage,
	ChangeStatusPage,
	OfferListPage,
	Messages1Page,
	PostedJobsPage,
	TimeAgoPipe,
    MyApp,
	TabsPage,
	Tabs1Page,
	SavedjobPage,
	MessagesPage,
	NotificationsPage,
	Notifications1Page,
	ChatPage,
	Chat1Page,
	ForgotpasswordPage,
	HomePage,
	Home1Page,
    ListPage,
	JobListPage,
	JobDetailsPage,
	JobDetails1Page,
	RegisterPage,
	Register1Page,
	EducationPage,
	ProfilePage,
	EducationListPage,
	YoutubePipe,
	// ParallaxDirective,
	MyprofilePage,
	Myprofile1Page,
	PasswordPage,
	EditEducationPage,
	AppliedInfoPage,
	MyJobsPage,
	ChooseEduPage,
	AddDescriptionPage,
	UserTypePage
  ],
  imports: [

	NgxGeoautocompleteModule.forRoot(),
    BrowserModule,
	HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
	DatePickerModule,
	AdsenseModule.forRoot({
      adClient: 'pub-8514227015105788',
      adSlot: 7259870550,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
	SupportPage,
	FilterModalPage,
	JobOfferDetailsPage,
	ViewProfilePage,
	AddJobPage,
	EditJobPage,
	ChangeStatusPage,
	OfferListPage,
	Messages1Page,
	PostedJobsPage,
	UserTypePage,
    MyApp,
	TabsPage,
	Tabs1Page,
	SavedjobPage,
	MessagesPage,
	NotificationsPage,
	Notifications1Page,
	ChatPage,		
	Chat1Page,	
	ForgotpasswordPage,
	HomePage,
	Home1Page,
	JobListPage,
    ListPage,
	JobDetailsPage,
	JobDetails1Page,
	RegisterPage,
	Register1Page,
	EducationPage,
	ProfilePage,
	EducationListPage,
	MyprofilePage,
	Myprofile1Page,
	PasswordPage,
	EditEducationPage,
	AppliedInfoPage,
	MyJobsPage,
	ChooseEduPage,
	AddDescriptionPage,
  ],
  providers: [
	EmailComposer,
	Printer,
	AdMobPro,
	AdMobFree,
	GoogleMaps,
	InAppBrowser,
	SpinnerDialog,
    StatusBar,
	SplashScreen,
	EventsService,
	Auth,
	Auth1,
	Config,
    NativeStorage,
    Values,
	Service,
	Service1,
    Facebook,
    WpService,
    Functions,
	CallNumber,
    GooglePlus,
    SocialSharing,
    PayPal,
    Stripe,
	Geolocation,
	BackgroundGeolocation,
    LocationTrackerProvider,
	DatePicker,	
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
 