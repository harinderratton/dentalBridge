import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/*
  Generated class for the Function provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Functions {
  loading:any;
  constructor(public alert: AlertController, public loadingController: LoadingController) {

  }
  
  showAlert(title, subTitle){
    let alert = this.alert.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });

    alert.present(alert);
  }

  
  async presentLoading() {
    this.loading = await this.loadingController.create({     
        cssClass:'custom-class',  
        spinner:'crescent'
    });
    this.loading.present();
  }

  
  async stopLoading() {
    if(this.loading != undefined){
      await this.loading.dismiss();
    }
    else{
      var self = this;
      setTimeout(function(){
        self.stopLoading();
      },1000);
    }
  }
  
}

