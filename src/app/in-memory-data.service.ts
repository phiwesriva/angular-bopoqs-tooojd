import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
//import { Hero } from './hero';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //const heroes = [
     // { id: 11, name: 'Dr Nice' },
     // { id: 12, name: 'Narco' },
      //{ id: 13, name: 'Bombasto' },
      //{ id: 14, name: 'Celeritas' },
      //{ id: 15, name: 'Magneta' },
      //{ id: 16, name: 'RubberMan' },
      //{ id: 17, name: 'Dynama' },
      //{ id: 18, name: 'Dr IQ' },
      //{ id: 19, name: 'Magma' },
      //{ id: 20, name: 'Tornado' }
    //];

    const product = [
  {
    name: 'Dress',
    price: 799,
    /*Size : 'S' 'M' 'L',*/
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Long dress',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Short dress',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Sleaveless top',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Boop tube dop',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Tip Top ',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Bottom good',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Bottom',
    price: 299,
    description: 'A great phone with one of the best cameras'
  }
];
    //return {heroes};
    return {product};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  //genId(heroes: Hero[]): number {
    //return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  genId(product: Products[]): number {
    return product.length > 0 ? Math.max(...product.map(products => products.id)) + 1 : 11;
  }
}