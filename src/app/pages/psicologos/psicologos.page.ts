import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users, User } from 'src/app/models/psicologos.model';

@Component({
  selector: 'app-psicologos',
  templateUrl: './psicologos.page.html',
  styleUrls: ['./psicologos.page.scss'],
})
export class PsicologosPage implements OnInit {

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
