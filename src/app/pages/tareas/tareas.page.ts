import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  public tareas: any

  constructor() {
    this.tareas=["tarea1", "tarea2", "tarea3", "tarea4",]
  }


  search(){
    var valor=(<HTMLInputElement>document.getElementById("input")).value;
    
    if (this.tareas.includes(valor.toLocaleLowerCase().replace(" ", ""))){
      valor = valor.toLocaleLowerCase().replace(" ", "");
      (<HTMLInputElement>document.getElementById("input")).setAttribute("value", valor);
      var url = 'tarea/' + valor;
      window.location.href = url;
    }
    else{
      alert("¡Error! La tarea '" + valor + "' no encontrada")
    }
  }


  ngOnInit() {
  }

}
