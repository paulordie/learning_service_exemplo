import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departament-form',
  templateUrl: './departament-form.component.html',
  styleUrls: ['./departament-form.component.css']
})
export class DepartamentFormComponent implements OnInit {

  depName: string;

  constructor() { }

  ngOnInit() {
  }

  save(){

  }

  clear() {
    
  }

}
