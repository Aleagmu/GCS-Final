import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  chats: User[]

  constructor(private router: Router) {
    this.chats = Users
   }

  ngOnInit() {
  }
  navigateToChat(id: number){
    this.router.navigate(['/chat/' + id])
  }

}
