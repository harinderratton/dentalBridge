// poster code
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { JobDetailsPage } from '../pages/job-details/job-details';
import { RegisterPage } from '../pages/register/register';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ChatPage } from '../pages/chat/chat';
import { MessagesPage } from '../pages/messages/messages';
// import { NotificationsPage } from '../pages/notifications/notifications';
// import { ProfilePage } from '../pages/profile/profile'; 
// import { MyprofilePage } from '../pages/myprofile/myprofile';
// import { TabsPage } from '../pages/tabs/tabs';
// import { MyJobsPage } from '../pages/my-jobs/my-jobs';
// import { AddJobPage } from '../pages/add-job/add-job';
// import { PostedJobsPage } from '../pages/posted-jobs/posted-jobs';
// import { EditJobPage } from '../pages/edit-job/edit-job';
// import { OfferListPage } from '../pages/offer-list/offer-list';
// import { JobOfferDetailsPage } from '../pages/job-offer-details/job-offer-details';
// import { ChangeStatusPage } from '../pages/change-status/change-status';
// import { ViewProfilePage } from '../pages/view-profile/view-profile';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DatePickerModule } from 'ionic3-datepicker';
import { Auth } from '../providers/auth';
import { EventsService } from '../providers/events/events.service';
import { Config } from '../providers/config';
import { Service } from '../providers/service';
// import { Facebook } from '@ionic-native/facebook';
import { WpService } from '../providers/wp-service';
import { Functions } from '../providers/functions/functions';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PayPal } from '@ionic-native/paypal';
import { Stripe } from '@ionic-native/stripe';
import { NativeStorage } from '@ionic-native/native-storage';
import { DatePicker } from '@ionic-native/date-picker';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import {CallNumber} from '@ionic-native/call-number';
import {TimeAgoPipe} from 'time-ago-pipe';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AddJobPage } from '../pages/add-job/add-job';
//poster code
import { Facebook } from '@ionic-native/facebook';

import { Component, ViewChild } from '@angular/core';
import { AlertController  } from 'ionic-angular';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Values } from '../providers/values';
import { TranslateService } from '@ngx-translate/core';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { Home1Page } from '../pages/home1/home1';
import { UserTypePage } from '../pages/user-type/user-type';
import { ListPage } from '../pages/list/list';
import { JobListPage } from '../pages/job-list/job-list';
import { EducationPage } from '../pages/education/education';
import { ProfilePage } from '../pages/profile/profile';    
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { Myprofile1Page } from '../pages/myprofile1/myprofile1';
import { EducationListPage } from '../pages/education-list/education-list';
import { PasswordPage } from '../pages/password/password';
import { MyJobsPage } from '../pages/my-jobs/my-jobs';
import { NotificationsPage } from '../pages/notifications/notifications';
import { Notifications1Page } from '../pages/notifications1/notifications1';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs1Page } from '../pages/tabs1/tabs1';
 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('nav') navCtrl: NavController;
  rootPage: any = UserTypePage;
  tab:any;
  pages: Array<{title: string, component: any, icon: string}>;
  userType:any;
  
  public fireAuth : any;
  
  public userProfiles: any;

  constructor(  private fb: Facebook, public events:EventsService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, public values: Values, public translateService: TranslateService) {
    
   
    // const bannerConfig: AdMobFreeBannerConfig = {
 
    //   autoShow: true,
    //   id: 'ca-app-pub-8514227015105788/1366272582'
    //  };
    //  this.admobFree.banner.config(bannerConfig);
     
    //  this.admobFree.banner.prepare()
    //    .then(() => {
 
    //    })
    //    .catch(e => console.log(e));
 
    
    var userType = localStorage.getItem('userType');
    this.userType = userType
    this.events.getObservable().subscribe((data) => {
      var userType = localStorage.getItem('userType');
      this.userType = userType
      this.menuOptions();
    });
  
 
	  this.translateService.setDefaultLang('english');
    firebase.initializeApp({
      apiKey: "AIzaSyA8SsfmxaWpf_8jXUalfA1OT3lnmUQBMRo",
      authDomain: "job-poster-99974.firebaseapp.com",
      databaseURL: "https://job-poster-99974.firebaseio.com",
      projectId: "job-poster-99974",
      storageBucket: "job-poster-99974.appspot.com",
      messagingSenderId: "516846452731"
     });
	  
    this.initializeApp();
	
	
	this.fireAuth = firebase.auth();
	
	firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          
          this.values.userRole = firebase.database().ref('/users').child(user.uid).on('value', snapshot =>{
            if(snapshot.val()){
                this.userProfiles = snapshot.val();
            }
          
          });
		}
	});

this.menuOptions()

	
	
	 const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.values.isLoggedIn = true;
          this.values.userRole = firebase.database().ref('/Customer-Role').child(user.uid).on('value', snapshot =>{
            if(snapshot.val()){
                this.values.userRole = snapshot.val().role;
             }
          });
        }
    });
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
	//   this.pushsetup();
  //   });
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('ready')
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#205cb0');
      this.splashScreen.hide();
      var userType = localStorage.getItem('userType');
      this.userType = userType
    });
  }

  // openPage(page) {
  //   if(page == JobListPage){

  //     this.nav.setRoot(TabsPage, {tabIndex: 0});
      
  //   }else{
  //     this.nav.setRoot(page);
  //   }
 
  // }
  
    logOut(){
      if(this.userType == 'manager'){
        this.nav.setRoot(Home1Page);
      }else{
        this.nav.setRoot(HomePage);
      }
      localStorage.clear();
      this.fb.logout();
      this.fireAuth.signOut();
      console.log('logged out');
    
  }
  
  
    pushsetup() {
			
  }
  
  /// manager

  messages(){
    this.nav.setRoot(MessagesPage);
  }

  logOutManager(){
	  this.fireAuth.signOut();
	  localStorage.removeItem('IS_LOGGED_IN');
	  this.nav.setRoot(HomePage);
  }
  ///

  openPage(page) {
    if(this.userType == 'manager'){

      if(page == Tabs1Page ){

        this.nav.setRoot(Tabs1Page, {tabIndex: 0});
        
      }else{
        this.nav.setRoot(page);
      }

    }else{

      if(page == JobListPage ){

        this.nav.setRoot(TabsPage, {tabIndex: 0});
        
      }else{
        this.nav.setRoot(page);
      }


    }

 
  }

  menuOptions(){

    if(this.userType == 'manager'){
      this.pages = [ 
    
        { title: 'Home', component: Tabs1Page,  icon: 'home' },
        { title: 'Add Job', component: AddJobPage, icon: 'create' },
        { title: 'Notifications', component: Notifications1Page,icon: 'notifications'},
        { title: 'My Profile', component: Myprofile1Page ,icon: 'person'},
         ]; 
  
     }else{
  
      this.pages = [
        
        { title: 'Home', component: JobListPage , icon: 'home'},
        { title: 'My Profile', component: MyprofilePage ,icon: 'person'},
        { title: 'Education List', component: EducationListPage ,icon: 'school'},
        { title: 'Add Education', component: EducationPage,icon: 'create'},
        { title: 'My Jobs', component: MyJobsPage,icon: 'folder-open'},
        { title: 'Notifications', component: NotificationsPage,icon: 'notifications'},
        
        ];
  
     }

  }
 
}
