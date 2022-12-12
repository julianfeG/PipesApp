import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'julián';
  nombreUpper: string = 'JULIÁN';
  nombreCompleto: string = 'jUlIán gOnzÁleZ';

  fecha: Date = new Date(); // el día de hoy

}
