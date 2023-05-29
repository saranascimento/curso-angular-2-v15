import {  Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <app-food-list></app-food-list>
  
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

