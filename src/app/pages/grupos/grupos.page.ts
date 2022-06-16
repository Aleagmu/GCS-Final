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
  perteneces: Group[]

  constructor(private router: Router) { this.groups=Groups; this.perteneces=[]}

  ngOnInit() {
  }

  unirseGrupo(group: Group){
    this.perteneces.push(group)
  }

  salirGrupo(id: number){
    var filtrado=this.perteneces.filter((item) => item.id !== id)
    this.perteneces=filtrado
  }

}
