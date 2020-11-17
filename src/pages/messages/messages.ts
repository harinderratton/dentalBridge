import { Component , OnInit } from '@angular/core';
import { Service } from '../../providers/service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import {CallNumber} from '@ionic-native/call-number';
import { AppliedInfoPage } from '../applied-info/applied-info';
import { Functions } from '../../providers/functions/functions';
import firebase from 'firebase';
import { ChatPage } from '../chat/chat';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
/**
 * Generated class for the AddDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})

export class MessagesPage {
  errors:any=['', null, undefined,' '];
  public all_from_users : any;
  chat_users:any;
  loader:any=false;
  toid: any;
  mode:any;
  hisRoomid:any=0;
  responseCame:any=false;
  constructor(
    public params: NavParams,
			public values:Values,
			private nativeStorage: NativeStorage,
			public navCtrl: NavController,
			public navParams: NavParams,
			public service: Service, 
			public translateService: TranslateService,
			public callNumber: CallNumber, 
      public functions: Functions,
      private spinnerDialog: SpinnerDialog
		) {
        var user_id = firebase.auth().currentUser.uid;
        this.toid = params.data.toId;
        this.mode = params.data.mode;
        this.getInbox(user_id);
     }

      goToChatPage(fromId, roomId)
    {
        this.navCtrl.push(ChatPage, {
          fromId: fromId,
          roomId: roomId          
        });
    }

    getInbox(user_id){
      this. responseCame = false;
      this.loader = true
      var user_id = user_id;
      this.service.getInbox(user_id).on('value', snapshot =>{
      
      this.all_from_users = [];
      this.chat_users = [];
      var all_spans = [];
      var i = 0
       
      snapshot.forEach( snp =>{
      all_spans.push({      
          id: snp.key,
          fromId: snp.val().fromId,
          toId: snp.val().toId,
          isRead: snp.val().isRead,
          roomId: snp.val().roomId,
          message: snp.val().message,
          date: snp.val().date
        });
      });

      all_spans.reverse();

      if(all_spans.length!=0){
      

        all_spans.forEach( snap =>{
         
          var other_id = snap.fromId;
          if(snap.fromId == user_id){
          other_id = snap.toId;
          }
          if(this.all_from_users.indexOf(other_id) == -1){

            if(other_id == this.toid){
               this.hisRoomid =  snap.roomId
            }

          this.all_from_users.push(other_id);
          this.service.getUserProfile(other_id).on('value', u_snapshot =>{
          this.service.getLastMessage(snap.roomId).once('child_added', m_snapshot =>{
          
          this.chat_users.push({      
                id: snap.id,
                fromId: other_id,
                isRead: snap.isRead,
                roomId: snap.roomId,
                message: m_snapshot.val().message,
                date: m_snapshot.val().date,
                displayName : u_snapshot.val().displayName,
                lastName : u_snapshot.val().lastName,
                photoURL : u_snapshot.val().photoURL
            });
            i++
            console.log('all_spans.length', all_spans.length)
            if(i == this.all_from_users.length){
              console.log(this.mode)
              if(this.mode == 1){
                setTimeout(() => {
                  this.mode = 12;
                  
                  this.navCtrl.push(ChatPage, {
                    fromId: this.toid,
                    roomId: this.hisRoomid          
                  });
                }, 500);
      
              }
            }

          

          });
        });

        
    



          }
  
       
  
          });


      }else{

        if(this.mode == 1){
          this.mode = 12;
          this.navCtrl.push(ChatPage, {
            fromId: this.toid,
            roomId: 0          
          });
        }


      }
     
     
 
      setTimeout(()=>{
      this.loader = false;
      this.responseCame = true;
      },1000);
        });
       }
}

