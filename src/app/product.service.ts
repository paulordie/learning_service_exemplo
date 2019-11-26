import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { DepartamentService } from './departament.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFormServer: any[] = [
    {id: 1, name: "Laptop", departament_id: 4, price: 40, description: "Laptop Description"},
    {id: 2, name: "Shirt", departament_id: 1, price: 10, description: "Shirt Description"},
    {id: 3, name: "Polo", departament_id: 1, price: 50, description: "Polo Description"},
    {id: 4, name: "Mouse", departament_id: 3, price: 40, description: "Mouse Description"}
  ]

  private products: Product[] = [];
  private nextId: number;

  constructor(
    private departamentService: DepartamentService ) { 
      for (let p of this.dataFormServer){
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        departament: this.departamentService.getDepartamentById(p.id)
      });
      this.nextId = p.id + 1;
    }
  }
    

  getProduct(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    this.products.push({id: this.nextId++, ...p});
    console.log(this.products);
  }
}
