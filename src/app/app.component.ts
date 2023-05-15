import {  Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

  <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributos</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
    <h1>Sara Gomes</h1>
    <h3>Nay Torres</h3>
  </app-diretivas-atributos>

  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
 
}

