import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import firebase from 'firebase';


/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.ss
*/
@Injectable()
export class Auth1 {

  email: any;
  password: any;
	public fireAuth : any;
	//public userProfile:any;
  public customerRole: any;
  
  public customerList:any;

  public restaurantUserInfo: any;
  
  constructor() {

    this.fireAuth = firebase.auth(); 
    //this.addCategory = firebase.database().ref('userProfile/');
  
    this.customerList = firebase.database().ref('/Customer-List'); 
	
	this.restaurantUserInfo = firebase.database().ref('/users');
  }

  login(email: String, password: String){
  	return this.fireAuth.signInWithEmailAndPassword(email,password);
  }

  resetPassword(email:string) {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  register(email:String, password:String, firstname:String, lastname, phone = "", company = "", is_recruiter = "", company_size = ""){
  	return this.fireAuth.createUserWithEmailAndPassword(email, password)
  	.then((newUser) =>{
  		this.restaurantUserInfo.child(newUser.uid).set({
        email: email,
        displayName: firstname,
        lastName: lastname,
        address: "",
        phone: phone,
        company: company,
        is_recruiter: is_recruiter,
        company_size: company_size,
		    facebook: false,
        status: 1
        });
  	});
  }

  updateProfile(uid,data){
      return this.restaurantUserInfo.child(uid).set(data);
  }
  
  logoutUser(): any{
    localStorage.removeItem('IS_LOGGED_IN');
    return this.fireAuth.signOut();
  }

  forgotPass(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }


}
