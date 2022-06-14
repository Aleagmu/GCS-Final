import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private formData: FormGroup;
  private readOnly: boolean;

  constructor() { }

  ngOnInit() {
      this.readOnly = true;
      this.formData = new FormGroup({
        nombre: new FormControl('Francisco López Muñoz'),
        edad: new FormControl('25'),
        ciudad: new FormControl('Alicante'),
        genero: new FormControl('Hombre'),
        idioma: new FormControl('Español'),
        descripcion: new FormControl('Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum quo nobis culpa doloribus facilis aut laudantium voluptatem, atque dicta, similique et odit totam, cumque consequatur? Ab officia voluptatem itaque.')
      });
  }

}
