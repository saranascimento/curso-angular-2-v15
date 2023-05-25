import {  Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h1>{{getDados.idade}}</h1>
  </ng-template>

  <app-output (enviarDados)="setDados($event)"></app-output>
  
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public getDados: { nome: string, idade: number } | undefined; 

  constructor() {}

  ngOnInit(): void {}

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }
 
}

