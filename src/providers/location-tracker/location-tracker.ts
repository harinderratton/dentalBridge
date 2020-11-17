import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';

import { Service } from '../service';

import firebase from 'firebase';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';



declare var google;
declare var map;
declare var infoWindow;

/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationTrackerProvider {
	
	public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
  public timestamp: any; 
  userList: any;
 
  constructor(public zone: NgZone, public http: HttpClient,public backgroundGeolocation: BackgroundGeolocation, public geolocation: Geolocation,public service: Service) {
 
  }
 
  startTracking() {
		// Background Tracking
	
  }
 
  stopTracking() {
	
 
  }


}
