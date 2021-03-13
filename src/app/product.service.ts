import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any) {
      return this.db.list('/products').push(product);

  }

  getAll() {
    return [
      {title: 'Bread', price: 10, id: 'K-UIS-676'},
      {title: 'Vegetables', price: 20, id: 'K-STF-676'}
    ];
  }


  getProduct(productId){
    return of({title: 'Bread', price: 10, id: 'K-UIS-676'});
  }
}
