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

  constructor() {}

  ngOnInit(): void {}
 
}