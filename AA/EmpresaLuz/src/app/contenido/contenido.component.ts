import { Component, OnInit } from '@angular/core';
import jsonArchivo from 'src/assets/energia.json'

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  energias: any =jsonArchivo;

  leer(){
    console.log(this.energias);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
