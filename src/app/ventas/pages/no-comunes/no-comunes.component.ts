import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Julián';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Gustavo', 'Antonio', 'Andrea'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  };

  cambiarCliente() {
    this.nombre = this.nombre === 'Julián' ? 'Karen' : 'Julián';
    this.genero = this.genero === 'masculino' ? 'femenino' : 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Julián',
    edad: 23,
    direccion: 'Bogotá, Colombia'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(2000);  //0,1,2,3,4,5,6...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
