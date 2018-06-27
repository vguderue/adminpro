import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

declare function init_plugins();


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() {

    let promesa = new Promise( (resolve, reject) => {

    let contador = 0;

    let intervalo = setInterval( () => {

        contador += 1;

        if ( contador === 3 ) {
          resolve();
          clearInterval(intervalo);
        }
      }, 1000 );
    });

    promesa.then(
      () => console.log('Termino!')
    ).catch( error => console.error('Error en la promesa', error) );
  }

  ngOnInit() {
    init_plugins();
  }

}
