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
  private buttonText: string;
  private darkModeInput: string;
  private darkModeButtons: string;
  private darkMode: boolean;

  constructor() { }

  ngOnInit() {
      this.readOnly = true;
      this.darkMode = true;
      this.buttonText = 'Modificar';

      this.darkModeButtons = 'dark';
      this.darkModeInput = 'light';

      this.formData = new FormGroup({
        nombre: new FormControl('Francisco López Muñoz'),
        edad: new FormControl('25'),
        ciudad: new FormControl('Alicante'),
        genero: new FormControl('Hombre'),
        idioma: new FormControl('Español'),
        descripcion: new FormControl('Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum quo nobis culpa doloribus facilis aut laudantium voluptatem, atque dicta, similique et odit totam, cumque consequatur? Ab officia voluptatem itaque.')
      });
  }
  readOnlyFunc() {
    this.readOnly = !this.readOnly;
    if(this.readOnly){
      this.buttonText = 'Modificar';
    }
    else{
      this.buttonText = 'Confirmar';
    }
  }
  switchDarkMode(){
    this.darkMode = !this.darkMode;
    if(this.darkMode){
      this.darkModeButtons = 'dark';
      this.darkModeInput = 'light';
    }
    else{
      this.darkModeButtons = 'light';
      this.darkModeInput = 'dark';
    }

  }
}
