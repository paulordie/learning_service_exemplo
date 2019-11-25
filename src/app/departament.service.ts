import { Injectable } from '@angular/core';
import { Departament } from './models/departament.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private departaments: Departament[] = [
    {id: 1, name: "Clothing"},
    {id: 2, name: "Books"},
    {id: 3, name: "Electronics"},
    {id: 4, name: "Computers"},
  ]
  constructor() { }

  getDepartaments(): Departament[] {
    return this.departaments;
  }

  addDepartament(d: Departament) {
    this.departaments.push(d);
    console.log(this.departaments);
  }
}
