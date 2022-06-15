import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms'

import { User, Users } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public usuarioEncontrado: boolean
  public id: number
  private users: User[]
  public messages: String[]
  messageText = new FormControl('')
  talkingTo = ''

  constructor(private route: ActivatedRoute) { 
    this.users = Users
    this.messages = ["Hola!!"]
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var searchUser = this.users.find(user => user.id == params.id)
      if(searchUser == undefined){
        this.usuarioEncontrado = false
        return        
      }
      this.usuarioEncontrado = true
      this.talkingTo = searchUser.name        
    })
  }

  sendMessage(){
    if(this.messageText.value.length != 0){
      this.messages.push(this.messageText.value)
      this.messageText.setValue("")
    }
  }

}
