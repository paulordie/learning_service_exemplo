import { Component, OnInit } from '@angular/core';
import { DepartamentFormComponent } from '../departament-form/departament-form.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  departament: Departament;
  price: number;
  description: string;

  constructor() { }

  ngOnInit() {
  }
  
  save(){

  }

  clear() {
    
  }

}
