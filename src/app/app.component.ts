import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <router-outlet></router-outlet>
  
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1;

  constructor() {}

  public adicionar(): number {
    return this.valor +=1;
  }

  ngOnInit(): void {}
  
  ngDoCheck(): void {
    console.log("DoCheck")
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }
}


/* 
• ngDoCheck: executado a cada mudança que o ngOnChange não detecta;

Existem outros quatros hooks dentro do ngDoCheck:

• ngAfterContentInit: sempre que um conteúdo vindo de uma fonte externa do componente é inserido;

• ngAfterContentChecked: quando o conteúdo externo é verificado;

• ngAfterViewInit: executado logo após os dados dos filhos e do próprio componente ser inicializado;

• ngAfterViewChecked: sempre que é detectado uma alteração do conteúdo é chamado esse cara.
*/