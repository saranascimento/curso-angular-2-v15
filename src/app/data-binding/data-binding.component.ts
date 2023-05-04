import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Sara";
  public idade: number = 29;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  public imgTitle: string = "Property Binding";

  public position: {x: number, y: number} = {x: 0, y: 0};
  
  constructor() {}

  ngOnInit(): void {  }

  public alertaInfoSemParametro(){
    alert("alertaInfoSemParametro")
  } 
  public alertaInfoComParametro(valor: string){
    alert(valor)
  } 
  public alertaInfoMouseEvent(valor: MouseEvent){
    console.log(valor)
  } 

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  } 
   

 
}