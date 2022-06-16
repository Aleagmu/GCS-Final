import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groups, Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {
  groups: Group[]

  constructor(private router: Router) { this.groups=Groups }

  ngOnInit() {
  }

}
