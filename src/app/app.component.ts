import {  Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

  <!-- <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributos</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
    <h1>Sara Gomes</h1>
    <h3>Nay Torres</h3>
  </app-diretivas-atributos> -->

  <!-- <app-diretivas-atributos></app-diretivas-atributos> -->

  <!-- <app-new-component></app-new-component> -->
  
  <!-- <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button> -->
  <app-output></app-output>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
  }
 
}

