import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {
  data: any;
  constructor( private activatedRoute:ActivatedRoute

    ) {
  
      // get the data from the URL
  
      this.activatedRoute.paramMap.subscribe(
  
        (data) => {
  
          console.log(data)
  
        }
  
      );
  
        this.data = this.activatedRoute.snapshot.paramMap.get('id');
  
     }

  ngOnInit() {
  }

}
