import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getCategories() {
    return [
      {name: 'Bread'},
      {name: 'Vegetables'},
      {name: 'Soup'}
    ];
  }
}
