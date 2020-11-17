import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Service } from '../../providers/service';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {
 @ViewChild('content') private content: any;
 fromId:any;
 user_id:any;
 speakerImage: any;
 speakerFname: any;
 speakerLname: any;
 roomId:any;
 errors:any=['', null, undefined,' '];
 chat:any=[];
 message:any;
 loader:any;
  constructor(public navCtrl: NavController, 
    public params: NavParams,
    public service: Service) {
      this.fromId = params.data.fromId;
      this.roomId = params.data.roomId;
      this.user_id = firebase.auth().currentUser.uid;

      console.log('chat page room id', this.roomId)
      
      if(this.roomId!=0){
        this.getChat(this.user_id);
      }
     
      this.getOtherUserProfile();

      console.log(this.genRandromid())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  genRandromid(){
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  scrollToBottom() {
    var self = this;
    setTimeout(function(){
    console.log(self.content)
    if(self.content._scroll != null){
    self.content.scrollToBottom(300);
    }
    },100);
   }

  getChat(user_id){
    this.loader = true;
   
    this.service.getChat(this.roomId).on('value', snapshot =>{
      this.chat = [];
    // console.log('messages',snapshot.val());
    snapshot.forEach( snap =>{
      this.chat.push(snap.val())
      this.loader = false;
      })
      
    });  

  }

  getOtherUserProfile(){
    this.service.getUserProfile(this.fromId).on('value', u_snapshot =>{
      this.speakerFname =  u_snapshot.val().displayName;
      this.speakerLname =  u_snapshot.val().lastName,
      this.speakerImage =  u_snapshot.val().photoURL
    })
  }

  sendMessage(){

    if(this.errors.indexOf(this.message)==-1){
    if(this.roomId!=0){

      this.service.addToChat(this.fromId, this.user_id, this.roomId, this.message); 
      this.scrollToBottom();
      this.message= '';
      
    }else{
      this.roomId = this.genRandromid()
      setTimeout(() => {
        this.service.addToChat(this.fromId, this.user_id, this.roomId , this.message).then(()=>{
          this.getChat(this.user_id);
          this.scrollToBottom();
          this.message= '';
        });
      }, 500);
   
    
    }}
  
  }

}
