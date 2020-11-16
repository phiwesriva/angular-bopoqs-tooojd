import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {providedIn: 'root'}
)
export class CartService {
items = [];
 constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  
//getCart(): Promise<CartItem[]> {
  //  return this.httpClient.get(
    //  this.endPointService.getCartItemURL, 
      //{ observe :'response',withCredentials: true }
    //).pipe(
      //  map((httpResponse: HttpResponse<any>) => {
        //    this.updateCount(httpResponse.body.length); // Don't know how your cardItem[] is formatted
        //    return [].concat(httpResponse.body);
        //})
    //).toPromise();
}

//private prodCount: number = 0;
//public prodCountCountChange: Subject<number> = new Subject();
//updateCount(count: number = 0): void {
  //  this.prodCount = count;
    //this.prodCountCountChange.next(this.prodCount);
//}
//}

