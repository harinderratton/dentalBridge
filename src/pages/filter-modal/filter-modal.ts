import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {
  filter:any = {};
  isActive:boolean = true;
  constructor(public ViewController: ViewController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

    this.filter = this.navParams.get('filters');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

  dismissModal(s){

    if(s == 0) var data = {status: 0, filter: this.filter}
    else var data = {status: 1, filter: this.filter}
    this.ViewController.dismiss(data)

  }

  clearAll(){
    this.filter = {};
    this.isActive = false
    setTimeout(() => {
      this.isActive = true
    }, 0.1);
  }

  checkExperience(){
   console.log(this.filter.isExpeience) 
  }
}
