import { Component } from '@angular/core';
import jsonArchivo from 'src/assets/energia.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Empresa Luz';
  //variable con los datos del json
  Energias: any =jsonArchivo;


}
